// Version bump for the twice-daily log routine (keep this pattern):
// 1. Rename CACHE to the next gta6-log-vN value so clients pick up a new service worker.
// 2. Bump ?v=N on styles.css, app.js, and fonts.css here and in index.html, plus APP_VERSION in app.js and VER in index.html.
// 3. Do not rename data.json fields (item, location, note, source, thumb, img, imgSource, mx, my, area).
// 4. When adding confirmed photos, append ./img/items/<file>.webp to PRECACHE.
const CACHE = "gta6-log-v14";
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./styles.css?v=14",
  "./app.js",
  "./app.js?v=14",
  "./fonts.css",
  "./fonts.css?v=14",
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
  "./img/items/abandoned-site-alien-door.webp",
  "./img/items/annis-drifter-elegy.webp",
  "./img/items/arthur-morgans-hat.webp",
  "./img/items/backyard-wrestling-ring.webp",
  "./img/items/beached-whale.webp",
  "./img/items/benefactor-nightlight-schafter.webp",
  "./img/items/big-entrance-dalton-island.webp",
  "./img/items/bigfoot-skunk-ape.webp",
  "./img/items/birds-arent-real-shack.webp",
  "./img/items/black-eagle-import-kalinga.webp",
  "./img/items/bobcat-key-experimental-home.webp",
  "./img/items/brainwashing-program-russo.webp",
  "./img/items/bravado-devils-rope-gauntlet.webp",
  "./img/items/bravado-revenant-gauntlet.webp",
  "./img/items/brontasaurus-bat.webp",
  "./img/items/brooks-boatworks-main-safe-cash.webp",
  "./img/items/brooks-boatworks-safe.webp",
  "./img/items/bugstars-burrito.webp",
  "./img/items/burg-industries-facility-safe.webp",
  "./img/items/caliente-picador.webp",
  "./img/items/camus-black-moth-kamacho.webp",
  "./img/items/capri-pentagram-ritual.webp",
  "./img/items/clunker-556.webp",
  "./img/items/collateral-hitman-encounter.webp",
  "./img/items/conspiracist-type-9.webp",
  "./img/items/crab-outpost-dock-building.webp",
  "./img/items/crabshack-vf5.webp",
  "./img/items/declasse-applesauce-bobcat.webp",
  "./img/items/deserted-home-emerald-springs.webp",
  "./img/items/dethrone-the-pretender.webp",
  "./img/items/dexter-apartment.webp",
  "./img/items/doms-charger-this-old-house.webp",
  "./img/items/doms-chevelle-capri.webp",
  "./img/items/donnies-hl-38.webp",
  "./img/items/doomsday-prepper-compound.webp",
  "./img/items/dundreary-cherry-bomb-chino.webp",
  "./img/items/exotic-animals-front-parrot-cash.webp",
  "./img/items/fatal-incursion-memorial.webp",
  "./img/items/fossilized-prints.webp",
  "./img/items/furry-fox-encounter.webp",
  "./img/items/game-horde.webp",
  "./img/items/giant-crab-cutscene.webp",
  "./img/items/granforma-tsunami-zorrusso.webp",
  "./img/items/grayson-pet-cemetery.webp",
  "./img/items/gutterball-moreland-850.webp",
  "./img/items/halloween-house.webp",
  "./img/items/hauners-rhino-tank.webp",
  "./img/items/headlights-menu.webp",
  "./img/items/hillinger-boomer.webp",
  "./img/items/hollow-earther.webp",
  "./img/items/hovercraft-crash.webp",
  "./img/items/hyde-island-saw-hunt.webp",
  "./img/items/invetero-enforcer-coquette.webp",
  "./img/items/kelly-county-ufo.webp",
  "./img/items/key-lento-christmas-house.webp",
  "./img/items/killtelligence-sm-69.webp",
  "./img/items/kingfishers-w-22.webp",
  "./img/items/kingpin-bowling-safe.webp",
  "./img/items/kraken-shipwreck-catalan-bay.webp",
  "./img/items/liberty-city-memoir.webp",
  "./img/items/lovers-lookout.webp",
  "./img/items/lucky-dog-jet-ski-dog.webp",
  "./img/items/macalister-gold-mine.webp",
  "./img/items/magma-cliffhanger.webp",
  "./img/items/maibatsu-penumbra-ff.webp",
  "./img/items/marabunta-grande-hobo.webp",
  "./img/items/marbelle-hotel-safe.webp",
  "./img/items/marbelle-hotel-silent-hill.webp",
  "./img/items/marthas-1992.webp",
  "./img/items/merman-photoshoot-gambit-bay.webp",
  "./img/items/messages-in-bottles.webp",
  "./img/items/monument-of-leonidan-supremacy.webp",
  "./img/items/mount-kalaga-firewatch-shed.webp",
  "./img/items/mushroom-trip-container.webp",
  "./img/items/ocean-view-hotel-rooftop.webp",
  "./img/items/ocelot-bloodless-jugular.webp",
  "./img/items/painted-egg-nest.webp",
  "./img/items/pegassi-charred-toros.webp",
  "./img/items/pegassi-gold-rope-infernus.webp",
  "./img/items/pegassi-valiant-tempesta.webp",
  "./img/items/pennywise-killer-clown-elevator.webp",
  "./img/items/pfister-class-act-comet.webp",
  "./img/items/phils-ammu-nation.webp",
  "./img/items/pink-gin-tulip-janjaks-garage.webp",
  "./img/items/presidents-bunker-chain.webp",
  "./img/items/princess-robot-bubblegum-statue.webp",
  "./img/items/progen-purple-drank-emerus.webp",
  "./img/items/progen-royal-ruby-emerus.webp",
  "./img/items/ps5-first-person-mode-glitch.webp",
  "./img/items/ride-em-chihuahua.webp",
  "./img/items/san-andreas-photo-house.webp",
  "./img/items/scrapper-vf5c.webp",
  "./img/items/ship-vehicle-pop-in.webp",
  "./img/items/smuggler-gorse-425.webp",
  "./img/items/sos-island.webp",
  "./img/items/south-point-alien-facility.webp",
  "./img/items/st-lucia-lighthouse-ghosts.webp",
  "./img/items/super-mario-block-paper-mill.webp",
  "./img/items/swamp-bait-akulus.webp",
  "./img/items/swamp-witch.webp",
  "./img/items/tallaloko-amphitheater.webp",
  "./img/items/tenebrae-lux.webp",
  "./img/items/teniente-manana.webp",
  "./img/items/towable-atms.webp",
  "./img/items/truffade-andrew-nodes-thrax.webp",
  "./img/items/truther-burrito.webp",
  "./img/items/turnt-nipper-38.webp",
  "./img/items/twinstripe-vigero.webp",
  "./img/items/unidentified-building.webp",
  "./img/items/unwanted-attention-garage-disguise.webp",
  "./img/items/vanessas-growler.webp",
  "./img/items/vapid-cultivator-sandking.webp",
  "./img/items/vapid-finns-reclaimer.webp",
  "./img/items/vapid-firebug-dominator.webp",
  "./img/items/vapid-red-hot-hustler.webp",
  "./img/items/vapid-smuggler-caracara.webp",
  "./img/items/vapid-truth-justice-caracara.webp",
  "./img/items/vice-city-portal-lpl-substations.webp",
  "./img/items/western-searing-zombie-bobber.webp",
  "./img/items/wild-hog-point-alien-mural.webp",
  "./img/items/windsor-luxury-car-sound4sound.webp",
  "./img/items/wreck-of-the-meerwunder.webp",
  "./img/items/yasmani-fence.webp",
  "./img/items/christine-driveshaft-devanity.webp",
  "./img/items/immortal-man-badger-tower.webp",
  "./img/items/scarface-motel-little-friend.webp",
  "./img/items/spongebob-pineapple-bus-stop.webp",
  "./img/items/wymans-cars-transgressor.webp",
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
