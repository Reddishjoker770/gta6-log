const APP_VERSION = "v11 · saved";

const ICONS = {
  home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10.5V20h11V10.5"/>',
  codes: '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M8 17h8"/>',
  weapons: '<circle cx="12" cy="12" r="7.5"/><path d="M12 5.5v2M12 16.5v2M5.5 12h2M16.5 12h2"/><circle cx="12" cy="12" r="2"/>',
  valuables: '<path d="M12 3.5 19 9.5 12 20.5 5 9.5 12 3.5Z"/><path d="M5 9.5h14"/>',
  vehicles: '<path d="M5 15.5v-2.2L7.2 8.5h9.6L19 13.3v2.2"/><path d="M5 15.5h14v2H5v-2Z"/><circle cx="7.5" cy="17.5" r="1.2"/><circle cx="16.5" cy="17.5" r="1.2"/><path d="M9 10.5h6"/>',
  missions: '<path d="M7 4.5h8.5L18 7v13H7V4.5Z"/><path d="M10 9.5h5M10 13h5M10 16.5h3.5"/>',
  "easter-eggs": '<path d="M12 3.5c3.8 0 6.5 5 6.5 9.8 0 3.6-2.9 6.2-6.5 6.2s-6.5-2.6-6.5-6.2c0-4.8 2.7-9.8 6.5-9.8Z"/><path d="M8 11.5c1.5-1 3-.8 4 .4 1.2 1.3 2.6 1.4 4 .4"/>',
  shops: '<path d="M5 10 6.2 5.5h11.6L19 10"/><path d="M5 10v9h14v-9"/><path d="M10 19v-5h4v5"/><path d="M5 10h14"/>',
  mechanics: '<rect x="3.5" y="8" width="17" height="10" rx="3"/><path d="M8 12h1.5M14.5 12H16M9.5 14.5h5"/><path d="M8 8V6.5M16 8V6.5"/>',
  glitches: '<path d="M8 9.5A4 4 0 0 1 12 6.5a4 4 0 0 1 4 3v5.5a4 4 0 0 1-8 0V9.5Z"/><path d="M8 11H5.5M18.5 11H16M8 15H5.5M18.5 15H16M12 6.5V4.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M16 16 20 20"/>',
  chevron: '<path d="M9 6l6 6-6 6"/>',
  signal: '<path d="M2 10h2v4H2zM6 8h2v6H6zM10 6h2v8h-2zM14 4h2v10h-2z" fill="currentColor" stroke="none"/>',
  battery: '<rect x="1.5" y="3.5" width="14" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="5" width="10" height="6" rx="0.5" fill="currentColor" stroke="none"/><path d="M16.5 6.5v3c.8-.3 1.2-.8 1.2-1.5S17.3 6.8 16.5 6.5Z" fill="currentColor" stroke="none"/>',
  saved: '<path d="M12 3.2 14.6 8.6l5.9.7-4.4 4 .9 5.7L12 16.8l-5 2.2.9-5.7-4.4-4 5.9-.7Z"/>',
  star: '<path d="M12 3.2 14.6 8.6l5.9.7-4.4 4 .9 5.7L12 16.8l-5 2.2.9-5.7-4.4-4 5.9-.7Z"/>',
  target: '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.6"/><path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2"/>',
};

const APP_COLORS = {
  home: "#ff4fa3",
  codes: "#3b82f6",
  weapons: "#ef4444",
  valuables: "#f59e0b",
  vehicles: "#06b6d4",
  missions: "#a855f7",
  "easter-eggs": "#f472b6",
  shops: "#22c55e",
  mechanics: "#64748b",
  glitches: "#f97316",
  saved: "#f5c518",
};


const ICON_LABELS = {
  safe: "safe with a keypad",
  door: "door with a keypad",
  computer: "computer terminal",
  shotgun: "shotgun",
  rifle: "rifle",
  smg: "submachine gun",
  revolver: "revolver",
  pistol: "pistol",
  sniper: "sniper rifle",
  launcher: "rocket launcher",
  watch: "watch",
  pills: "pill bags",
  cash: "cash",
  jewellery: "jewellery",
  car: "car",
  muscle: "muscle car",
  truck: "truck",
  suv: "SUV",
  bike: "motorcycle",
  boat: "boat",
  mission: "mission flag",
  "mission-current": "current mission flag",
  fishing: "fishing",
  home: "house",
  driving: "steering wheel",
  optional: "optional mission",
  hospital: "hospital",
  hat: "hat",
  apartment: "apartment building",
  egg: "painted egg",
  ufo: "UFO",
  bigfoot: "bigfoot",
  dog: "dog",
  book: "book",
  alien: "alien door",
  plate: "license plate",
  shop: "shop",
  fence: "fence drop",
  "bike-shop": "dirt-bike shop",
  "auto-shop": "auto shop",
  gunstore: "gun store",
  dealer: "vehicle dealer",
  dpad: "D-pad",
  headlights: "headlights",
  "turn-signal": "turn signal",
  siren: "siren",
  escape: "escape route",
  stealth: "stealth",
  focus: "focus",
  bomb: "sticky bomb",
  note: "note",
  cheat: "cheat code",
  "money-cheat": "money cheat",
  glitch: "glitch",
  clip: "clipping glitch",
  physics: "physics glitch",
  crash: "crash",
  softlock: "softlock",
  texture: "texture glitch",
  stuck: "stuck glitch",
  despawn: "despawn glitch",
  animation: "animation glitch",
  aim: "aiming glitch",
  spawn: "item spawn glitch",
};

function hasText(blob, words) {
  return words.some((word) => blob.includes(word));
}

