(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,a){e.exports=a(422)},411:function(e,t,a){},418:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);a(219),a(221);var n=a(0),o=a.n(n),r=a(48),c=a.n(r),i=a(40),l=a(167),s=a(24),u=a(18),p=a(8),d=a(74),m=a(53),h=a.n(m),v=a(66),b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},y=function(e,t){return t.access_token=ge.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,v.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},O={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},E={forms:[]},g=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&v.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],h=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();h=(m=[b])[m.length-1]}else if(i.length>1){var y=i.shift();s=(i=[y])[i.length-1],h=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,E=e.activePanel,g=e.activeStory,j=e.popouts;if(j[f])return j[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:j})});var k=e.modalHistory[f];if(void 0!==k&&0!==k.length){var w=k[k.length-2]||null;return null===w?k=[]:-1!==k.indexOf(w)?k=k.splice(0,k.indexOf(w)+1):k.push(w),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,w)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,k))})}var S=e.panelsHistory[f]||[],T=e.viewsHistory[e.activeStory]||[],C=e.storiesHistory;if(S.length>1)S.pop(),E=S[S.length-1];else if(T.length>1){T.pop(),f=T[T.length-1];var _=e.panelsHistory[f];E=_[_.length-1]}else if(C.length>1&&"Android"===t.payload.from){C.pop(),g=C[C.length-1],f=e.viewsHistory[g][e.viewsHistory[g].length-1];var A=e.panelsHistory[f];E=A.length>1?A[A.length-1]:A[0]}else v.a.send("VKWebAppClose",{status:"success"});return 1===S.length&&"iOS"===t.payload.from&&v.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:f,activePanel:E,activeStory:g,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,T)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var V=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,I=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===V?I=[]:-1!==I.indexOf(V)?I=I.splice(0,I.indexOf(V)+1):I.push(V),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,V)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,I))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),j=a(169),k=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},w=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},S=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},T=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},C=function(){return{type:"CLOSE_POPOUT"}},_=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},A=function(){return{type:"CLOSE_MODAL"}},P=(a(410),a(411),a(25)),H=a(26),V=a(28),I=a(27),D=a(29),B=a(3),M=(a(418),a(179)),x=a.n(M),L=a(180),G=a.n(L),N=a(181),W=a.n(N),F=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(V.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1,showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(B.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this.props.id;return o.a.createElement(B.x,{id:e},o.a.createElement(B.y,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(B.n,null,o.a.createElement(B.d,{photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",description:"VKontakte",before:o.a.createElement(B.b,{src:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",size:80}),size:"l"},"\u0410\u0440\u0442\u0443\u0440 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u044c\u0446\u044f\u043d")))}}]),t}(o.a.Component),K={setPage:w,goBack:S,openPopout:T,closePopout:C,openModal:_},z=Object(s.b)(null,K)(F),U=a(130),R=a.n(U),q=a(182),Y=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(B.d,{description:r,before:o.a.createElement(B.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),J=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(Y,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},X=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(V.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){v.a.send("VKWebAppGetAuthToken",{app_id:6984089,scope:e.join(",")}).then(function(e){t(b(e.data.access_token))}).catch(function(){t(b(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(q.a)(R.a.mark(function e(){var t,a,n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,y("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=J(this.state.groups.admined),c=J(this.state.groups.other);return o.a.createElement(B.x,{id:a},o.a.createElement(B.y,{left:o.a.createElement(B.z,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(B.A,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(B.n,null,o.a.createElement(B.h,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(B.h,null,o.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(B.n,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},o.a.createElement(B.t,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(B.n,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},o.a.createElement(B.t,null,c)))}}]),t}(o.a.Component);var Z=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:S,openPopout:T,closePopout:C,openModal:_},e))})(X),Q=(a(421),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(I.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=ge.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(B.x,{id:a},o.a.createElement(B.y,{noShadow:!0},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(B.j,{vertical:"top"},o.a.createElement(B.E,{theme:"header",type:"buttons"},o.a.createElement(B.p,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(B.F,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u0412\u0441\u0435"),o.a.createElement(B.F,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435"),o.a.createElement(B.F,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435"),o.a.createElement(B.F,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u041b\u0438\u0447\u043d\u044b\u0435")))),o.a.createElement(B.n,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(B.e,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&o.a.createElement(B.h,null,this.state.activeTab)))}}]),t}(o.a.Component)),$={setPage:w,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},ee=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},$)(Q),te=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(V.a)(this,Object(I.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(B.x,{id:t},o.a.createElement(B.y,{left:o.a.createElement(B.z,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(B.n,null,o.a.createElement(B.k,null,o.a.createElement(B.l,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(B.s,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(B.s,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(B.l,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(B.f,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(B.f,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(B.h,{className:"buttons-group"},o.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(B.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ae={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},ne=Object(s.b)(function(e){return{inputData:e.formData.forms}},ae)(te),oe=a(93),re=a.n(oe),ce=a(73),ie=a.n(ce),le=a(92),se=a.n(le),ue=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],pe=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(B.u,{id:t,header:o.a.createElement(B.v,{left:!B.q&&o.a.createElement(B.o,{onClick:a},o.a.createElement(ie.a,null)),right:B.q&&o.a.createElement(B.o,{onClick:a},o.a.createElement(re.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(B.t,null,ue.map(function(e,t){return o.a.createElement(B.d,{key:t,description:e.desc,before:o.a.createElement(B.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(se.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),de={openModal:_},me=Object(s.b)(null,de)(pe),he=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(B.u,{id:t,header:o.a.createElement(B.v,{left:!B.q&&o.a.createElement(B.o,{onClick:a},o.a.createElement(ie.a,null)),right:B.q&&o.a.createElement(B.o,{onClick:a},o.a.createElement(re.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(B.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(B.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(B.t,null,o.a.createElement(B.d,null,o.a.createElement(B.r,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(B.d,null,o.a.createElement(B.r,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(B.d,null,o.a.createElement(B.r,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),ve=Object(s.b)()(he),be=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(V.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(B.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this.props.id;return o.a.createElement(B.x,{id:e},o.a.createElement(B.y,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),o.a.createElement(B.n,{title:"Centered"},o.a.createElement(B.m,{slideWidth:"90%",align:"center",style:{height:150}},o.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))),o.a.createElement(B.n,{title:"Centered"},o.a.createElement(B.m,{slideWidth:"90%",align:"center",style:{height:150}},o.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))),o.a.createElement(B.n,{title:"Centered"},o.a.createElement(B.m,{slideWidth:"90%",align:"center",style:{height:150}},o.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))),o.a.createElement(B.n,{title:"Centered"},o.a.createElement(B.m,{slideWidth:"90%",align:"center",style:{height:150}},o.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),o.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))))}}]),t}(o.a.Component),ye={setPage:w,goBack:S,openPopout:T,closePopout:C,openModal:_},Oe=Object(s.b)(null,ye)(be),fe=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(I.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),v.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"getProfile",value:function(){s.b.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,d=void 0===u[c]?[c]:u[c],m=void 0===r[c]?null:r[c],h=void 0===s[c]?null:s[c],v=o.a.createElement(B.w,{activeModal:h},o.a.createElement(me,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(ve,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(B.g,{isWebView:!0,scheme:p},o.a.createElement(B.i,{activeStory:i,tabbar:o.a.createElement(B.C,null,o.a.createElement(B.D,{onClick:function(){return a("market","store")},selected:"market"===i},o.a.createElement(x.a,null)),o.a.createElement(B.D,{onClick:function(){return a("more","callmodal")},selected:"more"===i},o.a.createElement(W.a,null)),o.a.createElement(B.D,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(G.a,null)))},o.a.createElement(B.B,{id:"home",activeView:c,popout:m},o.a.createElement(B.G,{id:"home",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(z,{id:"base",withoutEpic:!1}),o.a.createElement(Z,{id:"groups"}))),o.a.createElement(B.B,{id:"market",activeView:c,popout:m},o.a.createElement(B.G,{id:"market",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(Oe,{id:"store",withoutEpic:!1}))),o.a.createElement(B.B,{id:"more",activeView:c,popout:m},o.a.createElement(B.G,{id:"more",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(ee,{id:"callmodal"})),o.a.createElement(B.G,{id:"modal",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(ne,{id:"filters"})))))}}]),t}(o.a.Component);var Ee=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:k,goBack:S,closeModal:A},e))})(fe);a.d(t,"store",function(){return ge});var ge=Object(i.createStore)(g,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));ge.dispatch(k("home","base")),c.a.render(o.a.createElement(s.a,{store:ge},o.a.createElement(Ee,null)),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.7bd66c69.chunk.js.map