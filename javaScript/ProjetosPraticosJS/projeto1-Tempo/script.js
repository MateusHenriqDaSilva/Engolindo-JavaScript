const novoAno = `24 fevereiro 2021`;

const campoDias = document.getElementById("dias");
const campoHoras = document.getElementById("horas");
const campoMinutos = document.getElementById("minutos");
const campoSegundos = document.getElementById("segundos");

function contagemRegressiva() {
  const novoAnoData = new Date(novoAno);
  const correnteData = new Date();
  const totalSegundos = (novoAnoData - correnteData) / 1000;

  const dias = Math.floor(totalSegundos / 3600 / 24);
  const horas = Math.floor(totalSegundos / 3600) % 24;
  const minutos = Math.floor((totalSegundos / 60) % 60);
  const segundos = Math.floor(totalSegundos % 60);

  campoDias.innerHTML = dias;
  campoHoras.innerHTML = formatarTempo(horas);
  campoMinutos.innerHTML = formatarTempo(minutos);
  campoSegundos.innerHTML = formatarTempo(segundos);
}

function formatarTempo(tempo){
    return tempo < 10 ? (`0${tempo}`) : tempo
}
contagemRegressiva();
setInterval(contagemRegressiva, 1000);
//inicio contagem
