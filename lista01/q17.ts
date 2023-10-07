const prompt = require("prompt-sync")();
//17. Faça um programa que permita ao usuário digitar o seu nome e em seguida mostre o nome do usuário de trás para frente utilizando somente letras maiúsculas.

let nome = prompt("Informe seu nome: ");
let vetor = nome.split('');
let reverso = [];

for (let i = vetor.length - 1; i >= 0; i--) {
    reverso.push(String(vetor[i]).toUpperCase());
}
console.log(reverso.join(''));