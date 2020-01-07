/*! For license information please see content---docs-ios-features-topic-979-bfe.fc544103cf31f1526afe.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));n(0);var r=n(297),a=n(299),c=n(300);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"topic",title:"تاپیک"},b=[{value:"عضویت کاربر در تاپیک",id:"عضویت-کاربر-در-تاپیک",children:[]},{value:"لغو عضویت کاربر از تاپیک",id:"لغو-عضویت-کاربر-از-تاپیک",children:[]}],u={rightToc:b},p="wrapper";function s(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,i({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد. شما می‌توانید کاربران خود را در تاپیک یا تاپیک‌های متفاوت ثبت‌نام کنید و برحسب علاقه‌مندی کاربران یا دسته‌بندی خودتان به تاپیک مرتبط پوش بفرستید. مثلا اگر شما اپلیکیشن خبری دارید و کاربرانی به اخبار ورزشی علاقمند هستند و عده‌ای به اخبار فرهنگی، می‌توانید دسته اول را در تاپیک ورزشی و دسته دوم را در تاپیک فرهنگی ثبت‌نام کنید و هنگام ارسال پوش، برحسب محتوای پوش‌تان به تاپیک مرتبط آن را ارسال کنید تا فقط کاربران علاقمند به آن موضوع آن را دریافت کنند.برای استفاده از این امکان باید کاربران خود را در تاپیک مورد نظر عضو کنید. "),Object(r.b)("h2",{id:"عضویت-کاربر-در-تاپیک"},"عضویت کاربر در تاپیک"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"func-subscribetopic-string"},Object(r.b)("inlineCode",{parentName:"h4"},"func subscribe(topic: String)")),Object(r.b)("h4",{id:"func-subscribetopic-string-completionhandler-escaping-error---"},Object(r.b)("inlineCode",{parentName:"h4"},"func subscribe(topic: String, completionHandler: @escaping (Error?) -> ())"))),Object(r.b)("p",null,"کاربر را به تاپیک‌ مشخص اضافه می‌کند."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"topic"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"یک string بیان‌گر عنوان تاپیک موردنظر")))),Object(r.b)(a.a,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"swift",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-swift"}),'let sportTopic = "sport"\nPusheClient.shared.subscribe(topic: sportTopic)\n// ----------\nlet sportTopic = "sport"\nPusheClient.shared.subscribe(topic: sportTopic, completionHandler: { (error) in\n    // execute your completion closure here\n})\n'))),Object(r.b)(c.a,{value:"objc",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-objc"}),"// MARK: TODO\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"نام تاپیک باید انگلیسی باشد و Regex آن مطابق داکیومنت فایربیس بصورت زیر است: ",Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"[a-zA-Z0-9-_.~%]+"))),Object(r.b)("h2",{id:"لغو-عضویت-کاربر-از-تاپیک"},"لغو عضویت کاربر از تاپیک"),Object(r.b)("div",{dir:"ltr"},Object(r.b)("h4",{id:"func-unsubscribetopic-string"},Object(r.b)("inlineCode",{parentName:"h4"},"func unsubscribe(topic: String)")),Object(r.b)("h4",{id:"func-unsubscribetopic-string-completionhandler-escaping-error---"},Object(r.b)("inlineCode",{parentName:"h4"},"func unsubscribe(topic: String, completionHandler: @escaping (Error?) -> ())"))),Object(r.b)("p",null,"عضویت کاربر در تاپیک را حذف می‌کند."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"پارامتر ورودی"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"استفاده"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"topic"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"یک string بیان‌گر عنوان تاپیک موردنظر")))),Object(r.b)(a.a,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"swift",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-swift"}),'let topicToRemoveUserFrom = "sport";\nPusheClient.shared.unsubscribe(topic: topicToRemoveUserFrom);\n// ----------\nlet topicToRemoveUserFrom = "sport"\nPusheClient.shared.unsubscribe(topic: topicToRemoveUserFrom, completionHandler: { (error) in\n    // execute your completion closure here\n})\n'))),Object(r.b)(c.a,{value:"objc",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-objc"}),"// MARK: TODO\n")))))}s.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,s=u[o+"."+p]||u[p]||b[p]||c;return n?a.a.createElement(s,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[l]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},298:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===c)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},299:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(298),i=n.n(c);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,l=e.values,b=o(Object(r.useState)(c),2),u=b[0],p=b[1];return a.a.createElement("div",null,a.a.createElement("ul",{className:i()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{className:i()("tab-item",{"tab-item--active":u===t}),key:t,onClick:function(){return p(t)}},n)}))),a.a.createElement("div",{className:"margin-vert--md"},n.filter((function(e){return e.props.value===u}))[0]))}},300:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);