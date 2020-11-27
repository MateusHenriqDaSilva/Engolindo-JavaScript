// function soma(array){
//     let resultado = 0
//     array.reduce((acumulador, elemento) => {
//        return resultado = acumulador + elemento
//     })
//     return resultado
// }

function soma(valores){
    let resultado = 0     
    for(let valor of valores) {
        resultado += valor 
    }
    return resultado
}

function distancia(min, max, passos = 1) {
    let array = []
    let valor1 = max === undefined ? 1 : min
    let valor2 = max == undefined ? min : max

    if(valor1 < valor2) {
        for(let contador = valor1; contador <= valor2; contador += passos) {
            array.push(contador)
        }
    }else {
        for(let contador = valor1; contador >= valor2; contador -= passos) {
            array.push(contador)
        }
    }
    return array
}
console.log(distancia(1,10,2))
console.log(soma(distancia(6)))

//invertendo array
function revertendoArray(array){
    let reversoArray = []
    for(let contador = array.length - 1; contador >= 0; contador--) {
        reversoArray.push(array[contador])
    }
    return reversoArray
}
console.log(revertendoArray(['a','b','c']))

//array para lista
function arrayLista(array){
    let obj = null
    for(let contador = array.length - 1; contador >= 0; contador--) {
        obj = {value:array[contador], rest:obj}
    }
    return obj
}

console.log(arrayLista([10,20,30 ]))

//lista para array
console.log('lista para array')
function listaArray(obj) {
    let array = []
    for (let contador = obj; contador; contador = contador.rest) {
        array.push(contador.value) 
    }
    return array
}
console.log(listaArray({value:10, rest:{value: 20, rest: 0}}))
console.log(listaArray(arrayLista([10,20,30])))

function adicionarValor(valor, lista){
    return { valor, rest: lista}    
}

console.log(adicionarValor(1, {value:10, rest:{value: 20, rest: 0}}))

function nth(lista, n){
    if(!lista) return undefined
    else if(n == 0) return lista.value
    else return nth(lista.rest, n -1)
}

console.log(nth(arrayLista([10, 20, 30]), 1));