"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var varianteTamanho = {
  get tamanho() {
    return Math.floor(Math.random() * 100);
  }

};
console.log(varianteTamanho.tamanho);
console.log(varianteTamanho.tamanho);

var Temperatura =
/*#__PURE__*/
function () {
  function Temperatura(celsius) {
    _classCallCheck(this, Temperatura);

    this.celsius = celsius;
  }

  _createClass(Temperatura, [{
    key: "fahrenheit",
    get: function get() {
      return this.celsius * 1.8 + 32;
    },
    set: function set(valor) {
      return this.celsius = (valor - 32) / 1.8;
    }
  }], [{
    key: "fromFahrenheit",
    value: function fromFahrenheit(valor) {
      return new Temperatura((valor - 32) / 1.8);
    }
  }]);

  return Temperatura;
}();

var temp = new Temperatura(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);