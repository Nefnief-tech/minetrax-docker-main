import{I as v,A as w,u as P}from"./AppLayout-3157e4a2.js";import{S as j,c as N,W as A,R as V}from"./orbit_controls-a8036c69.js";import{_ as D,l as d,q as T,o as n,c as p,w as u,b as h,a as e,t as o,n as B,d as i,e as y,g as C,F as L,f as m,j as _}from"./app-0e0bee07.js";import"./useAuthorizable-8eccef14.js";const S={components:{Icon:v,AppLayout:w},props:{linkedPlayers:Array,maxPlayerPerUser:Number},setup(){const{formatTimeAgoToNow:s,formatToDayDateString:l}=P();return{formatTimeAgoToNow:s,formatToDayDateString:l}},mounted(){for(const s of this.linkedPlayers){let l=new j({canvas:document.getElementById(`skin_container_${s.uuid}`),width:200,height:300,skin:route("player.skin.get",{uuid:s.uuid,username:s.username})}),a=N(l);a.enableRotate=!0,a.enableZoom=!1,a.enablePan=!1;let r=l.animations.add(A);r.speed=.1;let g=l.animations.add(V);g.speed=.5}}},z={class:"py-3 px-2 md:py-12 md:px-10 max-w-6xl mx-auto space-y-4"},R={class:"mb-4 bg-white dark:bg-cool-gray-800 border-t-4 border-light-blue-500 rounded-b text-light-blue-900 dark:text-light-blue-400 px-4 py-3 shadow",role:"alert"},U={class:"flex"},I=e("div",{class:"py-1"},[e("svg",{class:"fill-current h-6 w-6 text-light-blue-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),H={class:"font-bold"},E={class:"text-sm"},F={key:0,class:"pt-5 pb-5 pr-10 flex justify-center"},M={class:"text-red-500 italic"},W=["id"],Y={class:"flex flex-col space-y-2"},q={class:"username"},O={class:"text-xs text-gray-500 dark:text-gray-400"},Z={class:"flex items-center justify-between"},G={class:"font-bold dark:text-gray-400"},J={class:"flex items-center space-x-2 text-center text-sm text-light-blue-400 font-extrabold"},K={key:0,class:"border-2 rounded text-lg px-2 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},Q={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},X={class:"flex items-center justify-between"},$={class:"font-bold dark:text-gray-400"},ee={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},te={class:"flex items-center justify-between"},se={class:"font-bold dark:text-gray-400"},oe={class:"flex items-center space-x-2"},ne={key:0,class:"dark:text-gray-200"},ae={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},ie=["src","alt","title"],le={class:"flex items-center justify-between"},re={class:"font-bold dark:text-gray-400"},ce={class:"flex items-center space-x-2"},de={class:"dark:text-gray-200"},_e=["title","src","alt"],ue={class:"flex items-center justify-between"},he={class:"font-bold dark:text-gray-400"},me={class:"flex items-center space-x-2"},ge=["title"],fe={class:"flex justify-end"},pe={class:"hidden md:block"};function ye(s,l,a,r,g,ke){const k=d("app-head"),f=d("inertia-link"),x=d("icon"),b=d("app-layout"),c=T("tippy");return n(),p(b,null,{default:u(()=>[h(k,{title:s.__("Your Linked Players")},null,8,["title"]),e("div",z,[e("div",R,[e("div",U,[I,e("div",null,[e("p",H,o(s.__("You can link upto :count :player to your account! ( :left available )",{count:a.maxPlayerPerUser,player:a.maxPlayerPerUser===1?s.__("player"):s.__("players"),left:a.maxPlayerPerUser-a.linkedPlayers.length})),1),e("p",E,o(s.__("Initiate the process by joining the server and typing /account-link in chat. A link will be generated, click on that link and your player will added to your account.")),1)])])]),e("div",{class:B(["md:grid gap-4 space-y-2 md:space-y-0",a.linkedPlayers.length>1?"grid-cols-2":"grid-cols-1 place-items-center"])},[a.linkedPlayers.length<=0?(n(),i("div",F,[e("p",M,o(s.__("No players linked to your account right now.")),1)])):y("",!0),(n(!0),i(L,null,C(a.linkedPlayers,t=>(n(),i("div",{key:t.uuid,class:"shadow pt-5 pb-5 pr-10 bg-white dark:bg-cool-gray-800 rounded flex justify-center"},[e("canvas",{id:`skin_container_${t.uuid}`},null,8,W),e("div",Y,[e("div",q,[h(f,{as:"a",href:s.route("player.show",t.uuid),class:"font-bold text-lg text-light-blue-400 hover:text-light-blue-500"},{default:u(()=>[m(o(t.username),1)]),_:2},1032,["href"]),e("p",O,o(t.uuid),1)]),e("div",Z,[e("p",G,o(s.__("Position"))+": ",1),e("div",J,[t.position?(n(),i("span",K,o(t.position),1)):(n(),i("span",Q,o(s.__("None")),1))])]),e("div",X,[e("p",$,o(s.__("Rating"))+": ",1),t.rating!=null?_((n(),p(x,{key:0,class:"w-8 h-8 focus:outline-none",name:`rating-${t.rating}`,content:t.rating},null,8,["name","content"])),[[c]]):(n(),i("p",ee,o(s.__("None")),1))]),e("div",te,[e("p",se,o(s.__("Rank"))+": ",1),e("div",oe,[t.rank?(n(),i("p",ne,o(t.rank.name),1)):(n(),i("p",ae,o(s.__("None")),1)),t.rank&&t.rank.photo_url?_((n(),i("img",{key:2,src:t.rank.photo_url,alt:t.rank.name,title:t.rank.name,class:"h-8 w-8 focus:outline-none"},null,8,ie)),[[c]]):y("",!0)])]),e("div",le,[e("p",re,o(s.__("Country"))+": ",1),e("div",ce,[e("p",de,o(t.country.name),1),_(e("img",{title:t.country.name,src:t.country.photo_path,alt:t.country.name,class:"h-8 w-8 -mt-0.5 focus:outline-none"},null,8,_e),[[c]])])]),e("div",ue,[e("p",he,o(s.__("Last Seen"))+": ",1),e("div",me,[_((n(),i("p",{class:"focus:outline-none dark:text-gray-200",title:r.formatToDayDateString(t.last_seen_at)},[m(o(r.formatTimeAgoToNow(t.last_seen_at)),1)],8,ge)),[[c]])])]),e("div",fe,[h(f,{as:"button","preserve-scroll":!0,"preserve-state":!1,method:"delete",href:s.route("account-link.delete",t.uuid),class:"mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"},{default:u(()=>[m(o(s.__("Unlink"))+" ",1),e("span",pe," "+o(t.username),1)]),_:2},1032,["href"])])])]))),128))],2)])]),_:1})}const Pe=D(S,[["render",ye]]);export{Pe as default};
