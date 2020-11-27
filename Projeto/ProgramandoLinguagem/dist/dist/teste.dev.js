"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function expressaoDeAnalise(program) {
  program = pularEspaco(program);
  var match, expr;

  if (match = /^"([^"]*)"/.exec(program)) {
    expr = {
      type: "value",
      value: match[1]
    };
  } else if (match = /^\d+\b/.exec(program)) {
    expr = {
      type: "value",
      value: Number(match[0])
    };
  } else if (match = /^[^\s(),"]+/.exec(program)) {
    expr = {
      type: "word",
      name: match[0]
    };
  } else {
    throw new SyntaxError("Unexpected syntax: " + program);
  }

  return analisarAplicar(expr, program.slice(match[0].length));
}

function pularEspaco(string) {
  var capacidadePular = string.match(/^(\s|#.*)*/);
  return string.slice(capacidadePular[0].length);
}

function analisarAplicar(expr, program) {
  program = pularEspaco(program);

  if (program[0] != "(") {
    return {
      expr: expr,
      rest: program
    };
  }

  program = pularEspaco(program.slice(1));
  expr = {
    type: "apply",
    operator: expr,
    args: []
  };

  while (program[0] != ")") {
    var arg = expressaoDeAnalise(program);
    expr.args.push(arg.expr);
    program = pularEspaco(arg.rest);

    if (program[0] == ",") {
      program = pularEspaco(program.slice(1));
    } else if (program[0] != ")") {}
  }

  return analisarAplicar(expr, program.slice(1));
}

function analisar(program) {
  var _expressaoDeAnalise = expressaoDeAnalise(program),
      expr = _expressaoDeAnalise.expr,
      rest = _expressaoDeAnalise.rest;

  if (pularEspaco(rest).length > 0) {
    throw new SyntaxError("Texto inesperado após programa");
  }

  return expr;
}

console.log(analisar("+(a, 10)"));
var formulariosEspeciais = Object.create(null);

function avaliar(expr, scope) {
  if (expr.type == "value") {
    return expr.value;
  } else if (expr.type == "word") {
    if (expr.name in scope) {
      return scope[expr.name];
    } else {
      throw new ReferenceError("Vincula\xE7\xE3o indefinida: ".concat(expr.name));
    }
  } else if (expr.type == "apply") {
    var operator = expr.operator,
        args = expr.args;

    if (operator.type == "word" && operator.name in formulariosEspeciais) {
      return formulariosEspeciais[operator.name](expr.args, scope);
    } else {
      var op = avaliar(operator, scope);

      if (typeof op == "function") {
        return op.apply(void 0, _toConsumableArray(args.map(function (arg) {
          return avaliar(arg, scope);
        })));
      } else {
        throw new TypeError("Aplicando uma não-função.");
      }
    }
  }
}

formulariosEspeciais["if"] = function (args, scope) {
  if (args.length != 3) {
    throw new SyntaxError("Número errado de args para se");
  } else if (avaliar(args[0], scope) !== false) {
    return avaliar(args[1], scope);
  } else {
    return avaliar(args[2], scope);
  }
};

formulariosEspeciais["while"] = function (args, scope) {
  if (args.length != 2) {
    throw new SyntaxError("Número errado de args para enquanto");
  }

  while (avaliar(args[0], scope) !== false) {
    avaliar(args[1], scope);
  }

  return false;
};

formulariosEspeciais["do"] = function (args, scope) {
  var value = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arg = _step.value;
      value = avaliar(arg, scope);
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

  return value;
};

formulariosEspeciais.define = function (args, scope) {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("incorreto uso do define");
  }

  var value = avaliar(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

var escopoSuperior = Object.create(null);
escopoSuperior["true"] = true;
escopoSuperior["false"] = false;
var prog = analisar("if(true, false, true)");
console.log(avaliar(prog, escopoSuperior));

for (var _i = 0, _arr = ["+", "-", "*", "/", "==", "<", ">"]; _i < _arr.length; _i++) {
  var op = _arr[_i];
  escopoSuperior[op] = Function("a, b", "return a ".concat(op, " b;"));
}

escopoSuperior.print = function (value) {
  console.log(value);
  return value;
};

function run(program) {
  return avaliar(analisar(program), Object.create(escopoSuperior));
}

run("\ndo(define(total, 0),\n  define(count, 1)\n  while(<(count, 11),\n    do(define(total, +(total, count)),\n      define(count, +(count, 1))))\n  print(total))\n");

formulariosEspeciais.fun = function (args, scope) {
  if (!args.length) {
    throw new SyntaxError("Funções precisam de um corpo");
  }

  var corpo = args[args.length - 1];
  var params = args.slice(0, args.length - 1).map(function (expr) {
    if (expr.type != "word") {
      throw new SyntaxError("Nomes de parâmetros devem ser palavras");
    }

    return expr.name;
  });
  return function () {
    if (arguments.length != params.length) {
      throw new TypeError("Número errado de argumentos");
    }

    var localScope = Object.create(scope);

    for (var i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }

    return avaliar(corpo, localScope);
  };
};

run("\n  do(define(plusOne, fun(a, +(a, 1))),\n  print(plusOne(10)))\n  ");
run("\n  do(define(pow, fun(base, exp,\n  if(==(exp, 0),\n  1,\n  *(base, pow(base, -(exp, 1)))))),\n  print(pow(2, 10)))\n");

escopoSuperior.array = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values;
};

escopoSuperior.length = function (array) {
  return array.length;
};

escopoSuperior.element = function (array, i) {
  return array[i];
};

run("\ndo(define(sum, fun(array,\n     do(define(i, 0),\n        define(sum, 0),\n        while(<(i, length(array)),\n          do(define(sum, +(sum, element(array, i))),\n             define(i, +(i, 1)))),\n        sum))),\n   print(sum(array(1, 2, 3))))\n"); // → {type: "word", name: "x"}

console.log(analisar("a # one\n   # two\n()")); // → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

console.log(analisar("# hello\nx"));

formulariosEspeciais.set = function (args, env) {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Mau uso do conjunto");
  }

  var varName = args[0].name;
  var value = avaliar(args[1], env);

  for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }

  throw new ReferenceError("Setting undefined variable ".concat(varName));
};

run("\ndo(define(x, 4),\n   define(setx, fun(val, set(x, val))),\n   setx(50),\n   print(x))\n"); // → 50

run("set(quux, true)");