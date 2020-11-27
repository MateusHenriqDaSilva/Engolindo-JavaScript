const soma = (valor1 , valor2) => {
    return valor1 + valor2
}

const multiplicar = (valor1, valor2) => {
    return valor1 * valor2
}

const dividir = (valor1, valor2) => {
    return valor1 / valor2
}

const subtrair = (valor1, valor2) => {
    return valor1 - valor2
}

const imprimirResultado = (valor1, valor2, operacao = soma) => {
    console.log(operacao(valor1, valor2))
}

imprimirResultado(5,5,multiplicar)
imprimirResultado(5,5,soma)
imprimirResultado(5,5,dividir)
imprimirResultado(5,5,subtrair)