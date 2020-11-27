function funcaoRange(min, max, variedade = min < max ? 1 : -1){
    resultado = []
    if(variedade > 0){
        for(let contador = min; contador <= max; contador+= variedade){
            resultado.push(contador)
        }
    } else {
        for(let contador = min; contador >= max; contador+= variedade){
            resultado.push(contador)
        }
    }
    return resultado
}
function soma(num){
    let total = 0
    for(let valor of num){
        total += valor
    }
    return total
}
console.log(soma(funcaoRange(1,10)))