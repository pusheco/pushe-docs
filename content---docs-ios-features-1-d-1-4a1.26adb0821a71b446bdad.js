(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));n(0);var r=n(297);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={id:"features",title:"معرفی امکانات"},i=[{value:"گروه‌بندی کاربران یک برنامه برای ارسال اعلان",id:"گروهبندی-کاربران-یک-برنامه-برای-ارسال-اعلان",children:[{value:"برچسب (Tag)",id:"برچسب-tag",children:[]},{value:"Topic (تاپیک)",id:"topic-تاپیک",children:[]}]},{value:"امکانات نوتیفیکیشن",id:"امکانات-نوتیفیکیشن",children:[{value:"Notification callbacks (اطلاع از رویدادهای اعلان‌)",id:"notification-callbacks-اطلاع-از-رویدادهای-اعلان",children:[]}]}],l={rightToc:i},p="wrapper";function u(e){var t=e.components,n=c(e,["components"]);return Object(r.b)(p,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"تمام توابع قابل استفاده در کتابخانه‌ی پوشه برای ",Object(r.b)("strong",{parentName:"p"},"native iOS")," در این بخش آورده‌ شده است. برای کسب اطلاعات بیشتر مستندات مرتبط به هر قابلیت را مطالعه نمایید."),Object(r.b)("h2",{id:"گروهبندی-کاربران-یک-برنامه-برای-ارسال-اعلان"},"گروه‌بندی کاربران یک برنامه برای ارسال اعلان"),Object(r.b)("p",null,"با استفاده از ",Object(r.b)("strong",{parentName:"p"},"تاپیک")," و ",Object(r.b)("strong",{parentName:"p"},"برچسب")," می‌توانید کاربران خود را دسته‌بندی کنید."),Object(r.b)("h3",{id:"برچسب-tag"},"برچسب (Tag)"),Object(r.b)("p",null,"Tag یک جیسون است که به هر نصب برنامه می‌تواند نسبت داده شود. برای مثال:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-json"}),'{\n    "name":"User1",\n    "level":"admin"\n}\n')),Object(r.b)("p",null,"و می‌توان از کلید‌های این جیسون‌ها برای فیلترکردن ارسال اعلان استفاده کرد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"/docs/ios/features/tag"}),"راهنمای Tag")),Object(r.b)("h3",{id:"topic-تاپیک"},"Topic (تاپیک)"),Object(r.b)("p",null,"تاپیک به تعریف ساده یک گروه است که می‌توان یک کاربر را به عضویت آن درآورد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"/docs/ios/features/topic"}),"راهنمای تاپیک")),Object(r.b)("h2",{id:"امکانات-نوتیفیکیشن"},"امکانات نوتیفیکیشن"),Object(r.b)("h3",{id:"notification-callbacks-اطلاع-از-رویدادهای-اعلان"},"Notification callbacks (اطلاع از رویدادهای اعلان‌)"),Object(r.b)("p",null,"در صورتی که اعلانی دریافت‌ شود، کلیک‌ شود، رد شود و یا اطلاعات Json دریافت‌ شود می‌توان با استفاده از کالبک‌های  نوتیفیکیشن از این رویدادها مطلع شد و در صورت لزوم کار خاصی را هنگام رخ دادن آنها انجام داد."),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"/docs/android-studio/studio-listener"}),"راهنمای رویدادهای نوتیفیکیشن")))}u.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),b=r,s=u[i+"."+b]||u[b]||p[b]||c;return n?a.a.createElement(s,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);