(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var i="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,s=u[b+"."+p]||u[p]||o[p]||c;return n?a.a.createElement(s,Object.assign({},{ref:t},i,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},i))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[i]="string"==typeof e?e:r,l[1]=b;for(var p=2;p<c;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));n(0);var r=n(297);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"studio-events",title:"رویدادها"},b=[{value:"ارسال رویداد",id:"ارسال-رویداد",children:[]},{value:"ارسال Ecommerce data",id:"ارسال-ecommerce-data",children:[]}],i={rightToc:b},o="wrapper";function u(e){var t=e.components,n=c(e,["components"]);return Object(r.b)(o,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"در صورتی که ایونت(رویداد) خاصی در برنامه اتفاق افتاد می‌توانید آن‌ را با استفاده از Pushe ثبت کنید."),Object(r.b)("h2",{id:"ارسال-رویداد"},"ارسال رویداد"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"منظور از رویداد یا ایونت چیست؟"),Object(r.b)("br",null),Object(r.b)("br",null),"\nبرای مثال در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر داد می‌توان از این امکان برای ارسال و ثبت این رویداد استفاده نمود.")),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"pushegetpusheservicepusheanalyticsclasssendeventevent"},Object(r.b)("inlineCode",{parentName:"h4"},"Pushe.getPusheService(PusheAnalytics.class).sendEvent(event);"))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-java"}),'string eventName = "permium_activated";\nPushe.getPusheService(PusheAnalytics.class).sendEvent(event);\n')),Object(r.b)("h2",{id:"ارسال-ecommerce-data"},"ارسال Ecommerce data"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"در چه حالاتی می‌توان از این امکان استفاده کرد؟"),Object(r.b)("br",null),Object(r.b)("br",null),"\nبرای مواردی همچون فروش یک نوع کالایی که بصورت آنلاین مبادله می‌شود می‌توان از این امکان پوشه استفاده کرد و آن‌ را برای این کاربر ثبت کرد.")),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"pushegetpusheservicepusheanalyticsclasssendecommercedataname-price"},Object(r.b)("inlineCode",{parentName:"h4"},"Pushe.getPusheService(PusheAnalytics.class).sendEcommerceData(name, price)"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"نوع داده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"name"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"نام داده"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"price"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"قیمت"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"double")))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-java"}),'string name = "کالا-۱۰۲۴";\ndouble price = 125000.0;\nPushe.getPusheService(PusheAnalytics.class).sendEcommerceData(name, price);\n')))}u.isMDXComponent=!0}}]);