import{d as ve,r as _,x as ie,j as u,b as s,c as v,w as o,e as n,f as D,g as f,t as l,y as g,a3 as Ue,h as m,F as x,i as ee,O as p,U as We,$ as re,K as Be,L as Le,E as qe,a2 as ze,a1 as Oe,a4 as aa,aw as ta,l as ye,m as we,A as fe,af as oa,_ as la,X as ue,Y as be,ap as Ae,ac as na,C as sa,aK as ra,a0 as ua,p as ia,k as ca,aL as da,a5 as Pe,q as pa,s as ma,o as ba,aq as va,ae as ya}from"./index-609fd921.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css            *//* empty css            *//* empty css              *//* empty css               */import{_ as wa}from"./index-af1c8b2d.js";import{T as fa}from"./index-7cc1b133.js";import{_ as Da}from"./index-f10fbc50.js";import{_ as ga}from"./index-110fbc44.js";/* empty css                *//* empty css                     */import"./form-item-d76e7d20.js";/* empty css               *//* empty css               */import{R as C,c as pe}from"./form-rules-08616160.js";import{_ as _a}from"./index-92745349.js";import{g as ka}from"./setting-34057840.js";import{h as Z}from"./index-e09fb15b.js";import{l as ha}from"./database-a590100c.js";import{C as $a}from"./app-1a8bdb12.js";import{G as ja}from"./website-6075ac25.js";/* empty css             */import"./tooltip-b30db216.js";/* empty css                *//* empty css             *//* empty css                    *//* empty css             *//* empty css                    */import{_ as Ta}from"./no_app-68a0aee4.js";import{l as V,b as me}from"./util-bdb43d7e.js";import{D as Sa,L as Va}from"./files-c7fff4dc.js";import{_ as Fe}from"./layout-content-47227111.js";import{j as Na,o as Ca,T as Ra}from"./index-5eb40136.js";import{_ as Ea}from"./index-f14047dc.js";import{u as Ia}from"./use-delete-data-3fb8ebbf.js";/* empty css               *//* empty css              *//* empty css             *//* empty css                     */import"./base64-e52cbffd.js";/* empty css                    *//* empty css                     *//* empty css              */const Ha=h=>Z.post("/cronjobs/search",h),Ma=h=>Z.post("/cronjobs",h),Ua=h=>Z.post("/cronjobs/update",h),Wa=h=>Z.post("/cronjobs/del",h),Ba=h=>Z.post("cronjobs/search/records",h),Ke=h=>Z.post("cronjobs/status",h),La=h=>Z.post("cronjobs/download",h),Ge=h=>Z.post("cronjobs/handle",{id:h}),qa={key:2},za={key:4},Oa={class:"dialog-footer"},Aa=ve({__name:"index",emits:["search"],setup(h,{expose:M,emit:U}){const z=_(""),I=_(!1),t=_({title:""}),P=r=>{t.value=r,t.value.title==="create"&&Q(),z.value=u.global.t("commons.button."+t.value.title),I.value=!0,S(),c(),b()},d=()=>{I.value=!1},$=_(),j=_(),W=_(),R=ie({isExist:!1,name:"",version:"",dbNames:[]}),J=(r,e,a)=>{switch(t.value.rowData.specType){case"perMonth":case"perNDay":Number.isInteger(t.value.rowData.day)&&Number.isInteger(t.value.rowData.hour)&&Number.isInteger(t.value.rowData.minute)||a(new Error(u.global.t("cronjob.cronSpecRule")));break;case"perWeek":Number.isInteger(t.value.rowData.week)&&Number.isInteger(t.value.rowData.hour)&&Number.isInteger(t.value.rowData.minute)||a(new Error(u.global.t("cronjob.cronSpecRule")));break;case"perDay":Number.isInteger(t.value.rowData.hour)&&Number.isInteger(t.value.rowData.minute)||a(new Error(u.global.t("cronjob.cronSpecRule")));break;case"perNHour":Number.isInteger(t.value.rowData.hour)&&Number.isInteger(t.value.rowData.minute)||a(new Error(u.global.t("cronjob.cronSpecRule")));break;case"perHour":case"perNMinute":Number.isInteger(t.value.rowData.minute)||a(new Error(u.global.t("cronjob.cronSpecRule")));break}a()},ae=[{label:u.global.t("cronjob.perMonth"),value:"perMonth"},{label:u.global.t("cronjob.perWeek"),value:"perWeek"},{label:u.global.t("cronjob.perDay"),value:"perDay"},{label:u.global.t("cronjob.perHour"),value:"perHour"},{label:u.global.t("cronjob.perNDay"),value:"perNDay"},{label:u.global.t("cronjob.perNHour"),value:"perNHour"},{label:u.global.t("cronjob.perNMinute"),value:"perNMinute"}],le=[{label:u.global.t("cronjob.monday"),value:1},{label:u.global.t("cronjob.tuesday"),value:2},{label:u.global.t("cronjob.wednesday"),value:3},{label:u.global.t("cronjob.thursday"),value:4},{label:u.global.t("cronjob.friday"),value:5},{label:u.global.t("cronjob.saturday"),value:6},{label:u.global.t("cronjob.sunday"),value:7}],L=ie({name:[C.requiredInput],type:[C.requiredSelect],specType:[C.requiredSelect],spec:[{validator:J,trigger:"blur",required:!0},{validator:J,trigger:"change",required:!0}],week:[C.requiredSelect,C.number],day:[C.number,pe(1,31)],hour:[C.number,pe(1,23)],minute:[C.number,pe(1,59)],script:[C.requiredInput],website:[C.requiredSelect],dbName:[C.requiredSelect],url:[C.requiredInput],sourceDir:[C.requiredSelect],targetDirID:[C.requiredSelect,C.number],retainCopies:[C.number]}),y=_(),ne=async r=>{t.value.rowData.sourceDir=r},Q=()=>{switch(t.value.rowData.type){case"shell":t.value.rowData.specType="perWeek",t.value.rowData.week=1,t.value.rowData.hour=1,t.value.rowData.minute=30;break;case"database":t.value.rowData.specType="perDay",t.value.rowData.hour=2,t.value.rowData.minute=30;break;case"website":t.value.rowData.specType="perWeek",t.value.rowData.week=1,t.value.rowData.hour=1,t.value.rowData.minute=30;break;case"directory":t.value.rowData.specType="perDay",t.value.rowData.hour=1,t.value.rowData.minute=30;break;case"curl":t.value.rowData.specType="perWeek",t.value.rowData.week=1,t.value.rowData.hour=1,t.value.rowData.minute=30;break}},c=async()=>{const r=await ka();W.value=[];for(const e of r.data)e.id!==0&&(e.type==="LOCAL"&&($.value=e.id,t.value.rowData.targetDirID||(t.value.rowData.targetDirID=e.id)),W.value.push({label:u.global.t("setting."+e.type),value:e.id}))},b=async()=>{const r=await ja();j.value=r.data},S=async()=>{const r=await $a("mysql");if(R.isExist=r.data.isExist,R.name=r.data.name,R.version=r.data.version,R.isExist){const e=await ha();R.dbNames=e.data}};function te(){return t.value.rowData.type==="website"||t.value.rowData.type==="database"||t.value.rowData.type==="directory"}function se(){return t.value.rowData.type==="shell"}function oe(){let r=t.value.rowData;switch(r.specType){case"perMonth":return r.day>0&&r.day<32&&r.hour>=0&&r.hour<24&&r.minute>=0&&r.minute<60;case"perWeek":return r.week>0&&r.week<8&&r.hour>=0&&r.hour<24&&r.minute>=0&&r.minute<60;case"perDay":return r.hour>=0&&r.hour<24&&r.minute>=0&&r.minute<60;case"perHour":return r.minute>0&&r.minute<60;case"perNDay":return r.day>0&&r.day<366&&r.hour>=0&&r.hour<24&&r.minute>=0&&r.minute<60;case"perNHour":return r.hour>0&&r.hour<8784&&r.minute>=0&&r.minute<60;case"perNMinute":return r.minute>0&&r.minute<527040}}const H=async r=>{if(t.value.rowData.week=Number(t.value.rowData.week),t.value.rowData.day=Number(t.value.rowData.day),t.value.rowData.hour=Number(t.value.rowData.hour),t.value.rowData.minute=Number(t.value.rowData.minute),!oe()){We(u.global.t("cronjob.cronSpecHelper"));return}!r||r.validate(async e=>{!e||!t.value.rowData||(t.value.title==="create"&&await Ma(t.value.rowData),t.value.title==="edit"&&await Ua(t.value.rowData),re(u.global.t("commons.msg.operationSuccess")),U("search"),I.value=!1)})};return M({acceptParams:P}),(r,e)=>{const a=Be,w=Le,B=qe,N=ze,E=Oe,F=aa,K=ta,O=ye,ce=we,G=fe,de=oa;return s(),v(de,{modelValue:I.value,"onUpdate:modelValue":e[18]||(e[18]=i=>I.value=i),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:o(()=>[n(ga,{header:r.$t("cronjob.cronTask"),back:d},null,8,["header"])]),footer:o(()=>[D("span",Oa,[n(G,{onClick:e[16]||(e[16]=i=>I.value=!1)},{default:o(()=>[f(l(r.$t("commons.button.cancel")),1)]),_:1}),n(G,{type:"primary",onClick:e[17]||(e[17]=i=>H(y.value))},{default:o(()=>[f(l(r.$t("commons.button.confirm")),1)]),_:1})])]),default:o(()=>[n(g(Ue),{ref_key:"formRef",ref:y,"label-position":"top",model:t.value.rowData,rules:L},{default:o(()=>[n(ce,{type:"flex",justify:"center"},{default:o(()=>[n(O,{span:22},{default:o(()=>[n(N,{label:r.$t("cronjob.taskType"),prop:"type"},{default:o(()=>[t.value.title==="create"?(s(),v(w,{key:0,style:{width:"100%"},onChange:Q,modelValue:t.value.rowData.type,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value.rowData.type=i)},{default:o(()=>[n(a,{value:"shell",label:r.$t("cronjob.shell")},null,8,["label"]),n(a,{value:"website",label:r.$t("cronjob.website")},null,8,["label"]),n(a,{value:"database",label:r.$t("cronjob.database")},null,8,["label"]),n(a,{value:"directory",label:r.$t("cronjob.directory")},null,8,["label"]),n(a,{value:"curl",label:r.$t("cronjob.curl")},null,8,["label"])]),_:1},8,["modelValue"])):(s(),v(B,{key:1},{default:o(()=>[f(l(t.value.rowData.type),1)]),_:1}))]),_:1},8,["label"]),n(N,{label:r.$t("cronjob.taskName"),prop:"name"},{default:o(()=>[n(E,{style:{width:"100%"},clearable:"",modelValue:t.value.rowData.name,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value.rowData.name=i),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),n(N,{label:r.$t("cronjob.cronSpec"),prop:"spec"},{default:o(()=>[n(w,{style:{width:"20%"},modelValue:t.value.rowData.specType,"onUpdate:modelValue":e[2]||(e[2]=i=>t.value.rowData.specType=i)},{default:o(()=>[(s(),m(x,null,ee(ae,i=>n(a,{key:i.label,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"]),t.value.rowData.specType==="perWeek"?(s(),v(w,{key:0,style:{width:"12%","margin-left":"20px"},modelValue:t.value.rowData.week,"onUpdate:modelValue":e[3]||(e[3]=i=>t.value.rowData.week=i)},{default:o(()=>[(s(),m(x,null,ee(le,i=>n(a,{key:i.label,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])):p("",!0),t.value.rowData.specType==="perMonth"||t.value.rowData.specType==="perNDay"?(s(),v(E,{key:1,style:{width:"20%","margin-left":"20px"},modelValue:t.value.rowData.day,"onUpdate:modelValue":e[4]||(e[4]=i=>t.value.rowData.day=i),modelModifiers:{number:!0}},{append:o(()=>[f(l(r.$t("cronjob.day")),1)]),_:1},8,["modelValue"])):p("",!0),t.value.rowData.specType!=="perHour"&&t.value.rowData.specType!=="perNMinute"?(s(),v(E,{key:2,style:{width:"20%","margin-left":"20px"},modelValue:t.value.rowData.hour,"onUpdate:modelValue":e[5]||(e[5]=i=>t.value.rowData.hour=i),modelModifiers:{number:!0}},{append:o(()=>[f(l(r.$t("cronjob.hour")),1)]),_:1},8,["modelValue"])):p("",!0),n(E,{style:{width:"20%","margin-left":"20px"},modelValue:t.value.rowData.minute,"onUpdate:modelValue":e[6]||(e[6]=i=>t.value.rowData.minute=i),modelModifiers:{number:!0}},{append:o(()=>[f(l(r.$t("cronjob.minute")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),se()?(s(),v(N,{key:0,label:r.$t("cronjob.shellContent"),prop:"script"},{default:o(()=>[n(E,{style:{width:"100%"},clearable:"",type:"textarea",autosize:{minRows:3,maxRows:6},modelValue:t.value.rowData.script,"onUpdate:modelValue":e[7]||(e[7]=i=>t.value.rowData.script=i)},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),t.value.rowData.type==="website"?(s(),v(N,{key:1,label:r.$t("cronjob.website"),prop:"website"},{default:o(()=>[n(w,{style:{width:"100%"},modelValue:t.value.rowData.website,"onUpdate:modelValue":e[8]||(e[8]=i=>t.value.rowData.website=i)},{default:o(()=>[(s(!0),m(x,null,ee(j.value,i=>(s(),v(a,{key:i,value:i,label:i},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):p("",!0),t.value.rowData.type==="database"?(s(),m("div",qa,[n(N,{label:r.$t("cronjob.database"),prop:"dbName"},{default:o(()=>[n(w,{style:{width:"100%"},clearable:"",modelValue:t.value.rowData.dbName,"onUpdate:modelValue":e[9]||(e[9]=i=>t.value.rowData.dbName=i)},{default:o(()=>[(s(!0),m(x,null,ee(R.dbNames,i=>(s(),v(a,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])])):p("",!0),t.value.rowData.type==="directory"?(s(),v(N,{key:3,label:r.$t("cronjob.sourceDir"),prop:"sourceDir"},{default:o(()=>[n(E,{style:{width:"100%"},modelValue:t.value.rowData.sourceDir,"onUpdate:modelValue":e[10]||(e[10]=i=>t.value.rowData.sourceDir=i)},{prepend:o(()=>[n(_a,{onChoose:ne,dir:!0})]),_:1},8,["modelValue"])]),_:1},8,["label"])):p("",!0),te()?(s(),m("div",za,[n(N,{label:r.$t("cronjob.target"),prop:"targetDirID"},{default:o(()=>[n(w,{style:{width:"100%"},modelValue:t.value.rowData.targetDirID,"onUpdate:modelValue":e[11]||(e[11]=i=>t.value.rowData.targetDirID=i)},{default:o(()=>[(s(!0),m(x,null,ee(W.value,i=>(s(),v(a,{key:i.label,value:i.value,label:i.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t.value.rowData.targetDirID!==$.value?(s(),v(N,{key:0},{default:o(()=>[n(F,{modelValue:t.value.rowData.keepLocal,"onUpdate:modelValue":e[12]||(e[12]=i=>t.value.rowData.keepLocal=i)},{default:o(()=>[f(l(r.$t("cronjob.saveLocal")),1)]),_:1},8,["modelValue"])]),_:1})):p("",!0),n(N,{label:r.$t("cronjob.retainCopies"),prop:"retainCopies"},{default:o(()=>[n(K,{min:1,max:30,"step-strictly":"",step:1,modelValue:t.value.rowData.retainCopies,"onUpdate:modelValue":e[13]||(e[13]=i=>t.value.rowData.retainCopies=i),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["label"])])):p("",!0),t.value.rowData.type==="curl"?(s(),v(N,{key:5,label:r.$t("cronjob.url"),prop:"url"},{default:o(()=>[n(E,{style:{width:"100%"},clearable:"",modelValue:t.value.rowData.url,"onUpdate:modelValue":e[14]||(e[14]=i=>t.value.rowData.url=i),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),t.value.rowData.type==="directory"?(s(),v(N,{key:6,label:r.$t("cronjob.exclusionRules"),prop:"exclusionRules"},{default:o(()=>[n(E,{style:{width:"100%"},type:"textarea",placeholder:r.$t("cronjob.rulesHelper"),autosize:{minRows:3,maxRows:6},clearable:"",modelValue:t.value.rowData.exclusionRules,"onUpdate:modelValue":e[15]||(e[15]=i=>t.value.rowData.exclusionRules=i)},null,8,["placeholder","modelValue"])]),_:1},8,["label"])):p("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}});const Pa=h=>(pa("data-v-f521edd4"),h=h(),ma(),h),Fa={key:0},Ka={class:"a-card",style:{"margin-top":"20px"}},Ga={key:0},Xa={key:1},Ya={key:2},Za={key:3},Ja={key:4},Qa={key:5},xa={key:6},et={key:7},at={class:"buttons"},tt={class:"infinite-list",style:{overflow:"auto"}},ot=["onClick"],lt={key:3,style:{color:"red"}},nt={key:4},st={style:{"margin-top":"10px","margin-bottom":"5px","font-size":"12px",float:"right"}},rt={class:"status-label"},ut={class:"status-count"},it={class:"status-label"},ct={class:"status-count"},dt={class:"status-label"},pt={class:"status-count"},mt={class:"status-label"},bt={key:0,class:"status-count"},vt={key:1},yt={class:"status-count"},wt={class:"status-label"},ft={class:"status-count"},Dt={class:"status-label"},gt={key:0},_t={key:1,class:"status-count"},kt={class:"status-label"},ht={class:"status-count"},$t={class:"status-label"},jt={key:0,class:"status-count"},Tt={key:1,class:"status-count"},St={class:"status-label"},Vt={style:{width:"300px","word-break":"break-all"}},Nt={key:1,class:"app-warn"},Ct=Pa(()=>D("div",null,[D("img",{src:Ta})],-1)),Rt=ve({__name:"index",setup(h,{expose:M}){const U=_(),z=_(),I=_(),t=[Na(),Ca],P=_(!1),d=_(),$=_([]),j=_(),W=_(""),R=_(),J=async e=>{d.value=e,P.value=!0,c(!0)},ae=[{text:u.global.t("monitor.today"),value:()=>{const e=new Date(new Date().setHours(23,59,59,999));return[new Date(new Date().setHours(0,0,0,0)),e]}},{text:u.global.t("monitor.yestoday"),value:()=>{const e=new Date(new Date().getTime()-864e5),a=new Date(e.setHours(23,59,59,999));return[new Date(e.setHours(0,0,0,0)),a]}},{text:u.global.t("monitor.lastNDay",[3]),value:()=>{const e=new Date(new Date().getTime()-2592e5),a=new Date(new Date().setHours(23,59,59,999));return[new Date(e.setHours(0,0,0,0)),a]}},{text:u.global.t("monitor.lastNDay",[7]),value:()=>{const e=new Date(new Date().getTime()-6048e5),a=new Date(new Date().setHours(23,59,59,999));return[new Date(e.setHours(0,0,0,0)),a]}},{text:u.global.t("monitor.lastNDay",[30]),value:()=>{const e=new Date(new Date().getTime()-2592e6),a=new Date(new Date().setHours(23,59,59,999));return[new Date(e.setHours(0,0,0,0)),a]}}],le=[{label:u.global.t("cronjob.monday"),value:1},{label:u.global.t("cronjob.tuesday"),value:2},{label:u.global.t("cronjob.wednesday"),value:3},{label:u.global.t("cronjob.thursday"),value:4},{label:u.global.t("cronjob.friday"),value:5},{label:u.global.t("cronjob.saturday"),value:6},{label:u.global.t("cronjob.sunday"),value:7}],L=_([new Date(new Date(new Date().getTime()-3600*1e3*24*7).setHours(0,0,0,0)),new Date(new Date().setHours(23,59,59,999))]),y=ie({page:1,pageSize:12,recordTotal:0,cronjobID:0,startTime:new Date,endTime:new Date,status:""}),ne=async e=>{U.value=!0,await Ge(e.id).then(()=>{U.value=!1,re(u.global.t("commons.msg.operationSuccess")),y.pageSize=y.pageSize*y.page,y.page=1,$.value=[],c(!1)}).catch(()=>{U.value=!1})},Q=async(e,a)=>{Ae.confirm(u.global.t("cronjob."+a+"Msg"),u.global.t("cronjob.changeStatus"),{confirmButtonText:u.global.t("commons.button.confirm"),cancelButtonText:u.global.t("commons.button.cancel")}).then(async()=>{let w=a==="enable"?"Enable":"Disable";await Ke({id:e,status:w}),re(u.global.t("commons.msg.operationSuccess")),d.value.rowData.status=w})},c=async e=>{e&&(y.page=1,y.pageSize=12,$.value=[]),L.value&&L.value.length===2?(y.startTime=L.value[0],y.endTime=L.value[1]):(y.startTime=new Date(new Date().setHours(0,0,0,0)),y.endTime=new Date);let a={page:y.page,pageSize:y.pageSize,cronjobID:d.value.rowData.id,startTime:y.startTime,endTime:y.endTime,status:y.status};const w=await Ba(a);if(y.page===1&&!w.data.items){z.value=!1;return}if(!!w.data.items){for(const B of w.data.items)$.value.push(B);z.value=!0,j.value=$.value[0],R.value=0,oe(j.value),y.recordTotal=w.data.total}},b=()=>{$.value=[],y.pageSize=y.pageSize*y.page,y.page=1,c(!0)},S=async(e,a)=>{if(!e.file||e.file.indexOf("/")===-1){We(u.global.t("cronjob.errPath",[e.file]));return}let w={recordID:e.id,backupAccountID:a};await La(w).then(async B=>{const N=await Sa(B.data),E=window.URL.createObjectURL(new Blob([N])),F=document.createElement("a");if(F.style.display="none",F.href=E,e.file&&e.file.indexOf("/")!==-1){let O=e.file.split("/");F.download=O[O.length-1]}const K=new MouseEvent("click");F.dispatchEvent(K)})},te=async()=>{y.pageSize>=y.recordTotal||(y.page=y.page+1,c(!1))},se=async(e,a)=>{j.value=e,R.value=a,oe(e)},oe=async e=>{if(e.status==="Failed"){W.value=e.records;return}if(e.records){const a=await Va({path:e.records});W.value=a.data}};function H(){return d.value.rowData.type==="website"||d.value.rowData.type==="database"||d.value.rowData.type==="directory"}function r(e){for(const a of le)if(a.value===e)return a.label;return""}return M({acceptParams:J}),(e,a)=>{const w=qe,B=fe,N=na,E=sa,F=ra,K=ye,O=Be,ce=Le,G=we,de=ue("Select"),i=ua,Xe=ue("Loading"),Ye=ue("CloseBold"),A=ze,Ze=ia,Je=ca,Qe=Ue,xe=da,ea=Pe;return P.value?be((s(),m("div",Fa,[D("div",Ka,[n(E,null,{default:o(()=>[D("div",null,[n(w,{style:{float:"left"},effect:"dark",type:"success"},{default:o(()=>[f(l(e.$t("cronjob."+d.value.rowData.type)),1)]),_:1}),d.value.rowData.status==="Enable"?(s(),v(w,{key:0,round:"",class:"status-content",type:"success"},{default:o(()=>[f(l(e.$t("commons.status.running")),1)]),_:1})):p("",!0),d.value.rowData.status==="Disable"?(s(),v(w,{key:1,round:"",class:"status-content",type:"info"},{default:o(()=>[f(l(e.$t("commons.status.stopped")),1)]),_:1})):p("",!0),n(w,{class:"status-content"},{default:o(()=>{var T,k,q,X,Y,De,ge,_e,ke,he,$e,je,Te,Se,Ve,Ne,Ce,Re,Ee,Ie,He,Me;return[((T=d.value.rowData)==null?void 0:T.specType.indexOf("N"))===-1||((k=d.value.rowData)==null?void 0:k.specType)==="perWeek"?(s(),m("span",Ga,l(e.$t("cronjob."+((q=d.value.rowData)==null?void 0:q.specType)))+"\xA0 ",1)):(s(),m("span",Xa,l(e.$t("cronjob.per")),1)),((X=d.value.rowData)==null?void 0:X.specType)==="perMonth"?(s(),m("span",Ya,l((Y=d.value.rowData)==null?void 0:Y.day)+l(e.$t("cronjob.day"))+"\xA0 "+l(g(V)((De=d.value.rowData)==null?void 0:De.hour))+" : "+l(g(V)((ge=d.value.rowData)==null?void 0:ge.minute)),1)):p("",!0),((_e=d.value.rowData)==null?void 0:_e.specType)==="perWeek"?(s(),m("span",Za,l(r((ke=d.value.rowData)==null?void 0:ke.week))+"\xA0 "+l(g(V)((he=d.value.rowData)==null?void 0:he.hour))+" : "+l(g(V)(($e=d.value.rowData)==null?void 0:$e.minute)),1)):p("",!0),((je=d.value.rowData)==null?void 0:je.specType)==="perNDay"?(s(),m("span",Ja,l((Te=d.value.rowData)==null?void 0:Te.day)+l(e.$t("cronjob.day1"))+",\xA0 "+l(g(V)((Se=d.value.rowData)==null?void 0:Se.hour))+" : "+l(g(V)((Ve=d.value.rowData)==null?void 0:Ve.minute)),1)):p("",!0),((Ne=d.value.rowData)==null?void 0:Ne.specType)==="perNHour"?(s(),m("span",Qa,l((Ce=d.value.rowData)==null?void 0:Ce.hour)+l(e.$t("cronjob.hour"))+",\xA0 "+l(g(V)((Re=d.value.rowData)==null?void 0:Re.minute)),1)):p("",!0),((Ee=d.value.rowData)==null?void 0:Ee.specType)==="perHour"?(s(),m("span",xa," \xA0"+l(g(V)((Ie=d.value.rowData)==null?void 0:Ie.minute)),1)):p("",!0),((He=d.value.rowData)==null?void 0:He.specType)==="perNMinute"?(s(),m("span",et," \xA0"+l((Me=d.value.rowData)==null?void 0:Me.minute)+l(e.$t("cronjob.minute")),1)):p("",!0),f(" \xA0"+l(e.$t("cronjob.handle")),1)]}),_:1}),D("span",at,[n(B,{type:"primary",onClick:b,link:""},{default:o(()=>[f(l(e.$t("commons.button.refresh")),1)]),_:1}),n(N,{direction:"vertical"}),n(B,{type:"primary",onClick:a[0]||(a[0]=T=>ne(d.value.rowData)),link:""},{default:o(()=>[f(l(e.$t("commons.button.handle")),1)]),_:1}),n(N,{direction:"vertical"}),d.value.rowData.status==="Enable"?(s(),v(B,{key:0,type:"primary",onClick:a[1]||(a[1]=T=>Q(d.value.rowData.id,"disable")),link:""},{default:o(()=>[f(l(e.$t("commons.button.disable")),1)]),_:1})):p("",!0),d.value.rowData.status==="Disable"?(s(),v(B,{key:1,type:"primary",onClick:a[2]||(a[2]=T=>Q(d.value.rowData.id,"enable")),link:""},{default:o(()=>[f(l(e.$t("commons.button.enable")),1)]),_:1})):p("",!0)])])]),_:1})]),n(Fe,{title:e.$t("cronjob.record"),reload:!0},{search:o(()=>[n(G,{gutter:20},{default:o(()=>[n(K,{span:8},{default:o(()=>[n(F,{style:{width:"calc(100% - 20px)"},onChange:a[3]||(a[3]=T=>c(!0)),modelValue:L.value,"onUpdate:modelValue":a[4]||(a[4]=T=>L.value=T),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:ae},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),_:1}),n(K,{span:16},{default:o(()=>[n(ce,{onChange:a[5]||(a[5]=T=>c(!0)),modelValue:y.status,"onUpdate:modelValue":a[6]||(a[6]=T=>y.status=T)},{prefix:o(()=>[f(l(e.$t("commons.table.status")),1)]),default:o(()=>[n(O,{label:e.$t("commons.table.all"),value:""},null,8,["label"]),n(O,{label:e.$t("commons.status.success"),value:"Success"},null,8,["label"]),n(O,{label:e.$t("commons.status.waiting"),value:"Waiting"},null,8,["label"]),n(O,{label:e.$t("commons.status.failed"),value:"Failed"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),main:o(()=>[z.value?(s(),v(G,{key:0,gutter:20},{default:o(()=>[n(K,{span:8},{default:o(()=>[n(E,null,{default:o(()=>[be((s(),m("ul",tt,[(s(!0),m(x,null,ee($.value,(T,k)=>(s(),m("li",{key:k,onClick:q=>se(T,k),class:"infinite-list-item"},[T.status==="Success"?(s(),v(i,{key:0},{default:o(()=>[n(de)]),_:1})):p("",!0),T.status==="Waiting"?(s(),v(i,{key:1},{default:o(()=>[n(Xe)]),_:1})):p("",!0),T.status==="Failed"?(s(),v(i,{key:2},{default:o(()=>[n(Ye)]),_:1})):p("",!0),k===R.value?(s(),m("span",lt,l(g(me)(0,0,T.startTime)),1)):(s(),m("span",nt,l(g(me)(0,0,T.startTime)),1))],8,ot))),128))])),[[xe,te]]),D("div",st,[D("span",null,l(e.$t("commons.table.total",[y.recordTotal])),1)])]),_:1})]),_:1}),n(K,{span:16},{default:o(()=>[n(Qe,{"label-position":"top"},{default:o(()=>{var T;return[n(G,{type:"flex",justify:"center"},{default:o(()=>[H()?(s(),v(A,{key:0,class:"descriptionWide"},{label:o(()=>[D("span",rt,l(e.$t("cronjob.target")),1)]),default:o(()=>{var k;return[D("span",ut,l(d.value.rowData.targetDir),1),((k=j.value)==null?void 0:k.status)==="Success"?(s(),v(B,{key:0,type:"primary",style:{"margin-left":"10px"},link:"",icon:"Download",onClick:a[7]||(a[7]=q=>S(j.value,d.value.rowData.targetDirID))},{default:o(()=>[f(l(e.$t("file.download")),1)]),_:1})):p("",!0)]}),_:1})):p("",!0),d.value.rowData.type==="website"?(s(),v(A,{key:1,class:"description"},{label:o(()=>[D("span",it,l(e.$t("cronjob.website")),1)]),default:o(()=>[D("span",ct,l(d.value.rowData.website),1)]),_:1})):p("",!0),d.value.rowData.type==="database"?(s(),v(A,{key:2,class:"description"},{label:o(()=>[D("span",dt,l(e.$t("cronjob.database")),1)]),default:o(()=>[D("span",pt,l(d.value.rowData.dbName),1)]),_:1})):p("",!0),d.value.rowData.type==="directory"?(s(),v(A,{key:3,class:"description"},{label:o(()=>[D("span",mt,l(e.$t("cronjob.directory")),1)]),default:o(()=>[d.value.rowData.sourceDir.length<=12?(s(),m("span",bt,l(d.value.rowData.sourceDir),1)):(s(),m("div",vt,[n(Ze,{placement:"top-start",trigger:"hover",width:"250",content:d.value.rowData.sourceDir},{reference:o(()=>[D("span",yt,l(d.value.rowData.sourceDir.substring(0,12))+"... ",1)]),_:1},8,["content"])]))]),_:1})):p("",!0),H()?(s(),v(A,{key:4,class:"description"},{label:o(()=>[D("span",wt,l(e.$t("cronjob.retainCopies")),1)]),default:o(()=>[D("span",ft,l(d.value.rowData.retainCopies),1)]),_:1})):p("",!0)]),_:1}),d.value.rowData.type==="website"||d.value.rowData.type==="directory"?(s(),v(A,{key:0,class:"description"},{label:o(()=>[D("span",Dt,l(e.$t("cronjob.exclusionRules")),1)]),default:o(()=>[d.value.rowData.exclusionRules?(s(),m("div",gt,[(s(!0),m(x,null,ee(d.value.rowData.exclusionRules.split(";"),k=>(s(),m("div",{key:k},[n(w,null,{default:o(()=>[f(l(k),1)]),_:2},1024)]))),128))])):(s(),m("span",_t,"-"))]),_:1})):p("",!0),n(G,{type:"flex",justify:"center"},{default:o(()=>[n(A,{class:"descriptionWide"},{label:o(()=>[D("span",kt,l(e.$t("commons.search.timeStart")),1)]),default:o(()=>{var k;return[D("span",ht,l(g(me)(0,0,(k=j.value)==null?void 0:k.startTime)),1)]}),_:1}),n(A,{class:"description"},{label:o(()=>[D("span",$t,l(e.$t("commons.table.interval")),1)]),default:o(()=>{var k,q,X,Y;return[((k=j.value)==null?void 0:k.interval)<=1e3?(s(),m("span",jt,l((q=j.value)==null?void 0:q.interval)+" ms ",1)):p("",!0),((X=j.value)==null?void 0:X.interval)>1e3?(s(),m("span",Tt,l(((Y=j.value)==null?void 0:Y.interval)/1e3)+" s ",1)):p("",!0)]}),_:1}),n(A,{class:"description"},{label:o(()=>[D("span",St,l(e.$t("commons.table.status")),1)]),default:o(()=>{var k,q,X;return[((k=j.value)==null?void 0:k.status)==="Failed"?(s(),v(Je,{key:0,placement:"top"},{content:o(()=>{var Y;return[D("div",Vt,l((Y=j.value)==null?void 0:Y.message),1)]}),default:o(()=>[n(w,{type:"danger"},{default:o(()=>[f(l(e.$t("commons.table.statusFailed")),1)]),_:1})]),_:1})):p("",!0),((q=j.value)==null?void 0:q.status)==="Success"?(s(),v(w,{key:1,type:"success"},{default:o(()=>[f(l(e.$t("commons.table.statusSuccess")),1)]),_:1})):p("",!0),((X=j.value)==null?void 0:X.status)==="Waiting"?(s(),v(w,{key:2,type:"info"},{default:o(()=>[f(l(e.$t("commons.table.statusWaiting")),1)]),_:1})):p("",!0)]}),_:1})]),_:1}),(T=j.value)!=null&&T.records?(s(),v(G,{key:1},{default:o(()=>[D("span",null,l(e.$t("commons.table.records")),1),n(g(Ra),{ref_key:"mymirror",ref:I,autofocus:!0,placeholder:e.$t("cronjob.noLogs"),"indent-with-tab":!0,tabSize:4,style:{height:"calc(100vh - 484px)",width:"100%","margin-top":"5px"},lineWrapping:!0,matchBrackets:!0,theme:"cobalt",styleActiveLine:!0,extensions:t,modelValue:W.value,"onUpdate:modelValue":a[8]||(a[8]=k=>W.value=k),disabled:!0},null,8,["placeholder","modelValue"])]),_:1})):p("",!0)]}),_:1})]),_:1})]),_:1})):p("",!0),z.value?p("",!0):(s(),m("div",Nt,[D("div",null,[D("span",null,l(e.$t("cronjob.noRecord")),1),Ct])]))]),_:1},8,["title"])])),[[ea,U.value]]):p("",!0)}}});var Et=la(Rt,[["__scopeId","data-v-f521edd4"]]);const It={class:"search-button"},Ht={key:0},Mt={key:1},Ut={key:2},Wt={key:3},Bt={key:4},Lt={key:5},qt={key:6},zt={key:7},Ot={key:8},Uo=ve({__name:"index",setup(h){const M=_(),U=_([]),z=_(),I=_(),t=ie({currentPage:1,pageSize:10,total:0}),P=_(),d=[{label:u.global.t("cronjob.monday"),value:1},{label:u.global.t("cronjob.tuesday"),value:2},{label:u.global.t("cronjob.wednesday"),value:3},{label:u.global.t("cronjob.thursday"),value:4},{label:u.global.t("cronjob.friday"),value:5},{label:u.global.t("cronjob.saturday"),value:6},{label:u.global.t("cronjob.sunday"),value:7}],$=async()=>{let c={info:P.value,page:t.currentPage,pageSize:t.pageSize};M.value=!0,await Ha(c).then(b=>{M.value=!1,I.value=b.data.items||[];for(const S of I.value)S.targetDir!=="-"&&S.targetDir!==""&&(S.targetDir=u.global.t("setting."+S.targetDir));t.total=b.data.total}).catch(()=>{M.value=!1})},j=_(),W=_(),R=async(c,b={specType:"perMonth",type:"shell",week:1,day:3,hour:1,minute:30,keepLocal:!0,retainCopies:7})=>{let S={title:c,rowData:{...b}};W.value.acceptParams(S)},J=async c=>{let b=[];c?b.push(c.id):U.value.forEach(S=>{b.push(S.id)}),await Ia(Wa,{ids:b},"commons.msg.delete"),$()},ae=async(c,b)=>{Ae.confirm(u.global.t("cronjob."+b+"Msg"),u.global.t("cronjob.changeStatus"),{confirmButtonText:u.global.t("commons.button.confirm"),cancelButtonText:u.global.t("commons.button.cancel")}).then(async()=>{await Ke({id:c,status:b==="enable"?"Enable":"Disable"}),re(u.global.t("commons.msg.operationSuccess")),$()})},le=async c=>{M.value=!0,await Ge(c.id).then(()=>{M.value=!1,re(u.global.t("commons.msg.operationSuccess")),$()}).catch(()=>{M.value=!1})},L=c=>c.type==="shell"||c.type==="curl"?"-":c.retainCopies+"",y=c=>{z.value=!0;let b={rowData:{...c}};j.value.acceptParams(b)},ne=[{label:u.global.t("commons.button.handle"),click:c=>{le(c)}},{label:u.global.t("commons.button.edit"),click:c=>{R("edit",c)}},{label:u.global.t("cronjob.record"),click:c=>{y(c)}},{label:u.global.t("commons.button.delete"),click:c=>{J(c)}}];function Q(c){for(const b of d)if(b.value===c)return b.label;return""}return ba(()=>{$()}),(c,b)=>{const S=fe,te=ye,se=Oe,oe=we,H=va,r=ue("fu-table-operations"),e=Pe;return s(),m("div",null,[n(Ea,{buttons:[{label:g(u).global.t("cronjob.cronTask"),path:"/cronjobs"}]},null,8,["buttons"]),z.value?p("",!0):be((s(),v(Fe,{key:0,title:c.$t("cronjob.cronTask")},{toolbar:o(()=>[n(oe,null,{default:o(()=>[n(te,{span:16},{default:o(()=>[n(S,{type:"primary",onClick:b[0]||(b[0]=a=>R("create"))},{default:o(()=>[f(l(c.$t("commons.button.create"))+l(c.$t("cronjob.cronTask")),1)]),_:1}),n(S,{plain:"",disabled:U.value.length===0,onClick:b[1]||(b[1]=a=>J(null))},{default:o(()=>[f(l(c.$t("commons.button.delete")),1)]),_:1},8,["disabled"])]),_:1}),n(te,{span:8},{default:o(()=>[n(fa,{onSearch:b[2]||(b[2]=a=>$())}),D("div",It,[n(se,{modelValue:P.value,"onUpdate:modelValue":b[3]||(b[3]=a=>P.value=a),clearable:"",onClear:b[4]||(b[4]=a=>$()),"suffix-icon":"Search",onKeyup:b[5]||(b[5]=ya(a=>$(),["enter"])),onBlur:b[6]||(b[6]=a=>$()),placeholder:c.$t("commons.button.search")},null,8,["modelValue","placeholder"])])]),_:1})]),_:1})]),main:o(()=>[n(wa,{"pagination-config":t,selects:U.value,"onUpdate:selects":b[7]||(b[7]=a=>U.value=a),onSearch:$,data:I.value},{default:o(()=>[n(H,{type:"selection",fix:""}),n(H,{label:c.$t("cronjob.taskName"),"min-width":120,prop:"name"},{default:o(({row:a})=>[n(Da,{onClick:w=>y(a),text:a.name},null,8,["onClick","text"])]),_:1},8,["label"]),n(H,{label:c.$t("commons.table.status"),"min-width":80,prop:"status"},{default:o(({row:a})=>[a.status==="Enable"?(s(),v(S,{key:0,onClick:w=>ae(a.id,"disable"),link:"",type:"success"},{default:o(()=>[f(l(c.$t("commons.status.enabled")),1)]),_:2},1032,["onClick"])):(s(),v(S,{key:1,link:"",type:"danger",onClick:w=>ae(a.id,"enable")},{default:o(()=>[f(l(c.$t("commons.status.disabled")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),n(H,{label:c.$t("cronjob.cronSpec"),"min-width":120},{default:o(({row:a})=>[a.specType.indexOf("N")===-1||a.specType==="perWeek"?(s(),m("span",Ht,l(c.$t("cronjob."+a.specType)),1)):(s(),m("span",Mt,l(c.$t("cronjob.per")),1)),a.specType==="perMonth"?(s(),m("span",Ut,l(a.day)+l(c.$t("cronjob.day"))+" "+l(g(V)(a.hour))+" : "+l(g(V)(a.minute)),1)):p("",!0),a.specType==="perWeek"?(s(),m("span",Wt,l(Q(a.week))+" "+l(g(V)(a.hour))+" : "+l(g(V)(a.minute)),1)):p("",!0),a.specType==="perDay"?(s(),m("span",Bt,l(g(V)(a.hour))+" : "+l(g(V)(a.minute)),1)):p("",!0),a.specType==="perNDay"?(s(),m("span",Lt,l(a.day)+" "+l(c.$t("cronjob.day1"))+", "+l(g(V)(a.hour))+" : "+l(g(V)(a.minute)),1)):p("",!0),a.specType==="perNHour"?(s(),m("span",qt,l(a.hour)+l(c.$t("cronjob.hour"))+", "+l(g(V)(a.minute)),1)):p("",!0),a.specType==="perHour"?(s(),m("span",zt,l(g(V)(a.minute)),1)):p("",!0),a.specType==="perNMinute"?(s(),m("span",Ot,l(a.minute)+l(c.$t("cronjob.minute")),1)):p("",!0),f(" "+l(c.$t("cronjob.handle")),1)]),_:1},8,["label"]),n(H,{label:c.$t("cronjob.retainCopies"),"min-width":90,prop:"retainCopies"},{default:o(({row:a})=>[f(l(L(a)),1)]),_:1},8,["label"]),n(H,{label:c.$t("cronjob.lastRecrodTime"),"min-width":120,prop:"lastRecrodTime"},{default:o(({row:a})=>[f(l(a.lastRecrodTime),1)]),_:1},8,["label"]),n(H,{"min-width":80,label:c.$t("cronjob.target"),prop:"targetDir"},{default:o(({row:a})=>[f(l(a.targetDir),1)]),_:1},8,["label"]),n(r,{width:"200px",buttons:ne,ellipsis:10,label:c.$t("commons.table.operate"),fix:""},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])]),_:1},8,["title"])),[[e,M.value]]),n(Aa,{onSearch:$,ref_key:"dialogRef",ref:W},null,512),n(Et,{onSearch:b[8]||(b[8]=a=>$()),ref_key:"dialogRecordRef",ref:j},null,512)])}}});export{Uo as default};
