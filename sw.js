// Service Worker entfernen - löscht sich selbst und alle Caches
self.addEventListener('install', function() {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    }).then(function() {
      return self.registration.unregister();
    }).then(function() {
      return self.clients.matchAll();
    }).then(function(clients) {
      clients.forEach(function(c) { c.navigate(c.url); });
    })
  );
});

// Keine Requests abfangen - alles direkt vom Netzwerk
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
