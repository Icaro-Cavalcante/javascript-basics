// funções - Uma sessão de código reutilizável.

function saudacao(nome, sentimento) {
    console.log(`Olá ${nome}`)
    console.log("Como está?")
    console.log(`Eu estou ${sentimento} também.`)
}

saudacao("Icaro", "feliz");

function soma(x,y) {
    resultado = (x+y);
    return resultado;
}

resposta = (soma(2,3));
console.log(resposta);

function par_impar(num) {
    if ((num % 2) == 0) {
        return 'par';
    }
    else {
        return 'impar';
    }
}

check = par_impar(4);
console.log(check)