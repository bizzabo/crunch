(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},15:function(e,t,a){},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(4),c=a.n(o),r=(a(15),a(1)),i=a.n(r),l=a(2),m=a(5),u=a(6),h=a(8),p=a(7),d=a(9),g=(a(19),function(){var e=Object(l.a)(i.a.mark(function e(t,a){var n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://8ehxwo1lmi.execute-api.us-east-1.amazonaws.com/alpha/events/".concat(t,"/attendees/").concat(a),e.next=3,fetch(n);case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()),w=a(21).default,f=["https://s3.amazonaws.com/bizzathon-2018-audio/1.mp3","https://s3.amazonaws.com/bizzathon-2018-audio/2.mp3","https://s3.amazonaws.com/bizzathon-2018-audio/3.mp3","https://s3.amazonaws.com/bizzathon-2018-audio/4.mp3"],v=function(){var e=Math.random();return e<.25?f[0]:e<.5?f[1]:e<.75?f[2]:f[3]},b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={soundStatus:w.status.STOPPED,selectedSound:v(),showDudu:!1},a.playSound=function(){a.setState({soundStatus:w.status.PLAYING,selectedSound:v()})},a.showDudu=function(){a.setState({showDudu:!0}),setTimeout(function(){a.setState({showDudu:!1})},200)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(window.location.href).searchParams.get("event"),a=new URL(window.location.href).searchParams.get("user"),e.next=4,g(t,a);case 4:n=e.sent,this.setState({images:n.attendeePhotos,eventName:n.event.name,attendeeName:"".concat(n.attendee.firstName," ").concat(n.attendee.lastName),profileImageSrc:n.attendee.thumbnailUrl});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.attendeeName,n=void 0===a?"YOU":a,o=t.profileImageSrc,c=void 0===o?"https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg":o,r=t.eventName,i=void 0===r?"the thing":r,l=t.images,m=void 0===l?[]:l;return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("img",{src:c,alt:"Barak Mazal Tov!"}),s.a.createElement("h1",null,"HI ",n,","),s.a.createElement("h3",null,"It was great seeing you at ",i)),s.a.createElement("section",{className:"gallery"},s.a.createElement("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},s.a.createElement("img",{src:"http://alawteam.com/fb.png",alt:"share",className:"share-button"})),s.a.createElement("h2",null,"YOU LOOK AMAZING!"),m&&m.map(function(t,a){return s.a.createElement("img",{onClick:e.playSound,className:"attendee-image",src:t,key:a,alt:"Your Photos"})})),s.a.createElement("section",{className:"sponsors"},s.a.createElement("h2",null,"THANKS TO OUR SPONSORS"),s.a.createElement("div",{className:"sponsors-container"},s.a.createElement("div",{className:"sponsors-row"},s.a.createElement("img",{className:"sponsor-image",src:"https://welcome.bizzabo.com/hs-fs/hub/318095/file-2435692466-png/images/bizzabo-logo.png?t=1537307148049&width=325&name=bizzabo-logo.png",alt:"Bizzabo"}),s.a.createElement("img",{className:"sponsor-image",src:"http://pngimg.com/uploads/google/google_PNG19644.png",alt:"Google"})),s.a.createElement("div",{className:"sponsors-row"},s.a.createElement("img",{className:"sponsor-image",src:"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1525720131/hubspot.png",alt:"Hubspot"}),s.a.createElement("img",{className:"sponsor-image",src:"https://sfi.mechatronics.no/wp-content/uploads/2017/05/github.png",alt:"Github"})))),s.a.createElement("section",{className:"next-event"},s.a.createElement("h2",null,"USE PHOTOVENT FREE FOR YOUR NEXT EVENT"),s.a.createElement("button",{onClick:this.showDudu},"TRY NOW")),s.a.createElement(w,{url:this.state.selectedSound,playStatus:this.state.soundStatus}),this.state.showDudu&&s.a.createElement("div",{className:"dudu"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2ccbfd62.chunk.js.map