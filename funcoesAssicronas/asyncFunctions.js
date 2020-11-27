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