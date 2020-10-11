// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: "mekurun",
  suffix: "v2.0.1.2",
  precache: "precache",
  runtime: "runtime-cache",
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(/\.html$/, workbox.strategies.networkFirst());

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
  /assets\/(images|article|course)/,
  workbox.strategies.cacheFirst()
);

// // third party files
// workbox.routing.registerRoute(
//   /^https?:\/\/cdn.staticfile.org/,
//   workbox.strategies.staleWhileRevalidate()
// )
