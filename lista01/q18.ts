//18. Dado uma string com uma frase informada pelo usuário (incluindo espaços em branco), conte, quantos caracteres tem a string, quantas palavras e quantos espaços.

const prompt = require("prompt-sync")();

let frase = prompt("Informe uma frase: ");
let caracteres = frase.length;
let palavras = frase.split(" ").length;
let espacos = frase.split(" ").length - 1;

console.log(`A frase possui ${caracteres} caracteres, ${palavras} palavras e ${espacos} espaços.`);