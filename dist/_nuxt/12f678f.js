(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(e,t,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("ff7df59a",content,!0,{sourceMap:!1})},227:function(e,t,n){"use strict";n(205)},228:function(e,t,n){var r=n(107)(!1);r.push([e.i,".feature-heading[data-v-79031cb6]{font-family:Baumans;font-weight:700;letter-spacing:.05em}.feature-description[data-v-79031cb6]{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));font-weight:600;white-space:pre-line}",""]),e.exports=r},235:function(e,t,n){"use strict";n.r(t);n(46);var r={props:{heading:{type:String,default:"Développement Web"},description:{type:String,default:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iure, nulla beatae molestias aliquam saepe. Sed iste voluptates optio inventore ducimus, voluptatibus ipsum amet labore corrupti totam temporibus, est porro!"},svg:{type:String,default:"/svg/tab.svg"}},computed:{treatedDescription:function(){return this.replaceDelimitedText("{#}",this.description)}},methods:{replaceDelimitedText:function(e,t){for(var n=t.split(e),i=0;i<n.length;i++)(i+1)%2==0&&(n[i]='<span class="inline text-bmg-green-darken-10">'+n[i]+"</span>");return n.join("")}}},l=(n(227),n(15)),o={components:{"feature-component":Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row flex-wrap"},[t("div",{staticClass:"w-1/3 pb-4 md:pb-0 md:w-1/5"},[t("img",{staticClass:"fill-current w-24 mx-auto",attrs:{src:e.svg,alt:"",srcset:""}})]),e._v(" "),t("div",{staticClass:"w-full md:w-4/5 px-4 text-gray-base"},[t("h4",{staticClass:"feature-heading",domProps:{textContent:e._s(e.heading)}}),e._v(" "),t("p",{staticClass:"feature-description",domProps:{innerHTML:e._s(e.treatedDescription)}})])])}),[],!1,null,"79031cb6",null).exports},data:function(){return{enSavoirPlus:"#",svgClass:"fill-current w-24 mx-auto",features:[{heading:"Développement Web",description:"La porte du future est le Web. Grâce aux technologies {#}frontend{#} les plus neuves comme VueJS, où ReactJS et des {#}infrastructures Backend{#} puissantes et modulaires {#}BM{#}Graphic s'engage à vous offrir le meilleur de la technologie",svg:"/svg/tab.svg"},{heading:"Applications Mobiles",description:"Sur {#}Android{#} et {#}IOS{#}, BM Graphic vous propose des {#}Applications Robustes au Design Adapté{#} à vos Besoin.",svg:"/svg/gear.svg"},{heading:"IOT",description:"Débloquer les pouvoirs du Data et innovez en la gestion d'atouts Gràce à l'IOT, Des Systèmes interconnectés {#}Robustes{#} et {#}Durables{#}",svg:"/svg/relationship.svg"},{heading:"UX/UI Design",description:"Des {#}Interfaces Modernes Adaptées{#} à vos besoins et compatible avec l'image de {#}vôtre Marque{#} Avec Une Expérience d'utilisation {#}Agréable et Fluide{#}",svg:"/svg/ux.svg"}]}}},c=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"relative bg-white overflow-hidden"},[t("div",{staticClass:"max-w-screen-xl mx-auto"},[t("div",{staticClass:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},[t("svg",{staticClass:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",attrs:{fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[t("polygon",{attrs:{points:"50,0 100,0 50,100 0,100"}})]),e._v(" "),t("main",{staticClass:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},[t("div",{staticClass:"sm:text-center lg:text-left pt-6"},[e._m(0),e._v(" "),t("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[e._v("\n              Du Développement Web, Mobile et Desktop... à l'IOT, Réalité Augmenté et plusieurs technologies modernes. BmGraphic prends soin de vos Besoins en termes de Data grâce à des Solutions technlogiques adaptées\n            ")]),e._v(" "),t("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[t("div",{staticClass:"rounded-md shadow"},[t("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bmg-green hover:bg-bmg-green-light focus:outline-none focus:border-bmg-green-darken-10 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8",attrs:{href:e.enSavoirPlus}},[e._v("\n                  En Savoir Plus\n                ")])])])])])])]),e._v(" "),e._m(1)]),e._v(" "),t("div",{staticClass:"bg-gray-100 py-8"},[t("h2",{staticClass:"text-3xl text-gray-base capitalize font-bold font-baumans tracking-wider text-center py-4"},[e._v("\n      une pléthora de Services disponibles\n    ")]),e._v(" "),t("div",{staticClass:"container flex flex-row flex-wrap"},e._l(e.features,(function(e){return t("div",{key:e.heading,staticClass:"w-full md:w-1/2 py-6 text-bmg-green"},[t("feature-component",{attrs:{heading:e.heading,description:e.description,svg:e.svg}})],1)})),0)])])}),[function(){var e=this,t=e._self._c;return t("h2",{staticClass:"text-4xl tracking-tight capitalize font-baumans leading-10 font-normal text-gray-base sm:text-5xl sm:leading-none md:text-6xl"},[e._v("\n              Quand l'\n              "),t("span",{staticClass:"inline text-bmg-green"},[e._v("\n                innovation\n              ")]),e._v("\n              rencontre l'\n              "),t("span",{staticClass:"text-bmg-green"},[e._v("excellence")])])},function(){var e=this._self._c;return e("div",{staticClass:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[e("img",{staticClass:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",attrs:{src:"/images/working-programmer.jpeg",alt:""}})])}],!1,null,null,null);t.default=c.exports}}]);