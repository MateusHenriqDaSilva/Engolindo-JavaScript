// mostra o primeiro valor no index
console.log([1,2,3,4,5].indexOf(2)) // 1
// mostra o ultimo valor reptido se tiver 2 valor
console.log([1,2,3,2,5].lastIndexOf(2)) // 3
//pegar valor entre 2 e 4
console.log([1,2,3,4,5].slice(2, 4))
//pegar valor entre 2 e 4
console.log([1,2,3,4,5].slice(2))

//pegar valor entre 2 e 4
console.log([1,2,3,4,5].splice(4))

function remover(array, index){
    return array.slice(0, index).concat(array.slice(index + 1))
}

arrayTeste = ['a','b','c','d','e']
for(let contador = 0; contador < arrayTeste; contador++) {
    console.log(contador)
}

console.log(remover(arrayTeste, 3))

function max(...numeros){
    let resultado = -Infinity
    for(let numero of numeros) {
        if(numero > resultado) resultado = numero
    }
    return resultado
}

console.log(max(10,2,3,4,5,6))

let mundos = ['marte','jupiter', 'saturno']
console.log(['dolguldur', 'liverpol', ...mundos])

arrayLol = [1,2,3,5] 
function numericos(...numero) {
    console.log(numero)    
}
numericos(1,2,3,...arrayLol)

function ponteiroAleatorioDentroDoCirculo(radius){
    let angulo = Math.random() * 2 * Math.PI
    return {x: radius * Math.cos(angulo),y: radius * Math.sin(angulo)}
}
console.log(ponteiroAleatorioDentroDoCirculo(2))

console.log(Math.floor(Math.random() * 10))