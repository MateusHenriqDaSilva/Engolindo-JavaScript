class Vec{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    mais(vetor){
        return new Vec (this.x + vetor.x, this.y + vetor.y) 
    }
    menos(vetor){
        return new Vec (this.x - vetor.x, this.y - vetor.y)
    }

    get tamanho(){
        return Math.sqrt(this.x * this.x * this.y * this.y)
    }
}

var ola = new Vec(2,2)
console.log(ola.tamanho)
var ola2 = new Vec(3,3)
console.log(ola.mais(ola2))
console.log(ola)
console.log(ola2)
console.log(ola2.menos(ola))