(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70dc84b4"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(r(t))}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=o("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"657e":function(t,e,n){!function(e,n){t.exports=n()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var r=n(8);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}},function(t,e,n){var r=n(6),i=n(3);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){var r=n(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(0);var r=n(10);function i(e,n,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=i=Reflect.get:t.exports=i=function(t,e,n){var i=r(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}},i(e,n,o||e)}t.exports=i},function(t,e,n){var r=n(0);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(2),a=n.n(o),s=n(5),c=n.n(s),l=n(3),u=n.n(l),f=n(0),d=n.n(f),p=n(9),m=n.n(p),h=n(7),v=n.n(h),g=n(4),y=n.n(g),b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i()(this,t),this._listeners=new Map(e),this._middlewares=new Map}return a()(t,[{key:"listenerCount",value:function(t){return this._listeners.has(t)?this._listeners.get(t).length:0}},{key:"removeListeners",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach((function(e){return t.removeListeners(e,n)})):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(t,e){var n=this;Array.isArray(t)?name.forEach((function(t){return n.middleware(t,e)})):(Array.isArray(this._middlewares.get(t))||this._middlewares.set(t,[]),this._middlewares.get(t).push(e))}},{key:"removeMiddleware",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach((function(e){return t.removeMiddleware(e)})):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(t))t.forEach((function(t){return n.on(t,e)}));else{var i=(t=t.toString()).split(/,|, | /);i.length>1?i.forEach((function(t){return n.on(t,e)})):(Array.isArray(this._listeners.get(t))||this._listeners.set(t,[]),this._listeners.get(t).push({once:r,callback:e}))}}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"emit",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=t.toString();var i=this._listeners.get(t),o=null,a=0,s=r;if(Array.isArray(i))for(i.forEach((function(c,l){r||(o=n._middlewares.get(t),Array.isArray(o)?(o.forEach((function(n){n(e,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==t&&(e=t),a++}),t)})),a>=o.length&&(s=!0)):s=!0),s&&(c.once&&(i[l]=null),c.callback(e))}));-1!==i.indexOf(null);)i.splice(i.indexOf(null),1)}}]),t}(),_=n(8),w=n.n(_),S=n(6),O=n.n(S),k=function(t){return"function"==typeof t},x=function(t){return"string"==typeof t||!!t&&"object"===O()(t)&&"[object String]"===Object.prototype.toString.call(t)},E=function(t){try{return Node.prototype.cloneNode.call(t,!1),!0}catch(t){return!1}},C=function(t){return NodeList.prototype.isPrototypeOf(t)},j=/^(?:f(?:alse)?|no?|0+)$/i,A=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},P=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){return t=!0,!0}}),n=function(){};window.addEventListener("testPassive",n,e),window.removeEventListener("testPassive",n,e)}return t},N=function(t,e){return k(t)?t(e||("undefined"!=typeof document?document:null)):x(t)?e&&E(e)?e.querySelectorAll(t):"undefined"!=typeof document?document.querySelectorAll(t):null:E(t)?[t]:C(t)?t:null},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E(t)&&t.dataset?Object.keys(t.dataset).filter((function(t){return Object.keys(e).includes(t)})).reduce((function(e,n){return y()({},e,w()({},n,t.dataset[n]))}),{}):{}};"undefined"==typeof Node||Node.prototype.on||(Node.prototype.on=function(t,e){var n=this;return Array.isArray(t)||(t=t.split(" ")),t.forEach((function(t){n.addEventListener(t.trim(),e,!!P()&&{passive:!1})})),this}),"undefined"==typeof NodeList||NodeList.prototype.on||(NodeList.prototype.on=function(t,e){return this.forEach((function(n){n.on(t,e)})),this}),"undefined"==typeof Node||Node.prototype.off||(Node.prototype.off=function(t,e){var n=this;return Array.isArray(t)||(t=t.split(" ")),t.forEach((function(t){n.removeEventListener(t.trim(),e,!!P()&&{passive:!1})})),this}),"undefined"==typeof NodeList||NodeList.prototype.off||(NodeList.prototype.off=function(t,e){return this.forEach((function(n){n.off(t,e)})),this});var D=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(i()(this,e),(n=c()(this,d()(e).call(this))).element=x(t)?n.options.container.querySelector(t):t,!n.element)throw new Error("An invalid selector or non-DOM node has been provided for ".concat(n.constructor.name,"."));return n.element[n.constructor.name]=n.constructor._interface.bind(u()(n)),n.element[n.constructor.name].Constructor=n.constructor.name,n.id=A(n.constructor.name+"-"),n.options=y()({},o,r,T(n.element,o)),n}return v()(e,t),a()(e,null,[{key:"attach",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Array;return null===e||(n=y()({},r,n,T(this.element,r)),(N(e,n.container)||[]).forEach((function(r){void 0===r[t.constructor.name]?i.push(new t(r,y()({selector:e},n))):i.push(r[t.constructor.name])}))),i}},{key:"_interface",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof t){if(void 0===this[t])throw new TypeError('No method named "'.concat(t,'"'));return this[t](t)}return this}}]),e}(b),L={allowMultiple:!1,container:"undefined"!=typeof document?document:null};n.d(e,"default",(function(){return M}));var M=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i()(this,e),(n=c()(this,d()(e).call(this,t,r,L))).onTriggerClick=n.onTriggerClick.bind(u()(n)),n.onTransitionEnd=n.onTransitionEnd.bind(u()(n)),n._init(),n}return v()(e,t),a()(e,[{key:"_init",value:function(){if(this._originalHeight=this.element.style.height,this._parent=this.element.dataset.parent,this._parent){var t=this.options.container.querySelector("#".concat(this._parent));this._siblings=N(this.options.selector,t)||[]}this._triggers=this.options.container.querySelectorAll('[data-action="collapse"][href="#'.concat(this.element.id,'"], [data-action="collapse"][data-target="').concat(this.element.id,'"]'))||null,this._triggers&&this._triggers.on("click touch",this.onTriggerClick),this._transitionEvent=function(){var t=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}(),this._transitionEvent&&this.element.on(this._transitionEvent,this.onTransitionEnd),this.element.classList.contains("is-active")?this.expand():this.collapse()}},{key:"destroy",value:function(){this._triggers&&this._triggers.off("click touch",this.onTriggerClick,!1)}},{key:"collapsed",value:function(){return this._collapsed}},{key:"expand",value:function(){var t=this;(void 0===this._collapsed||this._collapsed)&&(this.emit("before:expand",this),this._collapsed=!1,this._parent&&!function(t){return!j.test(t)&&!!t}(this.options.allowMultiple)&&this._siblings.forEach((function(e){e.isSameNode(t.element)||e.bulmaCollapsible&&e.bulmaCollapsible("close")})),this.element.style.height=this.element.scrollHeight+"px",this.element.classList.add("is-active"),this.element.setAttribute("aria-expanded",!0),this._triggers&&this._triggers.forEach((function(t){t.classList.add("is-active")})),this.emit("after:expand",this))}},{key:"open",value:function(){this.expand()}},{key:"collapse",value:function(){void 0!==this._collapsed&&this._collapsed||(this.emit("before:collapse",this),this._collapsed=!0,this.element.style.height=0,this.element.classList.remove("is-active"),this.element.setAttribute("aria-expanded",!1),this._triggers&&this._triggers.forEach((function(t){t.classList.remove("is-active")})),this.emit("after:collapse",this))}},{key:"close",value:function(){this.collapse()}},{key:"onTriggerClick",value:function(t){t.preventDefault(),this.collapsed()?(t.currentTarget.classList.add("is-active"),this.expand()):(t.currentTarget.classList.remove("is-active"),this.collapse())}},{key:"onTransitionEnd",value:function(t){this._collapsed||(this.element.style.height=this._originalHeight)}}],[{key:"attach",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".is-collapsible",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m()(d()(e),"attach",this).call(this,t,n,L)}}]),e}(D)}]).default}))},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),a="find",s=!0;a in[]&&Array(1)[a]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),m=n("825a"),h=n("7b0b"),v=n("fc6a"),g=n("c04e"),y=n("5c6c"),b=n("7c73"),_=n("df75"),w=n("241c"),S=n("057f"),O=n("7418"),k=n("06cf"),x=n("9bf2"),E=n("d1e7"),C=n("9112"),j=n("6eeb"),A=n("5692"),P=n("f772"),N=n("d012"),T=n("90e3"),D=n("b622"),L=n("e538"),M=n("746f"),I=n("d44e"),W=n("69f3"),$=n("b727").forEach,q=P("hidden"),R="Symbol",V="prototype",K=D("toPrimitive"),J=W.set,F=W.getterFor(R),H=Object[V],Q=i.Symbol,U=o("JSON","stringify"),z=k.f,B=x.f,G=S.f,Y=E.f,X=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),rt=i.QObject,it=!rt||!rt[V]||!rt[V].findChild,ot=s&&u((function(){return 7!=b(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=z(H,e);r&&delete H[e],B(t,e,n),r&&t!==H&&B(H,e,r)}:B,at=function(t,e){var n=X[t]=b(Q[V]);return J(n,{type:R,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,n){t===H&&ct(Z,e,n),m(t);var r=g(e,!0);return m(n),f(X,r)?(n.enumerable?(f(t,q)&&t[q][r]&&(t[q][r]=!1),n=b(n,{enumerable:y(0,!1)})):(f(t,q)||B(t,q,y(1,{})),t[q][r]=!0),ot(t,r,n)):B(t,r,n)},lt=function(t,e){m(t);var n=v(e),r=_(n).concat(mt(n));return $(r,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?b(t):lt(b(t),e)},ft=function(t){var e=g(t,!0),n=Y.call(this,e);return!(this===H&&f(X,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,q)&&this[q][e])||n)},dt=function(t,e){var n=v(t),r=g(e,!0);if(n!==H||!f(X,r)||f(Z,r)){var i=z(n,r);return!i||!f(X,r)||f(n,q)&&n[q][r]||(i.enumerable=!0),i}},pt=function(t){var e=G(v(t)),n=[];return $(e,(function(t){f(X,t)||f(N,t)||n.push(t)})),n},mt=function(t){var e=t===H,n=G(e?Z:v(t)),r=[];return $(n,(function(t){!f(X,t)||e&&!f(H,t)||r.push(X[t])})),r};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===H&&n.call(Z,t),f(this,q)&&f(this[q],e)&&(this[q][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(H,e,{configurable:!0,set:n}),at(e,t)},j(Q[V],"toString",(function(){return F(this).tag})),j(Q,"withoutSetter",(function(t){return at(T(t),t)})),E.f=ft,x.f=ct,k.f=dt,w.f=S.f=pt,O.f=mt,L.f=function(t){return at(D(t),t)},s&&(B(Q[V],"description",{configurable:!0,get:function(){return F(this).description}}),a||j(H,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),$(_(nt),(function(t){M(t)})),r({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),U){var ht=!c||u((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),i[1]=e,U.apply(null,i)}})}Q[V][K]||C(Q[V],K,Q[V].valueOf),I(Q,R),N[q]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b1e3:function(t){t.exports=JSON.parse('{"drugdose":[{"name":"norepinephrine","type":"inotrope","alias":"levophed,ne,nore","comment":"A very potent vasopressor, commonly used to raise BP","dose":"0.02-2","unit":"mcg/kg/min","prep":"4mg/4ml in 5%DW ONLY","conc":"4:250,8:250,4:100,8:100","detail":"","contra":"","adverse":""},{"name":"epinephrine","type":"inotrope","alias":"adrenaline,epi","comment":"Multi-receptor inotrope","dose":"0.5-5","unit":"mg/hr","prep":"1mg/ml in NSS","conc":"1:10,1:5","detail":"","contra":"","adverse":""},{"name":"dopamine","type":"inotrope","alias":"dopa","comment":"Multi-receptor dose-dependent inotrope","dose":"1-20","unit":"mcg/kg/min","prep":"50mg/10ml in 5%DW","conc":"1:1,2:1","detail":"","contra":"","adverse":""},{"name":"dobutamine","type":"inotrope","alias":"dobu","comment":"Cardio inotrope","dose":"1-20","unit":"mcg/kg/min","prep":"50mg/20ml in 5%DW","conc":"1:1,2:1","detail":"","contra":"","adverse":""},{"name":"nitroglycerine","type":"vasodilator","alias":"NTG","comment":"Cardio vasodilator","dose":"5-100","unit":"mcg/min","prep":"50mg/10ml in 5%DW","conc":"1:5,1:10,1:2","detail":"","contra":"InfW STEMI, RV infarct","adverse":""},{"name":"nicardipine","type":"vasodilator","alias":"nicardipine","comment":"Commonly used vasodilator","dose":"(2.5)5-15","unit":"mg/hr","prep":"10mg/10ml in 5%DW","conc":"1:5","detail":"","contra":"renal failure, CAD","adverse":"cyanide poisoning, met.acidosis, coronary steal syndrome"},{"name":"nitroprusside","type":"vasodilator","alias":"","comment":"Very potent vasodilator","dose":"","unit":"","prep":"","conc":"","detail":"Double-syringe technique","contra":"WPW, COPD, Asthma","adverse":""},{"name":"adenosine","type":"arrhythmia","alias":"","comment":"SVT terminator","dose":"6->12","unit":"mg","prep":"6mg/vial","conc":"","detail":"","contra":"QTp","adverse":"QT prolong"},{"name":"amiodarone","type":"arrhythmia","alias":"cordarone","comment":"Multiclass anti-arrythmic agent","dose":"","unit":"","prep":"","conc":"","detail":"150 bolus 600-900 drip in 24 hr","contra":"","adverse":""},{"name":"magnesium sulfate","type":"arrhythmia","alias":"mg,mgso4","comment":"TdP","dose":"2-4","unit":"gm","prep":"50%, 20%  in 5%DW 100ml","conc":"","detail":"load 2-4gm then drip 1-2gm/hr x 24hr","contra":"","adverse":""},{"name":"lidocaine","type":"arrhythmia","alias":"xylocaine","comment":"Second line anti-arrhythmic agent","dose":"1-4","unit":"mg/min","prep":"2% 20ml in NSS upto 100ml","conc":"","detail":"bolus 1mg/kg then drip","contra":"","adverse":""},{"name":"sodium bicarbonate","type":"electrolyte","alias":"bicarb,nahco3","comment":"Metabolic acidosis","dose":"","unit":"","prep":"","conc":"","detail":"50ml in 30-120 min","contra":"","adverse":""},{"name":"potassium chloride","type":"electrolyte","alias":"kcl","comment":"","dose":"","unit":"","prep":"Peri: 20-60mEq/1L, 10mEq/hr Central: 10-20mEq/100ml, 0.3mEq/kg/hr","conc":"","detail":"","contra":"","adverse":""}],"drugtype":[{"name":"inotrope","fullname":"Inotrope/Vasopressor","detail":"Use in shock pt"},{"name":"vasodilator","fullname":"Vasodilator","detail":"Mostly used in hypertensive patient"},{"name":"arrhythmia","fullname":"Anti-arrthymic","detail":"Control abnormal heart rhythm"}]}')},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[t._m(0),t._l(t.types,(function(e){return n("div",{key:e.name,staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v(" "+t._s(e.name)+" ")]),n("a",{staticClass:"card-header-icon is-hidden-fullscreen",attrs:{href:"#"+e.name+"-card","data-action":"collapse","aria-label":"more options"}},[t._m(1,!0)])]),n("div",{staticClass:"is-collapsible",attrs:{id:e.name+"-card"}},[n("div",{staticClass:"card-content"},[n("ul",t._l(t.filteredDrug(e.name),(function(e){return n("li",{key:e.name},[n("a",{on:{click:function(n){t.selectedDrug=e.name}}},[t._m(2,!0),t._v(" "+t._s(e.name)+" ")])])})),0)])])])}))],2),n("div",{staticClass:"column is-8"},[t.drugInfo?n("DrugInfo",{attrs:{drug:t.drugInfo}}):t._e()],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification is-danger"},[n("span",{staticClass:"title is-4"},[t._v(" Drug Dose ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-ellipsis-h"})])}],o=n("1da1"),a=(n("96cf"),n("7db0"),n("b0c0"),n("4de4"),n("d81d"),n("ac1f"),n("1276"),n("159b"),n("657e")),s=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"has-text-centered"},[n("span",{staticClass:"is-size-3"},[n("strong",[t._v(" "+t._s(t.drug.name)+" ")])]),n("h6",{staticClass:"subtitle is-6 is-italic"},[t._v(t._s(t.drug.detail))])]),n("hr"),n("div",[n("span",{staticClass:"is-5"},[n("strong",[t._v("Dose: ")]),t._v(" "+t._s(t.drug.dose)+" "+t._s(t.drug.unit)),n("br")]),n("span",{staticClass:"is-5"},[n("strong",[t._v("Prep: ")]),t._v(" "+t._s(t.drug.prep)+" "),n("br")])]),n("div",{staticClass:"columns is-mobile is-multiline is-gapless"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isKg,expression:"isKg"}],staticClass:"column is-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"slider is-fullwidth is-success",attrs:{min:"3",max:"100",type:"range"},domProps:{value:t.weight},on:{__r:function(e){t.weight=e.target.value}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isKg,expression:"isKg"}],staticClass:"column is-3 is-offset-1 mt-2"},[n("span",[t._v(t._s(t.weight)+" kg")])]),n("div",{staticClass:"column is-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rate,expression:"rate"}],staticClass:"slider is-fullwidth is-link",attrs:{min:"3",max:"100",type:"range"},domProps:{value:t.rate},on:{__r:function(e){t.rate=e.target.value}}})]),n("div",{staticClass:"column is-3 is-offset-1 mt-2"},[n("span",[t._v(t._s(t.rate)+" ml/hr")])]),t._m(0),n("div",{staticClass:"column is-6"},[n("div",{staticClass:"select is-success"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.conc,expression:"conc"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.conc=e.target.multiple?n:n[0]}}},t._l(t.drug.conc,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)])]),n("hr"),n("span",[n("strong",[t._v("Dose =")]),t._v(" "+t._s(t.dose.toFixed(2))+" "+t._s(t.drug.unit)+" ")])]),n("div")])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-2 pt-4"},[n("strong",[t._v("Conc: ")])])}];function u(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function f(t,e){var n=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){s=!0,i=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(s)throw i}}return o}}n("fb6a"),n("a630");function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){return u(t)||f(t,e)||p(t,e)||m()}n("caad"),n("2532");var v={name:"DrugInfo",props:{drug:{type:Object,default:function(){return{}}}},data:function(){return{weight:60,rate:10,conc:null}},computed:{concNum:function(){if(!this.conc)return 1;var t=this.conc.split(":").map((function(t){return+t})),e=h(t,2),n=e[0],r=e[1];return n/r},dose:function(){return"mcg/kg/min"===this.drug.unit?100*this.concNum*this.rate/6/this.weight:"mcg/min"===this.drug.unit?100*this.concNum*this.rate/6:"mg/hr"===this.drug.unit?this.rate*this.concNum:0},isKg:function(){return this.drug.unit.includes("kg")}},mounted:function(){this.conc=this.drug.conc[0]},watch:{drug:function(t,e){this.conc=t.conc[0]}}},g=v,y=n("2877"),b=Object(y["a"])(g,c,l,!1,null,null,null),_=b.exports,w=n("b1e3"),S={name:"DrugDoseView",components:{DrugInfo:_},data:function(){return{searchKeyword:"",selectedDrug:null,loading:!0,errored:!1,drugs:null,types:null,active:null}},computed:{drugInfo:function(){var t=this;return this.drugs?this.drugs.find((function(e){return e.name==t.selectedDrug})):null}},methods:{filteredDrug:function(t){return this.drugs.filter((function(e){return e.type==t}))},onClick:function(t){this.active=t}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.types=w.drugtype,t.drugs=w.drugdose,t.drugs=t.drugs.map((function(t){return t.conc=t.conc.split(","),t.alias=t.alias.split(","),t})),t.loading=!1,t.$nextTick((function(){var t=s.a.attach(".is-collapsible");t.forEach((function(t){console.log(t.collapsed())}))}));case 5:case"end":return e.stop()}}),e)})))()}},O=S,k=Object(y["a"])(O,r,i,!1,null,null,null);e["default"]=k.exports},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=o("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,l=n("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var m=p.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var n=h?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-70dc84b4.672bb5fd.js.map