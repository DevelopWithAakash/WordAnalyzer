(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(13),a(1));a(15);function m(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-{props.mode} bg-{props.mode}"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))))))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},id:"myBox",rows:"9"})),r.a.createElement("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var e=l.toUpperCase();c(e)}},"Convert to Uppercase"),r.a.createElement("button",{className:"btn btn-success my-1 mx-1",onClick:function(){var e=l.toLowerCase();c(e)}},"Convert to Lowercase"),r.a.createElement("button",{className:"btn btn-info my-1 mx-1",onClick:function(){var e=l.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");c(e)}},"Convert to Capitalization"),r.a.createElement("button",{className:"btn btn-secondary my-1 mx-1",onClick:function(){var e=l.split(/[ ]+/).join(" ");c(e)}},"Remove Extra Spaces"),r.a.createElement("button",{className:"btn btn-warning my-1 mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text"),r.a.createElement("button",{className:"btn btn-danger my-1 mx-1",onClick:function(){c("")}},"Clear Text")),r.a.createElement("div",{className:"container my-3"},r.a.createElement("h2",null,"Your Text Summary"),r.a.createElement("p",null,""===l.trim()?0:l.match(/\S+/g).length," words and ",l.replace(/\s/g,"").length," Characters"),r.a.createElement("p",null,.008*l.split(" ").length," Minutes to read"),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,l)))}m.defaultProps={title:"Set title",aboutText:"About us"};var s=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"MTD",mode:a,toggleMode:function(){l("light"===a?"dark":"light")}}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(i,{heading:"Enter your text below to analyze"})))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.4aa21fd8.chunk.js.map