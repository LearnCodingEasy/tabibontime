// Cache Name تحديد اسم مخبأ التخزين المؤقت
const staticCache = "staticCache";

// Cache Name تحديد اسم مخبأ التخزين المؤقت الديناميكي
const dynamicCache = "dynamicCache-1";

// Assets It Is The Element Website You Need To Cache
const assets = [
  "/",
  "/index.html",
  "/pages/fallback.html",

  "/css/styles.css",
  "/css/libs/bootstrap/bootstrap.min.css",
  "/css/libs/fontawesome/all.min.css",

  "/js/script.js",
  "/js/libs/bootstrap/bootstrap.min.js",
  "/images/*",

  "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js",
];

// Function Cache Size Limit
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener("install", (event) => {
  // console.log("Service Worker Installed");
  //
  // WaitUntil = Wait Until Request installed Done
  event.waitUntil(
    /*
    Explain caches : Because We Access To Caches
    Explain Open : Open The Cache
    Explain staticCache : Cache Name
    Explain Cache : Single Cache And Add Assets Object Website Need To Cache
    */
    caches.open(staticCache).then((cache) => {
      console.log("Caching Shell Assets");
      // Single Asset
      // cache.add(assets);
      cache.addAll(assets);
    })
  );
});

// Fetch استجابة لطلبات الاسترداد
// Serve cached files or fetch and cache dynamic requests

self.addEventListener("fetch", (event) => {
  // console.log("Service Worker Has Been Fetched", event);
  // respondWith = الرد
  if (
    event.request.url.indexOf("chrome-extension") === -1 &&
    event.request.url.indexOf("firestore.googleapis.com") === -1
  ) {
    event.respondWith(
      caches
        .match(event.request)
        .then((cacheRes) => {
          return (
            cacheRes ||
            fetch(event.request).then((fetchRes) => {
              return caches.open(dynamicCache).then((cache) => {
                cache.put(event.request.url, fetchRes.clone());
                // Check Cached Items Size
                limitCacheSize(dynamicCache, 15);
                return fetchRes;
              });
            })
          );
        })
        .catch(() => {
          if (event.request.url.indexOf(".html") > -1) {
            return caches.match("/pages/fallback.html");
          }
        })
    );
  }
});

// Activate تنظيف التخزين المؤقت القديم

self.addEventListener("activate", (event) => {
  // console.log("Service Worker Has Been Activated");
  // waitUntil = Wait Until Request installed Done
  event.waitUntil(
    // caches = Because We Access To Caches
    // Keys = Search In Caches About Your Cache

    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== staticCache && name !== dynamicCache)
          .map((name) => caches.delete(name))
      );
    })
  );
});
