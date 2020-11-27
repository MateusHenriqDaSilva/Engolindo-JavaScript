"use strict";

var listas = [];

function guardar(elemento) {
  listas.push(elemento);
}

function removePrimeiroItem() {
  return listas.shift();
}

function adicionaPrimeiroItem(elemento) {
  return listas.unshift(elemento);
}

function mostrar() {
  console.log(listas);
}

guardar(1);
mostrar();
guardar(2);
mostrar();
guardar(3);
mostrar();
removePrimeiroItem();
mostrar();
adicionaPrimeiroItem(3);
mostrar();