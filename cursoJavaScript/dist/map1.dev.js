"use strict";

var array = [1, 2, 3, 4, 5];
console.log(array.map(function (elemento) {
  return elemento * 2;
}));
console.log(array);

var soma10 = function soma10(elemento) {
  return elemento + 10;
};

var triplo = function triplo(elemento) {
  return elemento * 3;
};

var paraDinheiro = function paraDinheiro(elemento) {
  return "RS ".concat(parseFloat(elemento).toFixed(2).replace('.', ','));
};

var resultado = array.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);