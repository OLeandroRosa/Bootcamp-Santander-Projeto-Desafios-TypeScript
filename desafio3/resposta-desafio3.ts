// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

// export {} // Para não reclamar de variáveis duplicadas


let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') ;

if(campoSaldo){
    campoSaldo.innerHTML = '0';
}

function somarAoSaldo(soma:number) {
    if(campoSaldo){
        let valor_saldo =  Number(campoSaldo.innerHTML);
        valor_saldo += soma;
        campoSaldo.innerHTML = valor_saldo.toString();
    }

}

function limparSaldo() {
    if(campoSaldo){
        campoSaldo.innerHTML = '';
    }
}
if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        if(soma){
        somarAoSaldo(Number(soma.value));
        }
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}