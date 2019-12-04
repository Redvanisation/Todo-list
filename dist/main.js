!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var r=e(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};e(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"*,\nhtml,\nbody {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.header {\n    background-color: orange;\n    height: 150px;\n    box-shadow: 0 1px 2px 2px rgba(0,0,0,.1);\n    margin-bottom: 5rem;\n}\n\n.main-title {\n    color: #fff;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    letter-spacing: 5px;\n    padding: 1rem 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.margin {\n    margin: 2rem;\n}\n\n.new-project {\n    width: 80%;\n    margin: 0 auto;\n\n}\n\n.input {\n    border: 2px solid orange;\n    border-radius: 5px;\n    padding: .5rem 1rem;\n    margin-bottom: 1rem;\n    outline: none;\n}\n\n.submit-btn {\n    background-color: transparent;\n    border: 2px solid orange;\n    color: orange;\n    border-radius: 5px;\n    margin: 0 auto;\n    margin-bottom: 2rem;\n    padding: .5rem 1rem;\n    outline: none;\n    transition: all .2s;\n}\n\n.submit-btn:hover {\n    color: #fff;\n    background-color: orange;\n}\n\n.projects-container {\n    border-top: 2px solid orange;\n}\n\n.project-title {\n    border-bottom: 2px solid orange;\n    padding: 2rem 0;\n    cursor: pointer;\n    transition: all .3s;\n    text-transform: capitalize;\n}\n\n#task-project-h2{\n    text-transform: capitalize;\n    display: inline-block;\n    margin: 1rem auto;\n}\n\n.project-title:hover {\n    background-color: rgba(255, 165, 0,.1);\n}\n\n.clicked {\n    background-color: rgba(255, 165, 0,1);\n    color: white;\n}\n\n\n.new-task {\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    width: 60%;\n    background-color: #fff;\n    border: 2px solid orange;\n    border-radius: 5px;\n    z-index: 9999;\n    text-align: center;\n    padding: 2rem;\n}\n\n.task-title,\n.task-description {\n    width: 90%;\n}\n\n.task-title {\n    margin-top: 1.5rem;\n}\n\n.task-date {\n    width: 90%;\n}\n\n.task-notes {\n    width: 90%;\n}\n\n.tasks-list {\n    position: relative;\n    z-index: 10;\n    border: 1px solid orange;\n    margin: 1rem auto;\n    border-radius: 5px;\n    transition: all .3s;\n}\n\n.tsk-title,\n.tsk-heading {\n    color: orange;\n    text-transform: capitalize;\n    font-weight: bold;\n}\n\n.btn-priority,\n.btn-done {\n    padding: .5rem 1.5rem;\n    border-radius: 5px;\n    outline: none;\n}\n\n.btn-delete {\n    position: relative;\n    background-color: orange;\n    color: white;\n    border: 2px solid #fff;\n    transition: all .2s;\n}\n\n.btn-delete:hover {\n    background-color: rgba(255, 165, 0,.5);\n}\n\n.Low,\n.btn-done {\n    background-color: transparent;\n    border: 2px solid orange;\n    color: orange;\n}\n\n.Normal {\n    background-color: rgba(255, 165, 0,.5);\n    border: 2px solid orange;\n    color: #fff;\n}\n\n.High {\n    background-color: rgba(255, 165, 0,1);\n    color: #fff;\n}\n\n.done {\n    text-decoration: line-through;;\n}\n\n.disabled {\n    pointer-events: none;\n}\n\n.enabled {\n    pointer-events: auto;\n}\n\n.done-done {\n    background-color: rgba(255, 165, 0,.5);\n    color: #555;\n}\n\n.todo-titles{\n    font-weight: bold;\n}\n\n.todo-h3{\n    text-transform: capitalize;\n    letter-spacing: 3px;\n    text-decoration: underline;\n}\n\n.todo-details {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n\n@media only screen and (max-width: 770px) {\n    .new-project {\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .new-task {\n        position: absolute;\n        top: 75%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n        width: 90%;\n    }\n\n}\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),t.push(c))}},t}},function(n,t,e){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function c(n,t){for(var e=[],r={},o=0;o<n.length;o++){var a=n[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function s(n,t){for(var e=0;e<n.length;e++){var r=n[e],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(v(r.parts[i],t))}else{for(var c=[];i<r.parts.length;i++)c.push(v(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var r=e.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(e){t.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(t);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,u=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function f(n,t,e){var r=e.css,o=e.media,a=e.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,m=0;function v(n,t){var e,r,o;if(t.singleton){var a=m++;e=b||(b=l(t)),r=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=l(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=c(n,t);return s(e,t),function(n){for(var r=[],a=0;a<e.length;a++){var i=e[a],l=o[i.id];l&&(l.refs--,r.push(l))}n&&s(c(n,t),t);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(n,t,e){"use strict";e.r(t);var r=function(n,t){localStorage.setItem(n,JSON.stringify(t))},o=function(n){n.classList.remove("hidden")},a=function(n){n.classList.add("hidden")},i=function(n){return alert(n)};function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function n(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(new Date).toLocaleString().substring(0,10),a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal",i=arguments.length>5?arguments[5]:void 0;c(this,n),this.project=t,this.title=e,this.description=r,this.date=o,this.priority=a,this.notes=i},l=document.querySelector("#project-title"),d=document.querySelector("#submit-project"),u=document.querySelector("#delete-project-btn"),p=document.querySelector("#display-projects"),f=document.querySelector("#new-task"),b=document.querySelector("#form-btn-cancel"),m=document.querySelector("#form-btn-submit"),v=document.querySelector("#form-btn-edit"),g=document.querySelector("#new-task-btn"),h=document.querySelector("#task-project-h2"),y=document.querySelector("#task-title"),k=document.querySelector("#task-description"),x=document.querySelector("#task-date"),S=document.querySelector("#task-priority"),w=document.querySelector("#task-notes"),j=document.querySelector("#display-tasks"),L=document.querySelector("#todo-container"),q=document.querySelector("#are-sure"),E=document.querySelector("#btn-yes"),N=document.querySelector("#btn-no"),C=document.querySelector("#project-del-confirm"),M=document.querySelector("#btn-p-yes"),O=document.querySelector("#btn-p-no"),T="",D=[],I="",A=function(){j.innerHTML="";JSON.parse(localStorage.getItem(T)).forEach((function(n){var t,e=document.createElement("div");e.setAttribute("class","tasks-list"),e.setAttribute("id","tasks-list"),e.innerHTML='\n      <h3 class="task-title" id="todo-title"><span class="todo-h3"> '.concat(n.title,' </span></h3>\n      <div class="todo-details">\n        <p class="task-description"><span class="todo-titles"> Description:</span> ').concat(n.description,'</p>\n        <p class="task-date"><span class="todo-titles">Date:</span> ').concat(n.date,'</p>\n        <p class="task-date"><span class="todo-titles">Priority:</span> ').concat(n.priority,'</p>\n        <p class="task-notes"><span class="todo-titles">Notes:</span> ').concat(n.notes,'</p>\n      </div>\n      <button id="btn-edit-todo" class="submit-btn card-btn" data-name="').concat(n.title,'">Edit</button>\n      <button id="btn-delete-todo" class="submit-btn btn-delete" data-delete="').concat(n.title,'">Delete</button>\n      '),j.appendChild(e),e.appendChild(((t=document.createElement("button")).setAttribute("class","submit-btn"),t.addEventListener("click",(function(){return function(n){var t;(t=n.parentNode).classList.toggle("done-done"),t.classList.toggle(".disabled"),t.style.zIndex=999,n.parentNode.childNodes.forEach((function(n){"submit-btn card-btn"!==n.className&&"submit-btn card-btn disabled"!==n.className||n.classList.toggle("disabled"),"task-title"!==n.className&&"task-title done"!==n.className||n.classList.toggle("done")}))}(t)})),t.innerHTML="Done/Undone",t)),document.querySelectorAll("#btn-edit-todo").forEach((function(n){n.addEventListener("click",(function(){return t=n.dataset.name,I="",o(f),o(v),a(m),void(I=t);var t}))})),document.querySelectorAll("#btn-delete-todo").forEach((function(n){n.addEventListener("click",(function(){return o(q)}))}))}))},z=function(){var n=Object.keys(localStorage);p.innerHTML="",n.forEach((function(n){var t=document.createElement("h2");t.setAttribute("class","project-title"),t.textContent=n,p.appendChild(t)})),document.querySelectorAll(".project-title").forEach((function(n){n.addEventListener("click",(function(){T=n.textContent,D=JSON.parse(localStorage.getItem(T)),h.textContent="Current Project: ".concat(T),A(),o(g),o(u),o(L)}))}))};d.addEventListener("click",(function(){if(""===l.value)return i("Project title required.");var n,t=new s;return t.project=l.value,n=t.project,localStorage.setItem(n,JSON.stringify([])),T=t.project})),d.addEventListener("click",z),b.addEventListener("click",(function(){return a(f)})),m.addEventListener("click",(function(){if(""===y.value)return i("Title of task required.");if(""===k.value)return i("Description of task required.");if(""===x.value)return i("DateDue of task required.");var n=new s(T,y.value,k.value,x.value,S.value,w.value);return D.push(n),y.value="",k.value="",x.value="",S.value="Normal",w.value="",r(n.project,D),a(f)})),m.addEventListener("click",A),g.addEventListener("click",(function(){return n=m,t=v,f.classList.remove("hidden"),n.classList.remove("hidden"),void t.classList.add("hidden");var n,t})),v.addEventListener("click",(function(){return""===y.value?i("Title of task required."):""===k.value?i("Description of task required."):""===x.value?i("DateDue of task required."):(D.forEach((function(n){var t=n;t.title===I&&(t.title=y.value,t.description=k.value,t.date=x.value,t.priority=S.value,t.notes=w.value)})),r(T,D),y.value="",k.value="",x.value="",S.value="Normal",w.value="",a(f),A())})),E.addEventListener("click",(function(){var n=D,t=0;n.forEach((function(e){""===e.title&&(t=n.indexOf(e))})),function(n,t,e,r){n.splice(t,1),r(e,n)}(n,t,T,r),a(q),A()})),N.addEventListener("click",(function(){return a(q)})),u.addEventListener("click",(function(){return o(C)})),M.addEventListener("click",(function(){var n;n=T,localStorage.removeItem(n),a(L),a(C),T="",z()})),O.addEventListener("click",(function(){return a(C)}));e(0);z()}]);