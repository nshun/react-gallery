(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(44),c=a.n(o),r=(a(73),a(2)),l=a(3),s=a(5),m=a(4),p=a(6),u=a(61),d=a.n(u),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),i.a.createElement("a",{className:"App-Name",href:"#top"},"Kasane"))}}]),t}(n.Component),h=a(7),f=a(62),b=a.n(f),w=a(138),v=a(139),j=a(19),I=a.n(j),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.toggleImage(this.props.id||"")}},{key:"render",value:function(){var e=this,t=this.props.detail;return t.url?i.a.createElement("div",{className:"popup"},i.a.createElement(b.a,{title:"Kasane",meta:[{name:"twitter:card",content:t.title},{name:"twitter:title",content:"Kasane"},{name:"twitter:description",content:t.description},{name:"twitter:image",content:t.url},{property:"og:title",content:"Kasane"},{property:"og:type",content:"article"},{property:"og:url",content:window.location.href},{property:"og:image",content:t.url},{property:"og:description",content:t.description}]}),i.a.createElement("div",{className:"popup-header"},i.a.createElement("h2",null,t.description)),i.a.createElement("div",{className:"popup-inner"},i.a.createElement("img",{className:"detail-image",alt:t.description||"",title:t.title||"",src:t.url||I.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=I.a}})),i.a.createElement("div",{className:"popup-footer"},i.a.createElement(w.a,{url:window.location.href,title:"".concat(t.description,' "').concat(t.title,'"')},i.a.createElement(v.a,{size:32,round:!0})))):i.a.createElement("div",{className:"hidden"})}}]),t}(n.Component),k=a(45),y=a.n(k),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.click(this.props.detail.id)}},{key:"render",value:function(){var e=this,t=this.props.detail;return i.a.createElement("img",{className:"list-image",tabIndex:"0",alt:t.description||"",title:t.title||"",src:t.url||I.a,width:t.width||"",height:t.height||"",onClick:function(){return e.onClick()},onError:function(e){e.target.onerror="",e.target.src=I.a}})}}]),t}(n.Component),A=!1,C=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(e){var t=document.body.getBoundingClientRect();document.getElementById("footer").getBoundingClientRect().top-t.top<window.scrollY+3*window.innerHeight&&a.listImagesApi()};var n=new URLSearchParams(window.location.search);return a.state={limit:36,offset:0,images:[],clickedImageId:n.get("id")||""},a.listImagesApi=a.listImagesApi.bind(Object(h.a)(Object(h.a)(a))),a.toggleImage=a.props.toggleImage.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"listImagesApi",value:function(){var e=this;A||(A=!0,fetch("https://wfc-2019.firebaseapp.com/images?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset),{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(t.ok){var a=t.data.images;e.setState({offset:e.state.offset+e.state.limit,images:e.state.images.concat(a)}),A=!1}else setInterval(e.listImagesApi,1e3)}).catch(function(t){setInterval(e.listImagesApi,1e3)}))}},{key:"componentWillMount",value:function(){this.listImagesApi()}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.images;return 0===t.length?i.a.createElement("h1",null," Loading... "):t.map(function(t){return i.a.createElement(y.a,{key:t.url,height:"25vw",width:"25vw",once:!0,offset:500},i.a.createElement(E,{detail:t,click:e.toggleImage})," ")})}}]),t}(n.Component),N=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=new URLSearchParams(window.location.search);return a.state={detail:{},clickedImageId:n.get("id")||""},a.toggleImage=a.toggleImage.bind(Object(h.a)(Object(h.a)(a))),a.getImageApi=a.getImageApi.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getImageApi",value:function(e){var t=this;e&&""!==e&&fetch("https://wfc-2019.firebaseapp.com/image/".concat(e),{method:"GET"}).then(function(e){return e.json()}).then(function(a){a.ok?t.setState({detail:a.data}):setInterval(t.getImageApi(e),1e3)})}},{key:"toggleImage",value:function(e){if(this.getImageApi(e),window.history.pushState){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;""!==e&&this.state.clickedImageId!==e&&(t+="?id=".concat(e)),window.history.pushState({path:t},"",t)}""===e?this.setState({detail:{},clickedImageId:""}):this.setState({clickedImageId:this.state.clickedImageId===e?"":e})}},{key:"componentWillMount",value:function(){this.getImageApi(this.state.clickedImageId)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(O,{toggleImage:this.toggleImage,detail:this.state.detail}),i.a.createElement(C,{toggleImage:this.toggleImage}))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{id:"footer",className:"App-footer"},i.a.createElement("a",{className:"App-link",href:"#top"},"Go Top"))}}]),t}(n.Component),B=(a(135),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"top",className:"App"},i.a.createElement(g,null),i.a.createElement(N,null),i.a.createElement(S,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,a){e.exports=a.p+"static/media/broken-link.dafb506b.svg"},61:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},68:function(e,t,a){e.exports=a(136)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.661e819f.chunk.js.map