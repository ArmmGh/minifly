(()=>{"use strict";var t={800:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"body{margin:0}body #container{display:flex;padding:25%}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=o(t,r),l=0;l<i.length;l++){var u=n(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{function t(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function o(t,e){return(n,o,r)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})}}function r({selector:t,template:e,style:n,styleUrl:o,useShadow:r=!0}){return o=>{(t=>{if(!~t.indexOf("-"))throw new Error("You need at least 1 dash in the custom element name!")})(t),(t=>{if(!t)throw new Error("You need to pass a template for the element!")})(e);const i=document.createElement("template");n&&(e=`<style>${n}</style> ${e}`),i.innerHTML=e;const a=o.prototype.connectedCallback||function(){};o.prototype.connectedCallback=function(){const t=document.importNode(i.content,!0);r?this.attachShadow({mode:"open"}).appendChild(t):this.appendChild(t),a.call(this),function(t){const e=t.constructor.listeners,n=t.shadowRoot||t;if(e)for(const o of e)(o.selector?n.querySelector(o.selector):t).addEventListener(o.eventName,(e=>{o.handler.call(t,e)}))}(this)},customElements.define(t,o)}}function i(t,e){return function(n,o){t||(t=String(o)),Object.defineProperty(n,o,{get:function(){const n=e||this;return{emit(e){n.dispatchEvent(new CustomEvent(t,e))}}}})}}Object.create,Object.create;let a=class extends HTMLElement{constructor(){super()}onToggleButton(t){this.shadowRoot.lastChild.disabled=!1}handleButtonClick(t){this.onButtonClick.emit()}};t([o("toggleButton"),e("design:type",Function),e("design:paramtypes",[CustomEvent]),e("design:returntype",void 0)],a.prototype,"onToggleButton",null),t([o("click"),e("design:type",Function),e("design:paramtypes",[CustomEvent]),e("design:returntype",void 0)],a.prototype,"handleButtonClick",null),t([i("minify",document.getElementById("output")),e("design:type",Object)],a.prototype,"onButtonClick",void 0),a=t([r({selector:"action-button",template:"<button disabled>Minify</button>",style:":host button {\n\t\tcolor: #fff;\n\t    background: blue;\n\t\tcursor: pointer;\n\t}\n\t:host button:disabled {\n\t\topacity: 0.6;\n\t}"}),e("design:paramtypes",[])],a);let s=class extends HTMLElement{constructor(){super(),this.firstTimeInit=!0}connectedCallback(){console.log(this.header),"input"===this.shadowRoot.host.id||this.shadowRoot.host.id}handleInput({target:t}){"input"===this.shadowRoot.host.id&&t.value.length&&this.firstTimeInit&&(this.onInput.emit(),this.firstTimeInit=!1)}handleMinifyEvent(t){const e=document.getElementById("input").shadowRoot.lastChild;this.shadowRoot.lastChild.value=e.value}};t([("title",function(t,e){Object.defineProperty(t,e,{get:function(){return this.getAttribute("title")}})}),e("design:type",String)],s.prototype,"header",void 0),t([i("toggleButton",document.querySelector("action-button")),e("design:type",Object)],s.prototype,"onInput",void 0),t([o("input","textarea"),e("design:type",Function),e("design:paramtypes",[CustomEvent]),e("design:returntype",void 0)],s.prototype,"handleInput",null),t([o("minify"),e("design:type",Function),e("design:paramtypes",[CustomEvent]),e("design:returntype",void 0)],s.prototype,"handleMinifyEvent",null),s=t([r({selector:"code-area",template:"<header>{{header}}</header>\n               <textarea />",style:"\n        :host {\n            display: flex;\n            flex-direction: column;\n            position: relative;\n        }\n        :host header {\n            background-color: #2F3C7E;\n            color: #FBEAEB;\n        }\n        :host textarea {\n            outline: none;\n            background-color: #FBEAEB;\n            border: 1px solid #2F3C7E;\n        }"}),e("design:paramtypes",[])],s);var c=n(379),l=n.n(c),u=n(795),d=n.n(u),p=n(569),f=n.n(p),h=n(565),m=n.n(h),y=n(216),v=n.n(y),g=n(589),b=n.n(g),E=n(800),C={};C.styleTagTransform=b(),C.setAttributes=m(),C.insert=f().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=v(),l()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals,window.addEventListener("DOMContentLoaded",(()=>{}))})()})();