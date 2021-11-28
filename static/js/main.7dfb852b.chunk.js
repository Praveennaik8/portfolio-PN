(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),a=n(1),s=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="",j="PN",h="Praveen Naik",d="Full stack developer",b="Motivated Programmer with exceptional background spent in Competitive Programming and Web development. Quickly mastering new software technologies. Logical and professional with excellent problem-solving skills and good communication skills.",u="https://drive.google.com/file/d/1A922TOhknkUyxILr2RU7QWuhRdXnkFB7/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/praveen-naik-b51102173",github:"https://github.com/Praveennaik8"},O=[{name:"Smart Crawl",description:"Built a domain-specific crawler that learns the web with time by storing the context of the pages visited. Reduced the average crawling time by more than 20 times. The system could retrieve web pages related to user queries in the given domain.",stack:["Python","BeautifulSoup","NLP"],livePreview:"https://drive.google.com/file/d/1x4SNWdpFVRUQT2vD4ifmibGhYxkOvP1K/view?usp=sharing"},{name:"DreamTeam Fantasy website",description:"Led a team of four for building a fantasy game website using MEAN stack. This web application lets users create dream team of different kind of sports with secure login and attractive user interface.",stack:["MongoDB","Express","Angular","Node.js"],sourceCode:"https://github.com/Praveennaik8/Dream-Team-clone",livePreview:"https://praveennaik8.github.io/Frontend/"},{name:"Maze Runner Game",description:"Developed a desktop maze game which has multiple levels in increasing order of difficulty using Java. Built a countdown timer to maintain difficulty for each level. Automated the fastest route finding using Dijkstra\u2019s Algorithm.",stack:["Java","Java-swing","Dijkstras algorithm"],sourceCode:"https://github.com/Praveennaik8/Maze-game-Java-with-path-finding"}],f=["HTML","CSS","JavaScript","TypeScript","React","Django","Angular","MongoDb","Rdbms","Python","C/C++","Java","Javascript","AWS"],x="praveennaik8887@gmail.com",p=n(14),v=n.n(p),g=n(12),k=n.n(g),N=n(16),_=n.n(N),w=n(15),y=n.n(w),C=(n(26),function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(i.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(y.a,{}):Object(s.jsx)(_.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),S=n(10),T=n.n(S),D=n(17),E=n.n(D),J=(n(33),function(){var e=h,t=d,n=b,c=u,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(E.a,{})})]})]})]})}),A=n(7),L=n.n(A),M=n(18),R=n.n(M),B=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})}),F=(n(36),function(){return O.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(s.jsx)(B,{project:e},L()())}))})]}):null}),z=(n(37),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),I=n(19),W=n.n(I),G=(n(38),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(W.a,{fontSize:"large"})})}):null}),Q=(n(39),function(){return x?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(x),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:" ",className:"link footer__link",children:"Graduating in 2022."})})}),H=(n(41),function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(F,{}),Object(s.jsx)(z,{}),Object(s.jsx)(Q,{})]}),Object(s.jsx)(G,{}),Object(s.jsx)(U,{})]})});n(42);Object(c.render)(Object(s.jsx)(r,{children:Object(s.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7dfb852b.chunk.js.map