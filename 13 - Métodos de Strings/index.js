// Métodos de Strings - Funções embutidas que permitem manipular e trabalhar com texto (strings)

let nome = `Icaro`;
let nome2 = `joão`;
let nome3 = ` José    `;
let mensagem;

mensagem = nome.charAt(0); // Retorna o caracter no índice informado (nesse caso 0)
console.log(mensagem); // Output: I

console.log(nome.indexOf('a')); // Retorna o índice da primeira vez que aparece o caracter informado | Output: 2
console.log(nome2.lastIndexOf('o')); // Retorna o índice da última vez que aparece o caracter informado | Output: 3
console.log(nome.length); // Retorna o tamanho da string (não é um método) | output: 5
console.log(nome3.trim()); // Retira os espaços | output: José
console.log(nome2.toUpperCase()); // Deixa todas as letras maiúsculas. | output: JOÃO
console.log(nome.toLowerCase()); // Deixa todas as letras minúsculas. | output: icaro
console.log(nome.repeat(4)); // Repete a string um determinado número de vezes (nesse caso 4) | output: IcaroIcaroIcaroIcaro
console.log(nome.startsWith("I")); // Retorna true ou false checkando se o caracter informado é o que começa a string | output: true 
console.log(nome.endsWith("I")); // Retorna true ou false checkando se o caracter informado é o que termina a string | output: false 
console.log(nome.includes(" ")); // Retorna true ou false checkando se o caracter informado existe na string | output: false 

let cpf = '999.999.999-99';
cpf = cpf.replaceAll(".",""); // Substitui o primeiro caracter pelo segundo em todas ocorrências
cpf = cpf.replaceAll("-","");
console.log(cpf); // output: 99999999999

console.log(cpf.padStart(20, "0")); // O primeiro parâmetro dita o tamanho da string e o segundo é o caracter que preenche os espaços vazios | output: 00000000099999999999
console.log(cpf.padEnd(20, "0")); // O mesmo do anterior mas é só ni final da string | output: 99999999999000000000