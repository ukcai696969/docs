"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[200],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9115:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:4},u="Troubleshooting",c={unversionedId:"Installation/troubleshooting",id:"Installation/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Getting Error Logs",source:"@site/docs/Installation/troubleshooting.md",sourceDirName:"Installation",slug:"/Installation/troubleshooting",permalink:"/docs/Installation/troubleshooting",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Installation/troubleshooting.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Additional Configuration",permalink:"/docs/Installation/additional-configuration"},next:{title:"Updating",permalink:"/docs/Installation/updating"}},s=[{value:"Getting Error Logs",id:"getting-error-logs",children:[{value:"Text Output",id:"text-output",children:[]},{value:"Hastebin Output",id:"hastebin-output",children:[]}]}],p={toc:s};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"getting-error-logs"},"Getting Error Logs"),(0,i.kt)("h3",{id:"text-output"},"Text Output"),(0,i.kt)("p",null,"The following command will grab the last 100 lines of logs from the dashboard and it will output it into the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tail -n 100 /var/www/dashboard/storage/logs/laravel.log\n")),(0,i.kt)("h3",{id:"hastebin-output"},"Hastebin Output"),(0,i.kt)("p",null,"The following command will grab the last 100 lines of logs from the dashboard and output the link to a hastebin that it pasted it into. Hint: You can change the hastebin link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tail -n 100 /var/www/dashboard/storage/logs/laravel.log | nc bin.ptdl.co 99\n")))}d.isMDXComponent=!0}}]);