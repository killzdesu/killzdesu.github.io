(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-12a8c0a6":"9b4d1022","chunk-07849455":"fe52266e","chunk-2d0a4d9f":"ba3039c8","chunk-2d0e2361":"319332f4","chunk-647cbda4":"593e4b5a","chunk-2d0d324b":"0f4cd87b","chunk-2d21a3d2":"13e4fb02"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-07849455":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-12a8c0a6":"31d6cfe0","chunk-07849455":"afac55c0","chunk-2d0a4d9f":"31d6cfe0","chunk-2d0e2361":"31d6cfe0","chunk-647cbda4":"31d6cfe0","chunk-2d0d324b":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/medkit/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0802":function(e,t,n){"use strict";n("56e0")},3795:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("Navbar"),n("section",{staticClass:"m-4"},[n("div",{staticClass:"container is-fluid"},[n("router-view")],1),n("div",{staticClass:"push"})]),n("br"),n("br")],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"fix-footer",staticStyle:{"padding-right":"10px"}},[n("div",{staticClass:"content has-text-right"},[n("small",{staticClass:"has-text-grey-lighter"},[e._v(" Medkit 2021, kill-z ")])])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar",attrs:{id:"nav",role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("fdfc"),alt:"Medkit"}})])],1),e._m(0)]),r("div",{staticClass:"navbar-menu",attrs:{id:"mainNavbar"}},[r("div",{staticClass:"navbar-start"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v(" Home ")]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:e.isJui,expression:"isJui"}],staticClass:"navbar-item",attrs:{to:"/drug"}},[e._v(" Drug ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/nutrition"}},[e._v(" Nutrition ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/drugdose"}},[e._v(" Drug Dose ")])],1),e._m(1)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"mainNavbar"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"})])])}],s=(n("fb6a"),n("159b"),{name:"Navbar",mounted:function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")}))}))},computed:{isJui:function(){return!!this.$route.query.jui}}}),u=s,l=(n("0802"),n("2877")),d=Object(l["a"])(u,i,c,!1,null,"4de7661e",null),f=d.exports,p={name:"App",components:{Navbar:f},mounted:function(){}},h=p,v=(n("c983"),Object(l["a"])(h,a,o,!1,null,"6cba1c68",null)),b=v.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/drug",name:"Drug",component:function(){return Promise.all([n.e("chunk-12a8c0a6"),n.e("chunk-07849455"),n.e("chunk-2d0e2361")]).then(n.bind(null,"7e74"))}},{path:"/nutrition",name:"Nutrition",component:function(){return Promise.all([n.e("chunk-12a8c0a6"),n.e("chunk-07849455"),n.e("chunk-2d0a4d9f")]).then(n.bind(null,"07ce"))}},{path:"/drugdose",name:"DrugDose",component:function(){return Promise.all([n.e("chunk-12a8c0a6"),n.e("chunk-647cbda4")]).then(n.bind(null,"b3d7"))}}],k=new m["a"]({routes:g}),y=k,w=n("9483"),C=function(){return n.e("chunk-2d0d324b").then(n.t.bind(null,"5c07",7))},_=function(e){C().alert("Update","There is an update available!",(function(){e.postMessage({type:"SKIP_WAITING"})}))};Object(w["a"])("".concat("/medkit/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),_(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=!1;navigator.serviceWorker.addEventListener("controllerchange",(function(){E||(window.location.reload(),E=!0)})),n("b383"),r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(b)}}).$mount("#app")},"56e0":function(e,t,n){},b383:function(e,t,n){},c983:function(e,t,n){"use strict";n("3795")},fdfc:function(e,t,n){e.exports=n.p+"img/medkit.abd198a2.png"}});
//# sourceMappingURL=app.ccfd74c0.js.map