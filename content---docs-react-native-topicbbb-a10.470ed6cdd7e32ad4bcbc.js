(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(0);var r=n(297);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={id:"topic",title:"پوشه | راهنما ری‌اکت‌نیتیو | تاپیک",sidebar_label:"تاپیک",hide_title:!0},i=[{value:"عضویت کاربر در تاپیک",id:"عضویت-کاربر-در-تاپیک",children:[]},{value:"لغو عضویت کاربر از تاپیک",id:"لغو-عضویت-کاربر-از-تاپیک",children:[]}],p={rightToc:i},u="wrapper";function b(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(u,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"تاپیک"},"تاپیک"),Object(r.b)("p",null,"تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد.",Object(r.b)("br",{parentName:"p"}),"\n","شما می‌توانید کاربران خود را در تاپیک یا تاپیک‌های متفاوت ثبت‌نام کنید و برحسب علاقه‌مندی کاربران یا دسته‌بندی خودتان به تاپیک مرتبط پوش بفرستید.",Object(r.b)("br",{parentName:"p"}),"\n","مثلا اگر شما اپلیکیشن خبری دارید و کاربرانی به اخبار ورزشی علاقمند هستند و عده‌ای به اخبار فرهنگی، می‌توانید دسته اول را در تاپیک ورزشی و دسته دوم را در تاپیک فرهنگی ثبت‌نام کنید و هنگام ارسال پوش، برحسب محتوای پوش‌تان به تاپیک مرتبط آن را ارسال کنید تا فقط کاربران علاقمند به آن موضوع آن را دریافت کنند."),Object(r.b)("p",null,"برای استفاده از این امکان باید کاربران خود را در تاپیک مورد نظر عضو کنید."),Object(r.b)("h2",{id:"عضویت-کاربر-در-تاپیک"},"عضویت کاربر در تاپیک"),Object(r.b)("h4",{id:"متد-pushesubscribetopicname"},"متد ",Object(r.b)("inlineCode",{parentName:"h4"},"Pushe.subscribe(topicName)")),Object(r.b)("p",null,"کاربر را به تاپیک‌ مشخص اضافه می‌کند."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),'const topicName = "sport";\n\nPushe.subscribeToTopic(topicName);\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"این متد یک Promise برمی‌گرداند که مقدار resolve شده آن true می‌باشد.")),Object(r.b)("h2",{id:"لغو-عضویت-کاربر-از-تاپیک"},"لغو عضویت کاربر از تاپیک"),Object(r.b)("h4",{id:"متد-pusheunsubscribefromtopictopicname"},"متد ",Object(r.b)("inlineCode",{parentName:"h4"},"Pushe.unsubscribeFromTopic(topicName)")),Object(r.b)("p",null,"کاربر را از تاپیک در صورت وجود حذف می‌کند (در صورتی که قبلا عضو نشده‌باشد اتفاقی نمی‌افتد)"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),'const topicName = "sport";\n\nPushe.unsubscribeFromTopic(topicName);\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"این متد یک Promise برمی‌گرداند که مقدار resolve شده آن true می‌باشد.")))}b.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n(0),o=n.n(r),a=o.a.createContext({}),c=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=c(n),l=r,s=b[i+"."+l]||b[l]||u[l]||a;return n?o.a.createElement(s,Object.assign({},{ref:t},p,{components:n})):o.a.createElement(s,Object.assign({},{ref:t},p))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);