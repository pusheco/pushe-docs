"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[8562],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,v=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),l=n(2389),i=n(9443);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(3616),c=n(6010),p="tabItem_vU9c";function d(e){var t,n,l,i=e.lazy,d=e.block,s=e.defaultValue,m=e.values,v=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=u(),g=x.tabGroupChoices,N=x.setTabGroupChoices,w=(0,a.useState)(h),O=w[0],E=w[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=g[v];null!=j&&j!==O&&k.some((function(e){return e.value===j}))&&E(j)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=k[n].value;r!==O&&(D(t),E(r),null!=v&&N(v,r))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:M,onFocus:C,onClick:C},l,{className:(0,c.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return v}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(6396),u=n(8215),o=["components"],c={id:"multidex",title:"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0645\u0627\u0644\u062a\u06cc\u200c\u062f\u06a9\u0633"},p=void 0,d={unversionedId:"react-native/multidex",id:"react-native/multidex",title:"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0645\u0627\u0644\u062a\u06cc\u200c\u062f\u06a9\u0633",description:"MultiDex \u0686\u06cc\u0633\u062a\u061f",source:"@site/docs/react-native/multidex.md",sourceDirName:"react-native",slug:"/react-native/multidex",permalink:"/docs/react-native/multidex",tags:[],version:"current",frontMatter:{id:"multidex",title:"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0645\u0627\u0644\u062a\u06cc\u200c\u062f\u06a9\u0633"},sidebar:"reactnative",previous:{title:"\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0631\u06cc\u0639",permalink:"/docs/react-native/intro"},next:{title:"\u0628\u0631\u0631\u0633\u06cc \u0648\u0636\u0639\u06cc\u062a \u067e\u0644\u0627\u06af\u06cc\u0646",permalink:"/docs/react-native/check-library-status"}},s=[{value:"MultiDex \u0686\u06cc\u0633\u062a\u061f",id:"multidex-\u0686\u06cc\u0633\u062a",children:[],level:2},{value:"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 MultiDex \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647",id:"\u0641\u0639\u0627\u0644\u06a9\u0631\u062f\u0646-multidex-\u062f\u0631-\u0628\u0631\u0646\u0627\u0645\u0647",children:[{value:"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u06a9\u062f \u06af\u0631\u06cc\u062f\u0644",id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u06a9\u062f-\u06af\u0631\u06cc\u062f\u0644",children:[],level:3},{value:"\u062a\u063a\u06cc\u06cc\u0631\u062f\u0627\u062f\u0646 \u06a9\u0644\u0627\u0633 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",id:"\u062a\u063a\u06cc\u06cc\u0631\u062f\u0627\u062f\u0646-\u06a9\u0644\u0627\u0633-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",children:[],level:3}],level:2}],m={toc:s};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"multidex-\u0686\u06cc\u0633\u062a"},"MultiDex \u0686\u06cc\u0633\u062a\u061f"),(0,l.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 ",(0,l.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," \u067e\u0627\u06cc\u06cc\u0646\u062a\u0631 \u0627\u0632 \u06f2\u06f1 \u0628\u0627\u0634\u062f \u0648 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u06cc\u0646 \u062e\u0637\u0627 \u0631\u062e\u200c\u062f\u0647\u062f:"),(0,l.kt)("img",{src:"/img/common/multidex.jpeg",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u062f\u0631 \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc\nDalvik\n\u062a\u0639\u062f\u0627\u062f \u0645\u062a\u062f\u200c\u0647\u0627 \u062f\u0631 \u06cc\u06a9 \u0641\u0627\u06cc\u0644\n",(0,l.kt)("inlineCode",{parentName:"p"},".dex"),"\n\u0628\u0627\u06cc\u0633\u062a\u06cc \u0627\u0632 \u062d\u062f \u062a\u0639\u06cc\u06cc\u0646\u200c\u0634\u062f\u0647\u200c\u06cc\n",(0,l.kt)("strong",{parentName:"p"},"64K"),"\n\u0641\u0631\u0627\u062a\u0631 \u0646\u0631\u0648\u0646\u062f. \u062f\u0631 \u063a\u06cc\u0631\u0627\u06cc\u0646\u0635\u0648\u0631\u062a \u0622\u062f\u0631\u0633\u200c\u062f\u0647\u06cc \u0628\u0631\u0627\u06cc\nDalvik\n\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0627\u0646\u062c\u0627\u0645\u200c\u0646\u062e\u0648\u0627\u0647\u062f\u0634\u062f. \u0628\u0647 \u0647\u0645\u06cc\u0646 \u062f\u0644\u06cc\u0644 \u0628\u0627\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0686\u0646\u062f \u0641\u0627\u06cc\u0644\n",(0,l.kt)("inlineCode",{parentName:"p"},".dex"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06a9\u0631\u062f \u06a9\u0647 \u0627\u0635\u0637\u0644\u0627\u062d\u0627\n",(0,l.kt)("strong",{parentName:"p"},"MultiDex"),"\n\u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc\u200c\u0634\u062f\u0647\u200c\u0627\u0633\u062a."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u0646\u06a9\u062a\u0647\u200c\u06cc \u0645\u0647\u0645"),":",(0,l.kt)("br",{parentName:"p"}),"\n","\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 ",(0,l.kt)("inlineCode",{parentName:"p"},"MinSDK >= 21")," \u0628\u0627\u0634\u062f \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0631\u062e \u0646\u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f \u0632\u06cc\u0631\u0627 MultiDex \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u0646\u06cc\u0633\u062a.",(0,l.kt)("br",{parentName:"p"}),"\n","\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u06cc\u0646 \u062e\u0637\u0627 \u0631\u0627 \u062f\u0627\u0631\u062f\u060c \u0645\u0634\u06a9\u0644 \u0634\u0645\u0627 MultiDex \u0646\u06cc\u0633\u062a.")),(0,l.kt)("h2",{id:"\u0641\u0639\u0627\u0644\u06a9\u0631\u062f\u0646-multidex-\u062f\u0631-\u0628\u0631\u0646\u0627\u0645\u0647"},"\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 MultiDex \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647"),(0,l.kt)("h3",{id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u06a9\u062f-\u06af\u0631\u06cc\u062f\u0644"},"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u06a9\u062f \u06af\u0631\u06cc\u062f\u0644"),(0,l.kt)("p",null,"\u200c\u062f\u0631 \u0641\u0627\u06cc\u0644 ",(0,l.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," \u0627\u06cc\u0646 \u0645\u0648\u0627\u0631\u062f \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"android {\n    defaultConfig {\n    // ...\n        multiDexEnabled true\n    }\n}\n")),(0,l.kt)(i.Z,{defaultValue:"androidx",values:[{label:"AndroidX",value:"androidx"},{label:"Android support",value:"support"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"androidx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},'dependencies {\n    implementation "androidx.multidex:multidex:2.0.1"\n}\n'))),(0,l.kt)(u.Z,{value:"support",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"dependencies {\n    implementation 'com.android.support:multidex:1.0.3'\n}\n")))),(0,l.kt)("h3",{id:"\u062a\u063a\u06cc\u06cc\u0631\u062f\u0627\u062f\u0646-\u06a9\u0644\u0627\u0633-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u062a\u063a\u06cc\u06cc\u0631\u062f\u0627\u062f\u0646 \u06a9\u0644\u0627\u0633 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0628\u0647 \u0622\u062f\u0631\u0633 ",(0,l.kt)("inlineCode",{parentName:"li"},"android/src/main/java or kotlin/<your_app>")," \u0628\u0631\u0648\u06cc\u062f.",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("inlineCode",{parentName:"li"},"your_app")," \u0645\u0633\u06cc\u0631 \u067e\u06a9\u06cc\u062c \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u06cc \u0634\u0645\u0627\u0633\u062a")),(0,l.kt)("p",null,"\u06a9\u0644\u0627\u0633 MainApplication \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f \u0628\u0647 \u0637\u0648\u0631\u06cc\u06a9\u0647 \u0628\u0647 \u062c\u0627\u06cc \u06a9\u0644\u0627\u0633 Application \u06a9\u0644\u0627\u0633 MultidexApplication \u0631\u0627 extend \u06a9\u0646\u062f."))}v.isMDXComponent=!0}}]);