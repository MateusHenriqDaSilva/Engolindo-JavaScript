"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // → {value: "O", done: false}

console.log(okIterator.next()); // → {value: "K", done: false}

console.log(okIterator.next());

var Matrix =
/*#__PURE__*/
function () {
  function Matrix(width, height) {
    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x, y) {
      return undefined;
    };

    _classCallCheck(this, Matrix);

    this.width = width;
    this.height = height;
    this.content = [];

    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  _createClass(Matrix, [{
    key: "get",
    value: function get(x, y) {
      return this.content[y * this.width + x];
    }
  }, {
    key: "set",
    value: function set(x, y, value) {
      this.content[y * this.width + x] = value;
    }
  }]);

  return Matrix;
}(); // → {value: undefined, done: true}class MatrixIterator {


var MatrixIterator =
/*#__PURE__*/
function () {
  function MatrixIterator(matrix) {
    _classCallCheck(this, MatrixIterator);

    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  _createClass(MatrixIterator, [{
    key: "next",
    value: function next() {
      if (this.y == this.matrix.height) return {
        done: true
      };
      var value = {
        x: this.x,
        y: this.y,
        value: this.matrix.get(this.x, this.y)
      };
      this.x++;

      if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
      }

      return {
        value: value,
        done: false
      };
    }
  }]);

  return MatrixIterator;
}();

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

var matrix = new Matrix(2, 2, function (x, y) {
  return "value ".concat(x, ",").concat(y);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = matrix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _step.value,
        x = _step$value.x,
        y = _step$value.y,
        value = _step$value.value;
    console.log(x, y, value);
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