(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{19:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),r=c(13),a=c.n(r),j=(c(19),c(0)),l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"center-align mt-3 text-center ",children:"Employee Directory"}),Object(j.jsx)("h4",{className:"mt-3 text-center ",children:"Search or look up Employees"}),Object(j.jsx)("p",{className:"mb-3 text-center"})]})},i=c(3),o=[],b=function(){var e=Object(s.useState)(o),t=Object(i.a)(e,2),c=(t[0],t[1]),n=Object(s.useState)(""),r=Object(i.a)(n,2),a=r[0],l=r[1];return Object(j.jsx)("div",{className:"searchBar",children:Object(j.jsxs)("form",{className:"form-inline",children:[Object(j.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search for Employee",name:"search",onChange:function(e){var t=e.target.value;if(l(t),a){var s=o.filter((function(e){return e.name.includes(t)||e.type.includes(t)}));c(s)}else c(o)}}),Object(j.jsx)("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",children:"Search"})]})})},h=c(14),d=c.n(h),m=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=20&nat=us").then((function(e){n(e.data.results)}))}),[]),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Picture"}),Object(j.jsx)("th",{scope:"col",children:"First"}),Object(j.jsx)("th",{scope:"col",children:"Last"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("th",{scope:"row",children:[" ",Object(j.jsx)("img",{src:e.picture.medium,alt:""})," "]}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.cell})]})}))})]})})};var u=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(b,{}),Object(j.jsx)(m,{})]})};c(39);a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e43c241e.chunk.js.map