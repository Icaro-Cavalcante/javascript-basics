// Cadeia de métodos = Executar um métodos após o outro em uma contínua linha de código. Se adicionar um ponto após um método, você pode usar mais um na mesma linha.

// Sem cadeia

let usuario = window.prompt("Digite seu nome de usuário:");

usuario = usuario.trim();
let letra = usuario.charAt(0);
letra = letra.toUpperCase();
let caracteres = usuario.slice(1);
caracteres = caracteres.toLowerCase();
usuario = letra + caracteres;
console.log(usuario); // input: " icaRo  " | output: Icaro

// Cadeia

usuario = usuario.trim().charAt(0).toUpperCase() + usuario.trim().slice(1).toLowerCase();
console.log(usuario); // input: " icaRo  " | output: Icaro