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

var varianteTamanho = {
  get tamanho() {
    return Math.floor(Math.random() * 100);
  }

};
console.log(varianteTamanho.tamanho);
console.log(varianteTamanho.tamanho);

var temperatura =
/*#__PURE__*/
function () {
  function temperatura(celsius) {
    _classCallCheck(this, temperatura);

    this.celsius = celsius;
  }

  _createClass(temperatura, [{
    key: "fahrenhe",
    get: function get() {
      return this.celsius * 1.8 + 32;
    },
    set: function set(value) {
      return this.celsius = (value - 32) / 1.8;
    }
  }], [{
    key: "fromFahrenheit",
    value: function fromFahrenheit(value) {
      return new temperatura((value - 32) / 1.8);
    }
  }]);

  return temperatura;
}();

var temp = new temperatura(22);
console.log(temp.fahrenhe);
temp.fahrenhe = 83;
console.log(temp.celsius);

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
}();

var SymmetricMatrix =
/*#__PURE__*/
function (_Matrix) {
  _inherits(SymmetricMatrix, _Matrix);

  function SymmetricMatrix(size) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x, y) {
      return undefined;
    };

    _classCallCheck(this, SymmetricMatrix);

    return _possibleConstructorReturn(this, _getPrototypeOf(SymmetricMatrix).call(this, size, size, function (x, y) {
      if (x < y) return element(y, x);else return element(x, y);
    }));
  }

  _createClass(SymmetricMatrix, [{
    key: "set",
    value: function set(x, y, value) {
      _get(_getPrototypeOf(SymmetricMatrix.prototype), "set", this).call(this, x, y, value);

      if (x != y) {
        _get(_getPrototypeOf(SymmetricMatrix.prototype), "set", this).call(this, y, x, value);
      }
    }
  }]);

  return SymmetricMatrix;
}(Matrix);

var matrix = new SymmetricMatrix(5, function (x, y) {
  return "".concat(x, ",").concat(y);
});
console.log(matrix.get(2, 3));