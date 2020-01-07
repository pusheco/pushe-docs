(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r),a=i.a.createContext({}),o=function(e){var t=i.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),d=r,b=l[c+"."+d]||l[d]||u[d]||a;return n?i.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(b,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));n(0);var r=n(297);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={id:"studio-d2d",title:"اعلان از یک دیوایس به دیوایس دیگر"},c=[{value:"ارسال نوتیفیکیشن",id:"ارسال-نوتیفیکیشن",children:[]},{value:"ارسال اعلان به دستگاه اجراکننده‌ی کد",id:"ارسال-اعلان-به-دستگاه-اجراکنندهی-کد",children:[]}],s={rightToc:c},u="wrapper";function l(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(u,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"با استفاده‌ از ",Object(r.b)("a",i({parentName:"p"},{href:"/docs/android-studio/studio-pusheid"}),"شناسه‌های کاربر")," می‌توان از یک دیوایس دیگر به آن اعلان فرستاد."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌ است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.")),Object(r.b)("b",null,"به جای pusheId میتوانید از androidId و googleAdvertisingId که در بخش شناسایی کاربر به آنها پرداخته شده نیز استفاده کنید"),Object(r.b)("h2",{id:"ارسال-نوتیفیکیشن"},"ارسال نوتیفیکیشن"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"pushegetpusheservicepushenotificationclasssendnotificationtouserusernotification"},Object(r.b)("inlineCode",{parentName:"h4"},"Pushe.getPusheService(PusheNotification.class).sendNotificationToUser(userNotification)"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"userNotification"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"یک آبجکت از نوع UserNotification")))),Object(r.b)("p",null,"می‌توانید با استفاده از این تابع نوتیفیکیشنی به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده ارسال کنید. موقع ساختن آبجکت UserNotification شناسه‌ای را که با استفاده از آن میخواهید نوتیفیکیشن را ارسال کنید تعیین میکنید. برای مثال در نمونه زیر از androidId برای ساختن آبجکت نوتیفیکیشن استفاده شده است."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),'if (Pushe.isInitialized()) {\n    UserNotification userNotification = UserNotification.withAndroidId(androidId);\n    userNotification.setTitle("title1");\n    userNotification.setContent("content1");\n    Pushe.getPusheService(PusheNotification.class).sendNotificationToUser(userNotification);\n}\n')),Object(r.b)("h2",{id:"ارسال-اعلان-به-دستگاه-اجراکنندهی-کد"},"ارسال اعلان به دستگاه اجراکننده‌ی کد"),Object(r.b)("p",null,"در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),'    UserNotification userNotification = UserNotification.withAndroidId(Pushe.getAndroidId());\n    userNotification.setTitle("title1");\n    userNotification.setContent("content1");\n    Pushe.getPusheService(PusheNotification.class).sendNotificationToUser(userNotification);\n')))}l.isMDXComponent=!0}}]);