"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[2663],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8123:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"intro",title:"\u0645\u0639\u0631\u0641\u06cc \u067e\u0644\u0627\u06af\u06cc\u0646 \u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc Unity",sidebar_label:"\u0645\u0642\u062f\u0645\u0647"},p=void 0,d={unversionedId:"unity/intro",id:"unity/intro",title:"\u0645\u0639\u0631\u0641\u06cc \u067e\u0644\u0627\u06af\u06cc\u0646 \u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc Unity",description:"\u0645\u0642\u062f\u0645\u0647",source:"@site/docs/unity/intro.mdx",sourceDirName:"unity",slug:"/unity/intro",permalink:"/docs/unity/intro",tags:[],version:"current",frontMatter:{id:"intro",title:"\u0645\u0639\u0631\u0641\u06cc \u067e\u0644\u0627\u06af\u06cc\u0646 \u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc Unity",sidebar_label:"\u0645\u0642\u062f\u0645\u0647"},sidebar:"unity",next:{title:"\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc",permalink:"/docs/unity/setup"}},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",children:[],level:2},{value:"\u067e\u06cc\u0634\u200c\u0646\u06cc\u0627\u0632\u0647\u0627",id:"\u067e\u06cc\u0634\u0646\u06cc\u0627\u0632\u0647\u0627",children:[{value:"Unity Engine",id:"unity-engine",children:[],level:4},{value:"Build tool",id:"build-tool",children:[],level:4},{value:"\u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627 \u062a\u0648\u0633\u0637 \u06af\u0631\u06cc\u062f\u0644",id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u0647\u0627-\u062a\u0648\u0633\u0637-\u06af\u0631\u06cc\u062f\u0644",children:[],level:4},{value:"Min SDK",id:"min-sdk",children:[],level:4},{value:"Android SDK",id:"android-sdk",children:[],level:4},{value:"\u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0644\u06cc\u062f Manifest",id:"\u0633\u0627\u062e\u062a-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646-\u062f\u0631-\u06a9\u0646\u0633\u0648\u0644-\u0648-\u062f\u0631\u06cc\u0627\u0641\u062a-\u06a9\u0644\u06cc\u062f-manifest",children:[],level:4},{value:"GooglePlay",id:"googleplay",children:[],level:4},{value:"MultiDex",id:"multidex",children:[],level:4}],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,i.kt)("p",null,"\u067e\u0644\u0627\u06af\u06cc\u0646\nUnity\n\u0645\u0634\u062a\u06a9\u0644 \u0627\u0632 \u062a\u0639\u062f\u0627\u062f\u06cc\ncsharp\n\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0627\u0633\u062a \u06a9\u0647 \u062a\u0639\u0627\u0645\u0644 \u0628\u0627 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u0646\u06cc\u062a\u06cc\u0648 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0633\u0647\u0648\u0644\u062a \u0628\u062e\u0634\u06cc\u062f\u0647\u200c\u0627\u0646\u062f. \u0644\u0630\u0627 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0648\u0634\u0647 \u0628\u062c\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\n",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidJavaObject")," \u06cc\u0627 ...\n\u0627\u0632 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627\u06cc \u0627\u0632 \u067e\u06cc\u0634 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u0631\u062f \u06a9\u0647 \u0628\u0647 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\u0647\u0627\u06cc \u06a9\u062f\u0646\u0648\u06cc\u0633\u06cc \u0628\u0631\u0627\u06cc\nUnity\n\u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631 \u0647\u0633\u062a\u0646\u062f."),(0,i.kt)("p",null,"\u067e\u0644\u0627\u06af\u06cc\u0646 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/googlesamples/unity-jar-resolver"},(0,i.kt)("strong",{parentName:"a"},"EDM4U")," (Unity Jar Resolver)"),"\n\u0627\u0642\u062f\u0627\u0645 \u0628\u0647 \u0633\u06cc\u0646\u06a9 \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627\u06cc \u0646\u06cc\u062a\u06cc\u0648 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06af\u0631\u06cc\u062f\u0644 \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f. \u0644\u0630\u0627 \u0646\u06cc\u0627\u0632\u06cc \u0628\u0647 \u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0631\u062f\u0646 \u062f\u0633\u062a\u06cc \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627\u06cc \u0646\u06cc\u062a\u06cc\u0648 \u0646\u06cc\u0632 \u0646\u062e\u0648\u0627\u0647\u06cc\u062f \u062f\u0627\u0634\u062a."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc Unity")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u067e\u0644\u0627\u06af\u06cc\u0646 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc ",(0,i.kt)("strong",{parentName:"p"},"Android")," \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0633\u062a."))),(0,i.kt)("h2",{id:"\u067e\u06cc\u0634\u0646\u06cc\u0627\u0632\u0647\u0627"},"\u067e\u06cc\u0634\u200c\u0646\u06cc\u0627\u0632\u0647\u0627"),(0,i.kt)("h4",{id:"unity-engine"},"Unity Engine"),(0,i.kt)("p",null,"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0627\u0632 \u0646\u0633\u062e\u0647\u200c\u06cc\n",(0,i.kt)("a",{parentName:"p",href:"https://unity3d.com/unity/qa/lts-releases"},(0,i.kt)("strong",{parentName:"a"},"LTS")),"\n\u0646\u0647\u0627\u06cc\u06cc \u0628\u0631\u0627\u06cc \u0637\u0631\u0627\u062d\u06cc \u0628\u0627\u0632\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0627\u0645\u0627 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u0645\u06a9\u0627\u0646 \u0627\u0631\u062a\u0642\u0627 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0634\u062a \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u062a\u0648\u0633\u0637 \u067e\u0648\u0634\u0647 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f (\u0639\u0628\u0627\u0631\u062a\n",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\n\u0628\u0647 \u0645\u0639\u0646\u06cc \u0647\u0631 \u0639\u062f\u062f\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f):"),(0,i.kt)("div",{dir:"ltr"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2019.4.x LTS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2018.4.x LTS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2017.4.x LTS"))," (\u0647\u0646\u06af\u0627\u0645 \u0641\u0639\u0627\u0644\u0633\u0627\u0632\u06cc \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u0627 \u0628\u0627\u06af \u06af\u0631\u06cc\u062f\u0644 \u0645\u0648\u0627\u062c\u0647 \u0634\u0648\u06cc\u062f)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2020.x"))," (\u062a\u0633\u062a \u0646\u0634\u062f\u0647)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"5.x"))," (\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06a9\u0633\u067e\u0648\u0631\u062a \u06a9\u0631\u062f\u0646 \u067e\u0631\u0648\u0698\u0647)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"4.7"))," (\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06a9\u0633\u067e\u0648\u0631\u062a \u06a9\u0631\u062f\u0646 \u067e\u0631\u0648\u0698\u0647)"))),(0,i.kt)("h4",{id:"build-tool"},"Build tool"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gradle"),"\n\u0627\u0628\u0632\u0627\u0631 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u06cc \u0628\u0631\u0627\u06cc \u0628\u06cc\u0644\u062f \u067e\u0631\u0648\u0698\u0647 \u0627\u0633\u062a (\u0637\u0628\u0642 \u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u0647\u200c\u0647\u0627 \u0627\u0628\u0632\u0627\u0631 \u0645\u0646\u0627\u0633\u0628\u200c\u062a\u0631\u06cc \u0646\u0633\u0628\u062a \u0628\u0647\n",(0,i.kt)("strong",{parentName:"p"},"Internal"),"\n\u0646\u06cc\u0632 \u0647\u0633\u062a)\u060c\n\u0627\u0645\u0627 \u0627\u0644\u0632\u0627\u0645\u06cc \u0628\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06af\u0631\u06cc\u062f\u0644 \u0646\u06cc\u0633\u062a (\u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u0627 \u0645\u0634\u06a9\u0644\nMultiDex\n\u0645\u0648\u0627\u062c\u0647 \u0646\u0634\u0648\u06cc\u062f)"),(0,i.kt)("h4",{id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u0647\u0627-\u062a\u0648\u0633\u0637-\u06af\u0631\u06cc\u062f\u0644"},"\u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627 \u062a\u0648\u0633\u0637 \u06af\u0631\u06cc\u062f\u0644"),(0,i.kt)("p",null,"\u062a\u0639\u062f\u0627\u062f \u0632\u06cc\u0627\u062f\u06cc \u0627\u0632 \u0633\u0631\u0648\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u06af\u0631\u06cc\u062f\u0644 \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u062a\u062d\u0631\u06cc\u0645 \u0647\u0633\u062a\u0646\u062f. \u0644\u0630\u0627 \u0628\u0627\u06cc\u0633\u062a\u06cc \u0627\u0628\u0632\u0627\u0631 \u06af\u0630\u0631 \u0627\u0632 \u062a\u062d\u0631\u06cc\u0645 \u0646\u06cc\u0632 \u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062f."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u062f\u0627\u0634\u062a\u0646\u200c \u0627\u0628\u0632\u0627\u0631 \u06af\u0630\u0631\u0627\u0632\u062a\u062d\u0631\u06cc\u0645 (\u0628\u0647 \u062f\u0644\u06cc\u0644 \u062a\u062d\u0631\u06cc\u0645\u200c\u0628\u0648\u062f\u0646 \u200cBintray)")),(0,i.kt)("h4",{id:"min-sdk"},"Min SDK"),(0,i.kt)("p",null,"\u067e\u0648\u0634\u0647 \u0628\u0631\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f\n",(0,i.kt)("strong",{parentName:"p"},"4.2")," (minSDK=17)\n\u0628\u0647 \u0628\u0627\u0644\u0627 \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0633\u062a."),(0,i.kt)("h4",{id:"android-sdk"},"Android SDK"),(0,i.kt)("p",null,"\u0644\u0627\u06cc\u0628\u0631\u0631\u06cc\u200c\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u0647\u0645\u06af\u0627\u0645 \u0628\u0627 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u067e\u06cc\u0634 \u0645\u06cc\u200c\u0631\u0648\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0648\u0634\u0647 \u0628\u0627\u06cc\u062f\nAndroid SDK\n\u0628\u0631\u0648\u0632 \u0628\u0627\u0634\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u0632\nJava8\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",(0,i.kt)("br",{parentName:"p"}),"\n","(\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0633\u062e\u0647\u200c\u06cc\nUnity\n\u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0648\u0632 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u06cc\u062f \u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0627\u0632\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/android-sdksetup.html"},"Android SDK"),"\n\u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u06cc\nUnity\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.)"),(0,i.kt)("h4",{id:"\u0633\u0627\u062e\u062a-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646-\u062f\u0631-\u06a9\u0646\u0633\u0648\u0644-\u0648-\u062f\u0631\u06cc\u0627\u0641\u062a-\u06a9\u0644\u06cc\u062f-manifest"},"\u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0644\u06cc\u062f Manifest"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0648\u0634\u0647 \u0628\u0627\u06cc\u0633\u062a\u06cc\n",(0,i.kt)("inlineCode",{parentName:"p"},"pushe_token"),"\n\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0647\u0646\u06af\u0627\u0645 \u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631\n",(0,i.kt)("a",{parentName:"p",href:"https://console.pushe.co"},(0,i.kt)("strong",{parentName:"a"},"\u06a9\u0646\u0633\u0648\u0644 \u067e\u0648\u0634\u0647")),"\n\u0642\u0627\u0628\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f.\n(",(0,i.kt)("a",{parentName:"p",href:"https://console.pushe.co"},(0,i.kt)("strong",{parentName:"a"},"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631")),")"),(0,i.kt)("h4",{id:"googleplay"},"GooglePlay"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u062f\u0633\u062a\u06af\u0627\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0634\u0645\u0627 \u0628\u062a\u0648\u0627\u0646\u062f \u067e\u0633 \u0627\u0632 \u0646\u0635\u0628 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0627 \u0633\u0631\u0648\u0631\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u06a9\u0631\u062f\u0647 \u0648 \u0627\u0639\u0644\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u062f \u0628\u0627\u06cc\u0633\u062a\u06cc \u06cc\u06a9\u06cc \u0627\u0632 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Google play service"),": \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u06af\u0648\u06af\u0644 \u0627\u0632 \u0622\u0646\u0647\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HMS Core"),": \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0647\u0648\u0627\u0648\u06cc \u0648 ... \u06a9\u0647\nGoogle play\n\u0646\u062f\u0627\u0631\u0646\u062f.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u0646\u06a9\u062a\u0647")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0648\u0634\u0647 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,i.kt)("strong",{parentName:"p"},"Hms Core")," \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0633\u0627\u062e\u062a \u0627\u067e \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0647\u0648\u0627\u0648\u06cc \u062f\u0627\u0631\u06cc\u062f.\n(",(0,i.kt)("a",{parentName:"p",href:"/docs/unity/hms/intro"},(0,i.kt)("strong",{parentName:"a"},"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631")),")"))),(0,i.kt)("h4",{id:"multidex"},"MultiDex"),(0,i.kt)("p",null,"\u062f\u0631 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u062f\u0631 \u0635\u0648\u0631\u062a \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u062f\u0646 \u0628\u06cc\u0634\u200c\u0627\u0632 \u062d\u062f \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc \u062e\u0637\u0627\u06cc\n",(0,i.kt)("strong",{parentName:"p"},"MultiDex"),"\n\u0631\u062e \u0645\u06cc\u200c\u062f\u0647\u062f. \u0628\u0627 \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u062f\u0646 \u067e\u0648\u0634\u0647 \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0631\u062e \u0645\u06cc\u200c\u062f\u0647\u062f \u0632\u06cc\u0631\u0627 \u067e\u0648\u0634\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc\nFirebase \u0648 Huawei\n\u0648 \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u200c\u0647\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0645\u062c\u0645\u0648\u0639 \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627 \u0628\u0647 \u062e\u0637\u0627\u06cc \u0645\u0627\u0644\u062a\u06cc\u200c\u062f\u06a9\u0633 \u0645\u0646\u062c\u0631 \u0645\u06cc\u200c\u0634\u0648\u062f.    "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Min SDK")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647\n",(0,i.kt)("strong",{parentName:"p"},"Min SDK"),"\n\u0631\u0627 \u0628\u0631\u0627\u0628\u0631\n",(0,i.kt)("strong",{parentName:"p"},"21"),"\n\u06cc\u0627 \u0628\u0627\u0644\u0627\u062a\u0631 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0628\u0627\u0634\u06cc\u062f \u0627\u06cc\u0646 \u062e\u0637\u0627 \u0631\u062e \u0646\u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f. \u0632\u06cc\u0631\u0627 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0631\u0627 \u0628\u0631\u0627\u06cc\nAPI=21\n\u062d\u0644 \u06a9\u0631\u062f\u0647\u200c\u0627\u0633\u062a. \u0627\u0645\u0627 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u0642\u0628\u0644 \u06a9\u0645\u0627\u06a9\u0627\u0646 \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0631\u0627 \u062f\u0627\u0631\u0646\u062f."))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0628\u0631\u0631\u0633\u06cc \u062a\u0645\u0627\u0645\u06cc \u0645\u0648\u0627\u0631\u062f\u060c \u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0646\u062d\u0648\u0647\u200c\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0648\u0634\u0647 \u062f\u0631\nUnity\n\u0628\u0647 \u0627\u062f\u0627\u0645\u0647\u200c\u06cc \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0628\u067e\u0631\u062f\u0627\u0632\u06cc\u062f."))}m.isMDXComponent=!0}}]);