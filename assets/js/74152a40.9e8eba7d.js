"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||l[f]||s;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={},o="ArgsOf",c={unversionedId:"discordx/basics/args-of",id:"discordx/basics/args-of",title:"ArgsOf",description:"ArgsOf type your events payload as an array, just pass an event (as string) in the type parameter and it types your array with the related event's parameters",source:"@site/docs/discordx/basics/args-of.md",sourceDirName:"discordx/basics",slug:"/discordx/basics/args-of",permalink:"/docs/discordx/basics/args-of",draft:!1,editUrl:"https://github.com/discordx-ts/discordx/edit/main/docs/docs/discordx/basics/args-of.md",tags:[],version:"current",lastUpdatedBy:"Indian Ocean Roleplay",lastUpdatedAt:1661705027,formattedLastUpdatedAt:"Aug 28, 2022",frontMatter:{},sidebar:"discordx",previous:{title:"Basics",permalink:"/docs/discordx/basics/"},next:{title:"Client",permalink:"/docs/discordx/basics/client"}},i={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"argsof"},"ArgsOf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ArgsOf")," type your events payload as an array, just pass an event (as string) in the type parameter and it types your array with the related event's parameters"),(0,a.kt)("p",null,"You can get the list of the events and the payload type in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.js.org/#/docs/discord.js/main/class/Client?scrollTo=e-applicationCommandPermissionsUpdate"},(0,a.kt)("strong",{parentName:"a"},"List of events"))," from discord.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @On({ event: "messageCreate" })\n  onMessage(\n    // The type of message is Message\n    [message]: ArgsOf<"messageCreate">\n  ) {\n    // ...\n  }\n\n  @On({ event: "channelUpdate" })\n  onMessage(\n    // The type of channel1 and channel2 is TextChannel\n    [channel1, channel2]: ArgsOf<"channelUpdate">\n  ) {\n    // ...\n  }\n}\n')))}l.isMDXComponent=!0}}]);