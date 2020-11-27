"use strict";

function ePar(numero) {
  if (numero == 0) {
    return true;
  } else if (numero == 1) {
    return false;
  } else if (numero < 0) {
    return numero = ePar(-numero);
  } else {
    return ePar(numero - 2);
  }
}

console.log(ePar(-10)); // funcao recursiva