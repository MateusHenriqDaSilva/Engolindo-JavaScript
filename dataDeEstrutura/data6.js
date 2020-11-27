
 function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

console.log(phi([76,9,4,1]))

let {name: nome} = {name: "Faraji", age: 23};
let {age: idade} = {name: "Faraji", age: 23};
console.log(nome)
console.log(idade)

const obj = {
    "feliz": true,
    "nome": ['mateus','ana']
}

let json = JSON.stringify(obj)
console.log(json)

console.log(JSON.parse(json).nome)

