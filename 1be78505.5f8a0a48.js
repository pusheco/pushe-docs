(window.webpackJsonp=window.webpackJsonp||[]).push([[20,143],{224:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(227),o=t(230),s=t(45),i=t(231),r=t(229),m=t.n(r),u=t(228),d=t(252),b=t.n(d);const p=24;function h({item:e,onItemClick:a,collapsible:t}){const{items:c,href:o,label:s,type:i}=e,[r,d]=Object(n.useState)(e.collapsed),[b,p]=Object(n.useState)(null);switch(e.collapsed!==b&&(p(e.collapsed),d(e.collapsed)),i){case"category":return c.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":r}),key:s},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?()=>d(!r):void 0},s),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(h,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:o,onClick:a},s))}}var f=function(e){const[a,t]=Object(n.useState)(!1),{docsSidebars:c,location:o,sidebar:s,sidebarCollapsible:i}=e;if(!s)return null;const r=c[s];if(!r)throw new Error('Cannot find the sidebar "'+s+'" in the sidebar config!');return i&&r.forEach(e=>(function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t.pathname.replace(/\/$/,"")}})(e,o)),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map(e=>e.items.length>0&&l.a.createElement(h,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:i})))))},k=t(235),E=t(238),_=t(17),C=t(253),w=t.n(C);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,{permalinkToSidebar:r,docsSidebars:m}=t,u=r[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:d={}}={}}=Object(o.a)(),{sidebarCollapsible:b=!0}=d;return p=a.routes,h=n.pathname,p.some(e=>Object(_.c)(h,e))?l.a.createElement(i.a,null,l.a.createElement("div",{className:w.a.docPage},u&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(f,{docsSidebars:m,location:n,sidebar:u,sidebarCollapsible:b})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(c.a,{components:k.a},Object(s.a)(a.routes))))):l.a.createElement(E.default,e);var p,h}},238:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(231);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},252:function(e,a,t){e.exports={sidebar:"sidebar_1kLs",sidebarMenuIcon:"sidebarMenuIcon_2vk4",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1JRa"}},253:function(e,a,t){e.exports={docPage:"docPage_1kjD",docSidebarContainer:"docSidebarContainer_1cYp",docMainContainer:"docMainContainer_FFX1"}}}]);