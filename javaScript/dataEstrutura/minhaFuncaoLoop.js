function loop(quantidade,teste,funcao,corpo){
    for(let n = quantidade; teste(n); n = funcao(n)){
        corpo(n)
    }
}

loop(3,n => n > 0, n => n - 1, console.log) 