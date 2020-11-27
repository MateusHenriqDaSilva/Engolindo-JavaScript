let arrays = [[1,2,3], [4,5,6], [6,7,8]]
// reduzindo array em um
console.log(arrays.reduce((juntandor, arrayAtual) => juntandor.concat(arrayAtual), []))

function meuLoop(iniciar, testar, atualizar,imcorpar){
    for( let valor = iniciar; testar(valor); valor = atualizar(valor)){
        imcorpar(valor)
    }
}

meuLoop(3, n => n > 0, n => n - 1, console.log);

function realizarTeste(array, teste){
    for( let elemento of array){
        if(!teste(elemento)) return false
    }
    return true
}

console.log(realizarTeste([2,4,16], n => n < 10))
