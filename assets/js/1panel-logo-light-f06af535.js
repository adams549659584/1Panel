import{_ as I,d as M,G as T,r as d,o as D,b as g,h as G,f as s,t as a,c as m,w as o,g as n,e as r,O,y as R,F as x,$ as b,j as p,ap as A,A as F,E as L,ah as j,av as q,J as z,af as J}from"./index-609fd921.js";import{_ as W}from"./index-110fbc44.js";/* empty css                *//* empty css                    *//* empty css              *//* empty css              *//* empty css            *//* empty css               */import{e as K,p as P,q as Q,r as X}from"./setting-34057840.js";import{E as Y}from"./md-editor-v3.es-602e0c4e.js";const Z={class:"version"},ee={class:"panel-MdEditor"},ae={class:"default-theme"},te={class:"inline-block"},oe={class:"dialog-footer"},le=M({__name:"index",setup(se){const w=T(),_=d();let v=d(!1);const i=d(!1),t=d(),h=d(),c=d(),y=async()=>{const e=await K();_.value=e.data.systemVersion},k=()=>{i.value=!1},$=async()=>{v.value=!0,await P().then(e=>{if(v.value=!1,!e.data){b(p.global.t("setting.noUpgrade"));return}t.value=e.data,c.value=t.value.newVersion||t.value.latestVersion,i.value=!0}).catch(()=>{v.value=!1})},E=async()=>{const e=await Q(c.value);t.value.releaseNote=e.data},C=async()=>{A.confirm(p.global.t("setting.upgradeHelper",p.global.t("setting.upgrade")),{confirmButtonText:p.global.t("commons.button.confirm"),cancelButtonText:p.global.t("commons.button.cancel"),type:"info"}).then(async()=>{w.isLoading=!0,await X(c.value),i.value=!1,b(p.global.t("commons.msg.operationSuccess")),y()})};return D(()=>{y()}),(e,l)=>{const f=F,N=L,B=W,S=j,V=q,U=z,H=J;return g(),G(x,null,[s("div",null,[s("span",Z,a(_.value),1),_.value!=="Waiting"?(g(),m(f,{key:0,style:{"margin-top":"-2px"},type:"primary",link:"",onClick:$},{default:o(()=>[n(a(e.$t("setting.upgradeCheck")),1)]),_:1})):(g(),m(N,{key:1,round:"",style:{"margin-left":"10px"}},{default:o(()=>[n(a(e.$t("setting.upgrading")),1)]),_:1}))]),(g(),m(H,{"close-on-click-modal":!1,key:h.value,modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=u=>i.value=u),size:"50%","append-to-body":""},{header:o(()=>[r(B,{header:e.$t("setting.upgrade"),back:k},null,8,["header"])]),footer:o(()=>[s("span",oe,[r(f,{onClick:l[2]||(l[2]=u=>i.value=!1)},{default:o(()=>[n(a(e.$t("commons.button.cancel")),1)]),_:1}),r(f,{type:"primary",onClick:C},{default:o(()=>[n(a(e.$t("setting.upgradeNow")),1)]),_:1})])]),default:o(()=>[s("div",ee,[r(S,{closable:!1},{default:o(()=>[n(a(e.$t("setting.versionHelper"))+" ",1),s("li",null,a(e.$t("setting.versionHelper1")),1),s("li",null,a(e.$t("setting.versionHelper2")),1)]),_:1}),s("div",ae,[s("h2",te,a(e.$t("app.version")),1)]),r(U,{class:"inline-block tag",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=u=>c.value=u),onChange:E},{default:o(()=>[t.value.newVersion?(g(),m(V,{key:0,label:t.value.newVersion},{default:o(()=>[n(a(t.value.newVersion)+" "+a(e.$t("setting.newVersion")),1)]),_:1},8,["label"])):O("",!0),r(V,{label:t.value.latestVersion},{default:o(()=>[n(a(t.value.latestVersion)+" "+a(e.$t("setting.latestVersion")),1)]),_:1},8,["label"])]),_:1},8,["modelValue"]),r(R(Y),{modelValue:t.value.releaseNote,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value.releaseNote=u),previewOnly:""},null,8,["modelValue"])])]),_:1},8,["modelValue"]))],64)}}});var ve=I(le,[["__scopeId","data-v-f95ef350"]]),fe="/assets/png/1panel-logo-light-abe32304.png";export{ve as S,fe as _};
