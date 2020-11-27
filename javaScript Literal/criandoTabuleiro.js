let resultado = ""
let tamanho = 8
for(let x=0; x < tamanho; x++){
    for(let y=0; y < tamanho; y++){
        if((y + x) % 2 == 0){
           resultado += ' '
        } else {
            resultado += '#'
        }
        if(x == 3 && y == 3){
            console.log(x, y)
        }
    }
    resultado += "\n"
}

console.log(resultado)