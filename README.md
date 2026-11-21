# GTA 6 Running Log (PWA)

Installable Progressive Web App copy of Tyas's GTA 6 Running Log, presented like an in-game smartphone.

- Content lives in `data.json`. Append new items to the matching category's `items` array (and `steps` under Controls when needed). Never remove or rewrite "Our chats" entries.
- Tapping a Weapons or Vehicles entry opens a detail view with the official Leonida map. Known locations get a red circle marker; others say the location is not confirmed yet.
- The visible version label is `v7 · saved`. After changing the shell, bump that label, the `?v=` query on `app.js`/`styles.css`/`fonts.css`, and the `CACHE` name in `sw.js` (see the comment at the top of `sw.js`). Add a `thumb` icon id on new `data.json` entries (plus `img` and `imgSource` when a confirmed photo exists; the app falls back to the subtype icon if `img` is missing). Do not rename those field names.
- Favourites and Tracking live in the Saved app and are stored on-device (`localStorage`, with an IndexedDB fallback). Entries are keyed by category id plus a slug of the item name, not array index, so routine edits to `data.json` do not break saved items. Use Export/Import in Saved to back up or restore that list.
- The service worker uses network-first for the app shell (`index.html`, `app.js`, `styles.css`, `data.json`) and cache-first for images and fonts. It also claims clients and reloads when a new version activates. `data.json` stays network-first with a cache fallback for offline use.
- Inter is self-hosted under `fonts/` (SIL Open Font License 1.1). See `fonts/OFL.txt`.
- This PWA and the Cursor Page are separate copies. Updating one does not update the other.
- To install on a phone: open the HTTPS URL in Safari or Chrome, then "Add to Home Screen" / "Install app".
