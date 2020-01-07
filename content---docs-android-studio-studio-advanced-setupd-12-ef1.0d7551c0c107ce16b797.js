(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{282:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));t(0);var r=t(297);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={id:"studio-advanced-setup",title:"راه اندازی پیشرفته",sidebar_label:"راه‌اندازی پیشرفته"},i=[{value:"ماژول‌ها",id:"ماژولها",children:[{value:"Core",id:"core",children:[]},{value:"Notification",id:"notification",children:[]},{value:"Analytics",id:"analytics",children:[]},{value:"اضافه‌کردن ماژول‌های دلخواه",id:"اضافهکردن-ماژولهای-دلخواه",children:[]}]}],l={rightToc:i},p="wrapper";function u(e){var n=e.components,t=c(e,["components"]);return Object(r.b)(p,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ماژولها"},"ماژول‌ها"),Object(r.b)("p",null,"ماژول ",Object(r.b)("strong",{parentName:"p"},"Base")," متشکل از سه ماژول اصلی است:"),Object(r.b)("h3",{id:"core"},"Core"),Object(r.b)("p",null,"مدیریت پیام‌های ارسالی و دریافتی به عهده‌ی این ماژول است."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"co.pushe.plus:core:${pushe_version}\n")),Object(r.b)("h3",{id:"notification"},"Notification"),Object(r.b)("p",null,"این ماژول ساخت و مدیریت نوتیفیکیشن‌های جهت نمایش به کاربر را مدیریت می‌کند و تمام موارد مربوط به ساخت نوتیفیکیشن در این ماژول اجرا می‌شود."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"co.pushe.plus:notification:${pushe_version}\n")),Object(r.b)("h3",{id:"analytics"},"Analytics"),Object(r.b)("p",null,"موارد track کردن رفتار کاربر در برنامه‌ی شما همچون تعداد بازکردن برنامه، ارسال و دریافت Event و Ecommerce data و ... در این ماژول به انجام می‌رسد."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"co.pushe.plus:analytics:${pushe_version}\n")),Object(r.b)("h3",{id:"اضافهکردن-ماژولهای-دلخواه"},"اضافه‌کردن ماژول‌های دلخواه"),Object(r.b)("p",null,"ممکن است شما بخواهید بر حسب نیاز از همه‌ی امکانات استفاده نکنید. در این صورت می‌توانید ماژول‌های لازم را اضافه‌کنید."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-java"}),"\n// Must be added\nimplementation 'co.pushe.plus:core:${pushe_version}'\n\n// Use Notification\nimplementation 'co.pushe.plus:notification:${pushe_version}'\n\n// Use Analytics\nimplementation 'co.pushe.plus:analytics:${pushe_version}'\n")),Object(r.b)("p",null,"در غیر اینصورت تمام آن‌ها را اضافه‌کنید:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-java"}),"// Base module including all features of Plus\nimplementation 'co.pushe.plus:base:${pushe_version}'\n")))}u.isMDXComponent=!0},297:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),c=a.a.createContext({}),o=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=o(e.components);return a.a.createElement(c.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=o(t),s=r,b=u[i+"."+s]||u[s]||p[s]||c;return t?a.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(b,Object.assign({},{ref:n},l))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);