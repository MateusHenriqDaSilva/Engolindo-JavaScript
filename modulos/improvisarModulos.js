const diaDaSemana = function(){
    const names = ["domingo", "segunda-feira", "terca-feira", "quarta-feira",
                     "quinta-feira","sexta-feira","sabado"]
        return {
            name(numero) {return names[numero]},
            numero(name){return names.indexOf(name)}
        }
}()

console.log(diaDaSemana.name(diaDaSemana.numero("domingo")))

