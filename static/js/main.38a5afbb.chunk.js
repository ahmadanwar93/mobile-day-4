(this["webpackJsonpmobile-day-4"]=this["webpackJsonpmobile-day-4"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(8),r=n.n(c),a=(n(15),n(16),n(10)),o=n(2),l=n(3),u=n(4),d=n(6),p=n(5),j=n(9),b=n.n(j),h=n(0),m=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{marginTop:"20px",padding:"10px 15px",borderRadius:"10px",border:"solid black 1px",backgroundColor:"lightgray"},onClick:this.props.click,children:[Object(h.jsx)("p",{className:b.a.listitem,children:this.props.title}),Object(h.jsx)("p",{children:this.props.keyA})]})}}]),n}(s.a.Component),f=m,x=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={items:[]},i.addNew=i.addNew.bind(Object(u.a)(i)),i}return Object(l.a)(n,[{key:"addNew",value:function(){var t=this;if(""!==this._inputElement.value){var e={title:this._inputElement.value,key:Date.now()};this.setState({items:[].concat(Object(a.a)(this.state.items),[e])},(function(){return console.log(t.state.items)}))}}},{key:"delete",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{style:{width:"80vw",margin:"0 auto",marginTop:"100px",backgroundColor:"skyblue",paddingTop:"10px"},children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)("input",{type:"text",style:{marginRight:"10px"},ref:function(e){return t._inputElement=e}}),Object(h.jsx)("button",{onClick:this.addNew,children:"Add new item"})]}),Object(h.jsx)("div",{children:this.state.items.map((function(e){return Object(h.jsx)(f,{keyA:e.key,title:e.title,click:function(){return t.delete(e.key)}})}))})]})}}]),n}(s.a.Component);var O=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),y()},9:function(t,e,n){t.exports={listitem:"ListItem_listitem__JBOKG"}}},[[18,1,2]]]);
//# sourceMappingURL=main.38a5afbb.chunk.js.map