parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t,e=document.querySelector("body"),n=document.querySelector("#timer"),c=document.querySelector("#status"),o=document.querySelector("#startTimer"),r=document.querySelector("#resTimer"),a=document.querySelector("#pauseBtn"),i=25,l=0,u=!0,s=!1;n.textContent="".concat(i," : ").concat(l<10?"0"+l:l),a.style.display="none",e.classList.add("work");var d=function(){t=setInterval(function(){0==l?(i-=1,l=59):l--,0==i&&0==l&&(fetch("/notify/".concat(u?"Break":"Work")),y()),n.textContent="".concat(i," : ").concat(l<10?"0"+l:l)},1e3)},y=function(){o.style.display="none",clearInterval(t),i=u?25:5,l=0,n.textContent="".concat(i," : ").concat(l<10?"0"+l:l),c.textContent=u?"Work time":"Break time",e.classList=u?"work":"break",d(),u=!u,a.style.display="block"},k=function(){s?(d(),a.textContent="Pause"):(clearInterval(t),a.textContent="Continue"),s=!s},m=function(){c.textContent&&(u=!u),e.classList.replace("break","work"),clearInterval(t),i=25,l=0,n.textContent="".concat(i," : ").concat(l<10?"0"+l:l),c.textContent=""};o.addEventListener("click",function(){return y()}),a.addEventListener("click",function(){return k()}),r.addEventListener("click",function(){return m()});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.1da38175.js.map