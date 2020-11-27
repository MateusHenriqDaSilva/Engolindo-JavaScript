const { Script } = require("vm");

let total = 0,
  contador = 1;
while (contador <= 10) {
  total += contador;
  contador += 1;
}
console.log(total);
function sum(valores) {
  let resultado = 0;
  for (let valor of valores) {
    resultado += valor;
  }
  return resultado;
}

function range(min, max, passos = 1) {
  let array = [];
  let valor1 = max === undefined ? 1 : min;
  let valor2 = max == undefined ? min : max;

  if (valor1 < valor2) {
    for (let contador = valor1; contador <= valor2; contador += passos) {
      array.push(contador);
    }
  } else {
    for (let contador = valor1; contador >= valor2; contador -= passos) {
      array.push(contador);
    }
  }
  return array;
}

const valor1 = range(1, 10);
console.log(sum(valor1));

function repetirOlaMundo(valor, quantidade){
    for(let contador = 1; contador <= quantidade; contador++) {
        console.log(valor)
    }
}

function repetir(valor, acao){
    for(let contador = 0; contador <= valor; contador++){
        acao(contador)
    }
}

repetir('olaMundo', 4)

let array = []
repetir(5, (contador) => {
    array.push(`unidade: ${contador + 1}` )
})
console.log(array)

function valoresAcumulados(valor1){
    return ((valor2) => valor2 > valor1)
}

const ifValor = valoresAcumulados(2)
console.log(ifValor(3))

function noses(funcao){
    return (...array) => {
        console.log('conteudo: ', array)
        let resultado = funcao(...array)
        console.log('conteudo sem funcao: ', array, ", retornando com funcao: ", resultado)
        return resultado 
    }
}
noses(Math.min)(3,2,1) // pegar menor valor

function verificacao(verifica, entao){
    if(verifica) entao()
}

repetir(3, (elemento) => {
  verificacao(elemento % 2 == 0, () => {
        console.log(elemento, "e par")
    })
})
//filtrando
function filtrandoArray(array,teste){
  let passou = []
  for(let elemento of array) {
    if(teste(elemento)){
      passou.push(elemento)
    }
  }
  return passou
}
//mpaeando
function map(array, transform) {
  let mapeado = []
  for(let elemento of array) {
    mapeado.push(transform(elemento))
  }
  return mapeado
}

console.log(map([1,2,3,4,5], (a) => a + 2))
function reduce(array, combinacao, inicio) {
  let corrente = inicio
  for (let elemento of array) {
    corrente = combinacao(corrente, elemento)
  }
  return corrente
}
console.log(reduce([1,2,3,4,5], (a,b) => a + b, 0))

function contarLetras(script) {
  return script.ranges.reduce((contador, [de, para]) => {
    return contador + (de - para)
  }, 0)
}

console.log(contarLetras(['mateus','henrique'].reduce((a,b) => {
  return contarLetras(a) < contarLetras(b) ? b : a
})))