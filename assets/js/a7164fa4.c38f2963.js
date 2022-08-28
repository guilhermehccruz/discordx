"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},l="@SelectMenuComponent",i={unversionedId:"discordx/decorators/gui/select-menu-component",id:"discordx/decorators/gui/select-menu-component",title:"@SelectMenuComponent",description:"add select menu interaction handler for your bot using @SelectMenuComponent decorator",source:"@site/docs/discordx/decorators/gui/select-menu-component.md",sourceDirName:"discordx/decorators/gui",slug:"/discordx/decorators/gui/select-menu-component",permalink:"/docs/discordx/decorators/gui/select-menu-component",draft:!1,editUrl:"https://github.com/discordx-ts/discordx/edit/main/docs/docs/discordx/decorators/gui/select-menu-component.md",tags:[],version:"current",lastUpdatedBy:"Indian Ocean Roleplay",lastUpdatedAt:1661705027,formattedLastUpdatedAt:"Aug 28, 2022",frontMatter:{},sidebar:"discordx",previous:{title:"@ModalComponent",permalink:"/docs/discordx/decorators/gui/modal-component"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Signature",id:"signature",level:2},{value:"options",id:"options",level:3},{value:"Type: ComponentOptions",id:"type-componentoptions",level:2},{value:"botIds",id:"botids",level:3},{value:"Guilds",id:"guilds",level:3},{value:"id",id:"id",level:3}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"selectmenucomponent"},"@SelectMenuComponent"),(0,a.kt)("p",null,"add select menu interaction handler for your bot using ",(0,a.kt)("inlineCode",{parentName:"p"},"@SelectMenuComponent")," decorator"),(0,a.kt)("p",null,"Here are some example screenshots:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2332).Z,width:"494",height:"244"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const roles = [\n  { label: "Principal", value: "principal" },\n  { label: "Teacher", value: "teacher" },\n  { label: "Student", value: "student" },\n];\n\n@Discord()\nclass Example {\n  @SelectMenuComponent({ id: "role-menu" })\n  async handle(interaction: SelectMenuInteraction): Promise<unknown> {\n    await interaction.deferReply();\n\n    // extract selected value by member\n    const roleValue = interaction.values?.[0];\n\n    // if value not found\n    if (!roleValue) {\n      return interaction.followUp("invalid role id, select again");\n    }\n\n    interaction.followUp(\n      `you have selected role: ${\n        roles.find((r) => r.value === roleValue)?.label ?? "unknown"\n      }`\n    );\n    return;\n  }\n\n  @Slash({ description: "roles menu", name: "my-roles" })\n  async myRoles(interaction: CommandInteraction): Promise<unknown> {\n    await interaction.deferReply();\n\n    // create menu for roles\n    const menu = new SelectMenuBuilder()\n      .addOptions(roles)\n      .setCustomId("role-menu");\n\n    // create a row for message actions\n    const buttonRow =\n      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(\n        menu\n      );\n\n    // send it\n    interaction.editReply({\n      components: [buttonRow],\n      content: "select your role!",\n    });\n    return;\n  }\n}\n')),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@SelectMenuComponent(options: ComponentOptions)\n")),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"The button options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ComponentOptions"),(0,a.kt)("td",{parentName:"tr",align:null},"undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("h2",{id:"type-componentoptions"},"Type: ComponentOptions"),(0,a.kt)("h3",{id:"botids"},"botIds"),(0,a.kt)("p",null,"Array of bot ids, for which only the event will be executed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,a.kt)("h3",{id:"guilds"},"Guilds"),(0,a.kt)("p",null,"The guilds where the command is created"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"A unique id for your button interaction to be handled under."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," RegExp"),(0,a.kt)("td",{parentName:"tr",align:null},"function name"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},2332:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-menu-example-0fe02ad4093a7ea140cade33a1074a62.jpg"}}]);