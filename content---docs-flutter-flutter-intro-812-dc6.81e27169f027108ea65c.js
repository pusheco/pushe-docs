(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=c(t),f=r,s=l[i+"."+f]||l[f]||u[f]||o;return t?a.a.createElement(s,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var f=2;f<o;f++)c[f]=t[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));t(0);var r=t(102);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={id:"flutter-intro",title:"Introduction"},i=[{value:"Depend on it",id:"depend-on-it",children:[]}],p={rightToc:i},u="wrapper";function l(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(u,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"depend-on-it"},"Depend on it"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"pubspec.yml"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"pushe: 1.2.0^\n")))}l.isMDXComponent=!0}}]);