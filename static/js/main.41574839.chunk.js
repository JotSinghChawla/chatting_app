(this.webpackJsonpchatting_app=this.webpackJsonpchatting_app||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),i=n(14),a=n.n(i),s=(n(23),n(13)),o=n.n(s),u=n(15),j=n(10),d=(n(25),n(9)),p=(n(31),n(27),n(17)),l=n(18),h={apiKey:"AIzaSyAawO7YRgRL45SmK8MjKtK4u65ONAYV0M4",authDomain:"chatting-app-12990.firebaseapp.com",projectId:"chatting-app-12990",storageBucket:"chatting-app-12990.appspot.com",messagingSenderId:"112567462662",appId:"1:112567462662:web:cb70df137e23e02009cc87",measurementId:"G-9PLQVRNLFZ"},b=n.p+"static/media/demo.b8a96309.jpg",m=n(2);d.a.initializeApp(h);var g=d.a.auth(),O=d.a.firestore();function f(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(){var e=new d.a.auth.GoogleAuthProvider;g.signInWithPopup(e)},className:"sign-in",children:"Sign in with Google"}),Object(m.jsx)("p",{style:{margin:"15px auto"},children:"Do not violate the community guidelines or Actions will be taken !"})]})}function x(){return g.currentUser&&Object(m.jsx)("button",{className:"sign-out",onClick:function(){return g.signOut()},children:"Sign out"})}function v(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),r=Object(l.a)(n,{idField:"id"}),i=Object(j.a)(r,1)[0],a=Object(c.useState)(""),s=Object(j.a)(a,2),p=s[0],h=s[1],b=function(){var n=Object(u.a)(o.a.mark((function n(c){var r,i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),r=g.currentUser,i=r.uid,a=r.photoURL,n.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:i,photoURL:a});case 4:h(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"messageScreen",children:[i&&i.map((function(e){return Object(m.jsx)(A,{message:e},e.id)})),Object(m.jsx)("div",{ref:e})]})}),Object(m.jsxs)("form",{onSubmit:b,children:[Object(m.jsx)("input",{value:p,onChange:function(e){return h(e.target.value)},placeholder:"Enter your text here"}),Object(m.jsx)("button",{type:"submit",children:"Send"})]})]})}function A(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,i=c===g.currentUser.uid?"sent":"received";return Object(m.jsxs)("div",{className:"message ".concat(i," "),children:[Object(m.jsx)("img",{src:t.photoURL?r:b,alt:"profile"}),Object(m.jsx)("p",{children:n})]})}var S=function(){var e=Object(p.a)(g),t=Object(j.a)(e,1)[0];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h3",{style:{fontSize:"4vw"},children:"\ud83d\udcac CHATTING APP"}),Object(m.jsx)(x,{})]}),Object(m.jsx)("section",{children:t?Object(m.jsx)(v,{}):Object(m.jsx)(f,{})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.41574839.chunk.js.map