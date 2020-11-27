"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lancamento = function lancamento() {
  var joia = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "colar";
  var preco = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, lancamento);

  this.joia = joia;
  this.preco = preco;
};

var CicloFinanceiro =
/*#__PURE__*/
function () {
  function CicloFinanceiro(mes, ano) {
    _classCallCheck(this, CicloFinanceiro);

    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  _createClass(CicloFinanceiro, [{
    key: "addLancamentos",
    value: function addLancamentos() {
      var _this = this;

      for (var _len = arguments.length, lancamentos = new Array(_len), _key = 0; _key < _len; _key++) {
        lancamentos[_key] = arguments[_key];
      }

      //...concatena todos os paramentros em array
      // lancamentos.forEach((elemento) => {
      //     return this.lancamentos.push(elemento)
      // })
      lancamentos.map(function (elemento) {
        _this.lancamentos.push(elemento);
      });
    }
  }, {
    key: "sumario",
    value: function sumario() {
      var valorConsolidado = 0;
      this.lancamentos.filter(function (elemento) {
        valorConsolidado += elemento.preco;
      });
      return valorConsolidado;
    }
  }]);

  return CicloFinanceiro;
}();

var colar1 = new lancamento('colar1', 400);
var colar2 = new lancamento('colar2', 500);
var valorCompradoNoMes = new CicloFinanceiro(6, 2018);
console.log(valorCompradoNoMes);
valorCompradoNoMes.addLancamentos(colar1, colar2);
console.log(valorCompradoNoMes);
console.log(valorCompradoNoMes.sumario());