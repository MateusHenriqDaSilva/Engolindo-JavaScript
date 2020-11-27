"use strict";

var soma = function soma(a, b) {
  return a + b;
};

var subtrair = function subtrair(a, b) {
  return a - b;
};

var dividir = function dividir(a, b) {
  return a / b;
};

var multiplicar = function multiplicar(a, b) {
  return a * b;
};

console.log(soma(10, 10));
console.log(subtrair(10, 10));
console.log(dividir(10, 10));
console.log(multiplicar(10, 10));

function printOla() {
  console.log('ola');
}

var funcao = function funcao(fn) {
  return fn();
};

funcao(printOla);
funcao(function () {
  console.log('o mundo vai mudar e os ignorantes e egocentricos vai cair pelos humildes');
});
console.log(funcao(Math.random));

function finalPreco(tax) {
  return function (preco) {
    return preco * (1 + tax);
  };
}

console.log(finalPreco(2, 3.00));
var taxaComJuros = finalPreco(2);
console.log(taxaComJuros(3.00));
console.log(taxaComJuros(4.00));
console.log(taxaComJuros(5.00));