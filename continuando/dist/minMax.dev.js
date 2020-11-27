"use strict";

function distancia(min, max) {
  var numero1 = max === undefined ? '1' : min;
  var numero2 = max === undefined ? min : max;

  if (numero1 < numero2) {
    for (var contador = numero1; contador <= numero2; contador++) {
      console.log(contador);
    }
  } else {
    for (var _contador = numero1; _contador >= numero2; _contador--) {
      console.log(_contador);
    }
  }
}

distancia(3, 1);