(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,t,a){e.exports=a(426)},415:function(e,t,a){},424:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);a(223),a(225);var n=a(0),r=a.n(n),o=a(51),c=a.n(o),l=a(43),i=a(170),s=a(38),u=a(18),p=a(8),m=a(77),d=a(34),h=a.n(d),v=a(68),f=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},y=function(e,t){return t.access_token=we.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,v.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},b=function(){var e=we.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})},E={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},g={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},O={forms:[]},k=Object(l.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,r=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:r}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var r=e.panelsHistory[a]||[],o=e.viewsHistory[e.activeStory]||[],c=o.indexOf(a);return-1!==c&&o.splice(c,1),-1===r.indexOf(n)&&(r=[].concat(Object(m.a)(r),[n])),r.length>1&&v.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,r)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(m.a)(o),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var l=e.viewsHistory[t.payload.story]||[t.payload.story],i=e.storiesHistory,s=l[l.length-1],d=e.panelsHistory[s]||[t.payload.initial_panel],h=d[d.length-1];if(t.payload.story===e.activeStory)if(d.length>1){var f=d.shift();h=(d=[f])[d.length-1]}else if(l.length>1){var y=l.shift();s=(l=[y])[l.length-1],h=(d=e.panelsHistory[s])[d.length-1]}return t.payload.story===e.activeStory&&1===d.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===i.indexOf(t.payload.story)||i[0]===t.payload.story&&i[i.length-1]!==t.payload.story)&&(i=[].concat(Object(m.a)(i),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:i,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,l)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,d)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var b=e.activeView,g=e.activePanel,O=e.activeStory,k=e.popouts;if(k[b])return k[b]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:k})});var j=e.modalHistory[b];if(void 0!==j&&0!==j.length){var w=j[j.length-2]||null;return null===w?j=[]:-1!==j.indexOf(w)?j=j.splice(0,j.indexOf(w)+1):j.push(w),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},b,w)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},b,j))})}var S=e.panelsHistory[b]||[],C=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(S.length>1)S.pop(),g=S[S.length-1];else if(C.length>1){C.pop(),b=C[C.length-1];var T=e.panelsHistory[b];g=T[T.length-1]}else if(_.length>1&&"Android"===t.payload.from){_.pop(),O=_[_.length-1],b=e.viewsHistory[O][e.viewsHistory[O].length-1];var A=e.panelsHistory[b];g=A.length>1?A[A.length-1]:A[0]}else v.a.send("VKWebAppClose",{status:"success"});return 1===S.length&&"iOS"===t.payload.from&&v.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:b,activePanel:g,activeStory:O,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,C)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,x=e.modalHistory[e.activeView]?Object(m.a)(e.modalHistory[e.activeView]):[];return null===P?x=[]:-1!==x.indexOf(P)?x=x.splice(0,x.indexOf(P)+1):x.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,x))});case"CLOSE_MODAL":var H=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,V=e.modalHistory[e.activeView]?Object(m.a)(e.modalHistory[e.activeView]):[];return null===H?V=[]:-1!==V.indexOf(H)?V=V.splice(0,V.indexOf(H)+1):V.push(H),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,H)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,V))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),j=a(172),w=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},S=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},C=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},T=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},A=function(){return{type:"CLOSE_MODAL"}},P=(a(414),a(415),a(22)),x=a.n(P),H=a(39),V=a(29),I=a(30),N=a(32),D=a(31),G=a(33),B=a(3),M=(a(424),a(182)),L=a.n(M),W=a(183),K=a.n(W),F=a(184),U=a.n(F),z=a(76),R=a.n(z),Y=a(96),q=a.n(Y),J=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1,showImg:!1,firstName:"",lastName:"",ava:"",_id:"5d8fdaf14827a83f988d5e00",statusOld:"1",statusNew:"0",maxCount:"",result:""},a.showImg=function(){a.setState({showImg:!0})},a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"route",value:function(){this.setState({activePanel:"home"})}},{key:"componentDidMount",value:function(){var e=Object(H.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.sendPromise("VKWebAppGetUserInfo");case 2:return t=e.sent,this.state.firstName=t.first_name,this.state.lastName=t.last_name,this.state.ava=t.photo_200,e.next=8,fetch("https://demo146.bravo.vkhackathon.com/api/v1/challangeContainer/getAllChallenges/inactive",{method:"GET"});case 8:return a=e.sent,e.next=11,a.json();case 11:a=e.sent,console.log(a),this.state.maxCount=a.challenge.length,this.state.result=a.challenge,console.log(this.state.result[0]),this.forceUpdate();case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this,t=this.props,a=(t.setStory,t.activeStory,this.props.id),n=[],o=0;o<this.state.maxCount;o++)n.push(r.a.createElement(B.m,{key:o},r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150},className:"galleryElement"},r.a.createElement("div",null,r.a.createElement("p",{className:"name"},this.state.result[o].name),r.a.createElement("p",{className:"description"},this.state.result[o].body),r.a.createElement(B.c,{level:"secondary",before:r.a.createElement(q.a,null)},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(B.c,{level:"commerce",className:"challengeButton",before:r.a.createElement(R.a,null),onClick:function(t){return e.sendPay()}},"\u041d\u0430\u0447\u0430\u0442\u044c")))));return r.a.createElement(B.w,{id:a},r.a.createElement(B.x,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(B.m,null,r.a.createElement(B.d,{photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",description:"VKontakte",before:r.a.createElement(B.b,{src:this.state.ava,size:80}),size:"l"},this.state.firstName," ",this.state.lastName),r.a.createElement(B.c,{onClick:function(t){return e.serverGet()}},"gg")),n)}}]),t}(r.a.Component),X=function(e){function t(){return Object(V.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,o=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return r.a.createElement(B.d,{description:o,before:r.a.createElement(B.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),Z=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return r.a.createElement(X,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},Q=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){v.a.send("VKWebAppGetAuthToken",{app_id:6984089,scope:e.join(",")}).then(function(e){t(f(e.data.access_token))}).catch(function(){t(f(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(H.a)(x.a.mark(function e(){var t,a,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,y("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,o=Z(this.state.groups.admined),c=Z(this.state.groups.other);return r.a.createElement(B.w,{id:a},r.a.createElement(B.x,{left:r.a.createElement(B.y,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&r.a.createElement(B.z,null),!this.state.loading&&this.state.errorGetAuthToken&&r.a.createElement(B.m,null,r.a.createElement(B.g,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),r.a.createElement(B.g,null,r.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&o&&r.a.createElement(B.m,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},r.a.createElement(B.s,null,o)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&r.a.createElement(B.m,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},r.a.createElement(B.s,null,c)))}}]),t}(r.a.Component);var $=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(l.bindActionCreators)({goBack:S,openPopout:C,closePopout:_,openModal:T},e))})(Q),ee=(a(425),function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(N.a)(this,Object(D.a)(t).call(this,e))).state={result:"",maxCount:"",_id:"",idLink:""},a.state={},a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"getdetails",value:function(e){this.state.idLink=e.id,console.log(this.state.idLink)}},{key:"sendPay",value:function(){var e=Object(H.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.send("VKWebAppOpenPayForm",{app_id:7150912,action:"transfer-to-group",params:{group_id:187017371}});case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(H.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,fetch("https://demo146.bravo.vkhackathon.com/api/v1/challangeContainer/getAllChallenges/active",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,this.state.maxCount=t.challenge.length,this.state.result=t.challenge,console.log(this.state.result[1]),console.log(this.state.maxCount),this.forceUpdate();case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"serverPush",value:function(){var e=Object(H.a)(x.a.mark(function e(t){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,fetch("https://demo146.bravo.vkhackathon.com/api/v1/challangeContainer/getAllChallenges/update/"+t+"/0",{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,this.state.maxCount=a.challenge.length,this.state.result=a.challenge,console.log(this.state.result[1]),console.log(this.state.maxCount),this.forceUpdate(),document.location.reload(!0);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this,t=this.props,a=t.id,n=(t.setPage,[]),o=function(t){n.push(r.a.createElement(B.m,{key:t},r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150},className:"galleryElement"},r.a.createElement("div",null,r.a.createElement("p",{className:"name"},e.state.result[t].name),r.a.createElement("p",{className:"description"},e.state.result[t].body),r.a.createElement(B.c,{level:"secondary",before:r.a.createElement(q.a,null)},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(B.c,{id:e.state.result[t]._id,level:"commerce",className:"challengeButton",before:r.a.createElement(R.a,null),onClick:function(a){return e.sendPay()&&e.serverPush(e.state.result[t]._id)}},"\u041d\u0430\u0447\u0430\u0442\u044c")))))},c=0;c<this.state.maxCount;c++)o(c);return r.a.createElement(B.w,{id:a},r.a.createElement(B.x,{noShadow:!0},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),r.a.createElement(B.i,{vertical:"top",className:"headerMenu"},r.a.createElement(B.D,{theme:"header",type:"buttons"},r.a.createElement(B.o,{id:"EXAMPLE_TABS_LIST"},r.a.createElement(B.E,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u0412\u0441\u0435"),r.a.createElement(B.E,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0421\u043f\u043e\u0440\u0442"),r.a.createElement(B.E,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0415\u0434\u0430"),r.a.createElement(B.E,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0421\u0430\u043c\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0435")))),n)}}]),t}(r.a.Component)),te=function(e){function t(e){var a;Object(V.a)(this,t),a=Object(N.a)(this,Object(D.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return r.a.createElement(B.w,{id:t},r.a.createElement(B.x,{left:r.a.createElement(B.y,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),r.a.createElement(B.m,null,r.a.createElement(B.j,null,r.a.createElement(B.k,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},r.a.createElement(B.r,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),r.a.createElement(B.r,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),r.a.createElement(B.k,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},r.a.createElement(B.e,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),r.a.createElement(B.e,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),r.a.createElement(B.g,{className:"buttons-group"},r.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement(B.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(r.a.Component),ae={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},ne=Object(s.b)(function(e){return{inputData:e.formData.forms}},ae)(te),re=a(97),oe=a.n(re),ce=a(75),le=a.n(ce),ie=a(95),se=a.n(ie),ue=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],pe=function(e){function t(){return Object(V.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return r.a.createElement(B.t,{id:t,header:r.a.createElement(B.u,{left:!B.p&&r.a.createElement(B.n,{onClick:a},r.a.createElement(le.a,null)),right:B.p&&r.a.createElement(B.n,{onClick:a},r.a.createElement(oe.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},r.a.createElement(B.s,null,ue.map(function(e,t){return r.a.createElement(B.d,{key:t,description:e.desc,before:r.a.createElement(B.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:r.a.createElement(se.a,{fill:"#528bcc"})},e.name)})))}}]),t}(r.a.Component),me={openModal:T},de=Object(s.b)(null,me)(pe),he=function(e){function t(){return Object(V.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return r.a.createElement(B.t,{id:t,header:r.a.createElement(B.u,{left:!B.p&&r.a.createElement(B.n,{onClick:a},r.a.createElement(le.a,null)),right:B.p&&r.a.createElement(B.n,{onClick:a},r.a.createElement(oe.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},r.a.createElement(B.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:r.a.createElement(B.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(B.s,null,r.a.createElement(B.d,null,r.a.createElement(B.q,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),r.a.createElement(B.d,null,r.a.createElement(B.q,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),r.a.createElement(B.d,null,r.a.createElement(B.q,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(r.a.Component),ve=Object(s.b)()(he),fe=a(185),ye=a.n(fe),be=a(186),Ee=a.n(be),ge=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"buyItem",value:function(e){console.log(e.id)}},{key:"sendPay",value:function(){var e=Object(H.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dfvdfv"),e.next=3,h.a.send("VKWebAppOpenPayForm",{app_id:7150912,action:"transfer-to-group",params:{group_id:187017371}});case 3:e.sent;case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"serverGet",value:function(){var e=Object(H.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo146.bravo.vkhackathon.com/api/v1/challangeContainer/getSportChallenges",{method:"GET"}).then(function(e){return e.json()}).then(function(e){return console.log(e)});case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"openPopout",value:function(){var e=this;this.props.openPopout(r.a.createElement(B.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},r.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),r.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this,t=this.props.id;return r.a.createElement(B.w,{id:t},r.a.createElement(B.x,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(B.g,{align:"center"},r.a.createElement(B.c,{before:r.a.createElement(Ee.a,null),className:"storeButton1",onClick:function(t){return e.sendPay()}},"VK PAY"),r.a.createElement(B.c,{before:r.a.createElement(ye.a,null),onClick:function(t){return e.serverGet()},className:"storeButton1"},"\u0411\u043e\u043d\u0443\u0441\u044b"),r.a.createElement(B.c,{before:r.a.createElement(R.a,null),onClick:function(t){return e.serverGet()},id:"storeButton2",level:"outline"},"10.00")),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage1"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage2"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage3"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage4"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage5"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage6"}))),r.a.createElement(B.m,null,r.a.createElement(B.l,{slideWidth:"90%",align:"center",style:{height:150}},r.a.createElement("div",{className:"divImage7"}))))}}]),t}(r.a.Component),Oe=ge,ke=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(N.a)(this,Object(D.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(G.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),v.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.activeView,o=n.activeStory,c=n.activePanel,l=n.scrollPosition;if(e.activeView!==r||e.activePanel!==c||e.activeStory!==o){var i=l[o+"_"+r+"_"+c]||0;window.scroll(0,i)}}},{key:"getProfile",value:function(){s.b.send("VKWebAppGetUserInfo",{})}},{key:"serverGet",value:function(){var e=Object(H.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo146.bravo.vkhackathon.com/api/v1/challangeContainer/getSportChallenges",{method:"GET"}).then(function(e){return e.json()}).then(function(e){return console.log(e)});case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.goBack,n=t.setStory,o=t.closeModal,c=t.popouts,l=t.activeView,i=t.activeStory,s=t.activePanel,u=t.activeModals,p=t.panelsHistory,m=t.colorScheme,d=void 0===p[l]?[l]:p[l],h=void 0===c[l]?null:c[l],v=void 0===u[l]?null:u[l],f=r.a.createElement(B.v,{activeModal:v},r.a.createElement(de,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return o()}}),r.a.createElement(ve,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return o()}}));return r.a.createElement(B.f,{isWebView:!0,scheme:m},r.a.createElement(B.h,{activeStory:i,tabbar:r.a.createElement(B.B,{className:"epic"},r.a.createElement(B.C,{onClick:function(){return n("market","store")},selected:"market"===i},r.a.createElement(L.a,null)),r.a.createElement(B.C,{onClick:function(t){return e.serverGet()&&n("more","callmodal")},selected:"more"===i},r.a.createElement(U.a,null)),r.a.createElement(B.C,{onClick:function(){return n("home","base")},selected:"home"===i},r.a.createElement(K.a,null)))},r.a.createElement(B.A,{id:"home",activeView:l,popout:h},r.a.createElement(B.F,{id:"home",modal:f,activePanel:s,history:d,onSwipeBack:function(){return a()}},r.a.createElement(J,{id:"base",withoutEpic:!1}),r.a.createElement($,{id:"groups"}))),r.a.createElement(B.A,{id:"market",activeView:l,popout:h},r.a.createElement(B.F,{id:"market",modal:f,activePanel:s,history:d,onSwipeBack:function(){return a()}},r.a.createElement(Oe,{id:"store",withoutEpic:!1}))),r.a.createElement(B.A,{id:"more",activeView:l,popout:h},r.a.createElement(B.F,{id:"more",modal:f,activePanel:s,history:d,onSwipeBack:function(){return a()}},r.a.createElement(ee,{id:"callmodal"})),r.a.createElement(B.F,{id:"modal",modal:f,activePanel:s,history:d,onSwipeBack:function(){return a()}},r.a.createElement(ne,{id:"filters"})))))}}]),t}(r.a.Component);var je=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(l.bindActionCreators)({setStory:w,goBack:S,closeModal:A},e))})(ke);a.d(t,"store",function(){return we});var we=Object(l.createStore)(k,Object(j.composeWithDevTools)(Object(l.applyMiddleware)(i.a)));h.a.subscribe(function(e){return console.log(e)}),we.dispatch(w("home","base")),c.a.render(r.a.createElement(s.a,{store:we},r.a.createElement(je,null)),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.db4db7d4.chunk.js.map