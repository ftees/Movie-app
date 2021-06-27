(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(8),i=c.n(r),o=(c(15),c(9)),j=c(3),l=c.n(j),u=c(6),d=c(2),b=(c(17),function(e){var t=e.favorites;return Object(n.jsx)(n.Fragment,{children:e.movie.map((function(c,a){return Object(n.jsxs)("div",{className:"d-flex justify-content-start m-3 image-container",onClick:function(){return e.openDetail(c.imdbID)},children:[Object(n.jsx)("img",{src:c.Poster,alt:""}),Object(n.jsx)("div",{className:"overlay d-flex justify-content-center align-items-center",onClick:function(){return e.addFavorites(c)},children:Object(n.jsx)(t,{})})]})}))})}),m=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{className:"heading",children:e.title})})},O=function(e){return Object(n.jsx)("div",{className:"col col-md-4 searchbox",children:Object(n.jsx)("input",{type:"text",className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"search movie"})})},x=function(e){return Object(n.jsx)("span",{className:"mr-2 addFavour",children:"Add to Favourites \u2764"})},f=function(e){return Object(n.jsx)("span",{className:"mr-2 addFavour",children:"Remove movie \u274c"})},h=function(e){var t=Object(a.useState)({}),c=Object(d.a)(t,2),s=c[0],r=c[1],i=e.idPara,o=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?i=".concat(t,"&apikey=c9127ecc"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o(i)}),[s]),Object(n.jsxs)("div",{className:"container-fluid d-flex mt-4 mb-4",children:[Object(n.jsx)("img",{src:s.Poster}),Object(n.jsx)("div",{className:"col-2"}),Object(n.jsxs)("div",{className:"infomation",children:[Object(n.jsxs)("h1",{children:["Title: ",s.Title]}),Object(n.jsxs)("p",{children:["Actor: ",s.Actors]}),Object(n.jsxs)("p",{children:["Genre: ",s.Genre]}),Object(n.jsxs)("p",{children:["Country: ",s.Country]}),Object(n.jsxs)("p",{children:["Writer: ",s.Writer]}),Object(n.jsxs)("p",{children:["Director: ",s.Director]}),Object(n.jsxs)("p",{children:["Language: ",s.Language]}),Object(n.jsxs)("p",{children:["Runtime: ",s.Runtime]}),Object(n.jsxs)("p",{children:["Released: ",s.Released]}),Object(n.jsx)("button",{className:"btn btn-primary",children:Object(n.jsx)("b",{children:"Watch Movie"})})]})]})};var v=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("all"),i=Object(d.a)(r,2),j=i[0],v=i[1],p=Object(a.useState)(!1),g=Object(d.a)(p,2),N=g[0],w=g[1],y=Object(a.useState)(""),F=Object(d.a)(y,2),S=F[0],D=F[1],k=Object(a.useState)([]),C=Object(d.a)(k,2),P=C[0],I=C[1],M=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(t,"&apikey=c9127ecc"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,console.log(n),n.Search&&s(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){M(j)}),[j]);var R=function(e){D(e),w(!0)};return Object(n.jsxs)("div",{className:"container-fluid app",children:[Object(n.jsx)("h1",{className:"title-name",children:"FTees.net"}),Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4"}),N?Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{title:"Movie detail"}),Object(n.jsx)(h,{idPara:S})]}):" ",Object(n.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(n.jsx)(m,{title:"Movies"}),Object(n.jsx)(O,{value:j,setSearchValue:v})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(b,{movie:c,favorites:x,addFavorites:function(e){var t=[].concat(Object(o.a)(P),[e]);console.log(e+"bababa"),I(t)},openDetail:R})}),Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(n.jsx)(m,{title:"Favourites Movie"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(b,{movie:P,favorites:f,addFavorites:function(e){var t=P.filter((function(t){return t.imdbID!==e.imdbID}));I(t)},openDetail:R})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.8a79f7e1.chunk.js.map