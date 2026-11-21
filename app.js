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
};

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
  return isChat(source) ? "Our chats" : source[1];
}

function sourceHref(source) {
  return isChat(source) ? null : source[0];
}

function itemMatches(item, query) {
  if (!query) return true;
  const blob = `${item.item} ${item.location} ${item.note} ${sourceLabel(item.source)}`.toLowerCase();
  return blob.includes(query);
}

function missionKind(item) {
  if (item.item === "Discharge Time" || item.note.startsWith("Current")) return "current";
  if (item.note.startsWith("Done")) return "done";
  if (item.note.startsWith("Not started")) return "later";
  return null;
}

function chapterOf(item) {
  if (item.location.startsWith("Chapter 1")) return "Chapter 1";
  if (item.location.startsWith("Chapter 2")) return "Chapter 2";
  return null;
}

function badges(item, highlightCurrent, catId) {
  const kind = missionKind(item);
  const parts = [];
  if (highlightCurrent && kind === "current") parts.push('<span class="badge current-badge">Current</span>');
  if (kind === "done") parts.push('<span class="badge done">Done</span>');
  if (kind === "later") parts.push('<span class="badge later">Not started</span>');
  if (isChat(item.source)) parts.push('<span class="badge chat">Our chats</span>');
  if (MAP_CATEGORIES.has(catId)) parts.push('<span class="badge map">View map</span>');
  return parts.join("");
}

function cardHtml(item, highlightCurrent, catId) {
  const kind = missionKind(item);
  const isCurrent = highlightCurrent && kind === "current";
  const mono = item.location.length <= 8 ? " mono" : "";
  const src = isChat(item.source)
    ? ""
    : `<p class="src"><a href="${escapeHtml(sourceHref(item.source))}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel(item.source))}</a></p>`;
  const mappable = MAP_CATEGORIES.has(catId);
  const tapAttrs = mappable
    ? ` role="button" tabindex="0" data-cat="${escapeHtml(catId)}" data-item="${escapeHtml(item.item)}"`
    : "";
  return `<article class="card${isCurrent ? " current" : ""}${mappable ? " card-tap" : ""}"${tapAttrs}>
    <div class="card-head">
      <h3 class="card-title">${escapeHtml(item.item)}</h3>
      <div class="badges">${badges(item, highlightCurrent, catId)}</div>
    </div>
    <p class="loc${mono}">${escapeHtml(item.location)}</p>
    <p class="note">${escapeHtml(item.note)}</p>
    ${src}
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
  if (parts[1] === "item" && parts.length > 2) {
    const encoded = parts.slice(2).join("/");
    try {
      itemName = decodeURIComponent(encoded);
    } catch (err) {
      itemName = encoded;
    }
  }
  const query = new URLSearchParams(qs || "").get("q") || "";
  return { view, query, itemName };
}

function setRoute(view, query, itemName) {
  const q = query && query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
  let hash;
  if (itemName) hash = `#/${view}/item/${encodeURIComponent(itemName)}${q}`;
  else if (view === "home") hash = `#/${q}`;
  else hash = `#/${view}${q}`;
  if (location.hash !== hash) location.hash = hash;
  else render();
}

