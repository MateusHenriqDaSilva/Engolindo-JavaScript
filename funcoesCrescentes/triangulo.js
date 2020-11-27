//criando triangulo
for(let i = '#'; i.length <= 7; i+='#'){
    console.log(i)
}
//criando Ola Mundo 

for(let i = 0; i < 100; i++) {
    if(i % 3 == 0) console.log('Ola')
    if(i % 5 == 0) console.log('Mundo')
    if(i % 3 == 0 && i % 5 == 0) console.log('Ola Mundo')
}

let caracter = ''
for(let coluna = 0; coluna <= 8; coluna++) {
    for(let linha = 0; linha <= 8; linha++){
        if ((linha + coluna) % 2 == 0) {
            caracter += '#'
        }else {
            caracter += ' '
        }
    }
    caracter += '\n'
}
console.log(caracter)