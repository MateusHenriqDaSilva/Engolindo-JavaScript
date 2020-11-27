"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matrix =
/*#__PURE__*/
function () {
  function Matrix(largura, altura) {
    var elemento = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (linha, coluna) {
      return undefined;
    };

    _classCallCheck(this, Matrix);

    this.largura = largura;
    this.altura = altura;
    this.content = [];

    for (var coluna = 0; coluna < altura; coluna++) {
      for (var linha = 0; linha < largura; linha++) {
        this.content[coluna * largura + linha] = elemento(linha, coluna);
      }
    }
  }

  _createClass(Matrix, [{
    key: "get",
    value: function get(linha, coluna) {
      return this.content[coluna * this.largura + linha];
    }
  }, {
    key: "set",
    value: function set(linha, coluna, valor) {
      this.content[coluna * this.largura + linha] = valor;
    }
  }]);

  return Matrix;
}();

var matrix1 = new Matrix(2, 2, function (linha, coluna) {
  return "valor ".concat(linha, ", ").concat(coluna, " ");
});
console.log(matrix1);
console.log(matrix1.get(1, 1));
matrix1.set(1, 1, 4);
console.log(matrix1.get(1, 1));

var simetriaMatrix =
/*#__PURE__*/
function (_Matrix) {
  _inherits(simetriaMatrix, _Matrix);

  function simetriaMatrix(tamanho) {
    var elemento = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (linha, coluna) {
      return undefined;
    };

    _classCallCheck(this, simetriaMatrix);

    return _possibleConstructorReturn(this, _getPrototypeOf(simetriaMatrix).call(this, tamanho, tamanho, function (linha, coluna) {
      if (linha < coluna) return elemento(coluna, linha);else return elemento(linha, coluna);
    }));
  }

  _createClass(simetriaMatrix, [{
    key: "set",
    value: function set(linha, coluna, valor) {
      _get(_getPrototypeOf(simetriaMatrix.prototype), "set", this).call(this, linha, coluna, valor);

      if (linha != coluna) {
        _get(_getPrototypeOf(simetriaMatrix.prototype), "set", this).call(this, coluna, linha, valor);
      }
    }
  }]);

  return simetriaMatrix;
}(Matrix);

var matrix4 = new simetriaMatrix(5, function (linha, coluna) {
  return "".concat(linha, " ").concat(coluna);
});
console.log(matrix4.get(2, 3));
console.log(new simetriaMatrix(2) instanceof simetriaMatrix); // → true

console.log(new simetriaMatrix(2) instanceof Matrix); // → true

console.log(new Matrix(2, 2) instanceof simetriaMatrix); // → false

console.log([1] instanceof Array);