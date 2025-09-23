// Vamos colocar cada um dos botões e a etiqueta em constantes primeiro

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("resetar");
const etiqueta = document.getElementById("etiqueta_contador");

// Vamos definir a variável do contador

let contador = 0;

// Agora as funções para cada botão

aumentar.onclick = function(){
    contador+=1; // Também pode ser contador++;
    etiqueta.textContent = contador;
}
diminuir.onclick = function(){
    contador-=1; // Também pode ser contador--;
    etiqueta.textContent = contador;
}
reset.onclick = function(){
    contador=0;
    etiqueta.textContent = contador;
}