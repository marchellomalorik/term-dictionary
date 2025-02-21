self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/term-dictionary/',
    '/term-dictionary/index.html',
    '/term-dictionary/logo.png',
        '/',
        '/index.html',
        '/style.css', // Если у вас есть отдельный CSS-файл
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
