(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={statistics:"Statistics_statistics__1k-DU",title:"Statistics_title__1eHQd",item:"Statistics_item__dZDga",value:"Statistics_value__cZfiz"}},,,,function(t,e,a){t.exports={container:"Section_container__2NRdN",title:"Section_title__WLBH-"}},,function(t,e,a){t.exports={button:"Button_button__2LStp",good:"Button_good__2j0K_",bad:"Button_bad__3RBxT",neutral:"Button_neutral__3mpZj"}},,function(t,e,a){t.exports={buttonsBox:"FeedbackOptions_buttonsBox__15Z6q"}},,,,,function(t,e,a){},,,,function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),c=a(8),i=a.n(c),o=(a(14),a(3)),r=a(5),l=a.n(r),u=a(0);function d(t){var e=t.title,a=t.children;return Object(u.jsxs)("div",{className:l.a.container,children:[e&&Object(u.jsx)("h3",{className:l.a.title,children:e}),a]})}var b=a(1),j=a.n(b);function x(t){var e=t.good,a=t.neutral,n=t.bad,s=t.total,c=t.positivePercentage;return Object(u.jsxs)("div",{className:j.a.statistics,children:[Object(u.jsx)("h3",{className:j.a.title,children:" Statistics "}),Object(u.jsxs)("ul",{className:j.a.list,children:[Object(u.jsxs)("li",{className:j.a.item,children:["Good:",Object(u.jsx)("span",{className:j.a.value,children:e})]}),Object(u.jsxs)("li",{className:j.a.item,children:["Neutral:",Object(u.jsx)("span",{className:j.a.value,children:a})]}),Object(u.jsxs)("li",{className:j.a.item,children:["Bad:",Object(u.jsx)("span",{className:j.a.value,children:n})]}),Object(u.jsxs)("li",{className:j.a.item,children:["Total:",Object(u.jsx)("span",{className:j.a.value,children:s})]}),Object(u.jsxs)("li",{className:j.a.item,children:["Positive feedback:",Object(u.jsxs)("span",{className:j.a.value,children:[isNaN(c)?0:c,"%"]})]})]}),Object(u.jsx)("p",{className:j.a.massage})]})}var _=a(6),h=a.n(_),O=a(7),m=a.n(O);function p(t){var e=t.textBtn,a=t.onLeaveFeedback;return Object(u.jsx)("button",{className:"".concat(m.a.button," ").concat(m.a[e]),type:"button",onClick:function(t){return a(t)},children:e})}var v=a(9),f=a.n(v);function N(t){var e=t.options,a=t.onLeaveFeedback;return Object(u.jsx)("div",{className:f.a.buttonsBox,children:e.map((function(t){return Object(u.jsx)(p,{textBtn:t,onLeaveFeedback:function(){return a(t)}},t)}))})}function k(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),a=e[0],s=e[1],c=Object(n.useState)(0),i=Object(o.a)(c,2),r=i[0],l=i[1],b=Object(n.useState)(0),j=Object(o.a)(b,2),_=j[0],h=j[1],O=a+_+r,m=Math.round(100*a/(a+r));return Object(u.jsxs)(d,{title:"Please leave feedback",children:[Object(u.jsx)(N,{options:["good","bad","neutral"],onLeaveFeedback:function(t){switch(t){case"good":return s((function(t){return t+1}));case"neutral":return h((function(t){return t+1}));case"bad":return l((function(t){return t+1}));default:return}}}),O>0&&Object(u.jsx)(x,{good:a,neutral:_,bad:r,total:O,positivePercentage:m})]})}p.propTypes={options:h.a.array.isRequired,onLeaveFeedback:h.a.func},i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b38db8ce.chunk.js.map