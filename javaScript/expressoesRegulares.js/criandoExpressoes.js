let re1 = new RegExp("abc");
console.log(re1);
let re2 = /abc/;
console.log(re2);
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus);

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0,1,2,3,4,5,6,7,8,9]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

let data = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(data.test("01-02-2003 15:20"));
console.log(data.test("30-jan-2008 15:30"));

let valorBinario = /[^01]/;
console.log(valorBinario.test("1100100010100110"));
console.log(valorBinario.test("1100100010200110"));

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
let data2 = /\d{1,2}-\d{1,2}-\d{4} \d{1}:\d{2}/;
console.log(data2.test("1-30-2004 9:03"));

let cartasDePapel = /boo+(hoo+)+/i;
console.log(cartasDePapel.test("bohohohohoho"));

let partida1 = /\d+/.exec("one two 100");
console.log(partida1);
console.log(partida1.index);
console.log("one two 100".match(/\d+/));

let textoCitado = /'([^']*)'/;
console.log(textoCitado.exec("a saida eh 'Ola'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

console.log(new Date());
console.log(new Date(2011, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 990));

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
let animalContagem = /\b\d+ (porco|vaca|galinha)s?\b/;
console.log(animalContagem.test("15 porcos"));
console.log(animalContagem.test("15 porcogalinha"));
// → false
console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));
console.log(
  "Henrique, Mateus\n\nLeliane Silva\n".replace(/(\w+), (\w+)/g, "$2 $1")
);

let s = "a cia ou o fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs
function comentariosDeTira(codigo) {
  return codigo.replace(/\/\/.*|\/\*[^]*\//g, "");
}
console.log(comentariosDeTira("1 + /* 2 */3"));
console.log(comentariosDeTira("x = 10;// dez! "));
console.log(comentariosDeTira("1 /* a */+/* b */ 1"));

let name1 = "mateus";
let text1 = "eu sou o mateus henrique filho de deus";
let regexp1 = new RegExp("\\b(" + name1 + ")\\b", "gi");
console.log(text1.replace(regexp1, "_$1_"));

let name = "dea+hl[]rd";
let text = "esse dea+hl[]rd menino e super anormal";
let escapar = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escapar + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
console.log("    word".search(/\S/));
console.log("    ".search(/\S/));

let padrao = /y/g;
padrao.lastIndex = 3;
let partida = padrao.exec("xyzzy");
console.log(partida.index);
console.log(padrao.lastIndex);

let global1 = /abc/g;
console.log(global1.exec("xyz abc"));
let pegajozo = /abc/y;
console.log(pegajozo.exec("xyz abc"));

let digit = /\d/g;
console.log(digit.exec("aqui e: 1"));
console.log(digit.exec("e voce: 1"));

console.log("Banana".match(/an/g));
// → ["an", "an"]

let input = "uma string com tres numeros aqui... 42 e 88";
let numero = /\b\d+\b/g;
let match;
while ((match = numero.exec(input))) {
  console.log("nao achamos", match[0], "nem", match.index);
}

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach((line) => {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}
console.log(
  parseINI(`
  name=Vasilis
  [address]
  city=Tessaloniki`)
);
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
