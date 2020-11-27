"use strict";

function rand(_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1000 : _ref$max;
  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

var objNumerico = {
  max: 50,
  min: 40
};
console.log(rand(objNumerico));
console.log(rand({}));

function random2() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(random2());