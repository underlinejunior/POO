const prompt = require("prompt-sync")();
//5. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

let lado01 = Number(prompt("Informe o primeiro lado do triângulo:"));
let lado02 = Number(prompt("Informe o segundo lado do triângulo:"));
let lado03 = Number(prompt("Informe o terceiro lado do triângulo:"));

if ((lado01 < (lado02 + lado03)) && (lado02 < (lado01 + lado03)) &&(lado03 < (lado01 + lado02))){
    if (lado01 == lado02 && lado02 == lado03) {
        console.log("05 - Triângulo Eqüilátero");
    } else {
        if (lado01 == lado02 || lado01 == lado03 || lado02 == lado03) {
            console.log("05 - Triângulo Isósceles");
        } else {
            console.log("05 - Triângulo Escaleno");
        }
    }
}else {
    console.log("05 - As medidas não formam um triângulo");
}