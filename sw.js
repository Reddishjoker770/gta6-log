// Version bump for the twice-daily log routine (keep this pattern):
// 1. Rename CACHE to the next gta6-log-vN value so clients pick up a new service worker.
// 2. Bump ?v=N on styles.css, app.js, and fonts.css here and in index.html, plus APP_VERSION in app.js and VER in index.html.
// 3. Do not rename data.json fields (item, location, note, source, thumb, img, imgSource, mx, my, area).
// 4. When adding confirmed photos, append ./img/items/<file>.webp to PRECACHE.
const CACHE = "gta6-log-v7";
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./styles.css?v=7",
  "./app.js",
  "./app.js?v=7",
  "./fonts.css",
  "./fonts.css?v=7",
  "./data.json",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./favicon.ico",
  "./img/leonida-map.jpg",
  "./img/icons.svg",
  "./img/items/annis-drifter-elegy.webp",
  "./img/items/arthur-morgans-hat.webp",
  "./img/items/crab-outpost-dock-building.webp",
  "./img/items/crabshack-vf5.webp",
  "./img/items/donnies-hl-38.webp",
  "./img/items/gutterball-moreland-850.webp",
  "./img/items/headlights-menu.webp",
  "./img/items/killtelligence-sm-69.webp",
  "./img/items/kingfishers-w-22.webp",
  "./img/items/kingpin-bowling-safe.webp",
  "./img/items/ps5-first-person-mode-glitch.webp",
  "./img/items/ship-vehicle-pop-in.webp",
  "./img/items/yasmani-fence.webp",
  "./fonts/inter-latin-400-normal.woff2",
  "./fonts/inter-latin-500-normal.woff2",
  "./fonts/inter-latin-600-normal.woff2",
  "./fonts/inter-latin-700-normal.woff2",
];

const NETWORK_FIRST_RE = /\/(index\.html|app\.js|styles\.css|fonts\.css|data\.json|sw\.js|manifest\.webmanifest)?$/;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        PRECACHE.map((url) => cache.add(url).catch(() => {}))
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const oldKeys = keys.filter((key) => key !== CACHE);
      await Promise.all(oldKeys.map((key) => caches.delete(key)));
      await self.clients.claim();
      if (oldKeys.length) {
        const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
        await Promise.all(
          windows.map((client) => (typeof client.navigate === "function" ? client.navigate(client.url) : Promise.resolve()))
        );
      }
    })()
  );
});

function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
      }
      return response;
    })
    .catch(() =>
      caches.match(request).then((cached) => {
        if (cached) return cached;
        if (request.mode === "navigate") return caches.match("./index.html");
        return undefined;
      })
    );
}

function cacheFirst(request) {
  return caches.match(request).then((cached) => {
    if (cached) return cached;
    return fetch(request).then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
      }
      return response;
    });
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;
  const isNavigate = request.mode === "navigate" || path.endsWith("/") || path.endsWith("/index.html");
  const isShell = isNavigate || NETWORK_FIRST_RE.test(path);

  event.respondWith(isShell ? networkFirst(request) : cacheFirst(request));
});
