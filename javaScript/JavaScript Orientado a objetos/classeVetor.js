class Vec {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    adicionar(outro){
        return new Vec(this.x + outro.x, this.y + outro.y)
    }

    remover(outro){
        return new Vec(this.x - outro.x, this.y - outro.y)
    }

    get tamanho(){
        return Math.sqrt(this.x * this.x * this.y * this.y)
    }
}

console.log(new Vec(1, 2).adicionar(new Vec(2, 3)));
console.log(new Vec(3, 4).tamanho);
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).remover(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).tamanho);