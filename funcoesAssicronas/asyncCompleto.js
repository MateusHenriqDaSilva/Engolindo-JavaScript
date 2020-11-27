const carvalhoGrande = require("./crow-tech").bigOak;
carvalhoGrande.readStorage("food caches", (caches) => {
  let primeiroCache = caches[0];
  carvalhoGrande.readStorage(primeiroCache, (info) => {
    console.log(info);
  });
});
carvalhoGrande.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("nota entregue.")
);
const { defineRequestType, bigOak } = require("./crow-tech");
defineRequestType("note", (ninho, conteudo, fonte, feito) => {
  console.log(`${ninho.name} recebendo nota: ${conteudo}`);
  done();
});

let quinze = Promise.resolve(15);
quinze.then((valor) => console.log(`valor: ${valor}`));
// → Got 15

function storage(ninho, name) {
  return new Promise((resolve) => {
    ninho.readStorage(name, (resultado) => resolve(resultado));
  });
}
storage(carvalhoGrande, "anonimos").then((valor) =>
  console.log("valor:", valor)
);

new Promise((_, reject) => reject(new Error("Fail")))
  .then((valor) => console.log("manipular 1"))
  .catch((razao) => {
    console.log("pegando falha " + razao);
    return "nada";
  })
  .then((valor) => console.log("manipular 2", valor));
// → Caught falha Error: Fail
// → manipular 2 nada

