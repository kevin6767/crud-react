(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),u=(n(16),n(10)),m=n(4),s=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,r.a.createElement("button",{className:"button muted-button"},"Edit"),r.a.createElement("button",{className:"button muted-button"},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No users"))))},o=n(3),i=n(5),E=function(e){var t={id:null,name:"",username:""},n=Object(a.useState)(t),l=Object(m.a)(n,2),c=l[0],u=l[1],s=function(e){var t=e.target,n=t.name,a=t.value;u(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c.name&&c.username&&(e.addUser(c),u(t))}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:s}),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:s}),r.a.createElement("button",null,"Add New User"))},d=n(6),b=n.n(d),f=n(9),p=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=5");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){p().then((function(e){l(e),console.log(e)}))}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," CRUD with Hooks :)"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"Add user"),r.a.createElement(E,{addUser:function(e){e.id=n.length+1,l([].concat(Object(u.a)(n),[e]))}})),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View Users"),r.a.createElement(s,{users:n}))))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84494e67.chunk.js.map