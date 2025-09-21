// Constante - Uma variável constante (que o valor não pode ser alterado)
const pi = 3.14;
let raio, area;

document.getElementById("enviar").onclick = function() {
    raio = document.getElementById("raio").value;
    raio = Number(raio);
    area = pi * (raio ** 2);
    document.getElementById("resultado").textContent = `A área do círculo é: ${area}`;
}

// E se tentarmos mudar uma constante?
//pi = 4
//console.log(pi) | output: Uncaught TypeError: Assignment to constant variable. at index.js:12:4
// Acontece um erro