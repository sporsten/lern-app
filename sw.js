// Service Worker – Offline-Unterstützung mit automatischem Update
const CACHE_NAME = 'lern-app-v20260331';
const FILES = [
  './',
  './index.html',
  './data/data.js'
];

// Installation: Dateien cachen
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Aktivierung: Alte Caches löschen
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: Im WLAN → Netzwerk zuerst + Cache aktualisieren
//        Offline  → Cache verwenden
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(networkResponse) {
        // Erfolgreiche Netzwerkantwort → Cache aktualisieren
        var responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      })
      .catch(function() {
        // Kein Netz → aus Cache laden
        return caches.match(event.request);
      })
  );
});
