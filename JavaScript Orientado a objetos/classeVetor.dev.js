"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vec =
/*#__PURE__*/
function () {
  function Vec(x, y) {
    _classCallCheck(this, Vec);

    this.x = x;
    this.y = y;
  }

  _createClass(Vec, [{
    key: "adicionar",
    value: function adicionar(outro) {
      return new Vec(this.x + outro.x, this.y + outro.y);
    }
  }, {
    key: "remover",
    value: function remover(outro) {
      return new Vec(this.x - outro.x, this.y - outro.y);
    }
  }, {
    key: "tamanho",
    get: function get() {
      return Math.sqrt(this.x * this.x * this.y * this.y);
    }
  }]);

  return Vec;
}();

console.log(new Vec(1, 2).adicionar(new Vec(2, 3)));
console.log(new Vec(3, 4).tamanho); // → Vec{x: 3, y: 5}

console.log(new Vec(1, 2).remover(new Vec(2, 3))); // → Vec{x: -1, y: -1}

console.log(new Vec(3, 4).tamanho);