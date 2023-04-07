import{h as e}from"./index-e09fb15b.js";const o=s=>e.post("/websites/search",s),r=()=>e.get("/websites/list"),a=s=>e.post("/websites",s),i=s=>e.post("/websites/operate",s),c=s=>e.post("/websites/log",s),p=s=>e.post("/websites/update",s),u=s=>e.get(`/websites/${s}`),b=()=>e.get("/websites/options"),w=(s,t)=>e.get(`/websites/${s}/config/${t}`),g=s=>e.post("/websites/del",s),d=s=>e.get(`/websites/domains/${s}`),l=s=>e.post("/websites/domains/del/",s),f=s=>e.post("/websites/domains",s),S=s=>e.post("/websites/config",s),h=s=>e.post("/websites/config/update",s),C=s=>e.post("/websites/dns/search",s),m=s=>e.post("/websites/dns",s),D=s=>e.post("/websites/dns/update",s),L=s=>e.post("/websites/dns/del",s),W=s=>e.post("/websites/acme/search",s),A=s=>e.post("/websites/acme",s),G=s=>e.post("/websites/acme/del",s),U=s=>e.post("/websites/ssl/search",s),P=s=>e.post("/websites/ssl/search",s),$=s=>e.post("/websites/ssl",s),x=s=>e.post("/websites/ssl/del",s),v=s=>e.get(`/websites/ssl/${s}`),H=s=>e.post("/websites/ssl/renew",s),O=s=>e.post("/websites/ssl/update",s),T=s=>e.post("/websites/ssl/resolve",s),k=s=>e.get(`/websites/${s}/https`),N=s=>e.post(`/websites/${s.websiteId}/https`,s),R=s=>e.post("/websites/check",s),E=s=>e.post("/websites/waf/config",s),F=s=>e.post("/websites/waf/update",s),j=s=>e.post("/websites/nginx/update",s),y=s=>e.post("/websites/default/server",s),z=s=>e.get(`/websites/php/config/${s}`),B=s=>e.post("/websites/php/config/",s);export{v as A,U as B,y as C,g as D,O as E,x as F,b as G,r as L,i as O,R as P,H as R,o as S,p as U,a,f as b,l as c,d,u as e,h as f,S as g,k as h,N as i,P as j,E as k,F as l,w as m,j as n,c as o,z as p,B as q,D as r,m as s,L as t,C as u,A as v,G as w,W as x,$ as y,T as z};
