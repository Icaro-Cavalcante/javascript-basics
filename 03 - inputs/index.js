/* Existem algumas maneiras que receber o input do usuário:

1 - (mais fácil) com a função window prompt; */

let nome;
nome = window.prompt("Qual o seu nome? ");
console.log(nome);

// 2 - (mais dificil) caixa de texto em HTML.

document.getElementById("enviar").onclick = function () {
    nome = document.getElementById("pessoa").value;
    console.log(nome);
    document.getElementById("saudacao").textContent = (`Olá ${nome}`);
}