import{_ as y,D as C,b3 as j,d as h,S as b,b4 as B,X as F,b as r,c as g,w as a,e as o,b5 as q,b6 as G,y as d,R as T,f,b7 as K,b8 as Y,b9 as P,ba as X,h as v,F as w,q as J,s as Q,G as M,a0 as E,i as Z,aH as k,t as S,O as ee,bb as te,bc as A,r as N,o as D,bd as ne,H as ae,ap as oe,j as $,V as se,$ as le,be as ie,B as re,v as ce,aY as _e,P as ue,a as pe,Y as me,ab as de,a5 as ge}from"./index-9eeac04e.js";/* empty css                */import{S as fe,_ as ve}from"./1panel-logo-light-9c97e42b.js";/* empty css               */import"./tooltip-b30db216.js";/* empty css             */import{M as I}from"./menu-5b12e851.js";import{b as he}from"./auth-2995b339.js";import{o as ye,e as be}from"./setting-f1c3ee2a.js";import"./index-bb4c3e65.js";/* empty css                    *//* empty css            *//* empty css                *//* empty css                    *//* empty css              *//* empty css              *//* empty css               */import"./md-editor-v3.es-6a7d0529.js";import"./index-5ffc91ba.js";import"./util-cbaccc93.js";import"./base64-e52cbffd.js";const xe={};function $e(l,t){return C(l.$slots,"default")}var Se=y(xe,[["render",$e]]);const Ce={};function Le(l,t){return C(l.$slots,"default")}var ke=y(Ce,[["render",Le]]);let U=[];const O=(l,t)=>{l.forEach(s=>{var i;((i=s.meta)==null?void 0:i.keepAlive)&&s.name&&t.push(s.name),s.children&&s.children.length!==0&&O(s.children,t)})};O(j,U);const we=h({__name:"layout-view",setup(l){const t=b(()=>B().path+Math.random());return(s,i)=>{const n=F("router-view");return r(),g(n,{key:d(t)},{default:a(({Component:_,route:m})=>[o(q,{appear:"",name:"fade-transform",mode:"out-in"},{default:a(()=>[(r(),g(G,{include:d(U)},[(r(),g(T(_),{key:m.path}))],1032,["include"]))]),_:2},1024)]),_:1})}}});const Ne=h({__name:"index",setup(l){return(t,s)=>{const i=K,n=Y,_=P,m=X;return r(),g(m,null,{default:a(()=>[o(i,null,{default:a(()=>[o(Se,null,{default:a(()=>[C(t.$slots,"menu",{},void 0,!0)]),_:3})]),_:3}),o(m,null,{default:a(()=>[o(n,null,{default:a(()=>[f("div",null,[o(we)])]),_:1}),o(_,null,{default:a(()=>[o(ke,null,{default:a(()=>[C(t.$slots,"footer",{},void 0,!0)]),_:3})]),_:3})]),_:3})]),_:3})}}});var Me=y(Ne,[["__scopeId","data-v-aa414a52"]]);const Ee=l=>(J("data-v-2f4fbbba"),l=l(),Q(),l),Be={class:"footer flx-justify-between"},Fe=Ee(()=>f("div",{class:"footer-left"},[f("a",{href:"https://fit2cloud.com/",target:"_blank"},"Copyright @2014-2023 FIT2CLOUND \u98DE\u81F4\u4E91")],-1)),Te={class:"footer-right"},Ae=h({__name:"index",setup(l){return(t,s)=>(r(),v(w,null,[f("div",null,[C(t.$slots,"default",{},void 0,!0)]),f("div",Be,[Fe,f("div",Te,[o(fe)])])],64))}});var De=y(Ae,[["__scopeId","data-v-2f4fbbba"]]);const Ie=`
<path class="path" d="
	M 30 15
	L 28 17
	M 25.61 25.61
	A 15 15, 0, 0, 1, 15 30
	A 15 15, 0, 1, 1, 27.99 7.5
	L 15 15
" style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`;var Ue="/assets/png/1panel-menu-dark-d867c600.png",Oe="/assets/png/1panel-menu-light-cb6e3a7e.png",Re="/assets/png/1panel-logo-dark-13aa4a2e.png";const Ve={class:"logo flx-center"},We=["src"],ze=h({__name:"Logo",props:{isCollapse:{type:Boolean}},setup(l){const t=M(),s=i=>{const n=t.$state.themeConfig.theme||"light";return i?new URL({"../../../../assets/images/1panel-logo-dark.png":Re,"../../../../assets/images/1panel-logo-light.png":ve}[`../../../../assets/images/1panel-logo-${n}.png`],self.location).href:new URL({"../../../../assets/images/1panel-menu-dark.png":Ue,"../../../../assets/images/1panel-menu-light.png":Oe}[`../../../../assets/images/1panel-menu-${n}.png`],self.location).href};return(i,n)=>(r(),v("div",Ve,[f("img",{src:s(l.isCollapse),alt:""},null,8,We)]))}});var He=y(ze,[["__scopeId","data-v-71a34dc0"]]);const je={class:"collapse"},qe=h({__name:"Collapse",setup(l){const t=I(),s=b(()=>t.isCollapse);return(i,n)=>{const _=E;return r(),v("div",je,[o(_,{class:"collapse-icon",size:25,onClick:n[0]||(n[0]=m=>d(t).setCollapse())},{default:a(()=>[(r(),g(T(d(s)?"expand":"fold")))]),_:1})])}}});var Ge=y(qe,[["__scopeId","data-v-f494e2dc"]]);const Ke={class:"sub-span"},Ye={key:0},Pe={key:1,style:{"margin-left":"10px"}},Xe=h({__name:"sub-item",props:{menuList:null},setup(l){return(t,s)=>{const i=E,n=F("SubItem",!0),_=te,m=A;return r(!0),v(w,null,Z(l.menuList,e=>(r(),v(w,{key:e.path},[e.children&&e.children.length>1?(r(),g(_,{key:0,index:e.path,"popper-class":"menu-popper"},{title:a(()=>{var c;return[o(i,{class:"sub-icon"},{default:a(()=>{var u;return[o(k,{iconName:(u=e.meta)==null?void 0:u.icon,className:"svg-icon"},null,8,["iconName"])]}),_:2},1024),f("span",Ke,S(t.$t((c=e.meta)==null?void 0:c.title)),1)]}),default:a(()=>[o(n,{menuList:e.children},null,8,["menuList"])]),_:2},1032,["index"])):e.children&&e.children.length===1?(r(),g(m,{key:1,index:e.children[0].path},{title:a(()=>{var c;return[f("span",null,S(t.$t((c=e.meta)==null?void 0:c.title)),1)]}),default:a(()=>[o(i,null,{default:a(()=>{var c;return[o(k,{iconName:(c=e.meta)==null?void 0:c.icon,className:"svg-icon"},null,8,["iconName"])]}),_:2},1024)]),_:2},1032,["index"])):(r(),g(m,{key:2,index:e.path},{title:a(()=>{var c,u,p;return[(c=e.meta)!=null&&c.icon?(r(),v("span",Ye,S(t.$t((u=e.meta)==null?void 0:u.title)),1)):(r(),v("span",Pe,S(t.$t((p=e.meta)==null?void 0:p.title)),1))]}),default:a(()=>{var c;return[(c=e.meta)!=null&&c.icon?(r(),g(i,{key:0},{default:a(()=>{var u;return[o(k,{iconName:(u=e.meta)==null?void 0:u.icon,className:"svg-icon"},null,8,["iconName"])]}),_:2},1024)):ee("",!0)]}),_:2},1032,["index"]))],64))),128)}}});var Je=y(Xe,[["__scopeId","data-v-13d6c952"]]);const Qe=["element-loading-spinner"],Ze=h({__name:"index",setup(l){const t=B(),s=I(),i=M(),n=b(()=>{const{meta:x,path:L}=t;return typeof x.activeMenu=="string"?x.activeMenu:L}),_=b(()=>s.isCollapse),m=b(()=>s.menuList),e=N(0);(()=>{window.onresize=()=>(()=>{e.value=document.body.clientWidth,_.value===!1&&e.value<1200&&s.setCollapse(),_.value===!0&&e.value>1200&&s.setCollapse()})()})();const u=()=>{oe.confirm($.global.t("commons.msg.sureLogOut"),$.global.t("commons.msg.infoTitle"),{confirmButtonText:$.global.t("commons.button.confirm"),cancelButtonText:$.global.t("commons.button.cancel"),type:"warning"}).then(()=>{p(),se.push({name:"login"}),i.setLogStatus(!1),le($.global.t("commons.msg.operationSuccess"))}).catch(()=>{})},p=async()=>{await he()};return D(async()=>{s.setMenuList(ne)}),(x,L)=>{const R=k,V=E,W=A,z=ie,H=re;return r(),v("div",{class:"menu",style:ae({width:d(_)?"75px":"180px"}),"element-loading-text":"Loading...","element-loading-spinner":d(Ie),"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(122, 122, 122, 0.01)"},[o(He,{isCollapse:d(_)},null,8,["isCollapse"]),o(H,null,{default:a(()=>[o(z,{"default-active":d(n),router:!0,collapse:d(_),"collapse-transition":!1,"unique-opened":!0,"popper-class":"menu-popper"},{default:a(()=>[o(Je,{menuList:d(m)},null,8,["menuList"]),o(W,{index:""},{title:a(()=>[f("span",{onClick:u},S(x.$t("commons.header.logout")),1)]),default:a(()=>[o(V,{onClick:u},{default:a(()=>[o(R,{iconName:"p-logout",className:"svg-icon"})]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])]),_:1}),o(Ge)],12,Qe)}}}),xt=h({__name:"index",setup(l){const t=ce(),s=N(!1),i=N(),n=M(),_=b(()=>n.themeConfig),{switchDark:m}=_e();let e=null;ue(()=>n.isLoading,()=>{n.isLoading?u():s.value=n.isLoading});const c=async()=>{const p=await be();document.title=p.data.panelName,t.locale.value=p.data.language,t.warnHtmlMessage=!1,n.updateLanguage(p.data.language),n.setThemeConfig({..._.value,theme:p.data.theme}),n.setThemeConfig({..._.value,panelName:p.data.panelName}),m()},u=async()=>{s.value=n.isLoading,i.value=n.loadingText,s.value&&(e=setInterval(async()=>{await ye().then(p=>{p&&(location.reload(),clearInterval(Number(e)),e=null)}).catch(()=>{location.reload(),clearInterval(Number(e)),e=null})},1e3*10))};return pe(()=>{clearInterval(Number(e)),e=null}),D(()=>{u(),c()}),(p,x)=>{const L=ge;return me((r(),g(Me,{"element-loading-text":i.value,fullscreen:""},de({_:2},[d(n).isFullScreen?void 0:{name:"menu",fn:a(()=>[o(Ze)]),key:"0"},d(n).isFullScreen?void 0:{name:"footer",fn:a(()=>[o(De)]),key:"1"}]),1032,["element-loading-text"])),[[L,s.value]])}}});export{xt as default};
