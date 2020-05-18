/*! For license information please see b71bb487.a3930fb3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(9),o=(t(0),t(280)),i=t(284),c=t(283),u=t(289),l=t(285),s={},p={id:"mobile-api/codes/simple-notification",title:"simple-notification",description:"<Tabs",source:"@site/docs/mobile-api/codes/simple-notification.mdx",permalink:"/docs/mobile-api/codes/simple-notification"},b=[],f={rightToc:b};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{groupId:"language-codes",defaultValue:"1",values:u.a,mdxType:"Tabs"},Object(o.b)(c.a,{value:"1",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(o.b)(l.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{\n"app_ids": "YOUR_APP_ID", \n"data" :{"title":"\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646", "content":"\u0645\u062d\u062a\u0648\u0627\u06cc \u0627\u0639\u0644\u0627\u0646"}\n}\'\n'))),Object(o.b)(c.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",Object(o.b)("inlineCode",{parentName:"li"},"npm install axios"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),Object(o.b)(c.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),Object(o.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(o.b)(l.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",Object(o.b)("inlineCode",{parentName:"li"},"pip install requests"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),Object(o.b)(c.a,{value:"4",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/'); \n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'data' => 'title',\n        'content' => 'content'\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),Object(o.b)(c.a,{value:"5",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}d.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(d,c({ref:n},l,{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},281:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},282:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=a},283:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},284:function(e,n,t){"use strict";t(24),t(19),t(20);var r=t(0),a=t.n(r),o=t(282);var i=function(){return Object(r.useContext)(o.a)},c=t(281),u=t.n(c),l=t(131),s=t.n(l),p=37,b=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,c=e.values,l=e.groupId,f=i(),d=f.tabGroupChoices,O=f.setTabGroupChoices,m=Object(r.useState)(o),y=m[0],h=m[1];if(null!=l){var j=d[l];null!=j&&j!==y&&h(j)}var g=function(e){h(e),null!=l&&O(l,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:u()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===n,className:u()("tab-item",s.a.tabItem,{"tab-item--active":y===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(v,e.target,e)},onFocus:function(){return g(n)},onClick:function(){return g(n)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},285:function(e,n,t){"use strict";t(286);var r=t(0),a=t.n(r),o={paddingRight:"1px",paddingLeft:"1px"};n.a=function(e){return a.a.createElement("a",{style:o,href:e.link||e.href,target:"_blank"},e.children)}},286:function(e,n,t){"use strict";t(287)("link",(function(e){return function(n){return e(this,"a","href",n)}}))},287:function(e,n,t){var r=t(12),a=t(13),o=t(25),i=/"/g,c=function(e,n,t,r){var a=String(o(e)),c="<"+n;return""!==t&&(c+=" "+t+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(c),r(r.P+r.F*a((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",t)}},289:function(e,n,t){"use strict";n.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]}}]);