(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{246:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,O=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?r.a.createElement(O,c(c({ref:n},l),{},{components:t})):r.a.createElement(O,c({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},247:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},248:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});n.a=r},249:function(e,n,t){"use strict";var a=t(0),r=t(248);n.a=function(){return Object(a.useContext)(r.a)}},250:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(249),i=t(247),c=t(92),s=t.n(c);const l=37,p=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:u,groupId:d}=e,{tabGroupChoices:b,setTabGroupChoices:O}=Object(o.a)(),[m,f]=Object(a.useState)(c);if(null!=d){const e=b[d];null!=e&&e!==m&&u.some(n=>n.value===e)&&f(e)}const y=e=>{f(e),null!=d&&O(d,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},u.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>_.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(_,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===m)[0]))}},251:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},252:function(e,n,t){"use strict";var a=t(0),r=t.n(a);const o={paddingRight:"1px",paddingLeft:"1px"};n.a=e=>r.a.createElement("a",{style:o,href:e.link||e.href,target:"_blank"},e.children)},254:function(e,n,t){"use strict";n.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return O}));var a=t(2),r=t(6),o=(t(0),t(246)),i=t(250),c=t(251),s=t(254),l=t(252),p={},u={id:"mobile-api/codes/transactional-notification",isDocsHomePage:!1,title:"transactional-notification",description:"<Tabs",source:"@site/docs/mobile-api/codes/transactional-notification.mdx",permalink:"/docs/mobile-api/codes/transactional-notification"},d=[],b={rightToc:d};function O(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{groupId:"language-codes",defaultValue:"1",values:s.a,mdxType:"Tabs"},Object(o.b)(c.a,{value:"1",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(o.b)(l.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST https://api.pushe.co/v2/messaging/rapid/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{\n"app_id": "YOUR_APP_ID", \n"filters": {\n    "device_id": ["device_id_1","device_id_3", "device_id_2", "device_id_4"]\n}, \n"data": {"title": "\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645", "content": "\u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u06cc\u0627\u0645"}}\'\n'))),Object(o.b)(c.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",Object(o.b)("inlineCode",{parentName:"li"},"npm install axios"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/rapid/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    },\n    device_id: [\n        'device_id_1', \n        'device_id_2', \n    ]\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),Object(o.b)(c.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",Object(o.b)("inlineCode",{parentName:"li"},"pip install requests"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/rapid/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    },\n    'device_id': [\n        'device_id_1', \n        'device_id_2', \n    ]\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),Object(o.b)(c.a,{value:"4",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/rapid/'); \n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'title' => '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        'content' => '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    ),\n    'device_id' => array(\n        'device_id_1', \n        'device_id_2'\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),Object(o.b)(c.a,{value:"5",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/rapid/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n        "device_id": []string{\n            "device_id_1", \n            "device_id_2", \n        }\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}O.isMDXComponent=!0}}]);