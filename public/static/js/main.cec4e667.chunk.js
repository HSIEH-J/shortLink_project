(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),a=n(13),i=n.n(a),c=(n(25),n(4)),o=n(5),u=n(1),l=n(7),h=n(6),d=(n(26),n(2)),p=n.n(d),m=n(8),j=n(9),f=n.n(j),b=n(10),O=n.n(b),g=O()(f.a),w=new(function(){function e(){Object(c.a)(this,e),this.API_HOST="https://www.isho.xyz"}return Object(o.a)(e,[{key:"generateShortUrl",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_HOST,"/link"),{body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"}),method:"POST"});case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error(g.fire("Oops! seems something went wrong...","Please Try Again Later.","warning"));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_HOST,"/signup"),{body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"}),method:"POST"});case 2:if(200===(n=e.sent).status){e.next=6;break}throw console.log("123"),new Error(g.fire("Please Check Again.","Wrong Email Format Or Try Another Email","warning"));case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"showRedirectTimes",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_HOST,"/times"),{body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"}),method:"POST"});case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error(g.fire("Oops! seems something went wrong...","Please Try Again Later.","warning"));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_HOST,"/login"),{body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"}),method:"POST"});case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error(g.fire("Please Check Again.","Wrong Email Format Or Password","warning"));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.API_HOST,"/logout"),{headers:new Headers({"Content-Type":"application/json"}),method:"GET"});case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error(g.fire("Please Check Again.","Wrong Email Format Or Try Another Email","warning"));case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),v=(n(33),n(0)),x=O()(f.a),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).register=r.register.bind(Object(u.a)(r)),r.logIn=r.logIn.bind(Object(u.a)(r)),r.logOut=r.logOut.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"register",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fire({title:"Register",html:'<input id="swal-input1" class="swal2-input" placeholder="Email"><input id="swal-input2" class="swal2-input" placeholder="Password">',focusConfirm:!1,preConfirm:function(){return{email:document.getElementById("swal-input1").value,password:document.getElementById("swal-input2").value}}});case 2:t=e.sent,n=t.value,r={email:n.email,password:n.password},this.props.onRegister(r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fire({title:"Log In",html:'<input id="swal-input1" class="swal2-input" placeholder="Email"><input id="swal-input2" class="swal2-input" placeholder="Password">',focusConfirm:!1,preConfirm:function(){return{email:document.getElementById("swal-input1").value,password:document.getElementById("swal-input2").value}}});case 2:t=e.sent,n=t.value,r={email:n.email,password:n.password},this.props.onLogIn(r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.onLogOut();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.props.authentication?Object(v.jsx)("div",{className:"Authentication",children:Object(v.jsx)("button",{className:"AuthButton",onClick:this.logOut,children:"Log Out"})}):Object(v.jsxs)("div",{className:"Authentication",children:[Object(v.jsx)("button",{className:"AuthButton",onClick:this.register,children:"Register"}),Object(v.jsx)("button",{className:"AuthButton",onClick:this.logIn,children:"Log In"})]})}}]),n}(s.a.Component),y=(n(35),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={term:""},r.handleTermChange=r.handleTermChange.bind(Object(u.a)(r)),r.generateShortUrl=r.generateShortUrl.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"generateShortUrl",value:function(){var e={url:this.state.term};this.props.onGenerate(e),document.getElementById("ImportUrl").value=""}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"GenerateBar",children:[Object(v.jsx)("input",{placeholder:"http://",onChange:this.handleTermChange,id:"ImportUrl"}),Object(v.jsx)("button",{className:"GenerateButton",onClick:this.generateShortUrl,children:"Generate"})]})}}]),n}(s.a.Component)),k=(n(36),n(37),n.p+"static/media/refresh.af4193e0.png"),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).updateRedirectTimes=r.updateRedirectTimes.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"updateRedirectTimes",value:function(){this.props.onUpdate()}},{key:"render",value:function(){return!1===this.props.isShowRedirectTimes?Object(v.jsxs)("tr",{className:"Title",children:[Object(v.jsx)("th",{className:"UrlItem",children:"URL"}),Object(v.jsx)("th",{className:"LinkItem",children:"Short Link"}),Object(v.jsx)("th",{className:"TimeItem",children:"Show Redirect Times"})]}):Object(v.jsxs)("tr",{className:"Title",children:[Object(v.jsx)("th",{className:"UrlItem",children:"URL"}),Object(v.jsx)("th",{className:"LinkItem",children:"Short Link"}),Object(v.jsxs)("th",{className:"TimeItem",children:[Object(v.jsx)("div",{children:"Show Redirect Times"}),Object(v.jsx)("img",{src:k,className:"RefreshImg",onClick:this.updateRedirectTimes})]})]})}}]),n}(s.a.Component),R=(n(38),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).showRedirectTimes=r.showRedirectTimes.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"showRedirectTimes",value:function(e){console.log(e.target.id);var t={data:[{id:e.target.id}]};this.props.onRedirectTimes(t)}},{key:"render",value:function(){var e=this.props.result;return console.log(e),"img"===e.status?Object(v.jsxs)("tr",{className:"ResultRow",children:[Object(v.jsx)("td",{className:"Item",children:Object(v.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.url})}),Object(v.jsx)("td",{className:"Item",children:Object(v.jsx)("a",{href:e.shortLink,target:"_blank",rel:"noreferrer",children:e.shortLink})}),Object(v.jsx)("td",{className:"Item",children:Object(v.jsx)("img",{src:e.render,className:"EyeImg",onClick:this.showRedirectTimes,id:e.id})})]},e.id):Object(v.jsxs)("tr",{className:"ResultRow",children:[Object(v.jsx)("td",{className:"Item",children:Object(v.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.url})}),Object(v.jsx)("td",{className:"Item",children:Object(v.jsx)("a",{href:e.shortLink,target:"_blank",rel:"noreferrer",children:e.shortLink})}),Object(v.jsx)("td",{className:"Item",children:e.render.toString()})]},e.id)}}]),n}(s.a.Component)),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.props.resultsList)t.push(this.props.resultsList[n]);return console.log(t),Object(v.jsxs)("table",{className:"Table",children:[Object(v.jsx)(S,{onUpdate:this.props.onUpdate,isShowRedirectTimes:this.props.isShowRedirectTimes}),t.map((function(t){return Object(v.jsx)(R,{result:t,onRedirectTimes:e.props.onRedirectTimes},t.id)}))]})}}]),n}(s.a.Component),L=O()(f.a),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={resultsList:{},isAuthentication:!1,isShowRedirectTimes:!1,showTimesUrl:[]},r.generate=r.generate.bind(Object(u.a)(r)),r.register=r.register.bind(Object(u.a)(r)),r.logIn=r.logIn.bind(Object(u.a)(r)),r.logOut=r.logOut.bind(Object(u.a)(r)),r.showRedirectTimes=r.showRedirectTimes.bind(Object(u.a)(r)),r.updateRedirectTimes=r.updateRedirectTimes.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"generate",value:function(e){var t=this;w.generateShortUrl(e).then((function(e){var n=t.state.resultsList;n[e.id]=e,t.setState({resultsList:n})}))}},{key:"register",value:function(e){var t=this;w.register(e).then((function(e){console.log(e),t.setState({isAuthentication:!0}),L.fire("Sign Up Successfully!")}))}},{key:"logIn",value:function(e){var t=this;w.login(e).then((function(e){console.log(e),t.setState({isAuthentication:!0}),L.fire("Log In Successfully!")}))}},{key:"logOut",value:function(){var e=this;w.logOut().then((function(t){console.log(t),e.setState({isAuthentication:!1}),L.fire("Log Out Successfully!")}))}},{key:"showRedirectTimes",value:function(e){var t=this;console.log(this.state.resultsList),w.showRedirectTimes(e).then((function(n){t.setState({isShowRedirectTimes:!0});var r=t.state.resultsList;r[e.data[0].id].status="times",r[e.data[0].id].render=n.data[0].times,t.setState({resultsList:r});var s=t.state.showTimesUrl;s.push({id:e.data[0].id}),t.setState({showTimesUrl:s}),console.log(s)}))}},{key:"updateRedirectTimes",value:function(){var e=this;console.log(this.state.showTimesUrl);var t={data:this.state.showTimesUrl};w.showRedirectTimes(t).then((function(t){var n=e.state.resultsList;t.data.forEach((function(e){n[e.id].render=e.times})),e.setState({resultsList:n})}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Short Links"}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(T,{onRegister:this.register,onLogIn:this.logIn,onLogOut:this.logOut,authentication:this.state.isAuthentication}),Object(v.jsx)(y,{onGenerate:this.generate}),Object(v.jsx)("div",{className:"Content-List",children:Object(v.jsx)(I,{isShowRedirectTimes:this.state.isShowRedirectTimes,onUpdate:this.updateRedirectTimes,resultsList:this.state.resultsList,onRedirectTimes:this.showRedirectTimes})})]})]})}}]),n}(s.a.Component);i.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cec4e667.chunk.js.map