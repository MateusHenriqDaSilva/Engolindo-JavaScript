"use strict";

var idades = {
  mateus: 23,
  leliane: 27,
  julia: 33
};
console.log("Julia \xE9 ".concat(idades["julia"]));
console.log("jack se localiza em atividades adquiridas:", "jack" in idades);
console.log("\"A idade de toString \xE9 conhecida?", "toString" in idades);
console.log("toString" in Object.create(null));
var idades2 = new Map();
idades2.set('Diego', 39);
idades2.set('Pedro', 27);
idades2.set('Denner', 22);
console.log("Julia \xE9 ".concat(idades2.get("Julia")));
console.log("A idade de Jack \xE9 conhecida?", idades2.has("jack"));
console.log(idades2.has("toString"));