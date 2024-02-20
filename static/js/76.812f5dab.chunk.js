"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(689),o=r(502),l={cast_container:"Cast_cast_container__zhkUf",list:"Cast_list__GlWio",item:"Cast_item__a0CDL",image:"Cast_image__mOsuM",title:"Cast_title__0cH9s",character:"Cast_character__tKDlA"},p=r(184),f=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],f=(0,i.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(f);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to fetch movie credits: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,p.jsx)("div",{className:l.container,children:(0,p.jsx)("ul",{className:l.list,children:r.map((function(e){return(0,p.jsxs)("li",{className:l.item,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),className:l.image,alt:e.name,title:e.name,width:"160"}),(0,p.jsx)("p",{className:l.title,children:e.name}),(0,p.jsxs)("p",{className:l.character,children:["Character: ",e.character]})]},e.id)}))})})}},502:function(e,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return f},qF:function(){return o},uV:function(){return p},wr:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmZmE0NDE4MGExNjIzNTI4M2I4YzYyZGFkYTBjYiIsInN1YiI6IjY1ZDEyN2Q1YWE2NTllMDE4NjQyODM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5B6314cItycUPZ96dF8XKEGzB2Kk_hOIaTyDuVlAhvc";var u="e58ffa44180a16235283b8c62dada0cb",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?language=en-US&api_key=".concat(u));case 3:return t=e.sent,r=t.data,n=r.results,console.log(n),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed fetch data: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(u,"&language=en-EU&page=1&include_adult=false"));case 3:return r=e.sent,n=r.data,a=n.results,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1"));case 3:return r=e.sent,n=r.data,a=n.results,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Failed to fetch movie reviews: ",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,a=n.cast,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Failed to fetch movie cast: ",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),new Error("B\u0142\u0105d podczas pobierania szczeg\xf3\u0142\xf3w filmu");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.812f5dab.chunk.js.map