function navHtml(data, view) {
  const buttons = [
    `<button class="nav-btn${view === "home" ? " active" : ""}" data-go="home">${icon("home")}Home</button>`,
    ...data.categories.map(
      (cat) =>
        `<button class="nav-btn${view === cat.id ? " active" : ""}" data-go="${cat.id}">${icon(cat.id)}${escapeHtml(cat.short)}</button>`
    ),
  ];
  return `<div class="nav-wrap">
    <nav class="nav" aria-label="Categories">${buttons.join("")}</nav>
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
  const wrap = document.querySelector(".nav-wrap");
  const nav = document.querySelector(".nav");
  if (!wrap || !nav) return;
  const max = 2;
  const start = nav.scrollLeft > max;
  const end = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - max;
  wrap.setAttribute("data-overflow-start", start ? "true" : "false");
  wrap.setAttribute("data-overflow-end", end ? "true" : "false");
}

function bindNav() {
  const nav = document.querySelector(".nav");
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

function homeChrome(data, query) {
  return `<header class="top">
      <div>
        <h1>${escapeHtml(data.title)}</h1>
        <p class="sub">${escapeHtml(data.summary)}</p>
      </div>
    </header>
    <div class="progress">
      <div>Current mission: <strong>${escapeHtml(data.currentMission)}</strong></div>
      <p>${escapeHtml(data.properties[0].value)}</p>
    </div>
    <label class="sr-only" for="q" style="position:absolute;left:-9999px">Search</label>
    <input class="search" id="q" type="search" placeholder="Code, weapon, mission, location…" value="${escapeHtml(query)}" />`;
}

function homeResults(data, query) {
  const q = query.trim().toLowerCase();
  const total = data.categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const facts = data.properties
    .map((p) => `<div><dt>${escapeHtml(p.label)}</dt><dd>${escapeHtml(p.value)}</dd></div>`)
    .join("");
  const rest = `<dl class="facts">${facts}</dl>
    <div class="callout"><strong>${escapeHtml(data.calloutLead)}</strong>${escapeHtml(data.calloutBody)}</div>
    <p class="footer">${escapeHtml(data.footer)}</p>`;

  if (!q) {
    return `<div class="tiles">
      ${data.categories
        .map(
          (cat) => `<button class="tile" data-go="${cat.id}" aria-label="${escapeHtml(cat.heading)}, ${cat.items.length} items">
            ${icon(cat.id)}
            <span class="name">${escapeHtml(cat.short)}</span>
            <span class="count">${cat.items.length} ${cat.items.length === 1 ? "item" : "items"}</span>
          </button>`
        )
        .join("")}
    </div>
    <p class="meta-count">${total} items across ${data.categories.length} categories</p>
    ${rest}`;
  }

  const results = data.categories
    .map((cat) => ({ cat, items: cat.items.filter((item) => itemMatches(item, q)) }))
    .filter((row) => row.items.length);
  if (!results.length) return `<p class="empty">No items match that search.</p>${rest}`;
  return `${results
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

function categoryChrome(cat, query) {
  const currentCallout =
    cat.id === "missions"
      ? `<div class="progress"><div>Current mission: <strong>Discharge Time</strong></div><p>Chapter 1, up to Discharge Time.</p></div>`
      : "";
  return `<header class="top">
      <button class="back" data-go="home">Home</button>
      <div>
        <h1>${escapeHtml(cat.heading)}</h1>
        <p class="sub">${escapeHtml(cat.short)}</p>
      </div>
    </header>
    ${cat.caption ? `<p class="caption">${escapeHtml(cat.caption)}</p>` : ""}
    ${currentCallout}
    <label class="sr-only" for="q" style="position:absolute;left:-9999px">Search</label>
    <input class="search" id="q" type="search" placeholder="Filter this category" value="${escapeHtml(query)}" />`;
}

function categoryResults(cat, query) {
  const q = query.trim().toLowerCase();
  const visible = cat.items.filter((item) => itemMatches(item, q));
  const groups = grouped(visible);
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
  return `${steps}
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
  return `<header class="top">
      <button class="back" type="button" data-back="1">Back</button>
      <div>
        <h1>${escapeHtml(item.item)}</h1>
        <p class="sub">${escapeHtml(cat.heading)}</p>
      </div>
    </header>
    <div class="list">${cardHtml(item, false)}</div>
    <div class="map-frame">
      <img class="map-image" src="${MAP_SRC}" alt="${escapeHtml(MAP_ALT)}" width="1600" height="2190" />
      ${marker}
    </div>
    <p class="map-caption">${caption}</p>`;
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
  const cat = currentCat(view);
  return cat ? categoryResults(cat, query) : homeResults(DATA, query);
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

function renderResults(view, query) {
  const results = document.getElementById("results");
  if (!results) return;
  results.innerHTML = resultsHtml(view, query);
}

function renderShell(view, query) {
  const cat = currentCat(view);
  const chrome = cat ? categoryChrome(cat, query) : homeChrome(DATA, query);
  const root = document.getElementById("app");
  root.innerHTML = `<div class="shell">
    <div class="content">
      <div id="chrome">${chrome}</div>
      <div id="results">${resultsHtml(view, query)}</div>
    </div>
    ${navHtml(DATA, cat ? view : "home")}
  </div>`;
  bindSearch(view);
  bindNav();
  const content = root.querySelector(".content");
  if (content) content.scrollTop = 0;
}

function renderDetail(cat, itemName, query) {
  const item = findItem(cat, itemName);
  const root = document.getElementById("app");
  const body = item
    ? detailHtml(cat, item)
    : `<header class="top">
        <button class="back" type="button" data-back="1">Back</button>
        <div>
          <h1>Map</h1>
          <p class="sub">${escapeHtml(cat ? cat.heading : "GTA 6 Log")}</p>
        </div>
      </header>
      <p class="empty">That entry was not found.</p>`;
  root.innerHTML = `<div class="shell">
    <div class="content">${body}</div>
    ${navHtml(DATA, cat ? cat.id : "home")}
  </div>`;
  bindNav();
  const content = root.querySelector(".content");
  if (content) content.scrollTop = 0;
}

function render() {
  const { view, query, itemName } = parseRoute();
  const cat = currentCat(view);
  const shellView = cat ? view : "home";
  const isDetail = Boolean(itemName) && MAP_CATEGORIES.has(view);
  const wasDetail = currentView && String(currentView).endsWith("::detail");
  const shellKey = isDetail ? `${shellView}::detail` : shellView;

  if (isDetail) {
    if (!cat) {
      setRoute("home", query);
      return;
    }
    renderDetail(cat, itemName, query);
    currentView = shellKey;
    return;
  }

  const input = document.getElementById("q");
  const hasShell = document.getElementById("results") && document.querySelector(".shell");

  if (!hasShell || currentView !== shellView) {
    renderShell(shellView, query);
    currentView = shellView;
    if (wasDetail) restoreScroll(shellView, query);
    return;
  }

  if (input && document.activeElement !== input && input.value !== query) {
    input.value = query;
  }
  renderResults(shellView, query);
  updateNavActive(shellView);
  updateNavOverflow();
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

function onClick(event) {
  const more = event.target.closest(".nav-more");
  if (more) return;
  if (event.target.closest("a")) return;
  const back = event.target.closest("[data-back]");
  if (back) {
    event.preventDefault();
    backFromDetail();
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
  const itemEl = event.target.closest("[data-item]");
  if (!itemEl || event.target !== itemEl) return;
  if (event.target.closest("a")) return;
  event.preventDefault();
  const { query } = parseRoute();
  openDetail(itemEl.getAttribute("data-cat"), itemEl.getAttribute("data-item"), query);
}

async function boot() {
  try {
    const response = await fetch("data.json", { cache: "no-cache" });
    DATA = await response.json();
    document.title = DATA.title;
    render();
    if (!listenersBound) {
      window.addEventListener("hashchange", render);
      document.addEventListener("click", onClick);
      document.addEventListener("keydown", onKeydown);
      window.addEventListener("resize", updateNavOverflow);
      listenersBound = true;
    }
  } catch (err) {
    document.getElementById("app").innerHTML = `<p class="boot">Could not load the log. ${escapeHtml(err.message)}</p>`;
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

boot();
