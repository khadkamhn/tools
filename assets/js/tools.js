/*!
 * Copyright (c) 2021 Momo Bassit.
 * Licensed under the MIT License (MIT)
 * https://github.com/mdbassit/Coloris
 */
(function(e,t,a,r){var n,o,l,i,c,s,d,u,p,f,h,y,m,b,v,g,w=t.createElement("canvas").getContext("2d"),k={r:0,g:0,b:0,h:0,s:0,v:0,a:1},S={},E={el:"[data-coloris]",parent:"body",theme:"default",themeMode:"light",rtl:!1,wrap:!0,margin:2,format:"hex",formatToggle:!1,swatches:[],swatchesOnly:!1,alpha:!0,forceAlpha:!1,focusInput:!0,selectInput:!1,inline:!1,defaultColor:"#000000",clearButton:!1,clearLabel:"Clear",closeButton:!1,closeLabel:"Close",onChange:function(){return r},a11y:{open:"Open color picker",close:"Close color picker",clear:"Clear the selected color",marker:"Saturation: {s}. Brightness: {v}.",hueSlider:"Hue slider",alphaSlider:"Opacity slider",input:"Color value field",format:"Color format",swatch:"Color swatch",instruction:"Saturation and brightness selector. Use up, down, left and right arrow keys to select."}},x={},L="",T={},A=!1;function C(a){if("object"==typeof a)for(var i in a)switch(i){case"el":q(a.el),!1!==a.wrap&&B(a.el);break;case"parent":(n=t.querySelector(a.parent))&&(n.appendChild(o),E.parent=a.parent,n===t.body&&(n=r));break;case"themeMode":E.themeMode=a.themeMode,"auto"===a.themeMode&&e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)").matches&&(E.themeMode="dark");case"theme":a.theme&&(E.theme=a.theme),o.className="clr-picker clr-"+E.theme+" clr-"+E.themeMode,E.inline&&I();break;case"rtl":E.rtl=!!a.rtl,t.querySelectorAll(".clr-field").forEach((function(e){return e.classList.toggle("clr-rtl",E.rtl)}));break;case"margin":a.margin*=1,E.margin=isNaN(a.margin)?E.margin:a.margin;break;case"wrap":a.el&&a.wrap&&B(a.el);break;case"formatToggle":E.formatToggle=!!a.formatToggle,$("clr-format").style.display=E.formatToggle?"block":"none",E.formatToggle&&(E.format="auto");break;case"swatches":Array.isArray(a.swatches)&&function(){var e=[];a.swatches.forEach((function(t,a){e.push('<button type="button" id="clr-swatch-'+a+'" aria-labelledby="clr-swatch-label clr-swatch-'+a+'" style="color: '+t+';">'+t+"</button>")})),$("clr-swatches").innerHTML=e.length?"<div>"+e.join("")+"</div>":"",E.swatches=a.swatches.slice()}();break;case"swatchesOnly":E.swatchesOnly=!!a.swatchesOnly,o.setAttribute("data-minimal",E.swatchesOnly);break;case"alpha":E.alpha=!!a.alpha,o.setAttribute("data-alpha",E.alpha);break;case"inline":if(E.inline=!!a.inline,o.setAttribute("data-inline",E.inline),E.inline){var f=a.defaultColor||E.defaultColor;b=Y(f),I(),O(f)}break;case"clearButton":"object"==typeof a.clearButton&&(a.clearButton.label&&(E.clearLabel=a.clearButton.label,d.innerHTML=E.clearLabel),a.clearButton=a.clearButton.show),E.clearButton=!!a.clearButton,d.style.display=E.clearButton?"block":"none";break;case"clearLabel":E.clearLabel=a.clearLabel,d.innerHTML=E.clearLabel;break;case"closeButton":E.closeButton=!!a.closeButton,E.closeButton?o.insertBefore(u,c):c.appendChild(u);break;case"closeLabel":E.closeLabel=a.closeLabel,u.innerHTML=E.closeLabel;break;case"a11y":var y=a.a11y,m=!1;if("object"==typeof y)for(var v in y)y[v]&&E.a11y[v]&&(E.a11y[v]=y[v],m=!0);if(m){var g=$("clr-open-label"),w=$("clr-swatch-label");g.innerHTML=E.a11y.open,w.innerHTML=E.a11y.swatch,u.setAttribute("aria-label",E.a11y.close),d.setAttribute("aria-label",E.a11y.clear),p.setAttribute("aria-label",E.a11y.hueSlider),h.setAttribute("aria-label",E.a11y.alphaSlider),s.setAttribute("aria-label",E.a11y.input),l.setAttribute("aria-label",E.a11y.instruction)}break;default:E[i]=a[i]}}function M(e,t){"string"==typeof e&&"object"==typeof t&&(x[e]=t,A=!0)}function N(e){delete x[e],0===Object.keys(x).length&&(A=!1,e===L&&D())}function D(){Object.keys(T).length>0&&(C(T),L="",T={})}function q(e){z(t,"click",e,(function(e){E.inline||(function(e){if(A){var t=["el","wrap","rtl","inline","defaultColor","a11y"],a=function(a){var r=x[a];if(e.matches(a)){for(var n in L=a,T={},t.forEach((function(e){return delete r[e]})),r)T[n]=Array.isArray(E[n])?E[n].slice():E[n];return C(r),"break"}};for(var r in x)if("break"===a(r))break}}(e.target),m=e.target,v=m.value,b=Y(v),o.classList.add("clr-open"),I(),O(v),(E.focusInput||E.selectInput)&&(s.focus({preventScroll:!0}),s.setSelectionRange(m.selectionStart,m.selectionEnd)),E.selectInput&&s.select(),(g||E.swatchesOnly)&&G().shift().focus(),m.dispatchEvent(new Event("open",{bubbles:!0})))})),z(t,"input",e,(function(e){var t=e.target.parentNode;t.classList.contains("clr-field")&&(t.style.color=e.target.value)}))}function I(){var a,r,i,c=n,s=e.scrollY,d=o.offsetWidth,u=o.offsetHeight,p={left:!1,top:!1},f={x:0,y:0};if(c&&(a=e.getComputedStyle(c),r=parseFloat(a.marginTop),i=parseFloat(a.borderTopWidth),(f=c.getBoundingClientRect()).y+=i+s),!E.inline){var h=m.getBoundingClientRect(),y=h.x,b=s+h.y+h.height+E.margin;c?(y-=f.x,b-=f.y,y+d>c.clientWidth&&(y+=h.width-d,p.left=!0),b+u>c.clientHeight-r&&u+E.margin<=h.top-(f.y-s)&&(b-=h.height+u+2*E.margin,p.top=!0),b+=c.scrollTop):(y+d>t.documentElement.clientWidth&&(y+=h.width-d,p.left=!0),b+u-s>t.documentElement.clientHeight&&u+E.margin<=h.top&&(b=s+h.y-u-E.margin,p.top=!0)),o.classList.toggle("clr-left",p.left),o.classList.toggle("clr-top",p.top),o.style.left=y+"px",o.style.top=b+"px",f.x+=o.offsetLeft,f.y+=o.offsetTop}S={width:l.offsetWidth,height:l.offsetHeight,x:l.offsetLeft+f.x,y:l.offsetTop+f.y}}function B(e){t.querySelectorAll(e).forEach((function(e){var a=e.parentNode;if(!a.classList.contains("clr-field")){var r=t.createElement("div"),n="clr-field";(E.rtl||e.classList.contains("clr-rtl"))&&(n+=" clr-rtl"),r.innerHTML='<button type="button" aria-labelledby="clr-open-label"></button>',a.insertBefore(r,e),r.setAttribute("class",n),r.style.color=e.value,r.appendChild(e)}}))}function H(e){if(m&&!E.inline){var t=m;e&&(m=r,v!==t.value&&(t.value=v,t.dispatchEvent(new Event("input",{bubbles:!0})))),setTimeout((function(){v!==t.value&&t.dispatchEvent(new Event("change",{bubbles:!0}))})),o.classList.remove("clr-open"),A&&D(),t.dispatchEvent(new Event("close",{bubbles:!0})),E.focusInput&&t.focus({preventScroll:!0}),m=r}}function O(e){var t=function(e){var t,a,r=/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i;return w.fillStyle="#000",w.fillStyle=e,(t=r.exec(w.fillStyle))?(a={r:1*t[3],g:1*t[4],b:1*t[5],a:1*t[6]}).a=+a.a.toFixed(2):a={r:(t=w.fillStyle.replace("#","").match(/.{2}/g).map((function(e){return parseInt(e,16)})))[0],g:t[1],b:t[2],a:1},a}(e),r=function(e){var t=e.r/255,r=e.g/255,n=e.b/255,o=a.max(t,r,n),l=a.min(t,r,n),i=o-l,c=o,s=0,d=0;return i&&(o===t&&(s=(r-n)/i),o===r&&(s=2+(n-t)/i),o===n&&(s=4+(t-r)/i),o&&(d=i/o)),{h:(s=a.floor(60*s))<0?s+360:s,s:a.round(100*d),v:a.round(100*c),a:e.a}}(t);F(r.s,r.v),P(t,r),p.value=r.h,o.style.color="hsl("+r.h+", 100%, 50%)",f.style.left=r.h/360*100+"%",i.style.left=S.width*r.s/100+"px",i.style.top=S.height-S.height*r.v/100+"px",h.value=100*r.a,y.style.left=100*r.a+"%"}function Y(e){var t=e.substring(0,3).toLowerCase();return"rgb"===t||"hsl"===t?t:"hex"}function j(a){a=a!==r?a:s.value,m&&(m.value=a,m.dispatchEvent(new Event("input",{bubbles:!0}))),E.onChange&&E.onChange.call(e,a,m),t.dispatchEvent(new CustomEvent("coloris:pick",{detail:{color:a,currentEl:m}}))}function W(e,t){var r={h:1*p.value,s:e/S.width*100,v:100-t/S.height*100,a:h.value/100},n=function(e){var t=e.s/100,r=e.v/100,n=t*r,o=e.h/60,l=n*(1-a.abs(o%2-1)),i=r-n;n+=i,l+=i;var c=a.floor(o)%6,s=[n,l,i,i,l,n][c],d=[l,n,n,l,i,i][c],u=[i,i,l,n,n,l][c];return{r:a.round(255*s),g:a.round(255*d),b:a.round(255*u),a:e.a}}(r);F(r.s,r.v),P(n,r),j()}function F(e,t){var a=E.a11y.marker;e=1*e.toFixed(1),t=1*t.toFixed(1),a=(a=a.replace("{s}",e)).replace("{v}",t),i.setAttribute("aria-label",a)}function R(e){var t=function(e){return{pageX:e.changedTouches?e.changedTouches[0].pageX:e.pageX,pageY:e.changedTouches?e.changedTouches[0].pageY:e.pageY}}(e),a=t.pageX-S.x,r=t.pageY-S.y;n&&(r+=n.scrollTop),U(a,r),e.preventDefault(),e.stopPropagation()}function J(e,t){U(1*i.style.left.replace("px","")+e,1*i.style.top.replace("px","")+t)}function U(e,t){e=e<0?0:e>S.width?S.width:e,t=t<0?0:t>S.height?S.height:t,i.style.left=e+"px",i.style.top=t+"px",W(e,t),i.focus()}function P(e,r){void 0===e&&(e={}),void 0===r&&(r={});var n=E.format;for(var o in e)k[o]=e[o];for(var d in r)k[d]=r[d];var u,p=function(e){var t=e.r.toString(16),a=e.g.toString(16),r=e.b.toString(16),n="";if(e.r<16&&(t="0"+t),e.g<16&&(a="0"+a),e.b<16&&(r="0"+r),E.alpha&&(e.a<1||E.forceAlpha)){var o=255*e.a|0;n=o.toString(16),o<16&&(n="0"+n)}return"#"+t+a+r+n}(k),f=p.substring(0,7);switch(i.style.color=f,y.parentNode.style.color=f,y.style.color=p,c.style.color=p,l.style.display="none",l.offsetHeight,l.style.display="",y.nextElementSibling.style.display="none",y.nextElementSibling.offsetHeight,y.nextElementSibling.style.display="","mixed"===n?n=1===k.a?"hex":"rgb":"auto"===n&&(n=b),n){case"hex":s.value=p;break;case"rgb":s.value=function(e){return!E.alpha||1===e.a&&!E.forceAlpha?"rgb("+e.r+", "+e.g+", "+e.b+")":"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"}(k);break;case"hsl":s.value=(u=function(e){var t,r=e.v/100,n=r*(1-e.s/100/2);return n>0&&n<1&&(t=a.round((r-n)/a.min(n,1-n)*100)),{h:e.h,s:t||0,l:a.round(100*n),a:e.a}}(k),!E.alpha||1===u.a&&!E.forceAlpha?"hsl("+u.h+", "+u.s+"%, "+u.l+"%)":"hsla("+u.h+", "+u.s+"%, "+u.l+"%, "+u.a+")")}t.querySelector('.clr-format [value="'+n+'"]').checked=!0}function _(){var e=1*p.value,t=1*i.style.left.replace("px",""),a=1*i.style.top.replace("px","");o.style.color="hsl("+e+", 100%, 50%)",f.style.left=e/360*100+"%",W(t,a)}function X(){var e=h.value/100;y.style.left=100*e+"%",P({a:e}),j()}function G(){return Array.from(o.querySelectorAll("input, button")).filter((function(e){return!!e.offsetWidth}))}function $(e){return t.getElementById(e)}function z(e,t,a,r){var n=Element.prototype.matches||Element.prototype.msMatchesSelector;"string"==typeof a?e.addEventListener(t,(function(e){n.call(e.target,a)&&r.call(e.target,e)})):(r=a,e.addEventListener(t,r))}function K(e,a){a=a!==r?a:[],"loading"!==t.readyState?e.apply(void 0,a):t.addEventListener("DOMContentLoaded",(function(){e.apply(void 0,a)}))}NodeList!==r&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),e.Coloris=function(){var e={set:C,wrap:B,close:H,setInstance:M,removeInstance:N,updatePosition:I,ready:K};function t(e){K((function(){e&&("string"==typeof e?q(e):C(e))}))}var a=function(a){t[a]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];K(e[a],r)}};for(var r in e)a(r);return t}(),K((function(){n=r,(o=t.createElement("div")).setAttribute("id","clr-picker"),o.className="clr-picker",o.innerHTML='<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="'+E.a11y.input+'"><div id="clr-color-area" class="clr-gradient" role="application" aria-label="'+E.a11y.instruction+'"><div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue"><input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="'+E.a11y.hueSlider+'"><div id="clr-hue-marker"></div></div><div class="clr-alpha"><input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="'+E.a11y.alphaSlider+'"><div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented"><legend>'+E.a11y.format+'</legend><input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div><button type="button" id="clr-clear" class="clr-clear" aria-label="'+E.a11y.clear+'">'+E.clearLabel+'</button><div id="clr-color-preview" class="clr-preview"><button type="button" id="clr-close" class="clr-close" aria-label="'+E.a11y.close+'">'+E.closeLabel+'</button></div><span id="clr-open-label" hidden>'+E.a11y.open+'</span><span id="clr-swatch-label" hidden>'+E.a11y.swatch+"</span>",t.body.appendChild(o),l=$("clr-color-area"),i=$("clr-color-marker"),d=$("clr-clear"),u=$("clr-close"),c=$("clr-color-preview"),s=$("clr-color-value"),p=$("clr-hue-slider"),f=$("clr-hue-marker"),h=$("clr-alpha-slider"),y=$("clr-alpha-marker"),q(E.el),B(E.el),z(o,"mousedown",(function(e){o.classList.remove("clr-keyboard-nav"),e.stopPropagation()})),z(l,"mousedown",(function(e){z(t,"mousemove",R)})),z(l,"touchstart",(function(e){t.addEventListener("touchmove",R,{passive:!1})})),z(i,"mousedown",(function(e){z(t,"mousemove",R)})),z(i,"touchstart",(function(e){t.addEventListener("touchmove",R,{passive:!1})})),z(s,"change",(function(e){var t=s.value;(m||E.inline)&&j(""===t?t:O(t))})),z(d,"click",(function(e){j(""),H()})),z(u,"click",(function(e){j(),H()})),z($("clr-format"),"click",".clr-format input",(function(e){b=e.target.value,P(),j()})),z(o,"click",".clr-swatches button",(function(e){O(e.target.textContent),j(),E.swatchesOnly&&H()})),z(t,"mouseup",(function(e){t.removeEventListener("mousemove",R)})),z(t,"touchend",(function(e){t.removeEventListener("touchmove",R)})),z(t,"mousedown",(function(e){g=!1,o.classList.remove("clr-keyboard-nav"),H()})),z(t,"keydown",(function(e){var t=e.key,a=e.target,r=e.shiftKey;if("Escape"===t?H(!0):["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(g=!0,o.classList.add("clr-keyboard-nav")),"Tab"===t&&a.matches(".clr-picker *")){var n=G(),l=n.shift(),i=n.pop();r&&a===l?(i.focus(),e.preventDefault()):r||a!==i||(l.focus(),e.preventDefault())}})),z(t,"click",".clr-field button",(function(e){A&&D(),e.target.nextElementSibling.dispatchEvent(new Event("click",{bubbles:!0}))})),z(i,"keydown",(function(e){var t={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};Object.keys(t).includes(e.key)&&(J.apply(void 0,t[e.key]),e.preventDefault())})),z(l,"click",R),z(p,"input",_),z(h,"input",X)}))})(window,document,Math),(()=>{"use strict";window.cal=new class{constructor(){this.nepaliYears={1975:[31,32,31,32,31,30,30,30,29,30,29,31],1976:[31,32,31,32,31,30,30,30,29,29,30,30],1977:[31,31,32,31,31,31,30,29,30,29,30,30],1978:[31,31,31,32,31,31,30,29,30,29,30,30],1979:[31,32,31,32,31,30,30,30,29,30,29,31],1980:[31,32,31,32,31,30,30,29,30,29,30,30],1981:[31,31,32,31,31,31,30,29,30,29,30,30],1982:[31,31,31,32,31,31,29,30,30,29,30,30],1983:[31,32,31,32,31,30,30,30,29,29,30,31],1984:[31,31,32,32,31,30,30,29,30,29,30,30],1985:[31,31,32,31,31,31,30,29,30,29,30,30],1986:[31,31,31,32,31,31,29,30,30,29,30,30],1987:[31,32,31,32,31,30,30,30,29,29,30,31],1988:[31,31,32,32,31,30,30,29,30,29,30,30],1989:[31,31,32,31,31,31,30,29,30,29,30,30],1990:[31,31,31,32,31,31,29,30,30,29,29,31],1991:[31,32,31,32,31,30,30,30,29,29,30,31],1992:[31,31,32,32,31,30,30,29,30,29,30,30],1993:[31,31,32,31,31,31,30,29,30,29,30,30],1994:[30,32,31,32,31,30,30,30,29,30,29,31],1995:[31,32,31,32,31,30,30,30,29,29,30,31],1996:[31,31,32,32,31,30,29,30,30,29,30,30],1997:[31,31,32,31,31,31,30,29,30,29,30,30],1998:[30,32,31,32,31,30,30,30,29,30,29,31],1999:[31,32,31,32,31,30,30,30,29,29,30,31],2e3:[30,32,31,32,31,30,30,30,29,30,29,31],2001:[31,31,32,31,31,31,30,29,30,29,30,30],2002:[31,31,32,32,31,30,30,29,30,29,30,30],2003:[31,32,31,32,31,30,30,30,29,29,30,31],2004:[30,32,31,32,31,30,30,30,29,30,29,31],2005:[31,31,32,31,31,31,30,29,30,29,30,30],2006:[31,31,32,32,31,30,30,29,30,29,30,30],2007:[31,32,31,32,31,30,30,30,29,29,30,31],2008:[31,31,31,32,31,31,29,30,30,29,29,31],2009:[31,31,32,31,31,31,30,29,30,29,30,30],2010:[31,31,32,32,31,30,30,29,30,29,30,30],2011:[31,32,31,32,31,30,30,30,29,29,30,31],2012:[31,31,31,32,31,31,29,30,30,29,30,30],2013:[31,31,32,31,31,31,30,29,30,29,30,30],2014:[31,31,32,32,31,30,30,29,30,29,30,30],2015:[31,32,31,32,31,30,30,30,29,29,30,31],2016:[31,31,31,32,31,31,29,30,30,29,30,30],2017:[31,31,32,31,31,31,30,29,30,29,30,30],2018:[31,32,31,32,31,30,30,29,30,29,30,30],2019:[31,32,31,32,31,30,30,30,29,30,29,31],2020:[31,31,31,32,31,31,30,29,30,29,30,30],2021:[31,31,32,31,31,31,30,29,30,29,30,30],2022:[31,32,31,32,31,30,30,30,29,29,30,30],2023:[31,32,31,32,31,30,30,30,29,30,29,31],2024:[31,31,31,32,31,31,30,29,30,29,30,30],2025:[31,31,32,31,31,31,30,29,30,29,30,30],2026:[31,32,31,32,31,30,30,30,29,29,30,31],2027:[30,32,31,32,31,30,30,30,29,30,29,31],2028:[31,31,32,31,31,31,30,29,30,29,30,30],2029:[31,31,32,31,32,30,30,29,30,29,30,30],2030:[31,32,31,32,31,30,30,30,29,29,30,31],2031:[30,32,31,32,31,30,30,30,29,30,29,31],2032:[31,31,32,31,31,31,30,29,30,29,30,30],2033:[31,31,32,32,31,30,30,29,30,29,30,30],2034:[31,32,31,32,31,30,30,30,29,29,30,31],2035:[30,32,31,32,31,31,29,30,30,29,29,31],2036:[31,31,32,31,31,31,30,29,30,29,30,30],2037:[31,31,32,32,31,30,30,29,30,29,30,30],2038:[31,32,31,32,31,30,30,30,29,29,30,31],2039:[31,31,31,32,31,31,29,30,30,29,30,30],2040:[31,31,32,31,31,31,30,29,30,29,30,30],2041:[31,31,32,32,31,30,30,29,30,29,30,30],2042:[31,32,31,32,31,30,30,30,29,29,30,31],2043:[31,31,31,32,31,31,29,30,30,29,30,30],2044:[31,31,32,31,31,31,30,29,30,29,30,30],2045:[31,32,31,32,31,30,30,29,30,29,30,30],2046:[31,32,31,32,31,30,30,30,29,29,30,31],2047:[31,31,31,32,31,31,30,29,30,29,30,30],2048:[31,31,32,31,31,31,30,29,30,29,30,30],2049:[31,32,31,32,31,30,30,30,29,29,30,30],2050:[31,32,31,32,31,30,30,30,29,30,29,31],2051:[31,31,31,32,31,31,30,29,30,29,30,30],2052:[31,31,32,31,31,31,30,29,30,29,30,30],2053:[31,32,31,32,31,30,30,30,29,29,30,30],2054:[31,32,31,32,31,30,30,30,29,30,29,31],2055:[31,31,32,31,31,31,30,29,30,29,30,30],2056:[31,31,32,31,32,30,30,29,30,29,30,30],2057:[31,32,31,32,31,30,30,30,29,29,30,31],2058:[30,32,31,32,31,30,30,30,29,30,29,31],2059:[31,31,32,31,31,31,30,29,30,29,30,30],2060:[31,31,32,32,31,30,30,29,30,29,30,30],2061:[31,32,31,32,31,30,30,30,29,29,30,31],2062:[30,32,31,32,31,31,29,30,29,30,29,31],2063:[31,31,32,31,31,31,30,29,30,29,30,30],2064:[31,31,32,32,31,30,30,29,30,29,30,30],2065:[31,32,31,32,31,30,30,30,29,29,30,31],2066:[31,31,31,32,31,31,29,30,30,29,29,31],2067:[31,31,32,31,31,31,30,29,30,29,30,30],2068:[31,31,32,32,31,30,30,29,30,29,30,30],2069:[31,32,31,32,31,30,30,30,29,29,30,31],2070:[31,31,31,32,31,31,29,30,30,29,30,30],2071:[31,31,32,31,31,31,30,29,30,29,30,30],2072:[31,32,31,32,31,30,30,29,30,29,30,30],2073:[31,32,31,32,31,30,30,30,29,29,30,31],2074:[31,31,31,32,31,31,30,29,30,29,30,30],2075:[31,31,32,31,31,31,30,29,30,29,30,30],2076:[31,32,31,32,31,30,30,30,29,29,30,30],2077:[31,32,31,32,31,30,30,30,29,30,29,31],2078:[31,31,31,32,31,31,30,29,30,29,30,30],2079:[31,31,32,31,31,31,30,29,30,29,30,30],2080:[31,32,31,32,31,30,30,30,29,29,30,30],2081:[31,31,32,32,31,30,30,30,29,30,30,30],2082:[30,32,31,32,31,30,30,30,29,30,30,30],2083:[31,31,32,31,31,30,30,30,29,30,30,30],2084:[31,31,32,31,31,30,30,30,29,30,30,30],2085:[31,32,31,32,30,31,30,30,29,30,30,30],2086:[30,32,31,32,31,30,30,30,29,30,30,30],2087:[31,31,32,31,31,31,30,30,29,30,30,30],2088:[30,31,32,32,30,31,30,30,29,30,30,30],2089:[30,32,31,32,31,30,30,30,29,30,30,30],2090:[30,32,31,32,31,30,30,30,29,30,30,30],2091:[31,31,32,32,31,30,30,29,30,29,30,30],2092:[30,31,32,32,31,30,30,30,29,30,30,30],2093:[30,32,31,32,31,30,30,30,29,29,30,30],2094:[31,31,32,31,31,30,30,30,29,30,30,30],2095:[31,31,32,31,31,31,30,29,30,30,30,30],2096:[31,32,31,32,31,30,30,30,29,29,30,31],2097:[31,31,31,32,30,31,29,30,30,29,30,30],2098:[31,31,32,31,31,31,30,29,30,29,30,30],2099:[31,31,32,32,31,30,30,29,30,29,30,30],2100:[31,32,31,32,31,30,30,30,29,29,30,31],2101:[31,31,31,32,31,31,29,30,30,29,30,30],2102:[31,31,32,31,31,31,30,29,30,29,30,30],2103:[31,32,31,32,31,30,30,29,30,29,30,30],2104:[31,32,31,32,31,30,30,30,29,30,29,31],2105:[31,31,31,32,31,31,30,29,30,29,30,30],2106:[31,31,32,31,31,31,30,29,30,29,30,30],2107:[31,32,31,32,31,30,30,30,29,29,30,30],2108:[31,32,31,32,31,30,30,30,29,30,29,31],2109:[31,31,31,32,31,31,30,29,30,29,30,30],2110:[31,31,32,31,31,31,30,29,30,29,30,30],2111:[31,32,31,32,31,30,30,30,29,29,30,30],2112:[31,32,31,32,31,30,30,30,29,30,29,31],2113:[31,31,32,31,31,31,30,29,30,29,30,30],2114:[31,31,32,31,32,30,30,29,30,29,30,30],2115:[31,32,31,32,31,30,30,30,29,29,30,31],2116:[30,32,31,32,31,30,30,30,29,30,29,31],2117:[31,31,32,31,31,31,30,29,30,29,30,30],2118:[31,31,32,32,31,30,30,29,30,29,30,30],2119:[31,32,31,32,31,30,30,30,29,29,30,31],2120:[30,32,31,32,31,31,29,30,30,29,29,31],2121:[31,31,32,31,31,31,30,29,30,29,30,30],2122:[31,31,32,32,31,30,30,29,30,29,30,30],2123:[31,32,31,32,31,30,30,30,29,29,30,31],2124:[31,31,31,32,31,31,29,30,30,29,30,30],2125:[31,31,32,31,31,31,30,29,30,29,30,30],2126:[31,31,32,32,31,30,30,29,30,29,30,30],2127:[31,32,31,32,31,30,30,30,29,29,30,31],2128:[31,31,31,32,31,31,29,30,30,29,30,30],2129:[31,31,32,31,31,31,30,29,30,29,30,30],2130:[31,32,31,32,31,30,30,29,30,29,30,30],2131:[31,32,31,32,31,30,30,30,29,29,30,31],2132:[31,31,31,32,31,31,30,29,30,29,30,30],2133:[31,31,32,31,31,31,30,29,30,29,30,30],2134:[31,32,31,32,31,30,30,30,29,29,30,30],2135:[31,32,31,32,31,30,30,30,29,30,29,31],2136:[31,31,31,32,31,31,30,29,30,29,30,30],2137:[31,31,32,31,31,31,30,29,30,29,30,30],2138:[31,32,31,32,31,30,30,30,29,29,30,30],2139:[31,32,31,32,31,30,30,30,29,30,29,31],2140:[31,31,32,31,31,31,30,29,30,29,30,30],2141:[31,31,32,31,32,30,30,29,30,29,30,30],2142:[31,32,31,32,31,30,30,30,29,29,30,31],2143:[30,32,31,32,31,30,30,30,29,30,29,31],2144:[31,31,32,31,31,31,30,29,30,29,30,30],2145:[31,31,32,32,31,30,30,29,30,29,30,30],2146:[31,32,31,32,31,30,30,30,29,29,30,31],2147:[30,32,31,32,31,30,30,30,29,30,29,31],2148:[31,31,32,31,31,31,30,29,30,29,30,30],2149:[31,31,32,32,31,30,30,29,30,29,30,30],2150:[31,32,31,32,31,30,30,30,29,29,30,31],2151:[31,31,31,32,31,31,29,30,30,29,29,31],2152:[31,31,32,31,31,31,30,29,30,29,30,30],2153:[31,31,32,32,31,30,30,29,30,29,30,30],2154:[31,32,31,32,31,30,30,30,29,29,30,31],2155:[31,31,31,32,31,31,29,30,30,29,30,30],2156:[31,31,32,31,31,31,30,29,30,29,30,30],2157:[31,32,31,32,31,30,30,29,30,29,30,30],2158:[31,32,31,32,31,30,30,30,29,29,30,31],2159:[31,31,31,32,31,31,30,29,30,29,30,30],2160:[31,31,32,31,31,31,30,29,30,29,30,30],2161:[31,32,31,32,31,30,30,30,29,29,30,30],2162:[31,32,31,32,31,30,30,30,29,30,29,31],2163:[31,31,31,32,31,31,30,29,30,29,30,30],2164:[31,31,32,31,31,31,30,29,30,29,30,30],2165:[31,32,31,32,31,30,30,30,29,29,30,30],2166:[31,32,31,32,31,30,30,30,29,30,29,31],2167:[31,31,31,32,31,31,30,29,30,29,30,30],2168:[31,31,32,31,31,31,30,29,30,29,30,30],2169:[31,32,31,32,31,30,30,30,29,29,30,31],2170:[30,32,31,32,31,30,30,30,29,30,29,31],2171:[31,31,32,31,31,31,30,29,30,29,30,30],2172:[31,31,32,31,32,30,30,29,30,29,30,30],2173:[31,32,31,32,31,30,30,30,29,29,30,31],2174:[30,32,31,32,31,30,30,30,29,30,29,31],2175:[31,31,32,31,31,31,30,29,30,29,30,30],2176:[31,31,32,32,31,30,30,29,30,29,30,30],2177:[31,32,31,32,31,30,30,30,29,29,30,31],2178:[30,32,31,32,31,31,29,30,30,29,29,31],2179:[31,31,32,31,31,31,30,29,30,29,30,30],2180:[31,31,32,32,31,30,30,29,30,29,30,30],2181:[31,32,31,32,31,30,30,30,29,29,30,31],2182:[31,31,31,32,31,31,29,30,30,29,30,30],2183:[31,31,32,31,31,31,30,29,30,29,30,30],2184:[31,31,32,32,31,30,30,29,30,29,30,30],2185:[31,32,31,32,31,30,30,30,29,29,30,31],2186:[31,31,31,32,31,31,29,30,30,29,30,30],2187:[31,31,32,31,31,31,30,29,30,29,30,30],2188:[31,32,31,32,31,30,30,29,30,29,30,30],2189:[31,32,31,32,31,30,30,30,29,29,30,31],2190:[31,31,31,32,31,31,30,29,30,29,30,30],2191:[31,31,32,31,31,31,30,29,30,29,30,30],2192:[31,32,31,32,31,30,30,30,29,29,30,30],2193:[31,32,31,32,31,30,30,30,29,30,29,31],2194:[31,31,31,32,31,31,30,29,30,29,30,30],2195:[31,31,32,31,31,31,30,29,30,29,30,30],2196:[31,32,31,32,31,30,30,30,29,29,30,30],2197:[31,32,31,32,31,30,30,30,29,30,29,31],2198:[31,31,32,31,31,31,30,29,30,29,30,30],2199:[31,31,32,31,32,30,30,29,30,29,30,30]},this.firstDayEn="1918-04-13",this.startNe="1975",this.startEn="1918",this.endNe="2095",this.endEn="2038",this.monthNe=["बैशाख","जेठ","असार","साउन","भदौ","असोज","कार्तिक","मङ्सिर","पुस","माघ","फाल्गुण","चैत"],this.dayNe=["आईतबार","सोमबार","मङ्गलबार","बुधबार","बिहिबार","शुक्रबार","शनिवार"],this.monthEn=["January","February","March","April","May","June","July","August","September","October","November","December"],this.dayEn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}getTextNe(e,t="dg"){if(!e&&0!==e)return"";switch(t){case"mm":return this.monthNe[e];case"dd":return this.dayNe[e];case"dg":return this.getNumbNe(e)}}getNumbNe(e,t=!1){const a=["0","1","2","3","4","5","6","7","8","9"],r=["०","१","२","३","४","५","६","७","८","९"];return t?e.replace(new RegExp(r.join("|"),"g"),(e=>r.indexOf(e))):e.replace(new RegExp(a.join("|"),"g"),(e=>r[a.indexOf(e)]))}GregorianToJD(e,t,a){const r=Math.floor((14-t)/12),n=e+4800-r,o=t+12*r-3;return a+Math.floor((153*o+2)/5)+365*n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400)-32045}JDDayOfWeek(e,t){const a=[1,2,3,4,5,6,0],r=e%7;if(0===t)return a[r];if(1===t)return a[r]+1;throw new Error("Invalid mode. Use 0 for mode 0 or 1 for mode 1.")}getWeekNe(e,t,a){const r=this.GregorianToJD(parseInt(e),parseInt(t),parseInt(a)),n=this.JDDayOfWeek(r,0);return this.dayNe[n]}validateNe(e,t,a){return this.nepaliYears.hasOwnProperty(e)?t>12||t<1?"Invalid <b>month</b> range":!(a>this.nepaliYears[e][t-1]||a<1)||"Invalid <b>day</b> range":"Invalid <b>year</b> range"}validateEn(e,t,a){const r=(new Date).getFullYear();if(e<this.startEn||e>r||e>this.endEn)return"Invalid <b>year</b> range";if(t<1||t>12)return"Invalid <b>month</b> range";const n=new Date(e,t,0).getDate();return!(a<1||a>n)||"Invalid <b>day</b> range"}getNepDate(e,t,a,r){const n=this.validateEn(e,t,a);if(!0!==n)return r(n),!1;const o=new Date(`${e}-${t}-${a}`),l=this.getWeekNe(parseInt(e),parseInt(t),parseInt(a)),i=new Date(this.firstDayEn),c=Math.floor((o-i)/864e5);let s,d=0,u=!1;for(let a=this.startNe;a<this.endNe;a++){for(let r=0;r<12;r++)if(d+=this.nepaliYears[a][r],d>c){e=a,t=r+1;const n=d-c;s=this.nepaliYears[a][r]-n+1,u=!0;break}if(u)break}return{y:this.getNumbNe(e.toString()),m:this.getNumbNe(t.toString()),M:this.monthNe[t-1],d:this.getNumbNe(s.toString()),l,string:{yyyy:e.toString(),mm:t.toString().padStart(2,"0"),dd:s.toString().padStart(2,"0")}}}getEngDate(e,t,a,r){const n=this.validateNe(e,t,a);if(!0!==n)return r(n),!1;const o=new Date(this.firstDayEn);let l=0;const i=t-1;for(let t=this.startNe;t<e;t++)l+=this.nepaliYears[t].reduce(((e,t)=>e+t),0);for(let t=0;t<i;t++)l+=this.nepaliYears[e][t];l+=a-1;const c=new Date(o.getTime()+24*l*60*60*1e3);return{y:c.getFullYear(),m:c.getMonth()+1,M:this.monthEn[c.getMonth()],d:c.getDate(),l:this.dayEn[c.getDay()],string:{yyyy:c.getFullYear().toString(),mm:(c.getMonth()+1).toString().padStart(2,"0"),dd:c.getDate().toString().padStart(2,"0")}}}}})(),document.addEventListener("DOMContentLoaded",(function(){mk={init:function(){this.form()},id:function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=a.charAt(Math.floor(62*Math.random()));return t},confirm:function(e,t,a,r,n){try{var o=mk.id(10);if(!document.querySelector(".mk-confirm-wrap")){var l=document.createElement("div");l.className="mk-confirm-wrap",document.body.appendChild(l)}var i=document.createElement("div");i.innerHTML='<div><div class="mk-confirm" style="z-index:99999"><div class="modal-backdrop show"></div><div class="modal d-block"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-def btn-okay">Okay</button><button type="button" class="btn btn-def btn-cancel">Cancel</button></div></div></div></div></div></div>';var c=i.querySelector(".modal-body");c.style.padding="20px 15px",c.innerHTML=e,c.classList.add("text-center");var s=i.querySelector(".modal-footer");s.style.padding=0,s.style.flexWrap="nowrap",s.classList.add("justify-content-between"),i.querySelectorAll(".btn").forEach((function(e){e.style.width="100%",e.style.margin=0,e.style.borderRadius=0,e.style.border="1px solid #ccc",e.style.padding="12px"}));var d=i.querySelector(".modal-dialog");return d.style.maxWidth="320px",d.style.transform="scale(0.5)",d.style.transition="all .2s cubic-bezier(.8,.5,.2,1.4)",d.style.opacity=0,i.querySelector(".modal-content").style.overflow="hidden",i.querySelector(".modal").setAttribute("id",o),1==r&&i.querySelector(".btn-cancel").remove(),document.querySelector(".mk-confirm-wrap").appendChild(i.firstChild),document.documentElement.style.overflow="hidden",document.querySelector(".mk-confirm").addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("btn-okay")?t&&t(!0):a&&a(!0);var r=e.target.closest(".mk-confirm").querySelector(".modal-dialog");return r.style.transform="scale(0.5)",r.addEventListener("transitionend",(function(){e.target.closest(".mk-confirm").remove()})),document.documentElement.style.overflow="",!1})),setTimeout((function(){document.getElementById(o).querySelector(".modal-dialog").style.transform="scale(1)",document.getElementById(o).querySelector(".modal-dialog").style.opacity=1,document.getElementById(o).querySelector(".btn-okay").focus()}),10),!1}catch(e){console.error(e)}},alert:function(e,t){mk.confirm(e,(function(e){e&&t&&t(!0)}),!1,!0)},toastr:function(e,t,a,r){try{var n,o,l,i,c;e instanceof Object?(o=e.head&&e.head.text?e.head.text:null,i=e.head&&e.head.date?e.head.date:null,l=e.body?e.body:null):l=e,document.querySelector(".toast-container")||document.body.insertAdjacentHTML("beforeend",'<div class="toast-container position-fixed bottom-0 end-0 p-3">');var s=document.querySelector(".toast-container");s.insertAdjacentHTML("beforeend",'<div class="toast ml-auto show" style="display:none"><div class="toast-header"><strong class="me-auto"></strong><small></small><button type="button" class="ml-2 mb-1 btn-close btn-close-white"></button></div><div class="toast-body"></div></div>');var d=s.querySelector(".toast:last-child"),u=d.querySelector(".toast-header"),p=d.querySelector(".toast-body"),f=d.querySelector(".btn-close");o||i?(u.querySelector("strong").innerHTML=o,u.querySelector("small").innerHTML=i):u.remove(),p.innerHTML=l,n=mk.id(10),d.setAttribute("id",n),d.classList.add("text-bg-"+(t||"primary"),"text-white"),d.style.display="none",u.style.color="inherit",u.style.backgroundColor="rgba(0,0,0,.30)",f.style.color="inherit",p.addEventListener("click",(function(){d.style.display="none",c&&clearTimeout(c)})),f.addEventListener("click",(function(){d.style.display="none",c&&clearTimeout(c)})),s.style.overflow="hidden",setTimeout((function(){d.style.display="block"}),10),c=setTimeout((function(){d.style.display="none",a&&setTimeout((function(){d.remove()}),100)}),a||6e3),d.addEventListener("mouseout",(function(){var e=this;c=setTimeout((function(){e.style.display="none",c&&clearTimeout(c)}),a||6e3)})),d.addEventListener("mouseover",(function(){c&&clearTimeout(c),c=null}))}catch(e){}},form:function(){try{document.querySelectorAll('input[type="range"][data-range]').forEach((function(e){const t=e.getAttribute("data-vertical");e.getAttribute("min"),rangeSlider.create(e,{polyfill:!0,root:document,rangeClass:"rangeSlider",disabledClass:"rangeSlider--disabled",fillClass:"rangeSlider__fill",bufferClass:"rangeSlider__buffer",handleClass:"rangeSlider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"],vertical:t,borderRadius:10,onInit:function(){},onSlideStart:function(e,t){},onSlide:function(e,t){},onSlideEnd:function(e,t){}})})),document.querySelectorAll("input[data-coloris]").forEach((function(e){const t=window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light";e.addEventListener("click",(e=>{Coloris({alpha:!0,format:"mixed",themeMode:t,formatToggle:!1})}))}))}catch(e){}},loader:{show:function(e){try{document.querySelector(".mk-loader")||mk.confirm(e||"Please wait...",!1,!1,!1,!0)}catch(e){}},hide:function(){var e=document.querySelector(".mk-loader");e&&e.remove()}},copyToClipboard:function(e,t,a){if(navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{t&&t(!0),e=e.replace(/[\u00A0-\u9999<>\&]/gim,(function(e){return"&#"+e.charCodeAt(0)+";"})),mk.toastr({head:{text:"Clipboard copied"},body:'<p>Text successfully copied to clipboard!</p><p class="p-2 bg-white'+(e.length>200?" text-truncate":"")+'"><code class="text-pre">'+e.substring(0,200)+"</code></p>"},"success")})).catch((e=>{a&&a(!0),mk.toastr({head:{text:"Clipboard copied failed"},body:"<p>Unable to copy text to clipboard!</p><p><code>"+e+"</code></p>"},"danger")}));else{var r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select();try{document.execCommand("copy"),e=e.replace(/[\u00A0-\u9999<>\&]/gim,(function(e){return"&#"+e.charCodeAt(0)+";"})),mk.toastr({head:{text:"Clipboard copied"},body:'<p>Text successfully copied to clipboard!</p><p class="p-2 bg-white'+(e.length>200?" text-truncate":"")+'"><code class="text-pre">'+e.substring(0,200)+"</code></p>"},"success")}catch(e){mk.toastr({head:{text:"Clipboard copied failed"},body:"<p>Unable to copy text to clipboard!</p><p><code>"+e+"</code></p>"},"danger")}document.body.removeChild(r)}}},mk.init()}));