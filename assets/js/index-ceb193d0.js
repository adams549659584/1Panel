import{d as W,r as p,b as u,c as g,w as t,e as l,f as b,y as a,g as D,t as r,Y,ag as ne,h as B,F as X,i as Q,$ as oe,j as N,K as $e,L as he,a2 as ce,a3 as _e,ah as we,l as pe,m as se,A as Z,af as Ae,a5 as ue,u as We,aq as He,aI as Ke,ao as Ge,x as ke,av as Oe,J as Ye,a1 as Ve,a6 as ge,O as E,a4 as je,o as De,n as Je,_ as Xe,v as Qe,aK as Ze,ai as el,C as ll,ab as tl,ae as al,a_ as nl,a$ as ol,aJ as Ee,V as sl,ap as il,X as pl}from"./index-609fd921.js";/* empty css                *//* empty css             *//* empty css             *//* empty css                    *//* empty css              *//* empty css               *//* empty css               *//* empty css                     *//* empty css                 *//* empty css            *//* empty css               *//* empty css            */import{_ as ul}from"./index-f10fbc50.js";import{_ as qe}from"./layout-content-47227111.js";import{_ as rl}from"./index-f14047dc.js";import{a as dl,_ as ml}from"./index-d8f066d1.js";import{_ as Me}from"./index-110fbc44.js";/* empty css                *//* empty css              *//* empty css             */import"./form-item-d76e7d20.js";import{L as cl,C as _l,P as fl,a as bl,D as vl,S as yl,U as gl,O as kl}from"./website-6075ac25.js";import{_ as $l}from"./index-af1c8b2d.js";/* empty css                    *//* empty css              */import{d as hl,e as wl,o as Vl,S as Dl,p as Sl,m as Cl}from"./app-1a8bdb12.js";import{R as L,c as me}from"./form-rules-08616160.js";import{_ as Pe}from"./index-c1fce76b.js";/* empty css               *//* empty css              */import"./tooltip-b30db216.js";import{G as Le}from"./group-b21a3a2d.js";import{S as Il}from"./runtime-1b990724.js";import{_ as zl}from"./index-990170cf.js";import{_ as xl}from"./index-7c950a2e.js";import{h as fe}from"./index-e09fb15b.js";import{S as Rl,o as Ul,T as Nl}from"./index-5eb40136.js";import{n as Bl}from"./nginx-674a5f6a.js";import{_ as El}from"./index-77f7164b.js";import{h as Te}from"./util-bdb43d7e.js";import{M as Pl}from"./index-37aa7551.js";/* empty css                    *//* empty css                     *//* empty css              */import"./use-delete-data-3fb8ebbf.js";import"./setting-34057840.js";import"./base64-e52cbffd.js";import"./files-c7fff4dc.js";/* empty css                 *//* empty css             */import"./no_app-68a0aee4.js";import"./index-3ec321ac.js";import"./container-94920957.js";const Tl={style:{"white-space":"pre-line"}},Al={class:"dialog-footer"},Hl=W({__name:"index",setup(H,{expose:T}){let _=p(!1),k=p(),e=p(-1),v=p(!1);const m=()=>{e.value=0,w(),_.value=!0},h=()=>{_.value=!1},w=async()=>{const f=await cl();k.value=f.data,k.value.forEach(d=>{d.defaultServer&&(e.value=d.id)})},V=()=>{v.value=!0,_l({id:e.value}).then(()=>{oe(N.global.t("commons.msg.updateSuccess")),h()}).finally(()=>{v.value=!1})};return T({acceptParams:m}),(f,d)=>{const x=$e,R=he,C=ce,A=_e,$=we,S=pe,G=se,P=Z,U=Ae,I=ue;return u(),g(U,{"close-on-click-modal":!1,modelValue:a(_),"onUpdate:modelValue":d[2]||(d[2]=q=>ne(_)?_.value=q:_=q),size:"40%"},{header:t(()=>[l(Me,{header:f.$t("website.defaultServer"),back:h},null,8,["header"])]),footer:t(()=>[b("span",Al,[l(P,{onClick:h,disabled:a(v)},{default:t(()=>[D(r(f.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),l(P,{type:"primary",onClick:d[1]||(d[1]=q=>V()),disabled:a(v)},{default:t(()=>[D(r(f.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:t(()=>[Y((u(),g(G,null,{default:t(()=>[l(S,{span:22,offset:1},{default:t(()=>[l(A,{"label-position":"top"},{default:t(()=>[l(C,{label:f.$t("website.defaultServer")},{default:t(()=>[l(R,{modelValue:a(e),"onUpdate:modelValue":d[0]||(d[0]=q=>ne(e)?e.value=q:e=q),style:{width:"100%"}},{default:t(()=>[(u(),g(x,{value:0,key:-1,label:f.$t("website.noDefaulServer")},null,8,["label"])),(u(!0),B(X,null,Q(a(k),(q,K)=>(u(),g(x,{key:K,value:q.id,label:q.primaryDomain},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),l($,{closable:!1},{default:t(()=>[b("span",Tl,r(f.$t("website.defaultServerHelper")),1)]),_:1})]),_:1})]),_:1})),[[I,a(v)]])]),_:1},8,["modelValue"])}}}),Gl=b("br",null,null,-1),ql={class:"dialog-footer"},Ml=W({__name:"index",setup(H,{expose:T}){const _=We();let k=p(!1),e=p([]);const v=async w=>{e.value=w.items,k.value=!0},m=()=>{k.value=!1},h=()=>{_.push({name:"AppInstalled"})};return T({acceptParams:v}),(w,V)=>{const f=we,d=He,x=Ke,R=pe,C=se,A=Z,$=Ge;return u(),g($,{modelValue:a(k),"onUpdate:modelValue":V[0]||(V[0]=S=>ne(k)?k.value=S:k=S),title:w.$t("app.checkTitle"),width:"50%","close-on-click-modal":!1,"destroy-on-close":!0},{footer:t(()=>[b("span",ql,[l(A,{onClick:m},{default:t(()=>[D(r(w.$t("commons.button.cancel")),1)]),_:1}),l(A,{type:"primary",onClick:h},{default:t(()=>[D(r(w.$t("website.toApp")),1)]),_:1})])]),default:t(()=>[l(C,null,{default:t(()=>[l(f,{type:"warning",description:w.$t("website.deleteHelper"),center:"","show-icon":"",closable:!1},null,8,["description"]),l(R,{span:24},{default:t(()=>[Gl,l(x,{data:a(e),style:{width:"100%"}},{default:t(()=>[l(d,{prop:"name",label:w.$t("app.installName")},null,8,["label"]),l(d,{prop:"appName",label:w.$t("app.appName")},null,8,["label"]),l(d,{prop:"version",label:w.$t("app.version")},null,8,["label"]),l(d,{prop:"status",label:w.$t("app.status")},null,8,["label"])]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}}}),Ll={class:"drawer-header-button"},Fl=b("br",null,null,-1),Wl={key:0},Kl={key:1},Ol={key:1},Yl={key:1},jl={class:"input-help"},Jl={key:0},Xl=W({name:"CreateWebSite"}),Ql=W({...Xl,emits:["close"],setup(H,{expose:T,emit:_}){const k=p(),e=p({primaryDomain:"",type:"deployment",alias:"",remark:"",appType:"installed",appInstallId:void 0,webSiteGroupId:1,otherDomains:"",proxy:"",runtimeID:void 0,appinstall:{appId:0,name:"",appDetailId:0,params:{},version:"",appkey:""},proxyType:"tcp",port:9e3});let v=p({primaryDomain:[L.domain],alias:[L.linuxName],type:[L.requiredInput],webSiteGroupId:[L.requiredSelectBusiness],appInstallId:[L.requiredSelectBusiness],appType:[L.requiredInput],proxy:[L.requiredInput],runtimeID:[L.requiredSelectBusiness],appinstall:{name:[L.appName],appId:[L.requiredSelectBusiness],params:{}},proxyType:[L.requiredSelect],port:[L.port]}),m=p(!1),h=p(!1),w=p([]),V=p([]),f=ke({type:"website",page:1,pageSize:20}),d=p([]),x=p([]),R=p(),C=p(),A=p(1),$=p(),S=p(""),G=p("appstore");const P=p({page:1,pageSize:100,status:"normal"}),U=p([]),I=()=>{m.value=!1,_("close",!1)},q=i=>{i=="deployemnt"?V.value&&V.value.length>0&&(e.value.appInstallId=V.value[0].id):i=="runtime"?Ce():e.value.appInstallId=void 0,e.value.type=i},K=()=>{Vl({type:"website",unused:!0}).then(i=>{V.value=i.data,i.data&&i.data.length>0&&(e.value.appInstallId=i.data[0].id)})},ie=()=>{Dl(f).then(i=>{d.value=i.data.items,i.data.items.length>0&&(e.value.appinstall.appId=i.data.items[0].id,e.value.appinstall.appkey=i.data.items[0].key,be())})},M=()=>{d.value.forEach(i=>{i.id===e.value.appinstall.appId&&(e.value.appinstall.appkey=i.key,be())})},be=()=>{hl(e.value.appinstall.appkey).then(i=>{x.value=i.data.versions,i.data.versions.length>0&&(e.value.appinstall.version=i.data.versions[0],ve(i.data.versions[0]))})},ve=i=>{wl(e.value.appinstall.appId,i,"app").then(o=>{e.value.appinstall.appDetailId=o.data.id,R.value=o.data,C.value=o.data.params,A.value++})},ye=i=>{Sl(i).then(o=>{e.value.appinstall.appDetailId=o.data.id,R.value=o.data,C.value=o.data.params,A.value++})},Se=i=>{U.value.forEach(o=>{o.id===i&&(G.value=o.resource,o.type==="appstore"&&ye(o.appDetailId))})},Ce=async()=>{try{const i=await Il(P.value);if(U.value=i.data.items||[],U.value.length>0){const o=U.value[0];e.value.runtimeID=o.id,G.value=o.resource,o.resource==="appstore"&&ye(o.appDetailId)}}catch{}},Ie=async i=>{k.value&&k.value.resetFields(),S.value=i+"/www/sites/";const o=await Le({type:"website"});w.value=o.data,e.value.webSiteGroupId=o.data[0].id,e.value.type="deployment",G.value="appstore",K(),m.value=!0},ze=i=>{i==="installed"?K():ie()},xe=async i=>{!i||await i.validate(o=>{!o||(h.value=!0,fl({}).then(j=>{j.data?(h.value=!1,$.value.acceptParams({items:j.data})):bl(e.value).then(()=>{oe(N.global.t("commons.msg.createSuccess")),I()}).finally(()=>{h.value=!1})}).catch(()=>{h.value=!1}))})},Re=i=>{e.value.alias=i};return T({acceptParams:Ie}),(i,o)=>{const j=Z,ee=we,n=$e,c=he,z=ce,le=Oe,Ue=Ye,re=pe,de=se,O=Ve,J=Ae,Ne=ue;return u(),g(J,{"close-on-click-modal":!1,modelValue:a(m),"onUpdate:modelValue":o[24]||(o[24]=s=>ne(m)?m.value=s:m=s),size:"50%"},{header:t(()=>[l(Me,{header:i.$t("website.create"),back:I},{buttons:t(()=>[b("span",Ll,[(u(!0),B(X,null,Q([{label:a(N).global.t("website.deployment"),value:"deployment"},{label:a(N).global.t("website.static"),value:"static"},{label:a(N).global.t("website.proxy"),value:"proxy"},{label:a(N).global.t("runtime.runtime"),value:"runtime"}],s=>(u(),g(j,{key:s.value,class:ge(e.value.type===s.value?"active-button":""),onClick:F=>q(s.value),type:e.value.type===s.value?"":"info",plain:e.value.type===s.value,text:e.value.type!==s.value,bg:e.value.type!==s.value},{default:t(()=>[D(r(s.label),1)]),_:2},1032,["class","onClick","type","plain","text","bg"]))),128))])]),_:1},8,["header"])]),footer:t(()=>[b("span",null,[l(j,{onClick:I,disabled:a(h)},{default:t(()=>[D(r(i.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),l(j,{type:"primary",onClick:o[23]||(o[23]=s=>xe(k.value)),disabled:a(h)},{default:t(()=>[D(r(i.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:t(()=>[Y((u(),g(de,null,{default:t(()=>[l(re,{span:22,offset:1},{default:t(()=>[e.value.type=="deployment"?(u(),g(ee,{key:0,title:i.$t("website.websiteDeploymentHelper"),type:"info",closable:!1},null,8,["title"])):E("",!0),e.value.type=="static"?(u(),g(ee,{key:1,title:i.$t("website.websiteStatictHelper"),type:"info",closable:!1},null,8,["title"])):E("",!0),e.value.type=="proxy"?(u(),g(ee,{key:2,title:i.$t("website.websiteProxyHelper"),type:"info",closable:!1},null,8,["title"])):E("",!0),e.value.type=="runtime"?(u(),g(ee,{key:3,title:i.$t("website.runtimeProxyHelper"),type:"info",closable:!1},null,8,["title"])):E("",!0),Fl,l(a(_e),{ref_key:"websiteForm",ref:k,"label-position":"top",model:e.value,"label-width":"125px",rules:a(v),"validate-on-rule-change":!1},{default:t(()=>[l(z,{label:i.$t("website.group"),prop:"webSiteGroupId"},{default:t(()=>[l(c,{modelValue:e.value.webSiteGroupId,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value.webSiteGroupId=s)},{default:t(()=>[(u(!0),B(X,null,Q(a(w),(s,F)=>(u(),g(n,{key:F,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.type==="deployment"?(u(),B("div",Wl,[l(z,{prop:"appType"},{default:t(()=>[l(Ue,{modelValue:e.value.appType,"onUpdate:modelValue":o[1]||(o[1]=s=>e.value.appType=s),onChange:o[2]||(o[2]=s=>ze(e.value.appType))},{default:t(()=>[l(le,{label:"installed",value:"installed"},{default:t(()=>[D(r(i.$t("website.appInstalled")),1)]),_:1}),l(le,{label:"new"},{default:t(()=>[D(r(i.$t("website.appNew")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e.value.appType=="installed"?(u(),g(z,{key:0,label:i.$t("website.appInstalled"),prop:"appInstallId"},{default:t(()=>[l(c,{modelValue:e.value.appInstallId,"onUpdate:modelValue":o[3]||(o[3]=s=>e.value.appInstallId=s)},{default:t(()=>[(u(!0),B(X,null,Q(a(V),(s,F)=>(u(),g(n,{key:F,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):E("",!0),e.value.appType=="new"?(u(),B("div",Kl,[l(z,{label:i.$t("app.app"),prop:"appinstall.appId"},{default:t(()=>[l(de,{gutter:20},{default:t(()=>[l(re,{span:12},{default:t(()=>[l(c,{modelValue:e.value.appinstall.appId,"onUpdate:modelValue":o[4]||(o[4]=s=>e.value.appinstall.appId=s),onChange:o[5]||(o[5]=s=>M())},{default:t(()=>[(u(!0),B(X,null,Q(a(d),(s,F)=>(u(),g(n,{key:F,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(re,{span:12},{default:t(()=>[l(c,{modelValue:e.value.appinstall.version,"onUpdate:modelValue":o[6]||(o[6]=s=>e.value.appinstall.version=s),onChange:o[7]||(o[7]=s=>ve(e.value.appinstall.version))},{default:t(()=>[(u(!0),B(X,null,Q(a(x),(s,F)=>(u(),g(n,{key:F,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["label"]),l(z,{label:i.$t("app.name"),prop:"appinstall.name"},{default:t(()=>[l(O,{modelValue:e.value.appinstall.name,"onUpdate:modelValue":o[8]||(o[8]=s=>e.value.appinstall.name=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),(u(),g(Pe,{key:a(A),form:e.value.appinstall.params,"onUpdate:form":o[9]||(o[9]=s=>e.value.appinstall.params=s),rules:a(v).appinstall.params,"onUpdate:rules":o[10]||(o[10]=s=>a(v).appinstall.params=s),params:a(C),propStart:"appinstall.params."},null,8,["form","rules","params","propStart"]))])):E("",!0)])):E("",!0),e.value.type==="runtime"?(u(),B("div",Ol,[l(z,{label:i.$t("runtime.runtime"),prop:"runtimeID"},{default:t(()=>[l(c,{modelValue:e.value.runtimeID,"onUpdate:modelValue":o[11]||(o[11]=s=>e.value.runtimeID=s),onChange:o[12]||(o[12]=s=>Se(e.value.runtimeID)),filterable:""},{default:t(()=>[(u(!0),B(X,null,Q(U.value,s=>(u(),g(n,{key:s.name,label:s.name+"("+i.$t("runtime."+s.resource)+")",value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(G)==="appstore"?(u(),g(Pe,{key:a(A),form:e.value.appinstall.params,"onUpdate:form":o[13]||(o[13]=s=>e.value.appinstall.params=s),rules:a(v).appinstall.params,"onUpdate:rules":o[14]||(o[14]=s=>a(v).appinstall.params=s),params:a(C),propStart:"appinstall.params."},null,8,["form","rules","params","propStart"])):(u(),B("div",Yl,[l(z,{label:i.$t("website.proxyType"),prop:"proxyType"},{default:t(()=>[l(c,{modelValue:e.value.proxyType,"onUpdate:modelValue":o[15]||(o[15]=s=>e.value.proxyType=s)},{default:t(()=>[l(n,{label:i.$t("website.tcp"),value:"tcp"},null,8,["label"]),l(n,{label:i.$t("website.unix"),value:"unix"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.proxyType==="tcp"?(u(),g(z,{key:0,label:i.$t("website.port"),prop:"port"},{default:t(()=>[l(O,{modelValue:e.value.port,"onUpdate:modelValue":o[16]||(o[16]=s=>e.value.port=s),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["label"])):E("",!0)]))])):E("",!0),l(z,{label:i.$t("website.primaryDomain"),prop:"primaryDomain"},{default:t(()=>[l(O,{modelValue:e.value.primaryDomain,"onUpdate:modelValue":o[17]||(o[17]=s=>e.value.primaryDomain=s),modelModifiers:{trim:!0},onInput:o[18]||(o[18]=s=>Re(e.value.primaryDomain))},null,8,["modelValue"])]),_:1},8,["label"]),l(z,{label:i.$t("website.otherDomains"),prop:"otherDomains"},{default:t(()=>[l(O,{type:"textarea",autosize:{minRows:2,maxRows:6},modelValue:e.value.otherDomains,"onUpdate:modelValue":o[19]||(o[19]=s=>e.value.otherDomains=s),placeholder:i.$t("website.domainHelper")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(z,{label:i.$t("website.alias"),prop:"alias"},{default:t(()=>[l(O,{modelValue:e.value.alias,"onUpdate:modelValue":o[20]||(o[20]=s=>e.value.alias=s),modelModifiers:{trim:!0},placeholder:i.$t("website.aliasHelper")},null,8,["modelValue","placeholder"]),b("div",null,[b("span",jl,[b("span",null,r(i.$t("website.staticPath")+a(S)+e.value.alias),1),e.value.type==="static"&&e.value.alias!=""?(u(),B("span",Jl,r("/index"))):E("",!0)])])]),_:1},8,["label"]),e.value.type==="proxy"?(u(),g(z,{key:2,label:i.$t("website.proxyAddress"),prop:"proxy"},{default:t(()=>[l(O,{modelValue:e.value.proxy,"onUpdate:modelValue":o[21]||(o[21]=s=>e.value.proxy=s),placeholder:i.$t("website.proxyHelper")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):E("",!0),l(z,{label:i.$t("website.remark"),prop:"remark"},{default:t(()=>[l(O,{modelValue:e.value.remark,"onUpdate:modelValue":o[22]||(o[22]=s=>e.value.remark=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})]),_:1})),[[Ne,a(h)]]),l(Ml,{ref_key:"preCheckRef",ref:$},null,512)]),_:1},8,["modelValue"])}}}),Zl={class:"input-help"},et={class:"input-help"},lt={class:"input-help",style:{color:"red"}},tt={class:"input-help"},at=["innerHTML"],nt={class:"dialog-footer"},ot=W({__name:"index",emits:["close"],setup(H,{expose:T,emit:_}){let k=1,e=p(!1),v=p(!1),m=p({id:0,deleteApp:!1,deleteBackup:!1,forceDelete:!1}),h=p("");const w=p();let V=p(""),f=p(""),d=p("");const x=p(!1),R=()=>{e.value=!1,_("close",!1)},C=async $=>{m.value={id:0,deleteApp:!1,deleteBackup:!1,forceDelete:!1},$.type==="runtime"&&$.appInstallId>0&&(x.value=!0,m.value.deleteApp=!0),V.value="",m.value.id=$.id,f.value=$.primaryDomain,d.value=N.global.t("website.deleteConfirmHelper",[$.primaryDomain]),h.value=$.type,e.value=!0},A=()=>{v.value=!0,vl(m.value).then(()=>{R(),oe(N.global.t("commons.msg.deleteSuccess"))}).finally(()=>{v.value=!1})};return T({acceptParams:C}),($,S)=>{const G=je,P=ce,U=Ve,I=_e,q=Z,K=Ge,ie=ue;return u(),g(K,{modelValue:a(e),"onUpdate:modelValue":S[5]||(S[5]=M=>ne(e)?e.value=M:e=M),"close-on-click-modal":!1,title:$.$t("website.delete"),width:"30%","before-close":R},{footer:t(()=>[b("span",nt,[l(q,{onClick:R,disabled:a(v)},{default:t(()=>[D(r($.$t("commons.button.cancel")),1)]),_:1},8,["disabled"]),l(q,{type:"primary",onClick:S[4]||(S[4]=M=>A()),disabled:a(v)||a(V)!=a(f)},{default:t(()=>[D(r($.$t("commons.button.confirm")),1)]),_:1},8,["disabled"])])]),default:t(()=>[Y((u(),B("div",{key:a(k)},[l(I,{ref_key:"deleteForm",ref:w,"label-position":"left"},{default:t(()=>[l(P,null,{default:t(()=>[l(G,{modelValue:a(m).forceDelete,"onUpdate:modelValue":S[0]||(S[0]=M=>a(m).forceDelete=M),label:$.$t("website.forceDelete")},null,8,["modelValue","label"]),b("span",Zl,r($.$t("website.forceDeleteHelper")),1)]),_:1}),a(h)==="deployment"||x.value?(u(),g(P,{key:0},{default:t(()=>[l(G,{modelValue:a(m).deleteApp,"onUpdate:modelValue":S[1]||(S[1]=M=>a(m).deleteApp=M),disabled:x.value,label:$.$t("website.deleteApp")},null,8,["modelValue","disabled","label"]),b("span",et,r($.$t("website.deleteAppHelper")),1),b("span",lt,r($.$t("website.deleteRuntimeHelper")),1)]),_:1})):E("",!0),l(P,null,{default:t(()=>[l(G,{modelValue:a(m).deleteBackup,"onUpdate:modelValue":S[2]||(S[2]=M=>a(m).deleteBackup=M),label:$.$t("website.deleteBackup")},null,8,["modelValue","label"]),b("span",tt,r($.$t("website.deleteBackupHelper")),1)]),_:1}),l(P,null,{default:t(()=>[b("span",{innerHTML:a(d)},null,8,at),l(U,{modelValue:a(V),"onUpdate:modelValue":S[3]||(S[3]=M=>ne(V)?V.value=M:V=M),placeholder:a(f)},null,8,["modelValue","placeholder"])]),_:1})]),_:1},512)])),[[ie,a(v)]])]),_:1},8,["modelValue","title"])}}}),st=()=>fe.get("/openresty"),it=H=>fe.post("/openresty/scope",H),pt=H=>fe.post("/openresty/update",H),ut=()=>fe.get("/openresty/status"),rt=H=>fe.post("/openresty/file",H),dt={style:{"margin-top":"10px"}},mt=W({__name:"index",setup(H){const T=[Rl.define(Bl),Ul];let _=p(),k=p(""),e=p(!1),v=p(!1);const m=()=>{e.value=!0,rt({filePath:_.value.path,content:k.value,backup:v.value}).then(()=>{oe(N.global.t("commons.msg.updateSuccess")),h()}).finally(()=>{e.value=!1})},h=async()=>{const V=await st();_.value=V.data,k.value=_.value.content,v.value=!1},w=async()=>{e.value=!0;const V=await Cl("openresty");k.value=V.data,v.value=!0,e.value=!1};return De(()=>{h()}),(V,f)=>{const d=Z,x=we,R=pe,C=se,A=ue;return Y((u(),B("div",null,[l(a(Nl),{autofocus:!0,placeholder:"None data","indent-with-tab":!0,tabSize:4,style:{width:"100%",height:"calc(100vh - 375px)"},lineWrapping:!0,matchBrackets:!0,theme:"cobalt",styleActiveLine:!0,extensions:T,mode:"text/x-nginx-conf",modelValue:a(k),"onUpdate:modelValue":f[0]||(f[0]=$=>ne(k)?k.value=$:k=$)},null,8,["modelValue"]),b("div",dt,[l(d,{onClick:f[1]||(f[1]=$=>w()),disabled:a(e)},{default:t(()=>[D(r(V.$t("app.defaultConfig")),1)]),_:1},8,["disabled"]),l(d,{type:"primary",onClick:f[2]||(f[2]=$=>m()),disabled:a(e)},{default:t(()=>[D(r(V.$t("commons.button.save")),1)]),_:1},8,["disabled"])]),l(C,null,{default:t(()=>[l(R,{span:4},{default:t(()=>[a(v)?(u(),g(x,{key:0,style:{"margin-top":"10px"},title:V.$t("app.defaultConfigHelper"),type:"info",closable:!1},null,8,["title"])):E("",!0)]),_:1})]),_:1})])),[[A,a(e)]])}}}),ct=b("br",null,null,-1),_t={class:"input-help"},ft={class:"input-help"},bt={class:"input-help"},vt={class:"input-help"},yt=b("br",null,null,-1),gt={class:"input-help"},kt={class:"input-help"},$t={class:"input-help"},ht=W({__name:"index",setup(H){let T=p({scope:"http-per"}),_=p({scope:"http-per",operate:"update",params:{}}),k=p(),e=p({server_names_hash_bucket_size:512,client_header_buffer_size:32,client_max_body_size:50,keepalive_timeout:60,gzip_min_length:1,gzip_comp_level:2,gzip:"on"}),v=p(),m=p(!1);const h=ke({server_names_hash_bucket_size:[me(1,9999)],client_header_buffer_size:[me(0,999999999)],client_max_body_size:[me(0,999999999)],keepalive_timeout:[me(0,999999999)],gzip:[L.requiredSelect],gzip_min_length:[L.requiredSelect],gzip_comp_level:[me(1,9)]}),w=async()=>{const f=await it(T.value);k.value=f.data;for(const d of f.data)d.params.length!==0&&(d.name=="gzip"?e.value.gzip=d.params[0]:e.value[d.name]=Number(d.params[0].match(/\d+/g)))},V=async f=>{!f||await f.validate(d=>{if(!d)return;m.value=!0;let x={gzip:e.value.gzip,server_names_hash_bucket_size:String(e.value.server_names_hash_bucket_size),client_header_buffer_size:String(e.value.client_header_buffer_size)+"k",client_max_body_size:String(e.value.client_max_body_size)+"m",keepalive_timeout:String(e.value.keepalive_timeout),gzip_min_length:String(e.value.gzip_min_length)+"k",gzip_comp_level:String(e.value.gzip_comp_level)};_.value.params=x,pt(_.value).then(()=>{oe(N.global.t("commons.msg.updateSuccess")),w()}).finally(()=>{m.value=!1})})};return De(()=>{w()}),(f,d)=>{const x=pe,R=Ve,C=ce,A=Z,$=$e,S=he,G=se,P=_e,U=ue;return u(),B("div",null,[l(P,{model:a(e),rules:h,ref_key:"nginxFormRef",ref:v,"label-position":"top"},{default:t(()=>[Y((u(),g(G,null,{default:t(()=>[l(x,{span:1},{default:t(()=>[ct]),_:1}),l(x,{span:9},{default:t(()=>[l(C,{label:"server_names_hash_bucket_size",prop:"server_names_hash_bucket_size"},{default:t(()=>[l(R,{clearable:"",type:"number",modelValue:a(e).server_names_hash_bucket_size,"onUpdate:modelValue":d[0]||(d[0]=I=>a(e).server_names_hash_bucket_size=I),modelModifiers:{number:!0}},null,8,["modelValue"]),b("span",_t,r(f.$t("nginx.serverNamesHashBucketSizeHelper")),1)]),_:1}),l(C,{label:"client_header_buffer_size",prop:"client_header_buffer_size"},{default:t(()=>[l(R,{clearable:"",type:"number",modelValue:a(e).client_header_buffer_size,"onUpdate:modelValue":d[1]||(d[1]=I=>a(e).client_header_buffer_size=I),modelModifiers:{number:!0}},{append:t(()=>[D("K")]),_:1},8,["modelValue"]),b("span",ft,r(f.$t("nginx.clientHeaderBufferSizeHelper")),1)]),_:1}),l(C,{label:"client_max_body_size",prop:"client_max_body_size"},{default:t(()=>[l(R,{clearable:"",type:"number",modelValue:a(e).client_max_body_size,"onUpdate:modelValue":d[2]||(d[2]=I=>a(e).client_max_body_size=I),modelModifiers:{number:!0}},{append:t(()=>[D("MB")]),_:1},8,["modelValue"]),b("span",bt,r(f.$t("nginx.clientMaxBodySizeHelper")),1)]),_:1}),l(C,{label:"keepalive_timeout",prop:"keepalive_timeout"},{default:t(()=>[l(R,{clearable:"",type:"number",modelValue:a(e).keepalive_timeout,"onUpdate:modelValue":d[3]||(d[3]=I=>a(e).keepalive_timeout=I),modelModifiers:{number:!0}},null,8,["modelValue"]),b("span",vt,r(f.$t("nginx.keepaliveTimeoutHelper")),1)]),_:1}),l(C,null,{default:t(()=>[l(A,{type:"primary",onClick:d[4]||(d[4]=I=>V(a(v)))},{default:t(()=>[D(r(f.$t("commons.button.save")),1)]),_:1})]),_:1})]),_:1}),l(x,{span:1},{default:t(()=>[yt]),_:1}),l(x,{span:9},{default:t(()=>[l(C,{label:"gzip",prop:"gzip"},{default:t(()=>[l(S,{modelValue:a(e).gzip,"onUpdate:modelValue":d[5]||(d[5]=I=>a(e).gzip=I)},{default:t(()=>[l($,{label:"on",value:"on"}),l($,{label:"off",value:"off"})]),_:1},8,["modelValue"]),b("span",gt,r(f.$t("nginx.gzipHelper")),1)]),_:1}),l(C,{label:"gzip_min_length",prop:"gzip_min_length"},{default:t(()=>[l(R,{clearable:"",modelValue:a(e).gzip_min_length,"onUpdate:modelValue":d[6]||(d[6]=I=>a(e).gzip_min_length=I),modelModifiers:{number:!0}},{append:t(()=>[D("KB")]),_:1},8,["modelValue"]),b("span",kt,r(f.$t("nginx.gzipMinLengthHelper")),1)]),_:1}),l(C,{label:"gzip_comp_level",prop:"gzip_comp_level"},{default:t(()=>[l(R,{clearable:"",modelValue:a(e).gzip_comp_level,"onUpdate:modelValue":d[7]||(d[7]=I=>a(e).gzip_comp_level=I),modelModifiers:{number:!0}},null,8,["modelValue"]),b("span",$t,r(f.$t("nginx.gzipCompLevelHelper")),1)]),_:1})]),_:1})]),_:1})),[[U,a(m)]])]),_:1},8,["model","rules"])])}}}),wt={class:"status-label"},Vt={class:"status-count"},Dt={class:"status-label"},St={class:"status-count"},Ct={class:"status-label"},It={class:"status-count"},zt={class:"status-label"},xt={class:"status-count"},Rt={class:"status-label"},Ut={class:"status-count"},Nt={class:"status-label"},Bt={class:"status-count"},Et={class:"status-label"},Pt={class:"status-count"},Tt=W({__name:"index",props:{status:{type:String,default:"Running"}},setup(H){const T=H;let _=p({accepts:"",handled:"",requests:"",reading:"",waiting:"",writing:"",active:""});const k=async()=>{if(T.status!="Running")return;const e=await ut();_.value=e.data};return De(()=>{k()}),(e,v)=>{const m=ce,h=se,w=_e;return u(),B("div",null,[l(w,{"label-position":"top"},{default:t(()=>[l(h,{type:"flex",style:{"margin-left":"50px"},justify:"center"},{default:t(()=>[l(m,{style:{width:"25%"}},{label:t(()=>[b("span",wt,r(e.$t("nginx.connections")),1)]),default:t(()=>[b("span",Vt,r(a(_).active),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",Dt,r(e.$t("nginx.accepts")),1)]),default:t(()=>[b("span",St,r(a(_).accepts),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",Ct,r(e.$t("nginx.handled")),1)]),default:t(()=>[b("span",It,r(a(_).handled),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",zt,r(e.$t("nginx.requests")),1)]),default:t(()=>[b("span",xt,r(a(_).requests),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",Rt,r(e.$t("nginx.reading")),1)]),default:t(()=>[b("span",Ut,r(a(_).reading),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",Nt,r(e.$t("nginx.writing")),1)]),default:t(()=>[b("span",Bt,r(a(_).writing),1)]),_:1}),l(m,{style:{width:"25%"}},{label:t(()=>[b("span",Et,r(e.$t("nginx.waiting")),1)]),default:t(()=>[b("span",Pt,r(a(_).waiting),1)]),_:1}),l(m,{style:{width:"25%"}})]),_:1})]),_:1})])}}}),At=W({__name:"index",props:{containerName:{type:String,default:""},status:{type:String,default:"Running"}},setup(H){const T=H;let _=p("1"),k=p();const e=v=>{_.value=v,v==="4"&&Je(()=>{k.value.acceptParams({containerID:T.containerName,container:T.containerName})})};return(v,m)=>{const h=Z;return u(),g(qe,{title:v.$t("nginx.nginxConfig"),reload:!0},{buttons:t(()=>[l(h,{type:"primary",plain:a(_)!=="1",onClick:m[0]||(m[0]=w=>e("1"))},{default:t(()=>[D(r(v.$t("nginx.status")),1)]),_:1},8,["plain"]),l(h,{type:"primary",plain:a(_)!=="2",onClick:m[1]||(m[1]=w=>e("2"))},{default:t(()=>[D(r(v.$t("nginx.configResource")),1)]),_:1},8,["plain"]),l(h,{type:"primary",plain:a(_)!=="3",onClick:m[2]||(m[2]=w=>e("3"))},{default:t(()=>[D(r(v.$t("website.nginxPer")),1)]),_:1},8,["plain"]),l(h,{type:"primary",plain:a(_)!=="4",onClick:m[3]||(m[3]=w=>e("4"))},{default:t(()=>[D(r(v.$t("website.log")),1)]),_:1},8,["plain"])]),main:t(()=>[a(_)==="1"?(u(),g(Tt,{key:0,status:H.status},null,8,["status"])):E("",!0),a(_)==="2"?(u(),g(mt,{key:1})):E("",!0),a(_)==="3"?(u(),g(ht,{key:2})):E("",!0),a(_)==="4"?(u(),g(El,{key:3,ref_key:"dialogContainerLogRef",ref:k},null,512)):E("",!0)]),_:1},8,["title"])}}});const Ht={class:"search-button"},Gt={key:0},qt={key:0},Mt={key:1},Lt=W({__name:"index",setup(H){const T=[{text:Qe().t("website.ever"),value:()=>new Date("1970-01-01")},{text:N.global.t("website.nextYear"),value:()=>{const n=new Date;return n.setFullYear(n.getFullYear()+1),n}}],_=p(!1),k=p(!0),e=p(),v=p(),m=p();let h=p(!1),w=p(!1),V=p(""),f=p(""),d=p("");const x=p(),R=p(),C=p(),A=p();let $=new Map,S=p([]);const G=ke({currentPage:1,pageSize:10,total:0});let P=ke({name:"",page:1,pageSize:10,websiteGroupId:0});const U=async()=>{P.page=G.currentPage,P.pageSize=G.pageSize,_.value=!0,await yl(P).then(n=>{A.value=n.data.items,G.total=n.data.total}).finally(()=>{_.value=!1})},I=async()=>{const n=await Le({type:"website"});S.value=n.data},q=()=>{h.value=!0},K=n=>{sl.push({name:"WebsiteConfig",params:{id:n,tab:"basic"}})},ie=n=>new Date(n)<new Date("1970-01-02"),M=n=>new Date>new Date(n),be=n=>ie(n)?new Date:new Date(n),ve=(n,c)=>{n.showdate=!0;const z=$.get(c);if(z!=null){if(M(n.expireDate)){n.oldExpireDate=n.expireDate;const le=new Date().toLocaleDateString();n.expireDate=le}z.handleOpen()}},ye=(n,c)=>{$.set(c,n)},Se=(n,c)=>{n||(c.showdate=!1,c.change||(c.oldExpireDate&&(c.expireDate=c.oldExpireDate),c.change=!1))},Ce=n=>{const c=Te(n.expireDate),z={id:n.id,primaryDomain:n.primaryDomain,remark:n.remark,webSiteGroupId:n.webSiteGroupId,expireDate:c};gl(z).then(()=>{n.change=!0,oe(N.global.t("commons.msg.updateSuccess"))})},Ie=[{label:N.global.t("website.config"),click:function(n){K(n.id)}},{label:N.global.t("database.backupList"),click:n=>{let c={type:"website",name:n.primaryDomain,detailName:""};R.value.acceptParams(c)}},{label:N.global.t("database.loadBackup"),click:n=>{let c={type:"website",name:n.primaryDomain,detailName:""};x.value.acceptParams(c)}},{label:N.global.t("app.delete"),click:function(n){ze(n)}}],ze=n=>{v.value.acceptParams(n)},xe=()=>{e.value.acceptParams(d.value)},Re=()=>{m.value.acceptParams({type:"website"})},i=()=>{C.value.acceptParams()},o=n=>{w.value=n.isExist,V.value=n.containerName,f.value=n.status,d.value=n.installPath},j=n=>{const c=new Date;return n.getTime()<c.getTime()},ee=(n,c)=>{il.confirm(N.global.t("website."+n+"Helper"),N.global.t("cronjob.changeStatus"),{confirmButtonText:N.global.t("commons.button.confirm"),cancelButtonText:N.global.t("commons.button.cancel")}).then(async()=>{await kl({id:c,operate:n}),oe(N.global.t("commons.msg.operationSuccess")),U()})};return De(()=>{U(),I()}),(n,c)=>{const z=Z,le=pe,Ue=Ve,re=se,de=$e,O=he,J=He,Ne=Ze,s=el,F=pl("fu-table-operations"),Fe=ll,Be=ue;return u(),B("div",null,[l(rl,{buttons:[{label:a(N).global.t("website.website"),path:"/websites"}]},null,8,["buttons"]),Y((u(),g(qe,{title:n.$t("website.website")},tl({app:t(()=>[l(xl,{"app-key":"openresty",onSetting:q,"mask-show":k.value,"onUpdate:mask-show":c[0]||(c[0]=y=>k.value=y),loading:_.value,"onUpdate:loading":c[1]||(c[1]=y=>_.value=y),onIsExist:o},null,8,["mask-show","loading"])]),_:2},[a(w)&&!a(h)?{name:"toolbar",fn:t(()=>[l(re,{class:ge({mask:a(f)!="Running"})},{default:t(()=>[l(le,{span:20},{default:t(()=>[l(z,{type:"primary",onClick:xe},{default:t(()=>[D(r(n.$t("website.create")),1)]),_:1}),l(z,{type:"primary",plain:"",onClick:Re},{default:t(()=>[D(r(n.$t("website.group")),1)]),_:1}),l(z,{type:"primary",plain:"",onClick:i},{default:t(()=>[D(r(n.$t("website.defaultServer")),1)]),_:1})]),_:1}),l(le,{span:4},{default:t(()=>[b("div",Ht,[l(Ue,{modelValue:a(P).name,"onUpdate:modelValue":c[2]||(c[2]=y=>a(P).name=y),clearable:"",onClear:c[3]||(c[3]=y=>U()),"suffix-icon":"Search",onKeyup:c[4]||(c[4]=al(y=>U(),["enter"])),onBlur:c[5]||(c[5]=y=>U()),placeholder:n.$t("commons.button.search")},null,8,["modelValue","placeholder"])])]),_:1})]),_:1},8,["class"])]),key:"0"}:void 0,a(w)&&!a(h)?{name:"search",fn:t(()=>[b("div",{class:ge({mask:a(f)!="Running"})},[l(O,{modelValue:a(P).websiteGroupId,"onUpdate:modelValue":c[6]||(c[6]=y=>a(P).websiteGroupId=y),onChange:c[7]||(c[7]=y=>U())},{prefix:t(()=>[D(r(n.$t("website.group")),1)]),default:t(()=>[l(de,{label:n.$t("commons.table.all"),value:0},null,8,["label"]),(u(!0),B(X,null,Q(a(S),(y,te)=>(u(),g(de,{key:te,label:y.name,value:y.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])],2)]),key:"1"}:void 0,a(w)&&!a(h)?{name:"main",fn:t(()=>[l($l,{"pagination-config":G,data:A.value,onSearch:c[8]||(c[8]=y=>U()),class:ge({mask:a(f)!="Running"})},{default:t(()=>[l(J,{label:n.$t("commons.table.name"),fix:"",prop:"primaryDomain","min-width":"120px"},{default:t(({row:y})=>[l(ul,{onClick:te=>K(y.id),text:y.primaryDomain},null,8,["onClick","text"])]),_:1},8,["label"]),l(J,{label:n.$t("commons.table.type"),fix:"","show-overflow-tooltip":"",prop:"type"},{default:t(({row:y})=>[D(r(n.$t("website."+y.type))+" ",1),y.type==="deployment"?(u(),B("span",Gt,"["+r(y.appName)+"]",1)):E("",!0)]),_:1},8,["label"]),l(J,{label:n.$t("commons.table.status"),prop:"status"},{default:t(({row:y})=>[y.status==="Running"?(u(),g(z,{key:0,link:"",type:"success",icon:a(nl),onClick:te=>ee("stop",y.id)},{default:t(()=>[D(r(n.$t("commons.status.running")),1)]),_:2},1032,["icon","onClick"])):(u(),g(z,{key:1,link:"",type:"danger",icon:a(ol),onClick:te=>ee("start",y.id)},{default:t(()=>[D(r(n.$t("commons.status.stopped")),1)]),_:2},1032,["icon","onClick"]))]),_:1},8,["label"]),l(J,{label:n.$t("website.remark"),fix:"",prop:"remark"},{default:t(({row:y})=>[l(Pl,{info:y.remark,width:"120"},null,8,["info"])]),_:1},8,["label"]),l(J,{label:n.$t("website.protocol"),prop:"protocol"},null,8,["label"]),l(J,{label:n.$t("website.expireDate")},{default:t(({row:y,$index:te})=>[Y(b("div",null,[l(Ne,{style:{width:"120px"},modelValue:y.expireDate,"onUpdate:modelValue":ae=>y.expireDate=ae,type:"date","disabled-date":j,shortcuts:T,clearable:!1,"default-value":be(y.expireDate),ref:ae=>ye(ae,te),onChange:ae=>Ce(y),onVisibleChange:ae=>Se(ae,y),size:"small"},null,8,["modelValue","onUpdate:modelValue","default-value","onChange","onVisibleChange"])],512),[[Ee,y.showdate]]),Y(b("div",null,[l(s,{type:"primary",underline:!1,onClick:ae=>ve(y,te)},{default:t(()=>[ie(y.expireDate)?(u(),B("span",qt,r(n.$t("website.neverExpire")),1)):(u(),B("span",Mt,r(a(Te)(y.expireDate)),1))]),_:2},1032,["onClick"])],512),[[Ee,!y.showdate]])]),_:1},8,["label"]),l(F,{ellipsis:10,width:"260px",buttons:Ie,label:n.$t("commons.table.operate"),fixed:"right",fix:""},null,8,["label"])]),_:1},8,["pagination-config","data","class"]),a(f)!="Running"&&k.value?(u(),g(Fe,{key:0,width:"30%",class:"mask-prompt"},{default:t(()=>[b("span",null,r(n.$t("commons.service.serviceNotStarted",["OpenResty"])),1)]),_:1})):E("",!0)]),key:"2"}:void 0]),1032,["title"])),[[Be,_.value]]),a(h)?Y((u(),g(At,{key:0,containerName:a(V),status:a(f)},null,8,["containerName","status"])),[[Be,_.value]]):E("",!0),l(Ql,{ref_key:"createRef",ref:e,onClose:U},null,512),l(ot,{ref_key:"deleteRef",ref:v,onClose:U},null,512),l(dl,{ref_key:"uploadRef",ref:x},null,512),l(ml,{ref_key:"dialogBackupRef",ref:R},null,512),l(Hl,{ref_key:"defaultRef",ref:C},null,512),l(zl,{onSearch:U,ref_key:"groupRef",ref:m},null,512)])}}});var Fa=Xe(Lt,[["__scopeId","data-v-419074c9"]]);export{Fa as default};
