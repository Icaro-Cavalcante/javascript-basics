/*
= - Operador de declaração
== - Operador de comparação (compara se os valores são iguais)
=== - Operador de igualdade estrita (compara se os valores e os tipos de dado são iguais)
!= - Operador de desigualdade
!== - Operador de desigualdade estrita
*/

const pi = 3.14

if (pi == "3.14") {
    console.log("O número é pi")
}
else {
    console.log("O número não é pi")
} // output = O número é pi

// mas se...
if (pi === "3.14") {
    console.log("O número é pi")
}
else {
    console.log("O número não é pi")
} // output = O número não é pi

if (pi != "3.14") {
    console.log("O número é pi")
}
else {
    console.log("O número não é pi")
} // output = O número não é pi

if (pi !== "3.14") {
    console.log("O número é pi")
}
else {
    console.log("O número não é pi")
} // output = O número é pi