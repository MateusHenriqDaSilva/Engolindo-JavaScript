function ultimoElemento(array){
    if(array.length == 0) {
        return { failed: true}
    } else {
        return { elemento: array[array.length - 1]}
    }
}

console.log(ultimoElemento([1,2,3,4,5]))