"use strict";

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
var coelhoPreto = new Coelho("black");
var objeto = new (
/*#__PURE__*/
function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "getWord",
    value: function getWord() {
      return "Ola";
    }
  }]);

  return _class;
}())();
console.log(objeto.getWord());
Coelho.prototype.dentes = "pequeno";
coelhoPreto.dentes = "grande";
console.log(coelhoMatador.dentes);
console.log(coelhoPreto.dentes);