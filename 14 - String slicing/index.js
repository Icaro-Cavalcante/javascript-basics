// String slicing - Cria uma substring de uma parte de outra string

const nome = 'Icaro Cavalcante';

let primeiro_nome = nome.slice(0,5);
// let sobrenome = nome.slice(6,16)
let sobrenome = nome.slice(6);
let caracter_inicial = nome.slice(0,1);
let caracter_final = nome.slice(-1);
console.log (caracter_inicial, caracter_final);

// Tambem podemos fazer assim:

primeiro_nome = nome.slice(0, nome.indexOf(' ')); // Termina no primeiro espaço
sobrenome = nome.slice(nome.indexOf(' ') + 1);

console.log(primeiro_nome);
console.log(sobrenome);

const email = "icaro@gmail.com";
let usuario = email.slice(0, email.indexOf("@"));
let extensao = email.slice(email.indexOf("@") + 1);
console.log(usuario);
console.log(extensao)