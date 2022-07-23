"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// 1° Resposta
let employee1 = {
    code: 10,
    name: "John",
};
// 2° Resposta
let employee2 = {
    code: 10,
    name: 'John',
};
;
let employee3 = {};
employee3.code = 10,
    employee3.name = 'John';
// 4° Resposta - 2° Forma
let employee4 = {
    code: 10,
    name: 'John',
    hiring_date: new Date(1995, 8, 1),
};
console.log(employee4.hiring_date);
