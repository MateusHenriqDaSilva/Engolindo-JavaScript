const { bigOak } = require("./crow-tech");

let quinze = Promise.resolve(15);
quinze.then(value => console.log(`valor: ${value}`));

function reservatorio(ninho, name) {
    return new Promise(resolver => {
        ninho.readStorage(name, resultado => resolver(resultado))
    })
}

reservatorio(bigOak, "enemies").then(valor => console.log("valor: ", valor))