(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[344],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,g=p["".concat(a,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(g,u(u({ref:t},d),{},{components:r})):n.createElement(g,u({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return u}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,c=void 0!==u&&u,a=i.absolute,s=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+d:d}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8278:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),u=r(4996),c=["components"],a={sidebar_position:1},s="Products",d={unversionedId:"Guides/products",id:"Guides/products",isDocsHomePage:!1,title:"Products",description:"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs.",source:"@site/docs/Guides/products.md",sourceDirName:"Guides",slug:"/Guides/products",permalink:"/docs/Guides/products",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Guides/products.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Donating",permalink:"/docs/Contributing/donating"}},l=[{value:"Credits System",id:"credits-system",children:[]},{value:"Product Linking",id:"product-linking",children:[{value:"Information",id:"information",children:[]},{value:"Hiding nodes and eggs",id:"hiding-nodes-and-eggs",children:[]},{value:"Tips",id:"tips",children:[]}]}],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"products"},"Products"),(0,i.kt)("p",null,"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs.\nYou can check out the pterodactyl server creation page for more information about the specific options like CPU and IO."),(0,i.kt)("img",{src:(0,u.Z)("/img/userguides/product-page.png")}),(0,i.kt)("h3",{id:"credits-system"},"Credits System"),(0,i.kt)("p",null,"Credits are charged hourly based on the monthly price you've configured (price / 30 / 24)\nThis means that the price of your products won\u2019t be charged right away when the user creates a server, but instead, the credits are reduced hourly\u2014giving the user the option to cancel and create servers freely anytime.\nWhen the user runs out of credits, his server will automatically be suspended."),(0,i.kt)("h2",{id:"product-linking"},"Product Linking"),(0,i.kt)("img",{width:"50%",height:"50%",src:(0,u.Z)("/img/userguides/product-linking-example.gif")}),(0,i.kt)("br",null),"Example of making a product for minecraft servers.",(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("p",null,"Product linking allows you to configure the nodes and eggs this product can be a used on.\nFor example, you have a node that is more powerful than another node, you may most likely want to charge a bit extra for the usage of this node.\nOr you may have a node dedicated for Minecraft hosting and another node for discord bots. Using the node and egg links, you can easily keep your pricing and server creation separated."),(0,i.kt)("h3",{id:"hiding-nodes-and-eggs"},"Hiding nodes and eggs"),(0,i.kt)("p",null,"You can hide specific nodes or eggs from being used by not configuring them in any of your products. this way, they won\u2019t show up in the server creation page and therefore can\u2019t be used by your customers. This is great if you have some nodes or eggs that you want to exclude from controlpanel."),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"If you have a well-configured product, you can use the Copy button to copy the product to create slight variations of it easily :)"))}f.isMDXComponent=!0}}]);