(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(0);var i=t(297);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o={id:"pushe-delegate",title:"پروتکل PusheDelegate",sidebar_label:"پروتکل PusheDelegate"},c=[{value:"functionها",id:"functionها",children:[{value:"userNotGrantedNotificationsPermission",id:"usernotgrantednotificationspermission",children:[]},{value:"didReceivedRemoteNotification",id:"didreceivedremotenotification",children:[]},{value:"didReceivedResponseForNotification",id:"didreceivedresponsefornotification",children:[]}]}],l={rightToc:c},s="wrapper";function u(e){var n=e.components,t=a(e,["components"]);return Object(i.b)(s,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"معرفی"},"معرفی"),Object(i.b)("p",null,"این پروتکل ",Object(i.b)("inlineCode",{parentName:"p"},"callback"),"هایی را که پوشه در اختیار شما قرار می‌دهد، تعریف کرده است. کلاس ",Object(i.b)("inlineCode",{parentName:"p"},"PusheClient")," دارای متغیری به صورت"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-swift"}),"public weak var delegate: PusheDelegate?\n")),Object(i.b)("p",null,"است. می‌توانید با پیاده‌سازی پروتکل ",Object(i.b)("inlineCode",{parentName:"p"},"PusheDelegate")," و assign کردن ‍‍‍",Object(i.b)("inlineCode",{parentName:"p"},"delegate")," برای ",Object(i.b)("inlineCode",{parentName:"p"},"PusheClient")," از طریق "),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-swift"}),"PusheClient.shared.delegate = yourPusheDelegateImplementation\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"callback"),"های خود را به پوشه معرفی کنید."),Object(i.b)("h2",{id:"functionها"},"functionها"),Object(i.b)("h3",{id:"usernotgrantednotificationspermission"},"userNotGrantedNotificationsPermission"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-swift"}),"func userNotGrantedNotificationsPermission()\n")),Object(i.b)("p",null,"این callback زمانی اجرا خواهد که کاربر اجازه دریافت پوش نوتیفیکیشن را به برنامه شما ندهد."),Object(i.b)("h3",{id:"didreceivedremotenotification"},"didReceivedRemoteNotification"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-swift"}),"func didReceivedRemoteNotification(notification: PusheNotification)\n")),Object(i.b)("p",null,"این callback زمانی اجرا خواهد شد که برنامه شما یک پوش نوتیفیکیشن را دریافت کند، البته در صورتی که کاربر برنامه شما را force close نکرده باشد."),Object(i.b)("h3",{id:"didreceivedresponsefornotification"},"didReceivedResponseForNotification"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-swift"}),"func didReceivedResponseForNotification(notification: PusheNotification)\n")),Object(i.b)("p",null,"این callback زمانی اجرا خواهد که کاربر بر روی پوش نوتیفیکیشن دریافت‌شده کلیک کند."))}u.isMDXComponent=!0},297:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var i=t(0),r=t.n(i),a=r.a.createContext({}),o=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=o(e.components);return r.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===n.indexOf(i)&&(t[i]=e[i]);return t}(e,["components","mdxType","originalType","parentName"]),u=o(t),p=i,d=u[c+"."+p]||u[p]||s[p]||a;return t?r.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);