/*! For license information please see d1ba7282.5e0e8b99.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[125,65],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(285)),o=n(289),c=n(288),s=n(294),l=n(290),p={},b={id:"mobile-api/codes/custom-content-notification",title:"custom-content-notification",description:"<Tabs",source:"@site/docs/mobile-api/codes/custom-content-notification.mdx",permalink:"/docs/mobile-api/codes/custom-content-notification"},u=[],m={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{groupId:"language-codes",defaultValue:"1",values:s.a,mdxType:"Tabs"},Object(i.b)(c.a,{value:"1",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(i.b)(l.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(i.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{"app_ids": "YOUR_APP_ID", "custom_content": {"key1": "Value1","Key2": "Value2"}}\'\n'))),Object(i.b)(c.a,{value:"2",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(i.b)(l.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",Object(i.b)("inlineCode",{parentName:"li"},"npm install axios"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    custom_content: {\n        key1: \"value1\",\n        key2: \"value2\"\n    }\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),Object(i.b)(c.a,{value:"3",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(i.b)(l.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",Object(i.b)("inlineCode",{parentName:"li"},"pip install requests"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'custom_content': {\n        'key1': 'value1',\n        'key2': 'value2'\n    }\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),Object(i.b)(c.a,{value:"4",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/'); \n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'custom_content' => array(\n        'key1' => 'value1',\n        'key2' => 'value2'\n    )\n)));\n\n$result = curl_exec($ch);\n \ncurl_close($ch);\n\necho $result;\n"))),Object(i.b)(c.a,{value:"5",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "custom_content": map[string]string{\n            "key1": "value1",\n            "key2": "value2",\n        }\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}d.isMDXComponent=!0},260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(285)),o=n(139),c={id:"custom-content-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647"},s={id:"mobile-api/custom-content-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",source:"@site/docs/mobile-api/custom-content-notification.md",permalink:"/docs/mobile-api/custom-content-notification",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",sidebar:"mobile-api",previous:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0631\u0627\u06a9\u0646\u0634\u06cc",permalink:"/docs/mobile-api/transactional-notification"},next:{title:"\u0647\u0645\u0647 \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646",permalink:"/docs/mobile-api/notification-keys"}},l=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647",id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647",children:[]},{value:"\u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f\u0647 \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647-\u0641\u0631\u0633\u062a\u0627\u062f\u0647-\u0634\u062f\u0647-\u062f\u0631-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",children:[]},{value:"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[]},{value:"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647",id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627-\u062f\u0644\u062e\u0648\u0627\u0647",children:[]},{value:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647",id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627-\u062f\u0644\u062e\u0648\u0627\u0647"},"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647"),Object(i.b)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647"},"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647"),Object(i.b)("p",null,"\u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0647 \u0634\u06a9\u0644 ",Object(i.b)("strong",{parentName:"p"},"json")," \u0628\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\n\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u062d\u062a\u0648\u0627\u06cc (\u0639\u0646\u0648\u0627\u0646\u060c \u0645\u062a\u0646\u060c \u0622\u06cc\u06a9\u0646\u060c \u0639\u06a9\u0633 \u0648 ...) \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0639\u0644\u0627\u0646\u06cc \u0628\u062f\u0648\u0646 \u0646\u0645\u0627\u06cc\u0634 \u0645\u062d\u062a\u0648\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f."),Object(i.b)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0631\u0627\u06cc\u062c \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0648 \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u200c\u062a\u0627\u0646 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(i.b)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0627\u0632 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc \u06cc\u06a9\u062a\u0627 \u0648 \u0641\u06cc\u0644\u062a\u0631\u200c\u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646 \u06a9\u0647 \u062f\u0631 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile-api/filtered-notification"}),"\u0642\u0633\u0645\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631")," \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0634\u062f \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc \u0641\u06cc\u0644\u062a\u0631 \u0648 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f\u0646 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0627\u0639\u0644\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),Object(i.b)("h2",{id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647-\u0641\u0631\u0633\u062a\u0627\u062f\u0647-\u0634\u062f\u0647-\u062f\u0631-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f\u0647 \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u062d\u0648\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u0642\u062f\u0627\u0631 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u062f\u0631 \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u0628\u0647\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/android-studio/notification-listener"}),"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0627\u0633\u062a\u0648\u062f\u06cc\u0648")," \u060c\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/flutter/listener"}),"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0641\u0644\u0627\u062a\u0631")," \u060c\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/unity/listener"}),"\u0631\u0627\u0647\u0646\u0645\u0627 \u06cc\u0648\u0646\u06cc\u062a\u06cc")," \u060c\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/react-native/notification-events"}),"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0631\u06cc\u200c\u0627\u06a9\u062a\u200c\u0646\u06cc\u062a\u06cc\u0648"),"\n\u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),Object(i.b)("h2",{id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u062f\u0631\u0633 \u0632\u06cc\u0631 \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u200c\u0627\u0633 \u0648 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.\n",Object(i.b)("inlineCode",{parentName:"p"},"https://api.pushe.co/v2/messaging/notifications/")),Object(i.b)("h2",{id:"\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627-\u062f\u0644\u062e\u0648\u0627\u0647"},"\u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627 \u062f\u0644\u062e\u0648\u0627\u0647"),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 ",Object(i.b)("strong",{parentName:"p"},"\u062d\u062f\u0627\u0642\u0644 \u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f")," \u062a\u0627 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0635\u062d\u06cc\u062d \u0633\u0627\u062e\u062a\u0647 \u0648 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u0628\u0647 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"app_id"),": \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0647 \u0627\u0632 \u0646\u0648\u0639 \u0631\u0634\u062a\u0647 string \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",Object(i.b)("br",{parentName:"li"}),"",Object(i.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"custom_content"),": \u06cc\u06a9 \u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc \u0627\u0633\u062a \u06a9\u0647 \u06a9\u0644\u06cc\u062f \u0647\u0627 \u0648 \u0645\u0642\u0627\u062f\u06cc\u0631 \u062f\u0644\u062e\u0648\u0627\u0647\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f \u0631\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f",Object(i.b)("br",{parentName:"li"}),"",Object(i.b)("strong",{parentName:"li"},"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u0627\u0645\u06a9\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/mobile-api/simple-notification"}),"\u0642\u0633\u0645\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647")," \u0648 \u062f\u0631 ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/mobile-api/filtered-notification"}),"\u0642\u0633\u0645\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631")," \u06af\u0641\u062a\u0647 \u0634\u062f \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0647\u0645 \u0627\u0645\u06a9\u0627\u0646\u200c\u067e\u0630\u06cc\u0631 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),Object(i.b)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile-api/notification-keys"}),"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"\u062a\u0628\u0635\u0631\u0647"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u062f\u0631 \u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627\u06cc \u063a\u06cc\u0631\u062a\u0631\u0627\u06a9\u0646\u0634\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0647\u0645\u0632\u0645\u0627\u0646 \u0627\u0632 \u062f\u0648 \u06a9\u0644\u06cc\u062f ",Object(i.b)("inlineCode",{parentName:"p"},"data")," \u0648 ",Object(i.b)("inlineCode",{parentName:"p"},"custom_content")," \u0645\u062c\u0627\u0632 \u0627\u0633\u062a."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(i.b)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647 \u0645\u0647\u0645"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"}," \u062f\u0631 \u0635\u0648\u0631\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0647\u0645\u0632\u0645\u0627\u0646 \u0627\u0632 \u06a9\u0644\u06cc\u062f\u200c\u0647\u0627\u06cc ",Object(i.b)("inlineCode",{parentName:"p"},"custom_content")," \u0648 ",Object(i.b)("inlineCode",{parentName:"p"},"data"),"\u060c \u0639\u0644\u0627\u0648\u0647 \u0628\u0631 \u0627\u0631\u0633\u0627\u0644 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647\u060c \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0632 \u0628\u0647 \u06a9\u0627\u0631 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."))),Object(i.b)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0628\u0627-\u0645\u062d\u062a\u0648\u0627\u06cc-\u062f\u0644\u062e\u0648\u0627\u0647"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647"),Object(i.b)("p",null,"\u062f\u0631 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u062d\u062f\u0627\u0642\u0644 \u06a9\u062f \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06cc\u06a9 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u062f\u0631 \u0632\u0628\u0627\u0646 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0628\u0627 \u0639\u0646\u0648\u0627\u0646 \u0648 \u0645\u062a\u0646 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647.\n\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0647 \u0628\u062e\u0634 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile-api/notification-keys"}),"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),Object(i.b)(o.default,{mdxType:"CustomContentNotificationTabs"}))}b.isMDXComponent=!0},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},286:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},287:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},288:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},289:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),i=n(287);var o=function(){return Object(a.useContext)(i.a)},c=n(286),s=n.n(c),l=n(131),p=n.n(l),b=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,l=e.groupId,m=o(),d=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(i),f=j[0],h=j[1];if(null!=l){var v=d[l];null!=v&&v!==f&&h(v)}var g=function(e){h(e),null!=l&&O(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:s()("tab-item",p.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},290:function(e,t,n){"use strict";n(291);var a=n(0),r=n.n(a),i={paddingRight:"1px",paddingLeft:"1px"};t.a=function(e){return r.a.createElement("a",{style:i,href:e.link||e.href,target:"_blank"},e.children)}},291:function(e,t,n){"use strict";n(292)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},292:function(e,t,n){var a=n(12),r=n(13),i=n(25),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},294:function(e,t,n){"use strict";t.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]}}]);