!function(e){function t(e){delete installedChunks[e]}function o(e){var t=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.src=u.p+""+e+"."+w+".hot-update.js",t.appendChild(o)}function r(e){return e=e||1e4,new Promise(function(t,o){if("undefined"==typeof XMLHttpRequest)return o(new Error("No browser support"));try{var r=new XMLHttpRequest,n=u.p+""+w+".hot-update.json";r.open("GET",n,!0),r.timeout=e,r.send(null)}catch(e){return o(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)o(new Error("Manifest request to "+n+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)o(new Error("Manifest request to "+n+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void o(e)}t(e)}}})}function n(e){var t=A[e];if(!t)return u;var o=function(o){return t.hot.active?(A[o]?A[o].parents.indexOf(e)<0&&A[o].parents.push(e):(_=[e],v=o),t.children.indexOf(o)<0&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),_=[]),u(o)};for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&"e"!==r&&Object.defineProperty(o,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return u[e]},set:function(t){u[e]=t}}}(r));return o.e=function(e){function t(){I--,"prepare"===D&&(S[e]||d(e),0===I&&0===H&&p())}return"ready"===D&&i("prepare"),I++,u.e(e).then(t,function(e){throw t(),e})},o}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,o){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=o||function(){};else t._acceptedDependencies[e]=o||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._declinedDependencies[e[o]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var o=t._disposeHandlers.indexOf(e);o>=0&&t._disposeHandlers.splice(o,1)},check:s,apply:f,status:function(e){if(!e)return D;x.push(e)},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var t=x.indexOf(e);t>=0&&x.splice(t,1)},data:j[e]};return v=void 0,t}function i(e){D=e;for(var t=0;t<x.length;t++)x[t].call(null,e)}function c(e){return+e+""===e?+e:e}function s(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return g=e,i("check"),r(O).then(function(e){if(!e)return i("idle"),null;T={},S={},P=e.c,b=e.h,i("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});m={};return d(0),"prepare"===D&&0===I&&0===H&&p(),t})}function a(e,t){if(P[e]&&T[e]){T[e]=!1;for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(m[o]=t[o]);0==--H&&0===I&&p()}}function d(e){P[e]?(T[e]=!0,H++,o(e)):S[e]=!0}function p(){i("ready");var e=y;if(y=null,e)if(g)Promise.resolve().then(function(){return f(g)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var o in m)Object.prototype.hasOwnProperty.call(m,o)&&t.push(c(o));e.resolve(t)}}function f(o){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];e.indexOf(r)<0&&e.push(r)}}if("ready"!==D)throw new Error("apply() is only allowed in ready status");o=o||{};var n,l,s,a,d,p={},f=[],h={},v=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){d=c(y);var g;g=m[y]?function(e){for(var t=[e],o={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var l=n.pop(),i=l.id,c=l.chain;if((a=A[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var d=a.parents[s],p=A[d];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};t.indexOf(d)>=0||(p.hot._acceptedDependencies[i]?(o[d]||(o[d]=[]),r(o[d],[i])):(delete o[d],t.push(d),n.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}(d):{type:"disposed",moduleId:y};var O=!1,E=!1,x=!1,H="";switch(g.chain&&(H="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":o.onDeclined&&o.onDeclined(g),o.ignoreDeclined||(O=new Error("Aborted because of self decline: "+g.moduleId+H));break;case"declined":o.onDeclined&&o.onDeclined(g),o.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+H));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(g),o.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+H));break;case"accepted":o.onAccepted&&o.onAccepted(g),E=!0;break;case"disposed":o.onDisposed&&o.onDisposed(g),x=!0;break;default:throw new Error("Unexception type "+g.type)}if(O)return i("abort"),Promise.reject(O);if(E){h[d]=m[d],r(f,g.outdatedModules);for(d in g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,d)&&(p[d]||(p[d]=[]),r(p[d],g.outdatedDependencies[d]))}x&&(r(f,[g.moduleId]),h[d]=v)}var I=[];for(l=0;l<f.length;l++)d=f[l],A[d]&&A[d].hot._selfAccepted&&I.push({module:d,errorHandler:A[d].hot._selfAccepted});i("dispose"),Object.keys(P).forEach(function(e){!1===P[e]&&t(e)});for(var S,T=f.slice();T.length>0;)if(d=T.pop(),a=A[d]){var M={},X=a.hot._disposeHandlers;for(s=0;s<X.length;s++)(n=X[s])(M);for(j[d]=M,a.hot.active=!1,delete A[d],delete p[d],s=0;s<a.children.length;s++){var L=A[a.children[s]];L&&((S=L.parents.indexOf(d))>=0&&L.parents.splice(S,1))}}var Y,k;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=A[d]))for(k=p[d],s=0;s<k.length;s++)Y=k[s],(S=a.children.indexOf(Y))>=0&&a.children.splice(S,1);i("apply"),w=b;for(d in h)Object.prototype.hasOwnProperty.call(h,d)&&(e[d]=h[d]);var B=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=A[d])){k=p[d];var q=[];for(l=0;l<k.length;l++)if(Y=k[l],n=a.hot._acceptedDependencies[Y]){if(q.indexOf(n)>=0)continue;q.push(n)}for(l=0;l<q.length;l++){n=q[l];try{n(k)}catch(e){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:d,dependencyId:k[l],error:e}),o.ignoreErrored||B||(B=e)}}}for(l=0;l<I.length;l++){var C=I[l];d=C.module,_=[d];try{u(d)}catch(e){if("function"==typeof C.errorHandler)try{C.errorHandler(e)}catch(t){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,orginalError:e,originalError:e}),o.ignoreErrored||B||(B=t),B||(B=e)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:d,error:e}),o.ignoreErrored||B||(B=e)}}return B?(i("fail"),Promise.reject(B)):(i("idle"),new Promise(function(e){e(f)}))}function u(t){if(A[t])return A[t].exports;var o=A[t]={i:t,l:!1,exports:{},hot:l(t),parents:(E=_,_=[],E),children:[]};return e[t].call(o.exports,o,o.exports,n(t)),o.l=!0,o.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){a(e,t),h&&h(e,t)};var v,y,m,b,g=!0,w="5f5c64d80eace50ce0fb",O=1e4,j={},_=[],E=[],x=[],D="idle",H=0,I=0,S={},T={},P={},A={};u.m=e,u.c=A,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.h=function(){return w},n("./app/index.js")(u.s="./app/index.js")}({"./app/app.css":function(e,t){},"./app/components/menuHighlight.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){function o(e){var o=!0,r=!1,n=void 0;try{for(var l,i=t[Symbol.iterator]();!(o=(l=i.next()).done);o=!0){var c=l.value;c==e?c.classList.add("is-active"):c.classList.remove("is-active")}}catch(e){r=!0,n=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw n}}}window.addEventListener("scroll",function(){var r=window.pageYOffset;r<=e[1]?o(t[0]):r>e[1]&&r<=e[2]?o(t[1]):r>e[2]&&r<=e[3]?o(t[2]):r>e[3]&&o(t[3])})};t.default=r},"./app/components/menuScroll.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o("./node_modules/smoothscroll-polyfill/dist/smoothscroll.js").polyfill();var r=function(e,t){for(var o=0;o<t.length;o++)!function(o){t[o].addEventListener("click",function(){window.scroll({left:0,top:e[o]||e,behavior:"smooth"})})}(o)};t.default=r},"./app/index.js":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=o("./app/app.css"),l=(r(n),o("./app/components/menuHighlight.js")),i=r(l),c=o("./app/components/menuScroll.js"),s=r(c),a=Array.from(document.querySelectorAll(".js-scroll-pos")),d=Array.from(document.querySelectorAll(".js-scroll-nav")),p=parseInt(window.getComputedStyle(a[0]).marginTop),f=a.map(function(e){return e.offsetTop-p}),u=a.map(function(e){return e.offsetTop});(0,i.default)(f,d),(0,s.default)(u,d);var h=Array.from(document.querySelectorAll(".heading-desktop"));(0,s.default)(u.slice(-1)[0],h)},"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":function(e,t,o){!function(){"use strict";function t(e){var t=["MSIE ","Trident/","Edge/"];return new RegExp(t.join("|")).test(e)}function o(){function e(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){return.5*(1-Math.cos(Math.PI*e))}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(e,t){return"Y"===t?e.clientHeight+h<e.scrollHeight:"X"===t?e.clientWidth+h<e.scrollWidth:void 0}function c(e,t){var o=r.getComputedStyle(e,null)["overflow"+t];return"auto"===o||"scroll"===o}function s(e){var t=i(e,"Y")&&c(e,"Y"),o=i(e,"X")&&c(e,"X");return t||o}function a(e){var t;do{e=e.parentNode,t=e===n.body}while(!1===t&&!1===s(e));return t=null,e}function d(e){var t,n,l,i=y(),c=(i-e.startTime)/u;c=c>1?1:c,t=o(c),n=e.startX+(e.x-e.startX)*t,l=e.startY+(e.y-e.startY)*t,e.method.call(e.scrollable,n,l),n===e.x&&l===e.y||r.requestAnimationFrame(d.bind(r,e))}function p(t,o,l){var i,c,s,a,p=y();t===n.body?(i=r,c=r.scrollX||r.pageXOffset,s=r.scrollY||r.pageYOffset,a=v.scroll):(i=t,c=t.scrollLeft,s=t.scrollTop,a=e),d({scrollable:i,method:a,startTime:p,startX:c,startY:s,x:o,y:l})}if(!("scrollBehavior"in n.documentElement.style&&!0!==r.__forceSmoothScrollPolyfill__)){var f=r.HTMLElement||r.Element,u=468,h=t(r.navigator.userAgent)?1:0,v={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:f.prototype.scroll||e,scrollIntoView:f.prototype.scrollIntoView},y=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now;r.scroll=r.scrollTo=function(){if(void 0!==arguments[0])return!0===l(arguments[0])?void v.scroll.call(r,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:r.scrollX||r.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:r.scrollY||r.pageYOffset):void p.call(r,n.body,void 0!==arguments[0].left?~~arguments[0].left:r.scrollX||r.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:r.scrollY||r.pageYOffset)},r.scrollBy=function(){if(void 0!==arguments[0])return l(arguments[0])?void v.scrollBy.call(r,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):void p.call(r,n.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))},f.prototype.scroll=f.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");return void v.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},f.prototype.scrollBy=function(){if(void 0!==arguments[0])return!0===l(arguments[0])?void v.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop):void this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})},f.prototype.scrollIntoView=function(){if(!0===l(arguments[0]))return void v.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);var e=a(this),t=e.getBoundingClientRect(),o=this.getBoundingClientRect();e!==n.body?(p.call(this,e,e.scrollLeft+o.left-t.left,e.scrollTop+o.top-t.top),"fixed"!==r.getComputedStyle(e).position&&r.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):r.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}}}var r=window,n=document;e.exports={polyfill:o}}()}});