!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets",t(t.s=5)}([function(e,t,n){"use strict";t.a="hello from other.js"},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,".test{padding:5px;color:blue;font-family:sans-serif;font-weight:800}","",{version:3,sources:["/./style.scss","/./style.scss"],names:[],mappings:"AAAA,MACE,YAAA,AACA,WAAA,AACA,uBAAA,AACA,eAAA,CCCD",file:"style.scss",sourcesContent:[".test {\n  padding: 5px;\n  color: blue;\n  font-family: sans-serif;\n  font-weight: 800;\n}\n",".test {\n  padding: 5px;\n  color: blue;\n  font-family: sans-serif;\n  font-weight: 800;\n}\n\n"],sourceRoot:"webpack://"}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(f(r.parts[s],t))}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(f(r.parts[s],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],i=o[1],a=o[2],f=o[3],u={css:i,media:a,sourceMap:f};n[s]?n[s].parts.push(u):t.push(n[s]={id:s,parts:[u]})}return t}function o(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function f(e,t){var n,r,o;if(t.singleton){var f=m++;n=g||(g=i(t)),r=u.bind(null,n,f,!1),o=u.bind(null,n,f,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),r=l.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=c.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,b=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var s=[],i=0;i<o.length;i++){var a=o[i],f=p[a.id];f.refs--,s.push(f)}if(e){var u=r(e);n(u,t)}for(var i=0;i<s.length;i++){var f=s[i];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete p[f.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var r=n(1),o=(n.n(r),n(0));console.log("hello from app.js"),console.log(o.a)}]);
//# sourceMappingURL=app.build.js.map