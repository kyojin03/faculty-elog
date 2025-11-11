const CACHE_NAME = 'gsc-elog-v1';
const FILES_TO_CACHE = [
  'elog.html',
  'manifest.json',
  'gs.jfif'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
