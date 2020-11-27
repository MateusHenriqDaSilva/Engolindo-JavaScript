"use strict";

// function soma(array){
//     let resultado = 0
//     array.reduce((acumulador, elemento) => {
//        return resultado = acumulador + elemento
//     })
//     return resultado
// }
function soma(valores) {
  var resultado = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = valores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var valor = _step.value;
      resultado += valor;
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

  return resultado;
}

function distancia(min, max) {
  var passos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var array = [];
  var valor1 = max === undefined ? 1 : min;
  var valor2 = max == undefined ? min : max;

  if (valor1 < valor2) {
    for (var contador = valor1; contador <= valor2; contador += passos) {
      array.push(contador);
    }
  } else {
    for (var _contador = valor1; _contador >= valor2; _contador -= passos) {
      array.push(_contador);
    }
  }

  return array;
}

console.log(distancia(1, 10, 2));
console.log(soma(distancia(6))); //invertendo array

function revertendoArray(array) {
  var reversoArray = [];

  for (var contador = array.length - 1; contador >= 0; contador--) {
    reversoArray.push(array[contador]);
  }

  return reversoArray;
}

console.log(revertendoArray(['a', 'b', 'c'])); //array para lista

function arrayLista(array) {
  var obj = null;

  for (var contador = array.length - 1; contador >= 0; contador--) {
    obj = {
      value: array[contador],
      rest: obj
    };
  }

  return obj;
}

console.log(arrayLista([10, 20, 30])); //lista para array

console.log('lista para array');

function listaArray(obj) {
  var array = [];

  for (var contador = obj; contador; contador = contador.rest) {
    array.push(contador.value);
  }

  return array;
}

console.log(listaArray({
  value: 10,
  rest: {
    value: 20,
    rest: 0
  }
}));
console.log(listaArray(arrayLista([10, 20, 30])));

function adicionarValor(valor, lista) {
  return {
    valor: valor,
    rest: lista
  };
}

console.log(adicionarValor(1, {
  value: 10,
  rest: {
    value: 20,
    rest: 0
  }
}));

function nth(lista, n) {
  if (!lista) return undefined;else if (n == 0) return lista.value;else return nth(lista.rest, n - 1);
}

console.log(nth(arrayLista([10, 20, 30]), 1));