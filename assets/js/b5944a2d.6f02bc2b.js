"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[9205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=o(n),p=r,m=g["".concat(s,".").concat(p)]||g[p]||d[p]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7462),r=n(7294),l=n(2389),i=n(9443);var u=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),o=n(6010),c="tabItem_vU9c";function d(e){var t,n,l,i=e.lazy,d=e.block,g=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),T=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(k),S=w[0],j=w[1],O=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=T[m];null!=x&&x!==S&&v.some((function(e){return e.value===x}))&&j(x)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==S&&(C(t),j(a),null!=m&&N(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function g(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return g},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(6396),u=n(8215),s=["components"],o={id:"tag",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0628\u0631\u0686\u0633\u0628 (Tag)",sidebar_label:"\u0628\u0631\u0686\u0633\u0628 (Tag)",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0628\u0631\u0686\u0633\u0628 (Tag)"},c="\u0628\u0631\u0686\u0633\u0628 (Tag)",d={unversionedId:"ios/features/tag",id:"ios/features/tag",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0628\u0631\u0686\u0633\u0628 (Tag)",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0628\u0631\u0686\u0633\u0628 (Tag)",source:"@site/docs/ios/features/tag.md",sourceDirName:"ios/features",slug:"/ios/features/tag",permalink:"/docs/ios/features/tag",tags:[],version:"current",frontMatter:{id:"tag",title:"\u067e\u0648\u0634\u0647 | \u0631\u0627\u0647\u0646\u0645\u0627 \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 | \u0628\u0631\u0686\u0633\u0628 (Tag)",sidebar_label:"\u0628\u0631\u0686\u0633\u0628 (Tag)",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u0627\u0633 - \u0628\u0631\u0686\u0633\u0628 (Tag)"},sidebar:"iOS",previous:{title:"\u062a\u0627\u067e\u06cc\u06a9",permalink:"/docs/ios/features/topic"},next:{title:"\u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627",permalink:"/docs/ios/features/event"}},g=[{value:"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u062a\u06af",id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u062a\u06af",children:[{value:"<code>@objc(addTags:) func addTags(with keysAndValues: [String: String])</code>",id:"objcaddtags-func-addtagswith-keysandvalues-string-string",children:[],level:4}],level:2},{value:"\u062d\u0630\u0641 \u062a\u06af \u0627\u0632 \u0644\u06cc\u0633\u062a \u062a\u06af\u200c\u0647\u0627",id:"\u062d\u0630\u0641-\u062a\u06af-\u0627\u0632-\u0644\u06cc\u0633\u062a-\u062a\u06af\u0647\u0627",children:[{value:"<code>@objc(removeTags:) func removeTags(with keys: [String])</code>",id:"objcremovetags-func-removetagswith-keys-string",children:[],level:4}],level:2},{value:"\u06af\u0631\u0641\u062a\u0646 \u0644\u06cc\u0633\u062a \u062a\u06af\u200c\u0647\u0627",id:"\u06af\u0631\u0641\u062a\u0646-\u0644\u06cc\u0633\u062a-\u062a\u06af\u0647\u0627",children:[{value:"<code>func getSubscribedTags() -&gt; [String: String]</code>",id:"func-getsubscribedtags---string-string",children:[],level:4}],level:2}],p={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u0628\u0631\u0686\u0633\u0628-tag"},"\u0628\u0631\u0686\u0633\u0628 (Tag)"),(0,l.kt)("p",null,"\u0647\u0631 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0646\u0635\u0628\u200c\u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u06cc\u06a9 \u062c\u06cc\u0633\u0648\u0646 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u06a9\u0647 \u0646\u0645\u0627\u06cc\u0627\u0646\u06af\u0631 \u0648\u06cc\u0698\u06af\u06cc\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u062e\u062a\u0635 \u0622\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0627\u0634\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0648 ... \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0632 \u0627\u06cc\u0646 \u062a\u06af\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0648 \u062f\u0633\u062a\u0647\u200c\u06cc \u062e\u0627\u0635\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f."),(0,l.kt)("p",null,"\u0645\u062b\u0627\u0644:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u06a9\u0627\u0631\u0628\u0631\u0627\u0646\u06cc \u06a9\u0647 \u062f\u0631 \u062a\u0627\u0631\u06cc\u062e \u062e\u0627\u0635\u06cc \u0645\u062a\u0648\u0644\u062f \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0628\u0631\u06cc\u06a9 \u062a\u0648\u0644\u062f."),(0,l.kt)("li",{parentName:"ul"},"\u06a9\u0627\u0631\u0628\u0631\u0627\u0646\u06cc \u06a9\u0647 \u0646\u0627\u0645 \u0622\u0646\u0647\u0627 \u0645\u062d\u0645\u062f \u0627\u0633\u062a \u0648 \u06f2\u06f5 \u0633\u0627\u0644 \u062f\u0627\u0631\u0646\u062f."),(0,l.kt)("li",{parentName:"ul"},"\u0648 ...")),(0,l.kt)("h2",{id:"\u0627\u0636\u0627\u0641\u0647\u06a9\u0631\u062f\u0646-\u062a\u06af"},"\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u062a\u06af"),(0,l.kt)("div",{dir:"ltr"},(0,l.kt)("h4",{id:"objcaddtags-func-addtagswith-keysandvalues-string-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"@objc(addTags:) func addTags(with keysAndValues: [String: String])"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0648\u0631\u0648\u062f\u06cc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"keysAndValues"),(0,l.kt)("td",{parentName:"tr",align:null},"\u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0628\u0647 \u0641\u0631\u0645 ","[String: String]")))),(0,l.kt)(i.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let tags: [String: String] = ["name": "Mohammad",\n                              "age": "25",\n                              "birthday": "1435187386"]\nPusheClient.shared.addTags(with: tags)\n'))),(0,l.kt)(u.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'NSDictionary<NSString *, NSString *> * _Nonnull tags = @{@"name": @"Mohammad",\n                                                         @"age": @"25",\n                                                         @"birthday": @"1435187386"};\n[PusheClient.shared addTags:tags];\n')))),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u0647\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u062a\u0627 \u06f1\u06f0 \u062a\u06af \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f"))),(0,l.kt)("h2",{id:"\u062d\u0630\u0641-\u062a\u06af-\u0627\u0632-\u0644\u06cc\u0633\u062a-\u062a\u06af\u0647\u0627"},"\u062d\u0630\u0641 \u062a\u06af \u0627\u0632 \u0644\u06cc\u0633\u062a \u062a\u06af\u200c\u0647\u0627"),(0,l.kt)("div",{dir:"ltr"},(0,l.kt)("h4",{id:"objcremovetags-func-removetagswith-keys-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"@objc(removeTags:) func removeTags(with keys: [String])"))),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0644\u06cc\u0633\u062a \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0627\u0632 \u062c\u06cc\u0633\u0648\u0646 \u062a\u06af \u062d\u0630\u0641 \u06a9\u0646\u06cc\u062f \u0631\u0627 \u0628\u0647 \u0648\u0631\u0648\u062f\u06cc \u062a\u0627\u0628\u0639 \u0628\u062f\u0647\u06cc\u062f."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0648\u0631\u0648\u062f\u06cc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"keys"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0622\u0631\u0627\u06cc\u0647\u200c\u0627\u06cc \u0627\u0632 \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0627\u0632 \u062c\u06cc\u0633\u0648\u0646 \u062a\u06af \u062d\u0630\u0641 \u06a9\u0646\u06cc\u062f")))),(0,l.kt)(i.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let tags: [String] = ["name", "age" , "birthday"]\nPusheClient.shared.removeTags(with: tags)\n'))),(0,l.kt)(u.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'NSArray<NSString *> * _Nonnull tags = @[@"name", @"age" , @"birthday"];\n[PusheClient.shared removeTags:tags];\n')))),(0,l.kt)("h2",{id:"\u06af\u0631\u0641\u062a\u0646-\u0644\u06cc\u0633\u062a-\u062a\u06af\u0647\u0627"},"\u06af\u0631\u0641\u062a\u0646 \u0644\u06cc\u0633\u062a \u062a\u06af\u200c\u0647\u0627"),(0,l.kt)("div",{dir:"ltr"},(0,l.kt)("h4",{id:"func-getsubscribedtags---string-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"func getSubscribedTags() -> [String: String]"))),(0,l.kt)("p",null,"\u062e\u0631\u0648\u062c\u06cc \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0628\u0647 \u0641\u0631\u0645 ",(0,l.kt)("inlineCode",{parentName:"p"},"[String: String]")," \u0645\u062a\u0634\u06a9\u0644 \u0627\u0632 \u062a\u0645\u0627\u0645 tag\u0647\u0627\u06cc\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062b\u0628\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f. "),(0,l.kt)(i.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let tags: [String: String] = ["name": "Ali"]\nPusheClient.shared.addTags(with: tags);\nlet subscribedtags = PusheClient.shared.getSubscribedTags()    \n// subscribedtags: ["name": "Ali"]\n'))),(0,l.kt)(u.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'NSDictionary<NSString *, NSString *> * _Nonnull tags = @{@"name": @"Ali"};\n    [PusheClient.shared addTags:tags];\n    NSDictionary<NSString *, NSString *> * _Nonnull subscribedTags = [PusheClient.shared getSubscribedTags];    // subscribedtags: {@"name": @"Ali"}\n')))))}m.isMDXComponent=!0}}]);