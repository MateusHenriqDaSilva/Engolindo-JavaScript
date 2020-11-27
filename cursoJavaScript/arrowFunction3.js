let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('com arrow')
let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
