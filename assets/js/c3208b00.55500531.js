"use strict";(self.webpackChunkpdocs=self.webpackChunkpdocs||[]).push([[979,1340],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(3616),s=t(6010),u="tabItem_vU9c";function c(e){var n,t,i,o=e.lazy,c=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,p.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,T=y.setTabGroupChoices,O=(0,r.useState)(g),_=O[0],w=O[1],P=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=N[f];null!=E&&E!==_&&k.some((function(e){return e.value===E}))&&w(E)}var R=function(e){var n=e.currentTarget,t=P.indexOf(n),a=k[t].value;a!==_&&(x(n),w(a),null!=f&&T(f,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:R,onClick:R},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function d(e){var n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},7362:function(e,n,t){var a=t(7294),r={paddingRight:"1px",paddingLeft:"1px"};n.Z=function(e){return a.createElement("a",{style:r,href:e.link||e.href,target:"_blank"},e.children)}},1460:function(e,n){n.Z=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]},6620:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return v}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(6396),l=t(8215),p=t(1460),s=t(7362),u=["components"],c={},d=void 0,m={unversionedId:"web-api/codes/simple-notification",id:"web-api/codes/simple-notification",title:"simple-notification",description:"<Tabs",source:"@site/docs/web-api/codes/simple-notification.mdx",sourceDirName:"web-api/codes",slug:"/web-api/codes/simple-notification",permalink:"/docs/web-api/codes/simple-notification",tags:[],version:"current",frontMatter:{}},f=[],h={toc:f};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{groupId:"language-codes",defaultValue:"1",values:p.Z,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"1",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",(0,i.kt)(s.Z,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{"app_ids": "YOUR_APP_ID", "data" :{"title":"\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646", "content":"\u0645\u062d\u062a\u0648\u0627\u06cc \u0627\u0639\u0644\u0627\u0646"}}\'\n'))),(0,i.kt)(l.Z,{value:"2",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,i.kt)(s.Z,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",(0,i.kt)("inlineCode",{parentName:"li"},"npm install axios"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),(0,i.kt)(l.Z,{value:"3",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),(0,i.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",(0,i.kt)(s.Z,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",(0,i.kt)("inlineCode",{parentName:"li"},"pip install requests"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),(0,i.kt)(l.Z,{value:"4",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/');\n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'title' => '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        'content' => '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),(0,i.kt)(l.Z,{value:"5",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}v.isMDXComponent=!0},2050:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(6620),l=["components"],p={id:"simple-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647"},s="\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u0628\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",u={unversionedId:"web-api/simple-notification",id:"web-api/simple-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",source:"@site/docs/web-api/simple-notification.md",sourceDirName:"web-api",slug:"/web-api/simple-notification",permalink:"/docs/web-api/simple-notification",tags:[],version:"current",frontMatter:{id:"simple-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647"},sidebar:"mobile-api",previous:{title:"\u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",permalink:"/docs/web-api/get-app-id"},next:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",permalink:"/docs/web-api/filtered-notification"}},c=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647",children:[],level:2},{value:"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[],level:2},{value:"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647",children:[],level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647",id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647-\u0628\u0647-\u062a\u0645\u0627\u0645\u06cc-\u06a9\u0627\u0631\u0628\u0631\u0627\u0646-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u0628\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),(0,i.kt)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647"},"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647"),(0,i.kt)("p",null,"\u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u062d\u062a\u0648\u0627 (\u0639\u0646\u0648\u0627\u0646\u060c \u0645\u062a\u0646\u060c \u0622\u06cc\u06a9\u0646 \u0648 ...) \u0628\u0647\n",(0,i.kt)("strong",{parentName:"p"},"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a"),"\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,i.kt)("a",{parentName:"p",href:"/docs/web-api/get-app-id"},"\u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),"\n(",(0,i.kt)("strong",{parentName:"p"},"\u200d\u200dapp_id"),")\n\u06a9\u0647 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u067e\u0648\u0634\u0647 \u0642\u0627\u0628\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u062a\u0645\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u200c\u062a\u0627\u0646 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/web-api/get-app-id"},"\u0645\u0634\u0627\u0647\u062f\u0647 \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646")),(0,i.kt)("h2",{id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u0648\u0628 \u200c\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u062f\u0631\u0633 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.pushe.co/v2/messaging/notifications/")),(0,i.kt)("h2",{id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647"},"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 ",(0,i.kt)("strong",{parentName:"p"},"\u062d\u062f\u0627\u0642\u0644 \u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f")," \u062a\u0627 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0635\u062d\u06cc\u062d \u0633\u0627\u062e\u062a\u0647 \u0648 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u0628\u0647 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"app_ids"),": \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0647 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u06a9\u0647 \u0645\u0642\u0627\u062f\u06cc\u0631 (\u0645\u062d\u062a\u0648\u0627\u06cc) \u0627\u0639\u0644\u0627\u0646 \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"content"),": \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 ",(0,i.kt)("a",{parentName:"p",href:"/docs/web-api/notification-keys"},"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."))),(0,i.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0633\u0627\u062f\u0647"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647"),(0,i.kt)("p",null,"\u062f\u0631 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u062d\u062f\u0627\u0642\u0644 \u06a9\u062f \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u062f\u0631 \u0632\u0628\u0627\u0646 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0628\u0627 \u0639\u0646\u0648\u0627\u0646 \u0648 \u0645\u062a\u0646 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647.\n\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0647 \u0628\u062e\u0634 ",(0,i.kt)("a",{parentName:"p",href:"/docs/web-api/notification-keys"},"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,i.kt)(o.default,{mdxType:"SimpleNotificationTabs"}))}m.isMDXComponent=!0}}]);