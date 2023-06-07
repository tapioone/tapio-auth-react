(this["webpackJsonptapio-auth-react"]=this["webpackJsonptapio-auth-react"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),o=c(25),i=c.n(o),s=c(35),r=c(15),l={scopes:["openid","offline_access","https://tapiousers.onmicrosoft.com/React-PKCE-SampleApp/Read"],extraQueryParameters:{theme:"dark"}},h=(c(31),c(16)),j=c(2),u=c(17),d=c.p+"static/media/logo.30091f21.svg",p=(c(32),c(8)),b=function(){var e=Object(r.c)().instance;return Object(p.jsx)("button",{className:"button",onClick:function(){return function(e){e.loginRedirect(l).catch((function(e){console.error(e)}))}(e)},children:"Login"})},f=function(){var e=Object(r.c)().instance;return Object(p.jsx)("button",{className:"button",onClick:function(){return function(e){e.logoutRedirect().catch((function(e){console.error(e)}))}(e)},children:"Logout"})},m=c(14),O=function(){var e=Object(r.c)(),t=e.instance,c=e.accounts,a=Object(n.useState)(null),o=Object(h.a)(a,2),i=o[0],s=o[1];return i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"App-access-token-container",children:i}),Object(p.jsx)("button",{style:{padding:"0.5rem"},className:"link align-self-center",onClick:function(){return navigator.clipboard.writeText(i)},children:"Copy token to clipboard"}),Object(p.jsx)("a",{style:{padding:"0.5rem"},className:"link align-self-center",href:"https://jwt.ms/#access_token="+i,target:"_blank",rel:"noreferrer",children:"Check token at jwt.ms"})]}):Object(p.jsx)("button",{className:"button align-self-center",onClick:function(){var e=Object(m.a)(Object(m.a)({},l),{},{account:c[0]});t.acquireTokenSilent(e).then((function(e){e.accessToken?s(e.accessToken):alert("Could not receive an Access Token. Please check your scope.")})).catch((function(c){t.acquireTokenRedirect(e).then((function(e){s(e.accessToken)}))}))},children:"Request Access Token"})},g=function(){var e,t=Object(r.b)(),c=Object(r.c)(),a=c.accounts,o=c.instance,i=c.inProgress,s=Object(n.useState)(!1),m=Object(h.a)(s,2),g=m[0],x=m[1];return Object(n.useEffect)((function(){i!==j.k.None||t||g||o.ssoSilent(l).catch((function(e){u.a})).finally((function(){return x(!0)}))}),[i,t,o,g]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(p.jsxs)("div",{className:"App-nav",children:[!t&&g&&Object(p.jsx)(b,{}),t&&Object(p.jsx)(f,{}),Object(p.jsx)("a",{style:{marginLeft:"1rem"},href:"https://github.com/tapioone/tapio-auth-react",children:Object(p.jsx)("svg",{style:{display:"flex",alignSelf:"center"},width:"24",version:"1.1",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("g",{fill:"none",fillRule:"evenodd",strokeWidth:"1",children:Object(p.jsx)("g",{transform:"translate(-136 -331)",fill:"#FFFFFE",children:Object(p.jsx)("path",{d:"m152.55 331.19c-8.994 0-16.288 7.293-16.288 16.29 0 7.197 4.667 13.302 11.14 15.456 0.815 0.15 1.112-0.353 1.112-0.785 0-0.387-0.014-1.411-0.022-2.77-4.531 0.984-5.487-2.184-5.487-2.184-0.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01 0.112-0.99 0.112-0.99 1.635 0.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353 0.148-1.052 0.569-1.77 1.034-2.177-3.617-0.411-7.42-1.809-7.42-8.051 0-1.778 0.635-3.233 1.677-4.371-0.168-0.412-0.727-2.069 0.16-4.311 0 0 1.367-0.438 4.479 1.67 1.299-0.362 2.693-0.542 4.078-0.549 1.384 7e-3 2.777 0.187 4.078 0.549 3.11-2.108 4.475-1.67 4.475-1.67 0.889 2.242 0.33 3.899 0.163 4.311 1.044 1.138 1.674 2.593 1.674 4.371 0 6.258-3.809 7.635-7.437 8.038 0.584 0.503 1.105 1.497 1.105 3.016 0 2.178-0.02 3.935-0.02 4.469 0 0.436 0.294 0.943 1.12 0.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29"})})})})})]})]}),Object(p.jsxs)("main",{className:"App-content",children:[!t&&g&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"tapio Auth: Sample SPA "}),Object(p.jsxs)("p",{children:["This is a sample App for authentication against the tapio B2C for the tapio partners with the ",Object(p.jsx)("strong",{children:"Authorization code flow with PKCE"}),". You can log in here with your tapio account. For more information regarding the development please check the ",Object(p.jsx)("a",{href:"https://github.com/tapioone/tapio-auth-react",target:"_blank",rel:"noreferrer",children:"github repo"})," and the ",Object(p.jsx)("a",{href:"https://developer.tapio.one/general/authentication",target:"_blank",rel:"noreferrer",children:"tapio developer portal"}),"."]})]}),Object(p.jsx)("h3",{children:t&&"You are authenticated."}),a[0]&&Object(p.jsxs)("div",{className:"App-profile",children:[Object(p.jsx)("strong",{children:"email: "}),null===(e=a[0].idTokenClaims)||void 0===e?void 0:e.email]}),t&&Object(p.jsxs)("div",{className:"App-access-token",children:[Object(p.jsx)("h3",{children:"Aquire Access Token Silent"}),Object(p.jsx)(O,{})]})]})]})},x=new s.a({auth:{clientId:"e35cbc3c-7055-43a2-b978-d8d24a040140",authority:"https://login.mytapio.one/32896ed7-d559-401b-85cf-167143d61be0/B2C_1A_TAPIO_SIGNIN/",redirectUri:"https://tapioone.github.io/tapio-auth-react/",knownAuthorities:["https://login.mytapio.one"]},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}});x.handleRedirectPromise(),i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(r.a,{instance:x,children:Object(p.jsx)(g,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c9031d64.chunk.js.map