import{l as b,q as g,o as n,c as w,w as r,k as v,b as a,u as l,A as D,a as t,t as o,j as d,d as p,f as u}from"./app-0e0bee07.js";import{u as S,A as I}from"./AppLayout-3157e4a2.js";import{D as _,_ as T}from"./DtRowItem-71d503a8.js";import{_ as A}from"./PlayerSubMenu-a1150cf0.js";import{r as j}from"./EyeIcon-8f62e161.js";import"./useAuthorizable-8eccef14.js";import"./XMarkIcon-57f7ac2b.js";const B={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto space-y-4"},N={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},P={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},V={class:"flex items-center"},q=["content"],H=["src"],L={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},O={class:"flex items-center"},C={class:"flex-shrink-0 h-10 w-10"},E=["src"],R={class:"ml-4"},$={class:"font-extrabold text-gray-700 dark:text-gray-300"},F=["title"],M=["title"],z={key:1,class:"text-gray-400"},G={class:"whitespace-nowrap"},J={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},te={__name:"IndexSession",props:{player:{type:Object,required:!0},filters:{type:Object},sessions:{type:Object},canShowPlayerIntel:{type:Boolean,required:!0}},setup(i){const{__:s}=v(),{formatTimeAgoToNow:y,formatToDayDateString:h,secondsToHMS:f}=S(),k=[{key:"id",label:s("ID"),sortable:!0,class:"text-left"},{key:"country_id",label:s("Flag"),sortable:!0,class:"text-left"},{key:"player_displayname",label:s("Display name"),sortable:!0},{key:"session_started_at",label:s("Started"),sortable:!0},{key:"session_ended_at",label:s("Ended"),sortable:!0},{key:"server_id",label:s("Server"),sortable:!0},{key:"play_time",label:s("Play Time"),sortable:!0,class:"text-right"},{key:"afk_time",label:s("Afk Time"),sortable:!0,class:"text-right"},{key:"actions",label:s("Actions"),sortable:!1,class:"text-right"}];return(m,K)=>{const x=b("InertiaLink"),c=g("tippy");return n(),w(I,null,{default:r(()=>[a(D,{title:l(s)(":username's sessions - PlayerIntel",{username:i.player.username})},null,8,["title"]),t("div",B,[a(A,{player:i.player,"can-show-player-intel":i.canShowPlayerIntel},null,8,["player","can-show-player-intel"]),t("div",null,[a(T,{class:"bg-white rounded shadow dark:bg-gray-800",header:k,data:i.sessions,filters:i.filters,"route-params":{player:i.player.uuid}},{default:r(({item:e})=>[t("td",N,o(e.id),1),t("td",P,[t("div",V,[d((n(),p("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[t("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,H)],8,q)),[[c]])])]),t("td",L,[t("div",O,[t("div",C,[t("img",{class:"h-10 w-10",src:e.avatar_url,alt:""},null,8,E)]),t("div",R,[a(x,{as:"div",href:m.route("player.intel.session.show",{player:e.player_uuid,session:e.id}),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline"},{default:r(()=>[t("span",$,o(e.player_displayname)+" ("+o(e.player_username)+") ",1)]),_:2},1032,["href"])])])]),a(_,null,{default:r(()=>[d((n(),p("span",{class:"whitespace-nowrap",title:l(h)(e.session_started_at)},[u(o(l(y)(e.session_started_at)),1)],8,F)),[[c]])]),_:2},1024),a(_,null,{default:r(()=>[e.session_ended_at?d((n(),p("span",{key:0,class:"whitespace-nowrap",title:l(h)(e.session_ended_at)},[u(o(l(y)(e.session_ended_at)),1)],8,M)),[[c]]):(n(),p("span",z,"—"))]),_:2},1024),a(_,null,{default:r(()=>[d((n(),p("span",G,[u(o(e.server.name),1)])),[[c]])]),_:2},1024),a(_,{class:"text-right"},{default:r(()=>[u(o(l(f)(e.play_time,!0)),1)]),_:2},1024),a(_,{class:"text-right"},{default:r(()=>[u(o(l(f)(e.afk_time,!0)),1)]),_:2},1024),t("td",J,[d((n(),w(x,{as:"a",href:m.route("player.intel.session.show",{player:e.player_uuid,session:e.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:l(s)("View Session Details")},{default:r(()=>[a(l(j),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[c]])])]),_:1},8,["data","filters","route-params"])])])]),_:1})}}};export{te as default};
