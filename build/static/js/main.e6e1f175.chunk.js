(this.webpackJsonpActivity=this.webpackJsonpActivity||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(30),i=a.n(n),r=(a(35),a(12)),o=a(2),l=(a(36),a(37),a(9)),j=a(5),d=a(3),b=(a(38),a(39),a(0));var u=function(e){function t(e){return(e<10?"0":"")+e}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"acitivity-right-timer-time",children:[Object(b.jsx)("span",{children:"TIMER"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:t(Math.floor(e.seconds/3600))})," :",Object(b.jsx)("div",{children:t(Math.floor(e.seconds/60)%60)})," :",Object(b.jsx)("div",{children:t(e.seconds%60)})]})]}),Object(b.jsxs)("div",{className:"startStop",children:[Object(b.jsx)("button",{className:"button button-primary button-primary-".concat(e.isActive?"active":"inactive"),onClick:function(){e.setIsActive(!e.isActive)},children:e.isActive?"PAUSE":"START"}),Object(b.jsx)("button",{className:"button",onClick:function(){e.setSeconds(0),e.setIsActive(!1)},children:"RESET"})]})]})},m=a(6),O=a.n(m),h=a.p+"static/media/running.b6a1aa7e.png",p=a.p+"static/media/swimming.c8d2f0e5.png",x=a.p+"static/media/walk.68718d1a.png",f=a.p+"static/media/weight.cef99b8f.png",v=a.p+"static/media/bike.6ba748c7.png",g=a.p+"static/media/batminton.6253b6c2.png",N=a.p+"static/media/jump.92bf3b97.png";var y=function(){var e=[{label:"Running",actSrc:h},{label:"Batminton",actSrc:g},{label:"Bike",actSrc:v},{label:"Jumping",actSrc:N},{label:"Swimming",actSrc:p},{label:"Walking",actSrc:x},{label:"Weight",actSrc:f}],t=Object(c.useState)(0),a=Object(d.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(0),r=Object(d.a)(i,2),o=r[0],m=r[1],y=Object(c.useState)(!1),w=Object(d.a)(y,2),S=w[0],C=w[1],E=Object(c.useState)({activityName:"",timestamp:"",hr:0,mn:0,calories:0,description:"",duration:0}),I=Object(d.a)(E,2),A=I[0],M=I[1];function T(e){var t=e.target,a=t.name,c=t.value;t.type;M((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},a,c))}))}return Object(c.useEffect)((function(){var e=null;return S?e=setInterval((function(){m((function(e){return e+1}))}),1e3):S||0===o||clearInterval(e),function(){return clearInterval(e)}}),[S,o]),Object(b.jsx)("div",{className:"box-right",children:Object(b.jsxs)("div",{className:"mainActivityPage",children:[Object(b.jsxs)("div",{className:"duration",children:[Object(b.jsx)(u,{seconds:o,setIsActive:C,isActive:S,setSeconds:m}),Object(b.jsxs)("div",{className:"divTree",children:[Object(b.jsxs)("section",{className:"slider",children:[Object(b.jsx)("img",{src:"../../Images/arrow-left-color.png",className:"s-select left-arrow",onClick:function(){n(0===s?e.length-1:s-1)},alt:"left"}),Object(b.jsx)("img",{src:e[s].actSrc,alt:"no internet",className:"image"}),Object(b.jsx)("img",{src:"../../Images/arrow-right-color.png",className:"s-select right-arrow",onClick:function(){n(s===e.length-1?0:s+1)},alt:"right"})]}),Object(b.jsx)("div",{className:"button-record",children:Object(b.jsx)("button",{className:"button",onClick:function(){Math.floor(o/3600),Math.floor(o/60);var t=new Date,a=function(e){var a=t.toLocaleDateString().split("/");return[a[2],(a[0]<10?"0":"")+a[0],(a[1]<10?"0":"")+a[1]].join("-")}();console.log(a),M(Object(j.a)(Object(j.a)({},A),{},{activityName:e[s].label,timestamp:a})),m(0),C(!1)},children:"RECORD"})})]})]}),Object(b.jsxs)("div",{className:"activityForm",children:[Object(b.jsx)("h2",{children:"Your Activity "}),Object(b.jsx)("form",{className:"typeInput",onSubmit:function(e){e.preventDefault(),console.log(A)},children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"form-actType",children:[Object(b.jsx)("label",{children:"Activity\xa0\xa0"}),Object(b.jsx)("input",{type:"text",value:A.activityName,name:"activityName",onChange:T,required:!0})]}),Object(b.jsxs)("div",{className:"form-date",children:[Object(b.jsx)("label",{children:"Date\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(b.jsx)("input",{type:"date",value:A.timestamp,name:"date",onChange:T,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{id:"duration",children:"Duration"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",value:A.hr,name:"hr",onChange:T,min:0,max:24,required:!0}),Object(b.jsx)("label",{children:"\xa0Hour\xa0\xa0\xa0\xa0"}),Object(b.jsx)("input",{type:"number",value:A.mn,name:"mn",onChange:T,min:0,max:59,required:!0}),Object(b.jsx)("label",{children:"\xa0Minute"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Burnt\xa0\xa0"}),Object(b.jsx)("input",{type:"number",value:A.calories,name:"calories",onChange:T,min:0,max:9999}),Object(b.jsx)("label",{children:"\xa0\xa0Calorie(s)"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Description: "})," ",Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{name:"description",cols:"20",rows:"3",value:A.description,onChange:T})]}),Object(b.jsx)("button",{type:"submit",onClick:function(e){A.duration=Number(60*A.hr)+Number(A.mn),O()({method:"POST",data:{activityName:A.activityName,timestamp:A.timestamp,duration:A.duration,calories:A.calories,description:A.description},withCredentials:!0,url:"http://localhost:4000/users/me/records"}).then((function(e){console.log(e),M({activityName:"",timestamp:"",hr:0,mn:0,calories:0,description:"",duration:0})}))},className:"button",children:"Submit"})]})})]})]})})},w=(a(59),a(20));var S=function(e){var t=e.id,a=e.actName,c=e.date,s=e.duration,n=e.calories,i=e.setModalEditOpen,r=e.modalEditOpen,o=e.setModelID;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"data-activity",children:[Object(b.jsx)("div",{className:"data-activity-user",children:c.slice(0,10)}),Object(b.jsx)("div",{className:"data-activity-user",children:a}),Object(b.jsxs)("div",{className:"data-activity-user",children:[s," min"]}),Object(b.jsxs)("div",{className:"data-activity-user",children:[n," cal"]}),Object(b.jsx)("div",{className:"data-activity-user",children:Object(b.jsx)("button",{style:{marginTop:0},className:"iconModal",onClick:function(){i(!r),o(t)},children:Object(b.jsx)(w.a,{className:"colorFontAS"})})})]},t)})},C=a(14),E=a.n(C),I=a(16);a(63);var A=function(e){var t=Object(c.useState)(),a=Object(d.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(!1),r=Object(d.a)(i,2),o=r[0],u=r[1],m=Object(c.useState)({actTypes:"",date:"",duration:0,cal:0,des:""}),h=Object(d.a)(m,2),p=h[0],x=h[1],f=e.modelID,v=function(e){x(Object(j.a)(Object(j.a)({},p),{},Object(l.a)({},e.target.name,e.target.value)))};function g(){return(g=Object(I.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O()({method:"DELETE",withCredentials:!0,url:"http://localhost:4000/users/me/records/".concat(f)});case 2:e.setModalEditOpen(!1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=!0;return O()({method:"GET",withCredentials:!0,url:"http://localhost:4000/users/me/records/".concat(f)}).then((function(t){e&&n(t.data)})),function(){e=!1}}),[f]),Object(b.jsx)("div",{className:"model-container",children:Object(b.jsxs)("div",{className:"model-content",children:[Object(b.jsx)("strong",{children:"Your Record"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Activity Name:",s&&(o?Object(b.jsx)("input",{type:"text",placeholder:"Enter Your Activity Name",name:"actTypes",value:p.actTypes,onChange:v}):Object(b.jsx)("div",{children:s[0].activityName})),Object(b.jsx)("br",{}),"Date:",s&&(o?Object(b.jsx)("input",{type:"date",placeholder:"Enter Date",name:"date",value:p.date,onChange:v}):Object(b.jsx)("div",{children:s[0].timestamp.slice(0,10)})),Object(b.jsx)("br",{}),"duration:",s&&(o?Object(b.jsx)("input",{type:"number",placeholder:"Enter your activity duration",name:"duration",value:p.duration,onChange:v}):Object(b.jsxs)("div",{children:[s[0].duration," min"]})),Object(b.jsx)("br",{}),"Calories:",s&&(o?Object(b.jsx)("input",{type:"number",placeholder:"Enter your activity calories",name:"cal",value:p.cal,onChange:v}):Object(b.jsxs)("div",{children:[s[0].calories," cal"]})),Object(b.jsx)("br",{}),"Description:",s&&(o?Object(b.jsx)("input",{type:"text",placeholder:"Enter your activity description",name:"des",value:p.des,onChange:v}):Object(b.jsx)("div",{children:s[0].description})),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"model-content-btn",children:[o?Object(b.jsx)("button",{className:"iconModal",onClick:function(){O()({method:"PUT",data:{activityName:p.actTypes,timestamp:new Date(p.date),duration:parseInt(p.duration),calories:parseInt(p.cal),description:p.des},withCredentials:!0,url:"http://localhost:4000/users/me/records/".concat(f)}).then((function(e){})),e.setModalEditOpen(!1)},children:"Save"}):Object(b.jsx)("button",{className:"iconModal modal-button",onClick:function(){x({actTypes:s[0].activityName,date:s[0].timestamp.slice(0,10),duration:s[0].duration,cal:s[0].calories,des:s[0].description}),u(!o)},children:"Edit"}),Object(b.jsx)("button",{className:"iconModal modal-button",onClick:function(e){return g.apply(this,arguments)},children:"Delete"}),Object(b.jsx)("button",{className:"iconModal modal-button",onClick:function(){return e.setModalEditOpen(!1)},children:"Go Back"})]})]})})};var M=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(!1),r=Object(d.a)(i,2),o=r[0],l=r[1],j=Object(c.useState)(),u=Object(d.a)(j,2),m=u[0],h=u[1];return Object(c.useEffect)((function(){var e=!0;return O()({method:"GET",withCredentials:!0,url:"http://localhost:4000/users/me/records"}).then((function(t){e&&n(t.data)})),function(){e=!1}}),[s]),s.reduce((function(e,t){return e+t.duration}),0),Object(b.jsx)("div",{className:"record-container",children:o?Object(b.jsx)(A,{setModalEditOpen:l,modelID:m}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"top-plus"}),Object(b.jsxs)("div",{className:"data-activity",children:[Object(b.jsx)("div",{className:"data-activity-user",children:Object(b.jsx)("strong",{children:"DATE"})}),Object(b.jsx)("div",{className:"data-activity-user",children:Object(b.jsx)("strong",{children:"ACTIVITY"})}),Object(b.jsx)("div",{className:"data-activity-user",children:Object(b.jsx)("strong",{children:"DURATION"})}),Object(b.jsx)("div",{className:"data-activity-user",children:Object(b.jsx)("strong",{children:"CALORIES"})}),Object(b.jsx)("div",{className:"data-activity-user"})]}),s.map((function(e){return Object(b.jsx)(S,{id:e._id,actName:e.activityName,date:e.timestamp,duration:e.duration,calories:e.calories,description:e.description,setModalEditOpen:l,modalEditOpen:o,setModelID:h},e._id)}))]})})};a(64),a(65);var T=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({displayName:"",aboutMe:"",favorite:"",caloriesGoal:"",durationGoal:""}),i=Object(d.a)(n,2),r=i[0],u=i[1],m=Object(c.useState)(null),h=Object(d.a)(m,2),p=h[0];function x(e){var t=e.target,a=t.name,c=t.value;t.type;u((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},a,c))}))}function f(){O()({method:"PUT",data:{favorite:r.favorite,aboutMe:r.aboutMe,displayName:r.displayName},withCredentials:!0,url:"http://localhost:4000/users/edit"}).then((function(e){console.log(e)}))}h[1];var v=Object(o.f)();return Object(c.useEffect)((function(){O()({method:"GET",withCredentials:!0,url:"http://localhost:4000/users/me"}).then((function(e){u(e.data)}))}),[p]),Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"../../Images/PROFILE.png",alt:"profile-pic",className:"pro-pic"})}),a?Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r)},children:[Object(b.jsxs)("div",{className:"data-profile-edit",children:[Object(b.jsx)("input",{type:"text",className:"editProfileUserName",placeholder:"Profile Name",name:"displayName",value:r.displayName,onChange:x,autoComplete:"off"}),Object(b.jsx)("div",{className:"data-profile-user",children:Object(b.jsx)("textarea",{type:"text",className:"editProfile",placeholder:"Fun Fact",name:"aboutMe",value:r.aboutMe,onChange:x})}),Object(b.jsx)("div",{className:"data-profile-user",children:Object(b.jsx)("textarea",{type:"text",className:"editProfile",placeholder:"Favorite Sport",name:"favorite",value:r.favorite,onChange:x})})]}),Object(b.jsx)("button",{className:"edit-profile",onClick:f,children:"Save"})]}):Object(b.jsxs)("div",{className:"data-profile",children:[r.displayName,Object(b.jsxs)("div",{className:"data-profile-user",children:[r.aboutMe,Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"data-profile-user",children:[r.favorite,Object(b.jsx)("br",{})]})]}),Object(b.jsx)("button",{type:"button",className:"edit-profile",onClick:function(e){s((function(e){return!e}))},children:a?"Done":"Edit"}),Object(b.jsx)("button",{type:"button",onClick:function(){console.log(r),O()({method:"DELETE",withCredentials:!0,url:"http://localhost:4000/users/logout"}).then((function(e){console.log(e)})),v("/login")},className:"edit-profile",children:"Logout"})]})};var k=function(){return Object(b.jsxs)("div",{className:"record-box-main",children:[Object(b.jsxs)("div",{className:"userAndAddTop",children:[Object(b.jsx)(T,{}),Object(b.jsx)(y,{})]}),Object(b.jsx)(M,{})]})};var D=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useState)({username:"",password:""}),s=Object(d.a)(a,2),n=s[0],i=s[1],u=Object(o.f)(),m=Object(c.useState)(""),h=Object(d.a)(m,2),p=h[0],x=h[1],f=Object(c.useState)(!1),v=Object(d.a)(f,2),g=v[0],N=v[1];function y(e){var t=e.target,a=t.name,c=t.value;t.type;i((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},a,c))}))}Object(c.useEffect)((function(){e.current.focus()}),[]),Object(c.useEffect)((function(){x("")}),[n.username,n.password]);var w=function(){var e=Object(I.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(n),O()({method:"POST",data:{username:n.username,password:n.password},withCredentials:!0,url:"http://localhost:4000/users/login"}).then((function(e){console.log(e.data),"Successfully Authenticated"===e.data&&(N(!0),u("/home"))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"registrationForm",children:g?Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"You are logged in!"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:Object(b.jsx)(r.b,{to:"/",children:"Go to Home"})})]}):Object(b.jsxs)("section",{className:"section-registration",children:[Object(b.jsx)("p",{ref:t,className:p?"errMsg":"offscreen","aria-live":"assertive",children:p}),Object(b.jsx)("h1",{className:"signIn",children:Object(b.jsx)("b",{children:"SIGN-IN"})}),Object(b.jsxs)("form",{onSubmit:w,className:"form-registration",children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(b.jsx)("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:y,value:n.username,name:"username",required:!0}),Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{type:"password",id:"password",onChange:y,value:n.password,name:"password",required:!0}),Object(b.jsx)("button",{children:"Sign In"})]}),Object(b.jsxs)("p",{children:["Need an Account?",Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:Object(b.jsx)(r.b,{to:"/register",children:"Sign Up"})})]})]})})},P=a(10),F=a(11),R=(a(68),/^[A-z][A-z0-9-_]{3,23}$/),U=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,q=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useState)({username:"",password:"",matchPassword:""}),s=Object(d.a)(a,2),n=s[0],i=s[1];function o(e){var t=e.target,a=t.name,c=t.value;t.type;i((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},a,c))}))}var u=Object(c.useState)(!1),m=Object(d.a)(u,2),h=m[0],p=m[1],x=Object(c.useState)(!1),f=Object(d.a)(x,2),v=f[0],g=f[1],N=Object(c.useState)(!1),y=Object(d.a)(N,2),w=y[0],S=y[1],C=Object(c.useState)(!1),E=Object(d.a)(C,2),I=E[0],A=E[1],M=Object(c.useState)(!1),T=Object(d.a)(M,2),k=T[0],D=T[1],q=Object(c.useState)(!1),G=Object(d.a)(q,2),B=G[0],L=G[1],Y=Object(c.useState)(""),_=Object(d.a)(Y,2),$=_[0],z=_[1],J=Object(c.useState)(!1),H=Object(d.a)(J,2),W=H[0],V=H[1];return Object(c.useEffect)((function(){e.current.focus()}),[]),Object(c.useEffect)((function(){p(R.test(n.username))}),[n.username]),Object(c.useEffect)((function(){S(U.test(n.password)),D(n.password===n.matchPassword)}),[n.password,n.matchPassword]),Object(c.useEffect)((function(){z("")}),[n.username,n.password,n.matchPassword]),Object(b.jsx)("div",{className:"registrationForm",children:W?Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"Success!"}),Object(b.jsx)("p",{children:Object(b.jsx)(r.b,{to:"/login",children:"Sign In"})})]}):Object(b.jsxs)("section",{className:"section-registation",children:[Object(b.jsx)("p",{ref:t,className:$?"errmsg":"offscreen","aria-live":"assertive",children:$}),Object(b.jsx)("h1",{className:"register",children:Object(b.jsx)("b",{children:"REGISTER"})}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n),O()({method:"POST",data:{username:n.username,password:n.password},withCredentials:!0,url:"http://localhost:4000/users/register"}).then((function(e){console.log(e),"User Created"===e.data&&V(!0)}))},className:"form-registration",children:[Object(b.jsxs)("label",{htmlFor:"username",children:["Username:",Object(b.jsx)(F.a,{icon:P.a,className:h?"valid":"hide"}),Object(b.jsx)(F.a,{icon:P.c,className:h||!n.username?"hide":"invalid"})]}),Object(b.jsx)("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:o,value:n.username,name:"username",required:!0,"aria-invalid":h?"false":"true","aria-describedby":"uidnote",onFocus:function(){return g(!0)},onBlur:function(){return g(!1)}}),Object(b.jsxs)("p",{id:"uidnote",className:v&&n.username&&!h?"instructions":"offscreen",children:[Object(b.jsx)(F.a,{icon:P.b}),"4 to 24 characters.",Object(b.jsx)("br",{}),"Must begin with a letter.",Object(b.jsx)("br",{}),"Letters, numbers, underscores, hyphens allowed."]}),Object(b.jsxs)("label",{htmlFor:"password",children:["Password:",Object(b.jsx)(F.a,{icon:P.a,className:w?"valid":"hide"}),Object(b.jsx)(F.a,{icon:P.c,className:w||!n.password?"hide":"invalid"})]}),Object(b.jsx)("input",{type:"password",id:"password",onChange:o,value:n.password,name:"password",required:!0,"aria-invalid":w?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return A(!0)},onBlur:function(){return A(!1)}}),Object(b.jsxs)("p",{id:"pwdnote",className:I&&!w?"instructions":"offscreen",children:[Object(b.jsx)(F.a,{icon:P.b}),"8 to 24 characters.",Object(b.jsx)("br",{}),"Must include uppercase and lowercase letters, a number and a special character.",Object(b.jsx)("br",{}),"Allowed special characters: ",Object(b.jsx)("span",{"aria-label":"exclamation mark",children:"!"})," ",Object(b.jsx)("span",{"aria-label":"at symbol",children:"@"})," ",Object(b.jsx)("span",{"aria-label":"hashtag",children:"#"})," ",Object(b.jsx)("span",{"aria-label":"dollar sign",children:"$"})," ",Object(b.jsx)("span",{"aria-label":"percent",children:"%"})]}),Object(b.jsxs)("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",Object(b.jsx)(F.a,{icon:P.a,className:k&&n.matchPassword?"valid":"hide"}),Object(b.jsx)(F.a,{icon:P.c,className:k||!n.matchPassword?"hide":"invalid"})]}),Object(b.jsx)("input",{type:"password",id:"confirm_pwd",onChange:o,value:n.matchPassword,name:"matchPassword",required:!0,"aria-invalid":k?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return L(!0)},onBlur:function(){return L(!1)}}),Object(b.jsxs)("p",{id:"confirmnote",className:B&&!k?"instructions":"offscreen",children:[Object(b.jsx)(F.a,{icon:P.b}),"Must match the first password input field."]}),Object(b.jsx)("button",{disabled:!(h&&w&&k),children:"Sign Up"})]}),Object(b.jsxs)("p",{children:["Already registered?",Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"line",children:Object(b.jsx)(r.b,{to:"/login",children:"Sign In"})})]})]})})},G=(a(69),a.p+"static/media/FE-logo.789455b6.jpg");var B=function(){return Object(b.jsxs)("nav",{className:"nav-design-template",children:[Object(b.jsxs)("div",{className:"nav-design-left",children:[Object(b.jsxs)("div",{className:"nav-design-left-row-one",children:[Object(b.jsx)("img",{className:"nav-design-image",src:G}),Object(b.jsx)("h1",{children:"FitnessTracker"})]}),Object(b.jsx)("h4",{children:"Improve your Fitness, Improve your Life"})]}),Object(b.jsx)("p",{className:"nav-design-right",children:"Created by Chaiwat Pandey"})]})};var L=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(B,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/home",element:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{path:"/login",element:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/register",element:Object(b.jsx)(q,{})})]})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e6e1f175.chunk.js.map