function inferIcon(item, catId) {
  const name = item.item || "";
  const blob = `${name} ${item.location || ""} ${item.note || ""}`.toLowerCase();
  if (catId === "codes") {
    if (hasText(blob, ["computer", "password", "cleaves"])) return "computer";
    if (hasText(blob, ["door", "lockup", "garage", "panel", "dock building"])) return "door";
    return "safe";
  }
  if (catId === "weapons") {
    if (hasText(blob, ["shotgun", "pump-action", "hobo", "gorse", "gutterball"])) return "shotgun";
    if (hasText(blob, ["sniper", "sm-69", "laird"])) return "sniper";
    if (hasText(blob, ["revolver"])) return "revolver";
    if (hasText(blob, [".38", "pistol", "nipper"])) return "pistol";
    if (hasText(blob, ["launcher", "rocket"])) return "launcher";
    if (hasText(blob, ["smg", "vf5", "type 9"])) return "smg";
    if (hasText(blob, ["rifle", "assault", "556", "kz-59"])) return "rifle";
    return "rifle";
  }
  if (catId === "valuables") {
    if (hasText(blob, ["watch"])) return "watch";
    if (hasText(blob, ["pill"])) return "pills";
    if (hasText(blob, ["jewel", "ring", "necklace", "chain"])) return "jewellery";
    return "cash";
  }
  if (catId === "vehicles") {
    if (hasText(blob, ["truck", "yosemite", "rancher", "caracara"])) return "truck";
    if (hasText(blob, ["suv", "hellion", "toros"])) return "suv";
    if (hasText(blob, ["phoenix"])) return "muscle";
    if (hasText(blob, ["boat", "jet ski"])) return "boat";
    if (hasText(blob, ["bike", "motor"])) return "bike";
    return "car";
  }
  if (catId === "missions") {
    if (name === "Discharge Time" || hasText(blob, ["current"])) return "mission-current";
    if (hasText(blob, ["fish"])) return "fishing";
    if (hasText(blob, ["optional"])) return "optional";
    if (hasText(blob, ["ambulance", "hospital", "discharge"])) return "hospital";
    if (hasText(blob, ["home", "moved in", "coming home"])) return "home";
    if (hasText(blob, ["driver", "drive"])) return "driving";
    return "mission";
  }
  if (catId === "easter-eggs") {
    if (hasText(blob, ["hat"])) return "hat";
    if (hasText(blob, ["apartment", "dexter"])) return "apartment";
    if (hasText(blob, ["plate"])) return "plate";
    if (hasText(blob, ["penumbra", "phoenix"])) return "car";
    if (hasText(blob, ["egg"])) return "egg";
    if (hasText(blob, ["ufo"])) return "ufo";
    if (hasText(blob, ["bigfoot", "skunk ape"])) return "bigfoot";
    if (hasText(blob, ["dog"])) return "dog";
    if (hasText(blob, ["book", "memoir"])) return "book";
    if (hasText(blob, ["alien"])) return "alien";
    return "egg";
  }
  if (catId === "shops") {
    if (hasText(blob, ["dirt", "bike"])) return "bike-shop";
    if (hasText(blob, ["fence", "lockup", "donnie", "dunk", "tyrone", "yasmani"])) return "fence";
    if (hasText(blob, ["moses", "randy"])) return "dealer";
    if (hasText(blob, ["ammu"])) return "gunstore";
    if (hasText(blob, ["auto", "spray", "motorsport", "care"])) return "auto-shop";
    return "shop";
  }
  if (catId === "mechanics") {
    if (hasText(blob, ["headlight"])) return "headlights";
    if (hasText(blob, ["turn signal"])) return "turn-signal";
    if (hasText(blob, ["siren", "light bar"])) return "siren";
    if (hasText(blob, ["stealth"])) return "stealth";
    if (hasText(blob, ["escape"])) return "escape";
    if (hasText(blob, ["focus", "l3"])) return "focus";
    if (hasText(blob, ["sticky", "bomb"])) return "bomb";
    if (hasText(blob, ["money cheat", "$250"])) return "money-cheat";
    if (hasText(blob, ["cheat"])) return "cheat";
    if (hasText(blob, ["selling", "fence"])) return "fence";
    if (hasText(blob, ["random"])) return "note";
    return "dpad";
  }
  if (catId === "saved" || catId === "custom") return "note";
  if (catId === "glitches") {
    if (hasText(blob, ["softlock", "does not register", "cutscene fails"])) return "softlock";
    if (hasText(blob, ["crash", "reboot", "ce-108255"])) return "crash";
    if (hasText(blob, ["texture", "lighting", "pop-in", "flicker", "blocky"])) return "texture";
    if (hasText(blob, ["despawn", "vanish", "mid-air", "frozen"])) return "despawn";
    if (hasText(blob, ["swim", "animation", "coffee cup"])) return "animation";
    if (hasText(blob, ["aim"])) return "aim";
    if (hasText(blob, ["stuck", "trapped", "cage", "fenced", "walk into walls"])) return "stuck";
    if (hasText(blob, ["fall through", "clip", "through the", "drops jason"])) return "clip";
    if (hasText(blob, ["loot respawn", "appears from nowhere"])) return "spawn";
    if (hasText(blob, ["physics", "launched", "catapult", "wedged", "durability", "no explosion", "bailout", "no npc"])) return "physics";
    if (hasText(blob, ["motorbike", "bike"])) return "bike";
    if (hasText(blob, ["fishing rod"])) return "fishing";
    return "glitch";
  }
  return "mission";
}

function thumbSpec(item, catId) {
  const photo = item && item.img;
  if (photo && String(photo).includes("/")) {
    return { type: "image", src: String(photo) };
  }
  const raw = item && item.thumb;
  if (raw && (String(raw).startsWith("img/") || String(raw).includes("/"))) {
    return { type: "image", src: String(raw) };
  }
  const id = raw && !String(raw).includes("/") ? String(raw) : inferIcon(item, catId);
  return { type: "icon", id: ICON_LABELS[id] ? id : inferIcon(item, catId) };
}

function thumbAlt(item, spec) {
  const name = item.item || "Entry";
  if (spec.type === "image") return `Photo of ${name}`;
  const label = ICON_LABELS[spec.id] || "icon";
  return `Icon for ${name}: ${label}`;
}

function thumbHtml(item, catId, size) {
  const spec = thumbSpec(item, catId);
  const large = size === "lg";
  const px = large ? 72 : 48;
  const iconPx = large ? 40 : 28;
  const cls = `thumb thumb-${catId || "home"}${large ? " thumb-lg" : ""}`;
  const alt = thumbAlt(item, spec);
  if (spec.type === "image") {
    return `<span class="${cls}"><img src="${escapeHtml(spec.src)}" alt="${escapeHtml(alt)}" width="${px}" height="${px}" loading="lazy"></span>`;
  }
  return `<span class="${cls}" role="img" aria-label="${escapeHtml(alt)}"><svg viewBox="0 0 24 24" width="${iconPx}" height="${iconPx}" aria-hidden="true"><use href="#${escapeHtml(spec.id)}"></use></svg></span>`;
}

async function ensureSprite() {
  if (document.getElementById("icon-sprite")) return;
  try {
    const response = await fetch("img/icons.svg");
    const text = await response.text();
    const wrap = document.createElement("div");
    wrap.id = "icon-sprite";
    wrap.hidden = true;
    wrap.innerHTML = text;
    document.body.prepend(wrap);
  } catch (err) {
    // Offline fallback is the precached sprite; if fetch fails, thumbs stay empty rather than crashing.
  }
}


const MAP_CATEGORIES = new Set(["weapons", "vehicles"]);
const MAP_SRC = "img/leonida-map.jpg";
const MAP_ALT = "Official Rockstar map of Leonida, the world of Grand Theft Auto 6";

function icon(id) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[id] || ICONS.search}</svg>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isChat(source) {
  return source === "Our chats";
}

function sourceLabel(source) {
  if (!source || isChat(source)) return "Our chats";
  return source[1] || "";
}

function sourceHref(source) {
  if (!source || isChat(source)) return null;
  return source[0];
}


const IMAGE_SITES = {
  "gta6notebook.com": "GTA 6 Notebook",
  "keengamer.com": "KeenGamer",
  "powerpyx.com": "PowerPyx",
  "pcgamer.com": "PC Gamer",
  "gta6zero.com": "GTA6Zero",
  "howtovideogame.com": "HowToVideoGame",
  "dexerto.com": "Dexerto",
  "beebom.com": "Beebom",
  "thegamer.com": "TheGamer",
  "vice.com": "VICE",
  "games.gg": "Games.gg",
  "insider-gaming.com": "Insider Gaming",
  "gtasnaps.com": "GTA Snaps",
};

function imageSiteName(url) {
  if (!url) return "source";
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return IMAGE_SITES[host] || host;
  } catch (err) {
    return "source";
  }
}

function imageCreditHtml(item) {
  if (!item || !item.img || !item.imgSource) return "";
  const name = imageSiteName(item.imgSource);
  return `<p class="img-credit">Image: <a href="${escapeHtml(item.imgSource)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a></p>`;
}

function itemMatches(item, query) {
  if (!query) return true;
  const blob = `${item.item || ""} ${item.location || ""} ${item.note || ""} ${sourceLabel(item.source)}`.toLowerCase();
  return blob.includes(query);
}

function missionKind(item) {
  const note = item && item.note ? item.note : "";
  if ((item && item.item === "Discharge Time") || note.startsWith("Current")) return "current";
  if (note.startsWith("Done")) return "done";
  if (note.startsWith("Not started")) return "later";
  return null;
}

function chapterOf(item) {
  const location = item && item.location ? item.location : "";
  if (location.startsWith("Chapter 1")) return "Chapter 1";
  if (location.startsWith("Chapter 2")) return "Chapter 2";
  return null;
}

function badges(item, highlightCurrent, catId) {
  const kind = missionKind(item);
  const parts = [];
  if (highlightCurrent && kind === "current") parts.push('<span class="badge current-badge">Current</span>');
  if (kind === "done") parts.push('<span class="badge done">Done</span>');
  if (kind === "later") parts.push('<span class="badge later">Not started</span>');
  if (isChat(item.source)) parts.push('<span class="badge chat">Our chats</span>');
  if (item.missing) parts.push('<span class="badge missing">No longer in log</span>');
  if (item.custom) parts.push('<span class="badge custom">Custom</span>');
  if (MAP_CATEGORIES.has(catId)) parts.push('<span class="badge map">View map</span>');
  return parts.join("");
}

