const CACHE_NAME = 'terms-app-v1';
const ASSETS = [
    '/term-dictionary/',
    '/term-dictionary/index.html',
    '/term-dictionary/manifest.json',
    '/term-dictionary/icon-192x192.png',
    '/term-dictionary/icon-512x512.png',
    '/term-dictionary/icon-180x180.png',
    '/term-dictionary/logo.png',
    '/term-dictionary/sw.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
