
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// 1° Resposta

let employee1 = {
    code: 10,
    name: "John",
};


// 2° Resposta
let employee2: {code: number, name: string} = {
    code: 10,
    name:'John',

};

// 3° e 4° Resposta

// 3° Resposta - 1° Forma
interface employee{
    code:number,
    name:string,
    email?:string,
    phone?:number,


};

let employee3 = {} as employee;
employee3.code = 10,
employee3.name = 'John';

// 4° Resposta - 2° Forma
let employee4: employee = {
    code:10,
    name:'John',

}

//5° Resposta - Aplicação dos conceitos

const codigo = document.getElementById('codigoFuncionario') as HTMLInputElement;
const nome = document.getElementById('nomeFuncionario') as HTMLInputElement;
const email = document.getElementById('emailFuncionario')as HTMLInputElement;
const phone = document.getElementById('phoneFuncionario')as HTMLInputElement;

const enviar = document.getElementById('enviar');
const lista = document.getElementById('list');

if(enviar){
    enviar.addEventListener('click',()=>{

        if(codigo && nome && email && phone ){
            cadastraFuncionario(Number(codigo.value),nome.value,email.value,Number(phone.value));

        }

    });
}

function cadastraFuncionario(codigo:number,nome:string, email:string,phone:number){
    console.log('Olaaa');

    const novoFuncionario = document.createElement('li');

    const codFunc = document.createTextNode(`código:${codigo}; nome: ${nome}; email: ${email}; phone: ${phone}`);
    // const codFunc = document.createTextNode(codigo.toString());
    // const nomeFunc = document.createTextNode(nome);
    // const emailFunc = document.createTextNode(email);
    // const phoneFunc = document.createTextNode(phone.toString());
    lista?.appendChild(novoFuncionario);

    novoFuncionario.appendChild(codFunc);
    // novoFuncionario.appendChild(nomeFunc);
    // novoFuncionario.appendChild(emailFunc);
    // novoFuncionario.appendChild(phoneFunc);
    






    
}
