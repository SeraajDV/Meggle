(this.webpackJsonpmeggle=this.webpackJsonpmeggle||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/logo.c9b3f1a8.png"},51:function(e,a,t){e.exports=t(68)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),s=(t(56),t(57),t(58),t(5)),o=t(40),i=t.n(o),m=t(82),u=t(24),d=t.n(u),h=t(35),E=t(18),v=(t(59),t(26)),g=t.n(v),_=t(39),p=t.n(_),f=t(81),b=t(3),N=Object(n.createContext)(),P=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(N.Provider,{value:Object(n.useReducer)(a,t)},r)},j=function(){return Object(n.useContext)(N)},k=t(47),w="SET_SEARCH_TERM",S=function(e,a){switch(console.log(a),a.type){case w:return Object(k.a)({},N,{term:a.term});default:return e}};var y=function(e){var a=e.hideButtons,t=void 0!==a&&a,r=j(),l=Object(E.a)(r,2);Object(h.a)(l[0]);var s=l[1],o=Object(n.useState)(""),i=Object(E.a)(o,2),m=i[0],u=i[1],d=Object(b.f)(),v=function(e){e.preventDefault(),console.log("You hit the search button >> ",m),s({type:w,term:m}),d.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(g.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement(p.a,null)),t?c.a.createElement("div",{className:"search__buttons"},c.a.createElement(f.a,{className:"search__buttonsHidden",type:"submit",onClick:v,variant:"outlined"},"Google Search"),c.a.createElement(f.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search__buttons"},c.a.createElement(f.a,{type:"submit",onClick:v,variant:"outlined"},"Google Search"),c.a.createElement(f.a,{variant:"outlined"},"I'm Feeling Lucky")))};var O=function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(s.b,{to:"/about"},"About"),c.a.createElement(s.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(s.b,{to:"/mail"},"Mail"),c.a.createElement(s.b,{to:"/images"},"Images"),c.a.createElement(i.a,null),c.a.createElement(m.a,null))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:d.a,alt:"Meggle"}),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(y,null))))},I=(t(66),t(30)),C=t.n(I),M=t(41),A=function(e){var a=Object(n.useState)(null),t=Object(E.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(M.a)(C.a.mark((function a(){return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyAi-oAXW1MGDkp6QzdTDvWjU970keuvWqY","&cx=").concat("6af553d30bc6bc89e","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){r(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},T=t(42),x=t.n(T),L=t(43),R=t.n(L),B=t(44),W=t.n(B),H=t(45),D=t.n(H),G=t(46),q=t.n(G);var z=function(){var e=j(),a=Object(E.a)(e,2),t=a[0].term,n=(a[1],A(t).data);return console.log(n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"searchPage__logo",src:d.a,alt:"Meggle"})),c.a.createElement("div",{className:"searchPage__headerBody"},c.a.createElement(y,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage__options"},c.a.createElement("div",{className:"searchPage__optionsLeft"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(g.a,null),c.a.createElement(s.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(x.a,null),c.a.createElement(s.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(R.a,null),c.a.createElement(s.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(W.a,null),c.a.createElement(s.b,{to:"/shopping"},"Shopping")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(D.a,null),c.a.createElement(s.b,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(q.a,null),c.a.createElement(s.b,{to:"/more"},"More"))),c.a.createElement("div",{className:"searchPage__optionsRight"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(s.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(s.b,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"searchPage__results"},c.a.createElement("p",{className:"searchPage__resultCounter"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results (",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds) for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,r,l,s;return c.a.createElement("div",{className:"searchPage__result"},c.a.createElement("a",{className:"searchPage__resultLink",href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(r=n.cse_image[0])||void 0===r?void 0:r.src)&&c.a.createElement("img",{className:"searchPage__resultImage",src:null===(l=e.pagemap)||void 0===l||null===(s=l.cse_image[0])||void 0===s?void 0:s.src}),e.displayLink," \u25bc"),c.a.createElement("a",{href:e.link,className:"searchPage__resultTitle"},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))}))))};var F=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(s.a,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/search"},c.a.createElement(z,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,{initialState:{term:null},reducer:S},c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.58a169c4.chunk.js.map