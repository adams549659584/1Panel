var M=Object.defineProperty;var K=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _=(e,t,r)=>(K(e,typeof t!="symbol"?t+"":t,r),r);import{t as R,m as E}from"./index-59b93063.js";import"./index-9eeac04e.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css                     *//* empty css               *//* empty css               */import"./index-d5a7152b.js";/* empty css                *//* empty css              */import"./tooltip-b30db216.js";/* empty css             *//* empty css             */import"./files-d9eb6d1f.js";import"./index-5ffc91ba.js";/* empty css            *//* empty css                    *//* empty css                */import"./util-cbaccc93.js";import"./use-delete-data-8b6821a4.js";import"./layout-content-27c09564.js";/* empty css                    *//* empty css             */import"./index-8d9ad139.js";import"./index-bb4c3e65.js";/* empty css             *//* empty css                    *//* empty css              */import"./form-item-d76e7d20.js";import"./form-rules-028b05ac.js";/* empty css               *//* empty css                 *//* empty css               */import"./editorWorker-dda94e3c.js";import"./index-aae68be6.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var P=Object.defineProperty,H=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,W=Object.prototype.hasOwnProperty,j=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of V(t))!W.call(e,o)&&o!==r&&P(e,o,{get:()=>t[o],enumerable:!(s=H(t,o))||s.enumerable});return e},B=(e,t,r)=>(T(e,t,"default"),r&&T(r,t,"default")),m=(e,t,r)=>(j(e,typeof t!="symbol"?t+"":t,r),r),i={};B(i,E);var U=class{constructor(e,t){_(this,"_configChangeListener");_(this,"_updateExtraLibsToken");_(this,"_extraLibsChangeListener");_(this,"_worker");_(this,"_client");this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(i.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},a={};a["lib.d.ts"]=!0;a["lib.dom.d.ts"]=!0;a["lib.dom.iterable.d.ts"]=!0;a["lib.es2015.collection.d.ts"]=!0;a["lib.es2015.core.d.ts"]=!0;a["lib.es2015.d.ts"]=!0;a["lib.es2015.generator.d.ts"]=!0;a["lib.es2015.iterable.d.ts"]=!0;a["lib.es2015.promise.d.ts"]=!0;a["lib.es2015.proxy.d.ts"]=!0;a["lib.es2015.reflect.d.ts"]=!0;a["lib.es2015.symbol.d.ts"]=!0;a["lib.es2015.symbol.wellknown.d.ts"]=!0;a["lib.es2016.array.include.d.ts"]=!0;a["lib.es2016.d.ts"]=!0;a["lib.es2016.full.d.ts"]=!0;a["lib.es2017.d.ts"]=!0;a["lib.es2017.full.d.ts"]=!0;a["lib.es2017.intl.d.ts"]=!0;a["lib.es2017.object.d.ts"]=!0;a["lib.es2017.sharedmemory.d.ts"]=!0;a["lib.es2017.string.d.ts"]=!0;a["lib.es2017.typedarrays.d.ts"]=!0;a["lib.es2018.asyncgenerator.d.ts"]=!0;a["lib.es2018.asynciterable.d.ts"]=!0;a["lib.es2018.d.ts"]=!0;a["lib.es2018.full.d.ts"]=!0;a["lib.es2018.intl.d.ts"]=!0;a["lib.es2018.promise.d.ts"]=!0;a["lib.es2018.regexp.d.ts"]=!0;a["lib.es2019.array.d.ts"]=!0;a["lib.es2019.d.ts"]=!0;a["lib.es2019.full.d.ts"]=!0;a["lib.es2019.object.d.ts"]=!0;a["lib.es2019.string.d.ts"]=!0;a["lib.es2019.symbol.d.ts"]=!0;a["lib.es2020.bigint.d.ts"]=!0;a["lib.es2020.d.ts"]=!0;a["lib.es2020.full.d.ts"]=!0;a["lib.es2020.intl.d.ts"]=!0;a["lib.es2020.promise.d.ts"]=!0;a["lib.es2020.sharedmemory.d.ts"]=!0;a["lib.es2020.string.d.ts"]=!0;a["lib.es2020.symbol.wellknown.d.ts"]=!0;a["lib.es2021.d.ts"]=!0;a["lib.es2021.full.d.ts"]=!0;a["lib.es2021.intl.d.ts"]=!0;a["lib.es2021.promise.d.ts"]=!0;a["lib.es2021.string.d.ts"]=!0;a["lib.es2021.weakref.d.ts"]=!0;a["lib.es5.d.ts"]=!0;a["lib.es6.d.ts"]=!0;a["lib.esnext.d.ts"]=!0;a["lib.esnext.full.d.ts"]=!0;a["lib.esnext.intl.d.ts"]=!0;a["lib.esnext.promise.d.ts"]=!0;a["lib.esnext.string.d.ts"]=!0;a["lib.esnext.weakref.d.ts"]=!0;a["lib.scripthost.d.ts"]=!0;a["lib.webworker.d.ts"]=!0;a["lib.webworker.importscripts.d.ts"]=!0;a["lib.webworker.iterable.d.ts"]=!0;function F(e,t,r=0){if(typeof e=="string")return e;if(e===void 0)return"";let s="";if(r){s+=t;for(let o=0;o<r;o++)s+="  "}if(s+=e.messageText,r++,e.next)for(const o of e.next)s+=F(o,t,r);return s}function k(e){return e?e.map(t=>t.text).join(""):""}var w=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let r=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:o,column:u}=r,{lineNumber:c,column:g}=s;return{startLineNumber:o,startColumn:u,endLineNumber:c,endColumn:g}}},$=class{constructor(e){_(this,"_libFiles");_(this,"_hasFetchedLibFiles");_(this,"_fetchLibFilesPromise");this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!a[e.path.slice(1)]:!1}getOrCreateModel(e){const t=i.Uri.parse(e),r=i.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=R.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},z=class extends w{constructor(t,r,s,o){super(o);_(this,"_disposables",[]);_(this,"_listener",Object.create(null));this._libFiles=t,this._defaults=r,this._selector=s;const u=n=>{if(n.getLanguageId()!==s)return;const d=()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y?n.isAttachedToEditor()&&this._doValidate(n):this._doValidate(n)};let p;const f=n.onDidChangeContent(()=>{clearTimeout(p),p=window.setTimeout(d,500)}),b=n.onDidChangeAttached(()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y&&(n.isAttachedToEditor()?d():i.editor.setModelMarkers(n,this._selector,[]))});this._listener[n.uri.toString()]={dispose(){f.dispose(),b.dispose(),clearTimeout(p)}},d()},c=n=>{i.editor.setModelMarkers(n,this._selector,[]);const d=n.uri.toString();this._listener[d]&&(this._listener[d].dispose(),delete this._listener[d])};this._disposables.push(i.editor.onDidCreateModel(n=>u(n))),this._disposables.push(i.editor.onWillDisposeModel(c)),this._disposables.push(i.editor.onDidChangeModelLanguage(n=>{c(n.model),u(n.model)})),this._disposables.push({dispose(){for(const n of i.editor.getModels())c(n)}});const g=()=>{for(const n of i.editor.getModels())c(n),u(n)};this._disposables.push(this._defaults.onDidChange(g)),this._disposables.push(this._defaults.onDidExtraLibsChange(g)),i.editor.getModels().forEach(n=>u(n))}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables=[]}async _doValidate(t){const r=await this._worker(t.uri);if(t.isDisposed())return;const s=[],{noSyntaxValidation:o,noSemanticValidation:u,noSuggestionDiagnostics:c}=this._defaults.getDiagnosticsOptions();o||s.push(r.getSyntacticDiagnostics(t.uri.toString())),u||s.push(r.getSemanticDiagnostics(t.uri.toString())),c||s.push(r.getSuggestionDiagnostics(t.uri.toString()));const g=await Promise.all(s);if(!g||t.isDisposed())return;const n=g.reduce((p,f)=>f.concat(p),[]).filter(p=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(p.code)===-1),d=n.map(p=>p.relatedInformation||[]).reduce((p,f)=>f.concat(p),[]).map(p=>p.file?i.Uri.parse(p.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(d),!t.isDisposed()&&i.editor.setModelMarkers(t,this._selector,n.map(p=>this._convertDiagnostics(t,p)))}_convertDiagnostics(t,r){const s=r.start||0,o=r.length||1,{lineNumber:u,column:c}=t.getPositionAt(s),{lineNumber:g,column:n}=t.getPositionAt(s+o),d=[];return r.reportsUnnecessary&&d.push(i.MarkerTag.Unnecessary),r.reportsDeprecated&&d.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(r.category),startLineNumber:u,startColumn:c,endLineNumber:g,endColumn:n,message:F(r.messageText,`
`),code:r.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(t,r.relatedInformation)}}_convertRelatedInformation(t,r){if(!r)return[];const s=[];return r.forEach(o=>{let u=t;if(o.file&&(u=this._libFiles.getOrCreateModel(o.file.fileName)),!u)return;const c=o.start||0,g=o.length||1,{lineNumber:n,column:d}=u.getPositionAt(c),{lineNumber:p,column:f}=u.getPositionAt(c+g);s.push({resource:u.uri,startLineNumber:n,startColumn:d,endLineNumber:p,endColumn:f,message:F(o.messageText,`
`)})}),s}_tsDiagnosticCategoryToMarkerSeverity(t){switch(t){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},D=class extends w{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,r,s){const o=e.getWordUntilPosition(t),u=new i.Range(t.lineNumber,o.startColumn,t.lineNumber,o.endColumn),c=e.uri,g=e.getOffsetAt(t),n=await this._worker(c);if(e.isDisposed())return;const d=await n.getCompletionsAtPosition(c.toString(),g);return!d||e.isDisposed()?void 0:{suggestions:d.entries.map(f=>{var x;let b=u;if(f.replacementSpan){const v=e.getPositionAt(f.replacementSpan.start),C=e.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);b=new i.Range(v.lineNumber,v.column,C.lineNumber,C.column)}const y=[];return((x=f.kindModifiers)==null?void 0:x.indexOf("deprecated"))!==-1&&y.push(i.languages.CompletionItemTag.Deprecated),{uri:c,position:t,offset:g,range:b,label:f.name,insertText:f.name,sortText:f.sortText,kind:D.convertKind(f.kind),tags:y}})}}async resolveCompletionItem(e,t){const r=e,s=r.uri,o=r.position,u=r.offset,g=await(await this._worker(s)).getCompletionEntryDetails(s.toString(),u,r.label);return g?{uri:s,position:o,label:g.name,kind:D.convertKind(g.kind),detail:k(g.displayParts),documentation:{value:D.createDocumentationString(g)}}:r}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return i.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return i.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return i.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return i.languages.CompletionItemKind.Function;case l.enum:return i.languages.CompletionItemKind.Enum;case l.module:return i.languages.CompletionItemKind.Module;case l.class:return i.languages.CompletionItemKind.Class;case l.interface:return i.languages.CompletionItemKind.Interface;case l.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=k(e.documentation);if(e.tags)for(const r of e.tags)t+=`

${O(r)}`;return t}};function O(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[r,...s]=e.text;t+=`\`${r.text}\``,s.length>0&&(t+=` \u2014 ${s.map(o=>o.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(r=>r.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var I=class extends w{constructor(){super(...arguments);_(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,r,s,o){const u=t.uri,c=t.getOffsetAt(r),g=await this._worker(u);if(t.isDisposed())return;const n=await g.getSignatureHelpItems(u.toString(),c,{triggerReason:I._toSignatureHelpTriggerReason(o)});if(!n||t.isDisposed())return;const d={activeSignature:n.selectedItemIndex,activeParameter:n.argumentIndex,signatures:[]};return n.items.forEach(p=>{const f={label:"",parameters:[]};f.documentation={value:k(p.documentation)},f.label+=k(p.prefixDisplayParts),p.parameters.forEach((b,y,x)=>{const v=k(b.displayParts),C={label:v,documentation:{value:k(b.documentation)}};f.label+=v,f.parameters.push(C),y<x.length-1&&(f.label+=k(p.separatorDisplayParts))}),f.label+=k(p.suffixDisplayParts),d.signatures.push(f)}),{value:d,dispose(){}}}},G=class extends w{async provideHover(e,t,r){const s=e.uri,o=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getQuickInfoAtPosition(s.toString(),o);if(!c||e.isDisposed())return;const g=k(c.documentation),n=c.tags?c.tags.map(p=>O(p)).join(`  

`):"",d=k(c.displayParts);return{range:this._textSpanToRange(e,c.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:g+(n?`

`+n:"")}]}}},J=class extends w{async provideDocumentHighlights(e,t,r){const s=e.uri,o=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getOccurrencesAtPosition(s.toString(),o);if(!(!c||e.isDisposed()))return c.map(g=>({range:this._textSpanToRange(e,g.textSpan),kind:g.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))}},Q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,r){const s=e.uri,o=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getDefinitionAtPosition(s.toString(),o);if(!c||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(c.map(n=>i.Uri.parse(n.fileName))),e.isDisposed()))return;const g=[];for(let n of c){const d=this._libFiles.getOrCreateModel(n.fileName);d&&g.push({uri:d.uri,range:this._textSpanToRange(d,n.textSpan)})}return g}},q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,r,s){const o=e.uri,u=e.getOffsetAt(t),c=await this._worker(o);if(e.isDisposed())return;const g=await c.getReferencesAtPosition(o.toString(),u);if(!g||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(g.map(d=>i.Uri.parse(d.fileName))),e.isDisposed()))return;const n=[];for(let d of g){const p=this._libFiles.getOrCreateModel(d.fileName);p&&n.push({uri:p.uri,range:this._textSpanToRange(p,d.textSpan)})}return n}},X=class extends w{async provideDocumentSymbols(e,t){const r=e.uri,s=await this._worker(r);if(e.isDisposed())return;const o=await s.getNavigationBarItems(r.toString());if(!o||e.isDisposed())return;const u=(g,n,d)=>{let p={name:n.text,detail:"",kind:h[n.kind]||i.languages.SymbolKind.Variable,range:this._textSpanToRange(e,n.spans[0]),selectionRange:this._textSpanToRange(e,n.spans[0]),tags:[]};if(d&&(p.containerName=d),n.childItems&&n.childItems.length>0)for(let f of n.childItems)u(g,f,p.name);g.push(p)};let c=[];return o.forEach(g=>u(c,g)),c}},l=class{};m(l,"unknown","");m(l,"keyword","keyword");m(l,"script","script");m(l,"module","module");m(l,"class","class");m(l,"interface","interface");m(l,"type","type");m(l,"enum","enum");m(l,"variable","var");m(l,"localVariable","local var");m(l,"function","function");m(l,"localFunction","local function");m(l,"memberFunction","method");m(l,"memberGetAccessor","getter");m(l,"memberSetAccessor","setter");m(l,"memberVariable","property");m(l,"constructorImplementation","constructor");m(l,"callSignature","call");m(l,"indexSignature","index");m(l,"constructSignature","construct");m(l,"parameter","parameter");m(l,"typeParameter","type parameter");m(l,"primitiveType","primitive type");m(l,"label","label");m(l,"alias","alias");m(l,"const","const");m(l,"let","let");m(l,"warning","warning");var h=Object.create(null);h[l.module]=i.languages.SymbolKind.Module;h[l.class]=i.languages.SymbolKind.Class;h[l.enum]=i.languages.SymbolKind.Enum;h[l.interface]=i.languages.SymbolKind.Interface;h[l.memberFunction]=i.languages.SymbolKind.Method;h[l.memberVariable]=i.languages.SymbolKind.Property;h[l.memberGetAccessor]=i.languages.SymbolKind.Property;h[l.memberSetAccessor]=i.languages.SymbolKind.Property;h[l.variable]=i.languages.SymbolKind.Variable;h[l.const]=i.languages.SymbolKind.Variable;h[l.localVariable]=i.languages.SymbolKind.Variable;h[l.variable]=i.languages.SymbolKind.Variable;h[l.function]=i.languages.SymbolKind.Function;h[l.localFunction]=i.languages.SymbolKind.Function;var S=class extends w{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},Y=class extends S{async provideDocumentRangeFormattingEdits(e,t,r,s){const o=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(o);if(e.isDisposed())return;const n=await g.getFormattingEditsForRange(o.toString(),u,c,S._convertOptions(r));if(!(!n||e.isDisposed()))return n.map(d=>this._convertTextChanges(e,d))}},Z=class extends S{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,r,s,o){const u=e.uri,c=e.getOffsetAt(t),g=await this._worker(u);if(e.isDisposed())return;const n=await g.getFormattingEditsAfterKeystroke(u.toString(),c,r,S._convertOptions(s));if(!(!n||e.isDisposed()))return n.map(d=>this._convertTextChanges(e,d))}},ee=class extends S{async provideCodeActions(e,t,r,s){const o=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=S._convertOptions(e.getOptions()),n=r.markers.filter(b=>b.code).map(b=>b.code).map(Number),d=await this._worker(o);if(e.isDisposed())return;const p=await d.getCodeFixesAtPosition(o.toString(),u,c,n,g);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(b=>b.changes.filter(y=>y.isNewFile).length===0).map(b=>this._tsCodeFixActionToMonacoCodeAction(e,r,b)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,r){const s=[];for(const u of r.changes)for(const c of u.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,c.span),text:c.newText}});return{title:r.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},te=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,r,s){const o=e.uri,u=o.toString(),c=e.getOffsetAt(t),g=await this._worker(o);if(e.isDisposed())return;const n=await g.getRenameInfo(u,c,{allowRenameOfImportPath:!1});if(n.canRename===!1)return{edits:[],rejectReason:n.localizedErrorMessage};if(n.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const d=await g.findRenameLocations(u,c,!1,!1,!1);if(!d||e.isDisposed())return;const p=[];for(const f of d){const b=this._libFiles.getOrCreateModel(f.fileName);if(b)p.push({resource:b.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(b,f.textSpan),text:r}});else throw new Error(`Unknown file ${f.fileName}.`)}return{edits:p}}},re=class extends w{async provideInlayHints(e,t,r){const s=e.uri,o=s.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(s);return e.isDisposed()?null:{hints:(await g.provideInlayHints(o,u,c)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Type}}},A,L;function je(e){L=N(e,"typescript")}function Be(e){A=N(e,"javascript")}function Ue(){return new Promise((e,t)=>{if(!A)return t("JavaScript not registered!");e(A)})}function $e(){return new Promise((e,t)=>{if(!L)return t("TypeScript not registered!");e(L)})}function N(e,t){const r=new U(t,e),s=(...u)=>r.getLanguageServiceWorker(...u),o=new $(s);return i.languages.registerCompletionItemProvider(t,new D(s)),i.languages.registerSignatureHelpProvider(t,new I(s)),i.languages.registerHoverProvider(t,new G(s)),i.languages.registerDocumentHighlightProvider(t,new J(s)),i.languages.registerDefinitionProvider(t,new Q(o,s)),i.languages.registerReferenceProvider(t,new q(o,s)),i.languages.registerDocumentSymbolProvider(t,new X(s)),i.languages.registerDocumentRangeFormattingEditProvider(t,new Y(s)),i.languages.registerOnTypeFormattingEditProvider(t,new Z(s)),i.languages.registerCodeActionProvider(t,new ee(s)),i.languages.registerRenameProvider(t,new te(o,s)),i.languages.registerInlayHintsProvider(t,new re(s)),new z(o,e,t,s),s}export{w as Adapter,ee as CodeActionAdaptor,Q as DefinitionAdapter,z as DiagnosticsAdapter,Y as FormatAdapter,S as FormatHelper,Z as FormatOnTypeAdapter,re as InlayHintsAdapter,l as Kind,$ as LibFiles,J as OccurrencesAdapter,X as OutlineAdapter,G as QuickInfoAdapter,q as ReferenceAdapter,te as RenameAdapter,I as SignatureHelpAdapter,D as SuggestAdapter,U as WorkerManager,F as flattenDiagnosticMessageText,Ue as getJavaScriptWorker,$e as getTypeScriptWorker,Be as setupJavaScript,je as setupTypeScript};
