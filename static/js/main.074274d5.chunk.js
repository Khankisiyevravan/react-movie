(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(30),r=c.n(i),n=(c(40),c(41),c(42),c(5)),o=c(4),l=(c(43),c.p+"static/media/tmovie.67797e94.png"),j=c(0);const d=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}];var b=()=>{const{pathname:e}=Object(o.g)(),t=Object(s.useRef)(null),c=d.findIndex((t=>t.path===e));return Object(s.useEffect)((()=>{const e=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(j.jsx)("div",{ref:t,className:"header",children:Object(j.jsxs)("div",{className:"header__wrap container",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)(n.b,{to:"/",children:"tMovies"})]}),Object(j.jsx)("ul",{className:"header__nav",children:d.map(((e,t)=>Object(j.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(j.jsx)(n.b,{to:e.path,children:e.display})},t)))})]})})},m=(c(50),c.p+"static/media/footer-bg.67e95f05.jpg");var h=()=>Object(j.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(m,")")},children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)("div",{className:"footer__content__logo",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)(n.b,{to:"/",children:"tMovies"})]})}),Object(j.jsxs)("div",{className:"footer__content__menus",children:[Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/",children:"Home"}),Object(j.jsx)(n.b,{to:"/",children:"Contact us"}),Object(j.jsx)(n.b,{to:"/",children:"Term of services"}),Object(j.jsx)(n.b,{to:"/",children:"About us"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/",children:"Live"}),Object(j.jsx)(n.b,{to:"/",children:"FAQ"}),Object(j.jsx)(n.b,{to:"/",children:"Premium"}),Object(j.jsx)(n.b,{to:"/",children:"Pravacy policy"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/",children:"You must watch"}),Object(j.jsx)(n.b,{to:"/",children:"Recent release"}),Object(j.jsx)(n.b,{to:"/",children:"Top IMDB"})]})]})]})});c(51);const O=e=>Object(j.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children}),u=e=>Object(j.jsx)(O,{className:"btn-outline ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children});var v=O,x=c(85),p=c(83),g=c(86),_=c(84);c(52);const y=e=>{const t=Object(s.useRef)(null);return Object(j.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(j.jsx)("div",{className:"modal__content__close",onClick:()=>{t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(j.jsx)("i",{className:"bx bx-x"})})]})};var N=e=>{const[t,c]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{c(e.active)}),[e.active]),Object(j.jsx)("div",{id:e.id,className:"modal ".concat(t?"active":""),children:e.children})},f=c(33),w=c.n(f),k=c(34),C=c.n(k);var L={baseUrl:"https://api.themoviedb.org/3/",apiKey:"b8fc6ef4b74c89ceb9f39efa572a1142",originalImage:e=>"https://image.tmdb.org/t/p/original/".concat(e),w500Image:e=>"https://image.tmdb.org/t/p/w500/".concat(e)};const S=w.a.create({baseURL:L.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:e=>C.a.stringify({...e,api_key:L.apiKey})});S.interceptors.request.use((async e=>e)),S.interceptors.response.use((e=>e&&e.data?e.data:e),(e=>{throw e}));var T=S;const I={movie:"movie",tv:"tv"},E={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},M={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"};var V={getMoviesList:(e,t)=>{const c="movie/"+E[e];return T.get(c,t)},getTvList:(e,t)=>{const c="tv/"+M[e];return T.get(c,t)},getVideos:(e,t)=>{const c=I[e]+"/"+t+"/videos";return T.get(c,{params:{}})},search:(e,t)=>{const c="search/"+I[e];return T.get(c,t)},detail:(e,t,c)=>{const s=I[e]+"/"+t;return T.get(s,c)},credits:(e,t)=>{const c=I[e]+"/"+t+"/credits";return T.get(c,{params:{}})},similar:(e,t)=>{const c=I[e]+"/"+t+"/similar";return T.get(c,{params:{}})}};c(75);const F=e=>{let t=Object(o.f)();const c=e.item,s=L.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path);return Object(j.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(j.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(j.jsx)("h2",{className:"title",children:c.title}),Object(j.jsx)("div",{className:"overview",children:c.overview}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(v,{onClick:()=>t.push("/movie/"+c.id),children:"Watch now"}),Object(j.jsx)(u,{onClick:async()=>{const e=document.querySelector("#modal_".concat(c.id)),t=await V.getVideos(I.movie,c.id);if(t.results.length>0){const c="https://www.youtube.com/embed/"+t.results[0].key;e.querySelector(".modal__content > iframe").setAttribute("src",c)}else e.querySelector(".modal__content").innerHTML="No trailer";e.classList.toggle("active")},children:"Watch trailer"})]})]}),Object(j.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(j.jsx)("img",{src:L.w500Image(c.poster_path),alt:""})})]})})},R=e=>{const t=e.item,c=Object(s.useRef)(null);return Object(j.jsx)(N,{active:!1,id:"modal_".concat(t.id),children:Object(j.jsx)(y,{onClose:()=>c.current.setAttribute("src",""),children:Object(j.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})};var q=()=>{x.a.use([p.a]);const[e,t]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const e={page:1};try{const c=await V.getMoviesList(E.popular,{params:e});t(c.results.slice(1,4)),console.log(c)}catch{console.log("error")}})()}),[]),Object(j.jsxs)("div",{className:"hero-slide",children:[Object(j.jsx)(g.a,{modules:[p.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:e.map(((e,t)=>Object(j.jsx)(_.a,{children:t=>{let{isActive:c}=t;return Object(j.jsx)(F,{item:e,className:"".concat(c?"active":"")})}},t)))}),e.map(((e,t)=>Object(j.jsx)(R,{item:e},t)))]})};c(76),c(77);var A=e=>{const t=e.item,c="/"+I[e.category]+"/"+t.id,s=L.w500Image(t.poster_path||t.backdrop_path);return Object(j.jsxs)(n.b,{to:c,children:[Object(j.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsx)(v,{children:Object(j.jsx)("i",{className:"bx bx-play"})})}),Object(j.jsx)("h3",{children:t.title||t.name})]})};var B=e=>{const[t,c]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{let t=null;const s={};if("similar"!==e.type)if(e.category===I.movie)t=await V.getMoviesList(e.type,{params:s});else t=await V.getTvList(e.type,{params:s});else t=await V.similar(e.category,e.id);c(t.results)})()}),[]),Object(j.jsx)("div",{className:"movie-list",children:Object(j.jsx)(g.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:t.map(((t,c)=>Object(j.jsx)(_.a,{children:Object(j.jsx)(A,{item:t,category:e.category})},c)))})})};var P=()=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(q,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Trending Movies"}),Object(j.jsx)(n.b,{to:"/movie",children:Object(j.jsx)(u,{className:"small",children:"View more"})})]}),Object(j.jsx)(B,{category:I.movie,type:E.popular})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Top Rated Movies"}),Object(j.jsx)(n.b,{to:"/movie",children:Object(j.jsx)(u,{className:"small",children:"View more"})})]}),Object(j.jsx)(B,{category:I.movie,type:E.top_rated})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Trending TV"}),Object(j.jsx)(n.b,{to:"/tv",children:Object(j.jsx)(u,{className:"small",children:"View more"})})]}),Object(j.jsx)(B,{category:I.tv,type:M.popular})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Top Rated TV"}),Object(j.jsx)(n.b,{to:"/tv",children:Object(j.jsx)(u,{className:"small",children:"View more"})})]}),Object(j.jsx)(B,{category:I.tv,type:M.top_rated})]})]})]});c(78);var H=e=>Object(j.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(m,")")},children:Object(j.jsx)("h2",{children:e.children})});c(79),c(80);var U=e=>Object(j.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?t=>e.onChange(t):null});const W=e=>{const t=Object(o.f)(),[c,a]=Object(s.useState)(e.keyword?e.keyword:""),i=Object(s.useCallback)((()=>{c.trim().length>0&&t.push("/".concat(I[e.category],"/search/").concat(c))}),[c,e.category,t]);return Object(s.useEffect)((()=>{const e=e=>{e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}),[c,i]),Object(j.jsxs)("div",{className:"movie-search",children:[Object(j.jsx)(U,{type:"text",placeholder:"Enter keyword",value:c,onChange:e=>a(e.target.value)}),Object(j.jsx)(v,{className:"small",onClick:i,children:"Search"})]})};var D=e=>{const[t,c]=Object(s.useState)([]),[a,i]=Object(s.useState)(1),[r,n]=Object(s.useState)(0),{keyword:l}=Object(o.h)();Object(s.useEffect)((()=>{(async()=>{let t=null;if(void 0===l){const c={};if(e.category===I.movie)t=await V.getMoviesList(E.upcoming,{params:c});else t=await V.getTvList(M.popular,{params:c})}else{const c={query:l};t=await V.search(e.category,{params:c})}c(t.results),n(t.total_pages)})()}),[e.category,l]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(W,{category:e.category,keyword:l})}),Object(j.jsx)("div",{className:"movie-grid",children:t.map(((t,c)=>Object(j.jsx)(A,{category:e.category,item:t},c)))}),a<r?Object(j.jsx)("div",{className:"movie-grid__loadmore",children:Object(j.jsx)(u,{className:"small",onClick:async()=>{let s=null;if(void 0===l){const t={page:a+1};if(e.category===I.movie)s=await V.getMoviesList(E.upcoming,{params:t});else s=await V.getTvList(M.popular,{params:t})}else{const t={page:a+1,query:l};s=await V.search(e.category,{params:t})}c([...t,...s.results]),i(a+1)},children:"Load more"})}):null]})};var J=()=>{const{category:e}=Object(o.h)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{children:e===I.movie?"Movies":"TV Series"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(D,{category:e})})})]})};c(81);var K=e=>{const{category:t}=Object(o.h)(),[c,a]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const c=await V.credits(t,e.id);a(c.cast.slice(0,5))})()}),[t,e.id]),Object(j.jsx)("div",{className:"casts",children:c.map(((e,t)=>Object(j.jsxs)("div",{className:"casts__item",children:[Object(j.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(L.w500Image(e.profile_path),")")}}),Object(j.jsx)("p",{className:"casts__item__name",children:e.name})]},t)))})};const z=e=>{const t=e.item,c=Object(s.useRef)(null);return Object(s.useEffect)((()=>{const e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(j.jsxs)("div",{className:"video",children:[Object(j.jsx)("div",{className:"video__title",children:Object(j.jsx)("h2",{children:t.name})}),Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})};var Q=e=>{const{category:t}=Object(o.h)(),[c,a]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const c=await V.getVideos(t,e.id);a(c.results.slice(0,5))})()}),[t,e.id]),Object(j.jsx)(j.Fragment,{children:c.map(((e,t)=>Object(j.jsx)(z,{item:e},t)))})};var Y=()=>{const{category:e,id:t}=Object(o.h)(),[c,a]=Object(s.useState)(null);return Object(s.useEffect)((()=>{(async()=>{const c=await V.detail(e,t,{params:{}});a(c),window.scrollTo(0,0)})()}),[e,t]),Object(j.jsx)(j.Fragment,{children:c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(L.originalImage(c.backdrop_path||c.poster_path),")")}}),Object(j.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(j.jsx)("div",{className:"movie-content__poster",children:Object(j.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(L.originalImage(c.poster_path||c.backdrop_path),")")}})}),Object(j.jsxs)("div",{className:"movie-content__info",children:[Object(j.jsx)("h1",{className:"title",children:c.title||c.name}),Object(j.jsx)("div",{className:"genres",children:c.genres&&c.genres.slice(0,5).map(((e,t)=>Object(j.jsx)("span",{className:"genres__item",children:e.name},t)))}),Object(j.jsx)("p",{className:"overview",children:c.overview}),Object(j.jsxs)("div",{className:"cast",children:[Object(j.jsx)("div",{className:"section__header",children:Object(j.jsx)("h2",{children:"Casts"})}),Object(j.jsx)(K,{id:c.id})]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(Q,{id:c.id})}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsx)("div",{className:"section__header mb-2",children:Object(j.jsx)("h2",{children:"Similar"})}),Object(j.jsx)(B,{category:e,type:"similar",id:c.id})]})]})]})})};var G=()=>Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/:category/search/:keyword",component:J}),Object(j.jsx)(o.a,{path:"/:category/:id",component:Y}),Object(j.jsx)(o.a,{path:"/:category",component:J}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:P})]});var X=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(o.a,{render:e=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{...e}),Object(j.jsx)(G,{}),Object(j.jsx)(h,{})]})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.074274d5.chunk.js.map