// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v1::static';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/GestioneCE/',
        '/GestioneCE/index.html',

        '/GestioneCE/resources/css/fontawesome.all.min.css',
        '/GestioneCE/resources/css/main_mobile.css',
        '/GestioneCE/resources/css/robotomono.bold.regular.css',
 
        '/GestioneCE/resources/fonts/fa-brands-400.eot',
        '/GestioneCE/resources/fonts/fa-brands-400.svg',
        '/GestioneCE/resources/fonts/fa-brands-400.ttf',
        '/GestioneCE/resources/fonts/fa-brands-400.woff',
        '/GestioneCE/resources/fonts/fa-brands-400.woff2',
        '/GestioneCE/resources/fonts/fa-regular-400.eot',
        '/GestioneCE/resources/fonts/fa-regular-400.svg',
        '/GestioneCE/resources/fonts/fa-regular-400.ttf',
        '/GestioneCE/resources/fonts/fa-regular-400.woff',
        '/GestioneCE/resources/fonts/fa-regular-400.woff2',
        '/GestioneCE/resources/fonts/fa-solid-900.eot',
        '/GestioneCE/resources/fonts/fa-solid-900.svg',
        '/GestioneCE/resources/fonts/fa-solid-900.ttf',
        '/GestioneCE/resources/fonts/fa-solid-900.woff',
        '/GestioneCE/resources/fonts/fa-solid-900.woff2',
        '/GestioneCE/resources/fonts/robotomono-bold-webfont.ttf',
        '/GestioneCE/resources/fonts/robotomono-bold-webfont.woff',
        '/GestioneCE/resources/fonts/robotomono-bold-webfont.woff2',
        '/GestioneCE/resources/fonts/robotomono-regular-webfont.ttf',
        '/GestioneCE/resources/fonts/robotomono-regular-webfont.woff',
        '/GestioneCE/resources/fonts/robotomono-regular-webfont.woff2',
 
        '/GestioneCE/resources/img/favicon.png',
        '/GestioneCE/resources/img/icon.png',
 
        '/GestioneCE/resources/js/commands.js',
        '/GestioneCE/resources/js/library.js',
        '/GestioneCE/resources/js/webapp.js', 
 
        '/GestioneCE/resources/sound/beep_accept.wav',
        '/GestioneCE/resources/sound/beep_alert.wav',
        '/GestioneCE/resources/sound/beep_error.wav',
        '/GestioneCE/resources/sound/DarthGiveYourself.wav'

      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});
