"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[4480],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),o=t(2389),l=t(9443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3616),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,o,l=e.lazy,p=e.block,m=e.defaultValue,d=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),T=g.tabGroupChoices,O=g.setTabGroupChoices,w=(0,a.useState)(k),E=w[0],N=w[1],x=[],_=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=T[f];null!=j&&j!==E&&y.some((function(e){return e.value===j}))&&N(j)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),r=y[t].value;r!==E&&(_(n),N(r),null!=f&&O(f,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},7362:function(e,n,t){var r=t(7294),a={paddingRight:"1px",paddingLeft:"1px"};n.Z=function(e){return r.createElement("a",{style:a,href:e.link||e.href,target:"_blank"},e.children)}},1460:function(e,n){n.Z=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},8784:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return f},default:function(){return h}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(6396),u=t(8215),i=t(1460),s=t(7362),c=["components"],p={},m=void 0,d={unversionedId:"mobile-api/codes/how-use-auth_key",id:"mobile-api/codes/how-use-auth_key",title:"how-use-auth_key",description:"<Tabs",source:"@site/docs/mobile-api/codes/how-use-auth_key.mdx",sourceDirName:"mobile-api/codes",slug:"/mobile-api/codes/how-use-auth_key",permalink:"/docs/mobile-api/codes/how-use-auth_key",tags:[],version:"current",frontMatter:{}},f=[],v={toc:f};function h(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{groupId:"language-codes",defaultValue:"1",values:i.Z,mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"1",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",(0,o.kt)(s.Z,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"curl -X POST some url to call\\ \n     -H 'authorization: Token YOUR_AUTH_KEY'\\ \n     -H 'content-type: application/json'\\\n     -d 'your data'\n"))),(0,o.kt)(u.Z,{value:"2",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 \u067e\u06a9\u06cc\u062c ",(0,o.kt)(s.Z,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637\n",(0,o.kt)("inlineCode",{parentName:"li"},"npm i axios")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"const axios = require('axios');\n\nconst YOUR_AUTH_KEY = 'put your auth key here ...';\n\nconst url = 'some endpoint to call ...';\n\nconst options = {\n    headers: {\n        'Authorization': Token YOUR_AUTH_KEY,\n        'Content-Type': 'application/json'\n    }\n}\n\nconst data = {} // Some data to post \n\naxios.post(url, data, options);\n"))),(0,o.kt)(u.Z,{value:"3",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c ",(0,o.kt)(s.Z,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631\n",(0,o.kt)("inlineCode",{parentName:"li"},"pip install requests")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{9}","{9}":!0},"import requests\n\nYOUR_AUTH_KEY = 'put your auth key here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = 'some endpoint to call ...'\n\nheaders = {\n    'Authorization': f'Token {YOUR_AUTH_KEY}',\n    'Content-Type': 'application/json'\n}\n\ndata = {} // some data to post\n\nr = requests.post(url, data=data, headers=headers)\n"))),(0,o.kt)(u.Z,{value:"4",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:"{10}","{10}":!0},"$YOUR_AUTH_KEY = 'put your auth key here ...';\n\n$url = 'some endpoint to call ...';\n\n$ch = curl_init($url);\n\ncurl_setopt($ch, CURLOPT_HTTPHEADER, \n    array(\n        \"Content-Type: application/json\", \n        \"Authorization: Token \" . $YOUR_AUTH_KEY\n    ),\n);\n\n"))),(0,o.kt)(u.Z,{value:"5",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{8}","{8}":!0},'package main\n\nimport "net/http"\n\nfunc main() {\n    url := "some endpoint to call ..."\n\n    client := &http.Client{}\n\n    req, err := http.NewRequest("GET", url, nil)\n    req.Headers.Set("Content-Type", "application/json")\n    req.Headers.Set("Authorization", "Token YOUR_TOKEN")    \n\n    resp, err := client.Do(req)\n}\n\n')))))}h.isMDXComponent=!0}}]);