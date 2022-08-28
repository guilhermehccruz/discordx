"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={},s="MetadataStorage",i={unversionedId:"discordx/basics/metadatastorage",id:"discordx/basics/metadatastorage",title:"MetadataStorage",description:"MetadataStorage stores all the information about your decorators. You can get the information you need by using MetadataStorage.instance.",source:"@site/docs/discordx/basics/metadatastorage.md",sourceDirName:"discordx/basics",slug:"/discordx/basics/metadatastorage",permalink:"/docs/discordx/basics/metadatastorage",draft:!1,editUrl:"https://github.com/discordx-ts/discordx/edit/main/docs/docs/discordx/basics/metadatastorage.md",tags:[],version:"current",lastUpdatedBy:"Indian Ocean Roleplay",lastUpdatedAt:1661705027,formattedLastUpdatedAt:"Aug 28, 2022",frontMatter:{},sidebar:"discordx",previous:{title:"IOC support via DI",permalink:"/docs/discordx/basics/dependencyInjection"},next:{title:"RestArgsOf",permalink:"/docs/discordx/basics/rest-args-of"}},c={},d=[],p={toc:d};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metadatastorage"},"MetadataStorage"),(0,n.kt)("p",null,"MetadataStorage stores all the information about your decorators. You can get the information you need by using ",(0,n.kt)("inlineCode",{parentName:"p"},"MetadataStorage.instance"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { MetadataStorage } from "discordx";\n\nMetadataStorage.instance.applicationCommandSlashes;\nMetadataStorage.instance.applicationCommandUsers;\nMetadataStorage.instance.applicationCommandMessages;\nMetadataStorage.instance.reactions;\nMetadataStorage.instance.simpleCommands;\nMetadataStorage.instance.events;\nMetadataStorage.instance.buttonComponents;\nMetadataStorage.instance.modalComponents;\nMetadataStorage.instance.selectMenuComponents;\n// ...\n')))}l.isMDXComponent=!0}}]);