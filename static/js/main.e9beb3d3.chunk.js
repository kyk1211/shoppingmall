(this.webpackJsonpshoppingmall=this.webpackJsonpshoppingmall||[]).push([[0],{112:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(24),a=c.n(s),j=(c(85),c(54)),r=c.n(j),o=c(31),l=c(69),d=c(3),b=c(7),h=c(70),O=c.n(h),x=[{id:0,title:"White and Black",content:"Born in France",price:12e4,stock:10},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,stock:21},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,stock:50}],u=c(1);function p(e){var t=e.goods,c=Object(b.f)();return Object(u.jsxs)("div",{className:"col-md-4",onClick:function(){c.push("/detail/".concat(t.id))},children:[Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(t.id+1)+".jpg",alt:"goods",width:"100%"}),Object(u.jsx)("h4",{children:t.title}),Object(u.jsx)("p",{children:t.content}),Object(u.jsxs)("p",{children:[t.price,"\uc6d0"]})]})}var m=c(56),f=c(57),v=(c(112),c(127));function g(e){var t=e.stock;return Object(u.jsxs)("p",{children:["\uc7ac\uace0 : ",t]})}var k,N,w=c(128),S=f.a.div(k||(k=Object(m.a)(["\n  padding-top: 30px;\n"]))),y=f.a.h4(N||(N=Object(m.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.color}));function C(e){var t=e.goods,c=e.setShoes,i=Object(n.useState)(""),s=Object(d.a)(i,2),a=s[0],j=s[1],r=Object(n.useState)(0),o=Object(d.a)(r,2),l=o[0],h=o[1],O=Object(n.useState)(!1),x=Object(d.a)(O,2),p=x[0],m=x[1],f=Object(b.g)().id,k=Object(b.f)(),N=t.find((function(e){return e.id==f}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(S,{children:Object(u.jsx)(y,{className:"black",children:"Detail"})}),Object(u.jsx)("p",{children:a}),Object(u.jsx)("input",{onChange:function(e){j(e.target.value)}}),N.stock?null:Object(u.jsx)("div",{className:"my-alert2",children:Object(u.jsx)("p",{children:"sold out"})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(N.id+1)+".jpg",width:"100%"})}),Object(u.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(u.jsx)("h4",{className:"pt-5",children:N.title}),Object(u.jsx)("p",{children:N.content}),Object(u.jsxs)("p",{children:[N.price,"\uc6d0"]}),Object(u.jsx)(g,{stock:N.stock}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){var e=[];t.forEach((function(t){N.id===t.id?t.stock?(t.stock=t.stock-1,e.push(t)):(alert("sold out"),e.push(t)):e.push(t)})),c(e)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){k.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(u.jsxs)(v.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(u.jsx)(v.a.Item,{children:Object(u.jsx)(v.a.Link,{eventKey:"link-0",onClick:function(){m(!1),h(0)},children:"Active"})}),Object(u.jsx)(v.a.Item,{children:Object(u.jsx)(v.a.Link,{eventKey:"link-1",onClick:function(){m(!1),h(1)},children:"Option 2"})})]}),Object(u.jsx)(w.a,{in:p,classNames:"wow",timeout:500,children:Object(u.jsx)(A,{tab:l,setTabAni:m})})]})}function A(e){var t=e.tab,c=e.setTabAni;switch(Object(n.useEffect)((function(){c(!0)})),t){case 0:return Object(u.jsx)("div",{children:"000"});case 1:return Object(u.jsx)("div",{children:"1111"});default:console.log("default")}}var B=c(126),I=c(124),L=c(125),D=c(28);c(116);function K(){return Object(u.jsx)(B.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(B.a.Brand,{children:Object(u.jsx)(D.b,{to:"/",children:"Pshop"})}),Object(u.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(B.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(v.a,{className:"me-auto",children:[Object(u.jsx)(v.a.Link,{as:D.b,to:"/",children:"Home"}),Object(u.jsx)(v.a.Link,{as:D.b,to:"/detail/0",children:"Detail"}),Object(u.jsxs)(L.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(L.a.Item,{href:"#action/3.1",children:"Action"}),Object(u.jsx)(L.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(L.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(L.a.Divider,{}),Object(u.jsx)(L.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})}c(117);var T=function(){var e=Object(n.useState)(x),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),a=Object(d.a)(s,2),j=a[0],h=a[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(K,{}),Object(u.jsxs)(b.c,{children:[Object(u.jsxs)(b.a,{exact:!0,path:"/",children:[Object(u.jsxs)("div",{className:"jumbotron",children:[Object(u.jsx)("h1",{children:"20% Season Off"}),Object(u.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(u.jsx)("button",{children:"Learn more!"})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(u.jsx)(p,{goods:e},t)}))}),j?Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"now Loading..."})}):null,Object(u.jsx)("button",{className:"btn btn-primary",onClick:Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,O.a.get("https://codingapple1.github.io/shop/data2.json");case 4:t=e.sent,h(!1),i([].concat(Object(o.a)(c),Object(o.a)(t.data))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),h(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),children:"\ub354\ubcf4\uae30"})]})]}),Object(u.jsx)(b.a,{path:"/detail/:id",children:Object(u.jsx)(C,{goods:c,setShoes:i})}),Object(u.jsx)(b.a,{path:"/:id",children:Object(u.jsx)("div",{children:"hi"})})]})]})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(D.a,{children:Object(u.jsx)(T,{})})}),document.getElementById("root"))},85:function(e,t,c){}},[[118,1,2]]]);
//# sourceMappingURL=main.e9beb3d3.chunk.js.map