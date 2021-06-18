_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,O=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return n?o.a.createElement(O,l(l({ref:t},p),{},{components:n})):o.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},MuE9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("xEgi")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xEgi:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),c=n.n(a),l=n("7ljp"),i=(c.a.createElement,{});function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("h1",null,"Getting started"),Object(l.b)("p",null,"To get started run npm install or yarn install ",Object(l.b)("inlineCode",{parentName:"p"},"lite-react-ui"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm install lite-react-ui")),Object(l.b)("br",null),Object(l.b)("h2",null,"Import a component"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TextField } from 'lite-react-ui';\n\n<TextField \n  placeholder=\"placeholder\" \n  value={} \n  onChange={} \n/>\n")),Object(l.b)("br",null),Object(l.b)("h2",null,"Import base styles"),Object(l.b)("p",null,"Import the namespaced global CSS for basic styling in your apps root container component"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Webpack 4 or less\nimport 'lite-react-ui/dist/style.css';\n\n// Webpack 5\nimport 'lite-react-ui/css';\n")),Object(l.b)("br",null),Object(l.b)("p",null,"You can modify the ",Object(l.b)("strong",{parentName:"p"},"font type")," used by providing setting\nyour own global font styles or providing a font\nclass to a lite-react-ui component for example."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/* some CSS\n.my-own-font-class {\n  font-family: 'Roboto';\n} \n*/\n<TextField className=\"my-own-font-class\" />\n")))}p.isMDXComponent=!0}},[["MuE9",0,1]]]);