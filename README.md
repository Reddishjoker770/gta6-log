# GTA 6 Running Log (PWA)

Installable Progressive Web App copy of Tyas's GTA 6 Running Log.

- Content lives in `data.json`. Append new items to the matching category's `items` array (and `steps` under Controls when needed). Never remove or rewrite "Our chats" entries.
- After changing `data.json`, redeploy this folder. The service worker caches the shell; `data.json` is served network-first and falls back to the cache offline. If the shell changes, bump the `CACHE` name in `sw.js`.
- This PWA and the Cursor Page are separate copies. Updating one does not update the other.
- To install on a phone: open the HTTPS URL in Safari or Chrome, then "Add to Home Screen" / "Install app".
