(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),i=(a(21),a(2)),o=a(3),s=a(5),d=a(4),m=a(6),u=(a(22),a(23)),h="https://rickandmortyapi.com/api/character/";var E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={characters:[],character:[],showModal:!1,loding:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleCloseModal",value:function(e){e.target===e.currentTarget&&this.setState({showModal:!1})}},{key:"showOnecharacter",value:function(e,t){var a=this;u.get(h+e).then(function(e){console.log(e.data),a.setState({showModal:!0,character:e.data})})}},{key:"handleRequest",value:function(){var e=this;this.setState({loding:!0}),u.get(h).then(function(t){var a=t.data.results;console.log(a);var n=a.map(function(e){return console.log(e),e});e.setState({characters:n,loding:!1})})}},{key:"componentDidMount",value:function(){this.handleRequest()}},{key:"render",value:function(){var e=this;if(this.state.loding)return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{alt:"spinner",src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}));var t=this.state.character,a=this.state.characters.map(function(t){return l.a.createElement("div",{key:t.id,className:"wrappInner",onClick:e.showOnecharacter.bind(e,t.id)},l.a.createElement("div",{className:"nameImgHolder"},l.a.createElement("img",{alt:"",src:t.image}),l.a.createElement("div",{className:"nameHolder"},l.a.createElement("h2",null,t.name),l.a.createElement("p",null,"Id: ",t.id," - Created: ",function(e){switch(e=e.slice(0,4)){case"2017":e="2 years ago"}return e}(t.created)))),l.a.createElement("tabel",{className:"caracterStat"},l.a.createElement("tr",null," ",l.a.createElement("td",null,"Status:")," ",l.a.createElement("td",{className:"caracterValue"},t.status)),l.a.createElement("tr",null,l.a.createElement("td",null,"Gender: "),l.a.createElement("td",{className:"caracterValue"},t.gender)),l.a.createElement("tr",null,l.a.createElement("td",null,"Species: "),l.a.createElement("td",{className:"caracterValue"},t.species)),l.a.createElement("tr",null,l.a.createElement("td",null,"Origin: "),l.a.createElement("td",{className:"caracterValue"},t.origin.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last location: "),l.a.createElement("td",{className:"caracterValue"},t.location.name))))});return l.a.createElement("div",null,l.a.createElement(g,null),this.state.showModal&&l.a.createElement(p,{handleCloseModal:this.handleCloseModal.bind(this),id:t.id,name:t.name,status:t.status,gender:t.gender,origin:t.origin.name,image:t.image,species:t.species,location:t.location.name,created:t.created.slice(0,4)}),l.a.createElement("div",{className:"wrappFlex"},a))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"THE RICK AND MORTY SHOW"))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.gender,r=e.status,c=e.origin,i=e.image,o=e.species,s=e.location,d=e.created;return l.a.createElement("div",{onClick:this.props.handleCloseModal.bind(this),style:b},l.a.createElement("div",{style:v},l.a.createElement("button",{style:{float:"right"},onClick:this.props.handleCloseModal.bind(this)},"Close"),l.a.createElement("img",{alt:"",src:i}),l.a.createElement("p",null,"Id: ",t," Created: ",d),l.a.createElement("tabel",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name:"),l.a.createElement("td",null," ",a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Status:")," ",l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null,"Gender: "),l.a.createElement("td",null,n)),l.a.createElement("tr",null,l.a.createElement("td",null,"Species:")," ",l.a.createElement("td",null,o)),l.a.createElement("tr",null,l.a.createElement("td",null,"Origin:")," ",l.a.createElement("td",null,c)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last location:")," ",l.a.createElement("td",null,s)))))}}]),t}(n.Component),v={backgroundColor:"rgb(0, 0, 0, 0.65)",borderRadius:"5px",maxWidth:"70vw",minHeight:"70vh",margin:" 10px auto",padding:"30px",color:"#fff"},b={position:"fixed",zIndex:1,left:0,top:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0, 0, 0, 0.3)"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.5086bb30.chunk.js.map