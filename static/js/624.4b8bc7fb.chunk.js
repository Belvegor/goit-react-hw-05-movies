"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[624],{155:function(e,t,r){r.d(t,{O:function(){return l}});var n="MoviesList_box__bcJK5",a="MoviesList_list__0Owr9",c="MoviesList_item__eePYv",s="MoviesList_link__8rTGX",u="MoviesList_title__PB2c8",o=r(87),i=r(184);function l(e){var t=e.movies;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:a,children:t.map((function(e){return(0,i.jsx)(o.rU,{to:"/movies/".concat(e.id),className:s,children:(0,i.jsx)("li",{className:c,children:(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,title:e.title,width:"260"}),(0,i.jsx)("p",{className:u,children:e.title})]})},e.id)},e.id)}))})})}},624:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u="Movies_container__+-Cnt",o="Movies_title__MDLXB",i=r(791),l="SearchInput_container__CyRta",p="SearchInput_input__pvo3q",h="SearchInput_button__a2oUc",v=r(184);function f(e){var t=e.handleSearch,r=(0,i.useState)(!1),n=(0,a.Z)(r,2),c=n[0],s=n[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("input",{type:"text",className:p,placeholder:c?"":"Search for a movie...",onFocus:function(){s(!0)},onBlur:function(){s(!1)},onKeyUp:function(e){"Enter"===e.code&&t(e.target.value)}}),(0,v.jsx)("button",{className:h,onClick:function(){var e=document.querySelector(".".concat(p)).value;t(e)},children:"Search"})]})})}var d=r(422),m=r(155),_=r(502);function x(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,i.useState)([]),p=(0,a.Z)(l,2),h=p[0],x=p[1],g=(0,i.useState)(!0),w=(0,a.Z)(g,2),y=w[0],j=w[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.qF)(r);case 3:t=e.sent,x(t),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("B\u0142\u0105d podczas pobierania danych: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("h1",{className:o,children:"Search movies"}),0===h.length?(0,v.jsx)(f,{handleSearch:function(e){c(e)}}):"",y?(0,v.jsx)(d.$,{}):(0,v.jsx)(m.O,{movies:h})]})})}},502:function(e,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return h},qF:function(){return i},uV:function(){return p},wr:function(){return o}});var n=r(861),a=r(757),c=r.n(a),s=r(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmZmE0NDE4MGExNjIzNTI4M2I4YzYyZGFkYTBjYiIsInN1YiI6IjY1ZDEyN2Q1YWE2NTllMDE4NjQyODM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5B6314cItycUPZ96dF8XKEGzB2Kk_hOIaTyDuVlAhvc";var u="e58ffa44180a16235283b8c62dada0cb",o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?language=en-US&api_key=".concat(u));case 3:return t=e.sent,r=t.data,n=r.results,console.log(n),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed fetch data: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(u,"&language=en-EU&page=1&include_adult=false"));case 3:return r=e.sent,n=r.data,a=n.results,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1"));case 3:return r=e.sent,n=r.data,a=n.results,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Failed to fetch movie reviews: ",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,a=n.cast,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Failed to fetch movie cast: ",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),new Error("B\u0142\u0105d podczas pobierania szczeg\xf3\u0142\xf3w filmu");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=624.4b8bc7fb.chunk.js.map