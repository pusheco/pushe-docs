(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));n(0);var r=n(297);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"reg",title:"رجیسترکردن"},l=[{value:"Registration",id:"registration",children:[]},{value:"بررسی رجیسترشدن",id:"بررسی-رجیسترشدن",children:[]},{value:"گرفتن callback هنگام رجیسترشدن",id:"گرفتن-callback-هنگام-رجیسترشدن",children:[]}],o={rightToc:l},b="wrapper";function u(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(b,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"!نکته"),": عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورتی نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)"),Object(r.b)("blockquote",null,Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"تفاوت Registration و Initialization"),":"),Object(r.b)("p",null,"هنگامی که ماژول‌های مختلف پلاس (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند ",Object(r.b)("inlineCode",{parentName:"p"},"Initialization")," انجام‌شده است."),Object(r.b)("p",null,"در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، ",Object(r.b)("inlineCode",{parentName:"p"},"Registration")," انجام‌شده است"),Object(r.b)("p",null,"لذا عملیات ",Object(r.b)("inlineCode",{parentName:"p"},"Registration")," نیاز به اینترنت دستگاه‌دارد.")),Object(r.b)("h2",{id:"registration"},"Registration"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"نسخه‌ی 0.4.3 به بعد")),Object(r.b)("p",null,"اجرای پروسه‌ی رجیستر به طور خودکار انجام می‌شود. اما برای استفاده از امکانات اضافی باید اسکریپتی بسازید و آن‌را در ",Object(r.b)("inlineCode",{parentName:"p"},"Hierarchy")," قرار دهید."),Object(r.b)("h2",{id:"بررسی-رجیسترشدن"},"بررسی رجیسترشدن"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"static-bool-isregistered"},Object(r.b)("inlineCode",{parentName:"h4"},"static bool IsRegistered()"))),Object(r.b)("p",null,"در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var isPusheRegistered = Pushe.IsRegistered();\n\n")),Object(r.b)("h2",{id:"گرفتن-callback-هنگام-رجیسترشدن"},"گرفتن callback هنگام رجیسترشدن"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"نسخه‌ی 0.4.3 به بعد")),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"static-void-onpusheregisteredregisterdelegate-registercallback"},Object(r.b)("inlineCode",{parentName:"h4"},"static void OnPusheRegistered(RegisterDelegate registerCallback)"))),Object(r.b)("p",null,"در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد تابع delegate اجرا خواهد شد خواهد بود."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'\nvoid Start()\n{\n    Pushe.OnPusheRegistered(OnPusheRegisteredSuccessfully);\n}\n\nprivate void OnPusheRegisteredSuccessfully()\n{\n    // Registration is done.\n    Debug.Log("Pushe is registered!");\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"بهتر است برای استفاده از امکانات پوشه از این تابع استفاده کنید تا مطمئن شوید تا رجیستر انجام نشده‌است،‌ امکانات فراخوانی نشوند.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RegisterDelegate")," یک تابع بدون ورودی و خروجی‌است:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"public delegate void RegisterDelegate();\n")))}u.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),s=r,p=u[l+"."+s]||u[s]||b[s]||i;return n?a.a.createElement(p,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[o]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);