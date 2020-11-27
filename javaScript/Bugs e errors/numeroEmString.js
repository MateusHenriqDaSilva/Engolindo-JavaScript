function numeroParaString(n, base = 10){
    let resultado = "", sign=""
    if (n < 0) {
        sign = "-"
        n = -n
    }
    do {
        resultado = String(n % base) + resultado
        n /= base
    } while (n > 0)
    return sign = resultado
}

console.log(numeroParaString(13,10))