"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[560],{90560:function(e,n,s){s.r(n),s.d(n,{default:function(){return m}});var r=s(74165),i=s(15861),c=s(70885),t=s(72791),a=s(56127),l=s(77106),o=s(74569),d=s.n(o),u=s(78983),h=s(96048),p=s.n(h),x=s(80184),j=localStorage.getItem("token_key"),m=function(){var e,n,s,o,h,m,f,N,v,w=(0,t.useState)([]),g=(0,c.Z)(w,2),y=g[0],k=g[1],b=(0,t.useState)(0),C=(0,c.Z)(b,2),Z=C[0],_=C[1],D=(0,t.useState)(!1),L=(0,c.Z)(D,2),S=L[0],T=L[1],I=(0,t.useState)([]),H=(0,c.Z)(I,2),W=H[0],M=H[1],P=(0,t.useState)(""),z=(0,c.Z)(P,2),B=z[0],F=z[1],R=(0,t.useState)(""),V=(0,c.Z)(R,2),A=V[0],E=V[1],G=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"Get",url:"".concat("http://api.play.bingo.family","/api/history/plays?page=1&limit=").concat(10),headers:{Authorization:"Bearer ".concat(j)},params:{nickname:B,iswin:A}});case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log("err");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function K(){return O.apply(this,arguments)}function O(){return O=(0,i.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:n=e.sent,s=n.data.res.total,_(Math.ceil(s/10)),k(n);case 6:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}(0,t.useEffect)((function(){K()}),[10]);var U=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"Get",url:"".concat("http://api.play.bingo.family","/api/history/plays?page=").concat(n,"&limit=").concat(10),headers:{Authorization:"Bearer ".concat(j)}});case 3:return s=e.sent,e.abrupt("return",s);case 7:e.prev=7,e.t0=e.catch(0),console.log("err");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),X=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.selected+1,e.next=3,U(s);case 3:i=e.sent,k(i);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,t.useEffect)((function(){function e(){return e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:n=e.sent,k(n);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)(u.Tk,{className:"modal_detail",visible:S,onClose:function(){return T(!1)},children:[(0,x.jsx)(u.p0,{children:(0,x.jsx)(u.fl,{children:"History Detail"})}),(0,x.jsx)(u.sD,{children:(0,x.jsx)(u.rb,{children:(0,x.jsx)(u.b7,{xs:17,children:(0,x.jsx)(u.xH,{className:"mb-4",children:(0,x.jsx)(u.sl,{children:(0,x.jsxs)(u.Sx,{children:[(0,x.jsx)(u.V,{children:(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.is,{scope:"col",children:"Name"}),(0,x.jsx)(u.is,{scope:"col",children:"Data"})]})}),(0,x.jsxs)(u.NR,{children:[(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"ID"}),(0,x.jsx)(u.NN,{scope:"row",children:W.tID})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"User ID"}),(0,x.jsx)(u.NN,{scope:"row",children:W.uID})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"Is Win?"}),(0,x.jsx)(u.NN,{scope:"row",children:0===W.is_win?"Lose":"Win"})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"Reward"}),(0,x.jsx)(u.NN,{scope:"row",children:W.reward})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"Fee"}),(0,x.jsx)(u.NN,{scope:"row",children:W.fee})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"Total Score"}),(0,x.jsx)(u.NN,{scope:"row",children:W.total_score})]}),(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.NN,{scope:"row",children:"Nick Name"}),(0,x.jsx)(u.NN,{scope:"row",children:W.NickName})]})]})]})})})})})}),(0,x.jsx)(u.Ym,{children:(0,x.jsx)(u.u5,{color:"secondary",onClick:function(){return T(!1)},children:"Close"})})]}),(0,x.jsx)(u.rb,{children:(0,x.jsx)(u.b7,{xs:12,children:(0,x.jsxs)(u.xH,{className:"mb-4",children:[(0,x.jsx)(u.bn,{children:(0,x.jsx)(u.KB,{children:(0,x.jsxs)("div",{className:"row justify-content-md-center",children:[(0,x.jsx)(u.b7,{children:(0,x.jsx)("strong",{children:"History Play game"})}),(0,x.jsx)(u.b7,{xs:!0,lg:2}),(0,x.jsx)(u.b7,{md:"auto",children:(0,x.jsx)(u.lx,{children:(0,x.jsx)(u.jO,{type:"email",id:"exampleFormControlInput1",placeholder:"NickName","aria-describedby":"exampleFormControlInputHelpInline",onChange:function(e){return F(e.target.value)}})})}),(0,x.jsx)(u.b7,{xs:!0,lg:2,children:(0,x.jsx)(u.LX,{"aria-label":"Default select example",onChange:function(e){E(e.target.value)},options:["Win/Lose",{label:"Win",value:"1"},{label:"Lose",value:"0"}]})}),(0,x.jsx)(u.b7,{xs:!0,lg:2,children:(0,x.jsx)(u.u5,{color:"success",variant:"outline",onClick:K,children:"Search"})})]})})}),(0,x.jsx)(u.sl,{children:null!==y&&void 0!==y&&null!==(e=y.data)&&void 0!==e&&null!==(n=e.res)&&void 0!==n&&null!==(s=n.data)&&void 0!==s&&s.data?0===(null===y||void 0===y||null===(o=y.data)||void 0===o||null===(h=o.res)||void 0===h||null===(m=h.data)||void 0===m?void 0:m.total)?(0,x.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,x.jsx)(a.Z,{style:{color:"#ccc",fontSize:50,margin:20}}),(0,x.jsx)("p",{style:{width:"100%",display:"flex",justifyContent:"center"},children:"No data"})]}):(0,x.jsxs)(u.Sx,{children:[(0,x.jsx)(u.V,{children:(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.is,{scope:"col",children:"ID"}),(0,x.jsx)(u.is,{scope:"col",children:"NickName"}),(0,x.jsx)(u.is,{scope:"col",children:"Vs Player"}),(0,x.jsx)(u.is,{scope:"col",children:"Score"}),(0,x.jsx)(u.is,{scope:"col",children:"Win/Lose"}),(0,x.jsx)(u.is,{scope:"col",children:"Time"}),(0,x.jsx)(u.is,{scope:"col",children:"Fee"}),(0,x.jsx)(u.is,{scope:"col",children:"Action"})]})}),(0,x.jsx)(u.NR,{children:null===y||void 0===y||null===(f=y.data)||void 0===f||null===(N=f.res)||void 0===N||null===(v=N.data)||void 0===v?void 0:v.data.map((function(e,n){return(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.is,{scope:"row",children:e.tID}),(0,x.jsx)(u.is,{scope:"row",children:e.NickName}),(0,x.jsx)(u.is,{scope:"row",children:e.vs_nickname}),(0,x.jsx)(u.is,{scope:"row",children:e.total_score}),(0,x.jsx)(u.is,{scope:"row",children:0===e.is_win?"Lose":"Win"}),(0,x.jsx)(u.is,{scope:"row",children:e.logdate}),(0,x.jsx)(u.is,{scope:"row",children:e.fee}),(0,x.jsx)(u.NN,{children:(0,x.jsx)("svg",{onClick:function(){return function(e){M(e),T(!S)}(e)},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:30,width:30,style:{cursor:"pointer"},children:(0,x.jsx)("path",{d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})})})]},n)}))})]}):(0,x.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,x.jsx)(l.Z,{style:{color:"#ccc",fontSize:50,margin:20}}),(0,x.jsx)("p",{style:{width:"100%",display:"flex",justifyContent:"center"},children:"Loading..."})]})})]})})}),(0,x.jsx)(p(),{previousLabel:"< Previous",nextLabel:"Next >",breakLabel:"...",pageCount:Z,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:X,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})}}}]);
//# sourceMappingURL=560.91a2fa3f.chunk.js.map