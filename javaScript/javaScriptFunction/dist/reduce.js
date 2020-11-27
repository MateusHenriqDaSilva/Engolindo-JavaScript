const numeros = [1,2,3,4,5,6]

console.log(numeros.reduce((acumulador,elemento) => {
    return acumulador + elemento 
}))

console.log(numeros.reduce((acumulador, elemento, indice, array) => {
    const resultado = acumulador + elemento
    if(indice === array.length - 1) {
       return (acumulador + elemento) / array.length
    }else {
        return acumulador + elemento
    }

}))