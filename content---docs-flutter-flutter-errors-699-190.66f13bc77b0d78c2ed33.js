(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{134:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),l=a.a.createContext({}),i=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=i(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=r,s=p[o+"."+u]||p[u]||b[u]||l;return t?a.a.createElement(s,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(s,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));t(0);var r=t(134);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={id:"flutter-errors",title:"خطاهای ممکن"},o=[{value:"خطاهای حین نصب‌ و راه‌اندازی",id:"خطاهای-حین-نصب-و-راهاندازی",children:[{value:"Failed to resolve co.ronash.android:pushe-base",id:"failed-to-resolve-coronashandroidpushe-base",children:[]},{value:"Failed to resolve Core",id:"failed-to-resolve-core",children:[]},{value:"Version conflict (خطای نسخه‌های مختلف یک لایبرری)",id:"version-conflict-خطای-نسخههای-مختلف-یک-لایبرری",children:[]}]}],c={rightToc:o},b="wrapper";function p(e){var n=e.components,t=l(e,["components"]);return Object(r.b)(b,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"در این بخش خطاهایی که ممکن‌است در مراحل مختلف راه‌اندازی پوشه در ",Object(r.b)("strong",{parentName:"p"},"فلاتر")," با آن‌ها مواجه شوید به همراه راه‌حل ذکر شده‌اند."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"در صورتی که مورد شما خطا (Error) نیست، ممکن است در بخش ",Object(r.b)("a",a({parentName:"p"},{href:"/flutter/flutter-faq"}),"سوالات")," ذکر شده باشد.")),Object(r.b)("hr",null),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"خطای مورد نظر شما در لیست نیست؟")," در ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/pusheco/pushe-flutter/issues?utf8=%E2%9C%93&q=is%3Aissue"}),"گیت‌هاب")," به دنبال آن بروید و در صورت نیافتن در آنجا مورد جدیدی مطرح کنید.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"خطاهای-حین-نصب-و-راهاندازی"},"خطاهای حین نصب‌ و راه‌اندازی"),Object(r.b)("h3",{id:"failed-to-resolve-coronashandroidpushe-base"},"Failed to resolve ",Object(r.b)("inlineCode",{parentName:"h3"},"co.ronash.android:pushe-base")),Object(r.b)("p",null,"پوشه از طریق ",Object(r.b)("inlineCode",{parentName:"p"},"Jcenter")," به پروژه‌ی اندروید اضافه‌می‌شود (همینطور لایبرری‌هایی دیگری که پوشه از آنها استفاده‌می‌کند). با توجه به اینکه این سرویس در کشور ما مورد تحریم است، بایستی با استفاده از ابزار گذراز تحریم این مورد را رفع‌کنید. به طور کلی دلایل می‌تواند این موارد باشد:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"نبود اینترنت")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"عدم‌استفاده از ابزار گذر از تحریم"),": باید از ابزاری مثل شکن و یا ... استفاده‌کنید.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"درصورتی که از اندروید استودیو یا اینتلیجی استفاده می‌کنید، ",Object(r.b)("strong",{parentName:"p"},"استفاده از گریدل در حالت Offline mode")," را غیرفعال کنید. برای دانلود سرور باید گریدل در حالت ",Object(r.b)("inlineCode",{parentName:"p"},"offline mode")," نباشد."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"برای حل این مورد بایستی تیک گزینه را از تنظیمات بردارید:"),Object(r.b)("img",{src:"/img/studio/gradle_offline.png",width:"600"}))))),Object(r.b)("h3",{id:"failed-to-resolve-core"},"Failed to resolve ",Object(r.b)("inlineCode",{parentName:"h3"},"Core")),Object(r.b)("p",null,"در صورتی که تمام موارد مورد قبل درست هستند اما باز هم مشکلی وجود دارد، ممکن است کش گریدل به موردی برخورده باشد و مشکلی داشته‌باشد. برای حل این مورد کش گریدل را می‌توانید دوباره بارگیری کنید:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Android studio را ببندید"),Object(r.b)("li",{parentName:"ul"},"از آدرس زیر فولدر ",Object(r.b)("inlineCode",{parentName:"li"},"caches")," را حذف کنید:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ویندوز"),": ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Users\\YOUR_USER\\.gradle\\caches")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"لینوکس"),": ",Object(r.b)("inlineCode",{parentName:"li"},"/home/user/you/.gradle/caches")))),Object(r.b)("li",{parentName:"ul"},"برنامه را اجرا کرده و مجددا پروژه را ",Object(r.b)("inlineCode",{parentName:"li"},"Sync")," کنید.")),Object(r.b)("h3",{id:"version-conflict-خطای-نسخههای-مختلف-یک-لایبرری"},"Version conflict (خطای نسخه‌های مختلف یک لایبرری)"),Object(r.b)("p",null,"در صورتی که یکی از کتابخانه‌هایی که شما یا یکی دیگر از کتابخانه‌ها اضافه‌کرده، با کتابخانه‌های مورد نیاز پوشه یکی باشد و نسخه‌های متفاوتی داشته‌باشند، ممکن است گریدل نتواند این مورد را مدیریت کنید و پروسه به خطا منجر شود."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"کتابخانه‌ای که این مورد را دارد (یکسان با نسخه‌های متفاوت اضافه‌شده است)، را خودتان دستی به ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," اضافه‌کنید و نسخه‌ی مورد نظر خود را (معمولا نسخه‌ی نهایی) قرار دهید.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"با استفاده از کد زیر گریدل را مجبور به استفاده از یک نسخه‌ی خاصی از آن کتابخانه کنید (کد را بالای بلوک ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," در فایل ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," ماژول اپ قرار دهید.)"))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'// File: build.gradle (app:module)\n\nconfigurations.all {\n    resolutionStrategy {\n        eachDependency { DependencyResolveDetails details ->\n            def libraryGroup = "{artifact}"\n            def forceVersion = "{version}"\n            if (details.requested.group == libraryGroup) {\n                details.useVersion forceVersion\n            }\n        }\n    }\n}\n\n// dependencies {\n// ...\n\n')),Object(r.b)("p",null,"بجای ",Object(r.b)("inlineCode",{parentName:"p"},"{artifact}")," ",Object(r.b)("strong",{parentName:"p"},"پکیج‌ کتابخانه")," و بجای ",Object(r.b)("inlineCode",{parentName:"p"},"{version}‍")," ",Object(r.b)("strong",{parentName:"p"},"نسخه‌ای که مد نظر است")," را قرار دهید."))}p.isMDXComponent=!0}}]);