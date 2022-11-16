(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const a={state:{},inputControl:null,reducer:()=>{},updater:()=>{},set createStore({reducer:e,initialState:t}){this.state=t,this.reducer=e},set dispatch(e){var t;this.state=this.reducer(this.state,e),clearTimeout(this.inputControl),(t=this.updater)==null||t.call(this)},get getState(){return Object.freeze({...this.state})},set subscribe(e){this.updater=e}},H={settings:{bpm:60,bpmLong:5,bpmShort:1,randomNotes:!1},openMenu:!1,currentImage:"",currentImagePath:[],currentNotes:[],start:!1,countDown:!1},j=(e=e,t)=>{const{type:s,payload:l}=t,n={SET_SETTINGS_BPM:{settings:{...e.settings,bpm:l*1}},SET_SETTINGS_BPMLONG:{settings:{...e.settings,bpnLong:l*1}},SET_SETTINGS_BPMSHORT:{settings:{...e.settings,bpnShort:l*1}},SET_SETTINGS_RANDOM_NOTES:{settings:{...e.settings,randomNotes:!!l}},SET_OPEN_MENU:{openMenu:!!l},SET_CURRENT_IMAGE:{currentImage:l},SET_CURRENT_NOTES:{currentNotes:l},SET_START:{start:!!l},SET_CURRENT_IMAGE_PATH:{currentImagePath:l},SET_COUNT_DOWN:l,SET_CUSTOM:l,RESET:{settings:{bpm:60,bpmLong:5,bpmShort:1,randomNotes:!1},openMenu:!1,allNotes:[],currentImage:"",currentNotes:[],start:!1}};return Object.assign({},e,Object.prototype.hasOwnProperty.call(n,s)&&n[s])},i={setBpm:e=>({type:"SET_SETTINGS_BPM",payload:e}),setBpmLong:e=>({type:"SET_SETTINGS_BPMLONG",payload:e}),setBpmShort:e=>({type:"SET_SETTINGS_BPMSHORT",payload:e}),setRandomNotes:e=>({type:"SET_SETTINGS_RANDOM_NOTES",payload:e}),setOpenMenu:e=>({type:"SET_OPEN_MENU",payload:e}),setCurrentImage:e=>({type:"SET_CURRENT_IMAGE",payload:e}),setCurrentImagePath:e=>({type:"SET_CURRENT_IMAGE_PATH",payload:e}),setCurrentNotes:e=>({type:"SET_CURRENT_NOTES",payload:e}),setStart:e=>({type:"SET_START",payload:e}),setCountDown:e=>({type:"SET_COUNT_DOWN",payload:e}),setCustom:e=>({type:"SET_CUSTOM",payload:e}),onReset:e=>({type:"RESET"})};a.createStore={reducer:j,initialState:H};a.subscribe=null;const D=`<div\r
    class="tmester flex flex-col bg-white dark:bg-_color-dark max-w-4xl gap-x-2 ml-auto mr-auto w-auto md:rounded-lg md:w-fit min-w-[350px] md:mt-16 md:mb-16 overflow-hidden">\r
    <header class="flex justify-between p-1 px-2 w-full border-b-[1px] border-l-stone-600">\r
        <img class="h-11" src="/" id="logo" alt="Logo">\r
        <section class="flex items-center gap-y-1">\r
            <input class="hidden tmester--darkmode" type="checkbox" id="darkmode">\r
            <label class="dark:bg-_color-dark-slate" for="darkmode">\r
                <i class="fas fa-moon h-[18px] w-[18px] mr-1 dark:text-_color-light-slate"></i>\r
                <i class="fas fa-sun h-[18px] w-[18px] text-_color-light-slate dark:text-_color-dark"></i>\r
            </label>\r
            <button class="h-9 w-9 text-2xl py-1 dark:text-white md:hidden" id="btn-menu"><i class="fas fa-bars"></i>\r
            </button>\r
        </section>\r
    </header>\r
    <section class="md:flex gap-x-3 p-2">\r
        <section class="md:w-80">\r
\r
            <section class="flex gap-x-1 justify-between max-w-[360px] m-auto py-5" id="selected-notes">\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
            </section>\r
            <h3 class="text-_color-dark dark:text-white">Next notes</h3>\r
            <section class="flex gap-x-1 justify-between max-w-[360px] m-auto pb-5 opacity-70" id="next-notes">\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
                <div\r
                    class="h-[100px] w-[80px] inline-block p-[5px] bg-slate-200 dark:bg-_color-dark-slate rounded">\r
                    <img class="h-[60px] w-full bg-white" src="" alt="">\r
                    <p class="h-[30px] text-inherit dark:text-white text-center text-3xl">G</p>\r
                </div>\r
            </section>\r
\r
            <section\r
                class="min-h-32 flex gap-y-2 flex-col items-center bg-slate-200 p-2 mb-24 mt-4 dark:bg-_color-dark-slate">\r
                <span class="text-5xl font-bold dark:text-_color-light-slate" id="bpm">60</span>\r
                <fieldset id="buttons-bpm">\r
                    <button class="w-11 h-11 rounded-md py-2 bg-_color-dark text-white  text-xl text-center"\r
                        id="decreaseLong">\r
                        <i class="fas fa-angles-down"></i> </button>\r
                    <button class="w-11 h-11 rounded-md py-2 bg-_color-dark text-white  text-xl text-center"\r
                        id="decreaseShort">\r
                        <i class="fas fa-angle-down"></i> </button>\r
                    <button class="w-11 h-11 rounded-md py-2 bg-_color-dark text-white  text-xl text-center"\r
                        id="increaseShort">\r
                        <i class="fas fa-angle-up"></i> </button>\r
                    <button class="w-11 h-11 rounded-md py-2 bg-_color-dark text-white  text-xl text-center"\r
                        id="increaseLong">\r
                        <i class="fas fa-angles-up"></i> </button>\r
                </fieldset>\r
                <button class="bg-_color-cyan font-bold text-white w-60 rounded-lg h-12 text-3xl mt-2"\r
                    id="play">PLAY</button>\r
            </section>\r
        </section>\r
\r
        <!-- -------------------------------- MENU --------------------------------- -->\r
\r
        <section\r
            class="fixed left-0 top-0 bg-black bg-opacity-40 h-full w-full overflow-hidden hidden z-10 md:block md:relative md:bg-white md:w-80 md:h-auto"\r
            id="elm-menu" data-evref="toggleMenu">\r
            <div class="w-10/12 bg-white max-w-sm h-full right-0 absolute p-2 dark:bg-_color-dark md:w-full">\r
                <section\r
                    class="flex justify-between mb-3 text-_color-dark h-12 border-b-[1px] border-l-stone-600 items-center md:hidden">\r
                    <h1 class="font-bold text-2xl dark:text-white">TMester</h1>\r
                    <button class="text-4xl dark:text-white" data-evref="toggleMenu"><i\r
                            class="fa-solid fa-xmark"></i></button>\r
                </section>\r
                <section class="flex flex-col gap-y-2 overflow-auto">\r
                    <section class="p-2 bg-slate-200 rounded dark:bg-_color-dark-slate h-min">\r
                        <h3 class="w-full mb-2 text-_color-dark dark:text-white">Figuras musicales</h3>\r
                        <form class="flex gap-1 flex-wrap max-h-72 h-auto overflow-auto" id="form-notes">\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="negra" id="negra" value="NEGRA">\r
                                <label for="negra"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/negra-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="semicorchea" id="semicorchea" value="SEMICORCHEA">\r
                                <label for="semicorchea"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/semicorchea-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="galopa" id="galopa" value="GALOPA">\r
                                <label for="galopa"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/galopa-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="galopa-invert" id="galopa-invert" value="GALOPA_INVERT">\r
                                <label for="galopa-invert"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/galopa-invert-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="tresillo" id="tresillo" value="TRESILLO">\r
                                <label for="tresillo"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/tresillo-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="quintillo" id="quintillo" value="QUINTILLO">\r
                                <label for="quintillo"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/quintillo-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="seisillo" id="seisillo" value="SEISILLO">\r
                                <label for="seisillo"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/seisillo-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="saltillo" id="saltillo" value="SALTILLO">\r
                                <label for="saltillo"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/saltillo-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="saltillo-invert" id="saltillo-invert" value="SALTILLO_INVERT">\r
                                <label for="saltillo-invert"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/saltillo-invert-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                            <fieldset\r
                                class="h-14 w-36 bg-slate-200 dark:bg-_color-dark rounded flex items-center justify-evenly md:w-32">\r
                                <input type="checkbox" class="h-5 w-5" name="sincopa" id="sincopa" value="SINCOPA">\r
                                <label for="sincopa"\r
                                    class="h-10 w-10 bg-white rounded block bg-[url('/images/sincopa-black.svg')] bg-no-repeat bg-center bg-cover"></label>\r
                            </fieldset>\r
                        </form>\r
                    </section>\r
                    <section class="p-2 bg-slate-200 rounded-lg dark:bg-_color-dark-slate">\r
                        <h3 class="w-full mb-2 text-_color-dark dark:text-white">Extras</h3>\r
                        <form class="flex gap-1 flex-wrap max-h-52 text-white" id="extras">\r
                            <fieldset\r
                                class="h-12 w-full bg-slate-300 dark:bg-_color-dark text-_color-dark dark:text-white rounded flex p-2 items-center gap-x-1">\r
                                <input type="checkbox" class="h-5 w-5" id="cipher" value="cipherAmerican">\r
                                <label for="cipher">Cifrado americano</label>\r
                            </fieldset>\r
                        </form>\r
                    </section>\r
                </section>\r
            </div>\r
        </section>\r
\r
        <!-- ----------------------------------------------------------------------- -->\r
\r
    </section>\r
    <footer class="bg-cyan-800 h-12 text-center py-2 text-white">\r
        &copy; Mester, todo los derechos reservados\r
    </footer>\r
</div>\r
`,E={defaultNotes:["C","D","E","F","G","A","B"],notes:["DO","RE","MI","FA","SOL","LA","SI"]},v=(e,t={})=>{const s=document.querySelector(e);s&&Object.assign(s,t)},c={LIGHT__LOGO:"images/logo-light.png",DARK__LOGO:"images/logo-dark.png",SEMICORCHEA__BLACK:"images/semicorchea-black.svg",SEMICORCHEA__WHITE:"images/semicorchea-white.svg",NEGRA__BLACK:"images/negra-black.svg",NEGRA__WHITE:"images/negra-white.svg",CORCHEA__BLACK:"images/corchea-black.svg",CORCHEA__WHITE:"images/corchea-white.svg",GALOPA__BLACK:"images/galopa-black.svg",GALOPA__WHITE:"images/galopa-white.svg",GALOPA_INVERT__BLACK:"images/galopa-invert-black.svg",GALOPA_INVERT__WHITE:"images/galopa-invert-white.svg",TRESILLO__BLACK:"images/tresillo-black.svg",TRESILLO__WHITE:"images/tresillo-white.svg",QUINTILLO__BLACK:"images/quintillo-black.svg",QUINTILLO__WHITE:"images/quintillo-white.svg",SEISILLO__BLACK:"images/seisillo-black.svg",SEISILLO__WHITE:"images/seisillo-white.svg",SALTILLO__BLACK:"images/saltillo-black.svg",SALTILLO__WHITE:"images/saltillo-white.svg",SALTILLO_INVERT__BLACK:"images/saltillo-invert-black.svg",SALTILLO_INVERT__WHITE:"images/saltillo-invert-white.svg",SINCOPA__BLACK:"images/sincopa-black.svg",SINCOPA__WHITE:"images/sincopa-white.svg"},I=e=>{const t={key:"",value:{}};return{setValue:(n=t)=>{const{key:r,value:o}=n;r&&o&&window.localStorage.setItem(r,JSON.stringify(o))},getValue:n=>JSON.parse(window.localStorage.getItem(n))}},V={min:0,max:10},O=(e=V)=>{const t=Math.ceil(e.min),s=Math.floor(e.max);return Math.floor(Math.random()*(s-t)+t)},A=I();let f=null;const W=e=>{f=f||document.getElementById("elm-menu"),a.getState.openMenu?(f.classList.remove("hidden"),document.body.classList.add("overflow-hidden")):(f.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))};let y=null;const K=e=>{y=y||document.getElementById("bpm"),y.textContent=a.getState.settings.bpm};let x=null,k=null;const q=e=>{x===null&&(x=document.getElementById("play")),k===null&&(k=document.getElementById("buttons-bpm"));const t=a.getState;t.start?(x.textContent="STOP",Q(t.settings.bpm),k.disable=!0):(x.textContent="PLAY",clearInterval(T),k.disable=!1)},M=e=>{let t=null;const s=l=>{const n=O({min:0,max:l});return t!==n?(t=n,n):s(l)};return s};let T=null;const B=M(),R=M(),U=new Audio("/metronome_1.mp3"),F=new Audio("/metronome_2.mp3"),L=[U,F];let m=0;const Q=e=>{clearInterval(T),T=setInterval(t=>{z()&&(m=0,J()),L[m].currentTime=0,L[m].play(),m===0&&(m=1)},6e4/e,m,L)},z=e=>{let t=u.querySelector("div.tmester--focus"),s=!1;return t?(t.classList.remove("tmester--focus"),t.nextElementSibling?(t.nextElementSibling.classList.add("tmester--focus"),s=!1):(d[0].classList.add("tmester--focus"),s=!0)):(s=!1,d[0].classList.add("tmester--focus")),s};let u=null,d=null,g=null;const P=e=>{u===null&&(u=document.getElementById("selected-notes")),d===null&&(d=u.querySelectorAll("div")),g===null&&(g=document.getElementById("next-notes").querySelectorAll("div"));const t=A.getValue("notesSelected"),s=Object.keys(c).filter(r=>t.includes(r.split("__")[0])&&r.endsWith("BLACK")),l=[...g],n=a.getState;[...d].forEach((r,o)=>{var N;const p=B(s==null?void 0:s.length),b=R((N=n==null?void 0:n.currentNotes)==null?void 0:N.length);r.firstElementChild.src=c[s[p]],r.lastElementChild.textContent=n==null?void 0:n.currentNotes[b],r.lastElementChild.dataset.index=b,l[o].firstElementChild.src=c[s[p]],l[o].lastElementChild.textContent=n==null?void 0:n.currentNotes[b],l[o].lastElementChild.dataset.index=b}),G({element:l,images:s,notes:n==null?void 0:n.currentNotes})},J=e=>{const t=[...g],s=[...d];t.forEach((r,o)=>{const p=s[o];p.firstElementChild.src=r.firstElementChild.src,p.lastElementChild.textContent=r.lastElementChild.textContent});const l=A.getValue("notesSelected"),n=Object.keys(c).filter(r=>l.includes(r.split("__")[0])&&r.endsWith("BLACK"));G({element:t,images:n,notes:a.getState.currentNotes})},G=({element:e,images:t,notes:s})=>{e.forEach(o=>{o.classList.remove("tmester--focus")});const l=O({min:0,max:3}),n=B(t==null?void 0:t.length),r=R(s==null?void 0:s.length);e[l].firstElementChild.src=c[t[n]],e[l].lastElementChild.textContent=s[r],e[l].lastElementChild.dataset.index=r,e[l].classList.add("tmester--focus")},Y=e=>{u===null&&(u=document.getElementById("selected-notes")),d===null&&(d=u.querySelectorAll("div")),g===null&&(g=document.getElementById("next-notes").querySelectorAll("div"));const t=[...g];[...d].forEach((s,l)=>{const n=s.lastElementChild;n.textContent=a.getState.currentNotes[n.dataset.index];const r=t[l].lastElementChild;t[l].lastElementChild.textContent=a.getState.currentNotes[r.dataset.index]})},$=e=>{a.dispatch=i.setStart(!a.getState.start)},X=e=>{a.dispatch=i.setOpenMenu(!a.getState.openMenu)},Z=e=>{a.dispatch=i.setBpm(a.getState.settings.bpm+a.getState.settings.bpmShort)},ee=e=>{a.dispatch=i.setBpm(a.getState.settings.bpm+a.getState.settings.bpmLong)},te=e=>{a.dispatch=i.setBpm(a.getState.settings.bpm-a.getState.settings.bpmShort)},ne=e=>{a.dispatch=i.setBpm(a.getState.settings.bpm-a.getState.settings.bpmLong)},se=e=>{var t,s;e.target.dataset.evref===e.detail.evref&&((s=(t=e.detail)==null?void 0:t.callback)==null||s.call(t))},le=e=>{const{currentTarget:t}=e;t.checked?(document.body.classList.add("dark"),window.localStorage.setItem("isDarkMode",1),v("#logo",{src:c.LIGHT__LOGO}),S(!0)):(document.body.classList.remove("dark"),window.localStorage.setItem("isDarkMode",0),v("#logo",{src:c.DARK__LOGO}),S(!1))},re=e=>{const t=document.getElementById("darkmode"),s=window.localStorage.getItem("isDarkMode");let l=!1;s===null?l=!!window.matchMedia("(prefers-color-scheme: dark)").matches:l=!!(s*1),l?(document.body.classList.add("dark"),t.checked=!0,v("#logo",{src:c.LIGHT__LOGO}),S(!0)):(document.body.classList.remove("dark"),v("#logo",{src:c.DARK__LOGO}),S(!1))},ae=e=>{$()},h=I();let w=null;const S=e=>{w===null&&(w=document.getElementById("form-notes").querySelectorAll("input[type=checkbox]"));const t=h.getValue("notesSelected"),s=e?"WHITE":"BLACK";let l=null;if(t)w.forEach(n=>{n.checked=t.includes(n.value)}),l=Object.keys(c).filter(n=>t.includes(n.split("__")[0].toLowerCase())&&n.endsWith(s));else{w.forEach(r=>{r.checked=!0}),l=Object.keys(c).filter(r=>r.endsWith(s));const n=l.map(r=>r.split("__")[0]||null);h.setValue({key:"notesSelected",value:n})}a.dispatch=i.setCurrentImagePath(l)};let C=null;const oe=e=>{const{currentTarget:t}=e,l=[...t.querySelectorAll("input[type=checkbox]:checked")].map(n=>n.value);h.setValue({key:"notesSelected",value:l}),clearTimeout(C),C=setTimeout(n=>{P()},1e3)};let _=null;const ce=e=>{_===null&&(_=document.getElementById("extras"));const t=h.getValue("extras");t?_.cipher.checked=t.includes("cipherAmerican"):(_.cipher.checked=!0,h.setValue({key:"extras",value:["cipherAmerican"]}))},ie=e=>{const{currentTarget:t,target:s}=e,n=[...t.querySelectorAll("input[type=checkbox]:checked")].map(r=>r.value);h.setValue({key:"extras",value:n}),s.value==="cipherAmerican"&&(a.dispatch=i.setCurrentNotes(s.checked&&E.defaultNotes||E.notes)),Y(s.checked)},de=e=>{const s=I().getValue("extras"),l=s&&s.includes("cipherAmerican")?E.defaultNotes:E.notes;a.dispatch=i.setCurrentNotes(l)},ue=e=>{document.getElementById("btn-menu").addEventListener("click",X),document.getElementById("elm-menu").addEventListener("customClickMenu",se,!0),document.getElementById("darkmode").addEventListener("click",le),document.getElementById("increaseLong").addEventListener("click",ee),document.getElementById("increaseShort").addEventListener("click",Z),document.getElementById("decreaseShort").addEventListener("click",te),document.getElementById("decreaseLong").addEventListener("click",ne),document.getElementById("play").addEventListener("click",ae),document.getElementById("form-notes").addEventListener("input",oe),document.getElementById("extras").addEventListener("input",ie),document.getElementById("elm-menu").addEventListener("click",t=>{t.target.dispatchEvent(new CustomEvent("customClickMenu",{detail:{evref:"toggleMenu",callback:()=>{a.dispatch=i.setOpenMenu(!a.getState.openMenu)}}}))})};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("app").innerHTML=D,de(),ue(),a.subscribe=()=>{W(),K(),q()},re(),P(),ce()});
