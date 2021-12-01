var serviceWorkerOption = {
  "assets": [
    "/bundle.js",
    "/manifest.json",
    "/icons/android-icon-144x144.png",
    "/icons/android-icon-192x192.png",
    "/icons/android-icon-36x36.png",
    "/icons/android-icon-48x48.png",
    "/icons/android-icon-72x72.png",
    "/icons/android-icon-96x96.png",
    "/icons/apple-icon-114x114.png",
    "/icons/apple-icon-120x120.png",
    "/icons/apple-icon-144x144.png",
    "/icons/apple-icon-152x152.png",
    "/icons/apple-icon-180x180.png",
    "/icons/apple-icon-57x57.png",
    "/icons/apple-icon-60x60.png",
    "/icons/apple-icon-72x72.png",
    "/icons/apple-icon-76x76.png",
    "/icons/apple-icon-precomposed.png",
    "/icons/apple-icon.png",
    "/icons/browserconfig.xml",
    "/icons/favicon-16x16.png",
    "/icons/favicon-32x32.png",
    "/icons/favicon-96x96.png",
    "/icons/favicon.ico",
    "/icons/ms-icon-144x144.png",
    "/icons/ms-icon-150x150.png",
    "/icons/ms-icon-310x310.png",
    "/icons/ms-icon-70x70.png",
    "/images/logo/favicon.png",
    "/images/heros/hero-image.jpg",
    "/favicon.png",
    "/index.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){self.addEventListener("install",(function(e){console.log("Installing Service Worker ...")})),self.addEventListener("activate",(function(e){console.log("Activating Service Worker ...")})),self.addEventListener("fetch",(function(e){console.log(e.request),e.respondWith(fetch(e.request))}))}]);