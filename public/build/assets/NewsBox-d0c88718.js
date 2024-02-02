import{u as p}from"./AppLayout-3157e4a2.js";import{_ as y,l as _,q as x,o as t,d as a,a as o,t as s,F as u,g as h,e as d,b as k,w as b,j as f,f as m}from"./app-0e0bee07.js";const v={props:{newslist:Array},setup(){const{formatTimeAgoToNow:r,formatToDayDateString:i}=p();return{formatTimeAgoToNow:r,formatToDayDateString:i}}},N={key:0},D={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-4"},T={class:"font-extrabold text-gray-800 dark:text-gray-200"},B={class:"flex-co space-y-1"},V={key:0,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-light-blue-100 text-light-blue-800 dark:bg-light-blue-700 dark:bg-opacity-25 dark:text-light-blue-400"},w={key:1,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},A={key:2,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800 dark:bg-green-700 dark:bg-opacity-25 dark:text-green-400"},C={key:3,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:bg-opacity-25 dark:text-gray-400"},S={class:"font-semibold leading-5 text-gray-800 dark:text-gray-300"},j=["title"],F={class:"text-gray-500 dark:text-gray-400 text-xs"},L=["src"];function q(r,i,l,n,E,H){const g=_("inertia-link"),c=x("tippy");return l.newslist.length>0?(t(),a("div",N,[o("div",D,[o("h3",T,s(r.__("Latest News")),1),(t(!0),a(u,null,h(l.newslist,e=>(t(),a("div",{key:e.id,class:"flex justify-between space-y-4"},[o("div",B,[e.type.value===0?(t(),a("span",V,s(e.type.key),1)):e.type.value===1?(t(),a("span",w,s(e.type.key),1)):e.type.value===2?(t(),a("span",A,s(e.type.key),1)):(t(),a("span",C,s(e.type.key),1)),o("p",S,[k(g,{href:r.route("news.show",e.slug),class:"hover:text-light-blue-400 duration-200"},{default:b(()=>[o("span",null,s(e.title),1)]),_:2},1032,["href"])]),f((t(),a("span",{class:"text-gray-500 dark:text-gray-400 text-xs focus:outline-none",title:n.formatToDayDateString(e.published_at)},[m(s(n.formatTimeAgoToNow(e.published_at)),1)],8,j)),[[c]]),o("span",F," - "+s(e.time_to_read)+" "+s(r.__("read")),1)]),e.photo_url?(t(),a("img",{key:0,class:"h-16 w-20 rounded",src:e.photo_url,alt:"News Image"},null,8,L)):d("",!0)]))),128))])])):d("",!0)}const G=y(v,[["render",q]]);export{G as N};
