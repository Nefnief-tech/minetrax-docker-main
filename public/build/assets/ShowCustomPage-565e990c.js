import{A as p}from"./AppLayout-3157e4a2.js";import{S as b}from"./ServerStatusBox-cf87ff85.js";import{S as x}from"./ShoutBox-84a3eacc.js";import{_ as v,l as o,o as s,c as f,w as d,b as i,a as e,d as n,t as r,e as l,n as c}from"./app-0e0bee07.js";import"./useAuthorizable-8eccef14.js";import"./CopyToClipboard-da0e6391.js";const y={components:{ServerStatusBox:b,AppLayout:p,ShoutBox:x},props:{customPage:Object}},w={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},k={key:0,class:"mb-4 bg-white dark:bg-cool-gray-800 border-t-4 border-orange-500 dark:border-orange-500 rounded-b text-orange-900 dark:text-orange-400 px-4 py-3 shadow",role:"alert"},P={class:"flex"},B=e("div",{class:"py-1"},[e("svg",{class:"fill-current h-6 w-6 text-orange-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),H={class:"font-bold"},S={class:"text-sm"},M={class:"flex justify-between md:mb-4"},z={class:"text-center font-bold text-2xl md:text-4xl text-gray-900 dark:text-gray-200 mb-5"},C={class:""},L={class:"flex flex-col md:flex-row md:space-x-4"},T=["innerHTML"],V={class:"min-w-full"},A={class:"shadow max-w-none bg-white dark:bg-cool-gray-800 px-3 py-2 md:px-10 md:py-5 overflow-hidden rounded"},N=["innerHTML"],j={key:2,class:"md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"};function D(a,E,t,O,q,F){const m=o("app-head"),_=o("inertia-link"),u=o("server-status-box"),h=o("shout-box"),g=o("app-layout");return s(),f(g,null,{default:d(()=>[i(m,{title:t.customPage.title},null,8,["title"]),e("div",w,[t.customPage.is_visible?l("",!0):(s(),n("div",k,[e("div",P,[B,e("div",null,[e("p",H,r(a.__("Page is hidden!")),1),e("p",S,r(a.__("This page is not visible to public. Please change it's visibility by editing to make it visible to public.")),1)])])])),e("div",M,[e("h1",z,r(t.customPage.title),1),e("div",C,[i(_,{href:a.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:d(()=>[e("span",null,r(a.__("Homepage")),1)]),_:1},8,["href"])])]),e("div",L,[t.customPage.is_html_page?(s(),n("div",{key:0,class:c(t.customPage.is_sidebar_visible?"md:w-9/12":"md:w-full"),innerHTML:t.customPage.body_html},null,10,T)):(s(),n("div",{key:1,class:c(["overflow-x-auto",t.customPage.is_sidebar_visible?"md:w-9/12":"md:w-full"])},[e("div",V,[e("div",A,[e("div",{class:"prose max-w-none dark:prose-dark",innerHTML:t.customPage.body_html},null,8,N)])])],2)),t.customPage.is_sidebar_visible?(s(),n("div",j,[i(u),i(h)])):l("",!0)])])]),_:1})}const U=v(y,[["render",D]]);export{U as default};
