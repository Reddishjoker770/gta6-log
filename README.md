# GTA 6 Running Log (PWA)

Installable Progressive Web App copy of Tyas's GTA 6 Running Log, presented like an in-game smartphone.

- Content lives in `data.json`. Append new items to the matching category's `items` array (and `steps` under Controls when needed). Never remove or rewrite "Our chats" entries.
- Tapping a Weapons or Vehicles entry opens a detail view with the official Leonida map. Known locations get a red circle marker; others say the location is not confirmed yet.
- The visible version label is `v5 · images`. After changing the shell, bump that label, the `?v=` query on `app.js`/`styles.css`/`fonts.css`, and add a `thumb` icon id (or image path) on new `data.json` entries, and the `CACHE` name in `sw.js`.
- The service worker uses network-first for the app shell (`index.html`, `app.js`, `styles.css`, `data.json`) and cache-first for images and fonts. It also claims clients and reloads when a new version activates. `data.json` stays network-first with a cache fallback for offline use.
- Inter is self-hosted under `fonts/` (SIL Open Font License 1.1). See `fonts/OFL.txt`.
- This PWA and the Cursor Page are separate copies. Updating one does not update the other.
- To install on a phone: open the HTTPS URL in Safari or Chrome, then "Add to Home Screen" / "Install app".
