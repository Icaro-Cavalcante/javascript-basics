// Variáveis guardam dados e se comportam como se fossem o valor que guardam

// 1 - Temos que declarar (let variavel;)
// 2 - Temos que atribuir (variavel = 10)

// é possível fazer ambos ao mesmo tempo > let variavel = 10;

let variavel = 10;
console.log(variavel); // output: 10

// Para fazer de uma forma semelhante ao print(f"{}") do python podemos usar o ${}

let nome = `Icaro`;
console.log(`Meu nome é ${nome}.`); // output: Meu nome é Icaro.

// Podemos ver também o tipo da variável usando o typeof

let javascript = true;
let preco = 7.5;
console.log(typeof preco); // output: number
console.log(typeof nome); // output: string
console.log(typeof javascript); // output: boolean

// Colocando variáveis no html:

let oi = `Olá pessoas,`
let descricao = `Sou ${nome} e estou programando em javascript`
document.getElementById("saudacao").textContent = oi
document.getElementById("apresentacao").textContent = descricao