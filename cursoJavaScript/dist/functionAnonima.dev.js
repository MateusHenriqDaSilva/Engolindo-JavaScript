"use strict";

var soma = function soma(valor1, valor2) {
  return valor1 + valor2;
};

var multiplicar = function multiplicar(valor1, valor2) {
  return valor1 * valor2;
};

var dividir = function dividir(valor1, valor2) {
  return valor1 / valor2;
};

var subtrair = function subtrair(valor1, valor2) {
  return valor1 - valor2;
};

var imprimirResultado = function imprimirResultado(valor1, valor2) {
  var operacao = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : soma;
  console.log(operacao(valor1, valor2));
};

imprimirResultado(5, 5, multiplicar);
imprimirResultado(5, 5, soma);
imprimirResultado(5, 5, dividir);
imprimirResultado(5, 5, subtrair);