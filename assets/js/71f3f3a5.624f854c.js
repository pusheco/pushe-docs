"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[7494],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),o=t(2389),l=t(9443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3616),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,o,l=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=y[0])?void 0:o.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),O=g.tabGroupChoices,T=g.setTabGroupChoices,_=(0,a.useState)(k),P=_[0],N=_[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=O[f];null!=R&&R!==P&&h.some((function(e){return e.value===R}))&&N(R)}var w=function(e){var n=e.currentTarget,t=E.indexOf(n),r=h[t].value;r!==P&&(x(n),N(r),null!=f&&T(f,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:w,onClick:w},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function d(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},7362:function(e,n,t){var r=t(7294),a={paddingRight:"1px",paddingLeft:"1px"};n.Z=function(e){return r.createElement("a",{style:a,href:e.link||e.href,target:"_blank"},e.children)}},1460:function(e,n){n.Z=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},5077:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return y}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(6396),u=t(8215),i=t(1460),s=t(7362),c=["components"],p={},d=void 0,m={unversionedId:"mobile-api/codes/custom-content-notification",id:"mobile-api/codes/custom-content-notification",title:"custom-content-notification",description:"<Tabs",source:"@site/docs/mobile-api/codes/custom-content-notification.mdx",sourceDirName:"mobile-api/codes",slug:"/mobile-api/codes/custom-content-notification",permalink:"/docs/mobile-api/codes/custom-content-notification",tags:[],version:"current",frontMatter:{}},f=[],v={toc:f};function y(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{groupId:"language-codes",defaultValue:"1",values:i.Z,mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"1",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",(0,o.kt)(s.Z,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{"app_ids": "YOUR_APP_ID", "custom_content": {"key1": "Value1","Key2": "Value2"}}\'\n'))),(0,o.kt)(u.Z,{value:"2",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,o.kt)(s.Z,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",(0,o.kt)("inlineCode",{parentName:"li"},"npm install axios"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    custom_content: {\n        key1: \"value1\",\n        key2: \"value2\"\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),(0,o.kt)(u.Z,{value:"3",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),(0,o.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,o.kt)(s.Z,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",(0,o.kt)("inlineCode",{parentName:"li"},"pip install requests"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'custom_content': {\n        'key1': 'value1',\n        'key2': 'value2'\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),(0,o.kt)(u.Z,{value:"4",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/'); \n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'custom_content' => array(\n        'key1' => 'value1',\n        'key2' => 'value2'\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),(0,o.kt)(u.Z,{value:"5",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "custom_content": map[string]string{\n            "key1": "value1",\n            "key2": "value2",\n        }\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}y.isMDXComponent=!0}}]);