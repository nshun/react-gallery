(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(42),c=a.n(o),r=(a(71),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),d=a(60),h=a.n(d),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("span",null,"React Gallery App"))}}]),t}(n.Component),g=a(7),f=a(129),b=a(130),j=a(19),v=a.n(j),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.toggleImage(this.props.id||"")}},{key:"render",value:function(){var e=this,t=this.props.detail;return t.url?i.a.createElement("div",{className:"popup"},i.a.createElement("div",{className:"popup-header"},i.a.createElement("h2",null,t.description)),i.a.createElement("div",{className:"popup-inner"},i.a.createElement("img",{className:"detail-image",alt:t.description||"",title:t.title||"",src:t.url||v.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=v.a}})),i.a.createElement("div",{className:"popup-footer"},i.a.createElement(f.a,{url:window.location.href,title:"".concat(t.description,' "').concat(t.title,'"')},i.a.createElement(b.a,{size:32,round:!0})))):i.a.createElement("div",{className:"hidden"})}}]),t}(n.Component),w=a(43),I=a.n(w),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.click(this.props.detail.id)}},{key:"render",value:function(){var e=this,t=this.props.detail;return i.a.createElement("img",{className:"list-image",alt:t.description||"",title:t.title||"",src:t.url||v.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=v.a}})}}]),t}(n.Component),E=!1,y=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=document.body.getBoundingClientRect();document.getElementById("footer").getBoundingClientRect().top-t.top<window.scrollY+3*window.innerHeight&&a.listImagesApi()};var n=new URLSearchParams(window.location.search);return a.state={limit:24,offset:0,images:[],clickedImageId:n.get("id")||""},a.listImagesApi=a.listImagesApi.bind(Object(g.a)(Object(g.a)(a))),a.toggleImage=a.props.toggleImage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"listImagesApi",value:function(){var e=this;E||(E=!0,fetch("https://wfc-2019.firebaseapp.com/images?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset),{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(t.ok){var a=t.data.images;e.setState({offset:e.state.offset+e.state.limit,images:e.state.images.concat(a)}),E=!1}else setInterval(e.listImagesApi,1e3)}))}},{key:"componentWillMount",value:function(){this.listImagesApi()}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.images;return 0===t.length?i.a.createElement("h1",null," Loading... "):t.map(function(t,a){return i.a.createElement(I.a,{height:"25vmin",once:!0,offset:500},i.a.createElement(k,{key:a,detail:t,click:e.toggleImage})," ")})}}]),t}(n.Component),A=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new URLSearchParams(window.location.search);return a.state={detail:{},clickedImageId:n.get("id")||""},a.toggleImage=a.toggleImage.bind(Object(g.a)(Object(g.a)(a))),a.getImageApi=a.getImageApi.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getImageApi",value:function(e){var t=this;e&&""!==e&&fetch("https://wfc-2019.firebaseapp.com/image/".concat(e),{method:"GET"}).then(function(e){return e.json()}).then(function(a){a.ok?t.setState({detail:a.data}):setInterval(t.getImageApi(e),1e3)})}},{key:"toggleImage",value:function(e){if(this.getImageApi(e),window.history.pushState){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;""!==e&&this.state.clickedImageId!==e&&(t+="?id=".concat(e)),window.history.pushState({path:t},"",t)}""===e?this.setState({detail:{},clickedImageId:""}):this.setState({clickedImageId:this.state.clickedImageId===e?"":e})}},{key:"componentWillMount",value:function(){this.getImageApi(this.state.clickedImageId)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(O,{toggleImage:this.toggleImage,detail:this.state.detail}),i.a.createElement(y,{toggleImage:this.toggleImage}))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{id:"footer",className:"App-footer"},i.a.createElement("a",{className:"App-link",href:""},"footer"))}}]),t}(n.Component),N=(a(126),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(A,null),i.a.createElement(C,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,a){e.exports=a.p+"static/media/broken-link.dafb506b.svg"},60:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},66:function(e,t,a){e.exports=a(127)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.ae69b75a.chunk.js.map