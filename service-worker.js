self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ob1-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './assets/icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
