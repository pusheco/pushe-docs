"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[1010],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,g=p["".concat(c,".").concat(k)]||p[k]||u[k]||o;return n?i.createElement(g,l(l({ref:t},s),{},{components:n})):i.createElement(g,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"pushe-protocol",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",sidebar_label:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol"},c="\u0645\u0639\u0631\u0641\u06cc \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",d={unversionedId:"ios/reference/pushe-protocol",id:"ios/reference/pushe-protocol",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",source:"@site/docs/ios/reference/pushe-protocol.md",sourceDirName:"ios/reference",slug:"/ios/reference/pushe-protocol",permalink:"/docs/ios/reference/pushe-protocol",tags:[],version:"current",frontMatter:{id:"pushe-protocol",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",sidebar_label:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol"},sidebar:"iOS",previous:{title:"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",permalink:"/docs/ios/features/event"},next:{title:"\u06a9\u0644\u0627\u0633 PusheClient",permalink:"/docs/ios/reference/pushe-client"}},s=[{value:"function\u0647\u0627",id:"function\u0647\u0627",children:[{value:"<code>didReceiveNotificationExtensionRequest(::)</code>",id:"didreceivenotificationextensionrequest",children:[],level:3},{value:"<code>isRegistered()</code>",id:"isregistered",children:[],level:3},{value:"<code>getAPNsToken()</code>",id:"getapnstoken",children:[],level:3},{value:"<code>getDeviceId()</code>",id:"getdeviceid",children:[],level:3},{value:"<code>getAdvertisingId()</code>",id:"getadvertisingid",children:[],level:3},{value:"<code>subscribe(to:)</code>",id:"subscribeto",children:[],level:3},{value:"<code>subscribe(to:completionHandler:)</code>",id:"subscribetocompletionhandler",children:[],level:3},{value:"<code>unsubscribe(from:)</code>",id:"unsubscribefrom",children:[],level:3},{value:"<code>unsubscribe(from:completionHandler:)</code>",id:"unsubscribefromcompletionhandler",children:[],level:3},{value:"<code>getSubscribedTopics()</code>",id:"getsubscribedtopics",children:[],level:3},{value:"<code>addTags(with:)</code>",id:"addtagswith",children:[],level:3},{value:"<code>removeTags(with:)</code>",id:"removetagswith",children:[],level:3},{value:"<code>getSubscribedTags()</code>",id:"getsubscribedtags",children:[],level:3},{value:"<code>sendEvent(event:)</code>",id:"sendeventevent",children:[],level:3},{value:"<code>sendEvent(with:)</code>",id:"sendeventwith",children:[],level:3}],level:2},{value:"<code>property</code> \u0647\u0627",id:"property-\u0647\u0627",children:[{value:"<code>registerationCompletionHandler</code>",id:"registerationcompletionhandler",children:[],level:3}],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0645\u0639\u0631\u0641\u06cc-\u067e\u0631\u0648\u062a\u06a9\u0644-pusheprotocol"},"\u0645\u0639\u0631\u0641\u06cc \u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol"),(0,o.kt)("p",null,"\u067e\u0631\u0648\u062a\u06a9\u0644 ",(0,o.kt)("inlineCode",{parentName:"p"},"PusheProtocol"),"\u060c \u062a\u0648\u0627\u0628\u0639\u06cc \u0631\u0627 \u06a9\u0647 \u067e\u0648\u0634\u0647 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \u062f\u0631 \u062e\u0648\u062f \u062f\u0627\u0631\u062f \u0648 \u06a9\u0644\u0627\u0633 \u200d\u200d",(0,o.kt)("inlineCode",{parentName:"p"},"PusheClient")," \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0631\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u062a\u0648\u0627\u0628\u0639 \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0645\u0639\u0631\u0641\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f."),(0,o.kt)("h2",{id:"function\u0647\u0627"},"function\u0647\u0627"),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"didreceivenotificationextensionrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"didReceiveNotificationExtensionRequest(::)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, *)\n@objc(didReceiveNotificationExtensionRequest::) func didReceiveNotificationExtensionRequest(mutableContent: UNMutableNotificationContent, contentHandler: @escaping (UNNotificationContent) -> ())\n")),(0,o.kt)("p",null,"\u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0645\u062d\u062a\u0648\u0627\u06cc \u0636\u0645\u06cc\u0645\u0647 \u0634\u062f\u0647 \u0628\u0647 \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0627 \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0631\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u062a\u0627\u0628\u0639"),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"didReceive(_:withContentHandler:)"))),(0,o.kt)("p",null,"\u0627\u0632 \u06a9\u0644\u0627\u0633 ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationService")," \u06a9\u0647 \u062f\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"Target")," \u0645\u062a\u0646\u0627\u0638\u0631 \u0628\u0627 ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationServiceExtension")," \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f\u060c ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," \u06a9\u0646\u06cc\u062f."),(0,o.kt)("p",null,"\xa0"," ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/ios/extra/notification-service-extension"},"\u0646\u062d\u0648\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 Notification Service Extension")),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"isregistered"},(0,o.kt)("inlineCode",{parentName:"h3"},"isRegistered()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(isRegistered) func isRegistered() -> Bool\n")),(0,o.kt)("p",null,"\u0648\u0636\u0639\u06cc\u062a \u062b\u0628\u062a \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u0631 \u0633\u0631\u0648\u0631\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getapnstoken"},(0,o.kt)("inlineCode",{parentName:"h3"},"getAPNsToken()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(getAPNsTokenAsString) func getAPNsToken() -> String?\n@objc(getAPNsTokenAsData) func getAPNsToken() -> Data?\n")),(0,o.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a \u062f\u0631\u06cc\u0627\u0641\u062a \u062a\u0648\u06a9\u0646 ",(0,o.kt)("inlineCode",{parentName:"p"},"APNs")," \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u06af\u0627\u0647\u060c \u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0631\u0648 \u0628\u0631\u200c\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f. \u062f\u0631\u063a\u06cc\u0631\u0627\u06cc\u0646\u200c\u0635\u0648\u0631\u062a ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f."),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getdeviceid"},(0,o.kt)("inlineCode",{parentName:"h3"},"getDeviceId()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(getDeviceId) func getDeviceId() -> String?\n")),(0,o.kt)("p",null,"\u0645\u0642\u062f\u0627\u0631 \u0645\u062a\u0646\u0627\u0638\u0631 \u0628\u0627 "),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UIDevice.current.identifierForVendor?.uuidString"))),(0,o.kt)("p",null,"\u0631\u0627 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"getadvertisingid"},(0,o.kt)("inlineCode",{parentName:"h3"},"getAdvertisingId()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(getAdvertisingId) func getAdvertisingId() -> String\n")),(0,o.kt)("p",null,"\u0645\u0642\u062f\u0627\u0631 \u0645\u062a\u0646\u0627\u0638\u0631 \u0628\u0627 "),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ASIdentifierManager.shared().advertisingIdentifier.uuidString"))),(0,o.kt)("p",null,"\u0631\u0627 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"subscribeto"},(0,o.kt)("inlineCode",{parentName:"h3"},"subscribe(to:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(subscribe:) func subscribe(to topic: String)\n")),(0,o.kt)("p",null,"user \u0631\u0627 \u062f\u0631 topic \u0648\u0631\u0648\u062f\u06cc\u060c \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"subscribetocompletionhandler"},(0,o.kt)("inlineCode",{parentName:"h3"},"subscribe(to:completionHandler:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(subscribe::) func subscribe(to topic: String, completionHandler: @escaping (Error?) -> ())\n")),(0,o.kt)("p",null,"user \u0631\u0627 \u062f\u0631 topic \u0648\u0631\u0648\u062f\u06cc \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0633\u067e\u0633 closure \u0648\u0631\u0648\u062f\u06cc \u0631\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"unsubscribefrom"},(0,o.kt)("inlineCode",{parentName:"h3"},"unsubscribe(from:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(unsubscribe:) func unsubscribe(from topic: String)\n")),(0,o.kt)("p",null,"\u062b\u0628\u062a\u200c\u0646\u0627\u0645 user \u062f\u0631 topic \u0648\u0631\u0648\u062f\u06cc \u0631\u0627 \u0628\u0627\u0637\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"unsubscribefromcompletionhandler"},(0,o.kt)("inlineCode",{parentName:"h3"},"unsubscribe(from:completionHandler:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(unsubscribe::) func unsubscribe(from topic: String, completionHandler: @escaping (Error?) -> ())\n")),(0,o.kt)("p",null,"\u062b\u0628\u062a\u200c\u0646\u0627\u0645 user \u0631\u0627 \u062f\u0631 topic \u0648\u0631\u0648\u062f\u06cc \u0628\u0627\u0637\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0633\u067e\u0633 closure \u0648\u0631\u0648\u062f\u06cc \u0631\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"getsubscribedtopics"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSubscribedTopics()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(getSubscribedTopics) func getSubscribedTopics() -> [String]\n")),(0,o.kt)("p",null,"\u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0622\u0646\u200c\u0647\u0627 \u0639\u0636\u0648\u06cc\u062a \u062f\u0627\u0631\u062f \u0631\u0627 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"addtagswith"},(0,o.kt)("inlineCode",{parentName:"h3"},"addTags(with:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(addTags:) func addTags(with keysAndValues: [String: String])\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tag"),"\u0647\u0627\u06cc \u0648\u0631\u0648\u062f\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0647\u0631 \u062f\u0633\u062a\u06af\u0627\u0647 \u062d\u062f\u0627\u06a9\u062b\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u06f1\u06f0 \u0639\u062f\u062f ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"removetagswith"},(0,o.kt)("inlineCode",{parentName:"h3"},"removeTags(with:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(removeTags:) func removeTags(with keys: [String])\n")),(0,o.kt)("p",null,"\u062a\u06af\u200c\u0647\u0627\u06cc \u062f\u0627\u0631\u0627\u06cc \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0645\u0634\u062e\u0635\u200c\u0634\u062f\u0647 \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0635\u0648\u0631\u062a \u0648\u062c\u0648\u062f \u062d\u0630\u0641 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"getsubscribedtags"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSubscribedTags()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(getSubscribedTags) func getSubscribedTags() -> [String: String]\n")),(0,o.kt)("p",null,"\u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0634\u0627\u0645\u0644 \u062a\u06af\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062b\u0628\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0631\u0627 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f."),(0,o.kt)("hr",null),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"sendeventevent"},(0,o.kt)("inlineCode",{parentName:"h3"},"sendEvent(event:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(sendEvent:) func sendEvent(event: Event)\n")),(0,o.kt)("p",null,"\u0631\u0648\u06cc\u062f\u0627\u062f \u0648\u0631\u0648\u062f\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"sendeventwith"},(0,o.kt)("inlineCode",{parentName:"h3"},"sendEvent(with:)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc(sendEventWithName:) func sendEvent(with name: String)\n")),(0,o.kt)("p",null,"\u0631\u0648\u06cc\u062f\u0627\u062f\u06cc \u0631\u0627 \u0628\u0627 \u0646\u0627\u0645 \u0648\u0631\u0648\u062f\u06cc \u0645\u06cc\u200c\u0633\u0627\u0632\u062f \u0648 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,o.kt)("h2",{id:"property-\u0647\u0627"},(0,o.kt)("inlineCode",{parentName:"h2"},"property")," \u0647\u0627"),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h3",{id:"registerationcompletionhandler"},(0,o.kt)("inlineCode",{parentName:"h3"},"registerationCompletionHandler"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc var registerationCompletionHandler: (() -> ())? { get set }\n")),(0,o.kt)("p",null,"\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," \u062e\u0648\u062f \u0628\u0631\u0627\u06cc \u0631\u062c\u06cc\u0633\u062a\u0631\u0634\u062f\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u0631 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u0645\u062a\u063a\u06cc\u0631 \u200d\u200d\u200d\u200d",(0,o.kt)("inlineCode",{parentName:"p"},"assign")," \u06a9\u0646\u06cc\u062f. \u067e\u0633 \u0627\u0632 \u0631\u062c\u06cc\u0633\u062a\u0631 \u0634\u062f\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u0631 \u067e\u0648\u0634\u0647\u060c \u0627\u06cc\u0646 ",(0,o.kt)("inlineCode",{parentName:"p"},"closure")," \u0627\u062c\u0631\u0627 \u062e\u0648\u0627\u0647\u062f \u0634\u062f."))}p.isMDXComponent=!0}}]);