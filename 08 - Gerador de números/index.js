// Gerador de números aleatório

let num = Math.random(); // Math.random() gera um número aleatório entre 0 e 1
const botao = document.getElementById("botao");
const numero = document.getElementById("numero");
const minimo = 10;
const maximo = 100;

botao.onclick = function() {
    num = Math.floor(Math.random() * (maximo - minimo)) + minimo;
    numero.textContent = num;
}