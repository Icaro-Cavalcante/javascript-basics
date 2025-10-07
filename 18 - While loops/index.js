// While loop - Estrutura de repetição que repete o código enquanto uma condição for verdade
let usuario = "";
let senha = "";

do {
    usuario = window.prompt(`Digite seu nome usuário:`)
} while (usuario == "" || usuario === null)

while (senha == "" || senha === null) {
    senha = window.prompt(`Digite sua senha: `);
}

console.log(`Olá ${usuario}`)
console.log(`Sua senha é ${senha}`);