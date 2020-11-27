"use strict";

var novoAno = "24 fevereiro 2021";
var campoDias = document.getElementById("dias");
var campoHoras = document.getElementById("horas");
var campoMinutos = document.getElementById("minutos");
var campoSegundos = document.getElementById("segundos");

function contagemRegressiva() {
  var novoAnoData = new Date(novoAno);
  var correnteData = new Date();
  var totalSegundos = (novoAnoData - correnteData) / 1000;
  var dias = Math.floor(totalSegundos / 3600 / 24);
  var horas = Math.floor(totalSegundos / 3600) % 24;
  var minutos = Math.floor(totalSegundos / 60 % 60);
  var segundos = Math.floor(totalSegundos % 60);
  campoDias.innerHTML = dias;
  campoHoras.innerHTML = formatarTempo(horas);
  campoMinutos.innerHTML = formatarTempo(minutos);
  campoSegundos.innerHTML = formatarTempo(segundos);
}

function formatarTempo(tempo) {
  return tempo < 10 ? "0".concat(tempo) : tempo;
}

contagemRegressiva();
setInterval(contagemRegressiva, 1000); //inicio contagem