const prompt = require("prompt-sync")();
//6. Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
let ano = Number(prompt("Informe um ano:"));
if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log(`06 - ${ano} é bisexto!`)
} else {
    console.log(`06 - ${ano} não é bisexto!`)
}