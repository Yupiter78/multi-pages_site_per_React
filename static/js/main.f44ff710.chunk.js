(this["webpackJsonpreact-developers-team"]=this["webpackJsonpreact-developers-team"]||[]).push([[0],{12:function(e,t,a){e.exports={wrapper:"progress_wrapper__28XF_",outer:"progress_outer__19Epm",inner:"progress_inner__IhHXE",svg:"progress_svg__277WN",circle:"progress_circle__3b5E5"}},22:function(e,t,a){e.exports={wrapper:"contacts_wrapper__26mGd",svg:"contacts_svg__c56_7"}},34:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(23),l=a.n(s),r=a(7),o=(a(32),a(33),a(34),a(10)),i=a(6),n=JSON.parse(localStorage.getItem("userIds"))||{},d=a(0),m=function(e){var t=e.children,a=e.title,c=e.list,s=e.stylesColumn;return Object(d.jsxs)("div",{className:s.styleContainer,children:[Object(d.jsx)("h5",{className:s.styleTitle,children:a}),Object(d.jsx)("ul",{className:s.styleList,children:c.map((function(e){return Object(d.jsx)("li",{className:s.styleItem,children:Object(d.jsxs)(r.b,{className:s.styleLink,to:e.to,children:[e.title,t]})},e.title)}))})]})},b=function(e){var t=e.collapse;return Object(d.jsx)("div",{className:(t?"collapse ":"")+"header-top",id:"navbarHeader",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"py-4 col-sm-8 col-md-7",children:[Object(d.jsx)("h5",{className:"header-top-h5",children:"About Us"}),Object(d.jsx)("p",{className:"text-muted-header",children:Object(d.jsx)("q",{children:"We are a small but dynamic developing team of front-end developers. Javascript, React, Node.js - this is about us!"})})]}),Object(d.jsx)(m,{title:"Contact",list:[{title:"Contacts",to:"/contacts"},{title:"Our team",to:"/about"}],stylesColumn:{styleContainer:"py-4 col-sm-4 offset-md-1",styleTitle:"header-top-h5",styleList:"list-unstyled",styleItem:"",styleLink:""}})]})})})},j=function(e){var t=e.children,a=e.to;return Object(d.jsx)(r.b,{to:a,className:"d-flex align-items-left me-auto ms-3",children:t})},h=function(e){var t=e.toggleCollapse;return Object(d.jsx)("button",{onClick:t,className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})})},p=function(e){var t=e.title,a=e.size;return Object(d.jsxs)("svg",{height:a,width:a,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:t||"Home | Group 8 JavaScript Junior Frontend Developer"}),Object(d.jsx)("g",{fill:"#61dafb",children:Object(d.jsx)("path",{d:"M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z"})})]})},u=function(e){var t=e.toggleCollapse;return Object(d.jsx)("div",{className:"shadow-sm navbar navbar-dark header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"wrapper-menu",children:[Object(d.jsx)(j,{to:"/",children:Object(d.jsx)("span",{className:"me-2",children:Object(d.jsx)(p,{size:"48px"})})}),Object(d.jsx)(j,{to:"/favourites",children:"Favourites"})]}),Object(d.jsx)(h,{toggleCollapse:t})," "]})})},g=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)("header",{className:"header-wrapper",children:[Object(d.jsx)(b,{collapse:a})," ",Object(d.jsx)(u,{toggleCollapse:function(){s(!a)}})," "]})},x=a(27),v="#fad390",O="#fa983a",f="#1e3799",w="#4a69bd",N="#38ada9",y="#b71540",k="#e58e26",C=[{_id:"67rdca3eeb7f6fgeed471818",firstName:"Pavel",lastName:"Koryakin",dateOfBirth:"1966-01-08",photo:a.p+"static/media/pavel.953991ce.jpg",about:"I worked in sales for almost 30 years, but became interested in e-commerce and unexpectedly began to master JavaScript. This activity fascinated me to such an extent that I gave up everything and decided to become a good web developer.",technologies:{html:{name:"HTML",level:"80",color:v},css:{name:"CSS",level:"75",color:O},javascript:{name:"JavaScript",level:"70",color:f},react:{name:"React",level:"50",color:w},webpack:{name:"Webpack",level:"30",color:y},git:{name:"GIT",level:"60",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/pavel_koryakin",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["Project structure","Routing","Favourites Page","Card","MemberCard"]},badge:{name:"quick eye",color:"danger",textColor:!1}},{_id:"67rdca3eeb7f6fgeed471819",firstName:"Valeriy",lastName:"Harlamov",dateOfBirth:"1966-11-05",photo:a.p+"static/media/valeriy.3b9a41df.png",about:"Fullstack publishing specialist, beginner javascript programmer. Favorite entertainment \u2014 programming, mathematics, philosophy.",technologies:{html:{name:"HTML",level:"90",color:v},css:{name:"CSS",level:"60",color:O},bootstrap:{name:"Bootstrap",level:"20",color:"#e55039"},javascript:{name:"JavaScript",level:"70",color:f},react:{name:"React",level:"50",color:w},git:{name:"GIT",level:"60",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/Valera5454",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["Navbar","Page 404"]},badge:{name:"sad sorcerer",color:"secondary",textColor:!1}},{_id:"67rdca3eeb7f6fgeed471820",firstName:"Liudmyla",lastName:"Duvivier",dateOfBirth:"1974-07-19",photo:a.p+"static/media/luda.ac2b7263.jpg",about:"Front end software developer. Creative, communicative and able to quickly problem solve persone.",technologies:{html:{name:"HTML",level:"90",color:v},css:{name:"CSS",level:"90",color:O},javascript:{name:"JavaScript",level:"90",color:f},react:{name:"React",level:"90",color:w},php:{name:"PHP",level:"90",color:N},git:{name:"GIT",level:"90",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/ludmyladev",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["Badge","Button"]},badge:{name:"team soul",color:"warning",textColor:!0}},{_id:"67rdca3eeb7f6fgeed471821",firstName:"Dmitry",lastName:"Lavrov",dateOfBirth:"1965-11-23",photo:a.p+"static/media/dmitry.e05e57ed.jpg",about:'At school, when I was little, they asked me who I wanted to become when I grew up. I said I wanted to be an archaeologist.To the question "why?", replied that I like to find something ancient, buried in the ground.',technologies:{html:{name:"HTML",level:"50",color:v},css:{name:"CSS",level:"30",color:O},javascript:{name:"JavaScript",level:"60",color:f},react:{name:"React",level:"40",color:w},git:{name:"GIT",level:"50",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/Dmi_Lavrov",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["Progress","About Page","Contacts Page"]},badge:{name:"agile badger",color:"success",textColor:!1}},{_id:"67rdca3eeb7f6fgeed471822",firstName:"Andrey",lastName:"Rybnikov",dateOfBirth:"1966-02-18",photo:a.p+"static/media/andrey.8b42077d.jpg",about:"I like to set tasks and solve them.",technologies:{html:{name:"HTML",level:"90",color:v},css:{name:"CSS",level:"90",color:O},javascript:{name:"JavaScript",level:"60",color:f},react:{name:"React",level:"40",color:w},php:{name:"PHP",level:"40",color:N},git:{name:"GIT",level:"10",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/Egolege",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["Slider","Footer","Header","MemberCard","Styles"]},badge:{name:"egolege",color:"info",textColor:!1}},{_id:"67rdca3eeb7f6fgeed471823",firstName:"Yuriy",lastName:"Vedernikov",dateOfBirth:"1978-08-31",photo:a.p+"static/media/yuriy.85ed03dd.jpg",about:"I like and learn to program in javascript.",technologies:{html:{name:"HTML",level:"40",color:v},css:{name:"CSS",level:"30",color:O},javascript:{name:"JavaScript",level:"50",color:f},react:{name:"React",level:"20",color:w},webpack:{name:"Webpack",level:"10",color:y},git:{name:"GIT",level:"10",color:k}},socialLinks:{facebook:"https://www.facebook.com/",github:"https://github.com/",telegram:"https://t.me/yuriy_yupiter",instagram:"https://www.instagram.com/"},role:{text:"Here's what I did on the project:",componets:["MemberCard","Breadcrumbs"]},badge:{name:"moderate pedant",color:"primary",textColor:!1}}],I=function(){var e=Object(i.g)(),t=C.map((function(e){return{to:"/".concat(e._id),label:"".concat(e.firstName)}})),a=[].concat([{to:"/",label:"Home"},{to:"/favourites",label:"Favourites"},{to:"/contacts",label:"Contacts"},{to:"/about",label:"About"},{to:"/:memberId",label:"Member"}],Object(x.a)(t)),c=function(e){return"/"!==e&&"/404"!==e?e.split("/").map((function(e){return"/"+e})):[]}(e.pathname),s=function(e,t){var a=[];return t.forEach((function(t){e.forEach((function(e){e===t.to&&a.push(t)}))})),a}(c,a),l=s.pop();return Object(d.jsx)("div",{className:"container pt-3 pb-0 text-center breadcrumb-style",children:Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[s.map((function(e){var t=e.to,a=e.label;return Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(r.b,{to:t,children:a})},t)})),Object(d.jsx)("li",{className:"breadcrumb-item","aria-current":"page",children:l.label})]})})})},_=function(){var e={styleContainer:"col-6 col-md",styleTitle:"",styleList:"list-unstyled text-small",styleItem:"mb-1",styleLink:"link-secondary text-decoration-none"};return Object(d.jsx)("div",{className:"p-3 footer",children:Object(d.jsx)("footer",{className:"container pt-4 my-md-5 pt-md-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"order-last-md col-12 col-md d-flex flex-column",children:Object(d.jsxs)(r.b,{to:"/",className:"footer-copyrigth",children:[Object(d.jsx)(p,{title:"",size:"60px"}),Object(d.jsxs)("small",{className:"mb-3 text-muted footer-small",children:[Object(d.jsx)("span",{children:"\xa9 2021"}),Object(d.jsx)("span",{children:"Copyright"}),Object(d.jsx)("span",{children:"Group 8 inc."})]})]})}),Object(d.jsx)(m,{title:"About Us",list:[{title:"Our team",to:"/about"}],stylesColumn:e}),Object(d.jsx)(m,{title:"Favorites",list:[{title:"Favorites",to:"/favourites"}],stylesColumn:e}),Object(d.jsx)(m,{title:"Contacts",list:[{title:"Contacts",to:"/contacts"}],stylesColumn:e})]})})})},S=a(13),L=function(e){var t=e.cls,a=e.children,c=e.type,s=e.onClick;return Object(d.jsx)("button",{className:t,type:c,onClick:s,children:a})};L.defaultProps={type:"button"};var T=L,F=function(e){var t=e.color,a=e.textColor,c=e.children;return Object(d.jsx)("span",{className:"badge rounded-pill bg-".concat(t," ").concat(!!a&&"text-dark"," py-2 px-3"),children:c})};F.defaultProps={textColor:!1};var H=F,M=a(26),J=a.n(M),B=function(e){var t=e.replace(/-/g,"");return J()(t,"YYYYMMDD").fromNow().replace("ago","old")},P=function(e){var t=e._id,a=e.firstName,c=e.lastName,s=e.dateOfBirth,l=e.badge,o=e.photo,i=e.about,m=e.onFavorite;return Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"shadow-sm card",children:[Object(d.jsx)("img",{src:o,className:"card-img-top",alt:""}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"d-flex justify-content-end pt-3",children:Object(d.jsx)(H,{color:l.color,textColor:l.textColor,children:l.name})}),Object(d.jsxs)("h5",{children:[a," ",c]}),Object(d.jsx)("p",{className:"card-text",children:B(s)}),Object(d.jsx)("span",{className:"block-about card-text",children:i}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center pb-3",children:Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsx)(r.b,{to:"/member/".concat(t),children:Object(d.jsx)(T,{cls:"btn btn-sm btn-outline-secondary",children:"View"})}),Object(d.jsx)(T,{cls:"btn btn-sm btn-outline-".concat(n[t]?"danger":"secondary"),onClick:function(){return m(t)},children:n[t]?"Delete":"Add"})]})})]})]})})},R=a(55),A=a(50),z=a(51),E=a(52),G=a(53),V=a(56),D=a(54),W=(a(45),a(46),a(47),a.p+"static/media/slider-bg-8.2ff62646.png");R.a.use([A.a,z.a,E.a,G.a]);var Y=function(){return Object(d.jsxs)(V.a,{className:"slider-main-page",speed:2900,parallax:!0,pagination:{pagination:!0,clickable:!0},autoplay:{delay:4100,disableOnInteraction:!1},loop:!0,navigation:!1,module:[E.a,z.a,A.a],spaceBetween:0,slidesPerView:1,children:[Object(d.jsx)("div",{slot:"container-start",className:"swiper-parallax-bg",style:{backgroundImage:"url(".concat(W,")")},"data-swiper-parallax":"-10%"}),C.map((function(e){return Object(d.jsxs)(D.a,{className:"swiper-slider-container",children:[Object(d.jsx)("img",{alt:"",src:e.photo,className:"img-swiper","data-swiper-parallax":"-800"}),Object(d.jsxs)("div",{className:"swiper-block-parallax",children:[Object(d.jsx)("div",{className:"swiper-parallax-title","data-swiper-parallax":"-1000",children:"".concat(e.firstName," ").concat(e.lastName)}),Object(d.jsx)("div",{className:"swiper-parallax-subtitle","data-swiper-parallax":"-3500",children:"".concat(e.about)})]})]},e._id)}))]})},q=function(e){var t=e.onFavorite;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Y,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{className:"pt-5 pb-3 text-center container",children:Object(d.jsx)("div",{className:"col-lg-12 col-md-8 mx-auto",children:Object(d.jsx)("h1",{className:"fw-light",children:"Our Team"})})}),Object(d.jsx)("div",{className:"album py-5 bg-light p-3",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:C.map((function(e){return Object(d.jsx)(P,Object(S.a)(Object(S.a)({},e),{},{onFavorite:t}),e._id)}))})})}),Object(d.jsx)("section",{className:"py-5 container p-3",children:Object(d.jsx)("div",{className:"row py-lg-5",children:Object(d.jsxs)("div",{className:"col-lg-10 col-md-10 mx-auto",children:[Object(d.jsx)("h1",{className:"fw-light text-center mb-4",children:"About our project"}),Object(d.jsx)("p",{className:"lead text-muted",children:"This site was created by participants of the hackathon held in October 2021, as part of an educational program to improve JavaScript and React development skills."}),Object(d.jsx)("p",{className:"lead text-muted",children:"A team of developers from around the world for two days tried to implement the task proposed by the organizers of the hackathon and maximize their technical and creative potential."}),Object(d.jsx)("p",{className:"lead text-muted",children:"To implement the project, we used the React library, the Bootstrap CSS framework and the best technological solutions."}),Object(d.jsx)("p",{className:"lead text-muted",children:"What we managed to do in such a short time, you can appreciate by clicking on the links of the site, clicking on the delightful buttons that delight the eye of a sophisticated viewer, enjoying the exquisite design of bootstrap components."}),Object(d.jsx)("p",{className:"lead text-muted",children:"Visit our wonderful website as often as possible. It is unlikely that anything will ever change here in the future, and therefore, coming here again and again, you will feel yourself in a familiar environment and quietly contemplating the bizarre lines of web components to reflect on something great."}),Object(d.jsx)("p",{className:"lead text-muted",children:"Add a link to our app to your browser bookmarks and don't forget to send it to your friends, we think they will be pleased."}),Object(d.jsx)("p",{className:"fs-5 w-bold fst-italic text-end",children:"Always your team of react developers."})]})})})]})]})},K=a.p+"static/media/about.0a9466b5.jpg",U=function(){return Object(d.jsx)("div",{className:"container px-4 py-5 mt-5 col-xxl-8 page-wrapper",children:Object(d.jsxs)("div",{className:"p-3 shadow row flex-lg-row-reverse align-items-center g-5",children:[Object(d.jsx)("div",{className:"my-0 col-12 col-lg-6 my-md-5",children:Object(d.jsx)("img",{src:K,className:"img-fluid shadow",alt:"Hurricane team",loading:"lazy"})}),Object(d.jsxs)("div",{className:"block-info col-lg-6 my-md-5",children:[Object(d.jsx)("h1",{className:"mb-3 text-center display-5 fw-bold lh-1",children:"Hurricane team"}),Object(d.jsx)("p",{className:"lead",children:"We are a hurricane team. Together we are strong!"}),Object(d.jsx)("p",{children:"If they contacted us, they will not let go. We do not make the world around us better, it just works like that ..."}),Object(d.jsx)("p",{children:"We are accustomed to this since childhood. No problem."}),Object(d.jsx)("p",{children:"- You\u2019re just in a bad mood today, right?"}),Object(d.jsx)("p",{children:"- I'm NEVER in the mood."}),Object(d.jsx)("div",{className:"gap-2 d-grid d-md-flex justify-content-center",children:Object(d.jsx)(r.b,{to:"/contacts",children:Object(d.jsx)(T,{cls:"btn btn-outline-secondary btn-lg px-4",children:"Contact us"})})})]})]})})},X=a(22),Z=a.n(X),Q=a.p+"static/media/contacts.42a89689.jpg",$=[{img:a.p+"static/media/facebook.30cf95ed.svg",title:"Facebook",link:"https://www.facebook.com/"},{img:a.p+"static/media/github.8e6e5405.svg",title:"Github",link:"https://www.github.com/"},{img:a.p+"static/media/gitlab.9d0884b3.svg",title:"Gitlab",link:"https://www.gitlab.com/"},{img:a.p+"static/media/instagram.787b1447.svg",title:"Instagram",link:"https://www.Instagram.com/"},{img:a.p+"static/media/linkedin.373323c3.svg",title:"LinkedIn",link:"https://www.linkedin.com/"},{img:a.p+"static/media/odnoklassniki.11ed2f21.svg",title:"Odnoklassniki",link:"https://www.Odnoklassniki.com/"},{img:a.p+"static/media/skype.e258215a.svg",title:"Skype",link:"https://www.Skype.com/"},{img:a.p+"static/media/telegram.b82ca609.svg",title:"Telegram",link:"https://www.Telegram.com/"},{img:a.p+"static/media/tiktok.52fc113b.svg",title:"Tiktok",link:"https://www.Tiktok.com/"},{img:a.p+"static/media/twitter.68848169.svg",title:"Twitter",link:"https://www.Twitter.com/"},{img:a.p+"static/media/viber.96eaccb2.svg",title:"Viber",link:"https://www.Viber.com/"},{img:a.p+"static/media/vk.de1237ea.svg",title:"VK",link:"https://www.VK.com/"},{img:a.p+"static/media/whatsapp.45a053cc.svg",title:"WhatsApp",link:"https://www.whatsapp.com/"},{img:a.p+"static/media/youtube.8508bbf2.svg",title:"Youtube",link:"https://www.Youtube.com/"},{img:a.p+"static/media/zoom.aea1c8a9.svg",title:"Zoom",link:"https://www.Zoom.com/"},{img:a.p+"static/media/livejournal.cbc7c4d2.svg",title:"LiveJournal",link:"https://www.LiveJournal.com/"}],ee=function(){return Object(d.jsx)("div",{className:"container col-xxl-8 px-4 py-5 mt-5 page-wrapper",children:Object(d.jsxs)("div",{className:"row flex-lg-row g-5 p-3 shadow",children:[Object(d.jsx)("div",{className:"col-12 col-lg-6 my-0 my-lg-5 d-flex justify-content-center",children:Object(d.jsx)("div",{className:"my-auto",children:Object(d.jsx)("img",{src:Q,className:"img-fluid shadow",alt:"Contacts",loading:"lazy"})})}),Object(d.jsxs)("div",{className:"d-flex flex-column justify-content-between col-lg-6 my-lg-5",children:[Object(d.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3 text-center",children:"Contacts"}),Object(d.jsx)("p",{className:"lead text-center m-0",children:"We are always open to communication"}),Object(d.jsx)("div",{className:"d-flex flex-column my-3 flex-grow-1",children:Object(d.jsx)("div",{className:"row row-cols-4  text-center my-auto justify-content-center",children:$.map((function(e){return Object(d.jsx)(te,{item:e},e.title)}))})}),Object(d.jsx)("p",{className:"lead text-center fs-3 m-0",children:"Let's do something together!"})]})]})})},te=function(e){var t=e.item,a=Object(c.useState)({top:"45px",left:"45px"}),s=Object(o.a)(a,2),l=s[0],r=s[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){var e=Math.floor(90*Math.random())+"px",t=Math.floor(90*Math.random())+"px";r({top:e,left:t})}),500+Math.floor(1500*Math.random()));return function(){return clearTimeout(e)}}),[l]),Object(d.jsx)("div",{className:Z.a.wrapper,children:Object(d.jsx)("div",{className:Z.a.svg,style:{top:l.top,left:l.left},children:Object(d.jsx)("a",{href:t.link,children:Object(d.jsx)("img",{alt:"img",src:t.img,style:{height:"30px"},title:t.title})})})})},ae=function(e){var t=e.onFavorite,a=C.filter((function(e){return n[e._id]}));return Object(d.jsxs)("main",{className:"page-wrapper",children:[Object(d.jsx)("section",{className:"pt-5 pb-3 text-center container",children:Object(d.jsx)("div",{className:"col-lg-6 col-md-8 mx-auto",children:Object(d.jsx)("h1",{className:"fw-light",children:a.length?"Favourites":"You haven't chosen anyone yet"})})}),!!a.length&&Object(d.jsx)("div",{className:"album py-5 bg-light p-3",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:a.map((function(e){return Object(d.jsx)(P,Object(S.a)(Object(S.a)({},e),{},{onFavorite:t}),e._id)}))})})})]})},ce=a(12),se=a.n(ce),le=function(e){var t=e.value,a=void 0===t?"65":t,s=e.title,l=void 0===s?"HTML":s,r=e.color,i=void 0===r?"cadetblue":r,n=e.type,m=void 0===n?"circle":n,b=Object(c.useState)({width:"0%"}),j=Object(o.a)(b,2),h=j[0],p=j[1],u=Object(c.useState)({strokeDashoffset:273}),g=Object(o.a)(u,2),x=g[0],v=g[1];return Object(c.useEffect)((function(){switch(m){case"bar":p({width:"".concat(a,"%"),backgroundColor:i});break;case"circle":v((function(){var e=document.querySelector("."+se.a.circle).getTotalLength();v({stroke:i,strokeDashoffset:(100-Number(a))*e/100,strokeDasharray:e})}))}}),[i,m,a]),Object(d.jsxs)(d.Fragment,{children:["bar"===m&&Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-0",children:l}),Object(d.jsx)("div",{className:"progress",children:Object(d.jsxs)("div",{className:"progress-bar",role:"progressbar",style:h,"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100",children:[a,"%"]})})]}),"circle"===m&&Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center pe-3 justify-content-space-between",children:[Object(d.jsxs)("div",{className:se.a.wrapper,children:[Object(d.jsx)("div",{className:se.a.outer,children:Object(d.jsxs)("div",{className:se.a.inner,children:[a,"%"]})}),Object(d.jsx)("svg",{className:se.a.svg,xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(d.jsx)("circle",{className:se.a.circle,style:x,cx:50,cy:50,r:43.5})})]}),Object(d.jsx)("p",{className:"mb-0",children:l})]})]})},re=function(e){var t=e.memberId,a=e.onFavorite,s=Object(c.useState)(C.find((function(e){return e._id===t}))),l=Object(o.a)(s,1)[0],r=l._id,i=l.firstName,m=l.lastName,b=l.photo,j=l.about,h=l.role,p=l.socialLinks,u=l.badge,g=l.technologies;return Object(d.jsx)("div",{className:"card mb-3 shadow p-3 page-wrapper",children:Object(d.jsxs)("div",{className:"row g-0 p-3 justify-content-end",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("picture",{className:"member-item-img ",children:Object(d.jsx)("img",{src:b,className:"img-fluid rounded-start",alt:"...",loading:"lazy"})})}),Object(d.jsx)("div",{className:"col-md-6 ps-4 pb-4",children:Object(d.jsxs)("div",{className:"card-body lead text-muted",children:[Object(d.jsx)(H,{color:u.color,textColor:u.textColor,children:u.name}),Object(d.jsxs)("h3",{className:"card-title pt-4",children:[i," ",m]}),Object(d.jsx)("p",{className:"card-text",children:j}),h.text," ",Object(d.jsx)("ul",{className:"card-text",children:h.componets.map((function(e,t){return Object(d.jsx)("li",{children:e},h.componets.length-t)}))}),Object(d.jsx)("div",{className:"pb-4",children:Object.keys(p).map((function(e,t){return Object(d.jsx)("a",{href:p[e],className:"pe-2",children:Object(d.jsx)("i",{className:"bi bi-".concat(e)})},Object.keys(p).length-t)}))}),Object(d.jsx)("div",{className:"d-flex flex-wrap",children:Object.keys(g).map((function(e,t){return Object(d.jsx)(le,{title:g[e].name,value:g[e].level,color:g[e].color},Object.keys(g).length-t)}))})]})}),Object(d.jsx)(T,{onClick:function(){return a(r)},cls:"btn btn-outline-".concat(n[r]?"danger":"secondary"," btn-member-card"),children:n[r]?"Remove":"Add to Favorites"})]})})},oe=function(e){var t=e.onFavorite,a=Object(i.h)().memberId,c=C.find((function(e){return e._id===a}));return Object(d.jsx)("div",{className:"container member-wrapper",children:c?Object(d.jsx)(re,{memberId:a,onFavorite:t}):Object(d.jsx)(i.a,{to:"/404"})})},ie=a.p+"static/media/404_notfound.41d50cdc.png",ne=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"page-wrapper-404",children:[Object(d.jsx)("img",{style:{display:"block",width:"60%",marginLeft:"auto",marginRight:"auto"},src:ie,alt:"Page not found"}),Object(d.jsx)("div",{className:"block-to-home",children:Object(d.jsx)(j,{to:"",children:"go to home page :)"})})]})})},de=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(i.g)(),r=function(e){n[e]?n[e]=!1:n[e]=!0,localStorage.setItem("userIds",JSON.stringify(n)),s(!a)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),"/"!==l.pathname&&"/404"!==l.pathname?Object(d.jsx)(I,{}):null,Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/react-team/",exact:!0,children:Object(d.jsx)(q,{onFavorite:r})}),Object(d.jsx)(i.b,{path:"/favourites",children:Object(d.jsx)(ae,{onFavorite:r})}),Object(d.jsx)(i.b,{path:"/about",component:U}),Object(d.jsx)(i.b,{path:"/contacts",component:ee}),Object(d.jsx)(i.b,{path:"/member/:memberId",children:Object(d.jsx)(oe,{onFavorite:r})}),Object(d.jsx)(i.b,{path:"/404",component:ne}),Object(d.jsx)(i.a,{to:"/404"})]}),Object(d.jsx)(_,{})]})};l.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(de,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f44ff710.chunk.js.map