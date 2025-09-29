/*
    Switch - Uma estrutura de controle que pode ser uma boa alternativa ao de uso de vários if{} else if {} 
*/

let dia;
const mensagem = document.getElementById("mensagem");
dia = 6;

switch (dia) {
    case 1:
        mensagem.textContent = `Hoje é domingo`;
        break;
    case 2:
        mensagem.textContent = `Hoje é segunda`;
        break;
    case 3:
        mensagem.textContent = `Hoje é terça`;
        break;
    case 4:
        mensagem.textContent = `Hoje é quarta`;
        break;
    case 5:
        mensagem.textContent = `Hoje é quinta`;
        break;
    case 6:
        mensagem.textContent = `Hoje é sexta`;
        break;
    case 7:
        mensagem.textContent = `Hoje é sábado`;
        break;
    default:
        mensagem.textContent = `${dia} não é um dia da semana`;
        break;
}

// Caso não tenha os breaks os códigos do case de baixo vão ser executados também
/*
É possível usar o switch com o parâmetro true, o qual executa o códio se o case for verdadeiro.
*/

let idade = 60;
let fase;

switch (true) {
    case idade >= 60:
        fase = "idoso.";
        break;
    case idade >= 18:
        fase = "adulto";
        break;
    case idade >= 12:
        fase = "adolescente";
        break;
    default:
        fase = "criança";
        break;
}

console.log(fase)