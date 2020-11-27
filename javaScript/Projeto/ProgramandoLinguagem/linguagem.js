function expressaoDeAnalisar(program) {
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
  let primeiro = string.search(/\S/);
  if (primeiro == -1) return "";
  return string.slice(primeiro);
}

function analisarAplicar(expr, program) {
  program = pularEspaco(program);
  if (program[0] != "(") {
    return { expr: expr, rest: program };
  }
  program = pularEspaco(program.slice(1));
  expr = { type: "apply", operator: expr, args: [] };
  while (program[0] != ")") {
    let arg = expressaoDeAnalisar(program);
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
  let { expr, rest } = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}
console.log(parse("+(a, 10)"));

