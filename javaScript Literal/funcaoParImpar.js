function parImpar(num){
    resultado = false
    if(num % 2 == 0){
        resultado = true
    }else{
        resultado = false
    }
    return resultado
}

console.log(parImpar(-11))