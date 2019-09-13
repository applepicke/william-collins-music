(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(208),l=a.n(c),s=a(203),r=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement("div",{className:"logo"},i.a.createElement("span",{className:"icon fa-music"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("h5",null,"Music Production"),i.a.createElement("h1",null,"William Collins"),i.a.createElement("p",null,"Original music for video games, film, and television"))),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("music")}},"Music")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("licensing")}},"Licensing")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")))))},u=function(e){var t=e.article,a=e.articleTimeout,n=e.children,c=e.onCloseArticle,s=e.title;return i.a.createElement("article",{id:s.toLowerCase(),className:l()({active:t===s.toLowerCase(),timeout:a}),style:{display:"none"}},i.a.createElement("h2",{className:"major"},s),n,i.a.createElement("div",{className:"close",onClick:c}))},o=(a(45),a(209)),A=a.n(o),m=function(e){var t=e.img,a=e.name,c=e.src,l=(e.triggerPlay,Object(n.useState)(!1));l[0],l[1];return i.a.createElement("div",{className:"song",style:{display:"flex","justify-content":"space-between","align-items":"center",padding:"8px 0"}},i.a.createElement("div",{style:{display:"flex","justify-content":"space-between","align-items":"center"}},i.a.createElement("img",{className:"song-img",src:t||A.a,style:{"margin-right":"12px",width:"64px",height:"64px",padding:t?"0":"8px","border-radius":"8px"}}),i.a.createElement("span",{className:"song-name"},a)),i.a.createElement("audio",{controls:!0,src:c},"Your browser does not support the ",i.a.createElement("code",null,"audio")," element."))},M=a(210),p=a.n(M),N=a(211),T=a.n(N),L=a(212),d=a.n(L),g=a(213),j=a.n(g),f=a(214),E=a.n(f),y=a(215),z=a.n(y),D=a(216),O=a.n(D),b=a(217),C=a.n(b),w=a(218),S=a.n(w),h=a(219),I=a.n(h),v=a(220),x=a.n(v),U=a(221),Q=a.n(U),k=a(222),K=a.n(k),V=a(223),Y=a.n(V);var Z=[{name:"Dinonaut: Defender of Celestial Dwarfs",img:p.a,src:z.a},{name:"Retribution",img:T.a,src:O.a},{name:"Silent Light",img:d.a,src:C.a},{name:"Doubt",src:K.a},{name:"Gascreep's Fortune",img:E.a,src:Y.a},{name:"As They Fell From The Sky",src:S.a},{name:"I've got an idea",img:j.a,src:I.a},{name:"Build up the Base: Overworld",src:Q.a},{name:"Fuckin' Josh",src:x.a}],B=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(n.useState)(null);t[0],t[1];return i.a.createElement("div",{className:"song-manager"},Z.map((function(e){return i.a.createElement(m,{name:e.name,img:e.img,src:e.src})})))};var P=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.article,a=e.articleTimeout,n=e.onCloseArticle,c=(e.route,e.setWrapperRef),l=e.timeout;return i.a.createElement("div",{ref:c,id:"main",style:{display:l?"flex":"none"}},i.a.createElement(u,{article:t,articleTimeout:a,onCloseArticle:n,title:"Music"},i.a.createElement(B,null)),i.a.createElement(u,{article:t,articleTimeout:a,onCloseArticle:n,title:"Licensing"},i.a.createElement("p",null,"Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my ",i.a.createElement("a",{href:"#work"},"awesome work"),"."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.")),i.a.createElement(u,{article:t,articleTimeout:a,onCloseArticle:n,title:"About"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.")),i.a.createElement(u,{article:t,articleTimeout:a,onCloseArticle:n,title:"Contact"},i.a.createElement("form",{method:"post",action:"#"},i.a.createElement("div",{className:"field half first"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"field half"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"text",name:"email",id:"email"})),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),i.a.createElement("ul",{className:"actions"},i.a.createElement("li",null,i.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),i.a.createElement("li",null,i.a.createElement("input",{type:"reset",value:"Reset"})))),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-twitter"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-facebook"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-github"},i.a.createElement("span",{className:"label"},"GitHub"))))))},n}(i.a.Component),G=(new Date).getFullYear(),W=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"© William Collins ",G))};var J=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setWrapperRef=function(e){a.wrapperRef=e},a.handleOpenArticle=function(e){var t=a.state,n=t.articleTimeout,i=t.isArticleVisible,c=t.timeout;a.setState({isArticleVisible:!i,article:e}),setTimeout((function(){a.setState({timeout:!c})}),325),setTimeout((function(){a.setState({articleTimeout:!n})}),350)},a.handleCloseArticle=function(){var e=a.state,t=e.articleTimeout,n=e.isArticleVisible,i=e.timeout;a.setState({articleTimeout:!t}),setTimeout((function(){a.setState({timeout:!i})}),325),setTimeout((function(){a.setState({isArticleVisible:!n,article:""})}),350)},a.handleClickOutside=function(e){a.wrapperRef&&!a.wrapperRef.contains(e.target)&&a.state.isArticleVisible&&a.handleCloseArticle()},a.state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},c.render=function(){var e=this.props.location,t=this.state,a=t.article,n=t.articleTimeout,c=t.isArticleVisible,u=t.loading,o=t.timeout;return i.a.createElement(s.a,{location:e},i.a.createElement("div",{className:l()({body:!0,"is-loading":!!u,"is-article-visible":c})},i.a.createElement("div",{id:"wrapper"},i.a.createElement(r,{onOpenArticle:this.handleOpenArticle,timeout:o}),i.a.createElement(P,{isArticleVisible:c,timeout:o,articleTimeout:n,article:a,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.a.createElement(W,{timeout:o})),i.a.createElement("div",{id:"bg"})))},n}(i.a.Component);t.default=J},208:function(e,t,a){var n;a(36),function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=i.apply(null,n);l&&e.push(l)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},209:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgZmlsbD0id2hpdGUiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0ODguMTcyIDQ4OC4xNzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC4xNzIgNDg4LjE3MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE2OC40MTIsMTEzLjE4MWgxNTEuMzk1YzIuMDY1LDAsMy45NjgtMS4xNzEsNC45MDUtMy4wMjVjMC45MzQtMS44NTQsMC43NDItNC4wNzMtMC41MDEtNS43NDNMMjQ4LjUzNywyLjIyNQ0KCQlDMjQ3LjQ4NywwLjgzLDI0NS44NTksMCwyNDQuMTE3LDBjLTEuNzQxLDAtMy4zODcsMC44My00LjQxOSwyLjIyNWwtNzUuNjksMTAyLjE4OGMtMS4yNDMsMS42Ny0xLjQzNiwzLjg4OS0wLjUwMiw1Ljc0Mw0KCQlDMTY0LjQ0MywxMTIuMDEsMTY2LjM0OCwxMTMuMTgxLDE2OC40MTIsMTEzLjE4MXoiLz4NCgk8cGF0aCBkPSJNNDc0Ljk2OSwxODQuMjI1Yy0wLjAwMi00LjM4LTMuNTUzLTcuOTMtNy45MzMtNy45M0g0NTEuNzljLTQuMzQxLDAtNy44NzYsMy40ODktNy45MzMsNy44MzFsLTAuMjIsMTcuMDUzaC0xOC42NXYtMTYuOTUxDQoJCWMwLTQuMzgxLTMuNTUyLTcuOTMzLTcuOTMzLTcuOTMzaC0xNS40NzhjLTQuMzgxLDAtNy45MzMsMy41NTItNy45MzMsNy45MzN2MTYuOTUxaC0xOC42MTZ2LTE2Ljk1MQ0KCQljMC00LjM4MS0zLjU1Mi03LjkzMy03LjkzMy03LjkzM2gtMTUuNTAyYy00LjM3OCwwLTcuOTI5LDMuNTQ3LTcuOTMzLDcuOTI1bC0wLjA3NCw3Mi42NmgtMzYuNTU0VjEzNC42ODQNCgkJYzAtMy4zMTQtMi42NzgtNS45OTQtNS45ODUtNS45OTRIMTg3LjIwNWMtMy4zMDYsMC01Ljk4NCwyLjY4LTUuOTg0LDUuOTk0djEyMi4xOTdoLTM2LjI0OGwwLjA0NC03Mi42NDcNCgkJYzAuMDAxLTIuMTA0LTAuODM0LTQuMTI0LTIuMzIxLTUuNjEyYy0xLjQ4OC0xLjQ4OC0zLjUwNy0yLjMyNS01LjYxMS0yLjMyNWgtMTUuODEzYy00LjM4MSwwLTcuOTMzLDMuNTUyLTcuOTMzLDcuOTMzdjE2Ljk1MQ0KCQlIOTQuNzIxdi0xNi45NTFjMC00LjM4MS0zLjU1Mi03LjkzMy03LjkzMy03LjkzM0g3MS4zMTFjLTQuMzgxLDAtNy45MzMsMy41NTItNy45MzMsNy45MzN2MTYuOTUxSDQ0LjcyOXYtMTYuOTUxDQoJCWMwLTQuMzgxLTMuNTUyLTcuOTMzLTcuOTMzLTcuOTMzSDIxLjMxYy00LjM3OCwwLTcuOTI5LDMuNTQ3LTcuOTMzLDcuOTI1bC0wLjMsMzAzLjk1MWgxNzEuNjQzVjQzNi45Mw0KCQljMC0zMi43ODgsMjYuNTg1LTU5LjM2NSw1OS4zNjUtNTkuMzY1YzMyLjc3OSwwLDU5LjM2NSwyNi41NzcsNTkuMzY1LDU5LjM2NXY1MS4yNDJoMTcxLjY0M0w0NzQuOTY5LDE4NC4yMjV6IE0xMDAuMDQ0LDMxNS44Mg0KCQljMCwzLjMxNS0yLjY3OSw1Ljk5My01Ljk4Niw1Ljk5M0g2NC4wNTNjLTMuMzA2LDAtNS45ODMtMi42NzgtNS45ODMtNS45OTNWMjU2LjAyYzAtMTEuNTksOS4zODgtMjAuOTg3LDIwLjk4Ni0yMC45ODcNCgkJYzExLjU4MywwLDIwLjk4OCw5LjM5OCwyMC45ODgsMjAuOTg3VjMxNS44MnogTTI2NS4xMDUsMjMzLjU3MmMwLDMuMzE0LTIuNjc5LDUuOTkzLTUuOTg1LDUuOTkzaC0zMC4wMDUNCgkJYy0zLjMwOCwwLTUuOTg0LTIuNjc5LTUuOTg0LTUuOTkzdi01OS44MDFjMC0xMS41OTEsOS4zODgtMjAuOTg4LDIwLjk4Ni0yMC45ODhjMTEuNTgzLDAsMjAuOTg4LDkuMzk3LDIwLjk4OCwyMC45ODhWMjMzLjU3MnoNCgkJIE00MzAuMzI4LDMxNS44MmMwLDMuMzE1LTIuNjgsNS45OTMtNS45ODUsNS45OTNoLTMwLjAwNWMtMy4zMDgsMC01Ljk4Ny0yLjY3OC01Ljk4Ny01Ljk5M1YyNTYuMDINCgkJYzAtMTEuNTksOS4zOS0yMC45ODcsMjAuOTg5LTIwLjk4N2MxMS41ODMsMCwyMC45ODgsOS4zOTgsMjAuOTg4LDIwLjk4N1YzMTUuODJ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},210:function(e,t,a){e.exports=a.p+"static/dinonaut-fcacddc660ab6e3cdd3efb6420c35832.jpg"},211:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAgMDAwMDBAcFBAQEBAkGBwUHCgkLCwoJCgoMDREODAwQDAoKDhQPEBESExMTCw4UFhQSFhESExL/2wBDAQMDAwQEBAgFBQgSDAoMEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL/wAARCADIAMgDASIAAhEBAxEB/8QAHAABAQEBAQEBAQEAAAAAAAAAAAECBgMEBQcJ/8QANhAAAgEDBAECAwUHBAMAAAAAAAECAwQRBRIhMQZBURNhcRQiMpGhIyUzVIGx0RUWNJNSY3P/xAAbAQEBAQADAQEAAAAAAAAAAAAAAQIDBAUGB//EADARAAIBAwMCAwcEAwEAAAAAAAABAgMEEQUhMQYSE0FRFCIyYXGB0RVCscEjkaHh/9oADAMBAAIRAxEAPwD/ADHNLgoORsAAYb6IAVRbNKBoAwoe/PyNKKT4KAAABgAAFwAABgAjSfZQTAMOHsRxa7PQNZAPIG3Behhpp8gAjWSgAw1gGzLRcggAKDYBYLL56MgJbujajgvXQAAASyXAGQa2lDQM7SqJQMgmBgoGQTAwUDIM7SdGwOQYBXEmMDABGslBAebWCHq1kxOOH7gGSFABloFayC5BUtzPVcLgiSSKQAAqWGVAJe5oAgAAKgAAUAAAAAAAAAAj57KCbgjiZNka44AMhrPYBAec1h8EPVpNHlJYYAAAB6gD1wFuHsVLJonSKOWMb4ALGLl+FN/RCUXD8Sa+qCx6kTRADXZopEsjaVLAAIl7lwgCob+QwibfYr4eG1kZQBGsENYyibfYgRAAMgAAnzBGjJsx0OQDNSPqaI+iYB5grWGA8LkqWdz7NPhGpf20ZpSjKrFNNZTTZ1fl9jbW2mQnb29GnL4qWYQS4wzj6VR0asKkHiVOSlH6o7LT7mh5PZU7XUas5XEW6k1Bben9Mep5WoRnCrCt+1cn3fSUra5srrTml41T4G/XbZMx4hY29xp9Sdxb0aso1sZnBN4wjmdQpbdSuIUYcKtJRhBdYfSR1F/Xt/F7GpbadVqRuZv4kN63euO8fI+Dxewjq13cXV3KbrUKkZxcXhOTznKx8jhoV3B1bqXwvg9TUtNjXjZaHTSVePxtYaWzzl7PO2cHy6BCpp+p0a93p1a5pU3mVKVNrPzXHa+Z+r51fWepu0npVlXtYUlJVHO3+GstrB6X/k1xp+rXVF7ZU4xxTisJqTXDzjnn0Pr09vyPR5w1GTkpVMN0+OFgy7+rTmqs4rtfzPKt+mtPubytp1rXk6sVLZxSTcfLOfNnD07apVTdKnUqY72wbx+QnCVOTjOMoyXaawzsfEqaoVNSpwztp1lFZfOFk5/yJfvy7453rP5I9ChfOrcypY8jz9R6bVno9K+c8ynJxaxssNr78Hw07WtVi5UqVWcU/wAUYNo82sNpppr0Z3Hh7/cyX/skcdef8yv/APWX92btrx1a86TXwnFq/T9Ox061vI1HLxc7Y4+/mfP9Bhmz3pWynFSdSMc/1O3UnGmu5vB8vKSjydF4hY0LmzryuqFGrJVcKU4J4WDNXVtPo6k7WWmWuFVVN1NscLnGej7fEKXwrKvianmt2vojmNa51a79nVf9zwqUFcXlWOXhcH6vc370/pmwuKEY90ucxTzyfpeQ6H9+V5pyp1KEmoqnRjnHHPRzzTXawd54q/3HS25x9/P5s4Sp/Eln/wAmdvTq8pSnRl+3h+p4PWGl29KNvfUV2uuu5xXCe26+ueNuD9PSKrso1XX0yd4qiW1ypt7fn0z4dTqxrXtScLb7IpY/Zbcbf0Ot8R1GveUatKvOLp26jGniOOOTnvKeddun3yv7Izb1c3k4OO69H+Tk1bTo0um7e4pVXKEnsnGK9c7rfk/Mp051XtpRlOXtFZbPT7Fc/wAtcf8AUzp/DNMpTpK+bqKtCrKCSfGML0/qfTXXkLrVHQ+z/C3PZzHOMkq6jis6UUtvVtFsejVU0+nd15T9/hQipber95Y/8ONqW9Wik61KrTT6c4NZ/MxClKtLbTjOcscKMcs7+60yWp6XTjrGVXpJzl8OXG4/O8N0ylK3jfZl8dTlDGfu449DK1RKjKpJbrb5fLc5qvQdX9So20J/46i7svaSSxnbOz3WFk5T7Bdfy1x/1S/wdpY6Zbf7ehKvaUVW+zttypJPOH8j8O58u1KncVYQqU9sJyS/ZrrJ1FrdVL3x+Neu8zqUG5Ne+GdXUKtw4QlJJZfk2z2ujrHSfabiNCcpyUHlSisbemGz+bSX3U/VAq6YPpKfb27n49Wk4tYKuT93xO6o2mpTndVIUoOk0pTeFnK/wfiJFOCvSVWlKD8z1NLv52F3TuYLLi84Z+35bd0bvUKUrSrTqwVLDlB5Wcsx45rK0uvKE4xcLmUVKcnjZjPP6n449ThVpD2fwHuuDvVOoLn9Wep0kozzn5brDW+eTqNW0vStVvJXL1elTc2pJRkvRY9z6LO8sfG9InT0+5o3c4z3KCmk3k5BdFOB6d3RUJTbS8tvwevHrDwq9S5t7WEKs8+8nJvfl7vH/D9zRNflaX9TeqcaV5W3VJSf4O+n/U+3UNO0u/vatw9VpQdSWXFOLXX1OW9c+ppfM5pWSdTxIS7X8sf2dK26mnGy9juqKrQTcl3OSw3zw16tnc6Vc6dpVn8CF/QqYk5ZckjjLpqd1WcGmpVJNNeqyeWDUUW2slQnKfc22Z1vqSep29G3dKMIU+MZ/tsKOWl7n0xpuEcNptex5U5OnUhKO1uElLDWU8e/uWvqVGNw41qkY1J5bSXXqZvlN4UVsfKVlJrY6nxe9t7ezrQua9KjN1cpTlhtYR89aw0ypqDunqdHLqqbp/dx30+T8jTK0530FaU1UrUqigqdSnuW98JNPs+W5t6lrc1aNxCVOrSm4VIPhxknyvY6NtYScpTUnHP0Ps7TqyUdOo2da1jONL4cuSf12eD+lzu/HK3j83eXVP4kNzUKFTE8+mEvqfza2oUri/2XVb4FOTeaskvupLg9NPjSlUgrqrKjT5zNQ3NcccfN4/M+Wv8AxJNLbn0Oa0pKnKVOG3zPI1DXa2oX6ubiKaWMR4WF5bfzsdbor03R/i7dSoVfi45cksYz/k+TU7DS9Ru6txLVaMZVMYgmn6fU5cG4ac4VfEVR5+i/B79brCFWyjZys4eHF5SzL8/zk6DxbXIWLVpcKnCjKcputOWMccL9D6a1nZ1q05/6/sU5N7VU6z6dnKddcA1PT4ym5xl2t87J/wAnXteratOzhaVqSqRhnty5LCfl7rWfufs6rTp2dGDstWndylLEoRqdLH1Ps8V16nZKNpdKnTpbpT+NOeMPjg5oGp2UJUnTk/vsdah1LcW2oxvbaKjhY7ctrHmvey8P/Z0NbRdLq1ZzlrFJOcm8fd4/U/Zpahp1npLtqd/bz+HRcU96W7hnByIjhqaa6ij31G0voenadZRs5Tnb2kIykmm8y8/q2iJYX1BQejjB8PKMZPLNLopF0U2UAAAsSkiUAGzBs0gWPZuJiPZuIbBTdJwhU3VKUKnHT/T9eTAMtZWCxl2vKOmtfNXY6e7S0061pwlCUXJN7svt59X/AIRzD655+fuUkujEKahwanUcuTxqqpKaUakoQw847y/Usd21b5bperfqal2Q5FCKecHHhZyZfZCvshCkkQsiAAAEYI+jJp9GS+QAAMg1F5RTMeDRoAAAFTKZNLlAA2nkwVM0ga9cm0zBUyg3uG4n0BnANZI3ky5JE3DAIG+ASRoGQAZYI2QAgAAIwRvCMlkQZAABAFwzRk0ujTBQARAFTICg0CJ5KXINJ+5TAXDLkGxkm4ZRQUE3EfLAK37GQDOQAyN4I3kgAADAAI3gnII+yAEYAJJ4QAKVEAQNgiZSgAAoBrJkLhgGgRv2CYBQMjJQAMkyAUPom4jeSAAAAAAjAMtlzgyEAGCSeERgxJ8/IEAB6gxB8mwAaTyZBUDYMpmhgAAFTAAAAAAAAAAAAAABMgEbwMkbyMAmcgAjYD6PNtvs1OSxgwAAAADcZe5gAHqDEZejNgAuSAA0uUUwVS55NbA0CZQzkjBQMDA3AAJkbgoJkm4IGiN+xnIGwAAIAZlL2JKXsZAABACgy37A1gGgAZBDUZY+YABtSyUAAAAAAA0C5YywACNtgAAAAyAAACN4MOefkAAZKAADLYBoEAAB/9k="},212:function(e,t,a){e.exports=a.p+"static/silent-light-9bb2440ec710242211ecdb5df227092a.jpg"},213:function(e,t,a){e.exports=a.p+"static/ive-got-an-idea-7503919bcd14340e33844035b6839de3.jpg"},214:function(e,t,a){e.exports=a.p+"static/gascreeps-fortune-c24cd9d116203ddb00edf0e6a26c0bd7.jpg"},215:function(e,t,a){e.exports=a.p+"static/dinonaut-d4ef33331c6840233a43fb44c0bef1fb.mp3"},216:function(e,t,a){e.exports=a.p+"static/retribution-d113d0d99f013815b75e750902341a2d.mp3"},217:function(e,t,a){e.exports=a.p+"static/silent-light-d077032bcb35f6bf034ac52686f63785.mp3"},218:function(e,t,a){e.exports=a.p+"static/as-they-fell-from-the-sky-29851cb36fb44943764426e90dde5872.mp3"},219:function(e,t,a){e.exports=a.p+"static/ive-got-an-idea-b5fc532a5573b089148cbf1599403f7c.mp3"},220:function(e,t,a){e.exports=a.p+"static/fuckin-josh-93f1876dd15c67b8639ed6103fe15ff0.mp3"},221:function(e,t,a){e.exports=a.p+"static/build-up-the-base-overworld-ecd5bfe9515449bb1e87b6c4feeb2fa9.mp3"},222:function(e,t,a){e.exports=a.p+"static/doubt-29800af3177844b53b9705e27f0b2e3b.mp3"},223:function(e,t,a){e.exports=a.p+"static/gascreeps-fortune-cdec6aec7b3a586a13c146249460e113.mp3"}}]);
//# sourceMappingURL=component---src-pages-index-js-9910f51d5e80f2e1f426.js.map