// Os operadores aritméticos em javascript são:
// + adição;
// - divisão;
// * multiplicação;
// / divisão (Não temos o "//" para divisão inteira);
// ** potenciação;
// % resto da divisão;

// A sequência é:
/*
1 - Parêntese
2 - Potenciação
3 - Multiplicação, divisão e resto da divisão
4 - Adição e subtração
*/

// é extremamente semelhante aos operadores do Python 

let adicao = `4 + 5 = ${4+5}`;
let subtracao = `10 - 8 = ${10-8}`
let multiplicacao = `2 * 7 = ${2*7}`
let divisao = `20 / 4 = ${20/4}`
let potencia = `3 ** 4 = ${3**4}`
let resto_div = `10 % 3 = ${10%3}` 

document.getElementById("mais").textContent = adicao
document.getElementById("menos").textContent = subtracao
document.getElementById("vezes").textContent = multiplicacao
document.getElementById("dividido").textContent = divisao
document.getElementById("elevado").textContent = potencia
document.getElementById("resto").textContent = resto_div