"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[757],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return b}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return t?r.createElement(m,s(s({ref:a},i),{},{components:t})):r.createElement(m,s({ref:a},i))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var u={};for(var c in a)hasOwnProperty.call(a,c)&&(u[c]=a[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7619:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),s=["components"],u={sidebar_position:2},c="Database backups",l={unversionedId:"Guides/backups",id:"Guides/backups",isDocsHomePage:!1,title:"Database backups",description:"All important data is stored in the database. This includes all servers, users, and other information.",source:"@site/docs/Guides/backups.md",sourceDirName:"Guides",slug:"/Guides/backups",permalink:"/docs/Guides/backups",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Guides/backups.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/docs/Guides/products"}},i=[{value:"How to backup",id:"how-to-backup",children:[]},{value:"How to restore",id:"how-to-restore",children:[]},{value:"How to automatically backup",id:"how-to-automatically-backup",children:[]}],p={toc:i};function d(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-backups"},"Database backups"),(0,o.kt)("p",null,"All important data is stored in the database. This includes all servers, users, and other information.",(0,o.kt)("br",{parentName:"p"}),"\n","Its important to keep backups of your database to ensure that you can restore your panel if something goes wrong.  "),(0,o.kt)("h3",{id:"how-to-backup"},"How to backup"),(0,o.kt)("p",null,"You can use mysql dump to backup your database.",(0,o.kt)("br",{parentName:"p"}),"\n","This commnad will create a backup file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/dashboard/")," folder.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -u root -p dashboard > /var/www/dashboard/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-restore"},"How to restore"),(0,o.kt)("p",null,"To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -u root -p dashboard -e "DROP DATABASE dashboard"\n')),(0,o.kt)("p",null,"Then you can restore the backup. You can also restore the backup on any other new server.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE dashboard;\nCREATE USER 'dashboarduser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON dashboard.* TO 'dashboarduser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\nmysql -u root -p dashboard < /var/www/dashboard/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-automatically-backup"},"How to automatically backup"),(0,o.kt)("p",null,"You can automatically backup your database every day at midnight for example.\nFirst create a read only user for the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/dashboard/backups\nmysql -u root -p\nCREATE USER 'dashboardbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT LOCK TABLES, SELECT ON dashboard.* TO 'dashboardbackupuser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\n")),(0,o.kt)("p",null,"Then create a cronjob to run the following command at midnight.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"0 0 * * * mysqldump -u dashboardbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false dashboard > /var/www/dashboard/backups-$(date +\\%F).sql\n")),(0,o.kt)("p",null,"This will create a backup at /var/www/dashboard/backups-$(date +\\%F).sql every day at midnight.\nEvery file will have the date when it was made in the filename, so you can also resolve issues that happend a few days ago."))}d.isMDXComponent=!0}}]);