const numeroSenha = documento.querySelector('parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letraMinuscula ='abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '!@%*?';
const botoes = documento.querySelectoAll('.parametro-senha_botao');
const campoSenha = document.querySelector('campo-senha');
const checkbox = document. querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuioTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha >1){


       tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha <20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
