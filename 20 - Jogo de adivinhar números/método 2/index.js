const minimo = 1;
const maximo = 100;
const jogo = true;
let resposta;
resposta = (Math.round(Math.random() * 100) + 1);
let tentativas = 0;
let adivinhacao;
console.log(resposta);
while (jogo) {
    adivinhacao = window.prompt(`Escolha um número entre ${minimo} e ${maximo}:`);
    adivinhacao = Number(adivinhacao);
    if (isNaN(adivinhacao)) {
        window.alert("Sua resposta deve ser um número.");
    }
    else {
        tentativas += 1;
        if (adivinhacao > resposta) {
            window.alert("Sua resposta é maior que o número.");
        }
        else if (adivinhacao < resposta) {
            window.alert("Sua resposta é menor que o número.");
        }
        if (adivinhacao == resposta) {
            window.alert(`Você descobriu o número com ${tentativas} tentativas.`);
            break;
        }
    }
}