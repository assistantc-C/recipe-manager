// Service Worker for レシピ管理アプリ
// バージョンを変えるとキャッシュが更新される
const CACHE_VERSION = 'v20';
const CACHE_NAME = `recipe-manager-${CACHE_VERSION}`;

// オフラインでも動かすためにキャッシュするファイル一覧
const PRECACHE_URLS = [
  './',
  './recipe-manager.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// インストール時：必要なファイルをキャッシュに保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// 有効化時：古いバージョンのキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// リクエスト時の戦略：
// - 同一オリジン → キャッシュ優先（オフラインでも動く）
// - 外部API（Gemini, OpenAI, YouTube等）→ ネットワーク直接（キャッシュしない）
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 外部APIへのリクエストはキャッシュ対象外
  if (url.origin !== self.location.origin) {
    return; // デフォルトのネットワーク動作に任せる
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then((response) => {
        // 取得できたものはキャッシュに追加（GET のみ）
        if (event.request.method === 'GET' && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // ネットワークもキャッシュもダメな場合はそのまま返す
        return cached;
      });
    })
  );
});
