(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={statistics:"Statistics_statistics__1k-DU",title:"Statistics_title__1eHQd",item:"Statistics_item__dZDga",value:"Statistics_value__cZfiz"}},,,function(t,e,a){t.exports={container:"Section_container__2NRdN",title:"Section_title__WLBH-"}},function(t,e,a){t.exports={button:"Button_button__2LStp",good:"Button_good__2j0K_",bad:"Button_bad__3RBxT",neutral:"Button_neutral__3mpZj"}},,,,,function(t,e,a){t.exports={buttonsBox:"FeedbackOptions_buttonsBox__15Z6q"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(6),i=a.n(s),o=(a(17),a(7)),r=a(8),l=a(9),u=a(12),d=a(11),b=a(4),j=a.n(b),h=a(0);function v(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{className:j.a.container,children:[e&&Object(h.jsx)("h3",{className:j.a.title,children:e}),a]})}var x=a(1),_=a.n(x);function O(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(h.jsxs)("div",{className:_.a.statistics,children:[Object(h.jsx)("h3",{className:_.a.title,children:" Statistics "}),Object(h.jsxs)("ul",{className:_.a.list,children:[Object(h.jsxs)("li",{className:_.a.item,children:["Good:",Object(h.jsx)("span",{className:_.a.value,children:e})]}),Object(h.jsxs)("li",{className:_.a.item,children:["Neutral:",Object(h.jsx)("span",{className:_.a.value,children:a})]}),Object(h.jsxs)("li",{className:_.a.item,children:["Bad:",Object(h.jsx)("span",{className:_.a.value,children:n})]}),Object(h.jsxs)("li",{className:_.a.item,children:["Total:",Object(h.jsx)("span",{className:_.a.value,children:c})]}),Object(h.jsxs)("li",{className:_.a.item,children:["Positive feedback:",Object(h.jsxs)("span",{className:_.a.value,children:[isNaN(s)?0:s,"%"]})]})]}),Object(h.jsx)("p",{className:_.a.massage})]})}var m=a(5),f=a.n(m);function p(t){var e=t.textBtn,a=t.onLeaveFeedback;return Object(h.jsx)("button",{className:"".concat(f.a.button," ").concat(f.a[e]),type:"button",onClick:function(t){return a(t)},children:e})}var k=a(10),N=a.n(k);function g(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{className:N.a.buttonsBox,children:e.map((function(t){return Object(h.jsx)(p,{textBtn:t,onLeaveFeedback:function(){return a(t)}},t)}))})}var B=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(t,e){return t+e}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state.good+this.state.bad;return Math.round(100*this.state.good/t)}},{key:"render",value:function(){var t=this.state,e=t.good,a=t.bad,n=t.neutral;return Object(h.jsxs)(v,{title:"Please leave feedback",children:[Object(h.jsx)(g,{options:Object.keys(this.state),onLeaveFeedback:this.addFeedback}),this.countTotalFeedback()>0&&Object(h.jsx)(O,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),a}(n.Component),F=B;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.81d61785.chunk.js.map