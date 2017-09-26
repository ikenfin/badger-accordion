!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),Array.from||(Array.from=function(){var t=Object.prototype.toString,e=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},n=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,r=function(t){var e=n(t);return Math.min(Math.max(e,0),i)};return function(t){var n=this,i=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!e(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var o,l=r(i.length),u=e(n)?Object(new n(l)):new Array(l),c=0;c<l;)o=i[c],u[c]=s?void 0===a?s(o,c):s.call(a,o,c):o,c+=1;return u.length=l,u}}()),e.default=t}).call(e,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(0),a=(i(r),n(3)),s=i(a),o=new s.default(".js-badger-accordion");console.log(o.getState([0]))},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(4),l=i(o),u=n(8),c=(i(u),n(0)),d=(i(c),l.default),h=function(){function t(e,n){r(this,t);var i=document.querySelector(e);if(null!=i){var s={headerClass:".js-badger-accordion-header",panelClass:".js-badger-accordion-panel",panelInnerClass:".js-badger-accordion-panel-inner",hidenClass:"is-hidden",initalisedClass:"badger-accordion--initalised",headerDataAttr:"data-badger-accordion-header-id",openMultiplePanels:!1,openHeadersOnLoad:[],headerOpenLabel:"Open accordion panel",headerCloseLabel:"Close accordion panel"};this.settings=a({},s,n),this.container=i,this.headers=Array.from(this.container.querySelectorAll(this.settings.headerClass)),this.panels=Array.from(this.container.querySelectorAll(this.settings.panelClass)),this.toggleEl=void 0!==this.settings.toggleEl?Array.from(this.container.querySelectorAll(this.settings.toggleEl)):this.headers,this.states=[].map.call(this.headers,function(t){return{state:"closed"}}),this.ids=[].map.call(this.headers,function(t){return{id:d()}}),this.toggling=!1,this.container?this.init():console.log("Something is wrong with you markup...")}}return s(t,[{key:"init",value:function(){this._setupAttributes(),this._initalState(),this._setPanelHeight(),this._insertDataAttrs(),this._addListeners(),this._finishInitalisation()}},{key:"_initalState",value:function(){var t=this.settings.openHeadersOnLoad;t.length&&this._openHeadersOnLoad(t),this._renderDom()}},{key:"_insertDataAttrs",value:function(){var t=this;this.headers.forEach(function(e,n){e.setAttribute(t.settings.headerDataAttr,n)})}},{key:"_finishInitalisation",value:function(){this.container.classList.add(this.settings.initalisedClass)}},{key:"_addListeners",value:function(){var t=this;this.headers.forEach(function(e,n){e.addEventListener("click",function(i){t.handleClick(e,n)})})}},{key:"handleClick",value:function(t,e){var n=this.settings.headerClass.substr(1);t.classList.contains(n)&&!1===this.toggling&&(this.toggling=!0,this.setState(e),this._renderDom())}},{key:"setState",value:function(t){var e=this,n=this.getState();this.settings.openMultiplePanels||n.filter(function(e,n){n!=t&&(e.state="closed")}),n.filter(function(n,i){if(i==t){var r=e.toggleState(n.state);return n.state=r}})}},{key:"_renderDom",value:function(){var t=this;this.getState();this.states.filter(function(e,n){if("open"===e.state){t.headers[n];t.open(n)}}),this.states.filter(function(e,n){if("closed"===e.state){t.headers[n];t.close(n)}})}},{key:"open",value:function(t){this.togglePanel("open",t)}},{key:"close",value:function(t){this.togglePanel("closed",t)}},{key:"openAll",value:function(){var t=this;this.headers.forEach(function(e){t.togglePanel("open",e)})}},{key:"closeAll",value:function(){var t=this;this.headers.forEach(function(e){t.togglePanel("closed",e)})}},{key:"togglePanel",value:function(t,e){var n=this;if(void 0!==t&&void 0!==e)if("closed"===t){var i=this.headers[e],r=this.panels[e];r.classList.add(this.settings.hidenClass),i.setAttribute("aria-expanded",!1),i.setAttribute("aria-label",this.settings.headerOpenLabel),r.onCSSTransitionEnd(function(){return n.toggling=!1})}else if("open"===t){var a=this.headers[e],s=this.panels[e];s.classList.remove(this.settings.hidenClass),a.setAttribute("aria-expanded",!0),a.setAttribute("aria-label",this.settings.headerCloseLabel),s.onCSSTransitionEnd(function(){return n.toggling=!1})}}},{key:"getState",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length&&Array.isArray(e)){return e.map(function(e){return t.states[e]})}return this.states}},{key:"toggleState",value:function(t){if(void 0!==t)return"closed"===t?"open":"closed"}},{key:"_openHeadersOnLoad",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length&&Array.isArray(e)){e.filter(function(t){return void 0!=t});e.forEach(function(e){return t.states[e].state="open"})}}},{key:"_setPanelHeight",value:function(){var t=this;this.panels.forEach(function(e){var n=e.querySelector(t.settings.panelInnerClass),i=n.offsetHeight;return e.style.maxHeight=i+"px"})}},{key:"_setupHeaders",value:function(){var t=this;this.headers.forEach(function(e,n){e.setAttribute("id","badger-accordion-header-"+t.ids[n].id),e.setAttribute("aria-controls","badger-accordion-panel-"+t.ids[n].id),e.setAttribute("aria-label",t.settings.headerOpenLabel)})}},{key:"_setupPanels",value:function(){var t=this;this.panels.forEach(function(e,n){e.setAttribute("id","badger-accordion-panel-"+t.ids[n].id),e.setAttribute("aria-labeledby","badger-accordion-header-"+t.ids[n].id)})}},{key:"_setupAttributes",value:function(){this._setupHeaders(),this._setupPanels(),this._insertDataAttrs()}}]),t}();e.default=h},function(t,e,n){function i(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var s=t.random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var o=0;o<16;++o)e[i+o]=s[o];return e||a(s)}var r=n(5),a=n(7);t.exports=i},function(t,e,n){(function(e){var n,i=e.crypto||e.msCrypto;if(i&&i.getRandomValues){var r=new Uint8Array(16);n=function(){return i.getRandomValues(r),r}}if(!n){var a=new Array(16);n=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}t.exports=n}).call(e,n(6))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){function n(t,e){var n=e||0,r=i;return r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]}for(var i=[],r=0;r<256;++r)i[r]=(r+256).toString(16).substr(1);t.exports=n},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e,n){var i=t.body||t.documentElement,i=i.style,r="",a="";""==i.WebkitAnimation&&(r="-webkit-"),""==i.MozAnimation&&(r="-moz-"),""==i.OAnimation&&(r="-o-"),""==i.WebkitTransition&&(a="-webkit-"),""==i.MozTransition&&(a="-moz-"),""==i.OTransition&&(a="-o-"),Object.prototype.onCSSAnimationEnd=function(t){var e=function e(n){t(),n.target.removeEventListener(n.type,e)};return this.addEventListener("webkitAnimationEnd",e),this.addEventListener("mozAnimationEnd",e),this.addEventListener("oAnimationEnd",e),this.addEventListener("oanimationend",e),this.addEventListener("animationend",e),(""!=r||"animation"in i)&&"0s"!=getComputedStyle(this)[r+"animation-duration"]||t(),this},Object.prototype.onCSSTransitionEnd=function(t){var e=function e(n){t(),n.target.removeEventListener(n.type,e)};return this.addEventListener("webkitTransitionEnd",e),this.addEventListener("mozTransitionEnd",e),this.addEventListener("oTransitionEnd",e),this.addEventListener("transitionend",e),this.addEventListener("transitionend",e),(""!=a||"transition"in i)&&"0s"!=getComputedStyle(this)[a+"transition-duration"]||t(),this}}(document,window),e.default=t}).call(e,n(1)(t))}]);