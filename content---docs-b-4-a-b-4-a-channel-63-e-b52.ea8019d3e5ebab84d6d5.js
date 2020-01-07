(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var i="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p[l+"."+d]||p[d]||o[d]||b;return n?r.a.createElement(m,Object.assign({},{ref:t},i,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[i]="string"==typeof e?e:a,c[1]=l;for(var d=2;d<b;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var a=n(297);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={id:"b4a-channel",title:"کانال نوتیفیکیشن"},l=[{value:"اضافه‌کردن کانال نوتیفیکیشن",id:"اضافهکردن-کانال-نوتیفیکیشن",children:[]},{value:"حذف کانال نوتیفیکیشن",id:"حذف-کانال-نوتیفیکیشن",children:[]}],i={rightToc:l},o="wrapper";function p(e){var t=e.components,n=b(e,["components"]);return Object(a.b)(o,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"برای دستگاه‌های ",Object(a.b)("strong",{parentName:"p"},"اندروید ۸ به بالا")," می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال کاستوم‌ فرستاد."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)")),Object(a.b)("h2",{id:"اضافهکردن-کانال-نوتیفیکیشن"},"اضافه‌کردن کانال نوتیفیکیشن"),Object(a.b)("div",{dir:"ltr"},Object(a.b)("h4",{id:"sub-createnotificationchannelparameters"},Object(a.b)("inlineCode",{parentName:"h4"},"Sub createNotificationChannel(parameters...)"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"استفاده"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"channelId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"شناسه‌ای که بتوان کانال را شناسایی کرد. مثلا ",Object(a.b)("inlineCode",{parentName:"td"},"sportChannel"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"channelName"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"نامی که برای کانال خود انتخاب می‌کنید")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"description"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"توضیحات دلخواه در مورد کانال")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"importance"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"عددی برای مشخص‌کردن میزان اهمیت (",Object(a.b)("a",r({parentName:"td"},{href:"https://developer.android.com/training/notify-user/channels#importance"}),"اطلاعات بیشتر"),")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"enableLight"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"فعال‌کردن LED")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"enableVibration"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"فعال‌کردن ویبره‌ی نوتیفیکیشن")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"showBadge"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"فعال‌کردن نمایش بچ در لانچر دستگاه")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"ledColor"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"رنگ LED (",Object(a.b)("a",r({parentName:"td"},{href:"https://developer.android.com/reference/android/app/NotificationChannel.html#setLightColor(int)"}),"اطلاعات بیشتر"),")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"vibrationPattern"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"پترن ویبره (",Object(a.b)("a",r({parentName:"td"},{href:"https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long%5B%5D)"}),"اطلاعات بیشتر"),")")))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"Dim p As Pushe\np.createNotificationChannel(\n    \"MY_CHANNEL_ID\", 'channelId \n    \"all news channel\", 'Channel Name \n    \"\", 'description about channel \n    4, 'importance: Number between 0 to 5 (5 is the most important) \n    True, 'enableLight \n    True, 'enableViberation \n    True, 'showBadge \n    -16776961, 'led color \n    Null 'Vibrate mode (can be null) \n)\n")),Object(a.b)("h2",{id:"حذف-کانال-نوتیفیکیشن"},"حذف کانال نوتیفیکیشن"),Object(a.b)("p",null,"در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید."),Object(a.b)("div",{dir:"ltr"},Object(a.b)("h4",{id:"sub-removenotificationchannelchannelid"},Object(a.b)("inlineCode",{parentName:"h4"},"Sub removeNotificationChannel(channelId)"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"استفاده"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"channelId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"شناسه‌ی کانالی که ساخته شده است.")))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),' Dim p As Pushe\n p.removeNotificationChannel(\n     "MY_CHANNEL_ID" \'channelId \n)\n')))}p.isMDXComponent=!0}}]);