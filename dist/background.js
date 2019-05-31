!function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],d=0,h=[];d<i.length;d++)s=i[d],r[s]&&h.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);h.length;)h.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={1:0},a=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([32,0,5]),o()}({32:function(e,t,o){(function(e){o(10);const t=o(33),n=o(3),r=o(5),a=o(2),s=o(11);let i;const l={async init(){this.checkUpdates().then(()=>{console.log("[LibPlus] Update done! Next in 15 min"),l.initIntervals()},e=>{l.onCheckUpdatesFailed(e)})},checkUpdates(){return this.isAuthorized().then(e=>e||(console.log("[LibPlus] Reject check updates because of unauthorized !!!"),Promise.reject("unauthorized"))).catch(e=>{if("unauthorized"===e)return console.log("[LibPlus] Unauthorized - Try auto-logging..."),l.autologin()}).then(e=>(console.log(`[LibPlus] is authorized before fetch updates ? ${e}`),e?l.fetchUpdates():Promise.reject("unauthorized")))},wakeUp(){console.log(`[LibPlus] wake up (${(new Date).toISOString()})`),l.checkUpdates().catch(l.onCheckUpdatesFailed)},initIntervals(){i=setInterval(()=>{l.wakeUp()},9e5)},onCheckUpdatesFailed(e){if("unauthorized"!==e)throw Error(e);console.log("[LibPlus] User is unauthorized - background is snoozed!")},autologin(){const e=["isAutologin","login","pass"];return new Promise((t,o)=>{chrome.storage.local.get(e,e=>{let n=chrome.runtime.lastError;n?o(n):t(e)})}).then(e=>{const{isAutologin:o,login:n,pass:r}=e;return o&&n&&r?t.authorize(window.atob(n),windows.atob(r)):Promise.reject("credentials undefined")}).catch(e=>(console.log("[LibPlus] autologin failed"),!1))},fetchDataPage:()=>s.get("https://synergia.librus.pl/przegladaj_oceny/uczen").then(t=>(t.data.replace(/<head>[.\w\W]*<\/head>/,"").replace(/<script.*\/?>(([.\w\W])*?)<\/script>/gm,"").replace(/<img/,"<div"),e(t.data))),fetchUpdates(){console.log("fetching updates ..."),l.fetchDataPage().then(e=>{const t=n.getData(e);r.init(e);const o=r.parseAll(t.grades);return{grades:o,gpa:a.calcGradePointAverage(o),announcements:t.announcements,events:t.events,messages:t.messages,user:t.user,lastUpdateTime:(new Date).getTime()}}).catch(e=>("unauthorized"===e.message&&l.onUnauthorized(),Promise.reject(e))).then(e=>l.compareVersions(e)).then(e=>{chrome.storage.local.set(e),console.log("[LibPlus] updated data: ",e),chrome.runtime.sendMessage({method:"onDataUpdated",data:{updatedData:e}})})},compareVersions(e){const t=["grades"];return new Promise((e,o)=>{chrome.storage.local.get(t,t=>{let n=chrome.runtime.lastError;n?o(n):e(t)})}).then(t=>{let o=!1;return t.grades&&(o=t.grades&&t.grades.length===e.grades.length||e.announcements||e.messages||e.events),{...e,isAnyChange:o}})},authorize(e){const{login:o,pass:n,autologin:r}=e;return t.authorize(o,n).then(e=>(e&&r&&chrome.storage.local.set({isAutologin:!0,login:window.btoa(o),pass:window.btoa(n)}),chrome.runtime.sendMessage({method:"loginSuccess"}),e),e=>("failed"===e.message?chrome.runtime.sendMessage({method:"loginFailed",data:{errors:e}}):console.error(e),!1)).then(e=>{chrome.storage.local.set({isAuthorized:e})})},isAuthorized:()=>new Promise((e,t)=>{chrome.storage.local.get(["isAuthorized","lastUpdateTime"],o=>{let n=chrome.runtime.lastError;const{isAuthorized:r,lastUpdateTime:a}=o;n?t(n):void 0===r?t("empty"):(console.log(`[LibPlus]  is authorized in storage ? ${r}, last update: ${a}`),e(o.isAuthorized))})}).catch(e=>{if("empty"===e)return console.log("[LibPlus]  storage var isAuthorized is undefined"),t.isAuthorized()}).then(function(e){return console.log(`[LibPlus]  is authorized in authorization service ? ${e}`),chrome.storage.local.set({isAuthorized:e}),e}),onUnauthorized(){console.log("unauthorized called"),chrome.storage.local.set({isAuthorized:!1})}};chrome.runtime.onMessage.addListener(e=>{switch(e.method){case"authorize":l.authorize(e.data);break;case"fetchData":l.fetchUpdates()}return!0}),chrome.runtime.onInstalled.addListener(()=>{l.init()})}).call(this,o(1))},33:function(e,t,o){const n=o(11),r={headers:{"Content-Type":"application/x-www-form-urlencoded"}},a="https://api.librus.pl/OAuth/Authorization?client_id=46&response_type=code&scope=mydata",s="https://api.librus.pl/OAuth/Authorization?client_id=46",i="https://api.librus.pl/OAuth/Authorization/Grant?client_id=46",l="https://synergia.librus.pl/przegladaj_oceny/uczen",u={authorize(e,t){const o=new FormData;return o.append("action","login"),o.append("login",e),o.append("pass",t),n.get(a).then(()=>n.post(s,o,r)).then(e=>{if(loginSuccess="ok"===e.data.status,!loginSuccess)return Promise.reject(Error("failed"))}).then(()=>n.get(i)).then(()=>!0)},isAuthorized:async()=>n.get(l).then(e=>-1!==e.data.indexOf("jesteś zalogowany jako:"))};e.exports=u}});