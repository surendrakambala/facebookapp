(this.webpackJsonpfacebook1=this.webpackJsonpfacebook1||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(24),i=c.n(n),o=(c(80),c(18)),r=(c(81),c(82),c(83),c(122)),j=(c(84),c(48)),l=c.n(j),d=c(49),b=c.n(d),u=c(50),h=c.n(u),m=c(3),O=Object(s.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(m.jsx)(O.Provider,{value:Object(s.useReducer)(t,c),children:a})},x=function(){return Object(s.useContext)(O)},v=c(28),f=v.a.initializeApp({apiKey:"AIzaSyAzRxIRh-VO8wmWSAuEFNxbvWP2vJUrMSU",authDomain:"facebook-de76e.firebaseapp.com",projectId:"facebook-de76e",storageBucket:"facebook-de76e.appspot.com",messagingSenderId:"601768740601",appId:"1:601768740601:web:37a42301f07f1775254428",measurementId:"G-R8MYC7KEH9"}).firestore(),g=v.a.auth(),_=new v.a.auth.GoogleAuthProvider,N=f;var w=function(){var e=x(),t=Object(o.a)(e,2),c=t[0].user,a=(t[1],Object(s.useState)("")),n=Object(o.a)(a,2),i=n[0],j=n[1],d=Object(s.useState)(""),u=Object(o.a)(d,2),O=u[0],p=u[1];return Object(m.jsxs)("div",{className:"messageSender",children:[Object(m.jsxs)("div",{className:"messageSender__top",children:[Object(m.jsx)(r.a,{src:c.photoURL}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},type:"text",className:"messageSender__input",placeholder:"What's on your mind, ".concat(c.displayName,"?")}),Object(m.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Image URL (Optional)"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),N.collection("posts").add({message:i,timestamp:v.a.firestore.FieldValue.serverTimestamp(),profilePic:c.photoURL,username:c.displayName,image:O}),j(""),p("")},type:"submit",children:"Hidden Button"})]})]}),Object(m.jsxs)("div",{className:"messageSender__bottom",children:[Object(m.jsxs)("div",{className:"messageSender__option",children:[Object(m.jsx)(l.a,{style:{color:"red"}}),Object(m.jsx)("h3",{children:"Live Video"})]}),Object(m.jsxs)("div",{className:"messageSender__option",children:[Object(m.jsx)(b.a,{style:{color:"green"}}),Object(m.jsx)("h3",{children:"Photo/Video"})]}),Object(m.jsxs)("div",{className:"messageSender__option",children:[Object(m.jsx)(h.a,{style:{color:"orange"}}),Object(m.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},S=(c(96),c(51)),y=c.n(S),k=c(52),I=c.n(k),F=c(54),C=c.n(F),R=c(53),z=c.n(R),P=c(119);var D=function(e){var t=e.profilePic,c=e.image,s=e.username,a=e.timestamp,n=e.message;return Object(m.jsxs)("div",{className:"post",children:[Object(m.jsxs)("div",{className:"post__top",children:[Object(m.jsx)(r.a,{src:t,className:"post__avatar"}),Object(m.jsxs)("div",{className:"post__topInfo",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("p",{children:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]})]}),Object(m.jsx)("div",{className:"post__bottom",children:Object(m.jsx)("p",{children:n})}),Object(m.jsx)("div",{className:"post__image",children:Object(m.jsx)("img",{src:c,alt:""})}),Object(m.jsxs)("div",{className:"post__options",children:[Object(m.jsxs)("div",{className:"post__option",children:[Object(m.jsx)(y.a,{}),Object(m.jsx)("p",{children:"Like"})]}),Object(m.jsxs)("div",{className:"post__option",children:[Object(m.jsx)(I.a,{}),Object(m.jsx)("p",{children:"Comment"})]}),Object(m.jsxs)("div",{className:"post__option",children:[Object(m.jsx)(z.a,{}),Object(m.jsx)("p",{children:"Share"})]}),Object(m.jsxs)("div",{className:"post__option",children:[Object(m.jsx)(C.a,{}),Object(m.jsx)(P.a,{})]})]})]})};c(97);var U=function(e){var t=e.image,c=e.profileSrc,s=e.title;return Object(m.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(m.jsx)(r.a,{className:"story__avatar",src:c}),Object(m.jsx)("h4",{children:s})]})},L=(c(98),"https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg");var A=function(){return Object(m.jsxs)("div",{className:"storyReel",children:[Object(m.jsx)(U,{image:L,profileSrc:"https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4",title:"Goon Deve3"}),Object(m.jsx)(U,{image:L,profileSrc:"https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4",title:"sai surendra"}),Object(m.jsx)(U,{image:L,profileSrc:"https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4",title:"Goon Deve3"}),Object(m.jsx)(U,{image:L,profileSrc:"https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4",title:"Goon Deve3"}),Object(m.jsx)(U,{image:L,profileSrc:"https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4",title:"Goon Deve3"})]})};var V=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){N.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"feed",children:[Object(m.jsx)(A,{}),Object(m.jsx)(w,{}),c.map((function(e){return Object(m.jsx)(D,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.data.id)}))]})},E=(c(99),c(55)),G=c.n(E),M=c(56),W=c.n(M),B=c(57),T=c.n(B),J=c(58),H=c.n(J),K=c(59),Y=c.n(K),$=c(60),q=c.n($),Q=c(120),X=c(61),Z=c.n(X),ee=c(62),te=c.n(ee),ce=c(63),se=c.n(ce),ae=c(64),ne=c.n(ae);var ie=function(){var e=x(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"header__left",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(m.jsxs)("div",{className:"header__input",children:[Object(m.jsx)(G.a,{}),Object(m.jsx)("input",{placeholder:"Search Facebook",type:"text"})]})]}),Object(m.jsxs)("div",{className:"header__center",children:[Object(m.jsx)("div",{className:"header__option header__option--active",children:Object(m.jsx)(W.a,{fontSize:"large"})}),Object(m.jsx)("div",{className:"header__option",children:Object(m.jsx)(T.a,{fontSize:"large"})}),Object(m.jsx)("div",{className:"header__option",children:Object(m.jsx)(H.a,{fontSize:"large"})}),Object(m.jsx)("div",{className:"header__option",children:Object(m.jsx)(Y.a,{fontSize:"large"})}),Object(m.jsx)("div",{className:"header__option",children:Object(m.jsx)(q.a,{fontSize:"large"})})]}),Object(m.jsxs)("div",{className:"header__right",children:[Object(m.jsxs)("div",{className:"header__info",children:[Object(m.jsx)(r.a,{src:c.photoURL}),Object(m.jsx)("h4",{children:c.displayName})]}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(Z.a,{})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(te.a,{})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(se.a,{})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(ne.a,{})})]})]})},oe=c(121),re=(c(100),c(41)),je="SET_USER",le=function(e,t){switch(console.log(t),t.type){case je:return Object(re.a)(Object(re.a)({},e),{},{user:t.user});default:return e}};var de=function(){var e=x(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsxs)("div",{className:"login__logo",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(m.jsx)("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})]}),Object(m.jsx)(oe.a,{type:"submit",onClick:function(){g.signInWithPopup(_).then((function(e){c({type:je,user:e.user}),console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"})]})};c(101);var be=function(e){var t=e.src,c=e.Icon,s=e.title;return Object(m.jsxs)("div",{className:"sidebarRow",children:[t&&Object(m.jsx)(r.a,{src:t}),c&&Object(m.jsx)(c,{}),Object(m.jsx)("h4",{children:s})]})},ue=(c(102),c(65)),he=c.n(ue),me=c(66),Oe=c.n(me),pe=c(67),xe=c.n(pe),ve=c(68),fe=c.n(ve),ge=c(69),_e=c.n(ge),Ne=c(70),we=c.n(Ne);var Se=function(){var e=x(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsx)(be,{src:c.photoURL,title:c.displayName}),Object(m.jsx)(be,{Icon:he.a,title:"COVID-19 Information Center"}),Object(m.jsx)(be,{Icon:Oe.a,title:"Pages"}),Object(m.jsx)(be,{Icon:xe.a,title:"Friends"}),Object(m.jsx)(be,{Icon:fe.a,title:"Messanger"}),Object(m.jsx)(be,{Icon:_e.a,title:"Marketplace"}),Object(m.jsx)(be,{Icon:we.a,title:"Videos"}),Object(m.jsx)(be,{Icon:P.a,title:"More"})]})};c(103);var ye=function(){return Object(m.jsx)("div",{className:"widgets",children:Object(m.jsx)("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingTreeFoundation&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})})};var ke=function(){var e=x(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(m.jsx)("div",{className:"app",children:c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ie,{}),Object(m.jsxs)("div",{className:"app__body",children:[Object(m.jsx)(Se,{}),Object(m.jsx)(V,{}),Object(m.jsx)(ye,{})]})]}):Object(m.jsx)(de,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{initialState:{user:null},reducer:le,children:Object(m.jsx)(ke,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.0a2958a3.chunk.js.map