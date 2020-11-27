"use strict";

function valorDeEmbalagem(numero) {
  var local = numero;
  return function () {
    return local;
  };
}

var dois = valorDeEmbalagem(2);
console.log(2);
var tres = valorDeEmbalagem(3);
console.log(3);

function multiplicar(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

var valor = multiplicar(2);
console.log(valor(10));
console.log(multiplicar(2)(2));