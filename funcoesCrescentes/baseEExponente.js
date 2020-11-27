const baseExpo = (base,exponente) => {
    let resultado = 1
    for(let contador = 1; contador <= exponente; contador++) {
        resultado *= base
    }
    return resultado
}

console.log(baseExpo(2,10))