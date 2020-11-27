"use strict";

var carrosTotal = [];

function adicionarCarros(carros, vendido) {
  carrosTotal.push({
    carros: carros,
    vendido: vendido
  });
}

adicionarCarros(['ferrari', 'ferrari', 'uno'], false);
adicionarCarros(['golf', 'ferrari', 'suzuki'], false);
adicionarCarros(['palio', 'onix', 'onix'], true);
console.log(carrosTotal);

function phiElemento(elemento, carros) {
  var valor = [0, 0, 0, 0];

  for (var i = 0; i < carros.length; i++) {
    var entrada = carros[i],
        index = 0;
    if (entrada.carros.includes(elemento)) index += 1;
    if (entrada.vendido) index += 2;
    valor[index] += 1;
  }

  return valor;
}

console.log(phiElemento("ferrari", carrosTotal));

for (var contador = 0; contador < carrosTotal.length; contador++) {
  var entrada = carrosTotal[contador];
  console.log(entrada);
} // for of


console.log('for of');

for (var _i = 0, _carrosTotal = carrosTotal; _i < _carrosTotal.length; _i++) {
  elemento = _carrosTotal[_i];
  console.log(elemento);
  console.log('elemento', elemento.vendido);
}

console.log('carrosVendidos');

function carrosListados(carros) {
  var carrosListado = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = carros[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _elemento = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _elemento.carros[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _carros = _step2.value;

          if (!carrosListado.includes(_carros)) {
            carrosListado.push(_carros);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
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

  return carrosListado;
}

console.log(carrosListados(carrosTotal));

function phi(valor) {
  return (valor[3] * valor[0] - valor[2] * valor[1]) / Math.sqrt((valor[2] + valor[3]) * (valor[0] + valor[1]) * (valor[1] + valor[3]) * (valor[0] + valor[2]));
}

console.log(phi([76, 9, 4, 1]));
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = carrosListados(carrosTotal)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var carros = _step3.value;
    console.log(carros, +":", phi(phiElemento(carros, carrosTotal)));
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}