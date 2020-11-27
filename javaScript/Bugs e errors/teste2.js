function test(label, body){
    if(!body()) console.log(`Fracassado: ${label}`)
}

test("convertendo texto em teste1", () => {
    return "ola".toUpperCase() == "ola"
})

test("convertendo texto para teste2", () => {
    return "xaipette".toUpperCase() == "xaipette"
})
test("nao converta para character", () => {
    return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷"
})