/*
Operadores lógicos - Usados para combinar ou manipular valores booleanos.
And - &&
Or - ||
Not = !
*/

const temperatura = 30;
const javascript = true;
/*
if (temp > 0) {
    console.log("O clima está bom.");
}
else if (temp <= 30) {
    console.log("O clima está bom.");
}
else {
    console.log("O clima está ruim");
}
*/
if ((temperatura< 30 || temperatura== 30) && temperatura > 0) {
    console.log("O clima está bom.");
}
else {
    console.log("O clima está ruim");
}

if (! javascript) {
    console.log("Você está programando em outra linguagem.");
}
else {
    console.log("Você está programando em JavaSCript.");
}