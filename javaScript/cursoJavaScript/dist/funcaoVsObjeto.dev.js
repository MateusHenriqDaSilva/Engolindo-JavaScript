"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function teste() {}

console.log(_typeof(teste));
var teste2 = new teste();
console.log(_typeof(teste2));
console.log(typeof Object === "undefined" ? "undefined" : _typeof(Object));
console.log(_typeof(new Object()));

var produto = function produto() {
  _classCallCheck(this, produto);
};

console.log(_typeof(produto));
console.log(_typeof(new produto())); // tudo em javaScript e funcao
// voce somente criara objeto se instanciar uma classe ou funcao