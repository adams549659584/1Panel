import{d as N,r as f,x as A,b as v,c as y,w as o,e as a,f as S,g as _,t as u,Y as F,y as P,a3 as Q,O as U,h as M,j as b,$ as z,a1 as j,a2 as W,av as Z,J as x,l as K,m as O,A as G,af as ee,a5 as J,o as ae,C as oe,aq as te,E as le,k as ne,ae as se,a6 as re,V as ue,ap as ie,X as de}from"./index-609fd921.js";/* empty css                */import"./tooltip-b30db216.js";/* empty css               *//* empty css            *//* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css             *//* empty css               */import{_ as me}from"./layout-content-47227111.js";import{_ as pe}from"./index-af1c8b2d.js";import{T as ce}from"./index-7cc1b133.js";import{_ as fe}from"./index-110fbc44.js";/* empty css                *//* empty css                    *//* empty css              */import"./form-item-d76e7d20.js";import{R as h}from"./form-rules-08616160.js";import{y as be,z as ve,l as _e,A as we,B as ge,D as $e}from"./container-94920957.js";import{b as he}from"./util-bdb43d7e.js";/* empty css                    *//* empty css                *//* empty css               *//* empty css               */import"./index-e09fb15b.js";const ye={key:0,class:"input-help"},ke={key:0,class:"input-help"},Ve={class:"dialog-footer"},De=N({__name:"index",emits:["search"],setup(L,{expose:i,emit:V}){const d=f(!1),w=f(""),m=f(!1),t=f({title:""}),I=s=>{t.value=s,w.value=b.global.t("commons.button."+t.value.title),m.value=!0},B=()=>{m.value=!1},p=A({name:[h.requiredInput,h.name],downloadUrl:[h.requiredInput],protocol:[h.requiredSelect],username:[h.requiredInput],password:[h.requiredInput],auth:[h.requiredSelect]}),D=f(),R=async s=>{!s||s.validate(async n=>{if(!!n){if(d.value=!0,t.value.title==="add"){await be(t.value.rowData).then(()=>{d.value=!1,z(b.global.t("commons.msg.operationSuccess")),V("search"),m.value=!1}).catch(()=>{d.value=!1});return}await ve(t.value.rowData).then(()=>{d.value=!1,z(b.global.t("commons.msg.operationSuccess")),V("search"),m.value=!1}).catch(()=>{d.value=!1})}})};return i({acceptParams:I}),(s,n)=>{const k=j,e=W,l=Z,g=x,T=K,C=O,E=G,q=ee,$=J;return v(),y(q,{modelValue:m.value,"onUpdate:modelValue":n[8]||(n[8]=r=>m.value=r),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:o(()=>[a(fe,{header:w.value+s.$t("container.repo"),back:B},null,8,["header"])]),footer:o(()=>[S("span",Ve,[a(E,{disabled:d.value,onClick:n[6]||(n[6]=r=>m.value=!1)},{default:o(()=>[_(u(s.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),a(E,{disabled:d.value,type:"primary",onClick:n[7]||(n[7]=r=>R(D.value))},{default:o(()=>[_(u(s.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:o(()=>[F((v(),y(P(Q),{ref_key:"formRef",ref:D,"label-position":"top",model:t.value.rowData,rules:p,"label-width":"120px"},{default:o(()=>[a(C,{type:"flex",justify:"center"},{default:o(()=>[a(T,{span:22},{default:o(()=>[a(e,{label:s.$t("container.name"),prop:"name"},{default:o(()=>[a(k,{clearable:"",disabled:t.value.title==="edit",modelValue:t.value.rowData.name,"onUpdate:modelValue":n[0]||(n[0]=r=>t.value.rowData.name=r),modelModifiers:{trim:!0}},null,8,["disabled","modelValue"])]),_:1},8,["label"]),a(e,{label:s.$t("container.auth"),prop:"auth"},{default:o(()=>[a(g,{modelValue:t.value.rowData.auth,"onUpdate:modelValue":n[1]||(n[1]=r=>t.value.rowData.auth=r)},{default:o(()=>[a(l,{label:!0},{default:o(()=>[_(u(s.$t("commons.true")),1)]),_:1}),a(l,{label:!1},{default:o(()=>[_(u(s.$t("commons.false")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t.value.rowData.auth?(v(),y(e,{key:0,label:s.$t("commons.login.username"),prop:"username"},{default:o(()=>[a(k,{clearable:"",modelValue:t.value.rowData.username,"onUpdate:modelValue":n[2]||(n[2]=r=>t.value.rowData.username=r),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),t.value.rowData.auth?(v(),y(e,{key:1,label:s.$t("commons.login.password"),prop:"password"},{default:o(()=>[a(k,{clearable:"",type:"password","show-password":"",modelValue:t.value.rowData.password,"onUpdate:modelValue":n[3]||(n[3]=r=>t.value.rowData.password=r),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),a(e,{label:s.$t("container.downloadUrl"),prop:"downloadUrl"},{default:o(()=>[a(k,{clearable:"",modelValue:t.value.rowData.downloadUrl,"onUpdate:modelValue":n[4]||(n[4]=r=>t.value.rowData.downloadUrl=r),modelModifiers:{trim:!0},placeholder:"172.16.10.10:8081"},null,8,["modelValue","placeholder"]),t.value.rowData.downloadUrl?(v(),M("span",ye," docker pull "+u(t.value.rowData.downloadUrl)+"/nginx ",1)):U("",!0)]),_:1},8,["label"]),a(e,{label:s.$t("container.protocol"),prop:"protocol"},{default:o(()=>[a(g,{modelValue:t.value.rowData.protocol,"onUpdate:modelValue":n[5]||(n[5]=r=>t.value.rowData.protocol=r)},{default:o(()=>[a(l,{label:"http"},{default:o(()=>[_("http")]),_:1}),a(l,{label:"https"},{default:o(()=>[_("https")]),_:1})]),_:1},8,["modelValue"]),t.value.rowData.protocol==="http"?(v(),M("span",ke,u(s.$t("container.httpRepo")),1)):U("",!0)]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[$,d.value]])]),_:1},8,["modelValue"])}}}),Se={class:"search-button"},Ue={style:{width:"300px","word-break":"break-all"}},aa=N({__name:"index",setup(L){const i=f(),V=f(),d=f([]),w=A({currentPage:1,pageSize:10,total:0}),m=f(),t=f("Running"),I=async()=>{i.value=!0,await _e().then(e=>{i.value=!1,t.value=e.data,t.value==="Running"&&p()}).catch(()=>{t.value="Failed",i.value=!1})},B=async()=>{ue.push({name:"ContainerSetting"})},p=async()=>{let e={info:m.value,page:w.currentPage,pageSize:w.pageSize};i.value=!0,await we(e).then(l=>{i.value=!1,V.value=l.data.items||[],w.total=l.data.total}).catch(()=>{i.value=!1})},D=f(),R=async(e,l={auth:!0,protocol:"http"})=>{let g={title:e,rowData:{...l}};D.value.acceptParams(g)},s=async e=>{ie.confirm(b.global.t("commons.msg.delete"),b.global.t("commons.button.delete"),{confirmButtonText:b.global.t("commons.button.confirm"),cancelButtonText:b.global.t("commons.button.cancel")}).then(async()=>{await ge({ids:[e.id]}),p()})},n=async e=>{i.value=!0,await $e(e.id).then(()=>{i.value=!1,p()}).catch(()=>{i.value=!1})},k=[{label:b.global.t("commons.button.sync"),click:e=>{n(e)}},{label:b.global.t("commons.button.edit"),disabled:e=>e.downloadUrl==="docker.io",click:e=>{R("edit",e)}},{label:b.global.t("commons.button.delete"),disabled:e=>e.downloadUrl==="docker.io",click:e=>{s(e)}}];return ae(()=>{I()}),(e,l)=>{const g=G,T=oe,C=K,E=j,q=O,$=te,r=le,X=ne,Y=de("fu-table-operations"),H=J;return F((v(),M("div",null,[t.value!="Running"?(v(),y(T,{key:0,class:"mask-prompt"},{default:o(()=>[S("span",null,u(e.$t("container.serviceUnavailable")),1),a(g,{type:"primary",link:"",class:"bt",onClick:B},{default:o(()=>[_("\u3010 "+u(e.$t("container.setting"))+" \u3011",1)]),_:1}),S("span",null,u(e.$t("container.startIn")),1)]),_:1})):U("",!0),a(me,{title:e.$t("container.repo"),class:re({mask:t.value!="Running"})},{toolbar:o(()=>[a(q,null,{default:o(()=>[a(C,{span:16},{default:o(()=>[a(g,{type:"primary",onClick:l[0]||(l[0]=c=>R("add"))},{default:o(()=>[_(u(e.$t("container.createRepo")),1)]),_:1})]),_:1}),a(C,{span:8},{default:o(()=>[a(ce,{onSearch:l[1]||(l[1]=c=>p())}),S("div",Se,[a(E,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=c=>m.value=c),clearable:"",onClear:l[3]||(l[3]=c=>p()),"suffix-icon":"Search",onKeyup:l[4]||(l[4]=se(c=>p(),["enter"])),onBlur:l[5]||(l[5]=c=>p()),placeholder:e.$t("commons.button.search")},null,8,["modelValue","placeholder"])])]),_:1})]),_:1})]),main:o(()=>[a(pe,{"pagination-config":w,selects:d.value,"onUpdate:selects":l[6]||(l[6]=c=>d.value=c),data:V.value,onSearch:p},{default:o(()=>[a($,{label:e.$t("commons.table.name"),prop:"name","min-width":"60"},null,8,["label"]),a($,{label:e.$t("container.downloadUrl"),"show-overflow-tooltip":"",prop:"downloadUrl","min-width":"100",fix:""},null,8,["label"]),a($,{label:e.$t("container.protocol"),prop:"protocol","min-width":"60",fix:""},null,8,["label"]),a($,{label:e.$t("commons.table.status"),prop:"status","min-width":"60",fix:""},{default:o(({row:c})=>[c.status==="Success"?(v(),y(r,{key:0,type:"success"},{default:o(()=>[_(u(e.$t("commons.status.success")),1)]),_:1})):(v(),y(X,{key:1,effect:"dark",placement:"bottom"},{content:o(()=>[S("div",Ue,u(c.message),1)]),default:o(()=>[a(r,{type:"danger"},{default:o(()=>[_(u(e.$t("commons.status.failed")),1)]),_:1})]),_:2},1024))]),_:1},8,["label"]),a($,{prop:"createdAt",label:e.$t("commons.table.createdAt"),"min-width":"80",fix:"",formatter:P(he)},null,8,["label","formatter"]),a(Y,{buttons:k,label:e.$t("commons.table.operate")},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])]),_:1},8,["title","class"]),a(De,{onSearch:p,ref_key:"dialogRef",ref:D},null,512)])),[[H,i.value]])}}});export{aa as default};
