import{ap as f,j as o,$ as i}from"./index-9eeac04e.js";const b=(a,l,s,n="error")=>new Promise((c,r)=>{f.confirm(o.global.t(`${s}`),o.global.t("commons.msg.deleteTitle"),{confirmButtonText:o.global.t("commons.button.confirm"),cancelButtonText:o.global.t("commons.button.cancel"),closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1,type:n,draggable:!0,beforeClose:async(m,e,t)=>{m==="confirm"?(e.confirmButtonLoading=!0,e.cancelButtonLoading=!0,await a(l).then(u=>{if(t(),!u)return r(!1);c(!0),i(o.global.t("commons.msg.operationSuccess"))}).finally(()=>{e.confirmButtonLoading=!1,e.cancelButtonLoading=!1})):t()}}).then(()=>{}).catch(()=>{})});export{b as u};