function slugify(name) {
  return String(name || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function entryId(catId, name) {
  return `${catId}/${slugify(name)}`;
}

const SAVED_KEY = "gta6-log-saved";
const IDB_NAME = "gta6-log";
const IDB_STORE = "kv";

function emptySaved() {
  return { version: 1, favourites: {}, tracking: {} };
}

let SAVED = emptySaved();
let savedNoteTimer = 0;
let savedStatusTimer = 0;

function normalizeSaved(raw) {
  const out = emptySaved();
  if (!raw || typeof raw !== "object") return out;
  for (const key of ["favourites", "tracking"]) {
    const bag = raw[key];
    if (!bag || typeof bag !== "object" || Array.isArray(bag)) continue;
    for (const [id, rec] of Object.entries(bag)) {
      if (!rec || typeof rec !== "object") continue;
      const item = String(rec.item || "").trim();
      if (!item) continue;
      const record = {
        id: String(rec.id || id),
        catId: String(rec.catId || (key === "tracking" && rec.custom ? "custom" : "") || "custom"),
        item,
        location: String(rec.location || ""),
        logNote: String(rec.logNote || ""),
        thumb: rec.thumb ? String(rec.thumb) : "",
        img: rec.img ? String(rec.img) : "",
        imgSource: rec.imgSource ? rec.imgSource : "",
        source: rec.source || null,
        personalNote: String(rec.personalNote || rec.note || ""),
        custom: Boolean(rec.custom),
        addedAt: rec.addedAt || new Date().toISOString(),
        found: Boolean(rec.found),
        foundAt: rec.foundAt || null,
      };
      out[key][record.id] = record;
    }
  }
  return out;
}

function loadSavedFromLocalStorage() {
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    if (raw) {
      SAVED = normalizeSaved(JSON.parse(raw));
      return true;
    }
  } catch (err) {}
  return false;
}

function openSavedDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("no idb"));
      return;
    }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbSetSaved(data) {
  const db = await openSavedDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).put(data, SAVED_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function idbGetSaved() {
  const db = await openSavedDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const req = tx.objectStore(IDB_STORE).get(SAVED_KEY);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

function persistSaved() {
  const payload = { version: 1, favourites: SAVED.favourites, tracking: SAVED.tracking };
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(payload));
  } catch (err) {}
  idbSetSaved(payload).catch(() => {});
}

async function loadSaved() {
  const fromLs = loadSavedFromLocalStorage();
  if (fromLs) {
    persistSaved();
    return;
  }
  try {
    const fromIdb = await idbGetSaved();
    if (fromIdb) {
      SAVED = normalizeSaved(fromIdb);
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(SAVED));
      } catch (err) {}
    }
  } catch (err) {}
}

function isFav(id) {
  return Boolean(SAVED.favourites[id]);
}

function isTracked(id) {
  return Boolean(SAVED.tracking[id]);
}

function isSavedId(id) {
  return isFav(id) || isTracked(id);
}

function uniqueSavedCount() {
  const ids = new Set([...Object.keys(SAVED.favourites), ...Object.keys(SAVED.tracking)]);
  return ids.size;
}

function liveItem(catId, name) {
  const cat = currentCat(catId);
  return cat ? findItem(cat, name) : null;
}

function itemIsMissing(catId, name, rec) {
  if (rec && rec.custom) return false;
  return !liveItem(catId, name);
}

function snapshotItem(catId, item, existing) {
  return {
    id: entryId(catId, item.item),
    catId,
    item: item.item,
    location: item.location || "",
    logNote: item.note || "",
    thumb: item.thumb || "",
    img: item.img || "",
    personalNote: (existing && existing.personalNote) || "",
    custom: false,
    addedAt: (existing && existing.addedAt) || new Date().toISOString(),
    found: existing ? Boolean(existing.found) : false,
    foundAt: existing ? existing.foundAt || null : null,
  };
}

function displayItemFromSaved(rec) {
  const live = rec.custom ? null : liveItem(rec.catId, rec.item);
  if (live) return live;
  return {
    item: rec.item,
    location: rec.location || "",
    note: rec.logNote || "",
    source: rec.custom ? null : rec.source || null,
    thumb: rec.thumb || (rec.custom ? "note" : ""),
    img: rec.img || "",
    imgSource: rec.imgSource || "",
    custom: Boolean(rec.custom),
    missing: itemIsMissing(rec.catId, rec.item, rec),
  };
}

function getPersonalNote(id) {
  const rec = SAVED.favourites[id] || SAVED.tracking[id];
  return (rec && rec.personalNote) || "";
}

function setPersonalNote(id, text) {
  const value = String(text || "").slice(0, 400);
  if (SAVED.favourites[id]) SAVED.favourites[id].personalNote = value;
  if (SAVED.tracking[id]) SAVED.tracking[id].personalNote = value;
  persistSaved();
}

function catHeading(catId) {
  if (catId === "custom" || catId === "saved") return "Custom";
  const cat = currentCat(catId);
  return cat ? cat.heading : catId;
}

function catShort(catId) {
  if (catId === "custom" || catId === "saved") return "Custom";
  const cat = currentCat(catId);
  return cat ? cat.short : catId;
}

function toggleFavourite(catId, name, recHint) {
  const custom = Boolean(recHint && recHint.custom) || catId === "custom" || catId === "saved";
  const id = custom && recHint ? recHint.id : entryId(catId, name);
  if (SAVED.favourites[id]) {
    delete SAVED.favourites[id];
  } else {
    if (custom) {
      const src = recHint || SAVED.tracking[id];
      if (!src) return id;
      SAVED.favourites[id] = { ...src, id, personalNote: getPersonalNote(id) };
    } else {
      const live = liveItem(catId, name);
      const existing = SAVED.tracking[id] || SAVED.favourites[id];
      if (live) SAVED.favourites[id] = snapshotItem(catId, live, existing);
      else if (existing) SAVED.favourites[id] = { ...existing, personalNote: getPersonalNote(id) };
    }
  }
  persistSaved();
  return id;
}

function toggleTracking(catId, name, recHint) {
  const custom = Boolean(recHint && recHint.custom) || catId === "custom" || catId === "saved";
  const id = custom && recHint ? recHint.id : entryId(catId, name);
  if (SAVED.tracking[id]) {
    const wasCustom = SAVED.tracking[id].custom;
    delete SAVED.tracking[id];
    if (wasCustom && !SAVED.favourites[id]) {
      delete SAVED.favourites[id];
    }
  } else {
    if (custom) {
      const src = recHint || SAVED.favourites[id];
      if (!src) return id;
      SAVED.tracking[id] = { ...src, id, found: false, foundAt: null, personalNote: getPersonalNote(id) };
    } else {
      const live = liveItem(catId, name);
      const existing = SAVED.favourites[id] || SAVED.tracking[id];
      if (live) SAVED.tracking[id] = { ...snapshotItem(catId, live, existing), found: false, foundAt: null };
      else if (existing) SAVED.tracking[id] = { ...existing, found: false, foundAt: null, personalNote: getPersonalNote(id) };
    }
  }
  persistSaved();
  return id;
}

function setTrackedFound(id, found) {
  const rec = SAVED.tracking[id];
  if (!rec) return;
  rec.found = Boolean(found);
  rec.foundAt = rec.found ? new Date().toISOString() : null;
  persistSaved();
}

