import{m as p}from"./index-59b93063.js";import"./index-9eeac04e.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css                     *//* empty css               *//* empty css               */import"./index-d5a7152b.js";/* empty css                *//* empty css              */import"./tooltip-b30db216.js";/* empty css             *//* empty css             */import"./files-d9eb6d1f.js";import"./index-5ffc91ba.js";/* empty css            *//* empty css                    *//* empty css                */import"./util-cbaccc93.js";import"./use-delete-data-8b6821a4.js";import"./layout-content-27c09564.js";/* empty css                    *//* empty css             */import"./index-8d9ad139.js";import"./index-bb4c3e65.js";/* empty css             *//* empty css                    *//* empty css              */import"./form-item-d76e7d20.js";import"./form-rules-028b05ac.js";/* empty css               *//* empty css                 *//* empty css               */import"./editorWorker-dda94e3c.js";import"./index-aae68be6.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,n=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of c(e))!m.call(t,r)&&r!==o&&a(t,r,{get:()=>e[r],enumerable:!(i=l(e,r))||i.enumerable});return t},d=(t,e,o)=>(n(t,e,"default"),o&&n(o,e,"default")),s={};d(s,p);var W={comments:{lineComment:"#",blockComment:["'''","'''"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$"),action:{indentAction:s.languages.IndentAction.Indent}}],folding:{offSide:!0,markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},X={defaultToken:"",tokenPostfix:".python",keywords:["False","None","True","_","and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","exec","finally","for","from","global","if","import","in","is","lambda","match","nonlocal","not","or","pass","print","raise","return","try","while","with","yield","int","float","long","complex","hex","abs","all","any","apply","basestring","bin","bool","buffer","bytearray","callable","chr","classmethod","cmp","coerce","compile","complex","delattr","dict","dir","divmod","enumerate","eval","execfile","file","filter","format","frozenset","getattr","globals","hasattr","hash","help","id","input","intern","isinstance","issubclass","iter","len","locals","list","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","reversed","range","raw_input","reduce","reload","repr","reversed","round","self","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","unichr","unicode","vars","xrange","zip","__dict__","__methods__","__members__","__class__","__bases__","__name__","__mro__","__subclasses__","__init__","__import__"],brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],tokenizer:{root:[{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},[/[,:;]/,"delimiter"],[/[{}\[\]()]/,"@brackets"],[/@[a-zA-Z_]\w*/,"tag"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"keyword","@default":"identifier"}}]],whitespace:[[/\s+/,"white"],[/(^#.*$)/,"comment"],[/'''/,"string","@endDocString"],[/"""/,"string","@endDblDocString"]],endDocString:[[/[^']+/,"string"],[/\\'/,"string"],[/'''/,"string","@popall"],[/'/,"string"]],endDblDocString:[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,"string","@popall"],[/"/,"string"]],numbers:[[/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/,"number.hex"],[/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/,"number"]],strings:[[/'$/,"string.escape","@popall"],[/'/,"string.escape","@stringBody"],[/"$/,"string.escape","@popall"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/[^\\']+$/,"string","@popall"],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,"string.escape","@popall"],[/\\$/,"string"]],dblStringBody:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,"string.escape","@popall"],[/\\$/,"string"]]}};export{W as conf,X as language};
