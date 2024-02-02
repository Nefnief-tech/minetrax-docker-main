import{l as x,q as w,o as s,c as y,w as l,k as g,b as o,u as a,A as T,a as n,j as p,d as _,t as r,f as c}from"./app-0e0bee07.js";import{u as D}from"./AppLayout-3157e4a2.js";import{_ as j}from"./AdminLayout-740a5fa8.js";import{_ as P}from"./ServerIntelServerSelector-10fd81a4.js";import{D as i,_ as S}from"./DtRowItem-71d503a8.js";import{_ as A}from"./millify-2865c83f.js";import"./useAuthorizable-8eccef14.js";import"./CloudArrowDownIcon-d1d7f067.js";import"./index-d161bd52.js";import"./XSelect-bfeaeee6.js";import"./XMarkIcon-57f7ac2b.js";const V={class:"p-4 mx-auto space-y-4 px-10"},B={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},L={class:"flex items-center"},N=["content"],U=["src"],C={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},H={class:"flex items-center"},M={class:"flex-shrink-0 h-10 w-10"},O=["src"],$={class:"ml-4"},F={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},I={key:1,class:"text-red-500 italic"},R={key:0},q={key:1},E={key:0},J={key:1},z={key:0},G={key:1},ne={__name:"PlayersList",props:{serverList:{type:Object},filters:{type:Object},data:{type:Object}},setup(d){const{__:t}=g(),{formatTimeAgoToNow:f,formatToDayDateString:m,secondsToHMS:h}=D(),k=[{key:"country_id",label:t("Flag"),sortable:!0,class:"text-left"},{key:"player_username",label:t("Username"),sortable:!0,class:"text-left"},{key:"server_play_count",label:t("Servers Played"),sortable:!0},{key:"play_time",label:t("Play Time"),sortable:!0},{key:"afk_time",label:t("Afk Time"),sortable:!0},{key:"vault_balance",label:t("Vault Money"),sortable:!0},{key:"last_join_address",label:t("Join Address"),sortable:!0},{key:"last_minecraft_version",label:t("MC Version"),sortable:!0},{key:"first_seen_at",label:t("First Seen"),sortable:!0},{key:"last_seen_at",label:t("Last Seen"),sortable:!0}];return(b,K)=>{const v=x("inertia-link"),u=w("tippy");return s(),y(j,null,{default:l(()=>[o(T,{title:a(t)("Players - PlayerIntel")},null,8,["title"]),n("div",V,[o(P,{title:a(t)("Players"),"server-list":d.serverList,filters:d.filters},null,8,["title","server-list","filters"]),n("div",null,[o(S,{class:"bg-white rounded shadow dark:bg-gray-800",header:k,data:d.data,filters:d.filters},{default:l(({item:e})=>[n("td",B,[n("div",L,[p((s(),_("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[n("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,U)],8,N)),[[u]])])]),n("td",C,[n("div",H,[n("div",M,[n("img",{class:"h-10 w-10",src:e.player.avatar_url,alt:""},null,8,O)]),n("div",$,[p((s(),y(v,{as:"div",href:b.route("player.show",e.player.uuid),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline",content:e.player.uuid},{default:l(()=>[e.player_username?(s(),_("span",F,r(e.player_username),1)):(s(),_("span",I,r(a(t)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])]),o(i,null,{default:l(()=>[c(r(e.server_play_count)+" "+r(a(t)("servers")),1)]),_:2},1024),o(i,null,{default:l(()=>[e.play_time?(s(),_("span",R,r(a(h)(e.play_time,!0)),1)):(s(),_("span",q," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.afk_time?(s(),_("span",E,r(a(h)(e.afk_time,!0)),1)):(s(),_("span",J," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.vault_balance?(s(),_("span",z,r(a(A)(e.vault_balance,{precision:2})),1)):(s(),_("span",G," -- "))]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_join_address||a(t)("Unknown")),1)]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_minecraft_version||a(t)("Unknown")),1)]),_:2},1024),p((s(),y(i,{content:a(m)(e.first_seen_at)},{default:l(()=>[c(r(a(f)(e.first_seen_at)),1)]),_:2},1032,["content"])),[[u]]),p((s(),y(i,{content:a(m)(e.last_seen_at)},{default:l(()=>[c(r(a(f)(e.last_seen_at)),1)]),_:2},1032,["content"])),[[u]])]),_:1},8,["data","filters"])])])]),_:1})}}};export{ne as default};
