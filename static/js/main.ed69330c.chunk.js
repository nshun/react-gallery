(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},12:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o),r=(n(18),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),m=n(11),d=n.n(m),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),i.a.createElement("span",null,"React Gallery App"))}}]),t}(a.Component),f=n(6),g=n(9),b=n.n(g),j=n(7),O=n.n(j),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.click(this.props.detail.id)}},{key:"render",value:function(){var e=this,t=this.props.detail;return i.a.createElement("img",{className:"list-image",alt:t.description||"",title:t.title||"",src:t.url||O.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=O.a}})}}]),t}(a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.click(this.props.detail.id)}},{key:"render",value:function(){var e=this,t=this.props.detail;return i.a.createElement("img",{className:"detail-image",alt:t.description||"",title:t.title||"",src:t.url||O.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=O.a}})}}]),t}(a.Component),v=!1,y=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=document.body.getBoundingClientRect();document.getElementById("footer").getBoundingClientRect().top-t.top<window.scrollY+2*window.innerHeight&&n.listImagesApi()};var a=new URLSearchParams(window.location.search);return n.state={limit:20,offset:0,images:[],clickedImageId:a.get("id")||""},n.listImagesApi=n.listImagesApi.bind(Object(f.a)(Object(f.a)(n))),n.toggleImage=n.toggleImage.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"listImagesApi",value:function(){var e=this;v||(v=!0,fetch("https://wfc-2019.firebaseapp.com/images?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset),{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(t.ok){var n=t.data.images;e.setState({offset:e.state.offset+e.state.limit,images:e.state.images.concat(n)}),v=!1}else setInterval(e.listImagesApi,1e3)}))}},{key:"toggleImage",value:function(e){if(window.history.pushState){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;this.state.clickedImageId!==e&&(t+="?id=".concat(e)),window.history.pushState({path:t},"",t)}this.setState({clickedImageId:this.state.clickedImageId===e?"":e})}},{key:"componentWillMount",value:function(){this.listImagesApi()}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.images;if(0===t.length)return i.a.createElement("h1",null," Loading... ");var n=this.state.clickedImageId;return t.map(function(t,a){return t.id===n?i.a.createElement(w,{key:a+"_d",detail:t,click:e.toggleImage}):i.a.createElement(b.a,{height:"25vmin",once:!0,offset:100},i.a.createElement(k,{key:a,detail:t,click:e.toggleImage})," ")})}}]),t}(a.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(y,null))}}]),t}(a.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{id:"footer",className:"App-footer"},i.a.createElement("a",{className:"App-link",href:""},"footer"))}}]),t}(a.Component),C=(n(27),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(E,null),i.a.createElement(I,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/broken-link.dafb506b.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.ed69330c.chunk.js.map