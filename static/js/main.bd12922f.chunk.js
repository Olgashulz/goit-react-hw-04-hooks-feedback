(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={statistics:"Statistics_statistics__1AV5C",title:"Statistics_title__348_U",item:"Statistics_item__3oFas",value:"Statistics_value__1zd6J"}},,,function(t,e,a){t.exports={container:"Section_container__1hrPi",title:"Section_title__3njc9"}},function(t,e,a){t.exports={button:"Button_button__18Rz_",good:"Button_good__3sWT_",bad:"Button_bad__1PEO3",neutral:"Button_neutral__7YjsT"}},,,,,function(t,e,a){t.exports={buttonsBox:"FeedbackOptions_buttonsBox__1T-NE"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),c=a(6),i=a.n(c),o=(a(17),a(7)),r=a(8),l=a(9),u=a(12),d=a(11),b=a(4),j=a.n(b),h=a(0);function v(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{className:j.a.container,children:[e&&Object(h.jsx)("h3",{className:j.a.title,children:e}),a]})}var _=a(1),x=a.n(_);function O(t){var e=t.good,a=t.neutral,n=t.bad,s=t.total,c=t.positivePercentage;return Object(h.jsxs)("div",{className:x.a.statistics,children:[Object(h.jsx)("h3",{className:x.a.title,children:" Statistics "}),Object(h.jsxs)("ul",{className:x.a.list,children:[Object(h.jsxs)("li",{className:x.a.item,children:["Good:",Object(h.jsx)("span",{className:x.a.value,children:e})]}),Object(h.jsxs)("li",{className:x.a.item,children:["Neutral:",Object(h.jsx)("span",{className:x.a.value,children:a})]}),Object(h.jsxs)("li",{className:x.a.item,children:["Bad:",Object(h.jsx)("span",{className:x.a.value,children:n})]}),Object(h.jsxs)("li",{className:x.a.item,children:["Total:",Object(h.jsx)("span",{className:x.a.value,children:s})]}),Object(h.jsxs)("li",{className:x.a.item,children:["Positive feedback:",Object(h.jsxs)("span",{className:x.a.value,children:[isNaN(c)?0:c,"%"]})]})]}),Object(h.jsx)("p",{className:x.a.massage})]})}var m=a(5),f=a.n(m);function p(t){var e=t.textBtn,a=t.onLeaveFeedback;return Object(h.jsx)("button",{className:"".concat(f.a.button," ").concat(f.a[e]),type:"button",onClick:function(t){return a(t)},children:e})}var k=a(10),N=a.n(k);function g(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{className:N.a.buttonsBox,children:e.map((function(t){return Object(h.jsx)(p,{textBtn:t,onLeaveFeedback:function(){return a(t)}},t)}))})}var F=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(t,e){return t+e}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state.good+this.state.bad;return Math.round(100*this.state.good/t)}},{key:"render",value:function(){var t=this.state,e=t.good,a=t.bad,n=t.neutral;return Object(h.jsxs)(v,{title:"Please leave feedback",children:[Object(h.jsx)(g,{options:Object.keys(this.state),onLeaveFeedback:this.addFeedback}),this.countTotalFeedback()>0&&Object(h.jsx)(O,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),a}(n.Component),B=F;i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.bd12922f.chunk.js.map