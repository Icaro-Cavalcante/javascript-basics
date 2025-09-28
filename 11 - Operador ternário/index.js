/*
Operador ternário - Um operador condicional semelhante ao if{} else{} que escreve condições em uma única linha

sintaxe ↓
condição ? expressão_se_verdadeira : expressão_se_falsa
*/
let idade = 25;
/*
idade >= 18 ? console.log(`Maior de idade`) : console.log(`Menor de idade`);
 Mas é possível fazer de outra forma
*/
let mensagem = idade >= 18 ? `Maior de idade` : `Menor de idade`;

// No if else ficaria assim:
/*
if (idade >= 18) {
    mensagem = `Maior de idade`;
}
else {
    mensagem = `Menor de idade`;
}
*/

console.log(mensagem);

// Mais dois exemplos:

let javascript = true;
mensagem = javascript ? `Você está programando em JavaScript` : `Você está programando em outra linguagem`;
console.log(mensagem);

let carrinho = 75;
let desconto = carrinho > 50 ? 0.1 : 0
let valor = (carrinho*(1-desconto))
console.log(valor)