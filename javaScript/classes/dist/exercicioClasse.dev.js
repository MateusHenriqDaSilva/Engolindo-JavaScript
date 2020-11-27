"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(linha, coluna) {
    _classCallCheck(this, Vector);

    this.linha = linha;
    this.coluna = coluna;
  }

  _createClass(Vector, [{
    key: "somar",
    value: function somar(outro) {
      return new Vector(this.linha + outro.linha, this.coluna + outro.coluna);
    }
  }, {
    key: "diminuir",
    value: function diminuir(outro) {
      return new Vector(this.linha - outro.linha, this.coluna - outro.coluna);
    }
  }, {
    key: "getTamanho",
    value: function getTamanho() {
      return Math.sqrt(this.linha * this.linha + this.coluna * this.coluna);
    }
  }]);

  return Vector;
}();

console.log(new Vector(2, 2).somar(new Vector(2, 2)));
console.log(new Vector(2, 2).diminuir(new Vector(3, 3)));
var vator = new Vector(3, 3).getTamanho().toFixed(0);
console.log(vator);