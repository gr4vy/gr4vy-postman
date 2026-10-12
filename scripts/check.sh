#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

npm ci
trap 'git checkout -q -- Gr4vy.postman_collection.json' EXIT
rm -f Gr4vy.postman_collection.json
npm run build
test -s Gr4vy.postman_collection.json
