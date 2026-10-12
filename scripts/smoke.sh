#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

[ -d node_modules ] || npm ci
trap 'git checkout -q -- Gr4vy.postman_collection.json' EXIT
rm -f Gr4vy.postman_collection.json
npm run build
node -e '
const c = JSON.parse(require("fs").readFileSync("Gr4vy.postman_collection.json", "utf8"));
if (!Array.isArray(c.item) || c.item.length === 0) { console.error("collection has no items"); process.exit(1); }
console.log(`collection OK: ${c.item.length} top-level items`);'
