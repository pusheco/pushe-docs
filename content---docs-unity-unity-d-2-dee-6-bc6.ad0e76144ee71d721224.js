(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));n(0);var r=n(128);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"unity-d2d",title:"اعلان از یک دیوایس یه دیوایس دیگر"},o=[{value:"ارسال نوتیفیکیشن ساده",id:"ارسال-نوتیفیکیشن-ساده",children:[]},{value:"ارسال نوتیفیکیشن پیشرفته",id:"ارسال-نوتیفیکیشن-پیشرفته",children:[]},{value:"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد",id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد",children:[]}],l={rightToc:o},b="wrapper";function p(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(b,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"با استفاده‌از ",Object(r.b)("a",a({parentName:"p"},{href:"unity-pusheid"}),"pushe id")," یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.")),Object(r.b)("h2",{id:"ارسال-نوتیفیکیشن-ساده"},"ارسال نوتیفیکیشن ساده"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"static-void-sendsimplenotiftouserpusheid-title-content"},Object(r.b)("inlineCode",{parentName:"h4"},"static void SendSimpleNotifToUser(pusheId, title, content)"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"pusheId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"title"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"تیتر اعلان")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"content"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"محتوای اعلان")))),Object(r.b)("p",null,"می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'if (Pushe.PusheIsInitialized()) {\n  string pusheId = "12345";\n  string title = "Hello user";\n  string content = "How are you?";\n  Pushe.SendSimpleNotifToUser(pusheId, title, content);\n}\n')),Object(r.b)("h2",{id:"ارسال-نوتیفیکیشن-پیشرفته"},"ارسال نوتیفیکیشن پیشرفته"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"sendadvancednotiftouserpusheid-notificationjson-throws-exception"},Object(r.b)("inlineCode",{parentName:"h4"},"SendAdvancedNotifToUser(pusheId, notificationJson)")," throws ",Object(r.b)("inlineCode",{parentName:"h4"},"Exception"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"pusheId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"notificationJson"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.")))),Object(r.b)("p",null,"همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-cpp"}),'if (Pushe.PusheIsInitialized()) {\n  string pusheId = "12345";\n  var json = @"{\n    ""title"":""Hello user"",\n    ""content"":""How are you?""           \n  }";\n  Pushe.SendAdvancedNotifToUser(pusheId, title, content);\n}\n')),Object(r.b)("p",null,"برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/api/api-keys"}),"RESTful API در پوشه")," مراجعه کنید."),Object(r.b)("h2",{id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد"},"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد"),Object(r.b)("p",null,"در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'string thisPusheId = Pushe.GetPusheId();\n\n// Send notification to this device\nPushe.SendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");\n')))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,d=p[o+"."+u]||p[u]||b[u]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[l]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);