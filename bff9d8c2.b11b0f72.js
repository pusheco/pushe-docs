(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(248)),c=n(252),l=n(253),i=n(256),u=n(254),s={},p={id:"web-api/codes/how-use-auth_key",isDocsHomePage:!1,title:"how-use-auth_key",description:"<Tabs",source:"@site/docs/web-api/codes/how-use-auth_key.mdx",permalink:"/docs/web-api/codes/how-use-auth_key"},b=[],m={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{groupId:"language-codes",defaultValue:"1",values:i.a,mdxType:"Tabs"},Object(o.b)(l.a,{value:"1",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(o.b)(u.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{9}","{9}":!0}),"curl -X POST some url to call ... \\\n-H 'authorization: Token YOUR_AUTH_KEY' \\\n-H 'content-type: application/json' \\\n-d 'your data'\n"))),Object(o.b)(l.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(u.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637\n",Object(o.b)("inlineCode",{parentName:"li"},"npm i axios")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{9}","{9}":!0}),"const axios = require('axios');\n\nconst YOUR_AUTH_KEY = 'put your auth key here ...';\n\nconst url = 'some endpoint to call ...';\n\nconst options = {\n    headers: {\n        'Authorization': Token YOUR_AUTH_KEY,\n        'Content-Type': 'application/json'\n    }\n}\n\nconst data = {} // Some data to post \n\naxios.post(url, data, options);\n"))),Object(o.b)(l.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(u.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631\n",Object(o.b)("inlineCode",{parentName:"li"},"pip install requests")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{9}","{9}":!0}),"import requests\n\nYOUR_AUTH_KEY = 'put your auth key here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = 'some endpoint to call ...'\n\nheaders = {\n    'Authorization': f'Token {YOUR_AUTH_KEY}',\n    'Content-Type': 'application/json'\n}\n\ndata = {} // some data to post\n\nr = requests.post(url, data=data, headers=headers)\n"))),Object(o.b)(l.a,{value:"4",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php",metastring:"{10}","{10}":!0}),"$YOUR_AUTH_KEY = 'put your auth key here ...';\n\n$url = 'some endpoint to call ...';\n\n$ch = curl_init($url);\n\ncurl_setopt($ch, CURLOPT_HTTPHEADER, \n    array(\n        \"Content-Type: application/json\", \n        \"Authorization: Token \" . $YOUR_AUTH_KEY\n    ),\n);\n\n"))),Object(o.b)(l.a,{value:"5",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go",metastring:"{8}","{8}":!0}),'package main\n\nimport "net/http"\n\nfunc main() {\n    url := "some endpoint to call ..."\n\n    client := &http.Client{}\n\n    req, err := http.NewRequest("GET", url, nil)\n    req.Headers.Set("Content-Type", "application/json")\n    req.Headers.Set("Authorization", "Token YOUR_TOKEN")    \n\n    resp, err := client.Do(req)\n}\n\n')))))}d.isMDXComponent=!0},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,l(l({ref:t},u),{},{components:n})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},249:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},250:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},251:function(e,t,n){"use strict";var a=n(0),r=n(250);t.a=function(){return Object(a.useContext)(r.a)}},252:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(251),c=n(249),l=n(92),i=n.n(l);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[O,f]=Object(a.useState)(l);if(null!=b){const e=m[b];null!=e&&e!==O&&p.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=b&&d(b,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},253:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},254:function(e,t,n){"use strict";var a=n(0),r=n.n(a);const o={paddingRight:"1px",paddingLeft:"1px"};t.a=e=>r.a.createElement("a",{style:o,href:e.link||e.href,target:"_blank"},e.children)},256:function(e,t,n){"use strict";t.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]}}]);