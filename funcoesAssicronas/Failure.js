new Promise((_, rejeitar) => rejeitar(new Error("fracassou")))
    .then(valor => console.log("manipulador 1"))
    .catch(razao => {
        console.log("falha capturada", + razao)
        return "nenhum valor"
    })
    .then(valor => console.log("nada", valor))