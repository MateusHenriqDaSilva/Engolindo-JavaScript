"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(typeof Array === "undefined" ? "undefined" : _typeof(Array), _typeof(new Array()), _typeof([]));
var aprovados = new Array('Bia', 'Pedro', 'Ana');
console.log(aprovados);
aprovados = ['diego', 'mateus', 'ana'];
console.log(aprovados);
console.log("nome: ", aprovados[0]);
console.log("nome: ", aprovados[2]);
aprovados[3] = 'joao';
aprovados.push('carolina');
console.log(aprovados);
console.log(aprovados.sort());
console.log(aprovados.length);
delete aprovados[1];
console.log(aprovados);
aprovados.splice(1, 1, 'elemento1', 'elemento2');
console.log(aprovados);
aprovados.splice(1, 2, 'denner', 'miranda');
console.log(aprovados);