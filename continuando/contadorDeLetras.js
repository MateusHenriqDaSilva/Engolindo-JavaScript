function contarLetras(palavra, letra){
    const palavraTeste = palavra.toUpperCase()
    console.log(palavraTeste)
    let contarPalavra = 0
    for(let contador = 0; contador <= palavraTeste.length - 1; contador++) {
        if(palavra[contador] == letra){
            contarPalavra++
        }
    }
    return contarPalavra
}

console.log(contarLetras('diego da edi', 'd'))