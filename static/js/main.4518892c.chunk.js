(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(32),i=n.n(s),o=n(9),u=n(22),l=n(6),j=n(10),b=n.n(j),d=n(17),p=n(12),f=n(23),O=n(24);n(45),n(51),n(52);O.a.initializeApp({apiKey:"AIzaSyBbsokPdNGL-FtzM3oSjXIKeC8Z3yP927E",authDomain:"nwitter-86944.firebaseapp.com",databaseURL:"https://nwitter-1bba1.firebaseio.com",projectId:"nwitter-86944",storageBucket:"nwitter-86944.appspot.com",messagingSenderId:"549517775178",appId:"1:549517775178:web:21d0e19fe51e5d892db1b3"});var h=O.a,m=O.a.auth(),x=O.a.firestore(),v=O.a.storage(),g=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(r.useState)(!0),p=Object(o.a)(j,2),f=p[0],O=p[1],h=Object(r.useState)(""),x=Object(o.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&l(a)},w=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:y}),Object(a.jsx)("input",{type:"submit",className:"authInput authSubmit",value:f?"Create Account":"Sign In"}),v&&Object(a.jsx)("span",{className:"authError",children:v})]}),Object(a.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:f?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(g,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(p.a,{icon:f.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(p.a,{icon:f.a})]})]})]})},w=n(34),N=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)(t.text),j=Object(o.a)(l,2),f=j[0],O=j[1],h=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,x.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},g=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("nweets/".concat(t.id)).update({text:f});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:f,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;O(t)},className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl}),n&&Object(a.jsxs)("div",{class:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(p.a,{icon:N.d})}),Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(p.a,{icon:N.a})})]})]})})},k=n(54),I=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(r.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],O=function(){var e=Object(d.a)(b.a.mark((function e(n){var a,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===j){e.next=12;break}return r=v.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,r.putString(j,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,x.collection("nweets").add(o);case 15:i(""),f("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(p.a,{icon:N.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;f(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return f("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(p.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){x.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(I,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,c=Object(l.f)(),s=Object(r.useState)(n.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],p=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),c.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(a.jsxs)(u.a,{children:[n&&Object(a.jsx)(F,{userObj:r}),Object(a.jsx)(l.c,{children:n?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(C,{userObj:r})}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",children:Object(a.jsx)(A,{userObj:r,refreshUser:t})})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})};var P=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){m.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(B,{refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};n(49);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.4518892c.chunk.js.map