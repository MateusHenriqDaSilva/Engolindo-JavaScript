function converterArrayParaLista(array){
    let lista = null
    for(let i = array.length -1; i >= 0; i--){
        lista = {value: array[i], resto: lista}
    }
    return lista
}
console.log(converterArrayParaLista([1,2,3]))

function converterListaParaArray(lista){
    array = []
    for(let node = lista; node; node = node.resto){
        array.push(node.value)
    }
    return array
}
console.log(converterListaParaArray(converterArrayParaLista([1,2,3])))

function preceder(valor, lista){        
    return {valor, resto: lista}
}

console.log(preceder(10, preceder(20 , null)));

function nth(lista, n){
    if(!lista) return undefined
    else if(n == 0) return lista.value
    else return nth(lista.resto, n-1)
}

console.log(nth(converterArrayParaLista([1,2,3]), 1))