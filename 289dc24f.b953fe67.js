(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(f,u(u({ref:t},l),{},{components:n})):r.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},221:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},222:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},223:function(e,t,n){"use strict";var a=n(0),r=n(222);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},224:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(223),c=n(220),u=n(51),i=n.n(u),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,u=e.defaultValue,p=e.values,b=e.groupId,m=Object(o.a)(),f=m.tabGroupChoices,d=m.setTabGroupChoices,O=Object(a.useState)(u),y=O[0],j=O[1],h=Object(a.useState)(!1),v=h[0],g=h[1];if(null!=b){var T=f[b];null!=T&&T!==y&&p.some((function(e){return e.value===T}))&&j(T)}var w=function(e){j(e),null!=b&&d(b,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},E=function(){g(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",E)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o={paddingRight:"1px",paddingLeft:"1px"};t.a=function(e){return r.a.createElement("a",{style:o,href:e.link||e.href,target:"_blank"},e.children)}},226:function(e,t,n){"use strict";t.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(2),r=n(6),o=(n(0),n(218)),c=n(224),u=n(221),i=n(226),l=n(225),s={},p={unversionedId:"mobile-api/codes/how-use-auth_key",id:"mobile-api/codes/how-use-auth_key",isDocsHomePage:!1,title:"how-use-auth_key",description:"<Tabs",source:"@site/docs/mobile-api/codes/how-use-auth_key.mdx",slug:"/mobile-api/codes/how-use-auth_key",permalink:"/docs/mobile-api/codes/how-use-auth_key",version:"current"},b=[],m={rightToc:b};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{groupId:"language-codes",defaultValue:"1",values:i.a,mdxType:"Tabs"},Object(o.b)(u.a,{value:"1",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(o.b)(l.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{2}","{2}":!0}),"curl -X POST some url to call\\ \n     -H 'authorization: Token YOUR_AUTH_KEY'\\ \n     -H 'content-type: application/json'\\\n     -d 'your data'\n"))),Object(o.b)(u.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637\n",Object(o.b)("inlineCode",{parentName:"li"},"npm i axios")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{9}","{9}":!0}),"const axios = require('axios');\n\nconst YOUR_AUTH_KEY = 'put your auth key here ...';\n\nconst url = 'some endpoint to call ...';\n\nconst options = {\n    headers: {\n        'Authorization': Token YOUR_AUTH_KEY,\n        'Content-Type': 'application/json'\n    }\n}\n\nconst data = {} // Some data to post \n\naxios.post(url, data, options);\n"))),Object(o.b)(u.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631\n",Object(o.b)("inlineCode",{parentName:"li"},"pip install requests")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{9}","{9}":!0}),"import requests\n\nYOUR_AUTH_KEY = 'put your auth key here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = 'some endpoint to call ...'\n\nheaders = {\n    'Authorization': f'Token {YOUR_AUTH_KEY}',\n    'Content-Type': 'application/json'\n}\n\ndata = {} // some data to post\n\nr = requests.post(url, data=data, headers=headers)\n"))),Object(o.b)(u.a,{value:"4",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php",metastring:"{10}","{10}":!0}),"$YOUR_AUTH_KEY = 'put your auth key here ...';\n\n$url = 'some endpoint to call ...';\n\n$ch = curl_init($url);\n\ncurl_setopt($ch, CURLOPT_HTTPHEADER, \n    array(\n        \"Content-Type: application/json\", \n        \"Authorization: Token \" . $YOUR_AUTH_KEY\n    ),\n);\n\n"))),Object(o.b)(u.a,{value:"5",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go",metastring:"{8}","{8}":!0}),'package main\n\nimport "net/http"\n\nfunc main() {\n    url := "some endpoint to call ..."\n\n    client := &http.Client{}\n\n    req, err := http.NewRequest("GET", url, nil)\n    req.Headers.Set("Content-Type", "application/json")\n    req.Headers.Set("Authorization", "Token YOUR_TOKEN")    \n\n    resp, err := client.Do(req)\n}\n\n')))))}f.isMDXComponent=!0}}]);