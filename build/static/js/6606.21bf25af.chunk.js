"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6606],{26606:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(74165),s=t(15861),i=t(70885),o=t(72791),a=t(74569),c=t.n(a),l=t(56127),u=t(77106),d=t(78983),p=t(96048),h=t.n(p),x=t(80184),m=localStorage.getItem("token_key"),j=function(){var e,n,t,a,p,j,v,f,N,g,w,y,k,b,C,Z,_,T,A,S,F,L,I,D,H,M,z,B=(0,o.useState)([]),P=(0,i.Z)(B,2),G=P[0],R=P[1],V=(0,o.useState)(0),E=(0,i.Z)(V,2),O=E[0],K=E[1],Q=(0,o.useState)([]),Y=(0,i.Z)(Q,2),q=Y[0],J=Y[1],U=(0,o.useState)(!1),W=(0,i.Z)(U,2),X=W[0],$=W[1],ee=(0,o.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],se=(0,o.useState)(""),ie=(0,i.Z)(se,2),oe=ie[0],ae=ie[1],ce=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()({method:"Get",url:"".concat("https://api.staging.bingo.family","/api/history/transactions?page=1&limit=").concat(10),headers:{Authorization:"Bearer ".concat(m)},params:{nickName:te,from_account:oe}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();function le(){return ue.apply(this,arguments)}function ue(){return ue=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:n=e.sent,console.log(n),t=n.data.res.total,K(Math.ceil(t/10)),R(n);case 7:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}(0,o.useEffect)((function(){le()}),[10]);var de=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()({method:"Get",url:"".concat("https://api.staging.bingo.family","/api/history/transactions?page=").concat(n,"&limit=").concat(10),headers:{Authorization:"Bearer ".concat(m)}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),pe=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.selected+1,e.next=3,de(t);case 3:s=e.sent,R(s);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){function e(){return e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:n=e.sent,console.log(n),R(n);case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var he=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()({method:"Get",url:"".concat("https://api.staging.bingo.family","/api/history/transaction/").concat(n),headers:{Authorization:"Bearer ".concat(m)}});case 3:return t=e.sent,J(t),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log("err");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),xe=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(n);case 2:$(!X);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{children:[(0,x.jsxs)(d.Tk,{className:"modal_detail",visible:X,onClose:function(){return $(!1)},children:[(0,x.jsx)(d.p0,{children:(0,x.jsx)(d.fl,{children:"Modal title"})}),(0,x.jsx)(d.sD,{children:(0,x.jsx)(d.rb,{children:(0,x.jsx)(d.b7,{xs:17,children:(0,x.jsx)(d.xH,{className:"mb-4",children:(0,x.jsx)(d.sl,{children:(0,x.jsxs)(d.Sx,{children:[(0,x.jsx)(d.V,{children:(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.is,{scope:"col",children:"Prop"}),(0,x.jsx)(d.is,{scope:"col",children:"Data"})]})}),(0,x.jsxs)(d.NR,{children:[(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"Nickname"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(e=q.data)||void 0===e||null===(n=e.res)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.NickName})]}),(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"Type"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(a=q.data)||void 0===a||null===(p=a.res)||void 0===p||null===(j=p.data)||void 0===j?void 0:j.type})]}),(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"Token Amount"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(v=q.data)||void 0===v||null===(f=v.res)||void 0===f||null===(N=f.data)||void 0===N?void 0:N.tokenAmount})]}),(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"Point Amount"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(g=q.data)||void 0===g||null===(w=g.res)||void 0===w||null===(y=w.data)||void 0===y?void 0:y.pointAmount})]}),(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"From"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(k=q.data)||void 0===k||null===(b=k.res)||void 0===b||null===(C=b.data)||void 0===C?void 0:C.from})]}),(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.NN,{scope:"row",children:"To"}),(0,x.jsx)(d.NN,{scope:"row",children:null===q||void 0===q||null===(Z=q.data)||void 0===Z||null===(_=Z.res)||void 0===_||null===(T=_.data)||void 0===T?void 0:T.to})]})]})]})})})})})}),(0,x.jsx)(d.Ym,{children:(0,x.jsx)(d.u5,{color:"secondary",onClick:function(){return $(!1)},children:"Close"})})]}),(0,x.jsx)(d.rb,{children:(0,x.jsx)(d.b7,{xs:12,children:(0,x.jsxs)(d.xH,{className:"mb-4",children:[(0,x.jsx)(d.bn,{children:(0,x.jsx)(d.KB,{children:(0,x.jsxs)(d.rb,{className:"align-items-start",children:[(0,x.jsx)(d.b7,{children:(0,x.jsx)("strong",{children:"History Transaction Table"})}),(0,x.jsx)(d.b7,{children:(0,x.jsx)(d.lx,{children:(0,x.jsx)(d.jO,{type:"email",id:"exampleFormControlInput1",placeholder:"Nick name","aria-describedby":"exampleFormControlInputHelpInline",onChange:function(e){return re(e.target.value)}})})}),(0,x.jsx)(d.b7,{children:(0,x.jsx)(d.lx,{children:(0,x.jsx)(d.jO,{type:"email",id:"exampleFormControlInput1",placeholder:"From account","aria-describedby":"exampleFormControlInputHelpInline",onChange:function(e){return ae(e.target.value)}})})}),(0,x.jsx)(d.b7,{children:(0,x.jsx)(d.u5,{color:"success",variant:"outline",onClick:le,children:"Search"})})]})})}),(0,x.jsx)(d.sl,{children:null!==G&&void 0!==G&&null!==(A=G.data)&&void 0!==A&&null!==(S=A.res)&&void 0!==S&&null!==(F=S.data)&&void 0!==F&&F.data?0===(null===G||void 0===G||null===(L=G.data)||void 0===L||null===(I=L.res)||void 0===I||null===(D=I.data)||void 0===D?void 0:D.total)?(0,x.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,x.jsx)(l.Z,{style:{color:"#ccc",fontSize:50,margin:20}}),(0,x.jsx)("p",{style:{width:"100%",display:"flex",justifyContent:"center"},children:"No data"})]}):(0,x.jsxs)(d.Sx,{children:[(0,x.jsx)(d.V,{children:(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.is,{scope:"col",children:"#"}),(0,x.jsx)(d.is,{scope:"col",children:"NickName"}),(0,x.jsx)(d.is,{scope:"col",children:"Type"}),(0,x.jsx)(d.is,{scope:"col",children:"Quantity"}),(0,x.jsx)(d.is,{scope:"col",children:"From"}),(0,x.jsx)(d.is,{scope:"col",children:"To"}),(0,x.jsx)(d.is,{scope:"col",children:"Action"})]})}),(0,x.jsx)(d.NR,{children:null===G||void 0===G||null===(H=G.data)||void 0===H||null===(M=H.res)||void 0===M||null===(z=M.data)||void 0===z?void 0:z.data.map((function(e,n){return(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.is,{scope:"row",children:n}),(0,x.jsx)(d.is,{scope:"row",children:e.NickName}),(0,x.jsx)(d.NN,{scope:"row",children:function(){switch(e.type){case"swap_to_point":return"\u0110\u1ed5i token sang \u0111i\u1ec3m";case"swap_to_token":return"\u0110\u1ed5i \u0111i\u1ec3m sang token";default:return""}}()}),(0,x.jsx)(d.is,{scope:"row",children:function(){switch(e.type){case"swap_to_point":return"".concat(e.tokenAmount," / ").concat(e.pointAmount);case"swap_to_token":return"".concat(e.pointAmount," / ").concat(e.tokenAmount);default:return""}}()}),(0,x.jsxs)(d.is,{scope:"row",children:[e.from.slice(0,7),"...",e.from.slice(-5)]}),(0,x.jsx)(d.is,{scope:"row",children:null!==e.to?(0,x.jsxs)(x.Fragment,{children:[e.to.slice(0,7),"...",e.to.slice(-5)]}):(0,x.jsx)(x.Fragment,{})}),(0,x.jsx)(d.is,{scope:"row",children:(0,x.jsx)("svg",{onClick:function(){return xe(e.id)},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:30,width:30,style:{cursor:"pointer"},children:(0,x.jsx)("path",{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})})})]},n)}))})]}):(0,x.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,x.jsx)(u.Z,{style:{color:"#ccc",fontSize:50,margin:20}}),(0,x.jsx)("p",{style:{width:"100%",display:"flex",justifyContent:"center"},children:"Loading..."})]})})]})})}),(0,x.jsx)(h(),{previousLabel:"< Previous",nextLabel:"Next >",breakLabel:"...",pageCount:O,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:pe,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})}}}]);
//# sourceMappingURL=6606.21bf25af.chunk.js.map