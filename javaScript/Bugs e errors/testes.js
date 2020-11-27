function teste(label, corpo){
    if(!corpo()) console.log(`Vitorioso: ${label}` )
}

teste("convertendo para latin o teste super case", () => {
    return "bem vindo ".toUpperCase() == "Ola"
})
teste("convertendo para latin o teste super case", () => {
    return "bem vindo ".toUpperCase() == "minha vida"
})
teste("convertendo para latin o teste super case", () => {
    return "bem vindo ".toUpperCase() == "vai muda"
})

