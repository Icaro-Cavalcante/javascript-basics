let temp;
const graus = document.getElementById("temp");
const botao = document.getElementById("botao");
const message = document.getElementById("msg");
const cef = document.getElementById("cf");
const fec = document.getElementById("fc");
const cek = document.getElementById("ck");
const kec = document.getElementById("kc");
const kef = document.getElementById("kf");
const fek = document.getElementById("fk");

function cf() {
    resultado = ((temp*9)/5) + 32;
    return resultado;
}
function fc() {
    resultado = ((temp-32) * 5) / 9;
    return resultado;
}
function ck() {
    resultado = temp + 273;
    return resultado;
}
function kc() {
    resultado = temp - 273;
    return resultado;
}
function kf() {
    resultado = (((temp-273) * 9) / 5) + 32;
    return resultado;
}
function fk() {
    resultado = (((temp-32)*5)/9) + 273;
    return resultado;
}

botao.onclick = function() {
    temp = graus.value;
    temp = Number(temp);
    if (isNaN(temp) || temp == 0) {
        message.textContent = "Temperatura inválida."
    }
    else {
        if (cef.checked) {
            resultado = cf();
            message.textContent = `Temperatura igual a ${resultado}°F`;
        }
        else if (fec.checked) {
            resultado = fc();
            message.textContent = `Temperatura igual a ${resultado}°C`;
        }
        else if (cek.checked) {
            resultado = ck();
            message.textContent = `Temperatura igual a ${resultado}°K`;
        }
        else if (kec.checked) {
            reultado = kc();
            message.textContent = `Temperatura igual a ${resultado}°C`;
        }
        else if (kef.checked) {
            resultado = kf();
            message.textContent = `Temperatura igual a ${resultado}°F`;
        }
        else if (fek.checked) {
            resultado = fk();
            message.textContent = `Temperatura igual a ${resultado}°K`;
        }
        else {
            message.textContent = "Selecione o tipo de conversão";
        }
    }
}