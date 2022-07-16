"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[906],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,p=d["".concat(u,".").concat(f)]||d[f]||v[f]||o;return t?r.createElement(p,l(l({ref:n},s),{},{components:t})):r.createElement(p,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),s="tabItem_vU9c";function v(e){var n,t,o,l=e.lazy,v=e.block,d=e.defaultValue,f=e.values,p=e.groupId,m=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=i(),k=E.tabGroupChoices,N=E.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],j=w[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=k[p];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&j(x)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),r=h[t].value;r!==O&&(P(n),j(r),null!=p&&N(p,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":v},m)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,c.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,o.Z)();return a.createElement(v,(0,r.Z)({key:String(n)},e))}},8377:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return v},toc:function(){return d},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(6396),i=t(8215),u=["components"],c={id:"event",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",sidebar_label:"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627"},s="\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",v={unversionedId:"ios/features/event",id:"ios/features/event",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",source:"@site/docs/ios/features/event.md",sourceDirName:"ios/features",slug:"/ios/features/event",permalink:"/docs/ios/features/event",tags:[],version:"current",frontMatter:{id:"event",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",sidebar_label:"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627"},sidebar:"iOS",previous:{title:"\u0628\u0631\u0686\u0633\u0628 (Tag)",permalink:"/docs/ios/features/tag"},next:{title:"\u067e\u0631\u0648\u062a\u06a9\u0644 PusheProtocol",permalink:"/docs/ios/reference/pushe-protocol"}},d=[{value:"\u0631\u0648\u06cc\u062f\u0627\u062f \u0686\u06cc\u0633\u062a",id:"\u0631\u0648\u06cc\u062f\u0627\u062f-\u0686\u06cc\u0633\u062a",children:[],level:2},{value:"\u0627\u0631\u0633\u0627\u0644 \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u0627\u0631\u0633\u0627\u0644-\u0631\u0648\u06cc\u062f\u0627\u062f",children:[{value:"<code>@objc(sendEventWithName:) func sendEvent(with name: String)</code>",id:"objcsendeventwithname-func-sendeventwith-name-string",children:[],level:4},{value:"<code>@objc(sendEvent:) func sendEvent(event: Event)</code>",id:"objcsendevent-func-sendeventevent-event",children:[],level:4}],level:2}],f={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627"},"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627"),(0,o.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u06cc\u0648\u0646\u062a(\u0631\u0648\u06cc\u062f\u0627\u062f) \u062e\u0627\u0635\u06cc \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062a\u0641\u0627\u0642 \u0627\u0641\u062a\u0627\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0622\u0646\u200c \u0631\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Pushe \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f."),(0,o.kt)("h2",{id:"\u0631\u0648\u06cc\u062f\u0627\u062f-\u0686\u06cc\u0633\u062a"},"\u0631\u0648\u06cc\u062f\u0627\u062f \u0686\u06cc\u0633\u062a"),(0,o.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0628\u0631\u0631\u0633\u06cc \u06a9\u0631\u062f\u0646 \u0631\u0641\u062a\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646\u062a\u0627\u0646 \u0647\u0646\u06af\u0627\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0647\u0631 \u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u06a9\u0634\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f \u06cc\u06a9 \u0631\u0648\u06cc\u062f\u0627\u062f \u06cc\u0627 \u0627\u06cc\u0648\u0646\u062a \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f. \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0648\u0642\u062a\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0648\u0627\u0631\u062f \u0635\u0641\u062d\u0647 \u062e\u0631\u06cc\u062f \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0648\u0642\u062a\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0644\u06cc\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u06cc\u0627 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u067e\u0644\u0646 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0632 \u0631\u0627\u06cc\u06af\u0627\u0646 \u0628\u0647 \u067e\u0648\u0644\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u062f\u0647\u062f \u0648 \u0628\u0647 \u0627\u0635\u0637\u0644\u0627\u062d \u067e\u0631\u0645\u06cc\u0648\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 ..."),(0,o.kt)("p",null,"\u0627\u06cc\u0646\u06a9\u0647 \u0686\u0647 \u0631\u0648\u06cc\u062f\u0627\u062f\u06cc \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f \u0628\u0647 \u0645\u062f\u06cc\u0631 \u0645\u062d\u0635\u0648\u0644\u060c \u062a\u06cc\u0645 \u0645\u0627\u0631\u06a9\u062a\u06cc\u0646\u06af \u0648 \u06cc\u0627 \u06a9\u0633\u06cc \u06a9\u0647 \u062a\u062d\u0644\u06cc\u0644 \u0631\u0641\u062a\u0627\u0631\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u062f \u0628\u0633\u062a\u06af\u06cc \u062f\u0627\u0631\u062f"),(0,o.kt)("h2",{id:"\u0627\u0631\u0633\u0627\u0644-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u0627\u0631\u0633\u0627\u0644 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u0645\u0646\u0638\u0648\u0631 \u0627\u0632 \u0631\u0648\u06cc\u062f\u0627\u062f \u06cc\u0627 \u0627\u06cc\u0648\u0646\u062a \u0686\u06cc\u0633\u062a\u061f"),(0,o.kt)("br",null),(0,o.kt)("br",null),"\n\u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u067e\u0644\u0646 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0632 \u0631\u0627\u06cc\u06af\u0627\u0646 \u0628\u0647 \u067e\u0648\u0644\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0648 \u062b\u0628\u062a \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0645\u0648\u062f.")),(0,o.kt)("div",{dir:"ltr"},(0,o.kt)("h4",{id:"objcsendeventwithname-func-sendeventwith-name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"@objc(sendEventWithName:) func sendEvent(with name: String)")),(0,o.kt)("h4",{id:"objcsendevent-func-sendeventevent-event"},(0,o.kt)("inlineCode",{parentName:"h4"},"@objc(sendEvent:) func sendEvent(event: Event)"))),(0,o.kt)(l.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let eventName = "permium_activated";\nPusheClient.shared.sendEvent(name: eventName);\n// ----------\nlet eventName = "permium_activated";\nlet eventAction = EventAction.purchase\nlet eventData: [String: Any] = ["first": 1,\n                                "second": ["nested": "something"],\n                                "third": true]\nlet event = Event(name: eventName, action: eventAction, data: eventData)\nPusheClient.shared.sendEvent(event: event)\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'NSString * _Nonnull eventName = @"permium_activated";\n[PusheClient.shared sendEventWithName:eventName];\n// ----------\nNSString * _Nonnull eventName = @"permium_activated";\nEventAction * eventAction = EventActionPurchase;\nNSDictionary * _Nonnull eventData = @{@"first": @1,\n                                      @"second": @{@"nested": @"something"},\n                                      @"third": @TRUE};\nEvent * _Nonnull event = [[Event alloc] initWithName:eventName action:eventAction data:eventData];\n[PusheClient.shared sendEvent:event];\n')))))}p.isMDXComponent=!0}}]);