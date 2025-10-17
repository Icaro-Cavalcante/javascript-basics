// Escopo de variável - onde uma variável é reconhecida e acessável (local ou global)
// Qualquer variável declarada fora de uma função é global e as declaradas em uma são locais
// Dentro de uma função a local tem prioridade

function um() {
    let x = 2;
    let y = 5;
    console.log(x)
}

function dois() {
    let x = 1;
    console.log(x)
}

// A variável x está presente nessas duas funções e se comporta de maneiras diferentes entre elas
// Se eu usar console.log(y) na função dois(), ela não vai saber o valor de y, pois essa variável só está presente na função um()