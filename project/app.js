if ("serviceWorker" in navigator) {
  // console.log("Navigator  Is : ", navigator);
  // console.log("Navigator Service Worker Is : ", navigator.serviceWorker);
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not registered", err));
}
