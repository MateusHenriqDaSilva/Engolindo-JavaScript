"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var estradas = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketlugar-Farm", "Marketlugar-Post Office", "Marketlugar-Shop", "Marketlugar-Town Hall", "Shop-Town Hall"];

function construirGrafico(bordas) {
  var grafico = Object.create(null);

  function addBorda(de, para) {
    if (grafico[de] == null) {
      grafico[de] = [para];
    } else {
      grafico[de].push(para);
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bordas.map(function (r) {
      return r.split("-");
    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          de = _step$value[0],
          para = _step$value[1];

      addBorda(de, para);
      addBorda(para, de);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return grafico;
}

var graficoDeEstrada = construirGrafico(estradas);

var Vila =
/*#__PURE__*/
function () {
  function Vila(lugar, cartas) {
    _classCallCheck(this, Vila);

    this.lugar = lugar;
    this.cartas = cartas;
  }

  _createClass(Vila, [{
    key: "movimentar",
    value: function movimentar(destino) {
      var _this = this;

      if (!graficoDeEstrada[this.lugar].includes(destino)) {
        return this;
      } else {
        var cartas = this.cartas.map(function (p) {
          if (p.lugar != _this.lugar) return p;
          return {
            lugar: destino,
            endereco: p.endereco
          };
        }).filter(function (p) {
          return p.lugar != p.endereco;
        });
        return new Vila(destino, cartas);
      }
    }
  }]);

  return Vila;
}();

var primeiro = new Vila("Post Office", [{
  lugar: "Post Office",
  endereco: "Alice's House"
}]);
var proximo = primeiro.movimentar("Alice's House");
console.log(proximo.lugar); // → Alice's House

console.log(proximo.cartas); // → []

console.log(primeiro.lugar); // → Post Office