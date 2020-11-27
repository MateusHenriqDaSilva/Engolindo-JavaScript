const objetoDeIngredientes = (receitaPara) => {
  const ingrediente = (quantidade, forma, nome) => {
    let quantidaderDeIngrediente = quantidade * receitaPara;
    if(quantidaderDeIngrediente > 1) {
        forma += "s"
    }
    console.log(`${quantidaderDeIngrediente} ${forma} ${nome}` )
  };
  ingrediente(1, "copo","farinha")
  ingrediente(0.25, "colher","limao")
  ingrediente(2, "caneca","limao")
  ingrediente(0.25, "caneca","acucar")
  ingrediente(1, "copo","queijo")
  ingrediente(1, "copo","beterraba")
};

objetoDeIngredientes(2)