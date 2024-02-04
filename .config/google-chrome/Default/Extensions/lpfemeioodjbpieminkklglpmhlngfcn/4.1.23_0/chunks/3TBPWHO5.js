import{a as ot}from"./TULLDRM2.js";import{l as M,m as tt,n as et,o as rt}from"./RPY5PI2P.js";import{a as N}from"./USLLVG5P.js";import{b as y}from"./FVT6UZZV.js";import{b as $}from"./FURDXDDQ.js";import{a as z}from"./UEN7EF5P.js";import{$ as O,C as V,E as U,M as Y,W as H,ba as k,e as J,l as Q,m as h}from"./W7JCQNRZ.js";import{K as G,L,na as K,va as X,w as l,ya as Z,za as i}from"./NVVQBQGC.js";import"./6SFGN2RQ.js";import"./BDDH5KT2.js";import{a as W}from"./SZ3C6HJE.js";import"./RBW4HNBE.js";import"./MM6H3LLZ.js";import"./GDFJJHFX.js";import"./42TZCCKB.js";import"./GVJKCNTM.js";import{c as D,f as s}from"./UTGLRY7A.js";var at=D(q=>{"use strict";var wt=L();Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var kt=wt(z()),yt=l(),qt=(0,kt.default)((0,yt.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");q.default=qt});var it=D(F=>{"use strict";var Ft=L();Object.defineProperty(F,"__esModule",{value:!0});F.default=void 0;var Rt=Ft(z()),nt=l(),It=(0,Rt.default)([(0,nt.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,nt.jsx)("path",{d:"M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},"1")],"ArticleOutlined");F.default=It});var lt=D(R=>{"use strict";var Et=L();Object.defineProperty(R,"__esModule",{value:!0});R.default=void 0;var Bt=Et(z()),Dt=l(),Lt=(0,Bt.default)((0,Dt.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");R.default=Lt});var pt=s(at()),S=s(W());var st=s(it()),p=s(l()),Tt=({promptList:r,currentPrompt:v,onPromptSelect:g})=>(0,p.jsx)(J,{variant:"outlined",sx:{bgcolor:"transparent",height:"100%"},children:(0,p.jsx)(i,{children:r.map(n=>n.uuid==="default"?null:(0,p.jsxs)(X,{sx:{px:2,py:1.5},selected:v?.uuid===n.uuid,onClick:()=>{g(n)},children:[(0,p.jsx)(Y,{sx:{minWidth:0,mr:1},children:(0,p.jsx)(st.default,{})}),(0,p.jsx)(Z,{primary:(0,p.jsx)(K,{variant:"body1",children:n.name})})]},n.uuid))})}),ut=Tt;var a=s(W());var ct=s(lt()),e=s(l()),Vt=G(r=>(0,e.jsx)(h,{...r}))(({color:r})=>r==="error"?{color:"#fff",backgroundColor:"#f44336"}:r==="warning"?{color:"#000",backgroundColor:"#FBBD23","&:hover":{backgroundColor:"#FBBD23"}}:{color:"#000",backgroundColor:"#37D39A","&:hover":{backgroundColor:"#37D39A"}}),Ht=({prompt:r,handlePromptSave:v,handlePromptDelete:g})=>{let{t:n}=y(["settings","common"]),f=(0,a.useMemo)(()=>[{text:"{web_results}",value:"{web_results}",tooltip:"feature__web_access__variable__web_result__tooltip",isRequired:!1},{text:"{query}",value:"{query}",tooltip:"feature__web_access__variable__query__tooltip",isRequired:!0},{text:"{current_date}",value:"{current_date}",tooltip:"feature__web_access__variable__current_date__tooltip",isRequired:!1}],[]),u=a.default.useRef(null),[C,P]=(0,a.useState)(""),[d,_]=(0,a.useState)(""),[I,b]=(0,a.useState)(!1),[o,ft]=(0,a.useState)(!1),[x,T]=(0,a.useState)(r),[_t,E]=(0,a.useState)(!1),w=(0,a.useMemo)(()=>r.uuid==="default",[r]),j=t=>{P(""),_(""),T(m=>({...m,...t}))},vt=t=>{if(u.current){let m=u.current.selectionStart,bt=u.current.selectionEnd,B=u.current.value,St=B.substring(0,m)+t+B.substring(bt,B.length);u.current.setSelectionRange(m+t.length,m+t.length),u.current.focus(),P(""),_(""),t==="{query}"&&b(!1),T(Ct=>({...Ct,text:St}))}},Pt=t=>{xt(t)&&v(t)},xt=t=>t.name?t.text?t.text.includes("{query}")?!0:(_("Prompt template must include {query}"),b(!0),!1):(_("Prompt template is required"),!1):(P("Name is required"),!1),ht=()=>{g(x),E(!1)},gt=t=>{ft(!t.includes("{query}"))};return(0,a.useEffect)(()=>{P(""),_(""),T(r)},[r]),(0,a.useEffect)(()=>{gt(x.text)},[x]),(0,e.jsxs)(i,{spacing:1,children:[(0,e.jsxs)(i,{direction:"row",spacing:1,children:[(0,e.jsx)(V,{size:"small",error:!!C,sx:{flex:1},children:(0,e.jsx)(O,{error:!!C,size:"small",disabled:w,id:"prompt-name",variant:"outlined",value:x.name,placeholder:"Prompt name",onChange:t=>{let m=t.target.value;j({name:m})},sx:{fontSize:16}})}),!w&&(0,e.jsx)(H,{title:n("common:delete"),children:(0,e.jsx)(h,{color:"error",variant:"outlined",sx:{px:1.5,py:1,minWidth:0},onClick:()=>{E(!0)},children:(0,e.jsx)(ct.default,{})})})]}),(0,e.jsxs)(V,{error:!!d,children:[(0,e.jsx)(O,{error:!!d,disabled:w,id:"prompt-text",variant:"outlined",multiline:!0,minRows:20,maxRows:20,placeholder:"Prompt template",value:x.text,onChange:t=>{let m=t.target.value;j({text:m})},inputProps:{ref:u}}),d&&(0,e.jsx)(U,{sx:{ml:0},children:d})]}),!w&&(0,e.jsxs)(i,{direction:{xs:"column",sm:"row"},spacing:1,flexWrap:"wrap",children:[(0,e.jsx)(i,{direction:"row",spacing:1,justifyContent:{xs:"space-between",sm:"flex-start"},children:f.map(t=>(0,e.jsx)(H,{title:n(t.tooltip),children:(0,e.jsx)("div",{children:(0,e.jsx)(Vt,{color:t.isRequired?I?"error":o?"warning":"primary":"primary",variant:"contained",onClick:()=>{vt(t.value)},children:t.text})})},t.value))}),(0,e.jsx)(Q,{flexGrow:1,sx:{display:{xs:"none",sm:"block"}}}),(0,e.jsx)(i,{direction:"row",spacing:1,children:(0,e.jsx)(h,{variant:"contained",onClick:()=>{Pt(x)},sx:{flex:{xs:1,sm:0}},children:n("common:save")})})]}),(0,e.jsx)(rt,{open:_t,onConfirm:ht,onClose:()=>{E(!1)},confirmButtonText:n("settings:feature__web_access__delete_prompt_confirm_button_text"),confirmText:n("settings:feature__web_access__delete_prompt_confirm")})]})},mt=Ht;var c=s(l()),Ot=()=>{let{t:r}=y("settings"),{enqueueSnackbar:v}=$(),[g,n]=(0,S.useState)([]),[f,u]=(0,S.useState)(),C=async()=>{let o=await M();n(o),f?.uuid==="default"&&u(o[0])},P=o=>{u(o)},d=()=>{let o={uuid:N(),name:"",text:""};u(o)},_=async o=>{await tt(o),await b(),v(r("feature__web_access__save_prompt_feedback"),{variant:"success",autoHideDuration:1e3})},I=async o=>{o.uuid&&(await et(o),await b(),d(),v(r("feature__web_access__delete_prompt_feedback"),{variant:"success",autoHideDuration:1e3}))},b=async()=>{M().then(o=>{n(o)})};return(0,S.useLayoutEffect)(()=>{C(),f||d()},[]),(0,c.jsx)(ot,{title:r("feature__web_access__prompt_editor__title"),id:"prompt-editor",children:(0,c.jsxs)(i,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,c.jsxs)(i,{width:{xs:"100%",sm:"30%"},children:[(0,c.jsx)(h,{variant:"contained",startIcon:(0,c.jsx)(pt.default,{}),sx:{height:48,fontWeight:600,mb:1},onClick:d,children:r("feature__web_access__new_prompt")}),(0,c.jsx)(ut,{promptList:g,currentPrompt:f,onPromptSelect:P})]}),(0,c.jsx)(i,{width:{xs:"100%",sm:"70%"},children:f&&(0,c.jsx)(mt,{prompt:f,handlePromptSave:_,handlePromptDelete:I})})]})})},dt=Ot;var A=s(l()),zt=()=>(0,A.jsx)(i,{children:(0,A.jsx)(dt,{})}),de=zt;export{de as default};
