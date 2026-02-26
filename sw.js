const CACHE_NAME = 'rapitienda-v9-pwa';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.jpg',
  './inventario.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});