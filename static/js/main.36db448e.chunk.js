(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),i=n.n(a),s=(n(24),n(25),n(6)),o=n(3),u=function(e,t){switch(t.type){case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.payload});case"INCREMENT_BY_FIVE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage+5,currentPageIndex:e.currentPage+5});case"DECREMENT_BY_FIVE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage-5,currentPageIndex:e.currentPage-5});default:return e}},j=n(0),d={currentPage:1,currentPageIndex:0},l=Object(c.createContext)(d),b=function(e){var t=e.children,n=Object(c.useReducer)(u,d),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(j.jsx)(l.Provider,{value:{state:a,dispatch:i},children:t})},h=n(8),v=n.n(h),O=n(18),x=n(19),p=n.n(x),g=function(e){var t,n=e.imgPath,c=e.title,r=e.vote_average,a=e.overview;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:n,alt:c}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("span",{className:(t=r,t>=8?"green":t>=5?"orange":"red"),children:r})]}),Object(j.jsxs)("div",{className:"overview",children:[Object(j.jsx)("h3",{children:"Overview"}),a]})]})},f=function(e){var t=e.onSubmit;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:"Simple Movie App"}),Object(j.jsx)("form",{id:"form",onSubmit:t,children:Object(j.jsx)("input",{type:"text",id:"search",className:"search",placeholder:"Search"})})]})},m=function(){var e=Object(c.useContext)(l).state,t="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=".concat(e.currentPage),n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1],o=function(){var e=Object(O.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:n=e.sent,c=n.data,i(c.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o(t)}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:function(e){e.preventDefault();var t=e.target.search.value;t&&""!==t?(o("https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="+t),e.target.search.value=""):window.location.reload()}}),Object(j.jsx)("main",{children:a.map((function(e){return Object(j.jsx)(g,{imgPath:"https://image.tmdb.org/t/p/w1280"+e.poster_path,title:e.title,vote_average:e.vote_average,overview:e.overview},e.id)}))})]})},P=(n(46),function(){var e=Object(c.useContext)(l),t=e.state,n=e.dispatch;return Object(j.jsx)("div",{id:"pagination",children:Object(j.jsx)("nav",{children:Object(j.jsx)("div",{style:{textAlign:"center",clear:"both"},children:Object(j.jsxs)("ul",{className:"pagination",children:[t.currentPage>5&&Object(j.jsx)("li",{id:"prev",children:Object(j.jsx)("button",{className:"btn left",onClick:function(){n({type:"DECREMENT_BY_FIVE"})},children:"Prev"})}),[1,2,3,4,5].map((function(e){return Object(j.jsx)("li",{onClick:function(){n({type:"SET_CURRENT_PAGE",payload:t.currentPageIndex+e}),console.log(t.currentPage)},title:"Page"+e,children:t.currentPageIndex+e},e)})),t.currentPage<500&&Object(j.jsx)("li",{id:"next",children:Object(j.jsx)("button",{className:"btn right",onClick:function(){n({type:"INCREMENT_BY_FIVE"})},children:"Next"})})]})})})})}),E=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(P,{})]})},_=function(){return Object(j.jsx)("div",{className:"footer",children:"Copyright\xa9 2021"})},N=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(E,{}),Object(j.jsx)(_,{})]})};var y=function(){return Object(j.jsx)(b,{children:Object(j.jsx)(N,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.36db448e.chunk.js.map