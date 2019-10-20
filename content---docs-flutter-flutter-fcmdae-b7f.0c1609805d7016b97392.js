(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{110:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return p}));var t=r(0),a=r.n(t),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},s=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),u=i(r),p=t,d=u[s+"."+p]||u[p]||l[p]||o;return r?a.a.createElement(d,Object.assign({},{ref:n},c,{components:r})):a.a.createElement(d,Object.assign({},{ref:n},c))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return u}));r(0);var t=r(110);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={id:"flutter-fcm",title:"استفاده‌ی همزمان با FCM"},s=[{value:"مشکل استفاده‌ از دو سرویس فایربیس",id:"مشکل-استفاده-از-دو-سرویس-فایربیس",children:[]},{value:"رفع مشکل اختلال سرویس‌ها",id:"رفع-مشکل-اختلال-سرویسها",children:[{value:"حذف سرویس ها و ساخت سرویس جدید",id:"حذف-سرویس-ها-و-ساخت-سرویس-جدید",children:[]}]}],c={rightToc:s},l="wrapper";function u(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(l,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"مشکل-استفاده-از-دو-سرویس-فایربیس"},"مشکل استفاده‌ از دو سرویس فایربیس"),Object(t.b)("p",null,"در صورتی که قصد دارید در کنار پوشه از سرویس دیگری مانند فایربیس و یا هر سرویسی که پایه‌ی آن fcm است، استفاده‌کنید باید در نظر داشته‌باشید که ",Object(t.b)("strong",{parentName:"p"},"در هربرنامه فقط یک سرویس برپایه‌ی fcm می‌تواند باشد")," و در صورت وجود بیش از یک سرویس، ممکن است در کار آنها اختلال ایجاد کند."),Object(t.b)("h2",{id:"رفع-مشکل-اختلال-سرویسها"},"رفع مشکل اختلال سرویس‌ها"),Object(t.b)("p",null,"برای جلوگیری از ایجاد اخلال ",Object(t.b)("strong",{parentName:"p"},"باید یک سرویس طراحی کنید و پیام‌های سایر سرویس‌ها را جداسازی کنید"),". در این صورت ارجاع پیام به سرویس مربوطه بایستی دستی انجام شود تا هر سرویس بتواند جدا از سرویس دیگری کار خود را انجام دهد."),Object(t.b)("h3",{id:"حذف-سرویس-ها-و-ساخت-سرویس-جدید"},"حذف سرویس ها و ساخت سرویس جدید"),Object(t.b)("p",null,"در این بخش باید تگ‌های سرویس پوشه و لایبرری دیگر که از فایربیس استفاده می‌کند (مثل خود فایربیس در فلاتر) را از مانیفست نهایی پاک کنید و تگ سرویس خود را قرار دهید."),Object(t.b)("p",null,"فایل ",Object(t.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," خود را باز کرده و در داخل تگ ",Object(t.b)("inlineCode",{parentName:"p"},"application")," در قبل یا بعد از توکن پوشه خطوط زیر را اضافه‌کنید:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-xml"}),'<service\n   android:name="co.ronash.pushe.fcm.FcmService" \n   tools:node="remove" />\n   \n\x3c!-- Add your own service name instead of this , if you are not using firebase --\x3e\n<service\n   android:name="io.flutter.plugins.firebasemessaging.FlutterFirebaseMessagingService" \n   tools:node="remove" />\n')),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"دقت‌کنید که یکی از سرویس‌ها پوشه است و سرویس دیگری مربوط به پلاگین دیگری‌است که از فایربیس استفاده می‌کند (در اینجا پلاگین فایربیس فلاتر).")),Object(t.b)("p",null,"پس از پاک‌کردن سرویس‌های در معرض مشکل، سرویسی ایجاد کنید که از سرویس دیگر (در اینجا سرویس فایربیس فلاتر) ارث‌بری می‌کند؛ مثلا سرویس ",Object(t.b)("inlineCode",{parentName:"p"},"FlutterFirebaseMessagingService")," برای فایربیس. پس از ساختن سرویس کد سرویس را بصورت زیر تغییر دهید:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-java"}),"public class MyFCMService extends FlutterFirebaseMessagingService {\n    @Override\n    public void onNewToken(String s) {\n        co.ronash.pushe.Pushe.getFcmHandler(this).onNewToken(s);\n        super.onNewToken(s);\n    }\n    @Override\n    public void onDeletedMessages() {\n        co.ronash.pushe.Pushe.getFcmHandler(this).onDeletedMessages();\n        super.onDeletedMessages();\n    }\n    @Override\n    public void onSendError(String s, Exception e) {\n        co.ronash.pushe.Pushe.getFcmHandler(this).onSendError(s, e);\n        super.onSendError(s, e);\n    }\n    @Override\n    public void onMessageSent(String s) {\n        co.ronash.pushe.Pushe.getFcmHandler(this).onMessageSent(s);\n        super.onMessageSent(s);\n    }\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        if (!co.ronash.pushe.Pushe.getFcmHandler(this).onMessageReceived(remoteMessage)) {\n            // It is for fire base, otherwise the condition will handle the message for Pushe\n            super.onMessageReceived(remoteMessage);\n        }\n    }\n}\n")),Object(t.b)("p",null,"و در آخر سرویس خود را به مانیفست اضافه نمایید:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-xml"}),'<service android:name=".MyFcmService">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')))}u.isMDXComponent=!0}}]);