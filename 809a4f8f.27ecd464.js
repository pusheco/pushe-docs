/*! For license information please see 809a4f8f.27ecd464.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76,111],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(285)),i=n(289),c=n(288),l=n(294),p=n(290),b={},u={id:"web-api/codes/how-use-auth_key",title:"how-use-auth_key",description:"<Tabs",source:"@site/docs/web-api/codes/how-use-auth_key.mdx",permalink:"/docs/web-api/codes/how-use-auth_key"},s=[],m={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{groupId:"language-codes",defaultValue:"1",values:l.a,mdxType:"Tabs"},Object(o.b)(c.a,{value:"1",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 ",Object(o.b)(p.a,{href:"https://curl.haxx.se/",mdxType:"BlankLink"},"cURL")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\u062a\u0648\u0633\u0637 ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt install curl")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{9}","{9}":!0}),"curl -X POST some url to call ... \\\n-H 'authorization: Token YOUR_AUTH_KEY' \\\n-H 'content-type: application/json' \\\n-d 'your data'\n"))),Object(o.b)(c.a,{value:"2",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(p.a,{href:"https://www.npmjs.com/package/axios",mdxType:"BlankLink"},"axios")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637\n",Object(o.b)("inlineCode",{parentName:"li"},"npm i axios")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{9}","{9}":!0}),"const axios = require('axios');\n\nconst YOUR_AUTH_KEY = 'put your auth key here ...';\n\nconst url = 'some endpoint to call ...';\n\nconst options = {\n    headers: {\n        'Authorization': Token YOUR_AUTH_KEY,\n        'Content-Type': 'application/json'\n    }\n}\n\nconst data = {} // Some data to post \n\naxios.post(url, data, options);\n"))),Object(o.b)(c.a,{value:"3",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c ",Object(o.b)(p.a,{href:"https://pypi.org/project/requests/",mdxType:"BlankLink"},"requests")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062a\u0648\u0633\u0637 \u062f\u0633\u062a\u0648\u0631\n",Object(o.b)("inlineCode",{parentName:"li"},"pip install requests")," \u0622\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u062f."),Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{9}","{9}":!0}),"import requests\n\nYOUR_AUTH_KEY = 'put your auth key here ...'\nYOUR_APP_ID = 'put your app id here ...'\n\nurl = 'some endpoint to call ...'\n\nheaders = {\n    'Authorization': f'Token {YOUR_AUTH_KEY}',\n    'Content-Type': 'application/json'\n}\n\ndata = {} // some data to post\n\nr = requests.post(url, data=data, headers=headers)\n"))),Object(o.b)(c.a,{value:"4",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php",metastring:"{10}","{10}":!0}),"$YOUR_AUTH_KEY = 'put your auth key here ...';\n\n$url = 'some endpoint to call ...';\n\n$ch = curl_init($url);\n\ncurl_setopt($ch, CURLOPT_HTTPHEADER, \n    array(\n        \"Content-Type: application/json\", \n        \"Authorization: Token \" . $YOUR_AUTH_KEY\n    ),\n);\n\n"))),Object(o.b)(c.a,{value:"5",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u06a9\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u062f \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go",metastring:"{8}","{8}":!0}),'package main\n\nimport "net/http"\n\nfunc main() {\n    url := "some endpoint to call ..."\n\n    client := &http.Client{}\n\n    req, err := http.NewRequest("GET", url, nil)\n    req.Headers.Set("Content-Type", "application/json")\n    req.Headers.Set("Authorization", "Token YOUR_TOKEN")    \n\n    resp, err := client.Do(req)\n}\n\n')))))}d.isMDXComponent=!0},218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(285)),i=n(290),c=n(140),l={id:"authentication",title:"\u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",sidebar_label:"\u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",hide_title:!0,description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a"},p={id:"web-api/authentication",title:"\u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",description:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u067e\u0648\u0634\u0647 - \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",source:"@site/docs/web-api/authentication.md",permalink:"/docs/web-api/authentication",sidebar_label:"\u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",sidebar:"web-api",previous:{title:"\u067e\u06cc\u0634\u200c\u06af\u0641\u062a\u0627\u0631",permalink:"/docs/web-api/intro"},next:{title:"\u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u0646\u0627\u0633\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",permalink:"/docs/web-api/get-app-id"}},b=[{value:"\u062a\u0639\u0631\u06cc\u0641 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",id:"\u062a\u0639\u0631\u06cc\u0641-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a",children:[]},{value:"\u0646\u062d\u0648\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",id:"\u0646\u062d\u0648\u0647-\u062f\u0631\u06cc\u0627\u0641\u062a-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a",children:[]},{value:"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a",children:[]}],u={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a-\u0648\u0628\u0633\u0631\u0648\u06cc\u0633"},"\u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633"),Object(o.b)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a"},"\u062a\u0639\u0631\u06cc\u0641 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a"),Object(o.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u0627\u0632 \u06a9\u0646\u0633\u0648\u0644 \u067e\u0648\u0634\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0622\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0631\u062f.\n\u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u0627\u0639\u0644\u0627\u0646 \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u0631\u0627 \u062f\u0631 \u0647\u062f\u0631 \u0631\u06cc\u06a9\u0648\u0626\u0633\u062a \u0648 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u0642\u062f\u0627\u0631\n",Object(o.b)("inlineCode",{parentName:"p"},"Authorization"),"\n\u0628\u0647 \u0634\u06a9\u0644 \u0632\u06cc\u0631 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Authorization: Token YOUR_AUTH_KEY\n")),Object(o.b)("p",null,"\u062f\u0631 \u06a9\u062f \u0628\u0627\u0644\u0627 \u0639\u0628\u0627\u0631\u062a ",Object(o.b)("inlineCode",{parentName:"p"},"Token")," \u0645\u0642\u062f\u0627\u0631 \u062b\u0627\u0628\u062a\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627\u06cc\u062f \u062d\u062a\u0645\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0645\u0642\u062f\u0627\u0631 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a (\u200d",Object(o.b)("inlineCode",{parentName:"p"},"YOUR_AUTH_KEY"),") \u0642\u0631\u0627\u0631 \u06af\u06cc\u0631\u062f."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),Object(o.b)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647 \u0645\u0647\u0645"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u0628\u06cc\u0646 \u06a9\u0644\u06cc\u062f\n",Object(o.b)("inlineCode",{parentName:"p"},"Token"),"\n\u0648 \u06a9\u0644\u06cc\u062f\n",Object(o.b)("inlineCode",{parentName:"p"},"YOUR_AUTH_KEY"),"\n\u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0647 \u0627\u0646\u062f\u0627\u0632\u0647 \u06cc\u06a9\n",Object(o.b)("inlineCode",{parentName:"p"},"space"),"\n\u0641\u0627\u0635\u0644\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),Object(o.b)("strong",{parentName:"h5"},"\u0646\u06a9\u062a\u0647"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0631\u0627\u0647\u0646\u0645\u0627 \u0647\u0631\u062c\u0627 \u0627\u0632 \u0639\u0628\u0627\u0631\u062a\n",Object(o.b)("inlineCode",{parentName:"p"},"YOUR_AUTH_KEY"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f \u0645\u0646\u0638\u0648\u0631 \u0645\u0642\u062f\u0627\u0631 \u0647\u0645\u06cc\u0646 \u06a9\u0644\u06cc\u062f\u06cc \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."))),Object(o.b)("h2",{id:"\u0646\u062d\u0648\u0647-\u062f\u0631\u06cc\u0627\u0641\u062a-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a"},"\u0646\u062d\u0648\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0628\u0647 ",Object(o.b)(i.a,{href:"https://console.pushe.co",mdxType:"BlankLink"},"\u06a9\u0646\u0633\u0648\u0644 \u067e\u0648\u0634\u0647"),"\n\u0628\u0631\u0648\u06cc\u062f \u0633\u067e\u0633 \u0628\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0645\u06cc\u0644 \u0648 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u062a\u0627\u0646 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u0628\u0631 \u0631\u0648\u06cc \u0622\u06cc\u06a9\u0646 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0628\u0627\u0644\u0627 \u0648 \u0633\u0645\u062a \u0686\u067e \u0635\u0641\u062d\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u0627\u0632 \u0645\u0646\u0648\u06cc \u0628\u0627\u0632 \u0634\u062f\u0647 \u0628\u0631 \u0631\u0648\u06cc\n",Object(o.b)("strong",{parentName:"p"},"\u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 - api"),"\n\u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/webservice/console1.png",alt:"console web service"})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u062f\u0631 \u0635\u0641\u062d\u0647 \u0628\u0627\u0632 \u0634\u062f\u0647 \u06cc\u06a9 \u0631\u0634\u062a\u0647 \u06f4\u06f0 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631\u06cc \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u0647\u0645\u0627\u0646 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0634\u0645\u0627 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/webservice/console2.png",alt:"console get token"}))))),Object(o.b)("h2",{id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-\u06a9\u0644\u06cc\u062f-\u0627\u062d\u0631\u0627\u0632-\u0647\u0648\u06cc\u062a"},"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a"),Object(o.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0645\u0648\u0628\u0627\u06cc\u0644 \u067e\u0648\u0634\u0647 \u0628\u0627\u06cc\u062f \u06a9\u0644\u06cc\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0647\u062f\u0631 \u062a\u0645\u0627\u0645\u06cc \u0631\u06cc\u06a9\u0648\u0626\u0633\u062a\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u0628\u0647 \u0634\u06a9\u0644 ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization: Token YOUR_AUTH_KEY")," \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f."),Object(o.b)(c.default,{mdxType:"HowUseTokenTabs"}))}s.isMDXComponent=!0},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?r.a.createElement(d,c({ref:t},p,{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},286:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},287:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},288:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},289:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),o=n(287);var i=function(){return Object(a.useContext)(o.a)},c=n(286),l=n.n(c),p=n(131),b=n.n(p),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,p=e.groupId,m=i(),d=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(o),f=j[0],h=j[1];if(null!=p){var v=d[p];null!=v&&v!==f&&h(v)}var g=function(e){h(e),null!=p&&O(p,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:l()("tab-item",b.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},290:function(e,t,n){"use strict";n(291);var a=n(0),r=n.n(a),o={paddingRight:"1px",paddingLeft:"1px"};t.a=function(e){return r.a.createElement("a",{style:o,href:e.link||e.href,target:"_blank"},e.children)}},291:function(e,t,n){"use strict";n(292)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},292:function(e,t,n){var a=n(12),r=n(13),o=n(25),i=/"/g,c=function(e,t,n,a){var r=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},294:function(e,t,n){"use strict";t.a=[{label:"CURL",value:"1"},{label:"NODE.JS",value:"2"},{label:"PYTHON",value:"3"},{label:"PHP",value:"4"},{label:"GO",value:"5"}]}}]);