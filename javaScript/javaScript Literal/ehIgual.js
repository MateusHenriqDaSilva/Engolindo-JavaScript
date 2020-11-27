function ehIgual(valorA, valorB) {
  if (valorA === valorB) return true;

  if(valorA == null || typeof valorA != "object" 
    || valorB == null || typeof valorB != "object") return false

    let keysA = Object.keys(valorA), keysB = Object.keys(valorB)

    if(keysA.length != keysB.length) return false

    for(let key of keysA){
        if(!keysB.includes(key) || !ehIgual(valorA[key], valorB[key])) return false
    }
    return true
}

let obj = { ola: { sou: "mateus" }, objeto: 1 };
console.log(ehIgual(obj, obj));
console.log(ehIgual(obj, { ola: 1, objeto: 1 }));
console.log(ehIgual(obj, { ola: { sou: "mateus" }, objeto: 1 }));
