/*!
* CookieConsent 3.0.0-rc.8
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='button',t=e=>'function'==typeof e,n=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let a=e[o];t[o]=n(a)}return t},o=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},a=(e,a,i)=>{const c=r.t,s=r.o,l={cookie:r.l.i};if(a){const n={modalName:a};return e===s.u?t(c.u)&&c.u(n):e===s.p?t(c.p)&&c.p(n):(n.modal=i,t(c.v)&&c.v(n)),o(e,n)}e===s._?t(c._)&&c._(n(l)):e===s.g?t(c.g)&&c.g(n(l)):(l.changedCategories=r.l.m,l.changedServices=r.l.h,t(c.k)&&c.k(n(l))),o(e,n(l))};class i{constructor(){this.C={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={M:null,S:'',T:{},A:null,i:null,D:[],H:!1,V:null,I:null,F:null,N:'',j:!0,B:!1,P:!1,R:!1,O:!1,G:!1,J:!1,L:[],U:!1,q:!0,m:[],K:!1,W:'',X:!1,Y:[],Z:[],$:[],ee:[],te:!1,ne:!1,oe:!1,ae:[],ie:[],re:[],ce:{},se:{},le:{},h:{},de:{},fe:[],ue:[]},this.pe={ve:{},_e:{}},this.t={},this.o={_:'cc:onFirstConsent',g:'cc:onConsent',k:'cc:onChange',u:'cc:onModalShow',p:'cc:onModalHide',v:'cc:onModalReady'}}}const r=new i,c=(e,t)=>e.indexOf(t),s=(e,t)=>-1!==c(e,t),l=e=>Array.isArray(e),d=e=>!!e&&'object'==typeof e&&!l(e),f=e=>Object.keys(e),u=e=>Array.from(new Set(e)),p=()=>document.activeElement,v=e=>e.preventDefault(),_=(e,t)=>e.querySelectorAll(t),g=()=>{let e={};return r.l.Y.forEach((t=>{e[t]=S(r.l.se[t]||[],f(r.l.ce[t])||[])})),e},m=t=>{const n=document.createElement(t);return t===e&&b(n,'type',t),n},b=(e,t,n)=>{e.setAttribute(t,n)},h=(e,t)=>e.appendChild(t),y=(e,t,n,o)=>{e.addEventListener(t,n),o&&r.l.D.push({ge:e,me:t,be:n})},w=(e,t)=>{e.classList.add(t)},k=(e,t)=>{w(e,'cm__'+t)},C=(e,t)=>{w(e,'pm__'+t)},x=(e,t)=>{e.classList.remove(t)},M=()=>{const e=r.C.cookie.expiresAfterDays;return t(e)?e(r.l.W):e},S=(e,t)=>e.filter((e=>!s(t,e))).concat(t.filter((t=>!s(e,t)))),T=()=>{r.l.W=(()=>{let e='custom',t=D().accepted.length;return t===r.l.Y.length?e='all':t===r.l.$.length&&(e='necessary'),e})()},A=(e,t,n,o)=>{const a='accept-',i=u('show-preferencesModal'),c=u('show-consentModal'),s=u(a+'all'),l=u(a+'necessary'),d=u(a+'custom'),f=r.C.lazyHtmlGeneration;function u(t){return _(e||document,'[data-cc="'+t+'"]')}function p(e,n){v(e),t.acceptCategory(n),t.hidePreferences(),t.hide()}i.forEach((e=>{b(e,'aria-haspopup','dialog'),y(e,'click',(e=>{v(e),t.showPreferences()})),f&&y(e,'mouseenter',(e=>{v(e),r.l.O||n(t,o)}),!0)})),c.forEach((e=>{b(e,'aria-haspopup','dialog'),y(e,'click',(e=>{v(e),t.show(!0)}),!0)})),s.forEach((e=>{y(e,'click',(e=>{p(e,'all')}),!0)})),d.forEach((e=>{y(e,'click',(e=>{p(e)}),!0)})),l.forEach((e=>{y(e,'click',(e=>{p(e,[])}),!0)}))},D=()=>{let e=r.l.Z;return{accepted:e,rejected:r.l.Y.filter((t=>!s(e,t)))}},E=()=>{const t=r.l,n=r.pe,o=['[href]',e,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),a=(e,t)=>{const n=_(e,o);t[0]=n[0],t[1]=n[n.length-1]};t.B&&a(n.he,t.ae),t.O&&a(n.ye,t.ie)},H=e=>{const n=r.l,o=n.se;if(n.Y.forEach((e=>{(n.h[e]||n.se[e]||[]).forEach((o=>{const a=n.ce[e][o];a&&(!a.enabled&&s(n.se[e],o)&&t(a.onAccept)?(a.enabled=!0,a.onAccept()):a.enabled&&!s(n.se[e],o)&&t(a.onReject)&&(a.enabled=!1,a.onReject()))}))})),!r.C.manageScriptTags)return;const a=n.fe;let i=e||n.i.categories||[];const c=(e,t)=>{if(t<e.length){var a=e[t],r=n.ue[t],l=r.we,d=r.ke,f=s(i,l),u=!!d&&s(o[l],d);if(!r.Ce){let o=!d&&!r.xe&&f,i=d&&!r.xe&&u,p=!d&&r.xe&&!f&&s(n.m,l),v=d&&r.xe&&!u&&s(n.h[l]||[],d);if(o||p||i||v){r.Ce=!0,a.removeAttribute('type'),a.removeAttribute('data-category');let n=a.getAttribute('data-src');n&&a.removeAttribute('data-src');const o=m('script');if(o.textContent=a.innerHTML,[...a.attributes].forEach((e=>{let t=e.nodeName;b(o,t,a[t]||a.getAttribute(t))})),n?o.src=n:n=a.src,n&&(o.onload=o.onerror=()=>{c(e,++t)}),a.replaceWith(o),n)return}}c(e,++t)}};c(a,0)},V=e=>{const t=r.l.M.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,i)=>{var c=n&&n.layout,l=n&&n.position,d=n&&!0===n.flipButtons,f=n&&!1===n.equalWeightButtons,u=c&&c.split(' ')||[],p=l&&l.split(' ')||[],v=u[0],_=u[1],g=p[0],m='pm--'===o?p[0]:p[1],b=v,h=t[v];h||(h=t[a],b=a);var y=s(h.Me,_)&&_,k=s(h.Se,g)?g:h.Te,C=s(h.Ae,m)?m:h.De;e.className=i,w(e,o+b),y&&w(e,o+y),k&&w(e,o+k),C&&w(e,o+C),d&&w(e,o+'flip');const M='btn--secondary',S=i+'__';if('cm'===i){const{Ee:e,He:t}=r.pe;e&&x(e,S+M),t&&x(t,S+M),f&&(e&&w(e,S+M),t&&w(t,S+M))}else{const{Ve:e}=r.pe;e&&x(e,S+M),f&&e&&w(e,S+M)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Me:['wide','inline'],Se:e,Ae:t,Te:'bottom',De:'right'},cloud:{Me:['inline'],Se:e,Ae:t,Te:'bottom',De:'center'},bar:{Me:['inline'],Se:e.slice(1),Ae:[],Te:'bottom',De:''}};a(r.pe.he,o,n,'cm--','box','cm')}if(1===e){const e={box:{Me:[],Se:[],Ae:[],Te:'',De:''},bar:{Me:['wide'],Se:[],Ae:['left','right'],Te:'',De:'left'}};a(r.pe.ye,e,o,'pm--','box','pm')}},I=(t,n)=>{const o=r.l,i=r.pe,c=t.hidePreferences,s=e=>{t.acceptCategory(e),c(),t.hide()},l=o.A&&o.A.preferencesModal;if(!l)return;var d=l.title,u=l.closeIconLabel,p=l.acceptAllBtn,v=l.acceptNecessaryBtn,_=l.savePreferencesBtn,g=l.sections;if(i.Ie)i.Fe=m('div'),C(i.Fe,'body');else{i.Ie=m('div'),w(i.Ie,'pm-wrapper'),i.ye=m('div'),i.ye.style.visibility='hidden',w(i.ye,'pm'),b(i.ye,'role','dialog'),b(i.ye,'aria-hidden',!0),b(i.ye,'aria-modal',!0),b(i.ye,'aria-labelledby','pm__title'),y(i.Ne,'keydown',(e=>{27===e.keyCode&&c()}),!0),i.je=m('div'),C(i.je,'header'),i.Be=m('div'),C(i.Be,'title'),i.Be.id='pm__title',b(i.Be,'role','heading'),b(i.Be,'aria-level','2'),i.Pe=m(e),C(i.Pe,'close-btn'),b(i.Pe,'aria-label',l.closeIconLabel||''),y(i.Pe,'click',c),i.Re=m('div'),C(i.Re,'body'),i.Oe=m('div'),C(i.Oe,'footer');var k=m('div');w(k,'btns');var M=m('div'),S=m('div');C(M,'btn-group'),C(S,'btn-group'),h(i.Oe,S),h(i.Oe,M),h(i.je,i.Be),h(i.je,i.Pe),h(i.ye,i.je),h(i.ye,i.Re),h(i.ye,i.Oe),h(i.Ie,i.ye)}let T;d&&(i.Be.innerHTML=d,u&&b(i.Pe,'aria-label',u)),g&&g.forEach((t=>{var n=t.title,a=t.description,r=t.linkedCategory,c=r&&o.X[r],s=t.cookieTable,d=s&&s.body,u=d&&d.length>0,p=!!c,v=p&&o.ce[r]||!1,_=v&&f(v)||[],g=p&&(!!a||!!u||f(v).length>0),k=m('div');if(C(k,'section'),g||a){var M=m('div');C(M,'section-desc-wrapper')}let S=_.length;if(g&&S>0){var A=m('div');C(A,'section-services'),_.forEach((e=>{var t=v[e].label||e,n=m('div'),o=m('div'),a=m('div'),i=m('div');C(n,'service'),C(i,'service-title'),C(o,'service-header'),C(a,'service-icon');var s=F(t,e,c,!0,r);i.innerHTML=t,h(o,a),h(o,i),h(n,o),h(n,s),h(A,n)})),h(M,A)}if(n){var D=m('div'),E=m(p?e:'div');if(C(D,'section-title-wrapper'),C(E,'section-title'),E.innerHTML=n,h(D,E),p){var H=m('span');C(H,'section-arrow'),h(D,H),k.className+='--toggle';var V=F(n,r,c);let e=l.serviceCounterLabel;if(S>0&&'string'==typeof e){let t=m('span');C(t,'badge'),C(t,'service-counter'),b(t,'aria-hidden',!0),b(t,'data-servicecounter',S),e&&(e=e.split('|'),e=e.length>1&&S>1?e[1]:e[0],b(t,'data-counterlabel',e)),t.innerHTML=S+(e?' '+e:''),h(E,t)}if(g){C(k,'section--expandable');var I=r+'-desc';b(E,'aria-expanded',!1),b(E,'aria-controls',I)}h(D,V)}else b(E,'role','heading'),b(E,'aria-level','3');h(k,D)}if(a){var N=m('div');C(N,'section-desc'),N.innerHTML=a,h(M,N)}if(g&&(b(M,'aria-hidden','true'),M.id=I,((e,t,n)=>{y(E,'click',(()=>{t.classList.contains('is-expanded')?(x(t,'is-expanded'),b(n,'aria-expanded','false'),b(e,'aria-hidden','true')):(w(t,'is-expanded'),b(n,'aria-expanded','true'),b(e,'aria-hidden','false'))}))})(M,k,E),u)){var j=m('table'),B=m('thead'),P=m('tbody');C(j,'section-table'),C(B,'table-head'),C(P,'table-body');var R=s.headers,O=f(R),G=i.Ge.createDocumentFragment(),J=m('tr');b(J,'role','row');for(var L=0;L<O.length;L++){var U=R[O[L]],z=m('th');z.id='cc__row-'+U,b(z,'role','columnheader'),b(z,'scope','col'),C(z,'table-th'),z.innerHTML=U,h(G,z)}h(J,G),h(B,J);var q=i.Ge.createDocumentFragment();for(L=0;L<d.length;L++){var K=d[L],Q=m('tr');b(Q,'role','row'),C(Q,'table-tr');for(var W=0;W<O.length;W++){var X=O[W],Y=R[X],Z=K[X],$=m('td'),ee=m('div');C($,'table-td'),b($,'data-column',Y),b($,'headers','cc__row-'+Y),ee.insertAdjacentHTML('beforeend',Z),h($,ee),h(Q,$)}h(q,Q)}h(P,q),h(j,B),h(j,P),h(M,j)}(g||a)&&h(k,M);const te=i.Fe||i.Re;p?(T||(T=m('div'),C(T,'section-toggles')),T.appendChild(k)):T=null,h(te,T||k)})),(p||v)&&(v&&(i.Ve||(i.Ve=m(e),C(i.Ve,'btn'),b(i.Ve,'data-role','necessary'),h(M,i.Ve),y(i.Ve,'click',(()=>s([])))),i.Ve.innerHTML=v),p&&(i.Je||(i.Je=m(e),C(i.Je,'btn'),b(i.Je,'data-role','all'),h(M,i.Je),y(i.Je,'click',(()=>s('all')))),i.Je.innerHTML=p)),_&&(i.Le||(i.Le=m(e),C(i.Le,'btn'),C(i.Le,'btn--secondary'),b(i.Le,'data-role','save'),h(S,i.Le),y(i.Le,'click',(()=>s()))),i.Le.innerHTML=_),i.Fe&&(i.ye.replaceChild(i.Fe,i.Re),i.Re=i.Fe),V(1),i.Re.querySelectorAll('[data-hideModal]').forEach((e=>{y(e,'click',c)})),o.O||(o.O=!0,a(r.o.v,'preferencesModal',i.ye),E(),n(t),h(i.Ue,i.Ie),setTimeout((()=>w(i.Ie,'cc--anim')),100))};function F(e,t,n,o,a){const i=r.l,c=r.pe;var l=m('label'),d=m('input'),f=m('span'),u=m('span'),p=m('span'),v=m('span');if(d.type='checkbox',w(l,'section__toggle-wrapper'),w(d,'section__toggle'),w(p,'toggle__icon-on'),w(v,'toggle__icon-off'),w(f,'toggle__icon'),w(u,'toggle__label'),b(f,'aria-hidden','true'),o?(w(l,'toggle-service'),w(d,'toggle-service'),b(d,'data-category',a),c._e[a][t]=d):c.ve[t]=d,o?(e=>{y(d,'change',(()=>{var t=c._e[e],n=c.ve[e];for(var o in i.le[e]=[],t){const n=t[o];n.checked&&i.le[e].push(n.value)}i.le[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{y(d,'click',(()=>{var t=c._e[e];if(i.le[e]=[],d.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),h(f,v),h(f,p),i.j)(n.enabled||n.readOnly)&&(d.checked=!0);else if(o){var _=i.se[a];(n.readOnly||s(_,t))&&(d.checked=!0)}else s(i.Z,t)&&(d.checked=!0);return n.readOnly&&(d.disabled=!0),h(l,d),h(l,f),h(l,u),l}const N=(t,n)=>{const o=r.l,i=r.pe,c=o.A&&o.A.consentModal;if(!c)return;const s=c.acceptAllBtn,l=c.acceptNecessaryBtn,d=c.showPreferencesBtn,f=c.closeIconLabel,u=c.footer,p=c.label,v=c.title,_=e=>{t.hide(),t.acceptCategory(e)};if(!i.ze){i.ze=m('div'),i.he=m('div'),i.qe=m('div'),i.Ke=m('div'),i.Qe=m('div'),w(i.ze,'cm-wrapper'),w(i.he,'cm'),k(i.qe,'body'),k(i.Ke,'texts'),k(i.Qe,'btns'),b(i.he,'role','dialog'),b(i.he,'aria-modal','true'),b(i.he,'aria-hidden','false'),b(i.he,'aria-describedby','cm__desc'),p?b(i.he,'aria-label',p):v&&b(i.he,'aria-labelledby','cm__title'),i.he.style.visibility='hidden';const t='box',n=o.M.guiOptions,a=n&&n.consentModal,r=(a&&a.layout||t).split(' ')[0]===t;v&&f&&r&&(i.He||(i.He=m(e),k(i.He,'btn'),k(i.He,'btn--close'),y(i.He,'click',(()=>{_([])})),h(i.qe,i.He)),b(i.He,'aria-label',f)),h(i.qe,i.Ke),(s||l||d)&&h(i.qe,i.Qe),h(i.he,i.qe),h(i.ze,i.he)}v&&(i.We||(i.We=m('div'),i.We.className=i.We.id='cm__title',b(i.We,'role','heading'),b(i.We,'aria-level','2'),h(i.Ke,i.We)),i.We.innerHTML=v);var g=c.description;if(g&&(o.U&&(g=g.replace('{{revisionMessage}}',o.q?'':c.revisionMessage||'')),i.Xe||(i.Xe=m('div'),i.Xe.className=i.Xe.id='cm__desc',h(i.Ke,i.Xe)),i.Xe.innerHTML=g),s&&(i.Ye||(i.Ye=m(e),k(i.Ye,'btn'),b(i.Ye,'data-role','all'),y(i.Ye,'click',(()=>{_('all')}))),i.Ye.innerHTML=s),l&&(i.Ee||(i.Ee=m(e),k(i.Ee,'btn'),b(i.Ee,'data-role','necessary'),y(i.Ee,'click',(()=>{_([])}))),i.Ee.innerHTML=l),d&&(i.Ze||(i.Ze=m(e),k(i.Ze,'btn'),k(i.Ze,'btn--secondary'),b(i.Ze,'data-role','show'),y(i.Ze,'mouseenter',(()=>{o.O||I(t,n)})),y(i.Ze,'click',t.showPreferences)),i.Ze.innerHTML=d),i.$e||(i.$e=m('div'),k(i.$e,'btn-group'),l&&h(i.$e,i.Ee),s&&h(i.$e,i.Ye),(s||l)&&h(i.qe,i.$e),h(i.Qe,i.$e)),i.Ze&&!i.et&&(i.et=m('div'),i.Ee&&i.Ye?(k(i.et,'btn-group'),h(i.et,i.Ze),h(i.Qe,i.et)):(h(i.$e,i.Ze),k(i.$e,'btn-group--uneven'))),u){if(!i.tt){var C=m('div'),x=m('div');i.tt=m('div'),k(C,'footer'),k(x,'links'),k(i.tt,'link-group'),h(x,i.tt),h(C,x),h(i.he,C)}i.tt.innerHTML=u}V(0),o.B||(o.B=!0,a(r.o.v,'consentModal',i.he),E(),n(t),h(i.Ue,i.ze),setTimeout((()=>w(i.ze,'cc--anim')),100)),A(i.qe,t,I,n)},j=e=>!!e&&s(f(r.l.T),e),B=()=>{const e=r.l;return e.S||e.M.language.default},P=e=>{e&&(r.l.S=e)},R=async e=>{const t=r.l;let n;n=e&&j(e)?e:B();let o=t.T[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.A=o,P(n),!0},O=()=>{let e=r.l.M.language.rtl,t=r.pe.Ue;e&&t&&(l(e)||(e=[e]),s(e,r.l.S)?w(t,'cc--rtl'):x(t,'cc--rtl'))},G=e=>{const t=r.pe;if(!t.Ue){t.Ue=m('div'),t.Ue.id='cc-main',t.Ue.style.position='fixed',t.Ue.style.zIndex='2147483647',O();let n=r.l.M.root;n&&'string'==typeof n&&(n=document.querySelector(n)),h(n||t.Ge.body,t.Ue),(e=>{const t=r.pe;y(t.Ue,'click',(n=>{const o=r.l;o.J?t.ye.contains(n.target)?o.G=!0:(e.hidePreferences(0),o.G=!1):o.P&&t.he.contains(n.target)&&(o.G=!0)}))})(e)}},J=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:i,sameSite:c}=r.C.cookie,l=encodeURIComponent(JSON.stringify(r.l.i)),d=e?(()=>{const e=r.l.F,t=e?new Date-e:0;return 864e5*M()-t})():864e5*M(),f=new Date;f.setTime(f.getTime()+d);let u=o+'='+l+(0!==d?'; expires='+f.toUTCString():'')+'; Path='+a+'; SameSite='+c;s(t,'.')&&(u+='; Domain='+i),'https:'===n&&(u+='; Secure'),document.cookie=u,r.l.i},L=(e,t,n)=>{const o=n||r.C.cookie.domain,a=t||r.C.cookie.path,i='www.'===o.slice(0,4),c=i&&o.substring(4),s=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{s(e),s(e,o),i&&s(e,c)}))},U=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(z(e||r.C.cookie.name,!0)),z=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},q=e=>{const t=document.cookie.split(/;\s*/),n=[];return t.forEach((t=>{let o=t.split('=')[0];if(e)try{e.test(o)&&n.push(o)}catch(e){}else n.push(o)})),n},K=e=>{e.dispatchEvent(new Event('change'))},Q=(e,t=[])=>{const o=r.l;let i=!1;var l=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var d=0;d<e.length;d++)s(o.Y,e[d])&&l.push(e[d]);else'string'==typeof e&&('all'===e?l=o.Y.slice():s(o.Y,e)&&l.push(e));else l=(()=>{let e=r.pe.ve,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else o.j||(t=o.i.categories);for(let e in o.le)o.le[e].length>0&&(s(t,e)||t.push(e));return t})(),i=!0;if(t.length>=1)for(d=0;d<t.length;d++)l=l.filter((e=>e!==t[d]));for(d=0;d<o.$.length;d++)s(l,o.$[d])||l.push(o.$[d]);o.Z=l,T(),i||(o.le={}),o.de=n(o.se),o.Y.forEach((e=>{const t=o.ce[e],n=f(t),a=o.se;0!==n.length&&(a[e]=[],s(o.$,e)?n.forEach((t=>{a[e].push(t)})):'all'===o.W?i&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):n.forEach((t=>{a[e].push(t)})):'necessary'===o.W?a[e]=[]:i&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):s(o.Z,e)&&f(t).forEach((t=>a[e].push(t))),a[e]=u(a[e]))})),(()=>{const e=r.l;'opt-out'===r.C.mode&&e.j?e.m=S(e.ee,e.Z):e.m=S(e.Z,e.i.categories||[]);let t=e.m.length>0,o=!1;e.Y.forEach((t=>{e.h[t]=S(e.se[t],e.de[t]||[]),e.h[t].length>0&&(o=!0)}));var i=r.pe.ve;for(var l in i)s(e.Z,l)?i[l].checked=!0:i[l].checked=!1;e.Y.forEach((t=>{var n=r.pe._e[t],o=e.se[t];for(var a in n){const e=n[a];s(o,a)?e.checked=!0:e.checked=!1}})),e.I||(e.I=new Date),e.N||(e.N=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:n(e.Z),revision:r.C.revision,data:e.V,consentTimestamp:e.I.toISOString(),consentId:e.N,services:n(e.se)};var d=!1;(e.j||t||o)&&(e.j&&(e.j=!1,d=!0),T(),e.F?e.F=new Date:e.F=e.I,e.i.lastConsentTimestamp=e.F.toISOString(),J(),r.C.autoClearCookies&&(d||!e.j&&t)&&(e=>{const t=r.l,n=q();t.K=!1;let o=e?t.Y:t.m;o=o.filter((e=>{let n=t.X[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.X[o].autoClear,i=a&&a.cookies||[],r=s(t.m,o),l=!s(t.Z,o),d=r&&l;(e&&l||!e&&d)&&(!0===a.reloadPage&&d&&(t.K=!0),i.forEach((e=>{let t=[];const o=e.name,a=e.domain,i=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=c(n,o);e>-1&&t.push(n[e])}t.length>0&&L(t,i,a)})))}))})(d),H()),d&&(a(r.o._),a(r.o.g),'opt-in'===r.C.mode)||((t||o)&&a(r.o.k),e.K&&window.location.reload())})()},W=e=>{let t;return t=r.l.j&&'opt-in'!==r.C.mode?r.l.ee:D().accepted||[],s(t,e)},X=(e,t)=>{const n=r.l;if(!e||!t||'string'!=typeof t||!s(n.Y,t))return!1;const o=r.pe._e[t]||{},a=f(n.ce[t]);if(n.le[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,K(o[e]);n.le[t]=[...a]}else{for(let t in o)o[t].checked=e===t,K(o[t]);s(a,e)&&n.le[t].push(e)}else if(l(e)){for(let t in o)s(e,t)?o[t].checked=!0:o[t].checked=!1,K(o[t]);a.forEach((o=>{s(e,o)&&n.le[t].push(o)}))}Q()},Y=(e,t)=>s(r.l.se[t]||[],e),Z=e=>''!==z(e,!0),$=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=z(e);''!==t&&o.push(t)}else o=o.concat(q(e))};if(l(e))for(var i=0;i<e.length;i++)a(e[i]);else a(e);L(o,t,n)};let ee;const te=e=>{clearTimeout(ee),e?w(r.pe.Ne,'disable--interaction'):ee=setTimeout((()=>{x(r.pe.Ne,'disable--interaction')}),500)},ne=e=>{const t=r.pe,n=r.l;e&&!n.B&&N(re,G),n.B&&(n.P=!0,n.H&&te(!0),w(t.Ne,'show--consent'),b(t.he,'aria-hidden','false'),setTimeout((()=>{n.ne=p(),n.L=n.ae}),200),a(r.o.u,'consentModal'))},oe=()=>{const e=r.pe,t=r.l;t.B&&(t.P=!1,t.H&&te(),x(e.Ne,'show--consent'),b(e.he,'aria-hidden','true'),setTimeout((()=>{t.ne.focus(),t.L=[]}),200),a(r.o.p,'consentModal'))},ae=()=>{const e=r.l;e.O&&e.R||(e.O||I(re,G),w(r.pe.Ne,'show--preferences'),b(r.pe.ye,'aria-hidden','false'),e.R=!0,setTimeout((()=>{e.J=!0}),1),setTimeout((()=>{e.P?e.oe=p():e.ne=p(),0!==e.ie.length&&(e.ie[0].focus(),e.L=e.ie)}),200),a(r.o.u,'preferencesModal'))},ie=()=>{const e=r.l;e.R&&(x(r.pe.Ne,'show--preferences'),b(r.pe.ye,'aria-hidden','true'),e.R=!1,setTimeout((()=>{e.J=!1}),1),e.P?(e.oe&&e.oe.focus(),e.L=e.ae):(e.ne&&e.ne.focus(),e.L=[]),e.G=!1,a(r.o.p,'preferencesModal'))};var re={show:ne,hide:oe,showPreferences:ae,hidePreferences:ie,acceptCategory:Q};const ce=async(e,t)=>!(!j(e)||e===B()&&!0!==t||!await R(e)||(P(e),r.l.B&&N(re,G),r.l.O&&I(re,G),O(),0)),se=()=>{const e=!r.l.j;var t=e&&D();return{acceptType:r.l.W,acceptedCategories:e?t.accepted:[],rejectedCategories:e?t.rejected:[],acceptedServices:e?r.l.se:{},rejectedServices:e?g():{}}},le=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise((o=>{if(n)return o(!0);n=m('script'),l(t)&&t.forEach((e=>{b(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),o(!1)},n.src=e,h(document.head,n)}))},de=e=>{let t,n=e.value,o=e.mode,a=!1;const i=r.l;if('update'===o){i.V=fe('data'),t=fe('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var c in!t&&(t={}),n)t[c]!==n[c]&&(t[c]=n[c],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(i.V=t,i.i.data=t,J(!0)),a},fe=(e,t)=>{const n=U(t);return e?n[e]:n},ue=e=>{const t=r.C,n=r.l.M;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},pe=()=>!r.l.j,ve=async e=>{const t=r.l,n=r.C,o=window;if(!o._ccRun){if(o._ccRun=!0,(e=>{!function(){const e=document;r.pe.Ge=e,r.pe.Ne=e.documentElement,r.C.cookie.domain=window.location.hostname}();const t=r.C,n=r.l,o=t.cookie,a=r.t,i=e.cookie,c=e.categories,l=f(c)||[],u=navigator;n.M=e,n.T=e.language.translations,n.X=c,n.Y=l,n.H=!!e.disablePageInteraction,a._=e.onFirstConsent,a.g=e.onConsent,a.k=e.onChange,a.p=e.onModalHide,a.u=e.onModalShow,a.v=e.onModalReady;const{mode:p,autoShow:v,autoClearCookies:g,revision:m,manageScriptTags:b,hideFromBots:h,lazyHtmlGeneration:y}=e;'opt-out'===p&&(t.mode=p),'boolean'==typeof v&&(t.autoShow=v),'boolean'==typeof g&&(t.autoClearCookies=g),'boolean'==typeof b&&(t.manageScriptTags=b),'number'==typeof m&&m>=0&&(t.revision=m,n.U=!0),'boolean'==typeof y&&(t.lazyHtmlGeneration=y),!1===h&&(t.hideFromBots=!1),!0===t.hideFromBots&&u&&(n.te=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),d(i)&&(t.cookie={...o,...i}),t.autoClearCookies,n.U,t.manageScriptTags,function(e){const t=r.l;e.forEach((e=>{const n=t.X[e],o=n.services||{},a=o&&d(o)&&f(o)||[];t.ce[e]={},t.se[e]=[],n.readOnly&&(t.$.push(e),t.se[e]=f(o)),r.pe._e[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ce[e][n]=a}))}))}(l),(()=>{if(!r.C.manageScriptTags)return;const e=r.l;e.fe=_(r.pe.Ge,'script[data-category]'),e.ue=[],e.fe.forEach((t=>{let n=t.getAttribute('data-category'),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),s(e.Y,n)&&(e.ue.push({Ce:!1,xe:a,we:n,ke:o}),o)){const t=e.ce[n];t[o]||(t[o]={enabled:!1})}}))})(),P((()=>{const e=r.l.M.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),j(t))return t}return B()})())})(e),t.te)return;const c=U(),g=c.categories,m=l(g);t.i=c,t.N=c.consentId;const b=!!t.N&&'string'==typeof t.N;t.I=c.consentTimestamp,t.I&&(t.I=new Date(t.I)),t.F=c.lastConsentTimestamp,t.F&&(t.F=new Date(t.F));const h=c.data;if(t.V=void 0!==h?h:null,t.U&&b&&c.revision!==n.revision&&(t.q=!1),t.j=!(b&&t.q&&t.I&&t.F&&m),t.j,t.j?'opt-out'===n.mode&&(()=>{const e=r.l;e.Y.forEach((t=>{if(e.X[t].enabled){e.ee.push(t);const o=e.ce[t]||{};for(var n in o)e.se[t].push(n)}}))})():(t.Z=u([...t.$,...c.categories]),t.se={...t.se,...c.services},T()),!await R())return;i=re,r.l.j&&N(i,G),r.C.lazyHtmlGeneration||I(i,G),A(null,i,I,G),n.autoShow&&t.j&&ne(!0),(()=>{const e=r.pe;var t=!1,n=!1;y(e.Ne,'keydown',(e=>{if('Tab'!==e.key)return;const o=r.l.L;if(o.length>0){const a=p();e.shiftKey?a===o[0]&&(o[1].focus(),v(e)):a===o[1]&&(o[0].focus(),v(e)),n||r.l.G||(n=!0,!t&&v(e),e.shiftKey?o[1].focus():o[0].focus())}!n&&(t=!0)}),!0)})(),t.j?'opt-out'===n.mode&&(n.mode,t.ee,H(t.ee)):(H(),a(r.o.g))}var i},_e=e=>{const t=r.pe,n=r.C.cookie;!0===e&&$(n.name,n.path,n.domain),r.l.D.forEach((e=>{e.ge.removeEventListener(e.me,e.be)})),t.Ue&&t.Ue.remove(),t.Ne&&(x(t.Ne,'disable--interaction'),x(t.Ne,'show--preferences'),x(t.Ne,'show--consent'));const o=new i;r.l=o.l,r.pe=o.pe,r.C=o.C,r.t=o.t,r.o=o.o,window._ccRun=!1};export{Q as acceptCategory,X as acceptService,W as acceptedCategory,Y as acceptedService,$ as eraseCookies,ue as getConfig,fe as getCookie,se as getUserPreferences,oe as hide,ie as hidePreferences,le as loadScript,_e as reset,ve as run,de as setCookieData,ce as setLanguage,ne as show,ae as showPreferences,pe as validConsent,Z as validCookie};
