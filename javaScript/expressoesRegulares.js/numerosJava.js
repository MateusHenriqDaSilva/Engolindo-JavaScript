let numero = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.","1.3e2", "1E-4", "1e+12"]) {
    if(!numero.test(str)) {
        console.log(`fracassado a partida '${str}'`)
    }
}

for(let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",".5.", "1f5", "."]) {
    if(numero.test(str)) {
        console.log(`incorreto mais aceitavel '${str}'`)
    }
}
