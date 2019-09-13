(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/api/baseUrl.js":
/*!****************************!*\
  !*** ./src/api/baseUrl.js ***!
  \****************************/
/*! exports provided: default */function(e,t,n){"use strict";function r(){return function(e,t){t||(t=window.location.href);e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"https://mysterious-dawn-16770.herokuapp.com/"}n.r(t),n.d(t,"default",(function(){return r}))},"./src/api/userApi.js":
/*!****************************!*\
  !*** ./src/api/userApi.js ***!
  \****************************/
/*! exports provided: getUsers, deleteUser */function(e,t,n){"use strict";n.r(t),n.d(t,"getUsers",(function(){return o})),n.d(t,"deleteUser",(function(){return s}));n(/*! whatwg-fetch */"./node_modules/whatwg-fetch/fetch.js");var r=n(/*! ./baseUrl */"./src/api/baseUrl.js"),c=Object(r.default)();function o(){return fetch(c+"users").then(a,i)}function s(e){return t="users/".concat(e),n=new Request(c+t,{method:"DELETE"}),fetch(n).then(a,i);var t,n}function a(e){return e.json()}function i(e){console.log(e)}},"./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */function(e,t,n){},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t),function(e){n(/*! ./index.css */"./src/index.css");var t=n(/*! ./api/userApi */"./src/api/userApi.js");Object(t.getUsers)().then((function(n){var r="";n.forEach((function(e){r+='<tr>\n      <td><a href="#" data-id="'.concat(e.id,'" class="deleteUser">Delete</a></td>\n      <td>').concat(e.id,"</td>\n      <td>").concat(e.firstName,"</td>\n      <td>").concat(e.lastName,"</td>\n      <td>").concat(e.email,"</td>\n      </tr>")})),e.document.getElementById("users").innerHTML=r;var c=e.document.getElementsByClassName("deleteUser");Array.from(c,(function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),Object(t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}}))}))}.call(this,n(/*! ./../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))}},[["./src/index.js","runtime~main","vendors~main~vendor"]]]);
//# sourceMappingURL=main.ace095b4b511998cb02d.js.map