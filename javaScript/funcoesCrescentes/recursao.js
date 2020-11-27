function exponeneteBase(base,exponente){
    if(exponente == 0){
        return 1
    }else {
        console.log(exponente)
        return base * exponeneteBase(base, exponente - 1)
    }
}
console.log(exponeneteBase(2,3))

function pegarSolucao(alvo){
    function pegar(acumulador, historia) {
        if( acumulador == alvo){
            return historia
        } else if (acumulador > alvo){
            return null
        } else {
            return pegar(acumulador + 5, `(${historia} + 5)`) || 
                    pegar(acumulador * 3, `(${historia} * 3)`)
        }
    }
    return pegar(1, "1")
}
console.log(pegarSolucao(24))