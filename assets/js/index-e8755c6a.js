import{d as K,r as d,x as F,b,c as N,w as l,e,f as E,g as y,t as v,Y as L,y as j,a3 as ee,$ as te,j as M,a1 as A,a2 as ae,K as le,L as oe,l as H,m as J,A as X,af as ne,a5 as Y,o as re,C as se,aq as ie,E as ue,h as V,O as R,ae as me,F as de,i as pe,a6 as ce,V as fe,X as be}from"./index-609fd921.js";/* empty css                *//* empty css            *//* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css             *//* empty css               */import{_ as ve}from"./layout-content-47227111.js";import{_ as _e}from"./index-f10fbc50.js";import{_ as ge}from"./index-af1c8b2d.js";import{T as ye}from"./index-7cc1b133.js";import{_ as $e}from"./index-110fbc44.js";/* empty css                *//* empty css               *//* empty css               */import"./form-item-d76e7d20.js";import{R as q}from"./form-rules-08616160.js";import{r as we,l as Se,t as ke,u as Ve,i as Ce}from"./container-94920957.js";import{_ as he}from"./codemirror-6ae37f99.js";import{b as Re}from"./util-bdb43d7e.js";import{u as Ee}from"./use-delete-data-3fb8ebbf.js";/* empty css                    */import"./tooltip-b30db216.js";/* empty css                *//* empty css               */import"./index-e09fb15b.js";import"./index-5eb40136.js";const Ne={class:"dialog-footer"},Ue=K({__name:"index",emits:["search"],setup(x,{expose:c,emit:C}){const f=d(!1),p=d(!1),a=F({name:"",labelStr:"",labels:[],optionStr:"",options:[],driver:"",subnet:"",gateway:"",scope:""}),S=()=>{a.name="",a.labelStr="",a.labels=[],a.optionStr="",a.options=[],a.driver="",a.subnet="",a.gateway="",a.scope="",p.value=!0},k=()=>{p.value=!1},$=F({name:[q.requiredInput],driver:[q.requiredSelect]}),h=d(),U=async i=>{!i||i.validate(async n=>{!n||(a.labelStr!==""&&(a.labels=a.labelStr.split(`
`)),a.optionStr!==""&&(a.options=a.optionStr.split(`
`)),f.value=!0,await we(a).then(()=>{f.value=!1,te(M.global.t("commons.msg.operationSuccess")),C("search"),p.value=!1}).catch(()=>{f.value=!1}))})};return c({acceptParams:S}),(i,n)=>{const _=A,u=ae,w=le,z=oe,D=H,I=J,t=X,o=ne,m=Y;return b(),N(o,{modelValue:p.value,"onUpdate:modelValue":n[9]||(n[9]=s=>p.value=s),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:l(()=>[e($e,{header:i.$t("container.createNetwork"),back:k},null,8,["header"])]),footer:l(()=>[E("span",Ne,[e(t,{disabled:f.value,onClick:n[7]||(n[7]=s=>p.value=!1)},{default:l(()=>[y(v(i.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),e(t,{disabled:f.value,type:"primary",onClick:n[8]||(n[8]=s=>U(h.value))},{default:l(()=>[y(v(i.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:l(()=>[L((b(),N(j(ee),{ref_key:"formRef",ref:h,"label-position":"top",model:a,rules:$,"label-width":"80px"},{default:l(()=>[e(I,{type:"flex",justify:"center"},{default:l(()=>[e(D,{span:22},{default:l(()=>[e(u,{label:i.$t("container.networkName"),prop:"name"},{default:l(()=>[e(_,{clearable:"",modelValue:a.name,"onUpdate:modelValue":n[0]||(n[0]=s=>a.name=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.driver"),prop:"driver"},{default:l(()=>[e(z,{modelValue:a.driver,"onUpdate:modelValue":n[1]||(n[1]=s=>a.driver=s)},{default:l(()=>[e(w,{label:"bridge",value:"bridge"}),e(w,{label:"ipvlan",value:"ipvlan"}),e(w,{label:"macvlan",value:"macvlan"}),e(w,{label:"overlay",value:"overlay"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.option"),prop:"optionStr"},{default:l(()=>[e(_,{type:"textarea",placeholder:i.$t("container.tagHelper"),autosize:{minRows:2,maxRows:4},modelValue:a.optionStr,"onUpdate:modelValue":n[2]||(n[2]=s=>a.optionStr=s)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.subnet"),prop:"subnet"},{default:l(()=>[e(_,{clearable:"",modelValue:a.subnet,"onUpdate:modelValue":n[3]||(n[3]=s=>a.subnet=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.gateway"),prop:"gateway"},{default:l(()=>[e(_,{clearable:"",modelValue:a.gateway,"onUpdate:modelValue":n[4]||(n[4]=s=>a.gateway=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.scope"),prop:"scope"},{default:l(()=>[e(_,{clearable:"",modelValue:a.scope,"onUpdate:modelValue":n[5]||(n[5]=s=>a.scope=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:i.$t("container.tag"),prop:"labelStr"},{default:l(()=>[e(_,{type:"textarea",placeholder:i.$t("container.tagHelper"),autosize:{minRows:2,maxRows:4},modelValue:a.labelStr,"onUpdate:modelValue":n[6]||(n[6]=s=>a.labelStr=s)},null,8,["placeholder","modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[m,f.value]])]),_:1},8,["modelValue"])}}}),ze={class:"search-button"},De={key:0},Ie={key:0},ut=K({__name:"index",setup(x){const c=d(),C=d(),f=d(),p=d(),a=d([]),S=F({currentPage:1,pageSize:10,total:0}),k=d(),$=d("Running"),h=async()=>{c.value=!0,await Se().then(t=>{c.value=!1,$.value=t.data,$.value==="Running"&&u()}).catch(()=>{$.value="Failed",c.value=!1})},U=async()=>{fe.push({name:"ContainerSetting"})},i=d(),n=async()=>{i.value.acceptParams()};function _(t){return!t.isSystem}const u=async()=>{const t={info:k.value,page:S.currentPage,pageSize:S.pageSize};c.value=!0,await ke(t).then(o=>{c.value=!1,p.value=o.data.items||[];for(const m of p.value)m.isSystem=D(m.name);S.total=o.data.total}).catch(()=>{c.value=!1})},w=async t=>{let o=[];t===null?a.value.forEach(m=>{o.push(m.name)}):o.push(t.name),await Ee(Ve,{names:o},"commons.msg.delete"),u()},z=async t=>{const o=await Ce({id:t,type:"network"});C.value=JSON.stringify(JSON.parse(o.data),null,2);let m={header:M.global.t("commons.button.view"),detailInfo:C.value};f.value.acceptParams(m)};function D(t){return t==="bridge"||t==="1panel-network"||t==="none"||t==="host"}const I=[{label:M.global.t("commons.button.delete"),click:t=>{w(t)},disabled:t=>t.isSystem}];return re(()=>{h()}),(t,o)=>{const m=X,s=se,P=H,G=A,Q=J,g=ie,T=ue,W=be("fu-table-operations"),Z=Y;return L((b(),V("div",null,[$.value!="Running"?(b(),N(s,{key:0,class:"mask-prompt"},{default:l(()=>[E("span",null,v(t.$t("container.serviceUnavailable")),1),e(m,{type:"primary",link:"",class:"bt",onClick:U},{default:l(()=>[y("\u3010 "+v(t.$t("container.setting"))+" \u3011",1)]),_:1}),E("span",null,v(t.$t("container.startIn")),1)]),_:1})):R("",!0),e(ve,{title:t.$t("container.network"),class:ce({mask:$.value!="Running"})},{toolbar:l(()=>[e(Q,null,{default:l(()=>[e(P,{span:16},{default:l(()=>[e(m,{type:"primary",onClick:o[0]||(o[0]=r=>n())},{default:l(()=>[y(v(t.$t("container.createNetwork")),1)]),_:1}),e(m,{type:"primary",plain:"",disabled:a.value.length===0,onClick:o[1]||(o[1]=r=>w(null))},{default:l(()=>[y(v(t.$t("commons.button.delete")),1)]),_:1},8,["disabled"])]),_:1}),e(P,{span:8},{default:l(()=>[e(ye,{onSearch:o[2]||(o[2]=r=>u())}),E("div",ze,[e(G,{modelValue:k.value,"onUpdate:modelValue":o[3]||(o[3]=r=>k.value=r),clearable:"",onClear:o[4]||(o[4]=r=>u()),"suffix-icon":"Search",onKeyup:o[5]||(o[5]=me(r=>u(),["enter"])),onBlur:o[6]||(o[6]=r=>u()),placeholder:t.$t("commons.button.search")},null,8,["modelValue","placeholder"])])]),_:1})]),_:1})]),main:l(()=>[e(ge,{"pagination-config":S,selects:a.value,"onUpdate:selects":o[7]||(o[7]=r=>a.value=r),data:p.value,onSearch:u},{default:l(()=>[e(g,{type:"selection",selectable:_,fix:""}),e(g,{label:t.$t("commons.table.name"),"min-width":"80",prop:"name",fix:""},{default:l(({row:r})=>[e(_e,{onClick:B=>z(r.id),text:r.name},null,8,["onClick","text"])]),_:1},8,["label"]),e(g,{"min-width":"50"},{default:l(({row:r})=>[r.isSystem?(b(),N(T,{key:0,effect:"dark",round:""},{default:l(()=>[y("system")]),_:1})):R("",!0)]),_:1}),e(g,{label:t.$t("container.driver"),"show-overflow-tooltip":"","min-width":"40",prop:"driver"},null,8,["label"]),e(g,{label:t.$t("container.subnet"),"min-width":"80",prop:"subnet",fix:""},null,8,["label"]),e(g,{label:t.$t("container.gateway"),"min-width":"80",prop:"gateway",fix:""},null,8,["label"]),e(g,{label:t.$t("container.tag"),"min-width":"140",fix:""},{default:l(({row:r})=>[(b(!0),V(de,null,pe(r.labels,(B,O)=>(b(),V("div",{key:O},[r.expand||!r.expand&&O<3?(b(),V("div",De,[e(T,null,{default:l(()=>[y(v(B),1)]),_:2},1024)])):R("",!0)]))),128)),!r.expand&&r.labels.length>3?(b(),V("div",Ie,[e(m,{type:"primary",link:"",onClick:B=>r.expand=!0},{default:l(()=>[y(v(t.$t("commons.button.expand"))+"... ",1)]),_:2},1032,["onClick"])])):R("",!0)]),_:1},8,["label"]),e(g,{prop:"createdAt","min-width":"90",label:t.$t("commons.table.date"),formatter:j(Re)},null,8,["label","formatter"]),e(W,{buttons:I,label:t.$t("commons.table.operate"),fix:""},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])]),_:1},8,["title","class"]),e(he,{ref_key:"codemirror",ref:f},null,512),e(Ue,{onSearch:u,ref_key:"dialogCreateRef",ref:i},null,512)])),[[Z,c.value]])}}});export{ut as default};