function addCustomTracking(title, note) {
  const item = String(title || "").trim();
  if (!item) return null;
  const base = `custom/${slugify(item)}`;
  let id = base;
  let n = 2;
  while (SAVED.tracking[id] || SAVED.favourites[id]) {
    id = `${base}-${n}`;
    n += 1;
  }
  SAVED.tracking[id] = {
    id,
    catId: "custom",
    item,
    location: "",
    logNote: "",
    thumb: "note",
    img: "",
    personalNote: String(note || "").trim().slice(0, 400),
    custom: true,
    addedAt: new Date().toISOString(),
    found: false,
    foundAt: null,
  };
  persistSaved();
  return id;
}

function formatFoundDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" }).format(date);
}

const STAR_PATH = '<path d="M12 3.2 14.6 8.6l5.9.7-4.4 4 .9 5.7L12 16.8l-5 2.2.9-5.7-4.4-4 5.9-.7Z"/>';
const TARGET_PATH = '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.6"/><path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2"/>';

function saveButtonsHtml(catId, item, recHint) {
  const custom = Boolean(recHint && recHint.custom) || catId === "custom" || catId === "saved";
  const id = custom && recHint ? recHint.id : entryId(catId, item.item);
  const fav = isFav(id);
  const track = isTracked(id);
  const favLabel = fav ? "Remove from Favourites" : "Add to Favourites";
  const trackLabel = track ? "Stop tracking this item" : "Track this item";
  return `<div class="save-btns">
    <button type="button" class="save-btn save-fav${fav ? " is-on" : ""}" data-save="fav" data-id="${escapeHtml(id)}" data-cat="${escapeHtml(catId)}" data-name="${escapeHtml(item.item)}" aria-pressed="${fav ? "true" : "false"}" aria-label="${favLabel}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${STAR_PATH}</svg>
    </button>
    <button type="button" class="save-btn save-track${track ? " is-on" : ""}" data-save="track" data-id="${escapeHtml(id)}" data-cat="${escapeHtml(catId)}" data-name="${escapeHtml(item.item)}" aria-pressed="${track ? "true" : "false"}" aria-label="${trackLabel}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${TARGET_PATH}</svg>
    </button>
  </div>`;
}

function paintSaveButtons(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-save]").forEach((btn) => {
    const id = btn.getAttribute("data-id");
    const kind = btn.getAttribute("data-save");
    const on = kind === "fav" ? isFav(id) : isTracked(id);
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    if (kind === "fav") btn.setAttribute("aria-label", on ? "Remove from Favourites" : "Add to Favourites");
    else btn.setAttribute("aria-label", on ? "Stop tracking this item" : "Track this item");
  });
  const count = uniqueSavedCount();
  scope.querySelectorAll("[data-saved-count]").forEach((el) => {
    el.textContent = String(count);
    if (el.classList.contains("dock-badge") || el.hasAttribute("data-hide-zero")) {
      el.hidden = count === 0;
    }
  });
}

function personalNoteHtml(id) {
  if (!isSavedId(id)) {
    return `<p class="save-note-hint">Star or track this item to add a personal note.</p>`;
  }
  const note = getPersonalNote(id);
  return `<label class="save-note-wrap">Your note
    <textarea class="save-note" data-note-id="${escapeHtml(id)}" maxlength="400" rows="3" placeholder="Add a short personal note">${escapeHtml(note)}</textarea>
  </label>`;
}

function exportSavedJson() {
  return JSON.stringify({ version: 1, favourites: SAVED.favourites, tracking: SAVED.tracking }, null, 2);
}

function importSavedJson(text) {
  const parsed = JSON.parse(text);
  const next = normalizeSaved(parsed);
  const favs = Object.keys(next.favourites).length;
  const tracks = Object.keys(next.tracking).length;
  if (favs === 0 && tracks === 0 && text.trim() && !parsed.favourites && !parsed.tracking) {
    throw new Error("That file does not look like a Saved backup.");
  }
  SAVED = next;
  persistSaved();
  return { favs, tracks };
}

function showSavedStatus(message) {
  const el = document.querySelector(".saved-status");
  if (!el) return;
  el.textContent = message;
  clearTimeout(savedStatusTimer);
  savedStatusTimer = setTimeout(() => {
    if (el.textContent === message) el.textContent = "";
  }, 3500);
}

function savedToolsHtml() {
  return `<div class="saved-tools">
    <h2>Backup</h2>
    <p class="saved-tools-copy">Copy or download your Favourites and Tracking list, or paste a backup to restore it on this phone.</p>
    <div class="saved-tool-row">
      <button type="button" class="tool-btn" data-export="copy">Copy JSON</button>
      <button type="button" class="tool-btn" data-export="download">Download</button>
      <button type="button" class="tool-btn" data-import-toggle>Import</button>
    </div>
    <div class="import-panel" hidden>
      <label class="save-note-wrap">Paste backup JSON
        <textarea class="save-note import-json" rows="5" placeholder='{"version":1,"favourites":{},"tracking":{}}'></textarea>
      </label>
      <label class="import-file">Or choose a file <input type="file" accept="application/json,.json" class="import-file-input"></label>
      <button type="button" class="tool-btn tool-btn-solid" data-import-apply>Import backup</button>
    </div>
    <p class="saved-status" role="status"></p>
  </div>`;
}

function savedBody(tab, filterCat) {
  const favTab = tab !== "tracking";
  const count = uniqueSavedCount();
  return `<header class="app-header">
      <button class="back-chevron" type="button" data-go="home" aria-label="Back">‹</button>
      <div>
        <h1>Saved</h1>
        <p class="sub">${count} ${count === 1 ? "item" : "items"} you have starred or tracked</p>
      </div>
    </header>
    <div class="segments" role="tablist" aria-label="Saved lists">
      <button type="button" class="segment${favTab ? " is-on" : ""}" role="tab" aria-selected="${favTab ? "true" : "false"}" data-go="saved">Favourites</button>
      <button type="button" class="segment${!favTab ? " is-on" : ""}" role="tab" aria-selected="${favTab ? "false" : "true"}" data-go="saved/tracking">Tracking</button>
    </div>
    ${favTab ? favouritesPanelHtml(filterCat) : trackingPanelHtml()}
    ${savedToolsHtml()}`;
}

function favouritesPanelHtml(filterCat) {
  const recs = Object.values(SAVED.favourites);
  if (!recs.length) {
    return `<p class="empty saved-empty">Nothing in Favourites yet. Open any entry in the log and tap the star to save it here. You can then filter by category, for example to show only Glitches.</p>`;
  }
  const byCat = new Map();
  for (const rec of recs) {
    const key = rec.custom ? "custom" : rec.catId;
    if (!byCat.has(key)) byCat.set(key, []);
    byCat.get(key).push(rec);
  }
  const order = [...(DATA.categories || []).map((c) => c.id), "custom"];
  const cats = order.filter((id) => byCat.has(id));
  const filter = filterCat && byCat.has(filterCat) ? filterCat : "all";
  const chips = [`<button type="button" class="chip${filter === "all" ? " is-on" : ""}" data-filter-cat="all" aria-pressed="${filter === "all" ? "true" : "false"}">All</button>`]
    .concat(
      cats.map(
        (id) =>
          `<button type="button" class="chip${filter === id ? " is-on" : ""}" data-filter-cat="${escapeHtml(id)}" aria-pressed="${filter === id ? "true" : "false"}">${escapeHtml(catShort(id))}</button>`
      )
    )
    .join("");
  const shown = cats.filter((id) => filter === "all" || filter === id);
  const sections = shown
    .map((id) => {
      const items = byCat.get(id) || [];
      items.sort((a, b) => a.item.localeCompare(b.item));
      return `<section class="saved-group">
        <h2 class="chapter">${escapeHtml(catHeading(id))}</h2>
        <div class="list">${items.map((rec) => savedCardHtml(rec, { showFound: false })).join("")}</div>
      </section>`;
    })
    .join("");
  return `<div class="chips" role="toolbar" aria-label="Filter Favourites by category">${chips}</div>
    ${sections || `<p class="empty">No Favourites in that category.</p>`}`;
}

