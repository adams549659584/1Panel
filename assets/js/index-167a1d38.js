import{d as _,r as m,o as f,X as y,b as o,c as s,w as a,g as x,t as C,y as n,e as h,O as w,a0 as L,E as k}from"./index-9eeac04e.js";/* empty css            *//* empty css             */const V=_({__name:"index",props:{status:{type:String,default:"runnning"}},setup(r){const c=r;let t=m("running");const i=e=>{switch(e){case"running":return"success";case"error":return"danger";case"stopped":return"danger";default:return""}},u=["installing","building","restarting"],l=e=>u.indexOf(e)>-1;return f(()=>{t.value=c.status.toLocaleLowerCase()}),(e,E)=>{const d=y("Loading"),p=L,g=k;return o(),s(g,{type:i(n(t)),round:"",effect:"light"},{default:a(()=>[x(C(e.$t("commons.status."+n(t)))+" ",1),l(n(t))?(o(),s(p,{key:0,class:"is-loading"},{default:a(()=>[h(d)]),_:1})):w("",!0)]),_:1},8,["type"])}}});export{V as _};
