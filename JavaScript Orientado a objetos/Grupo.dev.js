"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grupo =
/*#__PURE__*/
function () {
  function Grupo() {
    _classCallCheck(this, Grupo);

    this.membros = [];
  }

  _createClass(Grupo, [{
    key: "add",
    value: function add(value) {
      if (!this.has(value)) {
        this.membros.push(value);
      }
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      this.membros = this.membros.filter(function (v) {
        return v !== value;
      });
    }
  }, {
    key: "has",
    value: function has(value) {
      return this.membros.includes(value);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return new GrupoIterator(this);
    }
  }], [{
    key: "from",
    value: function from(colecao) {
      var grupo = new Grupo();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = colecao[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          grupo.add(value);
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

      return grupo;
    }
  }]);

  return Grupo;
}();

var GrupoIterator =
/*#__PURE__*/
function () {
  function GrupoIterator(grupo) {
    _classCallCheck(this, GrupoIterator);

    this.grupo = grupo;
    this.posicao = 0;
  }

  _createClass(GrupoIterator, [{
    key: "next",
    value: function next() {
      if (this.posicao >= this.grupo.membros.length) {
        return {
          done: true
        };
      } else {
        var resultado = {
          value: this.grupo.membros[this.posicao],
          done: false
        };
        this.posicao++;
        return resultado;
      }
    }
  }]);

  return GrupoIterator;
}();

var grupo = Grupo.from([10, 20]);
console.log(grupo.has(10));
console.log(grupo.has(30));
grupo.add(10);
grupo["delete"](10);
console.log(grupo.has(10));
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = Grupo.from(["a", "b", "c"])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var values = _step2.value;
    console.log(values);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var map = {
  um: true,
  dois: true,
  hasOwnProperty: true
};
console.log(Object.prototype.hasOwnProperty.call(map, "um"));