(this["webpackJsonpredux-chat"]=this["webpackJsonpredux-chat"]||[]).push([[0],{64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),l=n(6),i=n(11),o=n(29),u=n(69),d=n(31),h=n(7),j=n(8),b=n(10),m=n(9),p=n(70),f=n(2);function v(e){for(var t=0,n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);var a=(16777215&t).toString(16).toUpperCase();return"#".concat("00000".substring(0,6-a.length)).concat(a)}var O=function(e){var t=e.message,n=t.author,a=t.content,c=t.created_at;return Object(f.jsx)("div",{className:"card mb-3",children:Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("div",{className:"d-inline-flex justify-content-between align-items-center w-100",children:[Object(f.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(f.jsx)("span",{className:"card-title",style:{color:v(n)},children:n}),Object(f.jsx)("div",{className:"card-subtitle",children:a})]}),Object(f.jsx)("div",{className:"card-text text-muted",children:Object(f.jsx)(p.a,{date:new Date(c),locale:"en-UK"})})]})})})},g=n(33),x=n(19),y=function(e){var t=function(e){var t=e.input,a=e.label,c=e.meta;return Object(f.jsxs)("div",{style:{width:"inherit"},children:[Object(f.jsx)("input",Object(g.a)({placeholder:a,className:"form-control mb-1"},t)),n(c)]})},n=function(e){var t=e.error;if(e.touched&&t)return Object(f.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(f.jsx)("p",{className:"text-muted my-0",children:t})})};return Object(f.jsx)(x.b,{initialValues:"",onSubmit:function(t){e.onSubmit(t)},validate:function(e){var t={};return e.message||(t.message="You need to enter a message."),t},render:function(e){var n=e.handleSubmit;return Object(f.jsxs)("form",{onSubmit:n,className:"my-3 d-inline-flex justify-content-evenly align-items-baseline w-100",children:[Object(f.jsx)(x.a,{name:"message",component:t,label:"Enter a Message"}),Object(f.jsx)("button",{className:"btn btn-outline-primary ms-1",children:"Send"})]})}})},N=n(12),C=n.n(N),w=n(18),S=n(30),E=n.n(S).a.create({baseURL:"https://wagon-chat.herokuapp.com/"}),k="GET_MESSAGES",_="POST_MESSAGE",M="SELECTED_CHANNEL",U=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.createMessage("general",e.props.currentUser,t.message)},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(y,{onSubmit:this.onSubmit})})})}}]),n}(c.a.Component),T=Object(l.b)((function(e){return{currentUser:e.currentUser}}),{createMessage:function(e,t,n){return function(){var a=Object(w.a)(C.a.mark((function a(c){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.post("".concat(e,"/messages"),{author:t,content:n});case 2:r=a.sent,c({type:_,payload:r.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(U),A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).renderMessages=function(e){return e.map((function(e){return Object(f.jsx)(O,{message:e},e.id)}))},a.list=c.a.createRef(),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.props.fetchMessages(e.props.selectedChannel)}),5e3),clearInterval()}},{key:"componentDidUpdate",value:function(){var e=this.list.current;e.focus(),e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this.props.messages;return Object(f.jsxs)("div",{className:"row justify-content-center align-itesm-center mt-5",children:[Object(f.jsx)("h3",{className:"mb-5",children:"#".concat(this.props.selectedChannel," Channel")}),Object(f.jsx)("div",{className:"col-6 col-md-10",children:this.renderMessages(e)}),Object(f.jsx)("div",{ref:this.list,id:"messageBar",children:Object(f.jsx)(T,{})})]})}}]),n}(c.a.Component),D=Object(l.b)((function(e){return{messages:e.messages,selectedChannel:e.selectedChannel}}),{fetchMessages:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("".concat(e,"/messages"));case 2:a=t.sent,n({type:k,payload:a.data.messages});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(A),L=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){e.props.newSelectedChannel(t)},e.renderChannels=function(t){return t.map((function(t){var n=t===e.props.selectedChannel?"active":"",a="#"+t.charAt(0).toUpperCase()+t.slice(1);return Object(f.jsx)("button",{className:"btn btn-outline-success ".concat(n),onClick:function(){return e.handleClick(t)},children:a},t)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"d-flex flex-column mt-5",children:[Object(f.jsx)("h3",{className:"mb-5",children:"Channel"}),Object(f.jsx)("div",{className:"btn-group-vertical",children:this.renderChannels(this.props.channels)})]})}}]),n}(c.a.Component),I=Object(l.b)((function(e){return{channels:e.channels,selectedChannel:e.selectedChannel}}),{newSelectedChannel:function(e){return{type:M,payload:e}}})(L),G=function(){return Object(f.jsx)("div",{className:"app container h-100",style:{backgroundColor:"black"},children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-4  bg-light p-5",style:{height:"100vh"},children:Object(f.jsx)(I,{})}),Object(f.jsx)("div",{className:"col-md-8  bg-white p-5",style:{height:"100vh"},children:Object(f.jsx)(D,{})})]})})},H=(n(63),n(32)),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;case _:return[].concat(Object(H.a)(e),[t.payload]);default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.payload;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},P=Object(i.b)({messages:R,currentUser:J,channels:J,selectedChannel:B});u.a.addDefaultLocale(d);var V={messages:[{author:"anonymous92",content:"Hello world!",id:"1",created_at:"2017-09-26T23:03:16.365Z"},{author:"anonymous77",content:"My name is anonymous77",id:"2",created_at:"2017-09-26T23:03:21.194Z"}],currentUser:window.prompt("What is your username?"),channels:["general","react","edinburgh","javascript","help"],selectedChannel:"general"},X=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c)(Object(i.a)(o.a)),Z=Object(i.d)(P,V,X);s.a.render(Object(f.jsx)(l.a,{store:Z,children:Object(f.jsx)(G,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9b77413e.chunk.js.map