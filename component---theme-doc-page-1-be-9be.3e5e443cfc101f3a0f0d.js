(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(297),i=a(20),o=a(303),l=a(298),s=a.n(l),u=a(301),m=a(320),d=a.n(m);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=24;function p(e){var t=e.item,a=e.onItemClick,c=t.items,i=t.href,o=t.label,l=t.type,m=b(Object(n.useState)(t.collapsed),2),d=m[0],f=m[1],h=b(Object(n.useState)(null),2),_=h[0],k=h[1];switch(t.collapsed!==_&&(k(t.collapsed),f(t.collapsed)),l){case"category":return r.a.createElement("li",{className:s()("menu__list-item",{"menu__list-item--collapsed":d}),key:o},r.a.createElement("a",{className:s()("menu__link","menu__link--sublist",{"menu__link--active":!t.collapsed}),href:"#!",onClick:function(){return f(!d)}},o),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(p,{key:e.label,item:e,onItemClick:a})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:i,onClick:a},o))}}var h=function(e){var t=b(Object(n.useState)(!1),2),a=t[0],c=t[1],i=e.docsSidebars,o=e.location,l=e.sidebar;if(!l)return null;var u=i[l];if(!u)throw new Error('Cannot find the sidebar "'.concat(l,'" in the sidebar config!'));return u.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var c=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!c,c;case"link":default:return r===a.pathname.replace(/\/$/,"")}}(e,o)})),r.a.createElement("div",{className:d.a.sidebar},r.a.createElement("div",{className:s()("menu","menu--responsive",{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!a)}},a?r.a.createElement("span",{className:s()(d.a.sidebarMenuIcon,d.a.sidebarMenuCloseIcon)},"×"):r.a.createElement("svg",{className:d.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:f,width:f,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},u.map((function(e){return r.a.createElement(p,{key:e.label,item:e,onItemClick:function(){c(!1)}})})))))},_=a(307),k=a(321),v=a.n(k);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,l=a.permalinkToSidebar,s=a.docsSidebars,u=l[n.pathname.replace(/\/$/,"")];return r.a.createElement(o.a,{noFooter:!0},r.a.createElement("div",{className:v.a.docPage},r.a.createElement("div",{className:v.a.docSidebarContainer},r.a.createElement(h,{docsSidebars:s,location:n,sidebar:u})),r.a.createElement("main",{className:v.a.docMainContainer},r.a.createElement(c.a,{components:_.a},Object(i.a)(t.routes)))))}},320:function(e,t,a){e.exports={sidebar:"sidebar_1kLs",sidebarMenuIcon:"sidebarMenuIcon_2vk4",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1JRa"}},321:function(e,t,a){e.exports={docPage:"docPage_1kjD",docSidebarContainer:"docSidebarContainer_1cYp",docMainContainer:"docMainContainer_FFX1"}}}]);