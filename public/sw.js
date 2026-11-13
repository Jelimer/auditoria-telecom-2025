const CACHE_NAME = 'audiia-offline-v3';

// Precachea el shell SPA ('/' e '/index.html') y los assets compilados actuales (/assets/*.js, *.css)
// para garantizar navegación y recarga completa sin internet tras la primera visita online.
async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  for (const url of ['/', '/index.html']) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) await cache.put(url, res);
    } catch (_) {}
  }

  try {
    const htmlRes = (await caches.match('/index.html')) || (await caches.match('/'));
    if (!htmlRes) return;
    const html = await htmlRes.clone().text();
    const assetMatches = [...html.matchAll(/(?:src|href)=["'](\/assets\/[^"']+)["']/g)].map((m) => m[1]);
    const uniqueAssets = [...new Set(assetMatches)];
    if (uniqueAssets.length > 0) {
      await cache.addAll(uniqueAssets);
    }
  } catch (err) {
    // Si falla la red durante install, el caché básico disponible se conserva
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAppShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;

        if (event.request.mode === 'navigate') {
          return (await caches.match('/')) || (await caches.match('/index.html'));
        }
        return Response.error();
      })
  );
});
