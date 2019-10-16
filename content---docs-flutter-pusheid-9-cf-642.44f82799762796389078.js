(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),l=r,d=s[u+"."+l]||s[l]||p[l]||o;return t?a.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},c))}));function l(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));t(0);var r=t(102);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={id:"pusheid",title:"Pushe id"},u=[{value:"Use push id",id:"use-push-id",children:[]}],c={rightToc:u},p="wrapper";function s(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(p,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A unique id generated using device properties."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Pushe id does not relate to the registration process, so if you can get pushe id, it does not mean pushe is registered on the device."))),Object(r.b)("h2",{id:"use-push-id"},"Use push id"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"async/await"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-dart"}),"var pusheId = await Pushe.getPusheId();\n")),Object(r.b)("p",null,"And using ",Object(r.b)("inlineCode",{parentName:"p"},".then"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-dart"}),"Pushe.getPusheId().then((pusheId) {\n    // use pusheId\n});\n")))}s.isMDXComponent=!0}}]);