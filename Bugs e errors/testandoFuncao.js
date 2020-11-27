function comandoDeNumero(questao                                                                                                 ){
    let resultado = Number(questao)
    if (Number.isNaN(resultado)) return null
    else return resultado
}

console.log(comandoDeNumero("como todos devem ser?"))

