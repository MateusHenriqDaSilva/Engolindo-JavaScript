function distancia(min, max) {
    const numero1 = (max === undefined) ? '1': min
    const numero2 = (max === undefined) ?  min: max
    if(numero1 < numero2) {
        for(let contador = numero1; contador <= numero2; contador++){
            console.log(contador)
        }
    }else {
        for(let contador = numero1; contador >= numero2; contador--){
            console.log(contador)
        }
    }
}

distancia(3,1)