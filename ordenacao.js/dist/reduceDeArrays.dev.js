"use strict";

// concatenando um array em um so
var lista = [[1, 2, 3], [4, 5, 6], [6, 7, 8]];
var reduzindoLista = lista.reduce(function (combinacao, elemento) {
  var resultado = combinacao.concat(elemento);
  return resultado;
});
console.log(reduzindoLista); //criando meu priprio loop

function meuLoop(valor, funcao1, funcao2, acao) {
  for (var n = valor; funcao1(n); n = funcao2(n)) {
    acao(n);
  }
}

meuLoop(3, function (n) {
  return n > 0;
}, function (n) {
  return n - 1;
}, console.log);

function every(array, teste) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;
      if (!teste(n)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

console.log(every([1, 3, 5], function (n) {
  return n < 10;
})); // → true

console.log(every([2, 4, 16], function (n) {
  return n < 10;
}));