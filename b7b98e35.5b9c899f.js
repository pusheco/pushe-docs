(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(1),r=n(6),a=(n(0),n(227)),o={id:"Pushe-Delegate",title:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheDelegate",sidebar_label:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheDelegate"},c=[{value:"function\u0647\u0627",id:"function\u0647\u0627",children:[{value:"userNotGrantedNotificationsPermission",id:"usernotgrantednotificationspermission",children:[]},{value:"didReceivedRemoteNotification",id:"didreceivedremotenotification",children:[]},{value:"didReceivedResponseForNotification",id:"didreceivedresponsefornotification",children:[]}]}],l={id:"iOS/Pushe-Delegate",title:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheDelegate",description:"# \u0645\u0639\u0631\u0641\u06cc",source:"@site/docs/iOS/PusheDelegate.md",permalink:"/docs/iOS/Pushe-Delegate",sidebar_label:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheDelegate",sidebar:"iOS",previous:{title:"\u06a9\u0644\u0627\u0633 PusheClient",permalink:"/docs/iOS/Pushe-Client"}},u={rightToc:c,metadata:l},s="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(s,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u0645\u0639\u0631\u0641\u06cc"},"\u0645\u0639\u0631\u0641\u06cc"),Object(a.b)("p",null,"\u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 ",Object(a.b)("inlineCode",{parentName:"p"},"callback"),"\u0647\u0627\u06cc\u06cc \u0631\u0627 \u06a9\u0647 \u067e\u0648\u0634\u0647 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0634\u0645\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a. \u06a9\u0644\u0627\u0633 ",Object(a.b)("inlineCode",{parentName:"p"},"PusheClient")," \u062f\u0627\u0631\u0627\u06cc \u0645\u062a\u063a\u06cc\u0631\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"public weak var delegate: PusheDelegate?\n")),Object(a.b)("p",null,"\u0627\u0633\u062a. \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u067e\u0631\u0648\u062a\u06a9\u0644 ",Object(a.b)("inlineCode",{parentName:"p"},"PusheDelegate")," \u0648 assign \u06a9\u0631\u062f\u0646 \u200d\u200d\u200d",Object(a.b)("inlineCode",{parentName:"p"},"delegate")," \u0628\u0631\u0627\u06cc ",Object(a.b)("inlineCode",{parentName:"p"},"PusheClient")," \u0627\u0632 \u0637\u0631\u06cc\u0642 "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"PusheClient.shared.delegate = yourPusheDelegateImplementation\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"callback"),"\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u067e\u0648\u0634\u0647 \u0645\u0639\u0631\u0641\u06cc \u06a9\u0646\u06cc\u062f."),Object(a.b)("h2",{id:"function\u0647\u0627"},"function\u0647\u0627"),Object(a.b)("h3",{id:"usernotgrantednotificationspermission"},"userNotGrantedNotificationsPermission"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"func userNotGrantedNotificationsPermission()\n")),Object(a.b)("p",null,"\u0627\u06cc\u0646 callback \u0632\u0645\u0627\u0646\u06cc \u0627\u062c\u0631\u0627 \u062e\u0648\u0627\u0647\u062f \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0627\u062c\u0627\u0632\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0627 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0646\u062f\u0647\u062f."),Object(a.b)("h3",{id:"didreceivedremotenotification"},"didReceivedRemoteNotification"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"func didReceivedRemoteNotification(notification: PusheNotification)\n")),Object(a.b)("p",null,"\u0627\u06cc\u0646 callback \u0632\u0645\u0627\u0646\u06cc \u0627\u062c\u0631\u0627 \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u06a9\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u06cc\u06a9 \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u062f\u060c \u0627\u0644\u0628\u062a\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0631\u0627 force close \u0646\u06a9\u0631\u062f\u0647 \u0628\u0627\u0634\u062f."),Object(a.b)("h3",{id:"didreceivedresponsefornotification"},"didReceivedResponseForNotification"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"func didReceivedResponseForNotification(notification: PusheNotification)\n")),Object(a.b)("p",null,"\u0627\u06cc\u0646 callback \u0632\u0645\u0627\u0646\u06cc \u0627\u062c\u0631\u0627 \u062e\u0648\u0627\u0647\u062f \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0631 \u0631\u0648\u06cc \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a\u200c\u0634\u062f\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u062f."))}p.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=i,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,c({ref:t},u,{components:n})):r.a.createElement(f,c({ref:t},u))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);