function contadorLetra(frase, letra = 'B'){
    let resultado = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra){
            resultado++
        }
    }
    return resultado
}

console.log(contadorLetra('mateus henrique', 'e'))