function trackingPanelHtml() {
  const recs = Object.values(SAVED.tracking);
  if (!recs.length) {
    return `<p class="empty saved-empty">Nothing in Tracking yet. Tap the target on any log entry to hunt it, or add something that is not in the log, such as “Find a purple Toros”.</p>
      ${customTrackFormHtml()}`;
  }
  const open = recs.filter((r) => !r.found).sort((a, b) => a.item.localeCompare(b.item));
  const found = recs.filter((r) => r.found).sort((a, b) => String(b.foundAt || "").localeCompare(String(a.foundAt || "")));
  const progress = `<p class="meta-count">${found.length} of ${recs.length} found</p>`;
  const openList = open.length
    ? `<div class="list">${open.map((rec) => savedCardHtml(rec, { showFound: true })).join("")}</div>`
    : `<p class="empty">You have found everything you were tracking. Add another item, or reopen something from Found.</p>`;
  const foundBlock = found.length
    ? `<details class="found-block">
        <summary>Found <span>(${found.length})</span></summary>
        <div class="list">${found.map((rec) => savedCardHtml(rec, { showFound: true, foundList: true })).join("")}</div>
      </details>`
    : "";
  return `${progress}
    ${customTrackFormHtml()}
    ${openList}
    ${foundBlock}`;
}

function customTrackFormHtml() {
  return `<form class="custom-track-form" data-custom-track>
      <h2>Add a custom item</h2>
      <label class="save-note-wrap">Title
        <input class="save-field" type="text" name="title" maxlength="120" required placeholder="Find a purple Toros" autocomplete="off">
      </label>
      <label class="save-note-wrap">Note (optional)
        <input class="save-field" type="text" name="note" maxlength="400" placeholder="Where you last looked, or why you want it" autocomplete="off">
      </label>
      <button type="submit" class="tool-btn tool-btn-solid">Add to Tracking</button>
    </form>`;
}

function savedCardHtml(rec, options = {}) {
  const item = displayItemFromSaved(rec);
  const missing = itemIsMissing(rec.catId, rec.item, rec);
  const catId = rec.custom ? "saved" : rec.catId;
  const note = getPersonalNote(rec.id);
  const foundDate = rec.found ? formatFoundDate(rec.foundAt) : "";
  const extraBadges = [
    missing ? '<span class="badge missing">No longer in log</span>' : "",
    rec.custom ? '<span class="badge custom">Custom</span>' : "",
    rec.found && foundDate ? `<span class="badge done">Found ${escapeHtml(foundDate)}</span>` : "",
  ]
    .filter(Boolean)
    .join("");
  const foundRow = options.showFound
    ? `<label class="found-check">
        <input type="checkbox" data-found-id="${escapeHtml(rec.id)}" ${rec.found ? "checked" : ""}>
        <span>Found it${foundDate ? ` · ${escapeHtml(foundDate)}` : ""}</span>
      </label>`
    : "";
  const personal = note ? `<p class="personal-note">${escapeHtml(note)}</p>` : "";
  return `<article class="card card-tap" role="button" tabindex="0" data-cat="${escapeHtml(catId)}" data-item="${escapeHtml(rec.custom ? rec.id : rec.item)}">
    <div class="card-row">
      ${thumbHtml(item, rec.custom ? "saved" : rec.catId, "sm")}
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${escapeHtml(rec.item)}</h3>
          <div class="badges">${extraBadges}</div>
        </div>
        ${item.location ? `<p class="loc">${escapeHtml(item.location)}</p>` : ""}
        ${item.note ? `<p class="note">${escapeHtml(item.note)}</p>` : ""}
        ${personal}
        ${foundRow}
      </div>
      ${saveButtonsHtml(catId, { item: rec.custom ? rec.id : rec.item }, rec)}
    </div>
  </article>`;
}

function customDetailHtml(rec) {
  const item = displayItemFromSaved(rec);
  return `<header class="app-header map-header">
      <button class="back-chevron back" type="button" data-back="1" aria-label="Back">‹</button>
      ${thumbHtml(item, "saved", "lg")}
      <div>
        <h1>${escapeHtml(rec.item)}</h1>
        <p class="sub">Custom tracking item</p>
      </div>
    </header>
    <div class="sheet">
      <div class="save-actions">
        ${saveButtonsHtml("saved", { item: rec.id }, rec)}
      </div>
      ${rec.custom ? "" : ""}
      <label class="found-check found-check-lg">
        <input type="checkbox" data-found-id="${escapeHtml(rec.id)}" ${rec.found ? "checked" : ""}>
        <span>Found it${rec.found && rec.foundAt ? ` · ${escapeHtml(formatFoundDate(rec.foundAt))}` : ""}</span>
      </label>
      ${personalNoteHtml(rec.id)}
    </div>`;
}

function cardHtml(item, highlightCurrent, catId, tappable, options = {}) {
  const kind = missionKind(item);
  const isCurrent = highlightCurrent && kind === "current";
  const location = item.location || "";
  const note = item.note || "";
  const mono = location && location.length <= 8 ? " mono" : "";
  const href = sourceHref(item.source);
  const src = href
    ? `<p class="src"><a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel(item.source))}</a></p>`
    : "";
  const canTap = tappable !== false && catId;
  const tapAttrs = canTap
    ? ` role="button" tabindex="0" data-cat="${escapeHtml(catId)}" data-item="${escapeHtml(item.item)}"`
    : "";
  return `<article class="card${isCurrent ? " current" : ""}${canTap ? " card-tap" : ""}"${tapAttrs}>
    <div class="card-row">
      ${thumbHtml(item, catId, "sm")}
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${escapeHtml(item.item)}</h3>
          <div class="badges">${badges(item, highlightCurrent, catId)}</div>
        </div>
        ${location ? `<p class="loc${mono}">${escapeHtml(location)}</p>` : ""}
        ${note ? `<p class="note">${escapeHtml(note)}</p>` : ""}
        ${src}
      </div>
      ${options.hideSave ? "" : saveButtonsHtml(catId, item)}
    </div>
  </article>`;
}

function grouped(items) {
  if (!items.some(chapterOf)) return [{ heading: null, items }];
  const groups = [];
  for (const item of items) {
    const heading = chapterOf(item);
    const last = groups[groups.length - 1];
    if (last && last.heading === heading) last.items.push(item);
    else groups.push({ heading, items: [item] });
  }
  return groups;
}

function parseRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const [path, qs] = raw.split("?");
  const parts = path.replace(/^\//, "").split("/").filter(Boolean);
  const view = parts[0] || "home";
  let itemName = null;
  let savedTab = "favourites";
  if (view === "saved" && parts[1] === "tracking") savedTab = "tracking";
  const itemIdx = parts.findIndex((part) => part === "item");
  if (itemIdx !== -1 && parts.length > itemIdx + 1) {
    const encoded = parts.slice(itemIdx + 1).join("/");
    try {
      itemName = decodeURIComponent(encoded);
    } catch (err) {
      itemName = encoded;
    }
  }
  const params = new URLSearchParams(qs || "");
  const query = params.get("q") || "";
  const filterCat = params.get("cat") || "all";
  return { view, query, itemName, savedTab, filterCat };
}

function setRoute(view, query, itemName, options = {}) {
  const params = new URLSearchParams();
  if (query && query.trim()) params.set("q", query.trim());
  if (view === "saved" && options.filterCat && options.filterCat !== "all") params.set("cat", options.filterCat);
  const q = params.toString() ? `?${params.toString()}` : "";
  let hash;
  if (itemName) hash = `#/${view}/item/${encodeURIComponent(itemName)}${q}`;
  else if (view === "home") hash = `#/${q}`;
  else hash = `#/${view}${q}`;
  if (location.hash !== hash) location.hash = hash;
  else render();
}

function formatTime() {
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date());
}

function statusBarHtml() {
  return `<div class="status-bar">
    <span class="status-time">${escapeHtml(formatTime())}</span>
    <span class="status-spacer"></span>
    <span class="status-icons" aria-hidden="true">
      <svg viewBox="0 0 18 14">${ICONS.signal}</svg>
      <svg viewBox="0 0 20 16">${ICONS.battery}</svg>
    </span>
  </div>`;
}

