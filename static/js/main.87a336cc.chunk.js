(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{37:function(t,e,a){t.exports=a(51)},50:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(13),o=a.n(r),l=a(12),c=a(19),i=a(14),u=a(20),m=a(21),d=a(22),b=a(81),h=a(9),p=a(80),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(m.a)(e).call(this,t))).handleSubmit=function(t){a.props.onSubmit(a.state),a.setState({value:""}),t.preventDefault()},a.state={value:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement("form",{className:"form",noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},s.a.createElement(p.a,{placeholder:"Add task",onChange:this.handleChange,value:this.state.value,inputProps:{"aria-label":"description"}}))}}]),e}(n.Component),k=a(78),f=a(82),g=a(74),S=a(76),E=a(77),j=a(75),O=a(32),y=a.n(O),C=a(79);function T(t){var e=t.tasks,a=t.changeStatus,n=t.removeTask;return e=e.map((function(t,e){var r=t.status?"task-text checked":"task-text";return s.a.createElement(f.a,{key:e,role:void 0,dense:!0,button:!0,onClick:function(){return a(e)}},s.a.createElement(g.a,null,s.a.createElement(C.a,{checked:t.status,color:"primary",tabIndex:-1,disableRipple:!0,edge:"start",inputProps:{"aria-labelledby":e}})),s.a.createElement(S.a,{className:r,id:e,primary:t.text}),s.a.createElement(E.a,{onClick:function(){return n(e)}},s.a.createElement(j.a,{edge:"end","aria-label":"comments"},s.a.createElement(y.a,null))))})),s.a.createElement(k.a,{className:"list"},e)}var x=a(24),N=a(23),w=a.n(N),B=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(s)))).state={tasks:a.getStateFromStorage()},a.onSubmit=function(t){t.value=t.value[0].toUpperCase()+t.value.substring(1);var e={text:t.value,status:!1};a.setState({tasks:[e].concat(Object(l.a)(a.state.tasks))})},a.removeTask=function(t){var e=a.state.tasks.filter((function(e,a){return a!==t}));a.setState({tasks:e})},a.changeStatus=function(t){console.log(w.a.get("data"));var e=Object(l.a)(a.state.tasks);e[t].status=!e[t].status,a.setState({tasks:[].concat(Object(l.a)(a.state.tasks.filter((function(t){return!t.status}))),Object(l.a)(a.state.tasks.filter((function(t){return t.status}))))})},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"getStateFromStorage",value:function(){var t=w.a.get("simple-to-do-data");return t||[]}},{key:"setStateToStorage",value:function(){w()("simple-to-do-data",this.state.tasks)}},{key:"render",value:function(){var t=this.state.tasks;return this.setStateToStorage(),s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{className:"title",variant:"button",display:"block",gutterBottom:!0},"simple to do list"),s.a.createElement(b.a,{className:"card"},s.a.createElement(v,{onSubmit:this.onSubmit}),s.a.createElement(T,{tasks:t,changeStatus:this.changeStatus,removeTask:this.removeTask})),s.a.createElement(x.a,{className:"credits",variant:"caption",display:"block",gutterBottom:!0},"This list will be stored in you browser storage."))}}]),e}(n.Component);a(50);o.a.render(s.a.createElement(B,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.87a336cc.chunk.js.map