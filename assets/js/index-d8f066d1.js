import{d as x,r as s,x as ee,j as c,X as Y,b as v,h as A,e as o,w as n,c as W,Y as ae,g as B,t as p,O as J,y as te,$ as Z,A as le,aq as oe,af as se,a5 as ne,f as F,U as L,a0 as re,ar as pe,as as de,ac as me}from"./index-609fd921.js";/* empty css                */import{_ as Q}from"./index-110fbc44.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css            *//* empty css               */import{_ as ue}from"./index-af1c8b2d.js";import{b as ve,c as fe}from"./util-bdb43d7e.js";import{u as ce}from"./use-delete-data-3fb8ebbf.js";import{s as be,h as ge,a as he,d as _e,b as ye,l as ke,c as $e}from"./setting-34057840.js";import{D as we,G as Ce,C as Se,a as ze,B as De}from"./files-c7fff4dc.js";/* empty css                    *//* empty css                 *//* empty css             */const Ne={key:0},Qe=x({__name:"index",setup(ie,{expose:G}){const h=s([]),i=s(),T=s(),_=ee({currentPage:1,pageSize:10,total:0}),r=s(!1),S=s(),f=s(),d=s(),E=a=>{S.value=a.type,f.value=a.name,d.value=a.detailName,r.value=!0,m()},u=()=>{r.value=!1},m=async()=>{let a={page:_.currentPage,pageSize:_.pageSize,type:S.value,name:f.value,detailName:d.value};const l=await be(a);T.value=l.data.items||[],_.total=l.data.total},z=async()=>{let a={type:S.value,name:f.value,detailName:d.value};i.value=!0,await ge(a).then(()=>{i.value=!1,Z(c.global.t("commons.msg.operationSuccess")),m()}).catch(()=>{i.value=!1})},K=async a=>{let l={type:S.value,name:f.value,detailName:d.value,file:a.fileDir+"/"+a.fileName};i.value=!0,await he(l).then(()=>{i.value=!1,Z(c.global.t("commons.msg.operationSuccess"))}).catch(()=>{i.value=!1})},R=async a=>{let l={source:a.source,fileDir:a.fileDir,fileName:a.fileName};await _e(l).then(async k=>{const $=await we(k.data),M=window.URL.createObjectURL(new Blob([$])),w=document.createElement("a");w.style.display="none",w.href=M,w.download=a.fileName;const V=new MouseEvent("click");w.dispatchEvent(V)})},j=async a=>{let l=[];a?l.push(a.id):h.value.forEach(k=>{l.push(k.id)}),await ce(ye,{ids:l},"commons.msg.delete"),m()},y=[{label:c.global.t("commons.button.delete"),click:a=>{j(a)}},{label:c.global.t("commons.button.recover"),click:a=>{K(a)}},{label:c.global.t("commons.button.download"),click:a=>{R(a)}}];return G({acceptParams:E}),(a,l)=>{const k=le,$=oe,M=Y("fu-table-operations"),w=se,V=ne;return v(),A("div",null,[o(w,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=b=>r.value=b),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:n(()=>[d.value?(v(),W(Q,{key:0,header:a.$t("database.backup"),resource:f.value+"("+d.value+")",back:u},null,8,["header","resource"])):(v(),W(Q,{key:1,header:a.$t("database.backup"),resource:f.value,back:u},null,8,["header","resource"]))]),default:n(()=>[ae((v(),W(ue,{"pagination-config":_,selects:h.value,"onUpdate:selects":l[2]||(l[2]=b=>h.value=b),onSearch:m,data:T.value},{toolbar:n(()=>[o(k,{type:"primary",onClick:l[0]||(l[0]=b=>z())},{default:n(()=>[B(p(a.$t("database.backup")),1)]),_:1}),o(k,{type:"primary",plain:"",disabled:h.value.length===0,onClick:l[1]||(l[1]=b=>j(null))},{default:n(()=>[B(p(a.$t("commons.button.delete")),1)]),_:1},8,["disabled"])]),default:n(()=>[o($,{type:"selection",fix:""}),o($,{label:a.$t("commons.table.name"),prop:"fileName","show-overflow-tooltip":""},null,8,["label"]),o($,{label:a.$t("database.source"),prop:"backupType"},{default:n(({row:b})=>[b.source?(v(),A("span",Ne,p(a.$t("setting."+b.source)),1)):J("",!0)]),_:1},8,["label"]),o($,{prop:"createdAt",label:a.$t("commons.table.date"),formatter:te(ve),"show-overflow-tooltip":""},null,8,["label","formatter"]),o(M,{buttons:y,label:a.$t("commons.table.operate"),fix:""},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])),[[V,i.value]])]),_:1},8,["modelValue"])])}}}),Ue={class:"el-upload__text"},Be={key:1,class:"el-upload__tip"},Ee={class:"input-help"},Re={class:"input-help"},Ve={key:2,class:"el-upload__tip"},Pe={class:"input-help"},Fe={class:"input-help"},xe=x({__name:"index",setup(ie,{expose:G}){const h=s(),i=s(),T=s(0),_=s([]),r=s(),S=s(),f=s(),d=ee({currentPage:1,pageSize:10,total:0}),E=s(!1),u=s(),m=s(),z=s(),K=async e=>{u.value=e.type,m.value=e.name,z.value=e.detailName;const t=await ke();u.value==="mysql"&&(f.value=m.value+" [ "+z.value+" ]"),(u.value==="website"||u.value==="app")&&(f.value=m.value),z.value?r.value=`${t.data}/uploads/${u.value}/${m.value}/${z.value}/`:r.value=`${t.data}/uploads/${u.value}/${m.value}/`,E.value=!0,R()},R=async()=>{let e={page:d.currentPage,pageSize:d.pageSize,path:r.value};const t=await Ce(e);S.value=t.data.items||[],d.total=t.data.total},j=async e=>{let t={type:u.value,name:m.value,detailName:z.value,file:r.value+e.name};h.value=!0,await $e(t).then(()=>{h.value=!1,Z(c.global.t("commons.msg.operationSuccess"))}).catch(()=>{h.value=!1})},y=s([]),a=s(),l=e=>u.value==="app"||u.value==="website"?e.name.endsWith(".tar.gz")?!0:(L(c.global.t("commons.msg.unSupportType")),!1):!e.name.endsWith(".sql")&&!e.name.endsWith(".tar.gz")&&!e.name.endsWith(".sql.gz")?(L(c.global.t("commons.msg.unSupportType")),!1):!0,k=(e,t)=>{y.value=t},$=()=>{y.value=[],a.value.clearFiles(),E.value=!1},M=async()=>{if(y.value.length!==1)return;const e=y.value[0];if(!e.raw.name){L(c.global.t("commons.msg.fileNameErr"));return}if(!/^[a-zA-Z0-9\u4e00-\u9fa5]{1}[a-z:A-Z0-9_.\u4e00-\u9fa5-]{0,256}$/.test(e.raw.name)){L(c.global.t("commons.msg.fileNameErr"));return}if(!(await Se(r.value+e.raw.name)).data){L(c.global.t("commons.msg.fileExist"));return}!l(e.raw)||w(e)},w=async e=>{var H;i.value=!0;const t=1024*1024,D=e.size,N=Math.ceil(D/t);let q=0;for(let U=0;U<N;U++){const I=U*t,P=Math.min(I+t,D),X=e.raw.slice(I,P),C=new FormData;C.append("filename",e.name),C.append("path",r.value),C.append("chunk",X),C.append("chunkIndex",U.toString()),C.append("chunkCount",N.toString());try{await ze(C,{onUploadProgress:O=>{const g=Math.round((q+O.loaded/O.total)*100/N);T.value=g}}),q++}catch{i.value=!1;break}q==N&&(i.value=!1,(H=a.value)==null||H.clearFiles(),y.value=[],Z(c.global.t("file.uploadSuccess")),R())}},V=async e=>{let t=[];e?t.push(r.value+e.name):_.value.forEach(D=>{t.push(r.value+D.name)}),await ce(De,{paths:t,isDir:!1},"commons.msg.delete"),R()},b=[{label:c.global.t("commons.button.recover"),click:e=>{j(e)}},{label:c.global.t("commons.button.delete"),click:e=>{V(e)}}];return G({acceptParams:K}),(e,t)=>{const D=Y("upload-filled"),N=re,q=pe,H=de,U=le,I=me,P=oe,X=Y("fu-table-operations"),C=se,O=ne;return v(),A("div",null,[o(C,{modelValue:E.value,"onUpdate:modelValue":t[2]||(t[2]=g=>E.value=g),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:n(()=>[o(Q,{header:e.$t("commons.button.import"),resource:f.value,back:$},null,8,["header","resource"])]),default:n(()=>[ae((v(),A("div",null,[o(H,{ref_key:"uploadRef",ref:a,drag:"","on-change":k,class:"upload-demo","auto-upload":!1},{tip:n(()=>[i.value?(v(),W(q,{key:0,"text-inside":"","stroke-width":12,percentage:T.value},null,8,["percentage"])):J("",!0),u.value==="mysql"?(v(),A("div",Be,[F("span",Ee,p(e.$t("database.supportUpType")),1),F("span",Re,p(e.$t("database.zipFormat")),1)])):(v(),A("div",Ve,[F("span",Pe,p(e.$t("website.supportUpType")),1),F("span",Fe,p(e.$t("website.zipFormat",[u.value+".json"])),1)]))]),default:n(()=>[o(N,{class:"el-icon--upload"},{default:n(()=>[o(D)]),_:1}),F("div",Ue,[B(p(e.$t("database.dropHelper"))+" ",1),F("em",null,p(e.$t("database.clickHelper")),1)])]),_:1},512),y.value.length===1?(v(),W(U,{key:0,disabled:i.value,icon:"Upload",onClick:M},{default:n(()=>[B(p(e.$t("commons.button.upload")),1)]),_:1},8,["disabled"])):J("",!0),o(I),o(ue,{"pagination-config":d,onSearch:R,selects:_.value,"onUpdate:selects":t[1]||(t[1]=g=>_.value=g),data:S.value},{toolbar:n(()=>[o(U,{style:{"margin-left":"10px"},plain:"",disabled:_.value.length===0,onClick:t[0]||(t[0]=g=>V(null))},{default:n(()=>[B(p(e.$t("commons.button.delete")),1)]),_:1},8,["disabled"])]),default:n(()=>[o(P,{type:"selection",fix:""}),o(P,{label:e.$t("commons.table.name"),"show-overflow-tooltip":"",prop:"name"},null,8,["label"]),o(P,{label:e.$t("file.size"),prop:"size"},{default:n(({row:g})=>[B(p(te(fe)(g.size)),1)]),_:1},8,["label"]),o(P,{label:e.$t("commons.table.createdAt"),"min-width":"80",fix:""},{default:n(({row:g})=>[B(p(g.createdAt),1)]),_:1},8,["label"]),o(X,{width:"300px",buttons:b,ellipsis:10,label:e.$t("commons.table.operate"),fix:""},null,8,["label"])]),_:1},8,["pagination-config","selects","data"])])),[[O,h.value]])]),_:1},8,["modelValue"])])}}});export{Qe as _,xe as a};
