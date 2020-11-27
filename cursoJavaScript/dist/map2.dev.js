"use strict";

var carrinho = ['{ "nome": "borracha", "preco": 3.45 }', '{ "nome": "Cderno", "preco": 13.90 }', '{ "nome": "kitLapis", "preco": 41.22 }', '{ "nome": "Caneta", "preco": 7.45 }']; // retornanr array apenas com os preco

var paraObj = function paraObj(json) {
  return JSON.parse(json);
};

var apenasPreco = function apenasPreco(produto) {
  return produto.preco;
}; //const apenasNome = (produto) => produto.nome


console.log(carrinho.map(paraObj).map(apenasPreco));
var valor = carrinho.map(function (obj) {
  return JSON.parse(obj);
});
var transformar = valor.map(function (elemento) {
  return elemento.nome;
});
console.log(transformar);