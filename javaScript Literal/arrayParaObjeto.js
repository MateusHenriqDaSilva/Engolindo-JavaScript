array = [ 1, 2, 3]

function arrayParaObjeto(array){
    let lista = {}
    for(let i = array.length -1; i >= 0 ; i--){
        lista = {value: array[i], rest: lista} 
    }
    return lista
}

function listaParaArray(lista){
    let array = []
    for(let noLista = lista; noLista; noLista = noLista.rest){
        array.push(noLista.value)
    }
    return array
}

console.log(arrayParaObjeto(array))
console.log(listaParaArray(arrayParaObjeto(array)))