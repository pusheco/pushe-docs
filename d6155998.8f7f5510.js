(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),o=(n(0),n(248)),c={id:"listener",title:"\u0631\u0648\u06cc\u062f\u0627\u062f \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646",sidebar_label:"\u0631\u0648\u06cc\u062f\u0627\u062f \u0627\u0639\u0644\u0627\u0646"},r={id:"unity/listener",isDocsHomePage:!1,title:"\u0631\u0648\u06cc\u062f\u0627\u062f \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646",description:"\u062a\u0645\u0627\u0645 \u0646\u0633\u062e\u0647\u200c\u0647\u0627",source:"@site/docs/unity/listener.md",permalink:"/docs/unity/listener",sidebar_label:"\u0631\u0648\u06cc\u062f\u0627\u062f \u0627\u0639\u0644\u0627\u0646",sidebar:"unity",previous:{title:"\u0627\u0639\u0644\u0627\u0646 \u0627\u0632 \u06cc\u06a9 \u062f\u06cc\u0648\u0627\u06cc\u0633 \u06cc\u0647 \u062f\u06cc\u0648\u0627\u06cc\u0633 \u062f\u06cc\u06af\u0631",permalink:"/docs/unity/d2d"},next:{title:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0646\u0645\u0627\u06cc\u0634 \u0627\u0639\u0644\u0627\u0646",permalink:"/docs/unity/disable"}},b=[{value:"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 Notification listener",id:"\u0641\u0639\u0627\u0644\u06a9\u0631\u062f\u0646-notification-listener",children:[{value:"\u0633\u0627\u062e\u062a GameObject",id:"\u0633\u0627\u062e\u062a-gameobject",children:[]},{value:"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u06a9\u062f \u0628\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u062e\u0648\u062f",id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u06a9\u062f-\u0628\u0647-\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a-\u062e\u0648\u062f",children:[]}]},{value:"\u0645\u0648\u0627\u0631\u062f \u0627\u0636\u0627\u0641\u06cc",id:"\u0645\u0648\u0627\u0631\u062f-\u0627\u0636\u0627\u0641\u06cc",children:[{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 GameObject \u062f\u0644\u062e\u0648\u0627\u0647",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-gameobject-\u062f\u0644\u062e\u0648\u0627\u0647",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u062a\u0645\u0627\u0645 \u0646\u0633\u062e\u0647\u200c\u0647\u0627")),Object(o.b)("p",null,"\u0628\u0627 \u0641\u0639\u0627\u0644 \u0628\u0648\u062f\u0646 \u0627\u06cc\u0646 \u0642\u0627\u0628\u0644\u06cc\u062a \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u06cc\u0627 \u062c\u06cc\u0633\u0648\u0646\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0648\u062f\u060c \u0627\u0632 \u0622\u0646 \u0645\u0637\u0644\u0639 \u062e\u0648\u0627\u0647\u06cc\u062f \u0634\u062f."),Object(o.b)("h2",{id:"\u0641\u0639\u0627\u0644\u06a9\u0631\u062f\u0646-notification-listener"},"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 Notification listener"),Object(o.b)("p",null,"\u067e\u0648\u0634\u0647 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",Object(o.b)("inlineCode",{parentName:"p"},"UnitySendMessage")," \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627 \u0631\u0627 \u0627\u0637\u0644\u0627\u0639 \u0645\u06cc\u200c\u062f\u0647\u062f. \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u06cc\u0627\u0645\u200c\u0647\u0627 \u062f\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u06af\u0627\u0645\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645\u200c\u062f\u0647\u06cc\u062f:"),Object(o.b)("h3",{id:"\u0633\u0627\u062e\u062a-gameobject"},"\u0633\u0627\u062e\u062a GameObject"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u06cc\u06a9 GameObject \u0628\u0647 \u0646\u0627\u0645 ",Object(o.b)("strong",{parentName:"li"},"PusheCallback")," \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u0648 \u0622\u0646\u200c\u0631\u0627 \u0628\u0647 Hierarchy \u067e\u0631\u0648\u0698\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a ",Object(o.b)("inlineCode",{parentName:"li"},"PusheCallback.cs")," \u0631\u0627 \u0627\u0632 \u0641\u0648\u0644\u062f\u0631 ",Object(o.b)("inlineCode",{parentName:"li"},"Pushe")," \u0628\u0647 \u0627\u06cc\u0646 \u0622\u0628\u062c\u06a9\u062a Attach \u06a9\u062a\u06cc\u062f.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u0645\u062d\u062f\u0648\u062f\u06cc\u062a \u0645\u0648\u062c\u0648\u062f \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0627\u0644\u0628\u06a9\u200c\u0647\u0627"),":",Object(o.b)("br",null)),Object(o.b)("p",{parentName:"blockquote"},"\u0645\u0648\u062a\u0648\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0632\u0645\u0627\u0646\u06cc \u0627\u0642\u062f\u0627\u0645 \u0628\u0647 \u0627\u062c\u0631\u0627\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u06a9\u0647 \u0628\u0627\u0632\u06cc \u06cc\u0627 \u0628\u0631\u0646\u0627\u0645\u0647 \u062f\u0631 \u062d\u0627\u0644 \u0627\u062c\u0631\u0627 \u062f\u0631 Forground \u0628\u0627\u0634\u062f.",Object(o.b)("br",null),"\n\u0628\u062f\u06cc\u0646 \u0645\u0639\u0646\u06cc \u06a9\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a \u0628\u0633\u062a\u0647\u200c\u0634\u062f\u0646 \u06cc\u0627 Pause \u0634\u062f\u0646\u060c \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0627\u0645\u0644 \u0628\u0647 \u062d\u0627\u0644\u062a ",Object(o.b)("inlineCode",{parentName:"p"},"onPause")," \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f.\n\u0646\u062a\u06cc\u062c\u0647\u200c \u0627\u06cc\u0646 \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u06a9\u0647: ",Object(o.b)("strong",{parentName:"p"},"\u062f\u0631 \u0635\u0648\u0631\u062a \u0628\u0627\u0632 \u0646\u0628\u0648\u062f\u0646 \u0628\u0627\u0632\u06cc Callback\u0647\u0627 \u062f\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e \u0627\u062c\u0631\u0627 \u0646\u062e\u0648\u0627\u0647\u0646\u062f \u0634\u062f.")),Object(o.b)("p",{parentName:"blockquote"},"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u062f\u0631 \u062a\u0645\u0627\u0645 \u062d\u0627\u0644\u0627\u062a \u0627\u0632 \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627 \u0645\u0637\u0644\u0639 \u0634\u0648\u06cc\u062f \u0628\u0627\u06cc\u062f \u06a9\u062f \u0646\u06cc\u062a\u06cc\u0648 \u0628\u0631\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.")),Object(o.b)("h3",{id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u06a9\u062f-\u0628\u0647-\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a-\u062e\u0648\u062f"},"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u06a9\u062f \u0628\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u062e\u0648\u062f"),Object(o.b)("p",null,"\u06a9\u0644\u0627\u0633\u06cc \u0637\u0631\u0627\u062d\u06cc \u06a9\u0646\u06cc\u062f \u0648 \u0627\u06cc\u0646\u062a\u0631\u0641\u06cc\u0633 ",Object(o.b)("inlineCode",{parentName:"p"},"IPusheNotificationListener")," \u0631\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f. \u0645\u062b\u0627\u0644:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class PusheNotifListener : IPusheNotificationListener\n{\n    public void OnNotification(NotificationData notificationData)\n    {\n        // Pushe.Log("Notification received: " + notificationData);\n    }\n\n    public void OnCustomContentReceived(string customJson)\n    {\n        // Pushe.Log("Notification custom content received: " + customJson);\n    }\n\n    public void OnNotificationClick(NotificationData notificationData)\n    {\n        // Pushe.Log("Notification clicked: " + notificationData);\n    }\n\n    public void OnNotificationDismiss(NotificationData notificationData)\n    {\n        // Pushe.Log("Notification dismissed: " + notificationData);\n    }\n\n    public void OnButtonClick(NotificationButtonData notificationButtonData, NotificationData notificationData)\n    {\n        // Pushe.Log("Notification button clicked\\n Data: " + notificationData +\n                  // "\\n ButtonData: " + notificationButtonData);\n    }\n}\n')),Object(o.b)("p",null,"\u0633\u067e\u0633 \u06a9\u062f \u0632\u06cc\u0631 \u0631\u0627 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0627 Listener \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u0648\u062f:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"PusheNotification.SetNotificationListener(new PusheNotifListener());\n")),Object(o.b)("h2",{id:"\u0645\u0648\u0627\u0631\u062f-\u0627\u0636\u0627\u0641\u06cc"},"\u0645\u0648\u0627\u0631\u062f \u0627\u0636\u0627\u0641\u06cc"),Object(o.b)("h3",{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-gameobject-\u062f\u0644\u062e\u0648\u0627\u0647"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 GameObject \u062f\u0644\u062e\u0648\u0627\u0647"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u0627\u0632 \u0646\u0633\u062e\u0647\u200c\u06cc 0.4.4")),Object(o.b)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0642\u0635\u062f \u062f\u0627\u0631\u06cc\u062f \u0634\u0626\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u0648 \u06cc\u0627 \u0628\u0647 \u0647\u0631\u062f\u0644\u06cc\u0644\u06cc \u0627\u0645\u06a9\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",Object(o.b)("inlineCode",{parentName:"p"},"PusheCallback")," \u0645\u0645\u06a9\u0646 \u0646\u06cc\u0633\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062f \u0632\u06cc\u0631 GameObject \u06a9\u0627\u0633\u062a\u0648\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"PusheNotification.SetNotificationListener(gameObject.name, new PusheNotifListener());\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u0646\u06a9\u062a\u0647"),": \u0628\u0627\u06cc\u062f \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a ",Object(o.b)("inlineCode",{parentName:"p"},"PusheCallback.cs")," \u0628\u0647 \u0627\u06cc\u0646 GameObject \u0645\u062a\u0635\u0644 \u0634\u062f\u0647\u200c\u0628\u0627\u0634\u062f.")))}u.isMDXComponent=!0},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(n),O=i,f=p["".concat(c,".").concat(O)]||p[O]||s[O]||o;return n?a.a.createElement(f,r(r({ref:t},l),{},{components:n})):a.a.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=O;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);