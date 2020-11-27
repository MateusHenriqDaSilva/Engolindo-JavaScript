const SCRIPTS = require("./script");

function letrasScript(codigo) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([de, para]) => {
        return codigo >= de && codigo < para;
      })
    ) {
      return script;
    }
  }
  return null;
}

console.log(letrasScript(121));

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}

function contarBy(items, nomeGrupo) {
  let contador = [];
  for (let item of items) {
    let name = nomeGrupo(item);
    let desconhecido = contador.findIndex((elemento) => elemento.name == name);
    if (desconhecido == -1) {
      contador.push({ name, contador: 1 }); 
    } else {
      contador[desconhecido].contador++;
    }
  }
  return contador;
}

console.log(contarBy([1, 2, 3, 4, 5], (n) => n > 2));

function scriptTexto(text){
  let scripts = contarBy(text, char => {
    let script = letrasScript(char.codePointAt(0))
    return script ? script.name : "none"
  }).filter(({name}) => name != "none")

  let total = scripts.reduce((n, {contador}) => n + contador, 0)
  if( total == 0) return "nao achamos script passado"

  return scripts.map(({name, contador}) => {
    return `${Math.round(contador * 100 / total)}% ${name}`
  }).join(", ")
}

console.log(scriptTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'))