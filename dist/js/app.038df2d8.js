(function(e){function t(t){for(var n,o,u=t[0],s=t[1],l=t[2],c=0,f=[];c<u.length;c++)o=u[c],i[o]&&f.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i={app:0},a=[];function u(e){return s.p+"js/"+({createUser:"createUser",login:"login",profile:"profile",user:"user",userList:"userList"}[e]||e)+"."+{createUser:"e7cf2dc1",login:"4222a472",profile:"e0a71237",user:"c2a1a374",userList:"2bf336af"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={user:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({createUser:"createUser",login:"login",profile:"profile",user:"user",userList:"userList"}[e]||e)+"."+{createUser:"31d6cfe0",login:"31d6cfe0",profile:"31d6cfe0",user:"5b978e47",userList:"31d6cfe0"}[e]+".css",i=s.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],c=l.getAttribute("data-href");if(c===n||c===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e),l=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,r[1](a)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("home")]),r("router-link",{staticClass:"nav-item",attrs:{to:"/profile"}},[e._v("profile")]),r("router-link",{staticClass:"nav-item",attrs:{to:"/user",exact:""}},[e._v("user")]),r("router-link",{staticClass:"nav-item",attrs:{to:"/login"}},[e._v("login")])],1),r("router-view")],1)},i=[],a=(r("5c0b"),r("2877")),u={},s=Object(a["a"])(u,o,i,!1,null,null,null),l=s.exports,c=r("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("This is an home page")])])}],d={mounted:function(){console.log(this.$router),console.log(this.$router.options.routes),console.log(this.$route)}},h=d,m=Object(a["a"])(h,f,p,!1,null,null,null),g=m.exports;n["a"].use(c["a"]);var v=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/profile",name:"profile",component:function(){return r.e("profile").then(r.bind(null,"c66d"))},meta:{needLogin:!0}},{path:"/user",name:"user",component:function(){return r.e("user").then(r.bind(null,"1511"))},children:[{path:"create-user",alias:"",component:function(){return r.e("createUser").then(r.bind(null,"5635"))}},{path:"user-list",component:function(){return r.e("userList").then(r.bind(null,"ab3a"))}}],meta:{needLogin:!0}},{path:"/login",name:"login",component:function(){return r.e("login").then(r.bind(null,"a55b"))}}]});localStorage.isLogin="1",n["a"].config.productionTip=!1,v.beforeEach(function(e,t,r){if(e.matched.some(function(e){return e.meta.needLogin})){var n="1"===localStorage.isLogin;n?r():r({path:"/login",query:{redirect:e.fullPath}})}else r()}),new n["a"]({router:v,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(e,t,r){}});
//# sourceMappingURL=app.038df2d8.js.map