class Timeout extends Error {}
function request(ninho, alvo, type, conteudo) {
  return new Promise((resolve, reject) => {
    let feito = false;
    function attempt(n) {
      ninho.send(alvo, type, conteudo, (fracassou, valor) => {
        feito = true;
        if (fracassou) reject(fracassou);
        else resolve(valor);
      });
      setTimeout(() => {
        if (feito) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}

function requestType(name, manipular) {
  defineRequestType(name, (ninho, conteudo, fonte, callback) => {
    try {
      Promise.resolve(manipular(ninho, conteudo, fonte)).then(
        (resposta) => callback(null, resposta),
        (falha) => callback(falha)
      );
    } catch (exception) {
      callback(exception);
    }
  });
}

requestType("ping", () => "pong");
function availableNeighbors(ninho) {
  let requests = ninho.neighbors.map((neighbor) => {
    return request(ninho, neighbor, "ping").then(
      () => true,
      () => false
    );
  });
  return Promise.all(requests).then((resultado) => {
    return ninho.neighbors.filter((_, i) => resultado[i]);
  });
}

const { everywhere } = require("./crow-tech");
everywhere((ninho) => {
  ninho.state.fofocas = [];
});
function sendfofocas(ninho, message, exetoPara = null) {
  ninho.state.fofocas.push(message);
  for (let neighbor of ninho.neighbors) {
    if (neighbor == exetoPara) continue;
    request(ninho, neighbor, "fofocas", message);
  }
}
requestType("fofocas", (ninho, message, fonte) => {
  if (ninho.state.fofocas.includes(message)) return;
  console.log(`${ninho.name} received fofocas '${message}' from ${fonte}`);
  sendfofocas(ninho, message, fonte);
});

requestType("connections", (ninho, { name, neighbors }, fonte) => {
  let connections = ninho.state.connections;
  if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors))
    return;
  connections.set(name, neighbors);
  broadcastConnections(ninho, name, fonte);
});
function broadcastConnections(ninho, name, exetoPara = null) {
  for (let neighbor of ninho.neighbors) {
    if (neighbor == exetoPara) continue;
    request(ninho, neighbor, "connections", {
      name,
      neighbors: ninho.state.connections.get(name),
    });
  }
}
everywhere((ninho) => {
  ninho.state.connections = new Map();
  ninho.state.connections.set(ninho.name, ninho.neighbors);
  broadcastConnections(ninho, ninho.name);
});

function findRoute(de, para, connections) {
  let trabalhar = [{ em: de, via: null }];
  for (let i = 0; i < trabalhar.length; i++) {
    let { em, via } = trabalhar[i];
    for (let proximo of connections.get(em) || []) {
      if (proximo == 0) return via;
      if (!trabalhar.some((w) => w.at == proximo)) {
        trabalhar.push({ em: proximo, via: via || proximo });
      }
    }
  }
  return null;
}

function routeRequest(ninho, alvo, tipo, conteudo) {
  if (ninho.neighbors.includes(alvo)) {
    return request(ninho, alvo, tipo, conteudo);
  } else {
    let via = findRoute(ninho.name, alvo, ninho.state.connections);
    if (!via) throw new Error(`nao encontramos a rota ${alvo}`);
    return request(ninho, via, "route", (alvo, tipo, conteudo));
  }
}

requestType("route", (ninho, { alvo, tipo, conteudo }) => {
  return routeRequest(ninho, alvo, tipo, conteudo);
});

function findInStorage(ninho, name) {
  return storage(ninho, name).then((found) => {
    if (found != null) return found;
    else return findInRemoteStorage(ninho, name);
  });
}
function network(ninho) {
  return Array.from(ninho.state.connections.keys());
}

function findInRemoteStorage(ninho, name) {
  let fontes = network(ninho).filter((n) => n != ninho.name);
  function next() {
    if (fontes.length == 0) {
      return Promise.reject(new Error("Not Found"));
    } else {
      let fonte = fontes[Math.floor(Math.random() * fontes.length)];
      fontes = fontes.filter((n) => n != fonte);
      return routeRequest(ninho, fonte, "storage", name).then(
        (value) => (value != null ? value : next()),
        next
      );
    }
  }
  return next();
}

async function findInStorage(ninho, name) {
  let local = await storage(ninho, name);
  if (local != null) return local;

  let fontes = network(ninho).filter((n) => n != ninho.name);
  while (fontes.length > 0) {
    let fonte = fontes[Math.floor(Math.random() * fontes.length)];
    fontes = fontes.filter((n) => n != fonte);
    try {
      let found = await routeRequest(ninho, fonte, "storage", name);
      if (found != null) return found;
    } catch (_) {}
  }
  throw new Error("nao encontrado");
}

function* powers(n) {
  for (let corrente = n; ; corrente *= n) {
    yield corrente;
  }
}
for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}

let inicio = Date.now();
setTimeout(() => {
  console.log("minuto aqui em", Date.now() - inicio);
}, 20);
while (Date.now() < inicio + 50) {}
console.log("tempo desperdicado ate", Date.now() - inicio);

Promise.resolve("fim").then(console.log);
console.log("minha primeira!");

function qualquerArmazenamento(ninho, fonte, name) {
  if (fonte == ninho.name) return storage(ninho, name);
  else return routeRequest(ninho, fonte, "storage", name);
}

async function filhotes(ninho, ano) {
  let list = "";
  await Promise.all(
    network(ninho).map(async (name) => {
      list += `${name}: ${await qualquerArmazenamento(
        ninho,
        name,
        `filhotes em ${ano}`
      )}\n`;
    })
  );
  return list;
}

async function filhotes(ninho, ano) {
  let lines = network(ninho).map(async (name) => {
    return name + ": " + (await qualquerArmazenamento(ninho, name, `chicks in ${ano}`));
  });
  return (await Promise.all(lines)).join("\n");
}

async function localizarBisturi(ninho){
  let corrent = ninho.name
  for(;;) {
    let proximo = await qualquerArmazenamento(ninho, corrent, "bisturi")
    if(proximo == corrent) return corrent
    corrent = proximo
  }
}

function localizarBisturi2(ninho){
  function loop(corrent) {
    return qualquerArmazenamento(ninho, corrent, "bisturi").then(proximo => {
      if(proximo == corrent) return corrent
      else return loop(proximo)
    })
  }
  return loop(ninho.name)
}

localizarBisturi(bigOak).then(console.log)
localizarBisturi2(bigOak).then(console.log)