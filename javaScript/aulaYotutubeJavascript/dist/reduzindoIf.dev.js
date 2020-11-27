"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function eDeMaior(idade, sexo) {
  return idade > 18 && sexo == 'M';
}

console.log(eDeMaior(20, 'M'));
var nome = 'pedro';

if (nome.trim() !== '') {
  console.log('nome valido');
}

if (nome.trim() !== '' && nome.trim().length >= 3) {
  console.log('nome valido');
}

function isValidName(name) {
  return naoEstaVazio(nome) && menorQue(3, nome) && maiorQue(30, nome);
}

if (isValidName(nome)) {
  console.log('nome valido');
}

function naoEstaVazio(field) {
  return field.trim() !== '';
} // function menorQue(length, field) {
//     return field.length >= length
// }
// menorQue(3, 'mateus')


if (naoEstaVazio(nome) && menorQue(3, nome)) {
  console.log('nome valido!');
} // function maiorQue(length, field) {
//     return field.trim().length <= length  
// }


if (isValidName(nome)) {
  console.log('foi!');
}

function maiorQue(length) {
  return function (campo) {
    return campo.length >= length;
  };
} //teste1(3)


function menorQue(length) {
  return function (campo) {
    return campo.length <= length;
  };
} //teste2(30)


var validation = {
  nome: [naoEstaVazio, maiorQue(3), menorQue(30)]
};
console.log(validation.nome.every(function (fn) {
  return fn(nome);
}));

function eValido(validation, field) {
  return validation.every(function (fn) {
    return fn(field);
  });
}

eValido(validation.nome, nome) ? console.log("meus parabens") : console.log("errou");
var operador = '+';

if (operador === '+' || operador === '-' || operador === '*' || operador === '/') {
  console.log('Operador Valido');
}

if (['+', '-', '*', '/'].includes(operador)) {
  console.log('operador valido utilizando includes');
}

var usuario = {
  endereco: {
    bairro: "nome da vila"
  }
};
console.log(usuario.endereco.bairro);

function getDesconto(pessoa) {
  var preco;

  if (pessoa < 10) {
    preco = 500;
  } else if (pessoa >= 10 && pessoa < 25) {
    preco = 350;
  } else if (pessoa >= 25 && pessoa < 100) {
    preco = 250;
  } else if (pessoa >= 100) {
    preco = 200;
  }

  return preco;
}

console.log(getDesconto(305));

function menor(valor1) {
  return function (valor2) {
    return valor2 < valor1;
  };
}

function between(n1, n2) {
  return function (valor) {
    return valor >= n1 && valor < n2;
  };
}

function maior(valor1) {
  return function (valor2) {
    return valor2 > valor1;
  };
}

function getDesconto2(pessoa) {
  var _find = [[menor(10), 500], [between(10, 25), 350], [between(25, 100), 250], [maior(100), 200]].find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        teste = _ref2[0];

    return teste(pessoa);
  }),
      _find2 = _slicedToArray(_find, 2),
      _ = _find2[0],
      resultado = _find2[1];

  return resultado;
}

console.log(getDesconto2(300));
var types = {
  PLATINUM: function PLATINUM() {
    return 'Platinum Custumer';
  },
  GOLD: function GOLD() {
    return 'Gold Custumer';
  },
  SILVER: function SILVER() {
    return 'Silver Custumer';
  }
};

function setAccType(accType) {
  return types[accType]();
}

console.log(setAccType('PLATINUM'));