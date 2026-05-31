#!/usr/bin/env bash
#
# Cloudflare Pages のビルド時に sw.js の CACHE_VERSION を commit SHA に置換する。
#
# Cloudflare Pages 側の設定:
#   Build command:           bash scripts/bump-sw-version.sh
#   Build output directory:  /
#   Root directory:          /
#
# 環境変数:
#   CF_PAGES_COMMIT_SHA   Cloudflare Pages が自動セットする commit SHA (40 chars)
#
# 動作:
#   毎ビルドで違うバージョンが配信されるので手動バンプは不要。
set -euo pipefail

if [ -z "${CF_PAGES_COMMIT_SHA:-}" ]; then
  echo "CF_PAGES_COMMIT_SHA is not set; skipping cache version bump." >&2
  exit 0
fi

SHA_SHORT="${CF_PAGES_COMMIT_SHA:0:7}"
NEW_VERSION="v-${SHA_SHORT}"

echo "Bumping CACHE_VERSION to: ${NEW_VERSION}"
sed -i "s/const CACHE_VERSION = '.*';/const CACHE_VERSION = '${NEW_VERSION}';/" sw.js

echo "--- sw.js head ---"
head -5 sw.js
