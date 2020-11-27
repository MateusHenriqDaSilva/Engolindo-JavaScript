"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coelho =
/*#__PURE__*/
function () {
  function Coelho(tipo) {
    _classCallCheck(this, Coelho);

    this.tipo = tipo;
  }

  _createClass(Coelho, [{
    key: "falar",
    value: function falar(texto) {
      console.log("O ".concat(this.type, " coelho fala: ").concat(texto));
    }
  }]);

  return Coelho;
}();

var coelhoMatador = new Coelho("Matador");
var coelhoPreto = new Coelho("Preto");

Coelho.prototype.toString = function () {
  return "um ".concat(this.tipo, " Coelho");
};

console.log(String(coelhoPreto)); // → a black Coelho

var sym = Symbol("name");
console.log(sym == Symbol("name"));
Coelho.prototype[sym] = 55;
console.log(coelhoPreto[sym]);
var toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
  return "".concat(this.length, " tamanho do array");
};

console.log([1, 2].toString()); // → 1,2

console.log([1, 2][toStringSymbol]());

var stringObject = _defineProperty({}, toStringSymbol, function () {
  return "uma corda de juta";
});

console.log(stringObject[toStringSymbol]());