function dockHtml(data, view) {
  const savedOn = view === "saved";
  const savedCount = uniqueSavedCount();
  const buttons = [
    `<button class="nav-btn${view === "home" ? " active" : ""}" data-go="home">${icon("home")}Home</button>`,
    `<button class="nav-btn${savedOn ? " active" : ""}" data-go="saved"${savedOn ? ' aria-current="page"' : ""}><span class="dock-disc" style="${savedOn ? "" : "background:#f5c518"}">${icon("saved")}<span class="dock-badge" data-saved-count data-hide-zero${savedCount === 0 ? " hidden" : ""}>${savedCount}</span></span>Saved</button>`,
    ...data.categories.map(
      (cat) =>
        `<button class="nav-btn${view === cat.id ? " active" : ""}" data-go="${cat.id}"><span class="dock-disc" style="${view === cat.id ? "" : `background:${APP_COLORS[cat.id]}`}">${icon(cat.id)}</span>${escapeHtml(cat.short)}</button>`
    ),
  ];
  return `<div class="dock-wrap nav-wrap">
    <div class="app-version">${APP_VERSION}</div>
    <nav class="dock nav" aria-label="Categories">${buttons.join("")}</nav>
    <button type="button" class="nav-more" aria-label="More categories">${icon("chevron")}More</button>
  </div>`;
}

function updateNavActive(view) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    const on = btn.getAttribute("data-go") === view;
    btn.classList.toggle("active", on);
    if (on) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
}

function updateNavOverflow() {
  const wrap = document.querySelector(".dock-wrap") || document.querySelector(".nav-wrap");
  const nav = document.querySelector(".dock") || document.querySelector(".nav");
  if (!wrap || !nav) return;
  const max = 2;
  const start = nav.scrollLeft > max;
  const end = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - max;
  wrap.setAttribute("data-overflow-start", start ? "true" : "false");
  wrap.setAttribute("data-overflow-end", end ? "true" : "false");
}

function bindNav() {
  const nav = document.querySelector(".dock") || document.querySelector(".nav");
  const more = document.querySelector(".nav-more");
  if (!nav) return;
  nav.addEventListener("scroll", updateNavOverflow, { passive: true });
  if (more) {
    more.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      nav.scrollBy({ left: Math.max(160, nav.clientWidth * 0.7), behavior: "smooth" });
    });
  }
  updateNavOverflow();
}

function updateStandaloneClass() {
  const standalone =
    window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  document.documentElement.classList.toggle("standalone", standalone);
}

function startClock() {
  const tick = () => {
    document.querySelectorAll(".status-time").forEach((el) => {
      el.textContent = formatTime();
    });
  };
  if (!startClock.timer) startClock.timer = setInterval(tick, 30000);
  tick();
}

function appIconHtml(cat) {
  return `<button class="app-icon" type="button" data-go="${cat.id}" aria-label="${escapeHtml(cat.heading)}, ${cat.items.length} items">
    <span class="app-icon-disc" style="background:${APP_COLORS[cat.id] || APP_COLORS.home}">
      ${icon(cat.id)}
      <span class="app-badge">${cat.items.length}</span>
    </span>
    <span class="app-label">${escapeHtml(cat.short)}</span>
  </button>`;
}

function homeBody(data, query) {
  const q = query.trim().toLowerCase();
  const total = data.categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const facts = data.properties
    .map((p) => `<div><dt>${escapeHtml(p.label)}</dt><dd>${escapeHtml(p.value)}</dd></div>`)
    .join("");
  const rest = `<dl class="facts">${facts}</dl>
    <div class="callout"><strong>${escapeHtml(data.calloutLead)}</strong>${escapeHtml(data.calloutBody)}</div>
    <p class="footer">${escapeHtml(data.footer)}</p>`;

  const chrome = `<div class="home-title">
      <h1>${escapeHtml(data.title)}</h1>
      <p class="sub">${escapeHtml(data.summary)}</p>
    </div>
    <button type="button" class="banner" data-go="missions">
      <span class="banner-app">${icon("missions")}</span>
      <span>
        <span class="banner-kicker">Notification</span>
        <strong>Now playing: ${escapeHtml(data.currentMission)}</strong>
        <p>${escapeHtml(data.properties[0].value)}</p>
      </span>
    </button>
    <button type="button" class="widget" data-go="missions">
      <div class="widget-kicker">Reminders</div>
      <div class="widget-title">${escapeHtml(data.currentMission)}</div>
      <div class="widget-sub">${escapeHtml(data.properties[0].value)} · ${total} log entries</div>
    </button>
    <label class="sr-only" for="q" style="position:absolute;left:-9999px">Search</label>
    <input class="search" id="q" type="search" placeholder="Search the log" value="${escapeHtml(query)}" />`;

  if (!q) {
    return `${chrome}
      <div class="app-grid">
        <button class="app-icon" type="button" data-go="saved" aria-label="Saved, ${uniqueSavedCount()} items">
          <span class="app-icon-disc" style="background:${APP_COLORS.saved}">
            ${icon("saved")}
            <span class="app-badge" data-saved-count data-hide-zero${uniqueSavedCount() === 0 ? " hidden" : ""}>${uniqueSavedCount()}</span>
          </span>
          <span class="app-label">Saved</span>
        </button>
        ${data.categories.map(appIconHtml).join("")}
      </div>
      <p class="meta-count">${total} items across ${data.categories.length} categories</p>
      ${rest}`;
  }

  const results = data.categories
    .map((cat) => ({ cat, items: cat.items.filter((item) => itemMatches(item, q)) }))
    .filter((row) => row.items.length);
  if (!results.length) return `${chrome}<p class="empty">No items match that search.</p>${rest}`;
  return `${chrome}${results
    .map(
      (row) => `<section>
        <div class="group-head">
          <h2>${escapeHtml(row.cat.heading)}</h2>
          <button class="linkish" data-go="${row.cat.id}">Open ${escapeHtml(row.cat.short)}</button>
        </div>
        <div class="list">${row.items.map((item) => cardHtml(item, row.cat.id === "missions", row.cat.id)).join("")}</div>
      </section>`
    )
    .join("")}
    ${rest}`;
}

function categoryBody(cat, query) {
  const q = query.trim().toLowerCase();
  const visible = cat.items.filter((item) => itemMatches(item, q));
  const groups = grouped(visible);
  const currentCallout =
    cat.id === "missions"
      ? `<div class="widget"><div class="widget-kicker">Now playing</div><div class="widget-title">Discharge Time</div><div class="widget-sub">Chapter 1, up to Discharge Time.</div></div>`
      : "";
  const steps =
    cat.steps && !q
      ? `<div class="steps">${cat.steps
          .map(
            (step, i) => `<div class="step"><div class="n">Step ${i + 1}</div><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.detail)}</p></div>`
          )
          .join("")}</div>`
      : "";
  const list = visible.length
    ? groups
        .map(
          (group) =>
            `${group.heading ? `<div class="chapter">${escapeHtml(group.heading)}</div>` : ""}<div class="list">${group.items
              .map((item) => cardHtml(item, cat.id === "missions", cat.id))
              .join("")}</div>`
        )
        .join("")
    : `<p class="empty">No items match that search.</p>`;
  return `<header class="app-header">
      <button class="back-chevron" type="button" data-go="home" aria-label="Back">‹</button>
      <div>
        <h1>${escapeHtml(cat.heading)}</h1>
        <p class="sub">${escapeHtml(cat.short)}</p>
      </div>
    </header>
    ${cat.caption ? `<p class="caption">${escapeHtml(cat.caption)}</p>` : ""}
    ${currentCallout}
    <label class="sr-only" for="q" style="position:absolute;left:-9999px">Search</label>
    <input class="search" id="q" type="search" placeholder="Filter this category" value="${escapeHtml(query)}" />
    ${steps}
    <p class="meta-count">${visible.length} of ${cat.items.length} ${cat.items.length === 1 ? "item" : "items"}${q ? " matching this search" : ""}</p>
    ${list}`;
}

