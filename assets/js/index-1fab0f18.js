import{d as R,v as Y,x as Z,r as c,o as H,A as J,l as P,a1 as Q,m as W,T as X,z as ee,E as te,a5 as ae,b as r,h as _,y as t,Y as se,c as f,w as s,e as n,a6 as S,g,t as d,F as h,i as C,f as i,ae as le,O as V,V as ne,$ as oe,j as ie}from"./index-9eeac04e.js";/* empty css                *//* empty css            *//* empty css               *//* empty css              *//* empty css            *//* empty css              *//* empty css               */import{_ as re}from"./layout-content-27c09564.js";import{S as pe,G as ce,b as de,c as ue}from"./app-b908b206.js";import me from"./index-9f3f38b6.js";/* empty css                    *//* empty css             */import"./index-5ffc91ba.js";/* empty css                          *//* empty css             *//* empty css             *//* empty css              */import"./form-item-d76e7d20.js";/* empty css               *//* empty css               */import"./md-editor-v3.es-6a7d0529.js";import"./index-bb4c3e65.js";/* empty css                *//* empty css             */import"./form-rules-028b05ac.js";import"./index-182e4d20.js";import"./util-cbaccc93.js";const _e={class:"search-button"},ge={class:"app-card"},ve={class:"app-icon"},ye={class:"app-content"},fe={class:"app-header"},he={class:"app-title"},ke={class:"app-desc"},Ee={class:"desc"},$e={class:"app-tag"},be=i("div",{class:"divider"},null,-1),Xe=R({__name:"index",setup(Be){const k=Y().locale.value;let o=Z({name:"",tags:[],page:1,pageSize:50}),F=c([]),A=c([]);const T=["#6495ED","#54FF9F","#BEBEBE","#FFF68F","#FFFF00","#8B0000"];let u=c(!1),p=c("all"),x=c(!1),L=c(0),E=c(!1);const N=a=>T[a],v=async a=>{u.value=!0,await pe(a).then(l=>{F.value=l.data.items}).finally(()=>{u.value=!1}),ce().then(l=>{A.value=l.data})},U=a=>{ne.push({name:"AppDetail",params:{appKey:a}})},G=()=>{u.value=!0,de().then(()=>{oe(ie.global.t("app.syncSuccess")),E.value=!1,v(o)}).finally(()=>{u.value=!1})},I=async()=>{const a=await ue();E.value=a.data.canUpdate},w=a=>{o.tags=[],p.value=a,a!=="all"&&(o.tags=[a]),v(o)},$=a=>{o.name=a,v(o)};return H(()=>{I(),v(o)}),(a,l)=>{const y=J,m=P,K=Q,b=W,q=X,M=ee,j=te,O=ae;return r(),_(h,null,[t(x)?V("",!0):se((r(),f(re,{key:0,title:a.$t("app.app"),divider:!0},{toolbar:s(()=>[n(b,{gutter:5},{default:s(()=>[n(m,{span:20},{default:s(()=>[n(y,{class:S(["tag-button",t(p)==="all"?"":"no-active"]),onClick:l[0]||(l[0]=e=>w("all")),type:t(p)==="all"?"primary":"",plain:t(p)!=="all"},{default:s(()=>[g(d(a.$t("app.all")),1)]),_:1},8,["class","type","plain"]),(r(!0),_(h,null,C(t(A),e=>(r(),_("div",{key:e.key,style:{display:"inline"}},[n(y,{class:S(["tag-button",t(p)===e.key?"":"no-active"]),onClick:z=>w(e.key),type:t(p)===e.key?"primary":"",plain:t(p)!==e.key},{default:s(()=>[g(d(t(k)=="zh"?e.name:e.key),1)]),_:2},1032,["class","onClick","type","plain"])]))),128))]),_:1}),n(m,{span:4},{default:s(()=>[i("div",_e,[n(K,{modelValue:t(o).name,"onUpdate:modelValue":l[1]||(l[1]=e=>t(o).name=e),clearable:"",onClear:l[2]||(l[2]=e=>$("")),"suffix-icon":"Search",onKeyup:l[3]||(l[3]=le(e=>$(t(o).name),["enter"])),onBlur:l[4]||(l[4]=e=>$(t(o).name)),placeholder:a.$t("commons.button.search")},null,8,["modelValue","placeholder"])])]),_:1})]),_:1})]),rightButton:s(()=>[n(q,{"is-dot":"",class:"item",hidden:!t(E)},{default:s(()=>[n(y,{onClick:G,type:"primary",link:"",plain:!0},{default:s(()=>[g(d(a.$t("app.syncAppList")),1)]),_:1})]),_:1},8,["hidden"])]),main:s(()=>[n(b,{gutter:5},{default:s(()=>[(r(!0),_(h,null,C(t(F),(e,z)=>(r(),f(m,{key:z,xs:12,sm:12,md:8,lg:8,xl:8},{default:s(()=>[i("div",ge,[n(b,{gutter:24},{default:s(()=>[n(m,{xs:5,sm:5,md:6,lg:6,xl:5},{default:s(()=>[i("div",ve,[n(M,{shape:"square",size:60,src:"data:image/png;base64,"+e.icon},null,8,["src"])])]),_:2},1024),n(m,{xs:19,sm:19,md:18,lg:18,xl:19},{default:s(()=>[i("div",ye,[i("div",fe,[i("span",he,d(e.name),1),n(y,{class:"app-button",type:"primary",plain:"",round:"",size:"small",onClick:B=>U(e.key)},{default:s(()=>[g(d(a.$t("app.install")),1)]),_:2},1032,["onClick"])]),i("div",ke,[i("span",Ee,d(t(k)=="zh"?e.shortDescZh:e.shortDescEn),1)]),i("div",$e,[(r(!0),_(h,null,C(e.tags,(B,D)=>(r(),f(j,{key:D,colr:N(D)},{default:s(()=>[g(d(t(k)=="zh"?B.name:B.key),1)]),_:2},1032,["colr"]))),128))]),be])]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])),[[O,t(u)]]),t(x)?(r(),f(me,{key:1,id:t(L)},null,8,["id"])):V("",!0)],64)}}});export{Xe as default};
