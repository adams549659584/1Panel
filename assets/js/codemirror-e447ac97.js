import{d as v,r as l,b as h,c as V,w as r,e as n,f as b,g as k,t as y,y as w,A as g,af as x}from"./index-9eeac04e.js";import{_ as B}from"./index-bb4c3e65.js";/* empty css                *//* empty css               */import{j as C,o as N,T as D}from"./index-b02b032a.js";const $={class:"dialog-footer"},T=v({__name:"codemirror",setup(j,{expose:d}){const c=l(),i=[C(),N],u=l(),s=l(),a=l(!1),m=t=>{u.value=t.header,s.value=t.detailInfo,a.value=!0},f=()=>{a.value=!1};return d({acceptParams:m}),(t,e)=>{const p=g,_=x;return h(),V(_,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value=o),"destroy-on-close":!0,"close-on-click-modal":!1,size:"50%"},{header:r(()=>[n(B,{header:u.value,back:f},null,8,["header"])]),footer:r(()=>[b("span",$,[n(p,{onClick:e[1]||(e[1]=o=>a.value=!1)},{default:r(()=>[k(y(t.$t("commons.button.cancel")),1)]),_:1})])]),default:r(()=>[n(w(D),{ref_key:"mymirror",ref:c,autofocus:!0,placeholder:"None data","indent-with-tab":!0,tabSize:4,style:{width:"100%",height:"calc(100vh - 112px)"},lineWrapping:!0,matchBrackets:!0,theme:"cobalt",styleActiveLine:!0,extensions:i,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),disabled:!0},null,8,["modelValue"])]),_:1},8,["modelValue"])}}});export{T as _};
