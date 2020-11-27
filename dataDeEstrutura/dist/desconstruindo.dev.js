"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function phi(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      n00 = _ref2[0],
      n01 = _ref2[1],
      n10 = _ref2[2],
      n11 = _ref2[3];

  return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]));
var _name$age = {
  name: "Faraji",
  age: 23
},
    nome = _name$age.name;
var _name$age2 = {
  name: "Faraji",
  age: 23
},
    idade = _name$age2.age;
console.log(nome);
console.log(idade);
var obj = {
  "feliz": true,
  "nome": ['mateus', 'ana']
};
var json = JSON.stringify(obj);
console.log(json);
console.log(JSON.parse(json).nome);