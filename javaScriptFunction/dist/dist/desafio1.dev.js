"use strict";

function distancia(min, max) {
  var variedade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var n1 = max === undefined ? 1 : min;
  var n2 = max === undefined ? min : max;
  var array = [];

  if (n1 < n2) {
    for (var contador = n1; contador <= n2; contador += variedade) {
      array.push(contador);
    }
  } else {
    for (var _contador = n1; _contador >= n2; _contador -= variedade) {
      array.push(_contador);
    }
  }

  return array;
}

console.log(distancia(5));
console.log(distancia(6, 11));
console.log(distancia(10, 19, 2));
console.log(distancia(6, 2));
console.log(distancia(8, -3, 4));