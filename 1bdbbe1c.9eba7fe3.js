(window.webpackJsonp=window.webpackJsonp||[]).push([[15,98],{218:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},220:function(e,n,t){"use strict";function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}},221:function(e,n,t){"use strict";var i=t(0),a=t.n(i);n.a=function(e){return a.a.createElement("div",null,e.children)}},222:function(e,n,t){"use strict";var i=t(0),a=Object(i.createContext)(void 0);n.a=a},223:function(e,n,t){"use strict";var i=t(0),a=t(222);n.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},224:function(e,n,t){"use strict";var i=t(0),a=t.n(i),r=t(223),o=t(220),c=t(51),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,b=e.groupId,d=Object(r.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,m=Object(i.useState)(c),j=m[0],v=m[1],_=Object(i.useState)(!1),y=_[0],h=_[1];if(null!=b){var g=f[b];null!=g&&g!==j&&p.some((function(e){return e.value===g}))&&v(g)}var N=function(e){v(e),null!=b&&O(b,e)},T=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},P=function(){h(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",P)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),w(e)},onFocus:function(){return N(n)},onClick:function(){N(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}},225:function(e,n,t){"use strict";var i=t(0),a=t.n(i),r={paddingRight:"1px",paddingLeft:"1px"};n.a=function(e){return a.a.createElement("a",{style:r,href:e.link||e.href,target:"_blank"},e.children)}},226:function(e,n,t){"use strict";n.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},53:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return f}));var i=t(2),a=t(6),r=(t(0),t(218)),o=t(224),c=t(221),l=t(226),s=t(225),u={},p={unversionedId:"web-api/codes/filtered-notification",id:"web-api/codes/filtered-notification",isDocsHomePage:!1,title:"filtered-notification",description:"<Tabs",source:"@site/docs/web-api/codes/filtered-notification.mdx",slug:"/web-api/codes/filtered-notification",permalink:"/docs/web-api/codes/filtered-notification",version:"current"},b=[],d={rightToc:b};function f(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(o.a,{groupId:"language-codes",defaultValue:"1",values:l.a,mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(r.b)(s.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{\n"app_ids": "YOUR_APP_ID", \n"filters": {\n    "device_id": ["device_id_1","device_id_3", "device_id_2", "device_id_4"]\n}, \n"data": {"title": "\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645", "content": "\u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u06cc\u0627\u0645"}\n}\'\n'))),Object(r.b)(c.a,{value:"2",mdxType:"TabItem"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(r.b)(s.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",Object(r.b)("inlineCode",{parentName:"li"},"npm install axios"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    },\n    filters: {\n        device_id: [\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        ],\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),Object(r.b)(c.a,{value:"3",mdxType:"TabItem"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),Object(r.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(r.b)(s.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",Object(r.b)("inlineCode",{parentName:"li"},"pip install requests"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    },\n    'filters': {\n        'device_id': [\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        ]\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),Object(r.b)(c.a,{value:"4",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/');\n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'title' => '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        'content' => '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    ),\n    'filters' => array(\n        'device_id' => array(\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        )\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),Object(r.b)(c.a,{value:"5",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n        "filters": map[string][]string{\n            "device_id": []string{\n                "device_id_1", \n                "device_id_2", \n                "device_id_3", \n                "device_id_4"\n            }\n        }\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}f.isMDXComponent=!0},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(2),a=t(6),r=(t(0),t(218)),o=t(53),c={id:"filtered-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},l={unversionedId:"web-api/filtered-notification",id:"web-api/filtered-notification",isDocsHomePage:!1,title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",source:"@site/docs/web-api/filtered-notification.md",slug:"/web-api/filtered-notification",permalink:"/docs/web-api/filtered-notification",version:"current",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",sidebar:"web-api",previous:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",permalink:"/docs/web-api/simple-notification"},next:{title:"\u0647\u0645\u0647 \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646",permalink:"/docs/web-api/notification-keys"}},s=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[]},{value:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 device_id",id:"\u062a\u0639\u0631\u06cc\u0641-\u0634\u0646\u0627\u0633\u0647-\u06cc\u06a9\u062a\u0627-device_id",children:[]},{value:"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[]},{value:"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[]},{value:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[]}],u={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631-\u0628\u0647-\u06a9\u0627\u0631\u0628\u0631\u0647\u0627\u06cc-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631(\u0647\u0627\u06cc) \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),Object(r.b)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),Object(r.b)("p",null,"\u06a9\u0627\u0631\u0628\u0631\u062f \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 (\u0639\u0646\u0648\u0627\u0646\u060c \u0645\u062a\u0646 \u0648 ...) \u0628\u0647 \u06cc\u06a9 \u0648 \u06cc\u0627 \u0628\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u0632 \u06a9\u0644 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u200c\u062a\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(r.b)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 ",Object(r.b)("inlineCode",{parentName:"p"},"device_id")," \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0631\u062f."),Object(r.b)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0634\u0646\u0627\u0633\u0647-\u06cc\u06a9\u062a\u0627-device_id"},"\u062a\u0639\u0631\u06cc\u0641 \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 device_id"),Object(r.b)("p",null,"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0645\u0642\u062f\u0627\u0631\u06cc \u0627\u0633\u062a \u06cc\u06a9\u062a\u0627 \u06a9\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0648\u0628\u200c\u067e\u0648\u0634 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0634\u0645\u0627 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u062f \u060c \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0642\u062f\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0646\u06cc\u062f."),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/webpush/unique-device-id"}),"\u0631\u0627\u0647\u0646\u0645\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 device_id")),Object(r.b)("h2",{id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),Object(r.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0648\u0628 \u200c\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u062f\u0631\u0633 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"https://api.pushe.co/v2/messaging/notifications/")),Object(r.b)("h2",{id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),Object(r.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 ",Object(r.b)("strong",{parentName:"p"},"\u062d\u062f\u0627\u0642\u0644 \u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f")," \u062a\u0627 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0635\u062d\u06cc\u062d \u0633\u0627\u062e\u062a\u0647 \u0648 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u0628\u0647 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"app_ids"),": \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0647 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"filters"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u0645\u0642\u062f\u0627\u0631 \u0641\u06cc\u0644\u062a\u0631 device_id \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"device_id")," \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647 string (\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc device_id)",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u06a9\u0647 \u0645\u0642\u0627\u062f\u06cc\u0631 (\u0645\u062d\u062a\u0648\u0627\u06cc) \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f.",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"content"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",Object(r.b)("br",{parentName:"li"}),"",Object(r.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"))))),Object(r.b)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),Object(r.b)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0628\u062e\u0634 ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/web-api/notification-keys"}),"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),Object(r.b)(o.default,{mdxType:"FilteredNotification"}))}p.isMDXComponent=!0}}]);