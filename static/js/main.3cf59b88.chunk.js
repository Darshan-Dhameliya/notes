(this.webpackJsonpsshopping=this.webpackJsonpsshopping||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),s=n(6),i=n.n(s),l=(n(13),n(7)),a=n(5);function o(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),n=e[0],s=e[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),j=o[0],b=o[1];return Object(r.useEffect)((function(){!function(){var t=JSON.parse(localStorage.getItem("notes"));null!==t&&s(t)}()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-info text-center p-3 mt-3",children:"Notes"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"form-group mt-5",children:[Object(c.jsx)("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),null!==j&&0!==j.trim().length){var e=[].concat(Object(l.a)(n),[j]);s(e),localStorage.setItem("notes",JSON.stringify(e)),b("")}}(t)},children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h4",{children:"Add new Note"}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("input",{type:"text",value:j,className:"form-control",onChange:function(t){return b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-primary ml-2",children:"ADD"})]})]})}),Object(c.jsxs)("div",{className:"card mt-5",children:[Object(c.jsx)("h4",{children:"Notes"}),Object(c.jsx)("table",{className:"table table-hover mb-0",children:n.map((function(t,e){return Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{style:{verticalAlign:"middle",textAlign:"center"},width:"50",children:e+1}),Object(c.jsx)("td",{style:{wordBreak:"break-all"},children:t}),Object(c.jsxs)("td",{width:"169",children:[Object(c.jsx)("button",{onClick:function(){return function(t,e){var c=prompt("Please enter your name",t.trim());if(null!==c&&0!==c.trim().length){for(var r=[],i=0;i<n.length;i++)i===e&&(n[i]=c,s(n)),r.push(n[i]);s(r),localStorage.setItem("notes",JSON.stringify(r))}}(t,e)},className:"btn btn-sm btn-outline-primary ml-2",children:"Edit"}),Object(c.jsx)("button",{onClick:function(){return function(t){if(window.confirm("Are you sure you want to delete this notes")){var e=n.filter((function(e,n){return n!==t}));s(e),localStorage.setItem("notes",JSON.stringify(e))}}(e)},className:"btn btn-sm btn-outline-danger ml-2",children:"Delete"})]})]})," "]},e)}))})]})]})})]})})}function j(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(o,{})," "]})})}i.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3cf59b88.chunk.js.map