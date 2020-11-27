"use strict";

var baseExpo = function baseExpo(base, exponente) {
  var resultado = 1;

  for (var contador = 1; contador <= exponente; contador++) {
    resultado *= base;
  }

  return resultado;
};

console.log(baseExpo(2, 10));