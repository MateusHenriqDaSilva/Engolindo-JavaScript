function arrayReverse(valor){
    let reversao = []
    for(let contador = valor.length-1; contador >= 0; contador--){
        reversao.push(valor[contador])
    }
    return reversao
}
console.log(arrayReverse(['l','e','l','i','a','n','e']))

let arrayTeste = [1,2,3,4,5,6]
function arrayReverseNaVariavel(valor){
    for(let contador = 0; contador < Math.floor(valor.length / 2); contador++){
        let valorVelho = valor[contador]
        valor[contador] = valor[valor.length - 1 - contador]
        valor[valor.length - 1 - contador] = valorVelho
    }
    return valor
}
arrayReverseNaVariavel(arrayTeste)
console.log(arrayTeste)