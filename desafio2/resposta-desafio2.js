"use strict";
// Como podemos melhorar o esse código usando TS? 
//1° Criando lista de constante usando o Enum
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Pedreiro"] = 1] = "Pedreiro";
    Trabalho[Trabalho["Eletricista"] = 2] = "Eletricista";
    Trabalho[Trabalho["Marceneiro"] = 3] = "Marceneiro";
    Trabalho[Trabalho["Paisagista"] = 4] = "Paisagista";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz,
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Trabalho.Eletricista,
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Paisagista,
};
let pessoa4 = {
    nome: "carlos",
    idade: 37,
    profissao: Trabalho.Marceneiro,
};
// Parte do adicional do projeto , criar campos para adicionar mais perfils e criar um menu lateral
// que mostra as opções que ja foram criadas
