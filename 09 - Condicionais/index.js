// Condicionais

let nome = "Icaro";
const javascript = true;
const python = false;
const botao = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const input = document.getElementById("idade")
let idade;

if (nome == "Icaro") {
    console.log(`Seu nome é Icaro`);
}
else if (nome == "João") {
    console.log(`Seu nome é João`);
}
else {
    console.log(`Seu nome é outro`);
}


if (nome == "Icaro" && javascript) {
    console.log("Você é Icaro e está programando em javascript");
}
if (python || javascript) {
    console.log("Você está programando.");
}

botao.onclick = function() {
    idade = input.value
    idade = Number(idade)
    if (idade>=18) {
        mensagem.textContent = "Você é maior de idade"
    }
    else {
        mensagem.textContent = "Você é menor de idade"
    }
}