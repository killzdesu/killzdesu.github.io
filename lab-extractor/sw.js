if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>i(e,l),o={module:{uri:l},exports:a,require:t};s[l]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.0858831c.js",revision:null},{url:"assets/_name_.105be980.js",revision:null},{url:"assets/404.e03e880d.js",revision:null},{url:"assets/about.66b124e1.js",revision:null},{url:"assets/index.79e5bffa.js",revision:null},{url:"assets/index.cf2c7ec6.css",revision:null},{url:"assets/README.6389efb8.js",revision:null},{url:"assets/vendor.e1ccdabe.js",revision:null},{url:"assets/virtual_pwa-register.996123c6.js",revision:null},{url:"index.html",revision:"ea1d2a27fa72aa7590c2fcaaf69c035f"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"ee1bac9928aca382779deb41a6197753"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));