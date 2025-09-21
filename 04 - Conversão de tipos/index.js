// Conversão de tipos = mudar o tipo de dado de um valor para outro

let idade = window.prompt("Qual a sua idade? ");
console.log(idade + 1, typeof idade); // input: 18 > output: 181 string | Esse dado é uma string
idade = Number(idade); // Transformando string em number
idade += 1
console.log(idade, typeof idade); // input: 18 > output: 19 'number'

// Tá mais e se nós tentarmos transformar uma string em outros tipos?

nome = 'Icaro';
nome = Number(nome);
console.log(nome, typeof nome); // output: NaN 'number' (NaN significa 'not a number')

nome = 'Icaro';
nome = Boolean(nome);
console.log(nome, typeof nome); // output: true 'boolean'

// Transformar uma string em Boolean retorna falso se a string estiver vazia

nome = "";
nome = Boolean(nome);
console.log(nome, typeof nome); // output: false 'boolean'