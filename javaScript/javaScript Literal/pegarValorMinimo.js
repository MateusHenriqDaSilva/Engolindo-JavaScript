function min(inicio, fim){
    const resultado = inicio < fim ? inicio :  fim
    return resultado
}
console.log(min(10,1))
console.log(min(1,10))