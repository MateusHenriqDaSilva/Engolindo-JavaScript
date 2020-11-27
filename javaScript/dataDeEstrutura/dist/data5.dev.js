"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// mostra o primeiro valor no index
console.log([1, 2, 3, 4, 5].indexOf(2)); // 1
// mostra o ultimo valor reptido se tiver 2 valor

console.log([1, 2, 3, 2, 5].lastIndexOf(2)); // 3
//pegar valor entre 2 e 4

console.log([1, 2, 3, 4, 5].slice(2, 4)); //pegar valor entre 2 e 4

console.log([1, 2, 3, 4, 5].slice(2)); //pegar valor entre 2 e 4

console.log([1, 2, 3, 4, 5].splice(4));

function remover(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

arrayTeste = ['a', 'b', 'c', 'd', 'e'];

for (var contador = 0; contador < arrayTeste; contador++) {
  console.log(contador);
}

console.log(remover(arrayTeste, 3));

function max() {
  var resultado = -Infinity;

  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }

  for (var _i = 0, _numeros = numeros; _i < _numeros.length; _i++) {
    var numero = _numeros[_i];
    if (numero > resultado) resultado = numero;
  }

  return resultado;
}

console.log(max(10, 2, 3, 4, 5, 6));
var mundos = ['marte', 'jupiter', 'saturno'];
console.log(['dolguldur', 'liverpol'].concat(mundos));
arrayLol = [1, 2, 3, 5];

function numericos() {
  for (var _len2 = arguments.length, numero = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numero[_key2] = arguments[_key2];
  }

  console.log(numero);
}

numericos.apply(void 0, [1, 2, 3].concat(_toConsumableArray(arrayLol)));

function ponteiroAleatorioDentroDoCirculo(radius) {
  var angulo = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angulo),
    y: radius * Math.sin(angulo)
  };
}

console.log(ponteiroAleatorioDentroDoCirculo(2));
console.log(Math.floor(Math.random() * 10));