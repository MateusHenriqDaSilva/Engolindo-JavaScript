const SCRIPTS = require("./script")

function reduce(array, funcao, inicio){
    let corrente = inicio
    for (let elemento of array) {
        corrente = funcao(corrente, elemento)
    }
    return corrente
}

console.log(reduce([1,2,3,4,5], (a,b) => a+b, 0))

function contarLetras(script){
    return script.ranges.reduce((count, [de, para]) => {
        return count + (de - para)
    }, 0)
}

console.log(SCRIPTS.reduce((a,b) => {
    return contarLetras(a) < contarLetras(b) ? b : a
}))

function avareza(array){
    return array.reduce((a,b) => a + b) / array.length
}

function filtrar(array, teste){
    let arrayFiltrado = []
    for( let elemento of array) {
        if(teste(elemento)) {
            arrayFiltrado.push(elemento)
        }
    }
    return arrayFiltrado
}

console.log(Math.round(avareza(
    SCRIPTS.filter(elemento => !elemento.living).map(elemento => elemento.year)
)))

let total = 0, contador = 0
for(let script of SCRIPTS){
    if(script.living) {
        total += script.year
        contador += 1
    }
}

console.log(Math.round(total / contador))