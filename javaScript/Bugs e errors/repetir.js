class multiplicarUnitarioFracassado extends Error {}

function primitivaMulti(a,b){
    if (Math.random() < 0.2) {
        return a * b
    } else {
        throw new multiplicarUnitarioFracassado("klunk")
    }
}

function realizarMultiplicacao(a,b) {
    for(;;){
        try{
            return realizarMultiplicacao(a,b)
        } catch(e) {
            if(!(e instanceof multiplicarUnitarioFracassado))
                throw e
        }
    }
}

console.log(realizarMultiplicacao(8,8))

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}