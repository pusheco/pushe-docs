"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[8178],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),l=n(2389),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),d=n(6010),c="tabItem_vU9c";function s(e){var t,n,l,i=e.lazy,s=e.block,p=e.defaultValue,m=e.values,v=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),N=y.tabGroupChoices,T=y.setTabGroupChoices,I=(0,a.useState)(h),E=I[0],w=I[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=N[v];null!=P&&P!==E&&g.some((function(e){return e.value===P}))&&w(P)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==E&&(O(t),w(r),null!=v&&T(v,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:D,onClick:D},l,{className:(0,d.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},3512:function(e,t,n){var r=n(7294);t.Z=function(e){return r.createElement("div",{className:"platform-items-wrapper"},e.ios&&r.createElement("div",{className:"platform-item platform-ios"},"iOS"),e.android&&r.createElement("div",{className:"platform-item platform-android"},"Android"),e.web&&r.createElement("div",{className:"platform-item platform-web"},"Web"),e.version&&r.createElement("div",{className:"platform-item platform-version"},e.version))}},9355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(6396),o=n(8215),u=n(3512),d=["components"],c={id:"ids",title:"\u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627 \u062f\u0631 \u067e\u0648\u0634\u0647",hide_title:!0,description:"\u0634\u0646\u0627\u0633\u0647 \u0647\u0627 \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u067e\u0648\u0634\u0647"},s=void 0,p={unversionedId:"general/ids",id:"general/ids",title:"\u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627 \u062f\u0631 \u067e\u0648\u0634\u0647",description:"\u0634\u0646\u0627\u0633\u0647 \u0647\u0627 \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u067e\u0648\u0634\u0647",source:"@site/docs/general/ids.mdx",sourceDirName:"general",slug:"/general/ids",permalink:"/docs/general/ids",tags:[],version:"current",frontMatter:{id:"ids",title:"\u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627 \u062f\u0631 \u067e\u0648\u0634\u0647",hide_title:!0,description:"\u0634\u0646\u0627\u0633\u0647 \u0647\u0627 \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u067e\u0648\u0634\u0647"},sidebar:"misc",previous:{title:"\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0632 \u067e\u0648\u0634-\u067e\u0644 \u0628\u0647 \u067e\u0648\u0634\u0647",permalink:"/docs/general/migration"}},m=[{value:"<code>PUSHE_TOKEN</code>",id:"pushe_token",children:[],level:2},{value:"RESTful API token",id:"restful-api-token",children:[],level:2},{value:"App Id",id:"app-id",children:[],level:2},{value:"Device ID",id:"device-id",children:[],level:2},{value:"<del>Android ID</del>",id:"android-id",children:[],level:2},{value:"Advertising ID",id:"advertising-id",children:[],level:2}],v={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628 \u062a\u0645\u0627\u0645 \u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0622\u0646 \u0633\u0631\u0648\u06a9\u0627\u0631 \u062e\u0648\u0627\u0647\u06cc\u062f \u062f\u0627\u0634\u062a \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a:"),(0,l.kt)("h2",{id:"pushe_token"},(0,l.kt)("inlineCode",{parentName:"h2"},"PUSHE_TOKEN")),(0,l.kt)(u.Z,{android:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0645\u062e\u062a\u0635 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0627\u0633\u062a \u0648 \u0628\u0627\u06cc\u0633\u062a\u06cc \u062f\u0631 \u0645\u0627\u0646\u06cc\u0641\u0633\u062a \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{5}","{5}":!0},'<manifest ...>\n    <application ...>\n        ...\n        \x3c!-- \u062a\u06af \u0628\u0627\u06cc\u062f \u0645\u0627\u0646\u0646\u062f \u0646\u0645\u0648\u0646\u0647 \u0632\u06cc\u0631 \u062f\u0627\u062e\u0644 \u062a\u06af \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f --\x3e\n        <meta-data android:name="pushe_token" android:value="PUSHE_TOKEN" />\n    </application>\n</manifest>\n')),(0,l.kt)("img",{src:"/img/general/pushe_token.png"}),(0,l.kt)("h2",{id:"restful-api-token"},"RESTful API token"),(0,l.kt)(u.Z,{android:!0,ios:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u06cc\u0627 ... \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",(0,l.kt)("br",{parentName:"p"}),"\n","\u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0628\u0627\u06cc\u0633\u062a\u06cc \u0627\u0632 \u06a9\u0646\u0633\u0648\u0644 \u0628\u062e\u0634\n",(0,l.kt)("strong",{parentName:"p"},"\u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 - API"),"\n\u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u0648\u062f \u0648 \u062f\u0631 \u0647\u062f\u0631 \u0631\u06cc\u06a9\u0648\u0626\u0633\u062a \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f."),(0,l.kt)("img",{src:"/img/general/api_token.png"}),(0,l.kt)("h2",{id:"app-id"},"App Id"),(0,l.kt)(u.Z,{android:!0,ios:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f\u060c \u067e\u0648\u0634\u0647 \u06cc\u06a9\n",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),"\n\u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062e\u062a\u0635\u0627\u0635 \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f \u06a9\u0647 \u062f\u0631 \u0628\u062e\u0634\n",(0,l.kt)("strong",{parentName:"p"},"\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u200c\u0647\u0627"),"\n\u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0646\u0645\u0627\u06cc\u0627\u0646\u06af\u0631 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u06cc \u0634\u0645\u0627\u0633\u062a \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u06cc\u0627 ... \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."),(0,l.kt)("img",{src:"/img/general/app_id.png"}),(0,l.kt)("h2",{id:"device-id"},"Device ID"),(0,l.kt)(u.Z,{android:!0,ios:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0646\u0645\u0627\u06cc\u0627\u0646\u06af\u0631 \u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u06cc \u0634\u0645\u0627 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a.\n\u0628\u0627 \u062f\u0627\u0634\u062a\u0646 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0631\u0627 \u0645\u062a\u0645\u0627\u06cc\u0632 \u06a9\u0631\u062f\u0647 \u0628\u0647 \u0622\u0646 \u0627\u0639\u0644\u0627\u0646 \u06cc\u0627 ... \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f. \u0645\u0639\u0645\u0648\u0644\u0627 \u0628\u0627 \u062a\u0627\u0628\u0639\n",(0,l.kt)("inlineCode",{parentName:"p"},"Pushe.getDeviceId()"),"\n\u0642\u0627\u0628\u0644 \u062f\u0633\u062a\u06cc\u0627\u0628\u06cc \u0627\u0633\u062a."),(0,l.kt)(i.Z,{groupId:"code",defaultValue:"kt",values:[{label:"Kotlin",value:"kt"},{label:"Java",value:"java"},{label:"Swift",value:"swift"},{label:"Obj-C",value:"m"},{label:"Flutter",value:"dart"},{label:"ReactNative",value:"js"},{label:"Unity",value:"cs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kt",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kt"},"val deviceId = Pushe.getDeviceId()\n"))),(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String deviceId = Pushe.getDeviceId();\n"))),(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let deviceId = PusheClient.shared.getDeviceId()\n"))),(0,l.kt)(o.Z,{value:"m",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-m"},"NSString * deviceId = [PusheClient.shared getDeviceId];\n"))),(0,l.kt)(o.Z,{value:"dart",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"final deviceId = await Pushe.getDeviceId();\n"))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let deviceId = Pushe.getDeviceId();\n"))),(0,l.kt)(o.Z,{value:"cs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"string deviceId = Pushe.GetDeviceId()\n")))),(0,l.kt)("h2",{id:"android-id"},(0,l.kt)("del",{parentName:"h2"},"Android ID")),(0,l.kt)(u.Z,{android:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0647\u0645\u0627\u0646 ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0627\u0632 \u0646\u0633\u062e\u0647\u200c\u06cc ",(0,l.kt)("strong",{parentName:"p"},"2.1.1")," \u0645\u0646\u0633\u0648\u062e \u0634\u062f\u0647\u200c\u0627\u0633\u062a \u0648 \u0628\u0627\u06cc\u0633\u062a\u06cc \u0627\u0632 ",(0,l.kt)("inlineCode",{parentName:"p"},"getDeviceId")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f.")),(0,l.kt)("h2",{id:"advertising-id"},"Advertising ID"),(0,l.kt)(u.Z,{android:!0,mdxType:"Platforms"}),(0,l.kt)("p",null,"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u062a\u0648\u0633\u0637 \u06af\u0648\u06af\u0644 \u0628\u0631\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u06a9\u0631\u062f\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0633\u062a. \u062a\u0641\u0627\u0648\u062a \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0628\u0627\n",(0,l.kt)("inlineCode",{parentName:"p"},"device_id"),"\n\u062f\u0631 \u0627\u06cc\u0646 \u0627\u0633\u062a \u06a9\u0647 \u0627\u06af\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u062d\u0630\u0641 \u0634\u0648\u062f \u0648 \u0645\u062c\u062f\u062f\u0627 \u0646\u0635\u0628 \u0634\u0648\u062f \u062a\u063a\u06cc\u06cc\u0631\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u062b\u0627\u0628\u062a \u0627\u0633\u062a\u060c \u0645\u06af\u0631 \u0627\u06cc\u0646\u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0622\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u062f.\n(\u0628\u0627 \u062d\u0630\u0641 \u0648 \u0646\u0635\u0628 \u0645\u062c\u062f\u062f \u0628\u0631\u0646\u0627\u0645\u0647 ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," \u0645\u062c\u062f\u062f\u0627 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0628\u0627 \u0642\u0628\u0644\u06cc \u062a\u0641\u0627\u0648\u062a \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u0634\u062a)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0628\u062e\u0634 \u0634\u0631\u0627\u06cc\u0637 \u0648 \u0642\u0648\u0627\u0646\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u06cc \u062e\u0648\u062f \u0627\u0637\u0644\u0627\u0639 \u062f\u0647\u06cc\u062f")))}f.isMDXComponent=!0}}]);