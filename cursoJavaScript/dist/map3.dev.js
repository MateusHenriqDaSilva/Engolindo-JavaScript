"use strict";

Array.prototype.map2 = function (callback) {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

var carrinho = ['{ "nome": "borracha", "preco": 3.45 }', '{ "nome": "Cderno", "preco": 13.90 }', '{ "nome": "kitLapis", "preco": 41.22 }', '{ "nome": "Caneta", "preco": 7.45 }']; // retornanr array apenas com os preco

var paraObj = function paraObj(json) {
  return JSON.parse(json);
};

var apenasPreco = function apenasPreco(produto) {
  return produto.preco;
}; //const apenasNome = (produto) => produto.nome


console.log(carrinho.map2(paraObj).map2(apenasPreco));
var valor = carrinho.map2(function (obj) {
  return JSON.parse(obj);
});
var transformar = valor.map2(function (elemento) {
  return elemento.nome;
});
console.log(transformar);