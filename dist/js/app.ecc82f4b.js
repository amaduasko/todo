(function(t){function e(e){for(var n,c,d=e[0],l=e[1],i=e[2],s=0,f=[];s<d.length;s++)c=d[s],r[c]&&f.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,d=1;d<o.length;d++){var l=o[d];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/<todo>/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("1356"),r=o.n(n);r.a},1356:function(t,e,o){},"23cb":function(t,e,o){"use strict";var n=o("b234"),r=o.n(n);r.a},"41f6":function(t,e,o){"use strict";var n=o("72a9"),r=o.n(n);r.a},4595:function(t,e,o){"use strict";var n=o("7c7e"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=o("bb71");o("da64");n["default"].use(r["a"],{iconfont:"md"});o("bf40");var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-toolbar",{attrs:{app:""}},[o("v-toolbar-title",{staticClass:"headline text-uppercase"},[o("Header")],1)],1),o("v-content",[o("AddTodo",{on:{"add-todo":t.addTodo}})],1),o("v-content",[o("Todo",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)],1)},c=[],d=o("75fc"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("h2",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},i=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"todo-item":"",outline:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-checkbox",{attrs:{required:""},on:{change:t.taskComplete}}),o("p",{class:{"is-complete":t.todo.completed}},[t._v(t._s(t.todo.title))]),o("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("delete")])],1)],1)},s=[],f={name:"TodoItem",props:["todo"],methods:{taskComplete:function(){this.todo.completed=!this.todo.completed}}},p=f,v=(o("23cb"),o("2877")),h=o("6544"),m=o.n(h),b=o("8336"),_=o("ac7c"),T=o("a523"),y=o("a722"),g=Object(v["a"])(p,u,s,!1,null,"102468cc",null),j=g.exports;m()(g,{VBtn:b["a"],VCheckbox:_["a"],VContainer:T["a"],VLayout:y["a"]});var x={name:"Todo",components:{TodoItem:j},props:["todos"]},O=x,w=Object(v["a"])(O,l,i,!1,null,"4310b8c2",null),k=w.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",{},[t._v("\n        TodoList\n    ")])])}],C={name:"Header"},E=C,P=(o("41f6"),Object(v["a"])(E,V,$,!1,null,"46393d1e",null)),S=P.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("v-text-field",{attrs:{label:"add to do.....","data-vv-name":"title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),o("v-btn",{on:{click:t.addTodo}},[t._v("submit")])],1)},M=[],H={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},I=H,B=(o("4595"),o("2677")),J=Object(v["a"])(I,A,M,!1,null,"3a4e1ca4",null),L=J.exports;m()(J,{VBtn:b["a"],VTextField:B["a"]});var q=o("bc3a"),D=o.n(q),F=o("ce5b"),z=o.n(F);n["default"].use(z.a);var G={name:"app",components:{Todo:k,Header:S,AddTodo:L},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;D.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(o){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return console.log(t)})},addTodo:function(t){var e=this,o=t.title,n=t.completed;D.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(d["a"])(e.todos),[t.data])}).catch(function(t){return console.log(t)})}},created:function(){var t=this;D.a.get("https://jsonplaceholder.typicode.com/todos?_limit=7").then(function(e){return t.todos=e.data}).catch(function(t){return console.log(t)})}},K=G,N=(o("034f"),o("7496")),Q=o("549c"),R=o("71d9"),U=o("2a7f"),W=Object(v["a"])(K,a,c,!1,null,null,null),X=W.exports;m()(W,{VApp:N["a"],VContent:Q["a"],VToolbar:R["a"],VToolbarTitle:U["a"]}),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(X)}}).$mount("#app")},"72a9":function(t,e,o){},"7c7e":function(t,e,o){},b234:function(t,e,o){}});
//# sourceMappingURL=app.ecc82f4b.js.map