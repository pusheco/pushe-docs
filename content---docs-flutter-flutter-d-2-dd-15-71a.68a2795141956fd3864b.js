(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(0);var a=n(297);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={id:"flutter-d2d",title:"اعلان از یک دیوایس یه دیوایس دیگر"},c=[{value:"ارسال نوتیفیکیشن ساده",id:"ارسال-نوتیفیکیشن-ساده",children:[]},{value:"ارسال نوتیفیکیشن پیشرفته",id:"ارسال-نوتیفیکیشن-پیشرفته",children:[]},{value:"ارسال جیسون دلخواه",id:"ارسال-جیسون-دلخواه",children:[]},{value:"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد",id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد",children:[]}],o={rightToc:c},l="wrapper";function p(e){var t=e.components,n=b(e,["components"]);return Object(a.b)(l,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"با استفاده‌از ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/flutter/flutter-pusheid"}),"pushe id")," یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.")),Object(a.b)("h2",{id:"ارسال-نوتیفیکیشن-ساده"},"ارسال نوتیفیکیشن ساده"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"تمام نسخه‌ها")),Object(a.b)("div",{dir:"ltr"},Object(a.b)("h4",{id:"static-void-sendsimplenotiftouserpusheid-title-content"},Object(a.b)("inlineCode",{parentName:"h4"},"static void sendSimpleNotifToUser(pusheId, title, content)"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"استفاده"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"pusheId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"title"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"تیتر اعلان")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"content"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"محتوای اعلان")))),Object(a.b)("p",null,"می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n    if (isInitialized) {\n        String pusheId = "somePusheId";\n        Pushe.sendSimpleNotifToUser(pusheId, "Hello user", "How are you doing?");\n    }\n})\n')),Object(a.b)("h2",{id:"ارسال-نوتیفیکیشن-پیشرفته"},"ارسال نوتیفیکیشن پیشرفته"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"تمام نسخه‌ها")),Object(a.b)("p",null,"از: ",Object(a.b)("inlineCode",{parentName:"p"},"co.ronash.pushe.Pushe")),Object(a.b)("div",{dir:"ltr"},Object(a.b)("h4",{id:"sendadvancednotiftouserpusheid-notificationjson-throws-exception"},Object(a.b)("inlineCode",{parentName:"h4"},"sendAdvancedNotifToUser(pusheId, notificationJson)")," throws ",Object(a.b)("inlineCode",{parentName:"h4"},"Exception"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"استفاده"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"pusheId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"notificationJson"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.")))),Object(a.b)("p",null,"همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n  if (isInitialized) {\n    var notification = {\n      "title": "Hello user",\n      "content": "How are you?"\n    };\n    try {\n      Pushe.sendAdvancedNotifToUser("12345", notification.toString());\n    } catch(e) {\n      // Error. Perhaps Json has problems\n    }\n  }\n});\n')),Object(a.b)("p",null,"برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش ",Object(a.b)("a",r({parentName:"p"},{href:"docs/api-keys"}),"RESTful API در پوشه")," مراجعه کنید."),Object(a.b)("h2",{id:"ارسال-جیسون-دلخواه"},"ارسال جیسون دلخواه"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"نسخه‌ی 1.1.0 به بعد")),Object(a.b)("div",{dir:"ltr"},Object(a.b)("h4",{id:"sendcustomjsontouserpusheid-customjson-throws-exception"},Object(a.b)("inlineCode",{parentName:"h4"},"sendCustomJsonToUser(pusheId, customJson)")," throws ",Object(a.b)("inlineCode",{parentName:"h4"},"Exception"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"استفاده"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"pusheId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"شناسه‌ی دستگاه موردنظر")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"customJson"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"یک استرینگ با فرمت جیسون که به کاربر ارسال شود.")))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'Pushe.isPusheInitialized().then((isInitialized) {\n  if (isInitialized) {\n    var customContentJson = {\n      "key1": "value1",\n      "key2": "value2"\n    };\n    try {\n      Pushe.sendCustomJsonToUser("12345", customContentJson.toString());\n    } catch(e) {\n      // Error. Perhaps Json has problems\n    }\n  }\n});\n')),Object(a.b)("p",null,"دستگاه مقصد می‌تواند با تعریف ",Object(a.b)("a",r({parentName:"p"},{href:"flutter-listener"}),"رویداد نوتیفیکیشن"),"، جیسون را در متد ",Object(a.b)("inlineCode",{parentName:"p"},"onCustomContentReceived")," دریافت کند."),Object(a.b)("h2",{id:"ارسال-اعلان-و-یا-جیسون-به-دستگاه-اجراکنندهی-کد"},"ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد"),Object(a.b)("p",null,"در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'String thisPusheId = await Pushe.getPusheId(this);\n\n// Send notification to this device\nPushe.sendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");\n')))}p.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),b=r.a.createContext({}),i=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),s=a,u=p[c+"."+s]||p[s]||l[s]||b;return n?r.a.createElement(u,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[o]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<b;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);