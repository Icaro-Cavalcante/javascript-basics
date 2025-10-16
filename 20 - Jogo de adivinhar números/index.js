const minimo = 1;
const maximo = 100;
const botao = document.getElementById("enviar");
const guess = document.getElementById("guess");
const message = document.getElementById("msg");
let tentativa;
let num;
num = (Math.round(Math.random() * 100));


botao.onclick = function clique() {
    tentativa = Number(guess.value);
    console.log(tentativa, num);
    if (num == tentativa) {
        message.textContent = "Parabéns! Você acertou."
        num = (Math.round(Math.random() * 100));
    }
    else {
        if (num > tentativa) {
            message.textContent = "O seu número é menor."
        }
        else {
            message.textContent = "O seu número é maior."

        }
    }
}
