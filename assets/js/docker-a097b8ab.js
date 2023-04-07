import{i as o}from"./util-cbaccc93.js";function a(i){let e=i.split(`\r
`);for(let t=0;t<e.length;t++)if(o(e[t])){const r=JSON.parse(e[t]);if(r.errorDetail||r.error){e[t]=r.errorDetail||r.errorDetail,e[t]=r.error||r.error;continue}if(r.stream){e[t]=r.stream;continue}r.id?e[t]=r.id+": "+r.status:e[t]=r.status,r.progress&&(e[t]=e[t]+r.progress)}return e.join(`\r
`)}export{a as f};
