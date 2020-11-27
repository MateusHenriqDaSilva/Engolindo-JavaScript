Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const lg = ['taco','fer','fallen','fnx','coldzera']

lg.forEach2(function(elemento, index) {
    console.log(index+1,elemento)
})