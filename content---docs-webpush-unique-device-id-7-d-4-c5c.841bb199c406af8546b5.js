(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(0);var r=n(297);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={id:"unique-device-id",title:"دریافت شناسه یکتا وب‌پوش پوشه | pushe.co",hide_title:!0,sidebar_label:"دریافت شناسه یکتا‌"},i=[{value:"توضیح شناسه یکتا",id:"توضیح-شناسه-یکتا",children:[]},{value:"دریافت شناسه (deviceId)",id:"دریافت-شناسه-deviceid",children:[]}],p={rightToc:i},l="wrapper";function b(e){var t=e.components,n=c(e,["components"]);return Object(r.b)(l,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"دریافت-شناسه-یکتا-کاربر-در-وبپوش"},"دریافت شناسه یکتا کاربر در وب‌پوش"),Object(r.b)("h2",{id:"توضیح-شناسه-یکتا"},"توضیح شناسه یکتا"),Object(r.b)("p",null,"توسط کتابخانه وب‌پوش پوشه می توانید شناسه یکتایی که ما آنرا ",Object(r.b)("strong",{parentName:"p"},"deviceId")," می نامیم را دریافت کرده و می توانید توسط ",Object(r.b)("strong",{parentName:"p"},"API")," وب‌ پوشه به کاربر و یا کاربران خاصی که تمایل دارید اعلان ارسال کنید."),Object(r.b)("h2",{id:"دریافت-شناسه-deviceid"},"دریافت شناسه (deviceId)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"در این متد از ",Object(r.b)("strong",{parentName:"p"},"Promise")," استفاده شده و در صورتی که با ",Object(r.b)("strong",{parentName:"p"},"Promise")," آشنایی ندارید توصیه می کنیم که از ",Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"این لینک")," درباره آن مطالعه کنید")),Object(r.b)("p",null,"برای دریافت کردن ",Object(r.b)("strong",{parentName:"p"},"deviceId")," می توانید از متد ‍‍‍",Object(r.b)("inlineCode",{parentName:"p"},"getDeviceId")," مطابق زیر استفاده کنید:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"Pushe.getDeviceId()\n    .then(function(deviceId) {\n        console.log(`Users's unique deviceId is: ${deviceId}`);\n    });\n")),Object(r.b)("p",null,"متد ",Object(r.b)("inlineCode",{parentName:"p"},"getDeviceId")," که در بالا استفاده شده یک ",Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promise")," برمیگرداند که با ",Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"}),"chain کردن متد then")," بر روی آن می توانیم مقدار ",Object(r.b)("strong",{parentName:"p"},"deviceId")," را پس از resolve شدن دریافت کنیم."))}b.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=o(n),s=r,d=b[i+"."+s]||b[s]||l[s]||c;return n?a.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);