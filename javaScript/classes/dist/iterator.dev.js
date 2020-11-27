"use strict";

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

var MatrixIterator =
/*#__PURE__*/
function () {
  function MatrixIterator(matrix) {
    _classCallCheck(this, MatrixIterator);

    this.linha = 0;
    this.coluna = 0;
    this.matrix = matrix;
  }

  _createClass(MatrixIterator, [{
    key: "next",
    value: function next() {
      if (this.coluna == this.matrix.altura) return {
        fim: true
      };
      var valor = {
        linha: this.linha,
        coluna: this.coluna,
        valor: this.matrix.get(this.linha, this.coluna)
      };
      this.linha++;

      if (this.linha == this.matrix.largura) {
        this.linha = 0;
        this.coluna++;
      }

      return {
        valor: valor,
        fim: false
      };
    }
  }]);

  return MatrixIterator;
}();

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

var matrix = new Matrix(2, 2, function (linha, coluna) {
  return "valor ".concat(linha, ",").concat(coluna);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = matrix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _step.value,
        linha = _step$value.linha,
        coluna = _step$value.coluna,
        valor = _step$value.valor;
    console.log(linha, coluna, valor);
  } // class Matrix {
  //   constructor(width, height, element = (x, y) => undefined) {
  //     this.width = width;
  //     this.height = height;
  //     this.content = [];
  //     for (let y = 0; y < height; y++) {
  //       for (let x = 0; x < width; x++) {
  //         this.content[y * width + x] = element(x, y);
  //       }
  //     }
  //   }
  //   get(x, y) {
  //     return this.content[y * this.width + x];
  //   }
  //   set(x, y, value) {
  //     this.content[y * this.width + x] = value;
  //   }
  // }
  // class MatrixIterator {
  //   constructor(matrix) {
  //     this.x = 0;
  //     this.y = 0;
  //     this.matrix = matrix;
  //   }
  //   next() {
  //     if (this.y == this.matrix.height) return {done: true};
  //     let value = {x: this.x,
  //                  y: this.y,
  //                  value: this.matrix.get(this.x, this.y)};
  //     this.x++;
  //     if (this.x == this.matrix.width) {
  //       this.x = 0;
  //       this.y++;
  //     }
  //     return {value, done: false};
  //   }
  // }
  // Matrix.prototype[Symbol.iterator] = function() {
  //   return new MatrixIterator(this);
  // };
  // let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
  // for (let {x, y, value} of matrix) {
  //   console.log(x, y, value);
  // }
  // // → 0 0 value 0,0
  // // → 1 0 value 1,0
  // // → 0 1 value 0,1
  // // → 1 1 value 1,1

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