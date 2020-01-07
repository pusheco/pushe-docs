(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));t(0);var a=t(297);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={id:"cordova-intro",title:"راه‌اندازی در کوردوا",sidebar_label:"راه‌اندازی سریع"},o=[{value:"پیش‌نیاز‌ها",id:"پیشنیازها",children:[]},{value:"اضافه‌کردن پلاگین به پروژه",id:"اضافهکردن-پلاگین-به-پروژه",children:[]},{value:"تغییرات مربوط به فایل config.xml",id:"تغییرات-مربوط-به-فایل-configxml",children:[]},{value:"اضافه‌کردن کدهای لازم برای راه‌اندازی پوشه",id:"اضافهکردن-کدهای-لازم-برای-راهاندازی-پوشه",children:[]},{value:"تست و ثبت دستگاه در پوشه",id:"تست-و-ثبت-دستگاه-در-پوشه",children:[]},{value:"ادامه‌ی کار",id:"ادامهی-کار",children:[{value:"پروژه‌ی نمونه در گیت‌هاب",id:"پروژهی-نمونه-در-گیتهاب",children:[]},{value:"سوالات و مشکلات احتمالی",id:"سوالات-و-مشکلات-احتمالی",children:[]},{value:"مشاهده‌ی امکانات بیشتر",id:"مشاهدهی-امکانات-بیشتر",children:[]}]}],i={rightToc:o},b="wrapper";function p(e){var n=e.components,t=c(e,["components"]);return Object(a.b)(b,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"نسخه‌ی فعلی پلاگین فقط از سیستم‌ عامل اندروید پشتیبانی می‌کند.")),Object(a.b)("h2",{id:"پیشنیازها"},"پیش‌نیاز‌ها"),Object(a.b)("p",null,"قبل از شروع کار موارد زیر را بررسی و از درستی آنها اطمینان حاصل نمایید."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"برای گذر از تحریم سرور‌های Jcenter از ابزار گذرازتحریم یا ... استفاده کنید."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MinSDKVersion")," >= 14 , ",Object(a.b)("inlineCode",{parentName:"li"},"TargetSDK")," >= 25"),Object(a.b)("li",{parentName:"ul"},"اپلیکیشن باید در کنسول ثبت‌شود. ",Object(a.b)("a",r({parentName:"li"},{href:"/docs/console/console-submit"}),"Pushe console")),Object(a.b)("li",{parentName:"ul"},"توکن مانیفست از کنسول برداشته‌شود."),Object(a.b)("li",{parentName:"ul"},"دستگاه تست باید دارای گوگل‌پلی‌سرویس بوده و اینترنت آن فعال‌باشد.")),Object(a.b)("h2",{id:"اضافهکردن-پلاگین-به-پروژه"},"اضافه‌کردن پلاگین به پروژه"),Object(a.b)("p",null,"دقت کنید در صورتی که قبلا پلاگین را به صورت فایل دانلود و نصب کرده بودید قبل از نصب این نسخه حتما پلاگین قبلی را از پروژه خود پاک کنید."),Object(a.b)("p",null,"در ترمینال و در مسیر پروژه، دستور زیر را اجرا کنید تا پلاگین پوشه به اپلیکیشن شما اضافه شود."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yml"}),"cordova plugin add pushe-cordova\n")),Object(a.b)("h2",{id:"تغییرات-مربوط-به-فایل-configxml"},"تغییرات مربوط به فایل config.xml"),Object(a.b)("p",null,"وارد ",Object(a.b)("a",r({parentName:"p"},{href:"https://console.pushe.co"}),"کنسول پوشه")," شوید و در قسمت اپلیکیشن‌ها، روی آیکون دریافت مانیفست بزنید (این آیکون را با کلیک بر روی علامت سه نقطه‌ی گوشه‌ی کارت اپلیکیشن می‌توانید ببینید)."),Object(a.b)("p",null,"تگ مانیفست اپلیکیشن‌تان را کپی کرده و در فایل ",Object(a.b)("inlineCode",{parentName:"p"},"config.xml")," که در روت پروژه کوردوا قرار گرفته وارد کنید. این تگ باید به عنوان زیر مجموعه تگ ",Object(a.b)("inlineCode",{parentName:"p"},"platform")," اندروید مشابه کد زیر قرار گیرد."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<platform name="android">\n    <config-file parent="application" target="AndroidManifest.xml">\n        <meta-data android:name="co.ronash.pushe.token" android:value="PUSHE_TOKEN" />\n    </config-file>\n</platform>\n')),Object(a.b)("p",null,"به جای ",Object(a.b)("inlineCode",{parentName:"p"},"{PUSHE_TOKEN}")," باید توکن برنامه‌ی خود را قرار دهید."),Object(a.b)("p",null,"کد زیر را هم به تگ ",Object(a.b)("inlineCode",{parentName:"p"},"widget")," در فایل ",Object(a.b)("inlineCode",{parentName:"p"},"config.xml")," اضافه کنید."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'xmlns:android="http://schemas.android.com/apk/res/android"\n')),Object(a.b)("h2",{id:"اضافهکردن-کدهای-لازم-برای-راهاندازی-پوشه"},"اضافه‌کردن کدهای لازم برای راه‌اندازی پوشه"),Object(a.b)("p",null,"فایل ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," را از آدرس ",Object(a.b)("inlineCode",{parentName:"p"},"www/js/index.js")," باز کرده و در داخل متد ",Object(a.b)("inlineCode",{parentName:"p"},"‍‍receivedEvent")," کد زیر را قرار دهید:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"window.pushe.initialize();\n")),Object(a.b)("h2",{id:"تست-و-ثبت-دستگاه-در-پوشه"},"تست و ثبت دستگاه در پوشه"),Object(a.b)("p",null,"پس از اجرای برنامه و فراخوانی کد رجیستر پوشه، باید در ",Object(a.b)("strong",{parentName:"p"},"Android logcat")," لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"در اندروید استودیو لاگ‌کت یکی از ابزارهای موجود است. در صورتی که از محیط دیگری مانند VSCode استفاده‌ می‌کنید می‌توانید از هر روشی برای مشاهده‌ی لاگ استفاده کنید. ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.android.com/studio/command-line/logcat"}),"مستندات اندروید برای لاگ‌کت"))),Object(a.b)("p",null,"برای مشاهده‌ی بهتر لاگ‌ها می‌توانید فیلتر ",Object(a.b)("inlineCode",{parentName:"p"},"Pushe")," را روی لاگ‌ها اعمال کنید."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Android logcat:\n\n--------+ Started Initialization of Pushe +--------\nTrying to register to Pushe\nSuccessfully registered to pushe\n")),Object(a.b)("h2",{id:"ادامهی-کار"},"ادامه‌ی کار"),Object(a.b)("p",null,"(بر روی لینک مورد نظر کلیک کنید)"),Object(a.b)("h3",{id:"پروژهی-نمونه-در-گیتهاب"},Object(a.b)("a",r({parentName:"h3"},{href:"https://github.com/pusheco/cordova-sample"}),"پروژه‌ی نمونه در گیت‌هاب")),Object(a.b)("p",null,"بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه"),Object(a.b)("h3",{id:"سوالات-و-مشکلات-احتمالی"},Object(a.b)("a",r({parentName:"h3"},{href:"/docs/cordova/cordova-errors"}),"سوالات و مشکلات احتمالی")),Object(a.b)("p",null,"در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید"),Object(a.b)("h3",{id:"مشاهدهی-امکانات-بیشتر"},Object(a.b)("a",r({parentName:"h3"},{href:"/docs/cordova/cordova-advanced"}),"مشاهده‌ی امکانات بیشتر")),Object(a.b)("p",null,"مشاهده‌ی امکانات پیشرفته ارائه‌ شده در کتابخانه‌‌ی پوشه"))}p.isMDXComponent=!0},297:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a),c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)};var i="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,u=p[o+"."+d]||p[d]||b[d]||c;return t?r.a.createElement(u,Object.assign({},{ref:n},i,{components:t})):r.a.createElement(u,Object.assign({},{ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=p;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o[i]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<c;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);