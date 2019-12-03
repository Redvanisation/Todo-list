!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"*,\nhtml,\nbody {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.header {\n    background-color: orange;\n    height: 100px;\n    box-shadow: 0 1px 2px 2px rgba(0,0,0,.1);\n    margin-bottom: 5rem;\n}\n\n.main-title {\n    color: #fff;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    letter-spacing: 5px;\n    padding: 1rem 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.margin {\n    margin: 2rem;\n}\n\n.new-project {\n    width: 50%;\n    margin: 0 auto;\n}\n\n.input {\n    border: 2px solid orange;\n    border-radius: 5px;\n    padding: .5rem 1rem;\n    margin-bottom: 1rem;\n    outline: none;\n}\n\n.submit-btn {\n    /* position: relative; */\n    background-color: transparent;\n    border: 2px solid orange;\n    color: orange;\n    border-radius: 5px;\n    padding: .5rem 1rem;\n    outline: none;\n    /* z-index: 500; */\n    transition: all .2s;\n}\n\n.submit-btn:hover {\n    color: #fff;\n    background-color: orange;\n}\n\n.projects-container {\n    border-top: 2px solid orange;\n}\n\n.project-title {\n    border-bottom: 2px solid orange;\n    padding: 2rem 0;\n    cursor: pointer;\n    transition: all .3s;\n    text-transform: capitalize;\n}\n\n#task-project-h2{\n    text-transform: capitalize;\n    display: inline-block;\n    margin: 1rem auto;\n}\n\n.project-title:hover {\n    background-color: rgba(255, 165, 0,.1);\n}\n\n.clicked {\n    background-color: rgba(255, 165, 0,1);\n    color: white;\n}\n\n\n.new-task {\n    position: fixed;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    width: 50%;\n    background-color: #fff;\n    border: 2px solid orange;\n    border-radius: 5px;\n    z-index: 9999;\n    text-align: center;\n    padding: 2rem;\n}\n\n.task-title,\n.task-description {\n    width: 90%;\n}\n\n.task-title {\n    margin-top: 2.5rem;\n}\n\n.task-date {\n    width: 90%;\n}\n\n.task-notes {\n    width: 90%;\n}\n\n.tasks-list {\n    position: relative;\n    z-index: 10;\n    border: 1px solid orange;\n    width: 800px;\n    height: 300px;\n    margin: 1rem auto;\n    border-radius: 5px;\n    transition: all .3s;\n}\n\n.tsk-title,\n.tsk-heading {\n    color: orange;\n    text-transform: capitalize;\n    font-weight: bold;\n}\n\n.btn-priority,\n.btn-done {\n    padding: .5rem 1.5rem;\n    border-radius: 5px;\n    outline: none;\n}\n\n.btn-delete {\n    position: relative;\n    background-color: orange;\n    color: white;\n    border: 2px solid #fff;\n    transition: all .2s;\n}\n\n.btn-delete:hover {\n    background-color: rgba(255, 165, 0,.5);\n}\n\n.Low,\n.btn-done {\n    background-color: transparent;\n    border: 2px solid orange;\n    color: orange;\n}\n\n.Normal {\n    background-color: rgba(255, 165, 0,.5);\n    border: 2px solid orange;\n    color: #fff;\n}\n\n.High {\n    background-color: rgba(255, 165, 0,1);\n    color: #fff;\n}\n\n.done {\n    text-decoration: line-through;;\n}\n\n.project-btns-container {\n    display: flex;\n    justify-content: center;\n}\n\n.disabled {\n    pointer-events: none;\n}\n\n.enabled {\n    pointer-events: auto;\n}\n\n.done-done {\n    background-color: rgba(255, 165, 0,.5);\n    color: #555;\n}\n\n.todo-titles{\n    font-weight: bold;\n}\n\n.todo-h3{\n    text-transform: capitalize;\n    letter-spacing: 3px;\n    text-decoration: underline;\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function s(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,m=0;function v(n,e){var t,r,o;if(e.singleton){var i=m++;t=b||(b=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=c(n,e);return s(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],l=o[a.id];l&&(l.refs--,r.push(l))}n&&s(c(n,e),e);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(n,e,t){"use strict";t.r(e);var r=function(n,e){localStorage.setItem(n,JSON.stringify(e))},o=function(n){n.classList.remove("hidden")},i=function(n){n.classList.add("hidden")},a=function(n){return alert(n)};function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(new Date).toLocaleString().substring(0,10),i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal",a=arguments.length>5?arguments[5]:void 0;c(this,n),this.project=e,this.title=t,this.description=r,this.date=o,this.priority=i,this.notes=a},l=document.querySelector("#project-title"),d=document.querySelector("#submit-project"),u=document.querySelector("#delete-project-btn"),p=document.querySelector("#display-projects"),f=document.querySelector("#new-task"),b=document.querySelector("#form-btn-cancel"),m=document.querySelector("#form-btn-submit"),v=document.querySelector("#form-btn-edit"),g=document.querySelector("#new-task-btn"),h=document.querySelector("#task-project-h2"),y=document.querySelector("#task-title"),k=document.querySelector("#task-description"),x=document.querySelector("#task-date"),S=document.querySelector("#task-priority"),j=document.querySelector("#task-notes"),q=document.querySelector("#display-tasks"),L=document.querySelector("#todo-container"),E=document.querySelector("#are-sure"),w=document.querySelector("#btn-yes"),N=document.querySelector("#btn-no"),C=document.querySelector("#project-del-confirm"),M=document.querySelector("#btn-p-yes"),O=document.querySelector("#btn-p-no"),T="",D=[],A="",I=function(){q.innerHTML="";JSON.parse(localStorage.getItem(T)).forEach((function(n){var e,t=document.createElement("div");t.setAttribute("class","tasks-list"),t.setAttribute("id","tasks-list"),t.innerHTML='\n      <div id="done-div"></div>\n      <h3 class="task-title" id="todo-title"><span class="todo-h3"> '.concat(n.title,' </span></h3>\n      <p class="task-description"><span class="todo-titles"> Description:</span> ').concat(n.description,'</p>\n      <p class="task-date"><span class="todo-titles">Date:</span> ').concat(n.date,'</p>\n      <p class="task-priority"><span class="todo-titles">Priority:</span> ').concat(n.priority,'</p>\n      <p class="task-notes"><span class="todo-titles">Notes:</span> ').concat(n.notes,'</p>\n      <button id="btn-edit-todo" class="submit-btn card-btn" data-name="').concat(n.title,'">Edit</button>\n      <button id="btn-delete-todo" class="submit-btn btn-delete" data-delete="').concat(n.title,'">Delete</button>\n      '),q.appendChild(t),t.appendChild(((e=document.createElement("button")).setAttribute("class","submit-btn"),e.addEventListener("click",(function(){return function(n){var e;(e=n.parentNode).classList.toggle("done-done"),e.classList.toggle(".disabled"),e.style.zIndex=999,n.parentNode.childNodes.forEach((function(n){"submit-btn card-btn"!==n.className&&"submit-btn card-btn disabled"!==n.className||n.classList.toggle("disabled"),"task-title"!==n.className&&"task-title done"!==n.className||n.classList.toggle("done")}))}(e)})),e.innerHTML="Done/Undone",e));document.querySelectorAll("#done");document.querySelectorAll("#tasks-list").forEach((function(n){n.querySelector("#btn-priority")})),document.querySelectorAll("#btn-edit-todo").forEach((function(n){n.addEventListener("click",(function(){return e=n.dataset.name,A="",o(f),o(v),i(m),void(A=e);var e}))})),document.querySelectorAll("#btn-delete-todo").forEach((function(n){n.addEventListener("click",(function(){return o(E)}))}))}))},z=function(){var n=Object.keys(localStorage);p.innerHTML="",n.forEach((function(n){var e=document.createElement("h2");e.setAttribute("class","project-title"),e.textContent=n,p.appendChild(e)})),document.querySelectorAll(".project-title").forEach((function(n){n.addEventListener("click",(function(){T=n.textContent,D=JSON.parse(localStorage.getItem(T)),h.textContent="Current Project: ".concat(T),I(),o(g),o(u),o(L)}))}))};d.addEventListener("click",(function(){if(""===l.value)return a("Project title required.");var n,e=new s;e.project=l.value,n=e.project,localStorage.setItem(n,JSON.stringify([])),T=e.project})),d.addEventListener("click",z),b.addEventListener("click",(function(){return i(f)})),m.addEventListener("click",(function(){if(""==y.value)return a("Title of task required.");if(""==k.value)return a("Description of task required.");if(""==x.value)return a("DateDue of task required.");var n=new s(T,y.value,k.value,x.value,S.value,j.value);D.push(n),y.value="",k.value="",x.value="",S.value="Normal",j.value="",r(n.project,D),i(f)})),m.addEventListener("click",I),g.addEventListener("click",(function(){return n=m,e=v,f.classList.remove("hidden"),n.classList.remove("hidden"),void e.classList.add("hidden");var n,e})),v.addEventListener("click",(function(){return""==y.value?a("Title of task required."):""==k.value?a("Description of task required."):""==x.value?a("DateDue of task required."):(D.forEach((function(n){n.title===A&&(n.title=y.value,n.description=k.value,n.date=x.value,n.priority=S.value,n.notes=j.value)})),r(T,D),y.value="",k.value="",x.value="",S.value="Normal",j.value="",i(f),void I())})),w.addEventListener("click",(function(){var n=D,e=0;n.forEach((function(t){""===t.title&&(e=n.indexOf(t))})),n.splice(e,1),r(T,n),i(E),I()})),N.addEventListener("click",(function(){return i(E)})),u.addEventListener("click",(function(){return o(C)})),M.addEventListener("click",(function(){var n;n=T,localStorage.removeItem(n),i(L),i(C),T="",z()})),O.addEventListener("click",(function(){return i(C)}));t(0);z()}]);