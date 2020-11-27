function mostrarInventorioFazenda(vacas, galinhas){
    let vacaString = String(vacas)
    while(vacaString.length < 3){
        vacaString = "0" + vacaString 
    }
    console.log(`${vacaString} vaca`)
    let galinhaString = String(galinhas)
    while(galinhaString.length < 3) {
        galinhaString = "0" + galinhaString
    }
    console.log(`${galinhaString} galinhas`)
}

mostrarInventorioFazenda(7,11)