(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,f=p[l+"."+u]||p[u]||b[u]||c;return n?a.a.createElement(f,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[o]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var r=n(156);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"b4a-advanced",title:"معرفی امکانات"},l=[{value:"ارسال اعلان به یک کاربر خاص با استفاده‌از شناسه‌ی کاربر",id:"ارسال-اعلان-به-یک-کاربر-خاص-با-استفادهاز-شناسهی-کاربر",children:[{value:"شناسایی کاربر",id:"شناسایی-کاربر",children:[]},{value:"ارسال نوتیفیکیشن از یک دستگاه به دستگاه دیگر",id:"ارسال-نوتیفیکیشن-از-یک-دستگاه-به-دستگاه-دیگر",children:[]}]},{value:"گروه‌بندی کاربران یک برنامه برای ارسال اعلان",id:"گروهبندی-کاربران-یک-برنامه-برای-ارسال-اعلان",children:[{value:"Topic (تاپیک)",id:"topic-تاپیک",children:[]},{value:"Notification channels",id:"notification-channels",children:[]}]},{value:"Notification callbacks (اطلاع از رویدادهای مرتبط با اعلان‌)",id:"notification-callbacks-اطلاع-از-رویدادهای-مرتبط-با-اعلان",children:[]},{value:"فعال/غیرفعال‌کردن نمایش نوتیفیکیشن",id:"فعالغیرفعالکردن-نمایش-نوتیفیکیشن",children:[]},{value:"استفاده‌ی همزمان پوشه با سایر سرویس‌های دارای FCM",id:"استفادهی-همزمان-پوشه-با-سایر-سرویسهای-دارای-fcm",children:[]}],o={rightToc:l},b="wrapper";function p(e){var t=e.components,n=c(e,["components"]);return Object(r.b)(b,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"تمام توابع قابل استفاده در کتابخانه‌ی پوشه برای ",Object(r.b)("strong",{parentName:"p"},"B4A")," در این بخش آورده‌شده است. برای کسب اطلاعات بیشتر مستندات مرتبط با هر قابلیت را مطالعه نمایید."),Object(r.b)("h2",{id:"ارسال-اعلان-به-یک-کاربر-خاص-با-استفادهاز-شناسهی-کاربر"},"ارسال اعلان به یک کاربر خاص با استفاده‌از شناسه‌ی کاربر"),Object(r.b)("h3",{id:"شناسایی-کاربر"},"شناسایی کاربر"),Object(r.b)("p",null,"پوشه‌آی‌دی یک شناسه‌ی یکتاست که از شناسه‌های مختلف دستگاه بدست‌می‌آید و می‌تواند برای تشخیص دستگاه و ارسال اعلان استفاده‌شود."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"b4a-pusheid"}),"راهنمای پوشه‌آی‌دی")),Object(r.b)("h3",{id:"ارسال-نوتیفیکیشن-از-یک-دستگاه-به-دستگاه-دیگر"},"ارسال نوتیفیکیشن از یک دستگاه به دستگاه دیگر"),Object(r.b)("p",null,"با داشتن شناسه‌ی یک کاربر دیگر از برنامه می‌توانید با استفاده از کد در هر دیوایس دیگری به آن کاربر اعلان ارسال کرد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"b4a-d2d"}),"راهنمای اعلان دستگاه به دستگاه")),Object(r.b)("h2",{id:"گروهبندی-کاربران-یک-برنامه-برای-ارسال-اعلان"},"گروه‌بندی کاربران یک برنامه برای ارسال اعلان"),Object(r.b)("p",null,"با استفاده از ",Object(r.b)("strong",{parentName:"p"},"تاپیک")," و ",Object(r.b)("strong",{parentName:"p"},"کانال نوتیفیکیشن")," (فقط برای اندروید ۸ به بالا)، می‌توانید کاربران خود را دسته‌بندی کنید."),Object(r.b)("h3",{id:"topic-تاپیک"},"Topic (تاپیک)"),Object(r.b)("p",null,"تاپیک به تعریف ساده یک گروه است که می‌توان یک کاربر را به عضویت آن درآورد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"b4a-topic"}),"راهنمای تاپیک")),Object(r.b)("h3",{id:"notification-channels"},"Notification channels"),Object(r.b)("p",null,"از اندروید ۸ به بعد نوتیفیکیشن‌ها برای نمایش از کانال‌نوتیفیکیشن استفاده می‌کنند. می‌توان کاربران را به کانال خاصی اضافه‌کرد تا نوتیفیکیشن‌های کانال اضافه‌کرد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"b4a-channel"}),"راهنمای Notification channel")),Object(r.b)("h2",{id:"notification-callbacks-اطلاع-از-رویدادهای-مرتبط-با-اعلان"},"Notification callbacks (اطلاع از رویدادهای مرتبط با اعلان‌)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"‌ این امکان در حال حاضر در b4a قابل استفاده نیست.")),Object(r.b)("h2",{id:"فعالغیرفعالکردن-نمایش-نوتیفیکیشن"},"فعال/غیرفعال‌کردن نمایش نوتیفیکیشن"),Object(r.b)("p",null,"می‌توانید با استفاده از این امکان نمایش نوتیفیکیشن را برای کاربر خود غیرفعال یا فعال‌نمایید."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"b4a-disable"}),"راهنمای تنظیم حالت نمایش نوتیفیکیشن")),Object(r.b)("h2",{id:"استفادهی-همزمان-پوشه-با-سایر-سرویسهای-دارای-fcm"},"استفاده‌ی همزمان پوشه با سایر سرویس‌های دارای FCM"),Object(r.b)("p",null,"در هر برنامه فقط می‌توان از یک سرویس FCM استفاده‌کرد. در صورتی که دو سرویس اضافه‌شوند فرآیند ارسال و دریافت پیام و حتی رجیسترشدن ممکن‌است مختل‌شود."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"این امکان در حال حاضر در b4a قابل استفاده نیست.")))}p.isMDXComponent=!0}}]);