(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(21),t(14)),i=t(2),l=t(3),m=t.n(l),s={getAll:function(){return m.a.get("/persons").then(function(e){return e.data})},create:function(e){return m.a.post("/persons",e).then(function(e){return e.data})},remove:function(e){return m.a.delete("".concat("/persons","/").concat(e)).then(function(e){return e.data})},update:function(e,n){return m.a.put("".concat("/persons","/").concat(e),n).then(function(e){return e.data})}},f=function(e){var n=e.notification;if(null===n.message)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:t},n.message)},d=function(e){return r.a.createElement("div",null,"filter shown",r.a.createElement("input",{onChange:e.handleChange,value:e.value}))},h=function(e){return e.persons.map(function(n){return r.a.createElement("div",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return e.deletePerson(n.id)}},"delete"))})},b=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:e.handleNameChange,value:e.newName})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:e.handleNumberChange,value:e.newNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),m=l[0],g=l[1],p=Object(a.useState)(""),v=Object(i.a)(p,2),E=v[0],w=v[1],j=Object(a.useState)(""),C=Object(i.a)(j,2),O=C[0],S=C[1],y=Object(a.useState)({message:null}),N=Object(i.a)(y,2),k=N[0],P=N[1];Object(a.useEffect)(function(){s.getAll().then(function(e){u(e)})},[]);var L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";P({message:e,type:n}),setTimeout(function(){return P({message:null})},1e4)},A=0===O.length?t:t.filter(function(e){return e.name.toLowerCase().includes(O.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(f,{notification:k}),r.a.createElement(d,{handleChange:function(e){return S(e.target.value)},value:O}),r.a.createElement("h3",null,"lis\xe4\xe4 uusi"),r.a.createElement(b,{handleNameChange:function(e){return g(e.target.value)},handleNumberChange:function(e){return w(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name===m});n?window.confirm("".concat(m,"is in the file, do you want to replace it?"))&&s.replace(Object(o.a)({},n,{number:E})).then(function(e){u(t.map(function(n){return n.name===m?e:n})),g(""),w(""),L("Henkil\xf6n ".concat(m," numero muutettu"))}):s.create({name:m,number:E}).then(function(e){u(t.concat(e)),g(""),w(""),L("Lis\xe4ttiin ".concat(e.name))})},newName:m,newNumber:E}),r.a.createElement("h3",null,"Numerot"),r.a.createElement(h,{persons:A,deletePerson:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Poistetaanko ".concat(n.name))&&(s.remove(e).then(function(){u(t.filter(function(n){return n.id!==e}))}),L("Poistettiin ".concat(n.name)))}}))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.51792dcc.chunk.js.map