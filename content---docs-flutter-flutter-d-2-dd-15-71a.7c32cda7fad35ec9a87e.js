(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(0);var r=n(156);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={id:"flutter-d2d",title:"اعلان از یک دیوایس یه دیوایس دیگر"},c=[{value:"ارسال نوتیفیکیشن ساده",id:"ارسال-نوتیفیکیشن-ساده",children:[]},{value:"ارسال نوتیفیکیشن پیشرفته",id:"ارسال-نوتیفیکیشن-پیشرفته",children:[]},{value:"ارسال جیسون دلخواه",id:"ارسال-جیسون-دلخواه",children:[]},{value:"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد",id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد",children:[]}],o={rightToc:c},l="wrapper";function s(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(l,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"با استفاده‌از ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/flutter/flutter-pusheid"}),"pushe id")," یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.")),Object(r.b)("h2",{id:"ارسال-نوتیفیکیشن-ساده"},"ارسال نوتیفیکیشن ساده"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"static-void-sendsimplenotiftouserpusheid-title-content"},Object(r.b)("inlineCode",{parentName:"h4"},"static void sendSimpleNotifToUser(pusheId, title, content)"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"pusheId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"title"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"تیتر اعلان")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"content"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"محتوای اعلان")))),Object(r.b)("p",null,"می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n    if (isInitialized) {\n        String pusheId = "somePusheId";\n        Pushe.sendSimpleNotifToUser(pusheId, "Hello user", "How are you doing?");\n    }\n})\n')),Object(r.b)("h2",{id:"ارسال-نوتیفیکیشن-پیشرفته"},"ارسال نوتیفیکیشن پیشرفته"),Object(r.b)("p",null,"از: ",Object(r.b)("inlineCode",{parentName:"p"},"co.ronash.pushe.Pushe")),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"sendadvancednotiftouserpusheid-notificationjson-throws-exception"},Object(r.b)("inlineCode",{parentName:"h4"},"sendAdvancedNotifToUser(pusheId, notificationJson)")," throws ",Object(r.b)("inlineCode",{parentName:"h4"},"Exception"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"pusheId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"notificationJson"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.")))),Object(r.b)("p",null,"همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n  if (isInitialized) {\n    var notification = {\n      "title": "Hello user",\n      "content": "How are you?"\n    };\n    try {\n      Pushe.sendAdvancedNotifToUser("12345", notification.toString());\n    } catch(e) {\n      // Error. Perhaps Json has problems\n    }\n  }\n});\n')),Object(r.b)("p",null,"برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش ",Object(r.b)("a",a({parentName:"p"},{href:"docs/api-keys"}),"RESTful API در پوشه")," مراجعه کنید."),Object(r.b)("h2",{id:"ارسال-جیسون-دلخواه"},"ارسال جیسون دلخواه"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"sendcustomjsontouserpusheid-customjson-throws-exception"},Object(r.b)("inlineCode",{parentName:"h4"},"sendCustomJsonToUser(pusheId, customJson)")," throws ",Object(r.b)("inlineCode",{parentName:"h4"},"Exception"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"این امکان درنسخه‌ی 1.1.0 اضافه خواهد شد.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"pusheId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"customJson"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"یک استرینگ با فرمت جیسون که به کاربر ارسال شود.")))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n  if (isInitialized) {\n    var customContentJson = {\n      "key1": "value1",\n      "key2": "value2"\n    };\n    try {\n      Pushe.sendCustomJsonToUser("12345", customContentJson.toString());\n    } catch(e) {\n      // Error. Perhaps Json has problems\n    }\n  }\n});\n')),Object(r.b)("p",null,"دستگاه مقصد می‌تواند با تعریف ",Object(r.b)("a",a({parentName:"p"},{href:"flutter-listener"}),"رویداد نوتیفیکیشن"),"، جیسون را در متد ",Object(r.b)("inlineCode",{parentName:"p"},"onCustomContentReceived")," دریافت کند."),Object(r.b)("h2",{id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد"},"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد"),Object(r.b)("p",null,"در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'String thisPusheId = await Pushe.getPusheId(this);\n\n// Send notification to this device\nPushe.sendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");\n')))}s.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=b(n),p=r,u=s[c+"."+p]||s[p]||l[p]||i;return n?a.a.createElement(u,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},o))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[o]="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);