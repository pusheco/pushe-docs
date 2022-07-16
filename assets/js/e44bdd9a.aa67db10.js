"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[5895],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?t.createElement(v,o(o({ref:n},c),{},{components:r})):t.createElement(v,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,n,r){var t=r(7294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},6396:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(7462),a=r(7294),l=r(2389),o=r(9443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(3616),u=r(6010),c="tabItem_vU9c";function d(e){var n,r,l,o=e.lazy,d=e.block,p=e.defaultValue,m=e.values,v=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var M=null===p?p:null!=(n=null!=p?p:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==M&&!b.some((function(e){return e.value===M})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+M+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=s(),y=h.tabGroupChoices,N=h.setTabGroupChoices,F=(0,a.useState)(M),w=F[0],C=F[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=y[v];null!=S&&S!==w&&b.some((function(e){return e.value===S}))&&C(S)}var T=function(e){var n=e.currentTarget,r=E.indexOf(n),t=b[r].value;t!==w&&(O(n),C(t),null!=v&&N(v,t))},x=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=E.indexOf(e.currentTarget)+1;r=E[t]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return E.push(e)},onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=r?r:n)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,l.Z)();return a.createElement(d,(0,t.Z)({key:String(n)},e))}},3512:function(e,n,r){var t=r(7294);n.Z=function(e){return t.createElement("div",{className:"platform-items-wrapper"},e.ios&&t.createElement("div",{className:"platform-item platform-ios"},"iOS"),e.android&&t.createElement("div",{className:"platform-item platform-android"},"Android"),e.web&&t.createElement("div",{className:"platform-item platform-web"},"Web"),e.version&&t.createElement("div",{className:"platform-item platform-version"},e.version))}},6665:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var t=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(6396),s=r(8215),i=(r(3512),["components"]),u={id:"multiple-fcm",title:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06cc \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 FCM"},c=void 0,d={unversionedId:"android/multiple-fcm",id:"android/multiple-fcm",title:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06cc \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 FCM",description:"\u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0639\u0644\u0627\u0646 \u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 FCM(Firebase Cloud Messaging) \u06af\u0648\u06af\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u067e\u0648\u0634\u0647 \u062a\u0646\u0647\u0627 \u0633\u0631\u0648\u06cc\u0633\u06cc \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0634\u0645\u0627 \u0628\u0627\u0634\u062f \u06a9\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0628\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0631\u062f\u0646 \u0647\u0645\u0627\u0646 \u0645\u0631\u0627\u062d\u0644\u06cc \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0634\u062f \u0647\u0645\u0647 \u0686\u06cc\u0632 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u06a9\u0627\u0631 \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f \u0648 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062c\u0627\u0645 \u06a9\u0627\u0631 \u0627\u0636\u0627\u0641\u0647\u200c\u0627\u06cc \u0646\u06cc\u0633\u062a.",source:"@site/docs/android/fcm.mdx",sourceDirName:"android",slug:"/android/multiple-fcm",permalink:"/docs/android/multiple-fcm",tags:[],version:"current",frontMatter:{id:"multiple-fcm",title:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06cc \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 FCM"},sidebar:"studio",previous:{title:"\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0645\u0627\u0698\u0648\u0644",permalink:"/docs/android/hms/intro"},next:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u06a9\u062f",permalink:"/docs/android/notification/d2d-notification"}},p=[{value:"\u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u06cc\u0633 FCM \u067e\u0648\u0634\u0647",id:"\u063a\u06cc\u0631-\u0641\u0639\u0627\u0644-\u06a9\u0631\u062f\u0646-\u0633\u0631\u0648\u06cc\u0633-fcm-\u067e\u0648\u0634\u0647",children:[],level:2},{value:"\u0627\u06cc\u062c\u0627\u062f \u0633\u0631\u0648\u06cc\u0633 FCM \u062f\u0644\u062e\u0648\u0627\u0647 \u062e\u0648\u062f",id:"\u0627\u06cc\u062c\u0627\u062f-\u0633\u0631\u0648\u06cc\u0633-fcm-\u062f\u0644\u062e\u0648\u0627\u0647-\u062e\u0648\u062f",children:[],level:2},{value:"\u0631\u0633\u0627\u0646\u062f\u0646 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627 \u0648 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627 \u0628\u0647 \u067e\u0648\u0634\u0647",id:"\u0631\u0633\u0627\u0646\u062f\u0646-\u067e\u06cc\u063a\u0627\u0645\u0647\u0627-\u0648-\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627-\u0628\u0647-\u067e\u0648\u0634\u0647",children:[],level:2}],m={toc:p};function v(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0639\u0644\u0627\u0646 \u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 FCM(Firebase Cloud Messaging) \u06af\u0648\u06af\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u067e\u0648\u0634\u0647 \u062a\u0646\u0647\u0627 \u0633\u0631\u0648\u06cc\u0633\u06cc \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0634\u0645\u0627 \u0628\u0627\u0634\u062f \u06a9\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0628\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0631\u062f\u0646 \u0647\u0645\u0627\u0646 \u0645\u0631\u0627\u062d\u0644\u06cc \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0634\u062f \u0647\u0645\u0647 \u0686\u06cc\u0632 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u06a9\u0627\u0631 \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f \u0648 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062c\u0627\u0645 \u06a9\u0627\u0631 \u0627\u0636\u0627\u0641\u0647\u200c\u0627\u06cc \u0646\u06cc\u0633\u062a.\n\u0648\u0644\u06cc \u062f\u0631 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u063a\u06cc\u0631 \u0627\u0632 \u067e\u0648\u0634\u0647 \u0633\u0631\u0648\u06cc\u0633 \u062f\u06cc\u06af\u0631\u06cc \u0646\u06cc\u0632 \u0628\u062e\u0648\u0627\u0647\u062f \u0627\u0632\nFCM\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u062f\u060c \u0645\u062b\u0644\u0627 \u0627\u06af\u0631 \u062e\u0648\u062f \u0634\u0645\u0627 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0627\u0632\nFirebase\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc\nFCM\n\u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f\u060c \u062a\u062f\u0627\u062e\u0644 \u067e\u06cc\u0634 \u062e\u0648\u0627\u0647\u062f \u0622\u0645\u062f\u060c \u0686\u0631\u0627 \u06a9\u0647 \u062f\u0631 \u0647\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062a\u0646\u0647\u0627 \u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633 \u06af\u0648\u0634\u200c\u062f\u0647\u0646\u062f\u0647 \u0628\u0647 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc\nFCM\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f. \u0627\u06af\u0631 \u0628\u06cc\u0634 \u0627\u0632 \u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633 \u06af\u0648\u0634\u200c\u062f\u0647\u0646\u062f\u0647 \u062a\u0639\u0631\u06cc\u0641 \u0634\u0648\u062f\u060c \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0645\u06cc\u200c\u0631\u0633\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u062a\u0635\u0627\u062f\u0641\u06cc \u062a\u0646\u0647\u0627 \u0628\u0647 \u062f\u0633\u062a \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627 \u062e\u0648\u0627\u0647\u062f \u0631\u0633\u06cc\u062f \u0648 \u0627\u06cc\u0646 \u0628\u0627\u0639\u062b \u0645\u062e\u062a\u0644 \u0634\u062f\u0646 \u06a9\u0627\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0631\u0641\u0639 \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0637\u06cc \u06a9\u0646\u06cc\u062f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0633\u0631\u0648\u06cc\u0633 \u06af\u0648\u0634 \u062f\u0647\u0646\u062f\u0647 FCM \u067e\u0648\u0634\u0647 \u0631\u0627 \u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f"),(0,l.kt)("li",{parentName:"ol"},"\u0633\u0631\u0648\u06cc\u0633 \u06af\u0648\u0634 \u062f\u0647\u0646\u062f\u0647 FCM \u062e\u0648\u062f \u0631\u0627 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f"),(0,l.kt)("li",{parentName:"ol"},"\u0628\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc FCM \u0648 \u0631\u062e \u062f\u0627\u062f\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0622\u0646 \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u062e\u0648\u062f\u060c \u067e\u0648\u0634\u0647 \u0631\u0627 \u0645\u0637\u0644\u0639 \u06a9\u0646\u06cc\u062f")),(0,l.kt)("p",null,"\u0628\u0627 \u0637\u06cc \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0645\u0631\u0627\u062d\u0644\u060c \u062a\u0646\u0647\u0627 \u06af\u0648\u0634 \u062f\u0647\u0646\u062f\u0647 \u0628\u0647 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc\nFCM\n\u06af\u0648\u0634 \u062f\u0647\u0646\u062f\u0647 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0634\u0645\u0627 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f \u06a9\u0647 \u0647\u0645\u0647\u200c\u06cc \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc\nFCM\n\u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f \u0648 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0628\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u06cc \u067e\u0648\u0634\u0647 \u062a\u062d\u0648\u06cc\u0644 \u0645\u06cc\u200c\u062f\u0647\u062f."),(0,l.kt)("p",null," \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0646\u062d\u0648\u0647 \u0627\u0639\u0645\u0627\u0644 \u0627\u06cc\u0646 \u0645\u0631\u0627\u062d\u0644 \u0631\u0627 \u0642\u062f\u0645 \u0628\u0647 \u0642\u062f\u0645 \u062a\u0648\u0636\u06cc\u062d \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645:"),(0,l.kt)("h2",{id:"\u063a\u06cc\u0631-\u0641\u0639\u0627\u0644-\u06a9\u0631\u062f\u0646-\u0633\u0631\u0648\u06cc\u0633-fcm-\u067e\u0648\u0634\u0647"},"\u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u06cc\u0633 FCM \u067e\u0648\u0634\u0647"),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u06cc\u0633\nFCM\n\u067e\u0648\u0634\u0647\u060c \u0639\u0628\u0627\u0631\u062a \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u062a\u06af\n",(0,l.kt)("inlineCode",{parentName:"p"},"<application>"),"\n\u0641\u0627\u06cc\u0644 \u0645\u0627\u0646\u06cc\u0641\u0633\u062a \u062e\u0648\u062f \u0628\u06af\u0630\u0627\u0631\u06cc\u062f:"),(0,l.kt)(o.Z,{defaultValue:"new",values:[{label:"v2.3.0+",value:"new"},{label:"Older",value:"old"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"old",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<service\n    android:name="co.pushe.plus.messaging.fcm.FcmService" \n    tools:node="remove" />\n'))),(0,l.kt)(s.Z,{value:"new",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<service\n    android:name="co.pushe.plus.fcm.FcmService" \n    tools:node="remove" />\n')))),(0,l.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u0627 \u067e\u06cc\u063a\u0627\u0645 \u062e\u0637\u0627 \u0645\u0648\u0627\u062c\u0647 \u0634\u062f\u06cc\u062f \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0639\u0628\u0627\u0631\u062a\n",(0,l.kt)("inlineCode",{parentName:"p"},'xmlns:tools="http://schemas.android.com/tools"'),"\n\u062f\u0631 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc \u062a\u06af\n",(0,l.kt)("inlineCode",{parentName:"p"},"<manifest>"),"\n\u0627\u0628\u062a\u062f\u0627\u06cc \u0641\u0627\u06cc\u0644\u060c \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\u060c \u0628\u0647 \u0627\u06cc\u0646 \u0634\u06a9\u0644:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools"\n    package="..."/>\n')),(0,l.kt)("h2",{id:"\u0627\u06cc\u062c\u0627\u062f-\u0633\u0631\u0648\u06cc\u0633-fcm-\u062f\u0644\u062e\u0648\u0627\u0647-\u062e\u0648\u062f"},"\u0627\u06cc\u062c\u0627\u062f \u0633\u0631\u0648\u06cc\u0633 FCM \u062f\u0644\u062e\u0648\u0627\u0647 \u062e\u0648\u062f"),(0,l.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u0642\u0628\u0644 \u0633\u0631\u0648\u06cc\u0633\nFCM\n\u0628\u0631\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u06cc \u062e\u0648\u062f \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0628\u06af\u0630\u0631\u06cc\u062f."),(0,l.kt)("p",null,"\u06cc\u06a9 \u06a9\u0644\u0627\u0633 \u062c\u062f\u06cc\u062f \u0628\u0633\u0627\u0632\u06cc\u062f \u06a9\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633\n",(0,l.kt)("inlineCode",{parentName:"p"},"FirebaseMessagingService"),"\n\u0627\u0631\u062b \u0645\u06cc\u200c\u0628\u0631\u062f. \u062f\u0631 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u0627\u0633\u0645 \u06a9\u0644\u0627\u0633 \u0631\u0627\n",(0,l.kt)("inlineCode",{parentName:"p"},"MyFcmService"),"\n\u06af\u0630\u0627\u0634\u062a\u06cc\u0645 \u0648\u0644\u06cc \u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0633\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class MyFcmService extends FirebaseMessagingService {\n\n}\n\n")),(0,l.kt)("p",null,"\u0633\u0631\u0648\u06cc\u0633 \u062c\u062f\u06cc\u062f \u0631\u0627 \u0628\u0627 \u06af\u0630\u0627\u0634\u062a\u0646 \u0639\u0628\u0627\u0631\u062a \u0632\u06cc\u0631 \u062f\u0631 \u062a\u06af\n",(0,l.kt)("inlineCode",{parentName:"p"},"<application>"),"\n\u0641\u0627\u06cc\u0644 \u0645\u0627\u0646\u06cc\u0641\u0633\u062a \u062e\u0648\u062f \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f. \u062a\u0648\u062c\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0646\u0627\u0645 \u06a9\u0644\u0627\u0633 \u0631\u0627 \u0628\u0627 \u0646\u0627\u0645 \u06a9\u0644\u0627\u0633 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u062e\u0648\u062f \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".MyFcmService">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),(0,l.kt)("h2",{id:"\u0631\u0633\u0627\u0646\u062f\u0646-\u067e\u06cc\u063a\u0627\u0645\u0647\u0627-\u0648-\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627-\u0628\u0647-\u067e\u0648\u0634\u0647"},"\u0631\u0633\u0627\u0646\u062f\u0646 \u067e\u06cc\u063a\u0627\u0645\u200c\u0647\u0627 \u0648 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627 \u0628\u0647 \u067e\u0648\u0634\u0647"),(0,l.kt)("p",null,"\u062f\u0631 \u06a9\u0644\u0627\u0633 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644\u060c \u062a\u0627\u0628\u0639\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u062f \u062f\u0627\u062e\u0644 \u0622\u0646\u200c\u0647\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f:"),(0,l.kt)(o.Z,{defaultValue:"new",values:[{label:"v2.3.0+",value:"new"},{label:"Older",value:"old"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"old",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class MyFcmService extends FirebaseMessagingService {\n\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        if (Pushe.getFcmHandler().onMessageReceived(remoteMessage)) {\n            // Message is for Pushe\n            return;\n        }\n        super.onMessageReceived(remoteMessage);\n\n        // Handle Firebase message\n    }\n\n    @Override\n    public void onNewToken(String s) {\n        Pushe.getFcmHandler().onNewToken(s);\n        super.onNewToken(s);\n\n        // Token is refreshed\n    }\n\n    @Override\n    public void onMessageSent(String s) {\n        Pushe.getFcmHandler().onMessageSent(s);\n        super.onMessageSent(s);\n\n        // Message sent\n    }\n\n    @Override\n    public void onDeletedMessages() {\n        Pushe.getFcmHandler().onDeletedMessages();\n        super.onDeletedMessages();\n\n        // Message was deleted\n    }\n\n    @Override\n    public void onSendError(String s, Exception e) {\n        Pushe.getFcmHandler().onSendError(s, e);\n        super.onSendError(s, e);\n\n        // Error sent\n    }\n}\n\n"))),(0,l.kt)(s.Z,{value:"new",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class MyFcmService extends FirebaseMessagingService {\n\n    private FcmHandler fcmHandler = Pushe.getPusheService(PusheFCM.class).getFcmHandler();\n    // for before 2.4.1 use\n    // Pushe.getFcmHandler() instead of getPusheService()\n\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        if (fcmHandler.onMessageReceived(remoteMessage)) {\n            // Message is for Pushe\n            return;\n        }\n        super.onMessageReceived(remoteMessage);\n\n        // Handle Firebase message\n    }\n\n    @Override\n    public void onNewToken(String s) {\n        fcmHandler.onNewToken(s);\n        super.onNewToken(s);\n\n        // Token is refreshed\n    }\n\n    @Override\n    public void onMessageSent(String s) {\n        fcmHandler.onMessageSent(s);\n        super.onMessageSent(s);\n\n        // Message sent\n    }\n\n    @Override\n    public void onDeletedMessages() {\n        fcmHandler.onDeletedMessages();\n        super.onDeletedMessages();\n\n        // Message was deleted\n    }\n\n    @Override\n    public void onSendError(String s, Exception e) {\n        fcmHandler.onSendError(s, e);\n        super.onSendError(s, e);\n\n        // Error sent\n    }\n}\n\n")))),(0,l.kt)("p",null,"\u0647\u0631 \u0628\u0627\u0631 \u06a9\u0647 \u06cc\u06a9 \u067e\u06cc\u063a\u0627\u0645\nFCM\n\u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0645\u06cc\u200c\u0631\u0633\u062f\u060c \u062a\u0627\u0628\u0639\n",(0,l.kt)("inlineCode",{parentName:"p"},"onMessageReceived"),"\n\u06a9\u0644\u0627\u0633 \u0634\u0645\u0627 \u0635\u062f\u0627 \u0632\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0647\u0645\u0627\u0646\u0637\u0648\u0631 \u06a9\u0647 \u062f\u0631 \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u062f\u0631 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639\u060c \u0634\u0645\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0639\u0628\u0627\u0631\u062a \u0632\u06cc\u0631 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u06cc\u063a\u0627\u0645 \u0645\u0637\u0644\u0639 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"fcmHandler.onMessageReceived(remoteMessage)\n")),(0,l.kt)("p",null,"\u0628\u0627 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u067e\u06cc\u063a\u0627\u0645 \u0628\u0647 \u062f\u0633\u062a \u067e\u0648\u0634\u0647 \u0646\u06cc\u0632 \u0645\u06cc\u200c\u0631\u0633\u062f \u0648 \u0627\u06af\u0631 \u067e\u06cc\u063a\u0627\u0645 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u06cc \u067e\u0648\u0634\u0647 \u0628\u0627\u0634\u062f \u0639\u0645\u0644\u06cc\u0627\u062a \u0644\u0627\u0632\u0645 \u0628\u0631 \u0631\u0648\u06cc \u0622\u0646 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u067e\u06cc\u063a\u0627\u0645 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0648\u0634\u0647 \u0628\u0627\u0634\u062f \u0639\u0628\u0627\u0631\u062a \u0628\u0627\u0644\u0627 \u0645\u0642\u062f\u0627\u0631\n",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\n\u0628\u0631 \u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f \u0648 \u0634\u0645\u0627 \u0646\u06cc\u0627\u0632\u06cc \u0646\u06cc\u0633\u062a \u0639\u0645\u0644\u06cc\u0627\u062a \u0628\u06cc\u0634\u062a\u0631\u06cc \u0631\u0648\u06cc \u0627\u06cc\u0646 \u067e\u06cc\u063a\u0627\u0645 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u0639\u0628\u0627\u0631\u062a \u0628\u0627\u0644\u0627 \u0645\u0642\u062f\u0627\u0631\n",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\n\u06af\u0631\u0641\u062a\u06cc\u062f \u0628\u0647 \u0627\u06cc\u0646 \u0645\u0639\u0646\u06cc \u0627\u0633\u062a \u06a9\u0647 \u067e\u06cc\u063a\u0627\u0645 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0648\u0634\u0647 \u0646\u06cc\u0633\u062a \u0648 \u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0633\u062a\u0647 \u0628\u0647 \u0646\u06cc\u0627\u0632 \u062e\u0648\u062f \u0639\u0645\u0644\u06cc\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f."),(0,l.kt)("p",null,"\u0633\u0627\u06cc\u0631 \u062a\u0648\u0627\u0628\u0639 \u06a9\u0644\u0627\u0633 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647\u060c \u0632\u0645\u0627\u0646 \u0631\u062e \u062f\u0627\u062f\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647\nFCM\n\u0635\u062f\u0627 \u0632\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u0647\u0645\u0627\u0646\u0637\u0648\u0631 \u06a9\u0647 \u062f\u0631 \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0646\u0634\u0627\u0646 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647\u060c \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u06a9\u0647 \u0634\u0645\u0627 \u0647\u0646\u06af\u0627\u0645 \u0631\u062e \u062f\u0627\u062f\u0646 \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627 \u0628\u0627 \u0635\u062f\u0627 \u0632\u062f\u0646 \u062a\u0627\u0628\u0639 \u0645\u0631\u0628\u0648\u0637\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u06cc \u067e\u0648\u0634\u0647\u060c \u067e\u0648\u0634\u0647 \u0631\u0627 \u0627\u0632 \u0631\u062e \u062f\u0627\u062f\u0646 \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627 \u0645\u0637\u0644\u0639 \u06a9\u0646\u06cc\u062f."))}v.isMDXComponent=!0}}]);