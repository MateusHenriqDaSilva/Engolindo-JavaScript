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


function map(array, teste) {
    let mapeado = []
    for( let elemento of array) {
        mapeado.push(teste(elemento))
    }
    return mapeado
}

let rtlScripts = SCRIPTS.filter(elemento => elemento.direction == "rtl");
console.log(map(rtlScripts, elemento => elemento.name))