"use strict";

var numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}));
console.log(numeros.reduce(function (acumulador, elemento, indice, array) {
  var resultado = acumulador + elemento;

  if (indice === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
}));