function expressaoDeAnalise(program) {
  program = pularEspaco(program);
  let match, expr;
  if ((match = /^"([^"]*)"/.exec(program))) {
    expr = { type: "value", value: match[1] };
  } else if ((match = /^\d+\b/.exec(program))) {
    expr = { type: "value", value: Number(match[0]) };
  } else if ((match = /^[^\s(),"]+/.exec(program))) {
    expr = { type: "word", name: match[0] };
  } else {
    throw new SyntaxError("Unexpected syntax: " + program);
  }
  return analisarAplicar(expr, program.slice(match[0].length));
}
function pularEspaco(string) {
  let capacidadePular = string.match(/^(\s|#.*)*/)
  return string.slice(capacidadePular[0].length)
}
function analisarAplicar(expr, program) {
  program = pularEspaco(program);
  if (program[0] != "(") {
    return { expr: expr, rest: program };
  }
  program = pularEspaco(program.slice(1));
  expr = { type: "apply", operator: expr, args: [] };
  while (program[0] != ")") {
    let arg = expressaoDeAnalise(program);
    expr.args.push(arg.expr);
    program = pularEspaco(arg.rest);
    if (program[0] == ",") {
      program = pularEspaco(program.slice(1));
    } else if (program[0] != ")") {
    }
  }
  return analisarAplicar(expr, program.slice(1));
}
function analisar(program) {
  let { expr, rest } = expressaoDeAnalise(program);
  if (pularEspaco(rest).length > 0) {
    throw new SyntaxError("Texto inesperado após programa");
  }
  return expr;
}
console.log(analisar("+(a, 10)"));

const formulariosEspeciais = Object.create(null);
function avaliar(expr, scope) {
  if (expr.type == "value") {
    return expr.value;
  } else if (expr.type == "word") {
    if (expr.name in scope) {
      return scope[expr.name];
    } else {
      throw new ReferenceError(`Vinculação indefinida: ${expr.name}`);
    }
  } else if (expr.type == "apply") {
    let { operator, args } = expr;
    if (operator.type == "word" && operator.name in formulariosEspeciais) {
      return formulariosEspeciais[operator.name](expr.args, scope);
    } else {
      let op = avaliar(operator, scope);
      if (typeof op == "function") {
        return op(...args.map((arg) => avaliar(arg, scope)));
      } else {
        throw new TypeError("Aplicando uma não-função.");
      }
    }
  }
}

formulariosEspeciais.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Número errado de args para se");
  } else if (avaliar(args[0], scope) !== false) {
    return avaliar(args[1], scope);
  } else {
    return avaliar(args[2], scope);
  }
};

formulariosEspeciais.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Número errado de args para enquanto");
  }
  while (avaliar(args[0], scope) !== false) {
    avaliar(args[1], scope);
  }
  return false;
};

formulariosEspeciais.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = avaliar(arg, scope);
  }
  return value;
};

formulariosEspeciais.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("incorreto uso do define");
  }
  let value = avaliar(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

const escopoSuperior = Object.create(null);

escopoSuperior.true = true;
escopoSuperior.false = false;

let prog = analisar(`if(true, false, true)`);
console.log(avaliar(prog, escopoSuperior));

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  escopoSuperior[op] = Function("a, b", `return a ${op} b;`);
}

escopoSuperior.print = (value) => {
  console.log(value);
  return value;
};

function run(program) {
  return avaliar(analisar(program), Object.create(escopoSuperior));
}

run(`
do(define(total, 0),
  define(count, 1)
  while(<(count, 11),
    do(define(total, +(total, count)),
      define(count, +(count, 1))))
  print(total))
`);

formulariosEspeciais.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("Funções precisam de um corpo");
  }
  let corpo = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map((expr) => {
    if (expr.type != "word") {
      throw new SyntaxError("Nomes de parâmetros devem ser palavras");
    }
    return expr.name;
  });
  return function () {
    if (arguments.length != params.length) {
      throw new TypeError("Número errado de argumentos");
    }
    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return avaliar(corpo, localScope);
  };
};

run(`
  do(define(plusOne, fun(a, +(a, 1))),
  print(plusOne(10)))
  `);
run(`
  do(define(pow, fun(base, exp,
  if(==(exp, 0),
  1,
  *(base, pow(base, -(exp, 1)))))),
  print(pow(2, 10)))
`);

escopoSuperior.array = (...values) => values;

escopoSuperior.length = array => array.length;

escopoSuperior.element = (array, i) => array[i];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);

// → {type: "word", name: "x"}

console.log(analisar("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
console.log(analisar("# hello\nx"));

formulariosEspeciais.set = (args,env) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Mau uso do conjunto")
  }
  let varName = args[0].name
  let value = avaliar(args[1], env)

  for(let scope  = env; scope; scope = Object.getPrototypeOf(scope)) {
    if(Object.prototype.hasOwnProperty.call(scope,varName)) {
      scope[varName] = value
      return value
    }
  }
  throw new ReferenceError(`Setting undefined variable ${varName}`)
}

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);