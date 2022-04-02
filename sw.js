// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v1::static';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/gestioneCE/',
        '/gestioneCE/index.html',

        '/gestioneCE/resources/css/fontawesome.all.min.css',
        '/gestioneCE/resources/css/main_mobile.css',
        '/gestioneCE/resources/css/robotomono.bold.regular.css',
 
        '/gestioneCE/resources/fonts/fa-brands-400.eot',
        '/gestioneCE/resources/fonts/fa-brands-400.svg',
        '/gestioneCE/resources/fonts/fa-brands-400.ttf',
        '/gestioneCE/resources/fonts/fa-brands-400.woff',
        '/gestioneCE/resources/fonts/fa-brands-400.woff2',
        '/gestioneCE/resources/fonts/fa-regular-400.eot',
        '/gestioneCE/resources/fonts/fa-regular-400.svg',
        '/gestioneCE/resources/fonts/fa-regular-400.ttf',
        '/gestioneCE/resources/fonts/fa-regular-400.woff',
        '/gestioneCE/resources/fonts/fa-regular-400.woff2',
        '/gestioneCE/resources/fonts/fa-solid-900.eot',
        '/gestioneCE/resources/fonts/fa-solid-900.svg',
        '/gestioneCE/resources/fonts/fa-solid-900.ttf',
        '/gestioneCE/resources/fonts/fa-solid-900.woff',
        '/gestioneCE/resources/fonts/fa-solid-900.woff2',
        '/gestioneCE/resources/fonts/robotomono-bold-webfont.ttf',
        '/gestioneCE/resources/fonts/robotomono-bold-webfont.woff',
        '/gestioneCE/resources/fonts/robotomono-bold-webfont.woff2',
        '/gestioneCE/resources/fonts/robotomono-regular-webfont.ttf',
        '/gestioneCE/resources/fonts/robotomono-regular-webfont.woff',
        '/gestioneCE/resources/fonts/robotomono-regular-webfont.woff2',
 
        '/gestioneCE/resources/img/favicon.png',
        '/gestioneCE/resources/img/icon.png',
 
        '/gestioneCE/resources/js/commands.js',
        '/gestioneCE/resources/js/library.js',
        '/gestioneCE/resources/js/webapp.js', 
 
        '/gestioneCE/resources/sound/beep_accept.wav',
        '/gestioneCE/resources/sound/beep_alert.wav',
        '/gestioneCE/resources/sound/beep_error.wav',
        '/gestioneCE/resources/sound/DarthGiveYourself.wav'

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
