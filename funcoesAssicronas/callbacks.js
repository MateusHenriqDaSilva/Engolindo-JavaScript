var carvalhoGrande = require("./crow-tech").bigOak;

carvalhoGrande.readStorage("food caches", caches => {
  let primeiroEsconderijo = caches[0];
  carvalhoGrande.readStorage(primeiroEsconderijo, info => {
    console.log(info);
  });
});

carvalhoGrande.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
() => console.log("Note delivered."));

var defineRequestType = require("./crow-tech").defineRequestType;

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} recebendo nota: ${content}`)
  done()
}) 