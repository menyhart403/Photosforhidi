(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{9578:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return s(8621)}])},7799:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(4848),a=s(6540);let o=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>100?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),e&&(0,r.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-6 right-6 p-6 text-white rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 bg-transparent",children:(0,r.jsx)("img",{src:"/img/scrolUp.png",alt:"Scroll to top",className:"w-13 h-12"})})}},5205:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(4848);function a(){return(0,r.jsx)("footer",{id:"footer",className:"bg-gray-800 text-white py-6",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-col items-center text-center px-4",children:[(0,r.jsxs)("div",{className:"social-icons flex space-x-4 mb-2",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/hidihunorfoto",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/img/facebook-icon2.svg",alt:"Facebook",className:"h-6 w-6"})}),(0,r.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/img/instagram.png",alt:"Instagram",className:"h-6 w-6"})})]}),(0,r.jsxs)("div",{className:"contact-info mb-3",children:[(0,r.jsxs)("p",{className:"text-base md:text-lg font-medium",children:["\uD83D\uDCE7 ",(0,r.jsx)("a",{href:"mailto:info@cegnev.com",className:"hover:underline",children:"info@cegnev.com"})]}),(0,r.jsxs)("p",{className:"text-base md:text-lg font-medium",children:["\uD83D\uDCDE ",(0,r.jsx)("a",{href:"tel:+36301234567",className:"hover:underline",children:"+36 30 123 4567"})]})]}),(0,r.jsxs)("p",{className:"text-sm md:text-base",children:["\xa9 ",new Date().getFullYear(),(0,r.jsx)("a",{href:"https://www.facebook.com/profile.php?id=61566523160622",className:"hover:underline ml-1",children:"Copyright Menyhart Development."})]})]})})}},9775:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(4848),a=s(6540);function o(){let[e,t]=(0,a.useState)(0),[s,o]=(0,a.useState)(!1),[l,n]=(0,a.useState)(!1),[i,c]=(0,a.useState)("/img/photo_header1.jpg"),[h,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>t(window.pageYOffset);{let e=window.location.pathname;"/"===e||"/index"===e?c("/img/photo_header1.jpg"):"/eskuvopage"===e?c("/img/eskuvohatter.jpg"):"/keresztelo"===e?c("/img/keresztelo.jpg"):"/studio"===e?c("/img/studio.jpg"):"/termek"===e?c("/img/termekfotozas.jpg"):c("/img/photo_header1.jpg")}return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsxs)("header",{className:"relative w-full min-h-screen bg-cover bg-center shadow-md",style:{backgroundImage:"url(".concat(i,")"),backgroundPosition:"center ".concat(.5*e,"px"),backgroundAttachment:"scroll"},children:[(0,r.jsxs)("div",{className:"container mx-auto flex items-center justify-between px-6 py-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{src:"/img/logo1.png",alt:"Logo",className:"h-20 w-auto"})})}),(0,r.jsx)("nav",{className:"hidden md:flex",children:(0,r.jsxs)("ul",{className:"flex space-x-8",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/eskuvopage",className:"text-white text-[22px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Esk\xfcvő"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/keresztelo",className:"text-white text-[22px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Keresztelő"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/studio",className:"text-white text-[22px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Portr\xe9"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/termek",className:"text-white text-[22px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Term\xe9k"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#footer",className:"text-white text-[22px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Kapcsolat"})})]})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsx)("button",{onClick:()=>o(!s),className:"text-white focus:outline-none",children:(0,r.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]}),(0,r.jsxs)("div",{className:"mobile-menu ".concat(s?"open":""),children:[(0,r.jsx)("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 text-black focus:outline-none",children:(0,r.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),(0,r.jsxs)("ul",{className:"flex flex-col items-center space-y-4 mt-12",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/eskuvopage",className:"text-white text-[24px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Esk\xfcvő"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/keresztelo",className:"text-white text-[24px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Keresztelő"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/studio",className:"text-white text-[24px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Portr\xe9"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/termek",className:"text-white text-[24px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Term\xe9k"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#footer",className:"text-white text-[24px] hover:opacity-75 transition-transform duration-300 hover:scale-95",children:"Kapcsolat"})}),(0,r.jsx)("div",{className:"social-icons-container",children:(0,r.jsxs)("div",{className:"social-icons",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/hidihunorfoto/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/img/facebook-icon2.svg",alt:"Facebook",className:"h-6 w-6"})}),(0,r.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/img/instagram.png",alt:"Instagram",className:"h-6 w-6"})})]})})]})]}),(0,r.jsxs)("h1",{id:"frontH1",className:"absolute left-1/4 top-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 -translate-y-1/2 text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold drop-shadow-lg",children:["Hidi Hunor",(0,r.jsx)("br",{}),"Photography"]})]})}s(6715),s(1106)},8621:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(4848),a=s(9775),o=s(7799),l=s(5205),n=s(6540),i=s(312),c=s.n(i),h=s(188);function d(){let[e]=(0,n.useState)(["/img/kep1.jpg","/img/wallpaper4k.jpg","/img/kep2.jpg","/img/kep3.jpg","/img/kep4.jpg","/img/kep5.jpg","/img/kep6.jpg","/img/kep7.jpg","/img/kep8.jpg","/img/kep9.jpg","/img/kep10.jpg","/img/kep11.jpg"]),[t,s]=(0,n.useState)(!1),[i,d]=(0,n.useState)(null),m=(0,n.useRef)(null),x=e=>{d(e),s(!0)},u=()=>{s(!1),d(null)},p=()=>{let t=(e.indexOf(i)+1)%e.length;d(e[t])},g=()=>{let t=(e.indexOf(i)-1+e.length)%e.length;d(e[t])},f=(0,h.uh)({onSwipedLeft:p,onSwipedRight:g,preventDefaultTouchmoveEvent:!0,trackMouse:!0});return(0,n.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),e.unobserve(t.target))})},{threshold:.1});return m.current.querySelectorAll(".gallery-item").forEach(t=>{e.observe(t)}),()=>{m.current&&m.current.querySelectorAll(".gallery-item").forEach(t=>{e.unobserve(t)})}},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)("div",{className:"gallery-container",ref:m,children:[(0,r.jsx)("h1",{className:"text-center text-2xl font-bold my-4",children:"Gal\xe9ria"}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:e.map((e,t)=>(0,r.jsx)("div",{className:"gallery-item",children:(0,r.jsx)("img",{src:e,alt:"Gallery ".concat(t),className:"w-full h-80 object-cover cursor-pointer",onClick:()=>x(e)})},t))}),(0,r.jsxs)(c(),{isOpen:t,onRequestClose:u,contentLabel:"Image Modal",className:"modal",overlayClassName:"overlay",children:[(0,r.jsx)("div",{...f,children:i&&(0,r.jsx)("img",{src:i,alt:"Selected",className:"w-auto max-h-[620px]"})}),(0,r.jsx)("button",{onClick:u,className:"close-button",children:"Bez\xe1r\xe1s"}),(0,r.jsx)("button",{onClick:g,className:"prev-button",children:"❮"}),(0,r.jsx)("button",{onClick:p,className:"next-button",children:"❯"})]})]}),(0,r.jsx)(o.default,{}),(0,r.jsx)(l.default,{})]})}c().setAppElement("#__next")}},e=>{var t=t=>e(e.s=t);e.O(0,[392,887,636,593,792],()=>t(9578)),_N_E=e.O()}]);