import{_ as K,d as Z,r as u,j as r,x as j,o as q,a as G,aK as Y,C as J,l as Q,m as X,K as ee,L as te,p as oe,b as h,h as _,e as m,y as ae,w as s,f as p,t as w,g as re,F as ne,i as le,c as H,q as se,s as ie}from"./index-609fd921.js";/* empty css               *//* empty css                *//* empty css              *//* empty css            *//* empty css               *//* empty css            *//* empty css             *//* empty css                    *//* empty css               */import{L as d,i as L,g as x}from"./index-d6f5840e.js";import{l as me,g as de}from"./monitor-5db66f5f.js";import{k as S}from"./util-bdb43d7e.js";import{_ as ue}from"./index-f14047dc.js";import"./index-e09fb15b.js";/* empty css                    *//* empty css                     *//* empty css              */const C=$=>(se("data-v-3c720ed8"),$=$(),ie(),$),pe={style:{"font-size":"16px","font-weight":"500"}},ce=C(()=>p("div",{id:"loadLoadChart",style:{width:"100%",height:"400px"}},null,-1)),fe=C(()=>p("span",{style:{"font-size":"16px","font-weight":"500"}},"CPU",-1)),ge=C(()=>p("div",{id:"loadCPUChart",style:{width:"100%",height:"400px"}},null,-1)),he={style:{"font-size":"16px","font-weight":"500"}},we=C(()=>p("div",{id:"loadMemoryChart",style:{width:"100%",height:"400px"}},null,-1)),ye={style:{"font-size":"16px","font-weight":"500"}},be=C(()=>p("div",{id:"loadIOChart",style:{width:"100%",height:"400px"}},null,-1)),ve={style:{"font-size":"16px","font-weight":"500"}},De={key:0,class:"networkOption"},Ce={key:1,class:"networkOption"},ke=C(()=>p("div",{id:"loadNetworkChart",style:{width:"100%",height:"400px"}},null,-1)),_e=Z({__name:"index",setup($){const I=u(),A=u(),E=u([new Date(new Date().setHours(0,0,0,0)),new Date]),F=u([new Date(new Date().setHours(0,0,0,0)),new Date]),N=u([new Date(new Date().setHours(0,0,0,0)),new Date]),O=u([new Date(new Date().setHours(0,0,0,0)),new Date]),z=u([new Date(new Date().setHours(0,0,0,0)),new Date]),y=u(),V=u(),k=[{text:r.global.t("monitor.today"),value:()=>{const e=new Date;return[new Date(new Date().setHours(0,0,0,0)),e]}},{text:r.global.t("monitor.yestoday"),value:()=>{const e=new Date(new Date().getTime()-864e5),t=new Date(e.setHours(23,59,59,999));return[new Date(e.setHours(0,0,0,0)),t]}},{text:r.global.t("monitor.lastNDay",[3]),value:()=>{const e=new Date(new Date().getTime()-2592e5),t=new Date;return[e,t]}},{text:r.global.t("monitor.lastNDay",[7]),value:()=>{const e=new Date(new Date().getTime()-6048e5),t=new Date;return[e,t]}},{text:r.global.t("monitor.lastNDay",[30]),value:()=>{const e=new Date(new Date().getTime()-2592e6),t=new Date;return[e,t]}}],c=u(),f=j({param:"",info:"",startTime:new Date(new Date().setHours(0,0,0,0)),endTime:new Date}),g=async e=>{switch(f.param=e,e){case"load":c.value=E.value;break;case"cpu":c.value=F.value;break;case"memory":c.value=N.value;break;case"io":c.value=O.value;break;case"network":c.value=z.value,f.info=y.value;break}c.value&&c.value.length===2&&(f.startTime=c.value[0],f.endTime=c.value[1]);const t=await me(f);A.value=t.data;for(const n of A.value)switch(n.value||(n.value=[],n.date=[]),n.param){case"base":let a=n.date.map(function(o){return S(o)});if(e==="cpu"||e==="all"){let o=n.value.map(function(T){return T.cpu.toFixed(2)}),U={name:"CPU",type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(0, 94, 235, .5)"},{offset:1,color:"rgba(0, 94, 235, 0)"}])},data:o,showSymbol:!1};B("loadCPUChart",a,U,"CPU","%")}if(e==="memory"||e==="all"){let o=n.value.map(function(T){return T.memory.toFixed(2)}),U={name:r.global.t("monitor.memory"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(0, 94, 235, .5)"},{offset:1,color:"rgba(0, 94, 235, 0)"}])},data:o,showSymbol:!1};B("loadMemoryChart",a,U,r.global.t("monitor.memory"),"%")}(e==="load"||e==="all")&&M(n);break;case"io":W(n);break;case"network":let i=n.date.map(function(o){return S(o)}),l=n.value.map(function(o){return o.up.toFixed(2)}),b={name:r.global.t("monitor.up"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(0, 94, 235, .5)"},{offset:1,color:"rgba(0, 94, 235, 0)"}])},data:l,showSymbol:!1},v=n.value.map(function(o){return o.down.toFixed(2)}),D={name:r.global.t("monitor.down"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(27, 143, 60, .5)"},{offset:1,color:"rgba(27, 143, 60, 0)"}])},data:v,showSymbol:!1};B("loadNetworkChart",i,[b,D],"KB/s","KB/s")}},P=async()=>{const e=await de();V.value=e.data,f.info=V.value&&V.value[0],y.value=f.info,g("all")};function B(e,t,n,a,i){const l=L(document.getElementById(e)),b={zlevel:1,z:1,tooltip:{trigger:"axis",formatter:function(v){let D=v[0].name+"<br/>";for(const o of v)D+=o.marker+" "+o.seriesName+"\uFF1A"+o.data+i+"<br/>";return D}},legend:{data:e==="loadNetworkChart"&&[r.global.t("monitor.up"),r.global.t("monitor.down")]},grid:{left:"7%",right:"7%",bottom:"20%"},xAxis:{data:t},yAxis:{name:"( "+i+" )"},dataZoom:[{startValue:I.value}],series:n};l.setOption(b,!0)}function M(e){const t=L(document.getElementById("loadLoadChart")),n={zlevel:1,z:1,tooltip:{trigger:"axis",formatter:function(a){let i=a[0].name+"<br/>";for(const l of a)i+=l.marker+" "+l.seriesName+"\uFF1A"+l.data+"%<br/>";return i}},legend:{data:["1 "+r.global.t("monitor.min"),"5 "+r.global.t("monitor.min"),"15 "+r.global.t("monitor.min"),r.global.t("monitor.resourceUsage")]},grid:{left:"7%",right:"7%",bottom:"20%"},xAxis:{data:e.date.map(function(a){return S(a)})},yAxis:[{type:"value",name:r.global.t("monitor.loadDetail")+" ( % )"},{type:"value",name:r.global.t("monitor.resourceUsage")+" ( % )",position:"right",alignTicks:!0}],dataZoom:[{startValue:I.value}],series:[{name:"1 "+r.global.t("monitor.min"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(0, 94, 235, .5)"},{offset:1,color:"rgba(0, 94, 235, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.cpuLoad1.toFixed(2)})},{name:"5 "+r.global.t("monitor.min"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(27, 143, 60, .5)"},{offset:1,color:"rgba(27, 143, 60, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.cpuLoad5.toFixed(2)})},{name:"15 "+r.global.t("monitor.min"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(249, 199, 79, .5)"},{offset:1,color:"rgba(249, 199, 79, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.cpuLoad15.toFixed(2)})},{name:r.global.t("monitor.resourceUsage"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(255, 173, 177, 0.5)"},{offset:1,color:"rgba(255, 173, 177, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.loadUsage.toFixed(2)}),yAxisIndex:1}]};t.setOption(n,!0)}function W(e){const t=L(document.getElementById("loadIOChart")),n={zlevel:1,z:1,tooltip:{trigger:"axis",formatter:function(a){let i=a[0].name+"<br/>";for(const l of a)(l.seriesName===r.global.t("monitor.read")||l.seriesName===r.global.t("monitor.write"))&&(i+=l.marker+" "+l.seriesName+"\uFF1A"+l.data+" KB/s<br/>"),l.seriesName===r.global.t("monitor.readWriteCount")&&(i+=l.marker+" "+l.seriesName+"\uFF1A"+l.data+" "+r.global.t("monitor.count")+"/s<br/>"),l.seriesName===r.global.t("monitor.readWriteTime")&&(i+=l.marker+" "+l.seriesName+"\uFF1A"+l.data+" ms<br/>");return i}},legend:{data:[r.global.t("monitor.read"),r.global.t("monitor.write"),r.global.t("monitor.readWriteCount"),r.global.t("monitor.readWriteTime")]},grid:{left:"7%",right:"7%",bottom:"20%"},xAxis:{data:e.date.map(function(a){return S(a)})},yAxis:[{type:"value",name:"( KB/s )"},{type:"value",position:"right",alignTicks:!0}],dataZoom:[{startValue:I.value}],series:[{name:r.global.t("monitor.read"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(0, 94, 235, .5)"},{offset:1,color:"rgba(0, 94, 235, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return(a.read/1024).toFixed(2)})},{name:r.global.t("monitor.write"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(27, 143, 60, .5)"},{offset:1,color:"rgba(27, 143, 60, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return(a.write/1024).toFixed(2)})},{name:r.global.t("monitor.readWriteCount"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(249, 199, 79, .5)"},{offset:1,color:"rgba(249, 199, 79, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.count}),yAxisIndex:1},{name:r.global.t("monitor.readWriteTime"),type:"line",areaStyle:{color:new d(0,0,0,1,[{offset:0,color:"rgba(255, 173, 177, 0.5)"},{offset:1,color:"rgba(255, 173, 177, 0)"}])},showSymbol:!1,data:e.value.map(function(a){return a.time}),yAxisIndex:1}]};t.setOption(n,!0)}function R(){var e,t,n,a,i;(e=x(document.getElementById("loadLoadChart")))==null||e.resize(),(t=x(document.getElementById("loadCPUChart")))==null||t.resize(),(n=x(document.getElementById("loadMemoryChart")))==null||n.resize(),(a=x(document.getElementById("loadIOChart")))==null||a.resize(),(i=x(document.getElementById("loadNetworkChart")))==null||i.resize()}return q(()=>{I.value=S(new Date(new Date().setHours(0,0,0,0))),P(),window.addEventListener("resize",R)}),G(()=>{window.removeEventListener("resize",R)}),(e,t)=>{const n=Y,a=J,i=Q,l=X,b=ee,v=te,D=oe;return h(),_("div",null,[m(ue,{buttons:[{label:ae(r).global.t("menu.monitor"),path:"/hosts/monitor"}]},null,8,["buttons"]),m(l,{gutter:20,style:{"margin-top":"20px"}},{default:s(()=>[m(i,{span:24},{default:s(()=>[m(a,{style:{overflow:"inherit"}},{header:s(()=>[p("span",pe,w(e.$t("monitor.avgLoad")),1),m(n,{onChange:t[0]||(t[0]=o=>g("load")),modelValue:E.value,"onUpdate:modelValue":t[1]||(t[1]=o=>E.value=o),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:k,style:{float:"right",width:"360px"}},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),default:s(()=>[ce]),_:1})]),_:1})]),_:1}),m(l,{gutter:20,style:{"margin-top":"20px"}},{default:s(()=>[m(i,{span:12},{default:s(()=>[m(a,{style:{overflow:"inherit"}},{header:s(()=>[fe,m(n,{onChange:t[2]||(t[2]=o=>g("cpu")),modelValue:F.value,"onUpdate:modelValue":t[3]||(t[3]=o=>F.value=o),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:k,style:{float:"right",width:"360px"}},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),default:s(()=>[ge]),_:1})]),_:1}),m(i,{span:12},{default:s(()=>[m(a,{style:{overflow:"inherit"}},{header:s(()=>[p("span",he,w(e.$t("monitor.memory")),1),m(n,{onChange:t[4]||(t[4]=o=>g("memory")),modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=o=>N.value=o),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:k,style:{float:"right",width:"360px"}},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),default:s(()=>[we]),_:1})]),_:1})]),_:1}),m(l,{gutter:20,style:{"margin-top":"20px"}},{default:s(()=>[m(i,{span:12},{default:s(()=>[m(a,{style:{overflow:"inherit"}},{header:s(()=>[p("span",ye,w(e.$t("monitor.disk"))+" IO",1),m(n,{onChange:t[6]||(t[6]=o=>g("io")),modelValue:O.value,"onUpdate:modelValue":t[7]||(t[7]=o=>O.value=o),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:k,style:{float:"right",width:"360px"}},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),default:s(()=>[be]),_:1})]),_:1}),m(i,{span:12},{default:s(()=>[m(a,{style:{overflow:"inherit"}},{header:s(()=>[p("span",ve,w(e.$t("monitor.network"))+" IO:",1),m(D,{placement:"bottom",width:200,trigger:"click"},{reference:s(()=>[y.value==="all"?(h(),_("span",De,w(e.$t("commons.table.all")),1)):(h(),_("span",Ce,w(y.value),1))]),default:s(()=>[m(v,{onChange:t[8]||(t[8]=o=>g("network")),modelValue:y.value,"onUpdate:modelValue":t[9]||(t[9]=o=>y.value=o)},{prefix:s(()=>[re(w(e.$t("monitor.networkCard")),1)]),default:s(()=>[(h(!0),_(ne,null,le(V.value,o=>(h(),_("div",{key:o},[o==="all"?(h(),H(b,{key:0,label:e.$t("commons.table.all"),value:o},null,8,["label","value"])):(h(),H(b,{key:1,label:o,value:o},null,8,["label","value"]))]))),128))]),_:1},8,["modelValue"])]),_:1}),m(n,{onChange:t[10]||(t[10]=o=>g("network")),modelValue:z.value,"onUpdate:modelValue":t[11]||(t[11]=o=>z.value=o),type:"datetimerange","range-separator":e.$t("commons.search.timeRange"),"start-placeholder":e.$t("commons.search.timeStart"),"end-placeholder":e.$t("commons.search.timeEnd"),shortcuts:k,style:{float:"right",width:"360px"}},null,8,["modelValue","range-separator","start-placeholder","end-placeholder"])]),default:s(()=>[ke]),_:1})]),_:1})]),_:1})])}}});var Me=K(_e,[["__scopeId","data-v-3c720ed8"]]);export{Me as default};
