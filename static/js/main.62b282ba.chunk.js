(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},12:function(e,t,a){e.exports=a(28)},18:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),c=a.n(o),r=(a(18),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),g=a(11),h=a.n(g),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("span",null,"React Gallery App"))}}]),t}(n.Component),p=a(6),f=a(7),b=a.n(f),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.toggleImage(this.props.id||"")}},{key:"render",value:function(){var e=this,t=this.props.detail;return t.url?i.a.createElement("div",{className:"popup"},i.a.createElement("div",{className:"popup-inner"},i.a.createElement("img",{className:"detail-image",alt:t.description||"",title:t.title||"",src:t.url||b.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=b.a}}))):i.a.createElement("div",{className:"hidden"})}}]),t}(n.Component),v=a(9),O=a.n(v),I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.click(this.props.detail.id)}},{key:"render",value:function(){var e=this,t=this.props.detail;return i.a.createElement("img",{className:"list-image",alt:t.description||"",title:t.title||"",src:t.url||b.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=b.a}})}}]),t}(n.Component),k=!1,w=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=document.body.getBoundingClientRect();document.getElementById("footer").getBoundingClientRect().top-t.top<window.scrollY+2*window.innerHeight&&a.listImagesApi()};var n=new URLSearchParams(window.location.search);return a.state={limit:20,offset:0,images:[],clickedImageId:n.get("id")||""},a.listImagesApi=a.listImagesApi.bind(Object(p.a)(Object(p.a)(a))),a.toggleImage=a.props.toggleImage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"listImagesApi",value:function(){var e=this;k||(k=!0,fetch("https://wfc-2019.firebaseapp.com/images?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset),{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(t.ok){var a=t.data.images;e.setState({offset:e.state.offset+e.state.limit,images:e.state.images.concat(a)}),k=!1}else setInterval(e.listImagesApi,1e3)}))}},{key:"componentWillMount",value:function(){this.listImagesApi()}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.images;return 0===t.length?i.a.createElement("h1",null," Loading... "):t.map(function(t,a){return i.a.createElement(O.a,{height:"25vmin",once:!0,offset:100},i.a.createElement(I,{key:a,detail:t,click:e.toggleImage})," ")})}}]),t}(n.Component),y=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new URLSearchParams(window.location.search);return a.state={detail:{},clickedImageId:n.get("id")||""},a.toggleImage=a.toggleImage.bind(Object(p.a)(Object(p.a)(a))),a.getImageApi=a.getImageApi.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getImageApi",value:function(e){var t=this;e&&""!==e&&fetch("https://wfc-2019.firebaseapp.com/image/".concat(e),{method:"GET"}).then(function(e){return e.json()}).then(function(a){a.ok?t.setState({detail:a.data}):setInterval(t.getImageApi(e),1e3)})}},{key:"toggleImage",value:function(e){if(this.getImageApi(e),window.history.pushState){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;""!==e&&this.state.clickedImageId!==e&&(t+="?id=".concat(e)),window.history.pushState({path:t},"",t)}""===e?this.setState({detail:{},clickedImageId:""}):this.setState({clickedImageId:this.state.clickedImageId===e?"":e})}},{key:"componentWillMount",value:function(){this.getImageApi(this.state.clickedImageId)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(j,{toggleImage:this.toggleImage,detail:this.state.detail}),i.a.createElement(w,{toggleImage:this.toggleImage}))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{id:"footer",className:"App-footer"},i.a.createElement("a",{className:"App-link",href:""},"footer"))}}]),t}(n.Component),A=(a(27),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(y,null),i.a.createElement(E,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a.p+"static/media/broken-link.dafb506b.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.62b282ba.chunk.js.map