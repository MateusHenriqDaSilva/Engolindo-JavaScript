"use strict";

function argumentos(a, b) {
  if (b === undefined) return -a;else return a - b;
}

console.log(argumentos(10));
console.log(argumentos(10, 9));