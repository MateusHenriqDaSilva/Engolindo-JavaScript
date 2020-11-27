const SCRIPTS = require("./script")

function filtrar(array, teste){
    let arrayFiltrado = []
    for( let elemento of array) {
        if(teste(elemento)) {
            arrayFiltrado.push(elemento)
        }
    }
    return arrayFiltrado
}

console.log(filtrar(SCRIPTS, script => script.living))