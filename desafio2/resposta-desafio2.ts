// Como podemos melhorar o esse código usando TS? 


//1° Criando lista de constante usando o Enum

enum Trabalho {
    'Atriz',
    'Pedreiro',
    'Eletricista',
    'Marceneiro',
    'Paisagista'
}

//2° Criando Lista com tipo de variaveis personalizados
type Pessoas= {
    nome:string,
    idade:number,
    profissao:Trabalho
}


let pessoa1:Pessoas = {
nome: "Maria",
idade: 29,
profissao : Trabalho.Atriz,
};

let pessoa2:Pessoas = {
nome:"Roberto",
idade: 19,
profissao:Trabalho.Eletricista,
}


let pessoa3: Pessoas = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Paisagista,
};

let pessoa4: Pessoas = {
    nome :"carlos",
    idade : 37,
    profissao : Trabalho.Marceneiro,
};

// PArte do adicional do projeto , criar campos para adicionar mais perfils e criar um menu lateral
// que mostra as opções que ja foram criadas