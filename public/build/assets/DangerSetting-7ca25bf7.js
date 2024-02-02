import{_}from"./AdminLayout-740a5fa8.js";import{l as c,q as u,o,c as l,w as r,b as m,a as e,t as s,j as i}from"./app-0e0bee07.js";import"./AppLayout-3157e4a2.js";import"./useAuthorizable-8eccef14.js";import"./CloudArrowDownIcon-d1d7f067.js";import"./index-d161bd52.js";const g={class:"flex max-w-6xl px-10 py-12 mx-auto"},h={class:"flex-1"},y={class:"flex flex-col w-full"},p={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},x={class:"px-6 py-4 font-bold text-red-500 border-b dark:border-gray-700 dark:text-red-500"},b={class:"float-right text-sm italic font-normal text-gray-500"},v={id:"box-container",class:"mt-5 divide-y divide-gray-200 md:mt-0 dark:divide-gray-700"},w={class:"flex justify-between p-5"},k={class:"flex flex-col"},D={class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"},I={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},S={class:"flex justify-between p-5"},C={class:"flex flex-col"},P={class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"},A={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},j={class:"flex justify-between p-5"},B={class:"flex flex-col"},L={class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"},H={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},z={class:"flex justify-between p-5"},N={class:"flex flex-col"},V={class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"},q={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},E={class:"flex justify-between p-5"},$={class:"flex flex-col"},F={class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"},G={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},W={__name:"DangerSetting",props:{},setup(J){return(t,K)=>{const f=c("app-head"),a=c("InertiaLink"),n=u("tippy"),d=u("confirm");return o(),l(_,null,{default:r(()=>[m(f,{title:t.__("Dangerzone")},null,8,["title"]),e("div",g,[e("div",h,[e("div",y,[e("div",p,[e("div",x,[e("span",null,s(t.__("Dangerzone")),1),e("span",b,s(t.__("Be cautious with your actions!")),1)]),e("div",v,[e("div",w,[e("div",k,[e("h3",D,s(t.__("Delete all Shouts")),1),e("p",I,s(t.__("Permanently delete all shouts from shoutbox.")),1)]),e("div",null,[i((o(),l(a,{as:"button",href:t.route("admin.setting.danger.truncate.shouts"),method:"delete",class:"inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:r(()=>[e("span",null,s(t.__("Delete Shouts")),1)]),_:1},8,["href"])),[[n],[d,{message:t.__("Are you sure you want to delete all Shouts?")}]])])]),e("div",S,[e("div",C,[e("h3",P,s(t.__("Delete all Console Logs")),1),e("p",A,s(t.__("Permanently delete all console logs of all servers.")),1)]),e("div",null,[i((o(),l(a,{as:"button",href:t.route("admin.setting.danger.truncate.consolelogs"),method:"delete",class:"inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:r(()=>[e("span",null,s(t.__("Delete Consolelogs")),1)]),_:1},8,["href"])),[[n],[d,{message:t.__("Are you sure you want to delete all Console Logs?")}]])])]),e("div",j,[e("div",B,[e("h3",L,s(t.__("Delete all Chat History")),1),e("p",H,s(t.__("Permanently delete all chat history for all servers.")),1)]),e("div",null,[i((o(),l(a,{as:"button",href:t.route("admin.setting.danger.truncate.chatlogs"),method:"delete",class:"inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:r(()=>[e("span",null,s(t.__("Delete Chat History")),1)]),_:1},8,["href"])),[[n],[d,{message:t.__("Are you sure you want to delete all recorded Chat History?")}]])])]),e("div",z,[e("div",N,[e("h3",V,s(t.__("Delete Player Intel")),1),e("p",q,s(t.__("Permanently delete all player related stats for all servers. It will also unlink all players linked to user and then delete all player data.")),1)]),e("div",null,[i((o(),l(a,{as:"button",href:t.route("admin.setting.danger.truncate.playerintel"),method:"delete",class:"inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:r(()=>[e("span",null,s(t.__("Delete Player Intel")),1)]),_:1},8,["href"])),[[n],[d,{message:t.__("Are you sure you want to delete all Player Intel/Statistics?")}]])])]),e("div",E,[e("div",$,[e("h3",F,s(t.__("Delete Server Intel")),1),e("p",G,s(t.__("Permanently delete all the tracked Server Intel (Analytics) data for all servers. Eg: performance, activities data etc.")),1)]),e("div",null,[i((o(),l(a,{as:"button",href:t.route("admin.setting.danger.truncate.serverintel"),method:"delete",class:"inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"},{default:r(()=>[e("span",null,s(t.__("Delete Server Intel")),1)]),_:1},8,["href"])),[[n],[d,{message:t.__("Are you sure you want to delete all Server Analytics/Intel data?")}]])])])])])])])])]),_:1})}}};export{W as default};
