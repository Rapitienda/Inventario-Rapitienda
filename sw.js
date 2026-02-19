const CACHE_NAME = 'rapitienda-v8-pwa';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.jpg'
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
        // Devuelve lo cacheado o hace la petición a internet
        return response || fetch(event.request);
      })
  );
});