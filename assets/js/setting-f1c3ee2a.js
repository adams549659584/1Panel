import{h as t}from"./index-5ffc91ba.js";import{e as a}from"./util-cbaccc93.js";import{g as n}from"./base64-e52cbffd.js";const p=()=>t.post("/settings/search"),i=()=>t.get("/settings/search/available"),u=s=>t.post("/settings/update",s),d=s=>t.post("/settings/password/update",s),g=s=>t.post("/settings/port/update",s),l=s=>t.post("/settings/expired/handle",s),h=()=>t.post("/settings/time/sync",{}),k=()=>t.post("/settings/monitor/clean",{}),b=()=>t.get("/settings/mfa",{}),m=s=>t.post("/settings/mfa/bind",s),y=()=>t.get("/settings/basedir"),f=s=>t.post("/settings/backup/backup",s,4e5),B=s=>t.post("/settings/backup/recover",s,4e5),v=s=>t.post("/settings/backup/recover/byupload",s,4e5),K=s=>t.post("/settings/backup/record/download",s),R=s=>t.post("/settings/backup/record/del",s),w=s=>t.post("/settings/backup/record/search",s),F=()=>t.get("/settings/backup/search"),S=s=>t.post("/settings/backup/search/files",{type:s}),q=s=>{let e=a(s);return e.accessKey&&(e.accessKey=n.encode(e.accessKey)),e.credential&&(e.credential=n.encode(e.credential)),t.post("/settings/backup",e)},x=s=>{let e=a(s);return e.accessKey&&(e.accessKey=n.encode(e.accessKey)),e.credential&&(e.credential=n.encode(e.credential)),t.post("/settings/backup/update",e)},A=s=>t.post("/settings/backup/del",s),D=s=>{let e=a(s);return e.accessKey&&(e.accessKey=n.encode(e.accessKey)),e.credential&&(e.credential=n.encode(e.credential)),t.post("/settings/backup/buckets",e)},C=s=>t.post("/settings/snapshot",s),I=s=>t.post("/settings/snapshot/import",s),M=s=>t.post("/settings/snapshot/description/update",s),P=s=>t.post("/settings/snapshot/del",s),E=s=>t.post("/settings/snapshot/recover",s),U=s=>t.post("/settings/snapshot/rollback",s),j=s=>t.post("/settings/snapshot/search",s),z=()=>t.get("/settings/upgrade"),G=s=>t.post("/settings/upgrade/notes",{version:s}),L=s=>t.post("/settings/upgrade",{version:s});export{I as A,S as B,M as C,C as D,P as E,j as F,l as G,B as a,R as b,v as c,K as d,p as e,u as f,F as g,f as h,h as i,D as j,q as k,y as l,x as m,A as n,i as o,z as p,G as q,L as r,w as s,k as t,d as u,g as v,b as w,m as x,E as y,U as z};
