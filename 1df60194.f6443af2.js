/*! For license information please see 1df60194.f6443af2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,89],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),i=(n(0),n(287)),o=n(291),c=n(290),p=n(296),l=n(292),s={},u={id:"mobile-api/codes/topic-notification",title:"topic-notification",description:"<Tabs",source:"@site/docs/mobile-api/codes/topic-notification.mdx",permalink:"/docs/mobile-api/codes/topic-notification"},b=[],d={rightToc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{groupId:"language-codes",defaultValue:"1",values:p.a,mdxType:"Tabs"},Object(i.b)(c.a,{value:"1",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(i.b)(l.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(i.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST https://api.pushe.co/v2/messaging/notifications/ \\\n-H \'authorization: Token YOUR_TOKEN\' \\\n-H \'content-type: application/json\' \\\n-d \'{\n"app_ids": "YOUR_APP_ID",\n"topics": ["topic1", "topic2", "topic3"],\n"data": {"title": "\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645", "content": "\u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u06cc\u0627\u0645"}\n}\'\n'))),Object(i.b)(c.a,{value:"2",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(i.b)(l.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f\n\u200d",Object(i.b)("inlineCode",{parentName:"li"},"npm install axios"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios');\n\nconst YOUR_TOKEN = 'put your token here ...';\nconst YOUR_APP_ID = 'put your app id here ...';\n\nconst url = `https://api.pushe.co/v2/messaging/notifications/`;\n\nconst options = {\n    headers: {\n        'Authorization': `Token ${YOUR_TOKEN}`,\n        'Content-Type': 'application/json'\n    }\n};\n\nconst data = {\n    app_ids: YOUR_APP_ID,\n    data: {\n        title: '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        content: '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    },\n    topics: ['topic1', 'topic2', 'topic3']\n};\n\naxios.post(url, data, options)\n    .then(resp => console.log(resp))\n    .catch(err => console.error(err));\n"))),Object(i.b)(c.a,{value:"3",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648\u0631\u0698\u0646 \u06f3.\u06f6 \u0648 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"),Object(i.b)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c ",Object(i.b)(l.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.\n",Object(i.b)("inlineCode",{parentName:"li"},"pip install requests"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests\nimport json\n\nYOUR_TOKEN = 'put your token here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = f'https://api.pushe.co/v2/messaging/notifications/'\n\nheaders = {\n    'Authorization': f'Token {YOUR_TOKEN}',\n    'Content-Type': 'application/json'\n}\n\npayload = json.dumps({\n    'app_ids': YOUR_APP_ID,\n    'data': {\n        'title': '\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646',\n        'content': '\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646'\n    },\n    'topics': ['topic1', 'topic2', 'topic3']\n})\n\nr = requests.post(url, data=payload, headers=headers)\n\nprint(r.status_code)\n"))),Object(i.b)(c.a,{value:"4",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$YOUR_TOKEN = 'put your token here ...';\n$YOUR_APP_ID = 'put your app id here ...';\n\n$ch = curl_init('https://api.pushe.co/v2/messaging/notifications/');\n\ncurl_setopt_array($ch, array(\n    CURLOPT_POST  => 1,\n    CURLOPT_TIMEOUT => 30,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => array(\n        \"Content-Type: application/json\",\n        \"Authorization: Token \" . $YOUR_TOKEN,\n    ),\n));\n\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(\n    'app_ids' => $YOUR_APP_ID,\n    'data' => array(\n        'title' => '\u0639\u0646\u0648\u0627\u0646 \u067e\u06cc\u0627\u0645',\n        'content' => '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645'\n    ),\n    'topics' => array(\n        'topic1',\n        'topic2',\n        'topic3'\n    )\n)));\n\n$result = curl_exec($ch);\n\ncurl_close($ch);\n\necho $result;\n"))),Object(i.b)(c.a,{value:"5",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "io/ioutil"\n    "encoding/json"\n    "net/http"\n)\n\nconst YOUR_TOKEN = "put your token here ..."\nconst YOUR_APP_ID = "put your app id here ..."\n\nfunc main() {\n    url := "https://api.pushe.co/v2/messaging/notifications/"\n\n    payload := map[string]interface{}{\n        "app_ids" : YOUR_APP_ID,\n        "data": map[string]string{\n            "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u0644\u0627\u0646",\n            "content": "\u0645\u062a\u0646 \u0627\u0639\u0644\u0627\u0646",\n        },\n        "topics": []string{"topic1", "topic2", "topic3"}\n    }\n\n    jsonValue, _ := json.Marshal(payload)\n\n    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))\n\n    req.Header.Set("Content-Type", "application/json")\n    req.Header.Set("Authorization", "Token " + YOUR_TOKEN)\n\n    client := &http.Client{}\n    resp, err := client.Do(req)\n\n    if err != nil {\n        panic(err)\n    }\n\n    defer resp.Body.Close()\n\n    fmt.Println("response Status:", resp.Status)\n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println("response Body:", string(body))\n}\n')))))}m.isMDXComponent=!0},172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(287)),o=n(134),c={id:"topic-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9"},p={id:"mobile-api/topic-notification",title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",source:"@site/docs/mobile-api/topic-notification.md",permalink:"/docs/mobile-api/topic-notification",sidebar_label:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",sidebar:"mobile-api",previous:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",permalink:"/docs/mobile-api/filtered-notification"},next:{title:"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0631\u0627\u06a9\u0646\u0634\u06cc",permalink:"/docs/mobile-api/transactional-notification"}},l=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9",id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u062a\u0627\u067e\u06cc\u06a9",children:[]},{value:"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646",id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646",children:[]},{value:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u062a\u0627\u067e\u06cc\u06a9-\u0628\u0647-\u06a9\u0627\u0631\u0628\u0631\u0647\u0627\u06cc-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631(\u0647\u0627\u06cc) \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),Object(i.b)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u0627\u0639\u0644\u0627\u0646-\u062a\u0627\u067e\u06cc\u06a9"},"\u062a\u0639\u0631\u06cc\u0641 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9"),Object(i.b)("p",null,"\u062a\u0627\u067e\u06cc\u06a9 \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u06cc\u06a9 \u06af\u0631\u0648\u0647 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0622\u0648\u0631\u062f \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u06cc\u06a9 \u0627\u067e \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 \u0622\u0646 \u0627\u0636\u0627\u0641\u0647 \u0648 \u0627\u0632 \u0622\u0646 \u062d\u0630\u0641 \u06a9\u0631\u062f.\n\u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u062a\u0627\u067e\u06cc\u06a9 \u06cc\u0627 \u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f\n\u0648 \u0628\u0631\u062d\u0633\u0628 \u0639\u0644\u0627\u0642\u0647\u200c\u0645\u0646\u062f\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u06cc\u0627 \u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u062e\u0648\u062f\u062a\u0627\u0646 \u0628\u0647 \u062a\u0627\u067e\u06cc\u06a9 \u0645\u0631\u062a\u0628\u0637 \u067e\u0648\u0634 \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.\n\u0645\u062b\u0644\u0627 \u0627\u06af\u0631 \u0634\u0645\u0627 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062e\u0628\u0631\u06cc \u062f\u0627\u0631\u06cc\u062f \u0648 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646\u06cc \u0628\u0647 \u0627\u062e\u0628\u0627\u0631 \u0648\u0631\u0632\u0634\u06cc \u0639\u0644\u0627\u0642\u0645\u0646\u062f \u0647\u0633\u062a\u0646\u062f \u0648 \u0639\u062f\u0647\u200c\u0627\u06cc \u0628\u0647 \u0627\u062e\u0628\u0627\u0631 \u0641\u0631\u0647\u0646\u06af\u06cc\u060c\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0633\u062a\u0647 \u0627\u0648\u0644 \u0631\u0627 \u062f\u0631 \u062a\u0627\u067e\u06cc\u06a9 \u0648\u0631\u0632\u0634\u06cc \u0648 \u062f\u0633\u062a\u0647 \u062f\u0648\u0645 \u0631\u0627 \u062f\u0631 \u062a\u0627\u067e\u06cc\u06a9 \u0641\u0631\u0647\u0646\u06af\u06cc \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f \u0648 \u0647\u0646\u06af\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u067e\u0648\u0634\u060c\n\u0628\u0631\u062d\u0633\u0628 \u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u0648\u0634\u200c\u062a\u0627\u0646 \u0628\u0647 \u062a\u0627\u067e\u06cc\u06a9 \u0645\u0631\u062a\u0628\u0637 \u0622\u0646 \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0641\u0642\u0637 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0639\u0644\u0627\u0642\u0645\u0646\u062f \u0628\u0647 \u0622\u0646 \u0645\u0648\u0636\u0648\u0639 \u0622\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0628\u0627\u06cc\u062f \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u062a\u0627\u067e\u06cc\u06a9 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0639\u0636\u0648 \u06a9\u0646\u06cc\u062f."),Object(i.b)("p",null," \u062a\u0641\u0627\u0648\u062a \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627 \u0627\u0639\u0644\u0627\u0646 \u0633\u0627\u062f\u0647 \u0627\u06cc\u0646 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0641\u06cc\u0644\u062a\u0631 \u0645\u062e\u0627\u0637\u0628\u0627\u0646 \u062a\u0648\u0633\u0637 \u06af\u0648\u06af\u0644 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u067e\u0648\u0634\u0647 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u060c \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f."),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0646\u062d\u0648\u0647 \u0639\u0636\u0648\u06cc\u062a \u06cc\u06a9 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u06cc\u06a9 \u062a\u0627\u067e\u06cc\u06a9 \u062e\u0627\u0635 \u0644\u0637\u0641\u0627 \u0628\u0647\n\u0628\u062e\u0634 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/android-studio/topic"}),"\u062a\u0627\u067e\u06cc\u06a9 \u062f\u0631 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u067e\u0648\u0634\u0647"),"  \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f. "),Object(i.b)("p",null,"\u06a9\u0627\u0631\u0628\u0631\u062f \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0627\u0639\u0644\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u062d\u062a\u0648\u0627 (\u0639\u0646\u0648\u0627\u0646\u060c \u0645\u062a\u0646\u060c \u0622\u06cc\u06a9\u0646\u060c \u0639\u06a9\u0633 \u0648 ...)\n\u0628\u0647 ",Object(i.b)("strong",{parentName:"p"},"\u06cc\u06a9 \u062a\u0627\u067e\u06cc\u06a9 \u0648 \u06cc\u0627 \u0628\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc")," \u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",Object(i.b)("strong",{parentName:"p"},"\u0646\u0627\u0645")," \u062a\u0627\u067e\u06cc\u06a9 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),Object(i.b)("strong",{parentName:"h5"},"\u0646\u0627\u0645\u200c\u06af\u0630\u0627\u0631\u06cc"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u062a\u0645\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631 \u062a\u0627\u067e\u06cc\u06a9 ",Object(i.b)("inlineCode",{parentName:"p"},"broadcast")," \u0639\u0636\u0648\u06cc\u062a \u062f\u0627\u0631\u0646\u062f\u060c\n\u0644\u0630\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u0628\u0631\u0627\u06cc \u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0645\u062c\u0627\u0632\n",Object(i.b)("strong",{parentName:"p"},"\u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f.")))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),Object(i.b)("strong",{parentName:"h5"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0647\u0645\u0632\u0645\u0627\u0646 \u0627\u0632 \u062f\u0648 \u06a9\u0644\u06cc\u062f filters \u0648 topics"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u0627\u06af\u0631 \u0627\u0632 \u062f\u0648 \u06a9\u0644\u06cc\u062f ",Object(i.b)("strong",{parentName:"p"},"filters"),"(\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631) \u0648 ",Object(i.b)("strong",{parentName:"p"},"topics"),"(\u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9) \u0647\u0645\u0632\u0645\u0627\u0646 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f\u060c\n\u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0635\u0631\u0641\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 ",Object(i.b)("strong",{parentName:"p"},"\u062a\u0627\u067e\u06cc\u06a9\u200c\u0647\u0627\u06cc(Topics)")," \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u0641\u06cc\u0644\u062a\u0631 \u062e\u0648\u0627\u0647\u0646\u062f \u0634\u062f."))),Object(i.b)("h2",{id:"\u0622\u062f\u0631\u0633-url-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646"},"\u0622\u062f\u0631\u0633 (url) \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646"),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u062a\u0627\u067e\u06cc\u06a9 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u062f\u0631\u0633  \u0632\u06cc\u0631 \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u0622\u06cc\u200c\u0627\u0648\u200c\u0627\u0633 \u0648 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.\n",Object(i.b)("inlineCode",{parentName:"p"},"https://api.pushe.co/v2/messaging/notifications/")),Object(i.b)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u06a9\u062f-\u0627\u0631\u0633\u0627\u0644-\u0627\u0639\u0644\u0627\u0646-\u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"},"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0641\u06cc\u0644\u062a\u0631\u062f\u0627\u0631"),Object(i.b)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0628\u062e\u0634 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile-api/notification-keys"}),"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0644\u06cc\u062f \u0647\u0627\u06cc \u0627\u0639\u0644\u0627\u0646")," \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),Object(i.b)(o.default,{mdxType:"TopicNotification"}))}u.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},288:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},289:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},290:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},291:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),i=n(289);var o=function(){return Object(a.useContext)(i.a)},c=n(288),p=n.n(c),l=n(131),s=n.n(l),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,l=e.groupId,d=o(),m=d.tabGroupChoices,O=d.setTabGroupChoices,f=Object(a.useState)(i),j=f[0],h=f[1];if(null!=l){var v=m[l];null!=v&&v!==j&&h(v)}var g=function(e){h(e),null!=l&&O(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:p()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:p()("tab-item",s.a.tabItem,{"tab-item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},292:function(e,t,n){"use strict";n(293);var a=n(0),r=n.n(a),i={paddingRight:"1px",paddingLeft:"1px"};t.a=function(e){return r.a.createElement("a",{style:i,href:e.link||e.href,target:"_blank"},e.children)}},293:function(e,t,n){"use strict";n(294)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},294:function(e,t,n){var a=n(12),r=n(13),i=n(25),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},296:function(e,t,n){"use strict";t.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]}}]);