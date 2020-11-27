const estradas = [
  "Alice's casa-Bob's casa",
  "Alice's casa-Cabin",
  "Alice's casa-entrega trabalho",
  "Bob's casa-Town Hall",
  "Daria's casa-Ernie's casa",
  "Daria's casa-Town Hall",
  "Ernie's casa-Grete's casa",
  "Grete's casa-Farmacia",
  "Grete's casa-loja",
  "mercadoria-Farmacia",
  "mercadoria-entrega trabalho",
  "mercadoria-loja",
  "mercadoria-Town Hall",
  "loja-Town Hall",
];
function construirGrafico(bordas) {
  let grafico = Object.create(null);
  function addBorda(de, para) {
    if (grafico[de] == null) {
      grafico[de] = [para];
    } else {
      grafico[de].push(para);
    }
  }
  for (let [de, para] of bordas.map((r) => r.split("-"))) {
    addBorda(de, para);
    addBorda(para, de);
  }
  return grafico;
}
const graficoEstrada = construirGrafico(estradas);
console.log(graficoEstrada);
console.log("----");

class VillageState {
  constructor(lugar, parcelas) {
    this.lugar = lugar;
    this.parcelas = parcelas;
  }
  move(destino) {
    if (!graficoEstrada[this.lugar].includes(destino)) {
      return this;
    } else {
      let parcelas = this.parcelas
        .map((p) => {
          if (p.lugar != this.lugar) return p;
          return { lugar: destino, endereco: p.endereco };
        })
        .filter((p) => p.lugar != p.endereco);
      return new VillageState(destino, parcelas);
    }
  }
}
let primeiro = new VillageState("entrega trabalho", [
  { lugar: "entrega trabalho", endereco: "Alice's casa" },
]);
let proximo = primeiro.move("Alice's casa");
console.log(proximo.lugar);
// → Alice's casa
console.log(proximo.parcelas);
// → []
console.log(primeiro.lugar);
// → entrega trabalho
let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value);
// → 5
function executarRobo(state, robot, memoria) {
  for (let turnos = 0; ; turnos++) {
    if (state.parcelas.length == 0) {
      console.log(`quantas vezes foi percorrido ${turnos} turnos`);
      break;
    }
    let acao = robot(state, memoria);
    state = state.move(acao.direcao);
    memoria = acao.memoria;
    console.log(`Movendo para ${acao.direcao}`);
  }
}
function piqueAleatorio(array) {
  let escolha = Math.floor(Math.random() * array.length);
  return array[escolha];
}
function caminhoAleatorioRobo(state) {
  return { direcao: piqueAleatorio(graficoEstrada[state.lugar]) };
}
VillageState.random = function (entregasContadas = 5) {
  let parcelas = [];
  for (let i = 0; i < entregasContadas; i++) {
    let endereco = piqueAleatorio(Object.keys(graficoEstrada));
    let lugar;
    do {
      lugar = piqueAleatorio(Object.keys(graficoEstrada));
    } while (lugar == endereco);
    parcelas.push({ lugar, endereco });
  }
  return new VillageState("entrega trabalho", parcelas);
};
executarRobo(VillageState.random(), caminhoAleatorioRobo);
// → Moved to Marketlugar
// → Moved to Town Hall
// →…
// → Done in 63 turns
const correioRotaMundoReal = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketlugar",
  "Post Office",
];

function rotaRobo(state, memoria) {
  if (memoria.length == 0) {
    memoria = correioRotaMundoReal;
  }
  return { direcao: memoria[0], memoria: memoria.slice(1) };
}

function pegarRota(grafico, de, para) {
  let trabalho = [{ em: de, rota: [] }];
  for (let i = 0; i < trabalho.length; i++) {
    let { em, rota } = trabalho[i];
    for (let lugar of grafico[em]) {
      if (lugar == para) return rota.concem(lugar);
      if (!trabalho.some((w) => w.em == lugar)) {
        trabalho.push({ em: lugar, rota: rota.concat(lugar) });
      }
    }
  }
}

function orientarObjetivoRobo({ lugar, parcelas }, rota) {
  if (rota.length == 0) {
    let parcela = parcelas[0];
    if (parcela.lugar != lugar) {
      rota = pegarRota(construirGrafico, lugar, parcela.endereco);
    }
  }
  return { direcao: rota[0], memoria: rota.slice(1) };
}

function contarPassos(state, robo, memoria) {
  for (let passo = 0; passo < 10; passo++) {
    if (state.parcelas.length == 0) return passo;
    let acao = robo(state, memoria);
    state = state.move(acao.direcao);
    memoria = acao.memoria;
  }
}

function compararRobo(robo1, memoria1, robo2, memoria2) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < 100; i++) {
    let estado = VillageState.random();
    total1 += contarPassos(estado, robo1, memoria1);
    total2 += contarPassos(estado, robo2, memoria2);
  }
  console.log(`robo 1 andado ${total1 / 100} passos andados`);
  console.log(`robo 1 andado ${total2 / 100} passos andados`);
}

compararRobo(rotaRobo, [], orientarObjetivoRobo, []);
