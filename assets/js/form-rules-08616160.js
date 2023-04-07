import{j as o}from"./index-609fd921.js";const s=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.requiredInput"))):!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.ip"))):r()},i=(t,e,r)=>{if(e===""||typeof e=="undefined"||e==null)r(new Error(o.global.t("commons.rule.requiredInput")));else{const n=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,m=/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;!n.test(e)&&!m.test(e)?r(new Error(o.global.t("commons.rule.host"))):r()}},g=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.complexityPassword"))):!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.complexityPassword"))):r()},u=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.commonName"))):!/^[a-zA-Z0-9\u4e00-\u9fa5]{1}[a-zA-Z0-9_.\u4e00-\u9fa5-]{0,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.commonName"))):r()},l=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.userName"))):!/[a-zA-Z0-9_\u4e00-\u9fa5]{3,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.userName"))):r()},d=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.simpleName"))):!/^[a-zA-Z0-9]{1}[a-zA-Z0-9_]{0,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.simpleName"))):r()},f=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.dbName"))):!/^[a-zA-Z0-9\u4e00-\u9fa5]{1}[a-zA-Z0-9_.\u4e00-\u9fa5-]{0,16}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.dbName"))):r()},a=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.imageName"))):!/^[a-zA-Z0-9]{1}[a-z:A-Z0-9_/.-]{0,150}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.imageName"))):r()},p=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.volumeName"))):!/^[a-zA-Z0-9]{1}[a-z:A-Z0-9_.-]{1,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.volumeName"))):r()},c=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.linuxName",[`/\\:*?'"<>|`]))):!/^[^/\\\"'|<>?*]{1,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.linuxName",[`/\\:*?'"<>|`]))):r()},b=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.databaseName"))):!/^[a-zA-Z0-9]{1}[a-zA-Z0-9_]{0,30}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.databaseName"))):r()},w=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.appName"))):!/^(?![_-])[a-zA-Z0-9_-]{1,29}[a-zA-Z0-9]$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.appName"))):r()},N=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.domain"))):!/^([\w\u4e00-\u9fa5\-\*]{1,100}\.){1,10}([\w\u4e00-\u9fa5\-]{1,24}|[\w\u4e00-\u9fa5\-]{1,24}\.[\w\u4e00-\u9fa5\-]{1,24})$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.domain"))):r()},E=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.integer"))):!/^[1-9]\d*$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.integer"))):r()},q=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.paramName"))):!/^[a-zA-Z0-9]{1}[a-zA-Z0-9._-]{1,29}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.paramName"))):r()},A=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.paramComplexity",[".%@$!&~_-"]))):!/^[a-zA-Z0-9]{1}[a-zA-Z0-9.%@$!&~_-]{5,29}$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.paramComplexity",[".%@$!&~_-"]))):r()},$=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.paramUrlAndPort"))):!/^(https?:\/\/)?((localhost)|([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+)(:[1-9]\d{0,3}|:[1-5]\d{4}|:6[0-4]\d{3}|:65[0-4]\d{2}|:655[0-2]\d|:6553[0-5])?(\/\S*)?$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.paramUrlAndPort"))):r()},y=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.port"))):!/^([1-9](\d{0,3}))$|^([1-5]\d{4})$|^(6[0-4]\d{3})$|^(65[0-4]\d{2})$|^(655[0-2]\d)$|^(6553[0-5])$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.port"))):r()},z=(t,e,r)=>{e===""||typeof e=="undefined"||e==null?r(new Error(o.global.t("commons.rule.nginxDoc"))):!/^[A-Za-z0-9\n.]+$/.test(e)&&e!==""?r(new Error(o.global.t("commons.rule.nginxDoc"))):r()};function h(t,e){return{required:!0,trigger:"blur",min:t,max:e,type:"number",message:o.global.t("commons.rule.numberRange",[t,e])}}const x={requiredInput:{required:!0,message:o.global.t("commons.rule.requiredInput"),trigger:"blur"},requiredSelect:{required:!0,message:o.global.t("commons.rule.requiredSelect"),trigger:"change"},requiredSelectBusiness:{required:!0,min:1,max:65535,type:"number",message:o.global.t("commons.rule.requiredSelect"),trigger:"change"},simpleName:{required:!0,validator:d,trigger:"blur"},dbName:{required:!0,validator:f,trigger:"blur"},imageName:{required:!0,validator:a,trigger:"blur"},volumeName:{required:!0,validator:p,trigger:"blur"},name:{required:!0,validator:u,trigger:"blur"},userName:{required:!0,validator:l,trigger:"blur"},linuxName:{required:!0,validator:c,trigger:"blur"},databaseName:{required:!0,validator:b,trigger:"blur"},password:{validator:g,trigger:"blur"},email:{required:!0,type:"email",message:o.global.t("commons.rule.email"),trigger:"blur"},number:{required:!0,trigger:"blur",min:0,type:"number",message:o.global.t("commons.rule.number")},integerNumber:{required:!0,validator:E,trigger:"blur"},ip:{validator:s,required:!0,trigger:"blur"},host:{validator:i,required:!0,trigger:"blur"},port:{required:!0,trigger:"blur",min:1,max:65535,type:"number",message:o.global.t("commons.rule.port")},domain:{required:!0,validator:N,trigger:"blur"},paramCommon:{required:!0,validator:q,trigger:"blur"},paramComplexity:{required:!0,validator:A,trigger:"blur"},paramPort:{required:!0,trigger:"blur",validator:y},paramExtUrl:{required:!0,validator:$,trigger:"blur"},nginxDoc:{required:!0,validator:z,trigger:"blur"},appName:{required:!0,trigger:"blur",validator:w}};export{x as R,h as c};
