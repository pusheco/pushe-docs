(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return o}));t(0);var a=t(156);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={id:"b4a-intro",title:"بیسیک4اندروید",sidebar_label:"راه‌اندازی سریع"},i=[{value:"پیش‌نیاز‌ها",id:"پیشنیازها",children:[]},{value:"اضافه‌کردن پلاگین به پروژه",id:"اضافهکردن-پلاگین-به-پروژه",children:[]},{value:"نصب کتابخانه‌های مورد نیاز پلاگین",id:"نصب-کتابخانههای-مورد-نیاز-پلاگین",children:[{value:"استفاده از SDK manager",id:"استفاده-از-sdk-manager",children:[]},{value:"نصب بصورت دستی",id:"نصب-بصورت-دستی",children:[]}]},{value:"اضافه‌کردن شناسه‌ی کنسول در مانیفست برنامه",id:"اضافهکردن-شناسهی-کنسول-در-مانیفست-برنامه",children:[]},{value:"اضافه‌کردن کدهای لازم برای رجیستر",id:"اضافهکردن-کدهای-لازم-برای-رجیستر",children:[]},{value:"تست و ثبت دستگاه در پوشه",id:"تست-و-ثبت-دستگاه-در-پوشه",children:[{value:"مشاهده‌ی جزئیات رجیستر در لاگ‌کت",id:"مشاهدهی-جزئیات-رجیستر-در-لاگکت",children:[]}]}],c={rightToc:i},p="wrapper";function o(e){var n=e.components,t=b(e,["components"]);return Object(a.b)(p,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"پیشنیازها"},"پیش‌نیاز‌ها"),Object(a.b)("p",null,"قبل از شروع کار موارد زیر را بررسی و از درستی آنها اطمینان حاصل نمایید."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"برای گذر از تحریم سرور‌های Jcenter از ابزار گذرازتحریم یا ... استفاده کنید."),Object(a.b)("li",{parentName:"ul"},"حداقل نسخه‌ی بیسیک‌4اندروید ",Object(a.b)("strong",{parentName:"li"},"7.8")," باشد."),Object(a.b)("li",{parentName:"ul"},"از ",Object(a.b)("strong",{parentName:"li"},"android.jar")," نسخه‌ی 26 و یا بالاتر استفاده شود."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MinSDKVersion")," >= 14 ,",Object(a.b)("inlineCode",{parentName:"li"},"TargetSDK")," >= 25 (در ManifestEditor قابل مشاهده‌هستند)"),Object(a.b)("li",{parentName:"ul"},"اپلیکیشن باید در کنسول ثبت‌شود. ",Object(a.b)("a",r({parentName:"li"},{href:"https://console.pushe.co"}),"Pushe console")),Object(a.b)("li",{parentName:"ul"},"توکن مانیفست از کنسول برداشته‌شود."),Object(a.b)("li",{parentName:"ul"},"دستگاه تست باید دارای گوگل‌پلی‌سرویس بوده و اینترنت آن فعال‌باشد.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"اضافهکردن-پلاگین-به-پروژه"},"اضافه‌کردن پلاگین به پروژه"),Object(a.b)("br",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"پلاگین پوشه از ",Object(a.b)("a",r({parentName:"li"},{href:"http://static.pushe.co/d/b4a/PusheB4A-v1.7.zip"}),"این لینک")," دانلود و سپس extract کنید (از زیپ‌ خارج کنید)."),Object(a.b)("li",{parentName:"ul"},"محتوای داخل فولدر extractشده را در فولدر ",Object(a.b)("strong",{parentName:"li"},"Libraries")," برنامه اضافه‌کنید. در صورتی که فایل‌های تکراری وجود دارد گزینه‌ی ",Object(a.b)("inlineCode",{parentName:"li"},"Replace")," را انتخاب کنید.")),Object(a.b)("hr",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"فولدر ",Object(a.b)("strong",{parentName:"p"},"Libraries")," کجاست؟")),Object(a.b)("p",null,"  آن‌را در محل نصب b4a می‌توانید پیدا کنید. همچنین با راست‌کلیک کردن بر روی پنجره‌ی ",Object(a.b)("inlineCode",{parentName:"p"},"Libraries manager")," (در سمت راست برنامه) و انتخاب گزینه‌ی ",Object(a.b)("inlineCode",{parentName:"p"},"Open internal libraries folder")," آن‌ فولدر را باز نمایید."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"نصب-کتابخانههای-مورد-نیاز-پلاگین"},"نصب کتابخانه‌های مورد نیاز پلاگین"),Object(a.b)("p",null,"برای نصب کتابخانه‌های مورد نیاز پلاگین پوشه می‌توانید یکی از دو روش زیر را انتخاب نمایید."),Object(a.b)("h3",{id:"استفاده-از-sdk-manager"},"استفاده از SDK manager"),Object(a.b)("p",null,"از منوی Tools، ‌گزینه‌ی SDK manager\nرا انتخاب کنید. کتابخانه‌های موجود و قابل نصب در این پنجره لیست می‌شوند، شما می‌توانید کتابخانه‌ی مورد نظر را انتخاب کرده و دکمه\n",Object(a.b)("inlineCode",{parentName:"p"},"Install Selected"),"\nرا انتخاب کنید تا نصب شوند.\nتوصیه می‌کنیم همه‌ی کتابخانه‌های پیشنهاد شده در این پنجره را انتخاب و نصب کنید ولی اگر مایل به این کار نیستید می‌توانید فقط کتابخانه‌ی نام برده شده در خطا را انتخاب کنید. بعد از اتمام عملیات نصب، دوباره اقدام به بیلد برنامه بکنید و اگر کتابخانه‌ها درست نصب شده باشند با خطای قبلی مواجه نخواهید شد."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"نکته"),": دانلود از SDK manager نیازمند استفاده از ابزار گذر از تحریم است. در غیر اینصورت خطا رخ‌ خواهد داد.")),Object(a.b)("h3",{id:"نصب-بصورت-دستی"},"نصب بصورت دستی"),Object(a.b)("p",null,"توصیه می‌کنیم از روش اول استفاده کنید ولی اگر این کار برای شما امکان پذیر نیست، شما می‌توانید کتابخانه‌ها را به صورت دستی نیز نصب کنید. برای این کار ابتدا با توجه به نسخه‌ی پلتفورم اندروید خود یکی از فایل‌های زیر را دانلود کنید.\n(در صورتی که نمی‌دانید از چه نسخه‌ای استفاده می‌کنید، از طریق منو نرم‌افزار پنجره‌ی\n",Object(a.b)("inlineCode",{parentName:"p"},"Tools -> Configure Paths"),"\nرا باز کرده و عبارت جلوی\n",Object(a.b)("inlineCode",{parentName:"p"},"android.jar"),"\nرا نگاه کنید)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"اگر نسخه‌ی پلتفرم اندروید ",Object(a.b)("strong",{parentName:"li"},"۲۸")," استفاده می‌کنید، ",Object(a.b)("a",r({parentName:"li"},{href:"https://static.pushe.co/d/b4a/b4a_remote-28.zip"}),"این فایل")," را دانلود کنید"),Object(a.b)("li",{parentName:"ul"},"اگر نسخه‌ی پلتفرم اندروید ",Object(a.b)("strong",{parentName:"li"},"۲۷")," استفاده می‌کنید، ",Object(a.b)("a",r({parentName:"li"},{href:"https://static.pushe.co/d/b4a/b4a_remote-27.zip"}),"این فایل")," را دانلود کنید"),Object(a.b)("li",{parentName:"ul"},"اگر نسخه‌ی پلتفرم اندروید ",Object(a.b)("strong",{parentName:"li"},"۲۶")," استفاده می‌کنید، ",Object(a.b)("a",r({parentName:"li"},{href:"https://static.pushe.co/d/b4a/b4a_remote-26.zip"}),"این فایل")," را دانلود کنید")),Object(a.b)("p",null," بعد از اتمام دانلود فایل زیپ را باز کرده و داخل آن فولدری به نام\n",Object(a.b)("inlineCode",{parentName:"p"},"b4a_remote"),"\nپیدا خواهید کرد. این فولدر را در مسیر\n",Object(a.b)("inlineCode",{parentName:"p"},"<Android SDK>\\extras"),"\nکپی کنید. توجه داشته باشید که در این مسیر عبارت\n",Object(a.b)("inlineCode",{parentName:"p"},"<Android SDK>"),"\nرا با محل نصب\nSDK\nاندروید بر روی سیستم خود جایگزین کنید. برای مثال اگر\nSDK\nاندروید شما در\n",Object(a.b)("inlineCode",{parentName:"p"},"C:\\Android SDK"),"\nنصب شده باشد، بعد از کپی کردن، فولدر\n",Object(a.b)("inlineCode",{parentName:"p"},"C:\\Android SDK\\extras\\b4a_remote"),"\nباید وجود داشته باشد."),Object(a.b)("h2",{id:"اضافهکردن-شناسهی-کنسول-در-مانیفست-برنامه"},"اضافه‌کردن شناسه‌ی کنسول در مانیفست برنامه"),Object(a.b)("p",null,"وارد پنل پوشه شوید و در منو سمت راست گزینه\n",Object(a.b)("inlineCode",{parentName:"p"},"اپلیکیشن‌ها"),"\nرا انتخاب کنید.\nاپلیکیشن مورد نظر را در لیست اپلیکیشن‌ها پیدا کنید و در قسمت امکانات آن، گزینه‌ی\n",Object(a.b)("inlineCode",{parentName:"p"},"نمایش مانیفست"),"\nرا کلیک کنید."),Object(a.b)("img",{src:"/img/b4a/app_manifest_select.png",height:"120"}),Object(a.b)("br",null),Object(a.b)("p",null,"در پنجره‌ی باز شده نسخه‌ی ",Object(a.b)("inlineCode",{parentName:"p"},"1.7")," را انتخاب کنید و متن نمایش داده شده را کپی کنید."),Object(a.b)("p",null,"در نرم‌افزار ",Object(a.b)("strong",{parentName:"p"},"B4A"),"، تنظمیات مانیفست پروژه را از طریق منو ",Object(a.b)("inlineCode",{parentName:"p"},"Project > Manifest Editor"),"  باز کنید و متن کپی شده را در آن قرار دهید."),Object(a.b)("p",null,"برخی از دسترسی ها (",Object(a.b)("em",{parentName:"p"},"permissions"),") برای پوشه اختیاری است. این دسترسی ها برای ارسال هدفمند اعلان به کاربران است. شما قادر خواهید بود با استفاده از این دسترسی ها کاربران خود را دسته بندی کنید و اعلانهای خود را هدفمند ارسال کنید."),Object(a.b)("p",null,"محتوای همانند کد زیر به انتهای فایل مانیفست باید اضافه‌شود:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),'\' Maniefest content \n\nCreateResourceFromFile(Macro, Pushe.Standalone)\n\nAddApplicationText(<meta-data android:name="co.ronash.pushe.token" android:value="PUSHE_TOKEN"/>)\nAddPermission(android.permission.ACCESS_COARSE_LOCATION)\n')),Object(a.b)("h2",{id:"اضافهکردن-کدهای-لازم-برای-رجیستر"},"اضافه‌کردن کدهای لازم برای رجیستر"),Object(a.b)("p",null,"در کلاس Main در قسمت ",Object(a.b)("inlineCode",{parentName:"p"},"Sub Globals")," کد زیر را قرار دهید:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-vb"}),"Dim pushe As Pushe\n")),Object(a.b)("p",null,"در کلاس ",Object(a.b)("inlineCode",{parentName:"p"},"Main")," در قسمت ",Object(a.b)("inlineCode",{parentName:"p"},"Activity Create")," کد زیر را وارد کنید:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"pushe.initialize()\n")),Object(a.b)("h2",{id:"تست-و-ثبت-دستگاه-در-پوشه"},"تست و ثبت دستگاه در پوشه"),Object(a.b)("p",null,"پس از اجرای برنامه در دستگاه (دارای گوگل‌پلی‌سرویس و متصل به اینترنت) پس از مدت کوتاهی انتظار بایستی نصب شما در پوشه ثبت ‌شود.\nبرای اطلاع از جزئیات و مشاهده‌ی خطاهای احتمالی می‌توانید از ",Object(a.b)("strong",{parentName:"p"},"لاگ‌کت")," (سمت راست تب Logs) استفاده کنید."),Object(a.b)("p",null,"همچنین ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.b4x.com/android/forum/attachments/b4alogviewer1-2-zip.6454/"}),"این ابزار")," هم برای مشاهده‌ی لاگ‌های برنامه می‌تواند استفاده شود."),Object(a.b)("h3",{id:"مشاهدهی-جزئیات-رجیستر-در-لاگکت"},"مشاهده‌ی جزئیات رجیستر در لاگ‌کت"),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://developer.android.com/studio/command-line/logcat"}),"مستندات اندروید برای لاگ‌کت")),Object(a.b)("p",null,"برای مشاهده‌ی بهتر لاگ‌ها می‌توانید فیلتر ",Object(a.b)("inlineCode",{parentName:"p"},"Pushe")," را روی لاگ‌ها اعمال کنید."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"# Android logcat:\n\n--------+ Started Initialization of Pushe 1.7 +--------\nTrying to register to Pushe\nSuccessfully registered to pushe\n")),Object(a.b)("p",null,"در صورتی که در یکی از این مراحل مشکلی وجود داشت، ابتدا ",Object(a.b)("a",r({parentName:"p"},{href:"b4a-errors"}),"سوالات متداول")," را بررسی کنید و در صورتی نیافتن مشکل آن را در ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/pusheco/b4a-sample/issues?utf8=%E2%9C%93&q=is%3Aissue"}),"Github issue")," مطرح کنید."),Object(a.b)("p",null,"برای مشاهده‌ی امکانات و قابلیت‌های بیشتر پوشه در B4A به مطالعه‌ی ادامه‌ی مستندات بپردازید."))}o.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},o=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),o=l(t),u=a,s=o[i+"."+u]||o[u]||p[u]||b;return t?r.a.createElement(s,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(s,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var b=t.length,l=new Array(b);l[0]=o;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<b;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);