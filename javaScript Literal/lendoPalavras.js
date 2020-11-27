function contarLetra(frase,letra){
    let resultado = 0
    for(let i = 0; i < frase.length; i++){
         if(letra == frase[i]){
            resultado++
         }
    }
    return resultado
}

console.log(contarLetra("ola eu sou lindo e gostoso", "o"))