"use strict";

function phi(valor) {
  return (valor[3] * valor[0] - valor[2] * valor[1]) / Math.sqrt((valor[2] + valor[3]) * (valor[0] + valor[1]) * (valor[1] + valor[3]) * (valor[0] + valor[2]));
}

console.log(phi([76, 9, 4, 1]));