function hasMapMarker(item) {
  return Number.isFinite(item.mx) && Number.isFinite(item.my);
}

function findItem(cat, name) {
  return (cat && cat.items.find((item) => item.item === name)) || null;
}

function detailHtml(cat, item) {
  const marked = hasMapMarker(item);
  const marker = marked
    ? `<div class="map-marker" style="left:${item.mx}%;top:${item.my}%" aria-hidden="true"></div>`
    : "";
  const caption = marked
    ? `Approximate location: ${escapeHtml(item.area || "unknown")}`
    : "Location not confirmed yet";
  const showMap = MAP_CATEGORIES.has(cat.id);
  const photo = thumbSpec(item, cat.id);
  const hero = photo.type === "image"
    ? `<div class="detail-hero">
        <img class="detail-photo" src="${escapeHtml(photo.src)}" alt="${escapeHtml(thumbAlt(item, photo))}" width="640" height="360" loading="lazy">
      </div>
      ${imageCreditHtml(item)}`
    : "";
  const mapBlock = showMap
    ? `<div class="map-frame">
      <img class="map-image" src="${MAP_SRC}" alt="${escapeHtml(MAP_ALT)}" width="1600" height="2190" />
      ${marker}
    </div>
    <p class="map-caption">${caption}</p>`
    : "";
  return `<header class="app-header map-header">
      <button class="back-chevron back" type="button" data-back="1" aria-label="Back">‹</button>
      ${thumbHtml(item, cat.id, "lg")}
      <div>
        <h1>${escapeHtml(item.item)}</h1>
        <p class="sub">${escapeHtml(cat.heading)}</p>
      </div>
    </header>
    ${hero}
    <div class="sheet">
      <div class="save-actions">
        ${saveButtonsHtml(cat.id, item)}
        <p class="save-actions-copy">Star this to keep it in Favourites, or track it while you hunt for it.</p>
      </div>
      ${cardHtml(item, false, cat.id, false, { hideSave: true })}
      ${personalNoteHtml(entryId(cat.id, item.item))}
    </div>
    ${mapBlock}`;
}

function scrollKey(view, query) {
  return `${view}::${query || ""}`;
}

function saveScroll(view, query) {
  const content = document.querySelector(".content");
  if (content) scrollMemory[scrollKey(view, query)] = content.scrollTop;
}

function restoreScroll(view, query) {
  const content = document.querySelector(".content");
  const top = scrollMemory[scrollKey(view, query)];
  if (!content || top == null) return;
  const apply = () => {
    content.scrollTop = top;
  };
  apply();
  requestAnimationFrame(apply);
}

let DATA = null;
let searchTimer = 0;
let currentView = null;
let listenersBound = false;
let scrollMemory = {};
let openedDetailFromApp = false;

function currentCat(view) {
  return DATA.categories.find((c) => c.id === view);
}

function resultsHtml(view, query) {
  if (view === "saved") {
    const { savedTab, filterCat } = parseRoute();
    return savedBody(savedTab, filterCat);
  }
  const cat = currentCat(view);
  return cat ? categoryBody(cat, query) : homeBody(DATA, query);
}

function bindSearch(view) {
  const input = document.getElementById("q");
  if (!input) return;
  input.addEventListener("input", () => {
    clearTimeout(searchTimer);
    const from = currentCat(view) ? view : "home";
    searchTimer = setTimeout(() => setRoute(from, input.value), 80);
  });
}

function shellViewOf(view) {
  if (view === "saved" || currentCat(view)) return view === "saved" ? "saved" : view;
  return "home";
}

function renderPhone(view, innerHtml, options = {}) {
  const shellView = shellViewOf(view);
  const root = document.getElementById("app");
  root.innerHTML = `<div class="phone">
    ${statusBarHtml()}
    <div class="content${options.detail ? " content-detail" : ""}${options.detail && MAP_CATEGORIES.has(view) ? " content-map" : ""}">${innerHtml}</div>
    ${dockHtml(DATA, shellView)}
  </div>`;
  if (!options.detail && view !== "saved") bindSearch(shellView);
  bindNav();
  startClock();
  const content = root.querySelector(".content");
  if (content && !options.keepScroll) content.scrollTop = 0;
}

function renderShell(view, query) {
  if (view === "saved") {
    const { savedTab, filterCat } = parseRoute();
    renderPhone("saved", savedBody(savedTab, filterCat));
    return;
  }
  const cat = currentCat(view);
  renderPhone(view, cat ? categoryBody(cat, query) : homeBody(DATA, query));
}

function renderResults(view, query) {
  const content = document.querySelector(".content");
  if (!content) return;
  content.innerHTML = resultsHtml(view, query);
  bindSearch(view);
}

function findSavedRecord(catId, name) {
  if (!name) return null;
  if (SAVED.tracking[name]) return SAVED.tracking[name];
  if (SAVED.favourites[name]) return SAVED.favourites[name];
  const id = catId ? entryId(catId, name) : "";
  return (id && (SAVED.tracking[id] || SAVED.favourites[id])) || null;
}

function renderDetail(cat, itemName) {
  if ((!cat || cat.id === "saved") && itemName) {
    const rec = findSavedRecord(cat && cat.id, itemName);
    if (rec && rec.custom) {
      renderPhone("saved", customDetailHtml(rec), { detail: true });
      return;
    }
    if (rec && rec.catId && rec.catId !== "custom") {
      const realCat = currentCat(rec.catId);
      const live = liveItem(rec.catId, rec.item);
      if (live && realCat) {
        renderPhone(realCat.id, detailHtml(realCat, live), { detail: true });
        return;
      }
      const ghost = displayItemFromSaved(rec);
      ghost.missing = true;
      const ghostCat = realCat || { id: rec.catId, heading: catHeading(rec.catId) };
      renderPhone(ghostCat.id || "saved", detailHtml(ghostCat, ghost), { detail: true });
      return;
    }
  }
  const item = findItem(cat, itemName);
  if (!item && cat && itemName) {
    const rec = findSavedRecord(cat.id, itemName);
    if (rec) {
      const ghost = displayItemFromSaved(rec);
      ghost.missing = itemIsMissing(rec.catId, rec.item, rec);
      renderPhone(cat.id, detailHtml(cat, ghost), { detail: true });
      return;
    }
  }
  const body = item
    ? detailHtml(cat, item)
    : `<header class="app-header">
        <button class="back-chevron back" type="button" data-back="1" aria-label="Back">‹</button>
        <div>
          <h1>Saved</h1>
          <p class="sub">${escapeHtml(cat ? cat.heading : "GTA 6 Log")}</p>
        </div>
      </header>
      <p class="empty">That entry was not found.</p>`;
  renderPhone(cat ? cat.id : "home", body, { detail: true });
}

function render() {
  const { view, query, itemName, savedTab, filterCat } = parseRoute();
  const cat = currentCat(view);
  const shellView = shellViewOf(view);
  const isDetail = Boolean(itemName) && (Boolean(cat) || view === "saved");
  const wasDetail = currentView && String(currentView).endsWith("::detail");
  const shellKey = isDetail
    ? `${shellView}::detail`
    : view === "saved"
      ? `saved::${savedTab || "favourites"}::${filterCat || "all"}`
      : shellView;

  if (isDetail) {
    renderDetail(cat || { id: "saved", heading: "Saved" }, itemName);
    currentView = shellKey;
    paintSaveButtons(document);
    return;
  }

  const input = document.getElementById("q");
  const hasShell = document.querySelector(".phone") && document.querySelector(".content") && !document.querySelector(".content-detail");

  if (!hasShell || currentView !== shellKey) {
    renderShell(shellView, query);
    currentView = shellKey;
    if (wasDetail) restoreScroll(shellView, query);
    return;
  }

  if (input && document.activeElement !== input && input.value !== query) {
    input.value = query;
  }
  renderResults(shellView, query);
  updateNavActive(shellView);
  updateNavOverflow();
  paintSaveButtons(document);
  if (wasDetail) restoreScroll(shellView, query);
}

