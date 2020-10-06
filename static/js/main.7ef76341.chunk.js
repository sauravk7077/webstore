(this.webpackJsonpshopapp=this.webpackJsonpshopapp||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=(a(35),a(8)),i=a(9),m=a(14),s=a(15),u=a(10),d=a(28),p=a(16),E=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"set",value:function(e){localStorage.setItem("_orders",JSON.stringify(e))}},{key:"get",value:function(){return JSON.parse(localStorage.getItem("_orders"))}}]),e}(),v=Object(n.createContext)(),f=new E,h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).findItem=function(e,t){return e.find((function(e){return e.id===t}))},e.updateCount=function(t,a){var n=e.state.cart;1===e.findItem(n,t).count&&a<0?e.removeFromCart(t):e.setState({cart:n.map((function(e){return e.id===t?Object(p.a)({},e,{count:e.count+a}):e}))},e.updateLocalStorage)},e.updateLocalStorage=function(){f.set(e.state.cart)},e.addToCart=function(t){if(e.state.cart.some((function(e){return e.id===t.id})))e.updateCount(t.id,1);else{t=Object(p.a)({},t,{count:1});var a=[].concat(Object(d.a)(e.state.cart),[t]);e.setState({cart:a},e.updateLocalStorage)}},e.clearCart=function(t){e.setState({cart:[]}),e.updateLocalStorage()},e.removeFromCart=function(t){var a=e.state.cart.filter((function(e){return e.id!==t}));e.setState({cart:a}),e.updateLocalStorage()},e.toggleShow=function(t){e.setState((function(e){return{show:!e.show}}))},e.state={cart:f.get()?f.get():[],show:!1},f.get()?e.setState({cart:f.get()}):f.set(e.state.cart),e}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(p.a)({},this.state,{addToCart:this.addToCart,removeFromCart:this.removeFromCart,toggleShow:this.toggleShow,updateCount:this.updateCount,findItem:this.findItem,clearCart:this.clearCart});return r.a.createElement(v.Provider,{value:e},this.props.children)}}]),a}(r.a.Component),g=a(5),b=a(7);var k=function(){var e=Object(n.useContext)(v).toggleShow;return r.a.createElement("header",null,r.a.createElement("div",{id:"logo"},r.a.createElement("h2",null,"Shop App")),r.a.createElement("nav",null,r.a.createElement(u.b,{className:"link",to:"/",exact:!0},"Home"),r.a.createElement(u.b,{className:"link",to:"/about"},"About"),r.a.createElement(u.b,{className:"link",to:"/orders"},"Orders"),r.a.createElement("button",{className:"link",id:"cartBtn",onClick:e},r.a.createElement(g.a,{icon:b.c}),"\xa0Cart")))},N=a(6),w=a.n(N),C=a(27);var j=function(){return r.a.createElement("section",{id:"about"},r.a.createElement(w.a,null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"This is a project by Saurav Kumar. To check out the source code of this project, click the button below."),r.a.createElement("h4",null,"Credits"),r.a.createElement("p",null,"All the photos used in this project are from pexels."),r.a.createElement("p",null,"Photo by Tom Swinnen from Pexels"),r.a.createElement("div",null,r.a.createElement("a",{className:"btn",href:"https://github.com/sauravk7077/shopapp"},r.a.createElement(g.a,{icon:C.a}),"\xa0Visit GitHub Page"))))};var S=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"btn"+(e.className?" "+e.className:""),onClick:e.click},e.value)};var O=function(e){var t=Object(n.useContext)(v),a=e.name,c=e.price,l=e.image,o=e.id,i=e.mrp,m=t.findItem(t.cart,o);return r.a.createElement(w.a,{big:!0},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"./img/"+l,alt:"Tomato Sauce",loading:"lazy"})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"name"},a),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("p",null,c+"$"),r.a.createElement("p",null," (MRP - ",i+"$",") "))),r.a.createElement(S,{value:m?"Add More":"Add To Cart",click:function(a){return t.addToCart(e)}}))))};var y=function(){return r.a.createElement("section",{id:"home"},r.a.createElement(w.a,{big:!0,cascade:!0},r.a.createElement("div",{className:"items-container"},r.a.createElement(O,{id:"dfl4",name:"Koda Camera",price:500,mrp:800,image:"cam.jpg"}),r.a.createElement(O,{id:"dfl3",name:"Tomato",price:400,mrp:700,image:"tomato.jpg"}),r.a.createElement(O,{id:"dfl8",name:"Yellow Potato",price:400,mrp:700,image:"Potato.jpg"}),r.a.createElement(O,{id:"dfl5",name:"Bluetooth Speaker",price:400,mrp:700,image:"bSpeaker.jpg"}),r.a.createElement(O,{id:"dfl3",name:"Tomato",price:400,mrp:700,image:"tomato.jpg"}),r.a.createElement(O,{id:"dgl8",name:"Yellow Potato",price:400,mrp:700,image:"Potato.jpg"}),r.a.createElement(O,{id:"dil8",name:"Bluetooth Speaker",price:400,mrp:700,image:"bSpeaker.jpg"}),r.a.createElement(O,{id:"drl7",name:"Koda Camera",price:500,mrp:800,image:"cam.jpg"}))))},x=a(29);var T=function(e){var t=Object(n.useContext)(v).updateCount,a=e.ob,c=a.name,l=a.price,o=a.image,i=a.id,m=a.count;return console.log(e),r.a.createElement(w.a,{big:!0,cascade:!0},r.a.createElement("div",{className:"orderItem"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"./img/"+o,alt:"Tomato Sauce",loading:"lazy"})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"name"},c),r.a.createElement("div",null,l+"$"),r.a.createElement("div",null,"Quantity: ",m),r.a.createElement("div",{className:"incrementBox"},r.a.createElement(S,{className:"slim",value:r.a.createElement(g.a,{icon:b.b}),click:function(e){return t(i,1)}}),r.a.createElement(S,{className:"slim",value:r.a.createElement(g.a,{icon:b.a}),click:function(e){return t(i,-1)}})))))};var P=function(e){return r.a.createElement("div",{className:"checkOut ".concat(e.className)},r.a.createElement(w.a,{when:!e.className},r.a.createElement("h3",null,"Success!"),r.a.createElement("p",null,"You have sucessfully bought the items."),r.a.createElement(S,{value:"OK",click:e.click})))};var A=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],c=t[1],l=function(){c(!a)},o={},i=Object(n.useContext)(v),m=i.cart,s=i.clearCart,u=m.map((function(e){return r.a.createElement(T,{ob:e})})),d=r.a.createElement("div",{className:"empty"},"Your cart is empty");if(u.length>0){var p=m.reduce((function(e,t){return e+t.price*t.count}),0),E=m.reduce((function(e,t){return e+t.count}),0);d=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your Orders"),r.a.createElement("div",{className:"ordersPage"},r.a.createElement("div",{className:"ordersContainer"},u),r.a.createElement("div",{className:"checkoutBox"},r.a.createElement("p",null,"Total Items"),r.a.createElement("h2",null,E),r.a.createElement("p",null,"Total Payment"),r.a.createElement("h2",null,"$",p))),r.a.createElement(P,{className:a?"":"hidden",click:function(e){l(),s()}}))}else o={justifyContent:"center"};return r.a.createElement("section",{id:"orders",style:o},d,u.length>0?r.a.createElement(S,{value:"CheckOut",click:l}):"")};var I=function(){var e=Object(n.useContext)(v),t=e.cart,a=e.show,c=e.updateCount,l=e.toggleShow,o=Object(n.useRef)(),i=function(e){!o.current.contains(e.target)&&a&&l()};Object(n.useEffect)((function(){return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}));var m=t.map((function(e){return r.a.createElement("div",{className:"cartItem",key:e.id},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"./img/"+e.image,alt:e.name})),r.a.createElement("div",null,r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",null,"Price - $",e.price),r.a.createElement("div",null,"Quantity: ",e.count),r.a.createElement("div",{className:"incrementBox"},r.a.createElement(S,{className:"slim",value:r.a.createElement(g.a,{icon:b.b}),click:function(t){return c(e.id,1)}}),r.a.createElement(S,{className:"slim",value:r.a.createElement(g.a,{icon:b.a}),click:function(t){return c(e.id,-1)}}))))})),s=r.a.createElement("div",{className:"empty"},"Your cart is empty.");return r.a.createElement("div",{ref:o,className:"cartBox"+(a?"":" hidden"),tabIndex:"1"},r.a.createElement("div",{className:"cartTop"},r.a.createElement("h3",null,"Cart")),m.length>0?m.concat(r.a.createElement("a",{href:"./orders"},r.a.createElement(S,{value:"Buy"}))):s,r.a.createElement(S,{className:"close subtle",click:l,value:r.a.createElement(g.a,{icon:b.d})}))},B=a(2),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(u.a,null,r.a.createElement("div",{ref:"node",className:"App"},r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(B.a,{path:"/",component:y,exact:!0}),r.a.createElement(B.a,{path:"/about",component:j}),r.a.createElement(B.a,{path:"/orders",component:A}))))}}]),a}(r.a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.7ef76341.chunk.js.map