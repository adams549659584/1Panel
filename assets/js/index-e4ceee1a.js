import{_ as he,d as te,x as X,r as u,b as x,h as L,e,w as t,f as o,t as i,O as W,ac as Ve,a2 as de,m as ue,a3 as ce,q as ge,s as we,j as b,X as Ne,g as v,F as Pe,i as Ie,y as ne,$ as G,aM as xe,l as _e,au as De,av as Fe,J as Be,A as pe,C as $e,a1 as fe,aq as Te,ax as Ee,Y as ee,aJ as re,c as le,n as ke,ah as Re,a5 as be,af as Ae,a as Ue,ai as He,ao as Me,ab as ze,a6 as Le,V as Oe}from"./index-609fd921.js";/* empty css                *//* empty css               *//* empty css                *//* empty css              *//* empty css             *//* empty css             *//* empty css               */import{_ as Ce}from"./layout-content-47227111.js";/* empty css             */import"./form-item-d76e7d20.js";/* empty css              *//* empty css            */import{j as qe,o as je,T as Je}from"./index-5eb40136.js";import{L as We}from"./files-c7fff4dc.js";import{_ as Z}from"./index-7e7f7e15.js";/* empty css                    */import{m as Ge,n as ye,r as Xe,o as Ye,p as Ke,q as Qe,t as Ze}from"./database-a590100c.js";/* empty css                     *//* empty css                 *//* empty css            *//* empty css                    *//* empty css              *//* empty css               */import{_ as et}from"./index-af1c8b2d.js";import{s as tt,h as at,a as st,b as ot,l as nt}from"./setting-34057840.js";import{R as J,c as me}from"./form-rules-08616160.js";import{b as lt,i as it}from"./util-bdb43d7e.js";import{u as rt}from"./use-delete-data-3fb8ebbf.js";import{l as dt,m as ut,k as ct,n as pt}from"./app-1a8bdb12.js";import{_ as mt}from"./index-110fbc44.js";import{x as _t,a as ft,b as bt}from"./xterm-addon-fit-023687d7.js";import{g as vt}from"./base64-e52cbffd.js";import{_ as yt}from"./index-7c950a2e.js";import"./index-e09fb15b.js";/* empty css             */import"./no_app-68a0aee4.js";import"./index-3ec321ac.js";const A=F=>(ge("data-v-810b325c"),F=F(),we(),F),ht={key:0},gt={class:"title"},wt=A(()=>o("span",{class:"status-label"},"uptime_in_days",-1)),$t={class:"status-count"},kt={class:"input-help"},Rt=A(()=>o("span",{class:"status-label"},"tcp_port",-1)),Ct={class:"status-count"},St={class:"input-help"},Vt=A(()=>o("span",{class:"status-label"},"connected_clients",-1)),Nt={class:"status-count"},Pt={class:"input-help"},It={class:"title"},xt=A(()=>o("span",{class:"status-label"},"used_memory_rss",-1)),Dt={class:"status-count"},Ft={class:"input-help"},Bt=A(()=>o("span",{class:"status-label"},"used_memory",-1)),Tt={class:"status-count"},Et={class:"input-help"},At=A(()=>o("span",{class:"status-label"},"mem_fragmentation_ratio",-1)),Ut={class:"status-count"},Ht={class:"input-help"},Mt=A(()=>o("span",{class:"status-label"},"total_connections_received",-1)),zt={class:"status-count"},Lt={class:"input-help"},Ot=A(()=>o("span",{class:"status-label"},"total_commands_processed",-1)),qt={class:"status-count"},jt={class:"input-help"},Jt=A(()=>o("span",{class:"status-label"},"instantaneous_ops_per_sec",-1)),Wt={class:"status-count"},Gt={class:"input-help"},Xt=A(()=>o("span",{class:"status-label"},"keyspace_hits",-1)),Yt={class:"status-count"},Kt={class:"input-help"},Qt=A(()=>o("span",{class:"status-label"},"keyspace_misses",-1)),Zt={class:"status-count"},ea={class:"input-help"},ta=A(()=>o("span",{class:"status-label"},"hit",-1)),aa={class:"status-count"},sa={class:"input-help"},oa=A(()=>o("span",{class:"status-label"},"latest_fork_usec",-1)),na={class:"status-count"},la={class:"input-help"},ia=te({__name:"index",setup(F,{expose:D}){const r=X({tcp_port:"",uptime_in_days:"",connected_clients:"",used_memory:"",used_memory_rss:"",used_memory_peak:"",mem_fragmentation_ratio:"",total_connections_received:"",total_commands_processed:"",instantaneous_ops_per_sec:"",keyspace_hits:"",keyspace_misses:"",hit:"",latest_fork_usec:""}),n=u(!1),m=s=>{n.value=!0,s.status==="Running"&&$()},$=async()=>{const s=await Ge();let k=(Number(s.data.keyspace_hits)/(Number(s.data.keyspace_hits)+Number(s.data.keyspace_misses))*100).toFixed(2);r.uptime_in_days=s.data.uptime_in_days,r.tcp_port=s.data.tcp_port,r.connected_clients=s.data.connected_clients,r.used_memory_rss=(Number(s.data.used_memory_rss)/1024/1024).toFixed(2)+" MB",r.used_memory=(Number(s.data.used_memory)/1024/1024).toFixed(2)+" MB",r.mem_fragmentation_ratio=s.data.mem_fragmentation_ratio,r.total_connections_received=s.data.total_connections_received,r.total_commands_processed=s.data.total_commands_processed,r.instantaneous_ops_per_sec=s.data.instantaneous_ops_per_sec,r.keyspace_hits=s.data.keyspace_hits,r.keyspace_misses=s.data.keyspace_misses,r.hit=k,r.latest_fork_usec=s.data.latest_fork_usec};return D({acceptParams:m}),(s,k)=>{const y=Ve,_=de,V=ue,P=ce;return n.value?(x(),L("div",ht,[e(P,{"label-position":"top"},{default:t(()=>[o("span",gt,i(s.$t("database.baseParam")),1),e(y,{class:"devider"}),e(V,{type:"flex",style:{"margin-left":"50px"},justify:"center"},{default:t(()=>[e(_,{style:{width:"25%"}},{label:t(()=>[wt]),default:t(()=>[o("span",$t,i(r.uptime_in_days),1),o("span",kt,i(s.$t("database.uptimeInDays")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Rt]),default:t(()=>[o("span",Ct,i(r.tcp_port),1),o("span",St,i(s.$t("database.tcpPort")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Vt]),default:t(()=>[o("span",Nt,i(r.connected_clients),1),o("span",Pt,i(s.$t("database.connectedClients")),1)]),_:1}),e(_,{style:{width:"25%"}})]),_:1}),o("span",It,i(s.$t("database.performanceParam")),1),e(y,{class:"devider"}),e(V,{type:"flex",style:{"margin-left":"50px"},justify:"center"},{default:t(()=>[e(_,{style:{width:"25%"}},{label:t(()=>[xt]),default:t(()=>[o("span",Dt,i(r.used_memory_rss),1),o("span",Ft,i(s.$t("database.usedMemoryRss")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Bt]),default:t(()=>[o("span",Tt,i(r.used_memory),1),o("span",Et,i(s.$t("database.usedMemory")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[At]),default:t(()=>[o("span",Ut,i(r.mem_fragmentation_ratio),1),o("span",Ht,i(s.$t("database.tmpTableToDBHelper")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Mt]),default:t(()=>[o("span",zt,i(r.total_connections_received),1),o("span",Lt,i(s.$t("database.totalConnectionsReceived")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Ot]),default:t(()=>[o("span",qt,i(r.total_commands_processed),1),o("span",jt,i(s.$t("database.totalCommandsProcessed")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Jt]),default:t(()=>[o("span",Wt,i(r.instantaneous_ops_per_sec),1),o("span",Gt,i(s.$t("database.instantaneousOpsPerSec")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Xt]),default:t(()=>[o("span",Yt,i(r.keyspace_hits),1),o("span",Kt,i(s.$t("database.keyspaceHits")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[Qt]),default:t(()=>[o("span",Zt,i(r.keyspace_misses),1),o("span",ea,i(s.$t("database.keyspaceMisses")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[ta]),default:t(()=>[o("span",aa,i(r.hit),1),o("span",sa,i(s.$t("database.hit")),1)]),_:1}),e(_,{style:{width:"25%"}},{label:t(()=>[oa]),default:t(()=>[o("span",na,i(r.latest_fork_usec),1),o("span",la,i(s.$t("database.latestForkUsec")),1)]),_:1}),e(_,{style:{width:"25%"}}),e(_,{style:{width:"25%"}})]),_:1})]),_:1})])):W("",!0)}}});var ra=he(ia,[["__scopeId","data-v-810b325c"]]);const da={key:0},ua={class:"card-header"},ca=o("br",null,null,-1),pa={class:"card-header"},ma={style:{width:"100%"},class:"tab-table"},_a={width:"32%"},fa={width:"80px"},ba={width:"32%"},va={width:"10%"},ya={align:"left"},ha={style:{"margin-left":"2px","margin-top":"5px"}},ga={key:0},wa=te({__name:"index",emits:["loading"],setup(F,{expose:D,emit:r}){const n=X({appendonly:"",appendfsync:"no",saves:[]}),m=X({appendonly:[J.requiredSelect],appendfsync:[J.requiredSelect]}),$=u(),s=u(!1),k=a=>{s.value=!0,a.status==="Running"&&(M(),w())},y=u(),_=u([]),V=u(),P=u(),I=X({currentPage:1,pageSize:10,total:0}),R=()=>{let a={second:0,count:0};n.saves.push(a)},S=a=>{n.saves.splice(a,1)},w=async()=>{let a={type:"redis",name:"",detailName:"",page:I.currentPage,pageSize:I.pageSize};const d=await tt(a);y.value=d.data.items||[],I.total=d.data.total},U=async()=>{r("loading",!0),await at({name:"",detailName:"",type:"redis"}).then(()=>{r("loading",!1),w(),G(b.global.t("commons.msg.operationSuccess"))}).catch(()=>{r("loading",!1)})},f=async()=>{let a={type:"redis",name:"",detailName:"",file:V.value.fileDir+"/"+V.value.fileName};r("loading",!0),await st(a).then(()=>{r("loading",!1),G(b.global.t("commons.msg.operationSuccess"))}).catch(()=>{r("loading",!1)})},h=async a=>{let d=[];a?d.push(a.id):_.value.forEach(g=>{d.push(g.id)}),await rt(ot,{ids:d},"commons.msg.delete"),w()},O=[{label:b.global.t("commons.button.recover"),click:a=>{V.value=a;let d={header:b.global.t("commons.button.recover"),operationInfo:b.global.t("database.recoverHelper",[a.fileName]),submitInputInfo:b.global.t("database.submitIt")};P.value.acceptParams(d)}},{label:b.global.t("commons.button.delete"),click:a=>{h(a)}}],H=async(a,d)=>{let g={};if(d=="aof"){if(!a)return;a.validate(async C=>{!C||(g.type=d,g.appendfsync=n.appendfsync,g.appendonly=n.appendonly,r("loading",!0),await ye(g).then(()=>{r("loading",!1),G(b.global.t("commons.msg.operationSuccess"))}).catch(()=>{r("loading",!1)}))});return}let z=[];for(const C of n.saves){if(C.count<0||C.count>1e5||C.second<0||C.second>1e5){xe(b.global.t("database.rdbInfo"));return}z.push(C.second+"",C.count+"")}g.type=d,g.save=z.join(" "),r("loading",!0),await ye(g).then(()=>{r("loading",!1),G(b.global.t("commons.msg.operationSuccess"))}).catch(()=>{r("loading",!1)})},M=async()=>{var g,z,C;n.saves=[];const a=await Xe();n.appendonly=(g=a.data)==null?void 0:g.appendonly,n.appendfsync=(z=a.data)==null?void 0:z.appendfsync;let d=(C=a.data)==null?void 0:C.save.split(" ");for(let B=0;B<d.length;B++)B%2===1&&n.saves.push({second:Number(d[B-1]),count:Number(d[B])})};return D({acceptParams:k}),(a,d)=>{const g=_e,z=De,C=de,B=Fe,ae=Be,q=pe,T=ce,se=ue,Y=$e,oe=fe,l=Te,c=Ne("fu-table-operations");return s.value?(x(),L("div",da,[e(se,{gutter:20,style:{"margin-top":"5px"},class:"row-box"},{default:t(()=>[e(g,{span:12},{default:t(()=>[e(Y,{class:"el-card"},{header:t(()=>[o("div",ua,[o("span",null,"AOF "+i(a.$t("database.persistence")),1)])]),default:t(()=>[e(T,{model:n,ref_key:"formRef",ref:$,rules:m,"label-width":"120px"},{default:t(()=>[e(se,null,{default:t(()=>[e(g,{span:1},{default:t(()=>[ca]),_:1}),e(T,null,{default:t(()=>[e(C,{label:"appendonly",prop:"appendonly"},{default:t(()=>[e(z,{"active-value":"yes","inactive-value":"no",modelValue:n.appendonly,"onUpdate:modelValue":d[0]||(d[0]=p=>n.appendonly=p)},null,8,["modelValue"])]),_:1}),e(C,{label:"appendfsync",prop:"appendfsync"},{default:t(()=>[e(ae,{style:{width:"100%"},modelValue:n.appendfsync,"onUpdate:modelValue":d[1]||(d[1]=p=>n.appendfsync=p)},{default:t(()=>[e(B,{label:"always"},{default:t(()=>[v("always")]),_:1}),e(B,{label:"everysec"},{default:t(()=>[v("everysec")]),_:1}),e(B,{label:"no"},{default:t(()=>[v("no")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(C,null,{default:t(()=>[e(q,{type:"primary",onClick:d[2]||(d[2]=p=>H($.value,"aof"))},{default:t(()=>[v(i(a.$t("commons.button.save")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1}),e(g,{span:12},{default:t(()=>[e(Y,{class:"el-card"},{header:t(()=>[o("div",pa,[o("span",null,"RDB "+i(a.$t("database.persistence")),1)])]),default:t(()=>[o("table",ma,[(x(!0),L(Pe,null,Ie(n.saves,(p,j)=>(x(),L("tr",{key:j},[o("td",_a,[e(oe,{type:"number",modelValue:p.second,"onUpdate:modelValue":E=>p.second=E},null,8,["modelValue","onUpdate:modelValue"])]),o("td",fa,i(a.$t("database.rdbHelper1")),1),o("td",ba,[e(oe,{type:"number",modelValue:p.count,"onUpdate:modelValue":E=>p.count=E},null,8,["modelValue","onUpdate:modelValue"])]),o("td",va,i(a.$t("database.rdbHelper2")),1),o("td",null,[e(q,{link:"",type:"primary",style:{"font-size":"10px"},onClick:E=>S(j)},{default:t(()=>[v(i(a.$t("commons.button.delete")),1)]),_:2},1032,["onClick"])])]))),128)),o("tr",null,[o("td",ya,[e(q,{onClick:d[3]||(d[3]=p=>R())},{default:t(()=>[v(i(a.$t("commons.button.add")),1)]),_:1})])])]),o("div",null,[o("span",ha,i(a.$t("database.rdbHelper3")),1)]),e(q,{type:"primary",onClick:d[4]||(d[4]=p=>H(void 0,"rbd")),style:{"margin-top":"10px"}},{default:t(()=>[v(i(a.$t("commons.button.save")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Y,{style:{"margin-top":"20px"}},{default:t(()=>[e(et,{"pagination-config":I,selects:_.value,"onUpdate:selects":d[6]||(d[6]=p=>_.value=p),onSearch:w,data:y.value},{toolbar:t(()=>[e(q,{type:"primary",onClick:U},{default:t(()=>[v(i(a.$t("setting.backup")),1)]),_:1}),e(q,{type:"primary",plain:"",disabled:_.value.length===0,onClick:d[5]||(d[5]=p=>h(null))},{default:t(()=>[v(i(a.$t("commons.button.delete")),1)]),_:1},8,["disabled"])]),default:t(()=>[e(l,{type:"selection",fix:""}),e(l,{label:a.$t("commons.table.name"),"show-overflow-tooltip":"",prop:"fileName"},null,8,["label"]),e(l,{label:a.$t("database.source"),prop:"backupType"},{default:t(({row:p})=>[p.source?(x(),L("span",ga,i(a.$t("setting."+p.source)),1)):W("",!0)]),_:1},8,["label"]),e(l,{label:a.$t("file.dir"),"show-overflow-tooltip":"",prop:"fileDir"},null,8,["label"]),e(l,{label:a.$t("commons.table.createdAt"),formatter:ne(lt),prop:"createdAt"},null,8,["label","formatter"]),e(c,{width:"300px",buttons:O,ellipsis:10,label:a.$t("commons.table.operate"),fix:""},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])]),_:1}),e(Z,{ref_key:"confirmDialogRef",ref:P,onConfirm:f},null,512)])):W("",!0)}}}),$a={key:0},ka={key:1},Ra=o("br",null,null,-1),Ca={class:"input-help"},Sa={class:"input-help"},Va={key:2},Na=o("br",null,null,-1),Pa=te({__name:"index",setup(F,{expose:D}){const r=[qe(),je],n=u(!1),m=Ee(),$=l=>{m.value=l.view},s=X({name:"",port:6379,timeout:0,maxclients:0,maxmemory:0}),k=X({port:[J.port],timeout:[J.number,me(0,9999999)],maxclients:[J.number,me(1,65504)],maxmemory:[J.number,me(0,999999)]}),y=u("conf"),_=u(),V=u(),P=u(!1),I=u(),R=u(),S=u(),w=u(),U=u(),f=u(!1),h=l=>{switch(y.value=l,l){case"conf":oe();break;case"persistence":V.value.acceptParams({status:I.value});break;case"tuning":case"port":Y();break;case"status":_.value.acceptParams({status:I.value});break}},O=l=>{n.value=l},H=l=>{I.value=l.status,R.value=l.redisName,f.value=!0,oe()},M=u(),a=u(),d=async l=>{if(!l||!await l.validateField("port",g))return;let p={header:b.global.t("database.confChange"),operationInfo:b.global.t("database.restartNowHelper"),submitInputInfo:b.global.t("database.restartNow")};a.value.acceptParams(p)};function g(l){if(l)return l.message}const z=async l=>{if(!l||!await l.validateField("port",g))return;let p={key:"redis",name:s.name,port:s.port};n.value=!0,await dt(p).then(()=>{n.value=!1,G(b.global.t("commons.msg.operationSuccess"))}).finally(()=>{n.value=!1})},C=u(),B=async l=>{!l||l.validate(async c=>{if(!c)return;let p={header:b.global.t("database.confChange"),operationInfo:b.global.t("database.restartNowHelper"),submitInputInfo:b.global.t("database.restartNow")};C.value.acceptParams(p)})},ae=async()=>{let l={timeout:s.timeout+"",maxclients:s.maxclients+"",maxmemory:s.maxmemory+"mb"};n.value=!0,await Ye(l).then(()=>{Y(),n.value=!1,G(b.global.t("commons.msg.operationSuccess"))}).finally(()=>{n.value=!1})},q=async()=>{n.value=!0;const l=await ut("redis");w.value=l.data,P.value=!0,n.value=!1},T=async()=>{let l={header:b.global.t("database.confChange"),operationInfo:b.global.t("database.restartNowHelper1"),submitInputInfo:b.global.t("database.restartNow")};U.value.acceptParams(l)},se=async()=>{let l={file:w.value,restartNow:!0};n.value=!0,await Ke(l).then(()=>{P.value=!1,n.value=!1,G(b.global.t("commons.msg.operationSuccess"))}).catch(()=>{n.value=!0})},Y=async()=>{var c,p,j,E,K;const l=await Qe();s.name=(c=l.data)==null?void 0:c.name,s.timeout=Number((p=l.data)==null?void 0:p.timeout),s.maxclients=Number((j=l.data)==null?void 0:j.maxclients),s.maxmemory=Number((E=l.data)==null?void 0:E.maxmemory.replaceAll("mb",""))/1048576,s.port=Number((K=l.data)==null?void 0:K.port)},oe=async()=>{let c=`${(await nt()).data}/apps/redis/${R.value}/conf/redis.conf`;P.value=!1,n.value=!0,await We({path:c}).then(p=>{n.value=!1,w.value=p.data,ke(()=>{const j=m.value.state;m.value.dispatch({selection:{anchor:j.doc.length,head:j.doc.length},scrollIntoView:!0})})}).catch(()=>{n.value=!1})};return D({acceptParams:H}),(l,c)=>{const p=pe,j=Re,E=_e,K=ue,ie=fe,Q=de,ve=ce,Se=be;return ee((x(),L("div",null,[e(Ce,{title:"Redis "+l.$t("database.setting"),reload:!0},{buttons:t(()=>[e(p,{type:"primary",plain:y.value!=="conf",onClick:c[0]||(c[0]=N=>h("conf"))},{default:t(()=>[v(i(l.$t("database.confChange")),1)]),_:1},8,["plain"]),e(p,{type:"primary",disabled:I.value!=="Running",plain:y.value!=="status",onClick:c[1]||(c[1]=N=>h("status"))},{default:t(()=>[v(i(l.$t("database.status")),1)]),_:1},8,["disabled","plain"]),e(p,{type:"primary",disabled:I.value!=="Running",plain:y.value!=="tuning",onClick:c[2]||(c[2]=N=>h("tuning"))},{default:t(()=>[v(i(l.$t("database.performanceTuning")),1)]),_:1},8,["disabled","plain"]),e(p,{type:"primary",plain:y.value!=="port",onClick:c[3]||(c[3]=N=>h("port"))},{default:t(()=>[v(i(l.$t("database.portSetting")),1)]),_:1},8,["plain"]),e(p,{type:"primary",disabled:I.value!=="Running",plain:y.value!=="persistence",onClick:c[4]||(c[4]=N=>h("persistence"))},{default:t(()=>[v(i(l.$t("database.persistence")),1)]),_:1},8,["disabled","plain"])]),main:t(()=>[y.value==="conf"?(x(),L("div",$a,[e(ne(Je),{autofocus:!0,placeholder:"None data","indent-with-tab":!0,tabSize:4,style:{"margin-top":"10px",height:"calc(100vh - 380px)"},lineWrapping:!0,matchBrackets:!0,theme:"cobalt",styleActiveLine:!0,extensions:r,onReady:$,modelValue:w.value,"onUpdate:modelValue":c[5]||(c[5]=N=>w.value=N)},null,8,["modelValue"]),e(p,{style:{"margin-top":"10px"},onClick:c[6]||(c[6]=N=>q())},{default:t(()=>[v(i(l.$t("app.defaultConfig")),1)]),_:1}),e(p,{type:"primary",onClick:T,style:{"margin-top":"10px"}},{default:t(()=>[v(i(l.$t("commons.button.save")),1)]),_:1}),e(K,null,{default:t(()=>[e(E,{span:8},{default:t(()=>[P.value?(x(),le(j,{key:0,style:{"margin-top":"10px"},title:l.$t("app.defaultConfigHelper"),type:"info",closable:!1},null,8,["title"])):W("",!0)]),_:1})]),_:1})])):W("",!0),ee(e(ra,{ref_key:"statusRef",ref:_},null,512),[[re,y.value==="status"]]),y.value==="tuning"?(x(),L("div",ka,[e(ve,{model:s,ref_key:"formRef",ref:S,rules:k,"label-position":"top"},{default:t(()=>[e(K,{style:{"margin-top":"20px"}},{default:t(()=>[e(E,{span:1},{default:t(()=>[Ra]),_:1}),e(E,{span:10},{default:t(()=>[e(Q,{label:l.$t("database.timeout"),prop:"timeout"},{default:t(()=>[e(ie,{clearable:"",type:"number",modelValue:s.timeout,"onUpdate:modelValue":c[7]||(c[7]=N=>s.timeout=N),modelModifiers:{number:!0}},{append:t(()=>[v(i(l.$t("home.Second")),1)]),_:1},8,["modelValue"]),o("span",Ca,i(l.$t("database.timeoutHelper")),1)]),_:1},8,["label"]),e(Q,{label:l.$t("database.maxclients"),prop:"maxclients"},{default:t(()=>[e(ie,{clearable:"",type:"number",modelValue:s.maxclients,"onUpdate:modelValue":c[8]||(c[8]=N=>s.maxclients=N),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(Q,{label:l.$t("database.maxmemory"),prop:"maxmemory"},{default:t(()=>[e(ie,{clearable:"",type:"number",modelValue:s.maxmemory,"onUpdate:modelValue":c[9]||(c[9]=N=>s.maxmemory=N),modelModifiers:{number:!0}},{append:t(()=>[v("mb")]),_:1},8,["modelValue"]),o("span",Sa,i(l.$t("database.maxmemoryHelper")),1)]),_:1},8,["label"]),e(Q,null,{default:t(()=>[e(p,{type:"primary",onClick:c[10]||(c[10]=N=>B(S.value))},{default:t(()=>[v(i(l.$t("commons.button.save")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])):W("",!0),y.value==="port"?(x(),L("div",Va,[e(ve,{model:s,ref_key:"portRef",ref:M,"label-position":"top"},{default:t(()=>[e(K,null,{default:t(()=>[e(E,{span:1},{default:t(()=>[Na]),_:1}),e(E,{span:10},{default:t(()=>[e(Q,{label:l.$t("setting.port"),prop:"port",rules:ne(J).port},{default:t(()=>[e(ie,{clearable:"",type:"number",modelValue:s.port,"onUpdate:modelValue":c[11]||(c[11]=N=>s.port=N),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(Q,null,{default:t(()=>[e(p,{onClick:c[12]||(c[12]=N=>d(M.value)),icon:"Collection"},{default:t(()=>[v(i(l.$t("commons.button.save")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])):W("",!0),ee(e(wa,{onLoading:O,ref_key:"persistenceRef",ref:V},null,512),[[re,y.value==="persistence"]])]),_:1},8,["title"]),e(Z,{ref_key:"confirmDialogRef",ref:U,onConfirm:se},null,512),e(Z,{ref:"confirmFileRef",onConfirm:se},null,512),e(Z,{ref_key:"confirmFormRef",ref:C,onConfirm:ae},null,512),e(Z,{ref_key:"confirmPortRef",ref:a,onConfirm:c[13]||(c[13]=N=>z(M.value))},null,512)])),[[re,f.value],[Se,n.value]])}}}),Ia={class:"dialog-footer"},xa=te({__name:"index",emits:["checkExist","closeTerminal"],setup(F,{expose:D,emit:r}){const n=u(!1),m=u(!1),$=X({password:""}),s=u(),k=u(),y=()=>{$.password="",V(),m.value=!0},_=()=>{m.value=!1},V=async()=>{const R=await ct("redis");$.password=R.data},P=async()=>{let R={id:0,value:$.password};n.value=!0,r("closeTerminal"),await Ze(R).then(()=>{n.value=!1,G(b.global.t("commons.msg.operationSuccess")),m.value=!1,r("checkExist")}).catch(()=>{n.value=!1})},I=async R=>{!R||R.validate(async S=>{if(!S)return;let w={header:b.global.t("database.confChange"),operationInfo:b.global.t("database.restartNowHelper"),submitInputInfo:b.global.t("database.restartNow")};s.value.acceptParams(w)})};return D({acceptParams:y}),(R,S)=>{const w=fe,U=de,f=_e,h=ue,O=pe,H=Ae,M=be;return x(),le(H,{modelValue:m.value,"onUpdate:modelValue":S[3]||(S[3]=a=>m.value=a),"destroy-on-close":!0,"close-on-click-modal":!1,size:"30%"},{header:t(()=>[e(mt,{header:R.$t("database.requirepass"),back:_},null,8,["header"])]),footer:t(()=>[o("span",Ia,[e(O,{disabled:n.value,onClick:S[1]||(S[1]=a=>m.value=!1)},{default:t(()=>[v(i(R.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),e(O,{disabled:n.value,type:"primary",onClick:S[2]||(S[2]=a=>I(k.value))},{default:t(()=>[v(i(R.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:t(()=>[ee((x(),le(ne(ce),{ref_key:"formRef",ref:k,model:$,"label-position":"top"},{default:t(()=>[e(h,{type:"flex",justify:"center"},{default:t(()=>[e(f,{span:22},{default:t(()=>[e(U,{label:R.$t("database.requirepass"),rules:ne(J).requiredInput,prop:"password"},{default:t(()=>[e(w,{type:"password","show-password":"",clearable:"",modelValue:$.password,"onUpdate:modelValue":S[0]||(S[0]=a=>$.password=a)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})]),_:1})]),_:1},8,["model"])),[[M,n.value]]),e(Z,{ref_key:"confirmDialogRef",ref:s,onConfirm:P},null,512)]),_:1},8,["modelValue"])}}});const Da=F=>(ge("data-v-87c8ff72"),F=F(),we(),F),Fa={style:{height:"100%"}},Ba=Da(()=>o("div",{style:{height:"calc(100vh - 370px)"},id:"terminal-exec"},null,-1)),Ta=[Ba],Ea=te({__name:"index",setup(F,{expose:D}){const r=new _t.exports.FitAddon;let n=u(null),m=u(null);const $=u(!0),s=()=>{$.value=!1},k=u(!1),y=async()=>{k.value=!0,R(),window.addEventListener("resize",U)},_=async f=>{window.removeEventListener("resize",U),w()&&n&&n.close(),f||m.dispose(),k.value=f},V=f=>{if(!it(f.data))return;const h=JSON.parse(f.data);m.element&&m.focus(),m.write(h.Data)},P=f=>{let h=f.message;h||(h="disconnected"),m.write(`\x1B[31m${h}\x1B[m\r
`)},I=f=>{m.write(f.reason)},R=()=>{let f=document.getElementById("terminal-exec"),h=window.location.href,O=h.split("//")[0]==="http:"?"ws":"wss",H=h.split("//")[1].split("/")[0];m=new ft.exports.Terminal({lineHeight:1.2,fontSize:12,fontFamily:"Monaco, Menlo, Consolas, 'Courier New', monospace",theme:{background:"#000000"},cursorBlink:!0,cursorStyle:"underline",scrollback:100,tabStopWidth:4}),f&&(m.open(f),n=new WebSocket(`${O}://${H}/api/v1/databases/redis/exec?cols=${m.cols}&rows=${m.rows}`),n.onopen=s,n.onmessage=V,n.onclose=I,n.onerror=P,m.onData(M=>{w()&&n.send(JSON.stringify({type:"cmd",cmd:vt.encode(M)}))}),m.loadAddon(new bt.exports.AttachAddon(n)),m.loadAddon(r),setTimeout(()=>{r.fit(),w()&&n.send(JSON.stringify({type:"resize",cols:m.cols,rows:m.rows}))},30))},S=()=>{r.fit()},w=()=>{const f=n&&n.readyState;return f?f===1:!1};function U(){S();const{cols:f,rows:h}=m;w()&&n.send(JSON.stringify({type:"resize",cols:f,rows:h}))}return D({acceptParams:y,onClose:_}),(f,h)=>ee((x(),L("div",Fa,Ta,512)),[[re,k.value]])}});var Aa=he(Ea,[["__scopeId","data-v-87c8ff72"]]);const Ua={class:"dialog-footer"},ks=te({__name:"index",setup(F){const D=u(!1),r=u(!0),n=u(),m=u(),$=u(!1),s=u(!1),k=u(),y=u(),_=u(),V=u(!1),P=u(),I=async()=>{var a;$.value=!0,(a=n.value)==null||a.onClose(!1),m.value.acceptParams({status:k.value,redisName:y.value})},R=async()=>{if(_.value===0){V.value=!0;return}let d=window.location.href.split("//")[1].split(":")[0];window.open(`http://${d}:${_.value}`,"_blank")},S=a=>{Oe.push({name:"AppDetail",params:{appKey:a}})},w=async()=>{const a=await pt("redis-commander");_.value=a.data},U=u(),f=async()=>{U.value.acceptParams()},h=a=>{s.value=a.isExist,y.value=a.name,k.value=a.status,D.value=!1,k.value==="Running"&&(w(),ke(()=>{n.value.acceptParams()}))},O=async()=>{k.value==="Running"&&n.value.acceptParams()},H=async a=>{var d;P.value=!P.value,(d=n.value)==null||d.onClose(a)},M=()=>{H(!0)};return Ue(()=>{H(!1)}),(a,d)=>{const g=pe,z=$e,C=He,B=Re,ae=Me,q=be;return ee((x(),L("div",null,[e(Ce,{title:"Redis "+a.$t("menu.database")},ze({app:t(()=>[e(yt,{"app-key":"redis",loading:D.value,"onUpdate:loading":d[0]||(d[0]=T=>D.value=T),"mask-show":r.value,"onUpdate:mask-show":d[1]||(d[1]=T=>r.value=T),onBefore:M,onSetting:I,onIsExist:h},null,8,["loading","mask-show"])]),_:2},[!$.value&&s.value?{name:"toolbar",fn:t(()=>[o("div",{class:Le({mask:k.value!="Running"})},[e(g,{type:"primary",plain:"",onClick:R,icon:"Position"},{default:t(()=>[v("Redis-Commander")]),_:1}),e(g,{type:"primary",plain:"",onClick:f},{default:t(()=>[v(i(a.$t("database.changePassword")),1)]),_:1})],2)]),key:"0"}:void 0,s.value&&!$.value?{name:"main",fn:t(()=>[(x(),le(Aa,{key:P.value,ref_key:"terminalRef",ref:n}))]),key:"1"}:void 0]),1032,["title"]),k.value!="Running"&&!$.value&&s.value&&r.value?(x(),le(z,{key:0,class:"mask-prompt"},{default:t(()=>[o("span",null,i(a.$t("commons.service.serviceNotStarted",["Redis"])),1)]),_:1})):W("",!0),e(Pa,{ref_key:"settingRef",ref:m,style:{"margin-top":"30px"}},null,512),e(xa,{ref_key:"passwordRef",ref:U,onCheckExist:O,onCloseTerminal:d[2]||(d[2]=T=>H(!0))},null,512),e(ae,{modelValue:V.value,"onUpdate:modelValue":d[5]||(d[5]=T=>V.value=T),title:a.$t("app.checkTitle"),width:"30%","close-on-click-modal":!1,"destroy-on-close":!0},{footer:t(()=>[o("span",Ua,[e(g,{onClick:d[4]||(d[4]=T=>V.value=!1)},{default:t(()=>[v(i(a.$t("commons.button.cancel")),1)]),_:1})])]),default:t(()=>[e(B,{closable:!1,title:a.$t("app.checkInstalledWarn",["Redis-Commander"]),type:"info"},{default:t(()=>[e(C,{icon:"Position",onClick:d[3]||(d[3]=T=>S("redis-commander")),type:"primary"},{default:t(()=>[v(i(a.$t("database.goInstall")),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue","title"])])),[[q,D.value]])}}});export{ks as default};
