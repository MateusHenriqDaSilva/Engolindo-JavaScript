"use strict";

var _this = void 0;

var comparaComThis = function comparaComThis(param) {
  console.log(this === param);
};

comparaComThis(global);
var obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);
console.log('com arrow');

var comparaComThisArrow = function comparaComThisArrow(param) {
  return console.log(_this === param);
};

comparaComThisArrow(global);
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(global);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);