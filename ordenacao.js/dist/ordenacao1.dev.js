"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require("vm"),
    Script = _require.Script;

var total = 0,
    contador = 1;

while (contador <= 10) {
  total += contador;
  contador += 1;
}

console.log(total);

function sum(valores) {
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

function range(min, max) {
  var passos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var array = [];
  var valor1 = max === undefined ? 1 : min;
  var valor2 = max == undefined ? min : max;

  if (valor1 < valor2) {
    for (var _contador = valor1; _contador <= valor2; _contador += passos) {
      array.push(_contador);
    }
  } else {
    for (var _contador2 = valor1; _contador2 >= valor2; _contador2 -= passos) {
      array.push(_contador2);
    }
  }

  return array;
}

var valor1 = range(1, 10);
console.log(sum(valor1));

function repetirOlaMundo(valor, quantidade) {
  for (var _contador3 = 1; _contador3 <= quantidade; _contador3++) {
    console.log(valor);
  }
}

function repetir(valor, acao) {
  for (var _contador4 = 0; _contador4 <= valor; _contador4++) {
    acao(_contador4);
  }
}

repetir('olaMundo', 4);
var array = [];
repetir(5, function (contador) {
  array.push("unidade: ".concat(contador + 1));
});
console.log(array);

function valoresAcumulados(valor1) {
  return function (valor2) {
    return valor2 > valor1;
  };
}

var ifValor = valoresAcumulados(2);
console.log(ifValor(3));

function noses(funcao) {
  return function () {
    for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {
      array[_key] = arguments[_key];
    }

    console.log('conteudo: ', array);
    var resultado = funcao.apply(void 0, array);
    console.log('conteudo sem funcao: ', array, ", retornando com funcao: ", resultado);
    return resultado;
  };
}

noses(Math.min)(3, 2, 1); // pegar menor valor

function verificacao(verifica, entao) {
  if (verifica) entao();
}

repetir(3, function (elemento) {
  verificacao(elemento % 2 == 0, function () {
    console.log(elemento, "e par");
  });
}); //filtrando

function filtrandoArray(array, teste) {
  var passou = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elemento = _step2.value;

      if (teste(elemento)) {
        passou.push(elemento);
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

  return passou;
} //mpaeando


function map(array, transform) {
  var mapeado = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var elemento = _step3.value;
      mapeado.push(transform(elemento));
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

  return mapeado;
}

console.log(map([1, 2, 3, 4, 5], function (a) {
  return a + 2;
}));

function reduce(array, combinacao, inicio) {
  var corrente = inicio;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var elemento = _step4.value;
      corrente = combinacao(corrente, elemento);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return corrente;
}

console.log(reduce([1, 2, 3, 4, 5], function (a, b) {
  return a + b;
}, 0));

function contarLetras(script) {
  return script.ranges.reduce(function (contador, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        de = _ref2[0],
        para = _ref2[1];

    return contador + (de - para);
  }, 0);
}

console.log(contarLetras(['mateus', 'henrique'].reduce(function (a, b) {
  return contarLetras(a) < contarLetras(b) ? b : a;
})));