if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KFfQR4G6f8CXM4uRVIil6/_buildManifest.js",revision:"2b0d5e507494e48d45864363a5ef23f6"},{url:"/_next/static/KFfQR4G6f8CXM4uRVIil6/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/KFfQR4G6f8CXM4uRVIil6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/154-0fe6b2e8e165432a.js",revision:"0fe6b2e8e165432a"},{url:"/_next/static/chunks/1bfc9850-93ce60dc3ef8855e.js",revision:"93ce60dc3ef8855e"},{url:"/_next/static/chunks/675-6195e5d2cc19482d.js",revision:"6195e5d2cc19482d"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/_app-7efee3874933439f.js",revision:"7efee3874933439f"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/detail/%5Bname%5D-3b9b06121fd0b102.js",revision:"3b9b06121fd0b102"},{url:"/_next/static/chunks/pages/favorites-95d4233fca646efc.js",revision:"95d4233fca646efc"},{url:"/_next/static/chunks/pages/index-e267f022f4546e98.js",revision:"e267f022f4546e98"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/932a83c0970fbd85.css",revision:"932a83c0970fbd85"},{url:"/apple-touch-icon.png",revision:"cbf80860e191a1855caf4dfd8c8c28aa"},{url:"/favicon-16x16.png",revision:"176e94d5e0799d08aa149bbfcc76fdd2"},{url:"/favicon-32x32.png",revision:"fb99553536027fe34840902eae16e3d8"},{url:"/favicon.ico",revision:"5abcbd18663e2c2e5cb9a9f38a3b9749"},{url:"/icon-192x192.png",revision:"90104e7f1c2e969d6f35938e169a30ff"},{url:"/icon-256x256.png",revision:"4d4db3a542f8e30197a8870aa0542d60"},{url:"/icon-384x384.png",revision:"de7c66a8f2e9ccd391f8cb40f69411d6"},{url:"/icon-512x512.png",revision:"11df33e721dc466c2e89b07258c17349"},{url:"/image/favicon.ico",revision:"5abcbd18663e2c2e5cb9a9f38a3b9749"},{url:"/manifest.json",revision:"5a503f34e51528477926b2bd5bf5d72f"},{url:"/maskable_icon_x48.png",revision:"e8e36c559efb7ff6510c9a5932fe01f5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
