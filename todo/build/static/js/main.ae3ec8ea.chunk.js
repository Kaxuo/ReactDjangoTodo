(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(10),n(4)),l=n(1);n(11);var s=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({id:null,title:"",complete:!1}),s=Object(l.a)(c,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),f=p[0],h=p[1],k=function(){fetch("https://guarded-shore-23074.herokuapp.com/api/task-list/").then((function(e){return e.json()})).then((function(e){return r(e)}))},b=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var o=n[a].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t};Object(a.useEffect)((function(){k()}),[]);var v=n.map((function(e,t){return o.a.createElement("div",{key:t,className:"task-wrapper flex-wrapper"},o.a.createElement("div",{onClick:function(){return function(e){e.completed=!e.completed;var t=b("csrftoken");console.log("TASK",e.completed);var n="https://guarded-shore-23074.herokuapp.com/api/task-update/".concat(e.id);fetch(n,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify({completed:e.completed,title:e.title})}).then((function(){k()}))}(e)},style:{flex:7}},0==e.completed?o.a.createElement("span",null,e.title):o.a.createElement("strike",null,e.title)),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{onClick:function(){return function(e){m(e),h(!0)}(e)},className:"btn btn-smn btn-outline-info"}," Edit ")),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{onClick:function(){return function(e){var t=b("csrftoken");fetch("https://guarded-shore-23074.herokuapp.com/api/task-delete/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":t}}).then((function(e){k()}))}(e)},className:"btn btn-smn btn-outline-dark delete"}," -  ")))}));return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"task-container"},o.a.createElement("div",{id:"form-wrapper"},o.a.createElement("form",{onSubmit:function(e){var t=b("csrftoken");e.preventDefault(),console.log(u);var n="https://guarded-shore-23074.herokuapp.com/api/task-create/";!0===f&&(n="https://guarded-shore-23074.herokuapp.com/api/task-update/".concat(u.id),h(!1)),fetch(n,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify(u)}).then((function(e){k(),r([u])})).catch((function(e){console.log("error",e)}))},id:"form"},o.a.createElement("div",{className:"flex-wrapper"},o.a.createElement("div",{style:{flex:6}},o.a.createElement("input",{id:"title",onChange:function(e){e.target.name;var t=e.target.value;m(Object(i.a)({},u,{title:t}))},type:"text",className:"form-control",value:u.title,name:"title",placeholder:"Add task"})),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{id:"submit",onClick:function(){document.getElementById("form").reset()},type:"submit",className:"btn btn-warning",name:"submit"},"Submit"))))),o.a.createElement("div",{id:"list-wrapper"},v)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.ae3ec8ea.chunk.js.map