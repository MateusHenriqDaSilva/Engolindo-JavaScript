for(let i=1; i <= 100; i++){
    let saida = ''
    if (i % 3 == 0) saida += 'Chocolate'
    if (i % 5 == 0) saida += 'Leite'
    console.log(saida || i)
}