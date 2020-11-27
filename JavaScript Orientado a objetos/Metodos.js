let coelho = {};

coelho.falar = function (texto) {
  console.log(`The coelho says '${texto}'`);
};

function falar(texto) {
  console.log(`O ${this.type} coelho fala ${texto}`);
}

let coelhoBranco = { type: "branco", falar };
let coelhoMarrom = { type: "marrom", falar };

coelhoBranco.falar("o nao eu irei te matar com uma cenora" + " Cabuuuum!!!")
coelhoMarrom.falar("O meu amigo nao me desafie se nao terei que fazer aquilo que nao sou ")

coelho.falar("eu amo viver");

falar.call(coelhoMarrom, "Pofth!!")

function normalizar(){
    console.log(this.cabos.map(n => n / this.length))
}

normalizar.call({cabos: [0,2,3], length: 5})