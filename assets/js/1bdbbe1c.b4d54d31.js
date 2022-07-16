"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[6087,1421],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),l=t(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(3616),s=t(6010),u="tabItem_vU9c";function c(e){var n,t,i,l=e.lazy,c=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,p.lx)(N,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!N.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=o(),b=_.tabGroupChoices,y=_.setTabGroupChoices,T=(0,r.useState)(g),O=T[0],w=T[1],P=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=b[f];null!=E&&E!==O&&N.some((function(e){return e.value===E}))&&w(E)}var C=function(e){var n=e.currentTarget,t=P.indexOf(n),a=N[t].value;a!==O&&(x(n),w(a),null!=f&&y(f,a))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},k)},N.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return P.push(e)},onKeyDown:R,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},7362:function(e,n,t){var a=t(7294),r={paddingRight:"1px",paddingLeft:"1px"};n.Z=function(e){return a.createElement("a",{style:r,href:e.link||e.href,target:"_blank"},e.children)}},1460:function(e,n){n.Z=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},9512:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return v}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(6396),o=t(8215),p=t(1460),s=t(7362),u=["components"],c={},d=void 0,m={unversionedId:"web-api/codes/filtered-notification",id:"web-api/codes/filtered-notification",title:"filtered-notification",description:"<Tabs",source:"@site/docs/web-api/codes/filtered-notification.mdx",sourceDirName:"web-api/codes",slug:"/web-api/codes/filtered-notification",permalink:"/docs/web-api/codes/filtered-notification",tags:[],version:"current",frontMatter:{}},f=[],k={toc:f};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{groupId:"language-codes",defaultValue:"1",values:p.Z,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"1",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",(0,i.kt)(s.Z,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{\n"app_ids": "YOUR_APP_ID", \n"filters": {\n    "device_id": ["device_id_1","device_id_3", "device_id_2", "device_id_4"]\n}, \n"data": {"title": "\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645", "content": "\u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u06cc\u0627\u0645"}\n}\'\n'))),(0,i.kt)(o.Z,{value:"2",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,i.kt)(s.Z,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",(0,i.kt)("inlineCode",{parentName:"li"},"npm install axios"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    },\n    filters: {\n        device_id: [\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        ],\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),(0,i.kt)(o.Z,{value:"3",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,i.kt)(s.Z,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",(0,i.kt)("inlineCode",{parentName:"li"},"pip install requests"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    },\n    'filters': {\n        'device_id': [\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        ]\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),(0,i.kt)(o.Z,{value:"4",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/');\n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'title' => '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        'content' => '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    ),\n    'filters' => array(\n        'device_id' => array(\n            'device_id_1', \n            'device_id_2', \n            'device_id_3', \n            'device_id_4'\n        )\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),(0,i.kt)(o.Z,{value:"5",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n        "filters": map[string][]string{\n            "device_id": []string{\n                "device_id_1", \n                "device_id_2", \n                "device_id_3", \n                "device_id_4"\n            }\n        }\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}v.isMDXComponent=!0},4476:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var a,r=t(7462),i=t(3366),l=(t(7294),t(3905)),o=t(9512),p=["components"],s={id:"filtered-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},u="\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631(\u0647\u0627\u06cc) \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",c={unversionedId:"web-api/filtered-notification",id:"web-api/filtered-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",source:"@site/docs/web-api/filtered-notification.md",sourceDirName:"web-api",slug:"/web-api/filtered-notification",permalink:"/docs/web-api/filtered-notification",tags:[],version:"current",frontMatter:{id:"filtered-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},sidebar:"mobile-api",previous:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",permalink:"/docs/web-api/simple-notification"},next:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0631\u0627\u06a9\u0646\u0634\u06cc",permalink:"/docs/web-api/transactional-notification"}},d=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[],level:2},{value:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u062a\u0639\u0631\u06cc\u0641-\u0634\u0646\u0627\u0633\u0647\u0647\u0627\u06cc-\u06cc\u06a9\u062a\u0627-\u062f\u0631-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[],level:2},{value:"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[],level:2},{value:"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[],level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[],level:2}],m=(a="Platforms",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:d};function k(e){var n=e.components,t=(0,i.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631-\u0628\u0647-\u06a9\u0627\u0631\u0628\u0631\u0647\u0627\u06cc-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631(\u0647\u0627\u06cc) \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),(0,l.kt)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),(0,l.kt)("p",null,"\u06a9\u0627\u0631\u0628\u0631\u062f \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 (\u0639\u0646\u0648\u0627\u0646\u060c \u0645\u062a\u0646 \u0648 ...) \u0628\u0647 \u06cc\u06a9 \u0648 \u06cc\u0627 \u0628\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u0632 \u06a9\u0644 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u200c\u062a\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,l.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0631\u062f."),(0,l.kt)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0634\u0646\u0627\u0633\u0647\u0647\u0627\u06cc-\u06cc\u06a9\u062a\u0627-\u062f\u0631-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u062a\u0639\u0631\u06cc\u0641 \u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),(0,l.kt)("p",null,"\u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u0645\u0642\u0627\u062f\u06cc\u0631\u06cc \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0637\u0631\u06cc\u0642 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u067e\u0648\u0634\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f.\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631(\u0647\u0627\u06cc) \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 device_id:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u0645\u0642\u062f\u0627\u0631\u06cc \u0627\u0633\u062a \u06cc\u06a9\u062a\u0627 \u06a9\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0648\u0628\u200c\u067e\u0648\u0634 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0634\u0645\u0627 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u062f\u060c \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0642\u062f\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/webpush/unique-device-id"},"\u0631\u0627\u0647\u0646\u0645\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 device_id")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 phone_number:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u06a9\u0627\u0631\u0628\u0631"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u0642\u062f\u0627\u0631:"),"\n\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647\u200c\u200c\u0647\u0627"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u062b\u0627\u0644:"),(0,l.kt)("inlineCode",{parentName:"li"},'["09*********", "09*********"]')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/webpush/unique-device-id"}," \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u062a\u062e\u0635\u06cc\u0635 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u062f\u0631 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u067e\u0648\u0634\u0647  ")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 email:",(0,l.kt)(m,{android:!0,mdxType:"Platforms"}))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0627\u0631\u0628\u0631"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u0642\u062f\u0627\u0631:"),"\n\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647\u200c\u200c\u0647\u0627"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u062b\u0627\u0644:"),(0,l.kt)("inlineCode",{parentName:"li"},'["user1@pushe.co", "user1@gmail.com"]')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/webpush/unique-device-id"}," \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u062a\u062e\u0635\u06cc\u0635 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u062f\u0631 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u067e\u0648\u0634\u0647  ")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 custom_id:",(0,l.kt)(m,{android:!0,mdxType:"Platforms"}))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0647\u0631 \u0639\u0628\u0627\u0631\u062a \u062f\u0644\u062e\u0648\u0627\u0647\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0634\u0646\u0627\u0633\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u0642\u062f\u0627\u0631:"),"\n\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647\u200c\u200c\u0647\u0627"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0645\u062b\u0627\u0644:"),(0,l.kt)("inlineCode",{parentName:"li"},'["custom_id1", "custom_id2"]')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/webpush/unique-device-id"}," \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u062a\u062e\u0635\u06cc\u0635 \u0627\u06cc\u0646 \u0634\u0646\u0627\u0633\u0647 \u062f\u0631 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u067e\u0648\u0634\u0647  "))))),(0,l.kt)("h2",{id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0648\u0628 \u200c\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u062f\u0631\u0633 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"https://api.pushe.co/v2/messaging/notifications/")),(0,l.kt)("h2",{id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 ",(0,l.kt)("strong",{parentName:"p"},"\u062d\u062f\u0627\u0642\u0644 \u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f")," \u062a\u0627 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0635\u062d\u06cc\u062d \u0633\u0627\u062e\u062a\u0647 \u0648 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u0628\u0647 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"app_ids"),": \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0647 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"filters"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u0645\u0642\u062f\u0627\u0631 \u0641\u06cc\u0644\u062a\u0631 device_id \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"device_id")," \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647 string (\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc device_id)     "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"phone_number")," \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647 string (\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc device_id)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"email")," \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647 string (\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc device_id)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"custom_id")," \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0631\u0634\u062a\u0647 string (\u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc device_id)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u06a9\u0647 \u0645\u0642\u0627\u062f\u06cc\u0631 (\u0645\u062d\u062a\u0648\u0627\u06cc) \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f.",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"content"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"))))),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,l.kt)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647 \u0645\u0647\u0645"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u062f\u0631 \u06a9\u0644\u06cc\u062f ",(0,l.kt)("inlineCode",{parentName:"p"},"filters")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0634\u0646\u0627\u0633\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a."))),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,l.kt)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647 \u0645\u0647\u0645"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u067e\u0648\u0634\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627\u06cc \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f."))),(0,l.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0628\u062e\u0634 ",(0,l.kt)("a",{parentName:"p",href:"/docs/web-api/notification-keys"},"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)(o.default,{mdxType:"FilteredNotification"}))}k.isMDXComponent=!0}}]);