function openDetail(catId, itemName, query) {
  const { view } = parseRoute();
  const listView = currentCat(view) ? view : "home";
  saveScroll(listView, query);
  openedDetailFromApp = true;
  setRoute(catId, query, itemName);
}

function backFromDetail() {
  if (openedDetailFromApp && window.history.length > 1) {
    openedDetailFromApp = false;
    history.back();
    return;
  }
  openedDetailFromApp = false;
  const { view, query } = parseRoute();
  setRoute(view, query);
}

function refreshSavedOrButtons() {
  const { view } = parseRoute();
  const content = document.querySelector(".content");
  const onSaved = view === "saved" && content && !content.classList.contains("content-detail");
  if (onSaved) {
    const top = content.scrollTop;
    const foundOpen = Boolean(content.querySelector(".found-block[open]"));
    render();
    const next = document.querySelector(".content");
    if (next) {
      next.scrollTop = top;
      const block = next.querySelector(".found-block");
      if (block && foundOpen) block.open = true;
    }
    return;
  }
  const noteWrap = document.querySelector(".save-note-wrap, .save-actions");
  const onDetail = Boolean(document.querySelector(".content-detail"));
  if (onDetail && noteWrap) {
    const top = content ? content.scrollTop : 0;
    render();
    const next = document.querySelector(".content");
    if (next) next.scrollTop = top;
    return;
  }
  paintSaveButtons(document);
}

async function copySavedBackup() {
  const json = exportSavedJson();
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(json);
      showSavedStatus("Copied your Saved backup.");
      return;
    }
  } catch (err) {}
  const area = document.createElement("textarea");
  area.value = json;
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    showSavedStatus("Copied your Saved backup.");
  } catch (err) {
    showSavedStatus("Could not copy. Use Download instead.");
  }
  area.remove();
}

function downloadSavedBackup() {
  const blob = new Blob([exportSavedJson()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "gta6-log-saved.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showSavedStatus("Downloaded gta6-log-saved.json.");
}

function applyImportedSaved(text) {
  if (!String(text || "").trim()) throw new Error("Paste a backup first, or choose a file.");
  if (!window.confirm("Replace your current Favourites and Tracking list with this backup?")) return;
  const result = importSavedJson(text);
  refreshSavedOrButtons();
  showSavedStatus(`Imported ${result.favs} favourites and ${result.tracks} tracked items.`);
}

function onClick(event) {
  const more = event.target.closest(".nav-more");
  if (more) return;
  if (event.target.closest("a")) return;
  if (event.target.closest(".save-note, .save-field, .import-json, .import-file, .found-check, .custom-track-form, .import-panel")) {
    return;
  }
  const back = event.target.closest("[data-back]");
  if (back) {
    event.preventDefault();
    backFromDetail();
    return;
  }
  const saveBtn = event.target.closest("[data-save]");
  if (saveBtn) {
    event.preventDefault();
    event.stopPropagation();
    const kind = saveBtn.getAttribute("data-save");
    const catId = saveBtn.getAttribute("data-cat");
    const name = saveBtn.getAttribute("data-name");
    const rec = findSavedRecord(catId, name) || findSavedRecord(catId, saveBtn.getAttribute("data-id"));
    if (kind === "fav") toggleFavourite(catId, name, rec);
    else toggleTracking(catId, name, rec);
    refreshSavedOrButtons();
    return;
  }
  const exportBtn = event.target.closest("[data-export]");
  if (exportBtn) {
    event.preventDefault();
    if (exportBtn.getAttribute("data-export") === "download") downloadSavedBackup();
    else copySavedBackup();
    return;
  }
  const importToggle = event.target.closest("[data-import-toggle]");
  if (importToggle) {
    event.preventDefault();
    const panel = document.querySelector(".import-panel");
    if (panel) panel.hidden = !panel.hidden;
    return;
  }
  const importApply = event.target.closest("[data-import-apply]");
  if (importApply) {
    event.preventDefault();
    const area = document.querySelector(".import-json");
    try {
      applyImportedSaved(area ? area.value : "");
    } catch (err) {
      showSavedStatus(err.message || "Could not import that backup.");
    }
    return;
  }
  const filterBtn = event.target.closest("[data-filter-cat]");
  if (filterBtn) {
    event.preventDefault();
    const { savedTab } = parseRoute();
    const hash = savedTab === "tracking" ? "saved/tracking" : "saved";
    setRoute(hash, "", null, { filterCat: filterBtn.getAttribute("data-filter-cat") || "all" });
    return;
  }
  const itemEl = event.target.closest("[data-item]");
  if (itemEl) {
    event.preventDefault();
    const { query } = parseRoute();
    openDetail(itemEl.getAttribute("data-cat"), itemEl.getAttribute("data-item"), query);
    return;
  }
  const go = event.target.closest("[data-go]");
  if (!go) return;
  event.preventDefault();
  openedDetailFromApp = false;
  setRoute(go.getAttribute("data-go"), "");
}

function onKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("[data-save], .found-check, .save-note, .save-field, .custom-track-form")) return;
  const itemEl = event.target.closest("[data-item]");
  if (!itemEl || event.target !== itemEl) return;
  if (event.target.closest("a")) return;
  event.preventDefault();
  const { query } = parseRoute();
  openDetail(itemEl.getAttribute("data-cat"), itemEl.getAttribute("data-item"), query);
}

function onChange(event) {
  const found = event.target.closest("[data-found-id]");
  if (found) {
    setTrackedFound(found.getAttribute("data-found-id"), found.checked);
    refreshSavedOrButtons();
    return;
  }
  const fileInput = event.target.closest(".import-file-input");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        applyImportedSaved(String(reader.result || ""));
      } catch (err) {
        showSavedStatus(err.message || "Could not import that file.");
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
}

function onInput(event) {
  const area = event.target.closest("[data-note-id]");
  if (!area) return;
  clearTimeout(savedNoteTimer);
  savedNoteTimer = setTimeout(() => {
    setPersonalNote(area.getAttribute("data-note-id"), area.value);
  }, 120);
}

function onFocusOut(event) {
  const area = event.target.closest && event.target.closest("[data-note-id]");
  if (!area) return;
  clearTimeout(savedNoteTimer);
  setPersonalNote(area.getAttribute("data-note-id"), area.value);
}

function onSubmit(event) {
  const form = event.target.closest("[data-custom-track]");
  if (!form) return;
  event.preventDefault();
  const title = (form.querySelector('[name="title"]') || {}).value || "";
  const note = (form.querySelector('[name="note"]') || {}).value || "";
  const id = addCustomTracking(title, note);
  if (!id) {
    showSavedStatus("Enter a title for the custom item.");
    return;
  }
  if (parseRoute().view !== "saved") setRoute("saved/tracking", "");
  else refreshSavedOrButtons();
  showSavedStatus("Added to Tracking.");
}

async function boot() {
  updateStandaloneClass();
  try {
    await ensureSprite();
    await loadSaved();
    const response = await fetch("data.json", { cache: "no-cache" });
    DATA = await response.json();
    document.title = DATA.title;
    render();
    if (!listenersBound) {
      window.addEventListener("hashchange", render);
      document.addEventListener("click", onClick);
      document.addEventListener("keydown", onKeydown);
      document.addEventListener("change", onChange);
      document.addEventListener("input", onInput);
      document.addEventListener("focusout", onFocusOut);
      document.addEventListener("submit", onSubmit);
      window.addEventListener("resize", () => {
        updateStandaloneClass();
        updateNavOverflow();
      });
      listenersBound = true;
    }
  } catch (err) {
    document.getElementById("app").innerHTML = `<p class="boot">Could not load the log. ${escapeHtml(err.message)}</p>`;
  }
}

boot();
