// .checked - Propriedade que determina a existência do check de uma checkbox ou radio button.

const checkbox = document.getElementById("MinhaCheckBox");
const credito = document.getElementById("credito");
const debito = document.getElementById("debito");
const botao = document.getElementById("enviar");
const pix = document.getElementById("pix");
const resultado = document.getElementById("resultado");
const pagamento = document.getElementById("pagamento");

botao.onclick = function() {

    if(checkbox.checked) {
        resultado.textContent = "Você confirmou.";
    }
    else {
        resultado.textContent = "Você não confirmou.";
    }


    if (credito.checked) {
        pagamento.textContent = "Seu método de pagamento é crédito."
    }
    else if (debito.checked) {
        pagamento.textContent = "Seu método de pagamento é débito."
    }
    else if (pix.checked) {
        pagamento.textContent = "Seu método de pagamento é pix."
    }
    else {
        pagamento.textContent = "Você não escolheu um método de pagamento."
    }
}