(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"6ea29f9f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navigation-bar"),n("div",{staticClass:"tab-content"},[n("router-view")],1)],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-nav",{attrs:{tabs:"",fill:""}},[n("b-nav-item",{attrs:{active:""}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)],1)])},i=[],c={data:function(){return{}}},s=c,l=n("2877"),f=Object(l["a"])(s,u,i,!1,null,null,null),d=f.exports,p={components:{navigationBar:d}},v=p,b=(n("034f"),Object(l["a"])(v,o,a,!1,null,null,null)),h=b.exports,m=(n("d3b7"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"header",attrs:{header:e.header,lead:"Website to track Covidiots around the world"}}),n("div",{staticClass:"content"})],1)},g=[],w={name:"Home",data:function(){return{header:"COVIDIOTS-19"}},components:{}},O=w,j=(n("f313"),Object(l["a"])(O,y,g,!1,null,"f5025c80",null)),_=j.exports;r["default"].use(m["a"]);var k=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],x=new m["a"]({mode:"history",base:"/",routes:k}),P=x,C=n("2f62");r["default"].use(C["a"]);var S=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=(n("ab8b"),n("2dd8"),n("5f5b")),T=n("b1e0");r["default"].config.productionTip=!1,r["default"].use(E["a"]),r["default"].use(T["a"]),new r["default"]({router:P,store:S,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},e571:function(e,t,n){},f313:function(e,t,n){"use strict";var r=n("e571"),o=n.n(r);o.a}});
//# sourceMappingURL=app.27b732b9.js.map