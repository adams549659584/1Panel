import{m}from"./index-59b93063.js";import"./index-9eeac04e.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css                     *//* empty css               *//* empty css               */import"./index-d5a7152b.js";/* empty css                *//* empty css              */import"./tooltip-b30db216.js";/* empty css             *//* empty css             */import"./files-d9eb6d1f.js";import"./index-5ffc91ba.js";/* empty css            *//* empty css                    *//* empty css                */import"./util-cbaccc93.js";import"./use-delete-data-8b6821a4.js";import"./layout-content-27c09564.js";/* empty css                    *//* empty css             */import"./index-8d9ad139.js";import"./index-bb4c3e65.js";/* empty css             *//* empty css                    *//* empty css              */import"./form-item-d76e7d20.js";import"./form-rules-028b05ac.js";/* empty css               *//* empty css                 *//* empty css               */import"./editorWorker-dda94e3c.js";import"./index-aae68be6.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,a=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of l(t))!d.call(e,o)&&o!==i&&p(e,o,{get:()=>t[o],enumerable:!(n=c(t,o))||n.enumerable});return e},s=(e,t,i)=>(a(e,t,"default"),i&&a(i,t,"default")),r={};s(r,m);var X={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:r.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:r.languages.IndentAction.Indent}}]},Y={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{X as conf,Y as language};
