(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,f=p[c+"."+s]||p[s]||l[s]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:r,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(0);var r=n(102);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={id:"welcome",title:"Welcome",author:"Yangshun Tay",authorTitle:"Front End Engineer @ Facebook",authorURL:"https://github.com/yangshun",authorImageURL:"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4",authorTwitter:"yangshunz",tags:["facebook","hello","docusaurus"]},c=[],i={rightToc:c},l="wrapper";function p(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Blog features are powered by the blog plugin. Simple add files to the ",Object(r.b)("inlineCode",{parentName:"p"},"blog")," directory. It supports tags as well!"),Object(r.b)("p",null,"Delete the whole directory if you don't want the blog features. As simple as that!"))}p.isMDXComponent=!0}}]);