"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function random(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      min = _ref2$ === void 0 ? 0 : _ref2$,
      _ref2$2 = _ref2[1],
      max = _ref2$2 === void 0 ? 60 : _ref2$2;

  if (min > max) {
    var _ref3 = [max, min];
    min = _ref3[0];
    max = _ref3[1];
  }

  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(random([50, 40]));
console.log(random([50, 40]));
console.log(random([70]));