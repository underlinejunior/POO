const prompt = require("prompt-sync")();
//7. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles e a soma dos números do intervalo.
let int01 = Number(prompt("Informe o primeiro número:"));
let int02 = Number(prompt("Informe o segundo número:"));
let menor = int01;
let maior = int02;
if (int02 < menor) menor = int02;
if (int02 > maior) maior = int02;
let soma = 0;
let valores = [];
menor += 1;
for (let i = menor + 1; menor < maior; menor++) {
    soma += menor;
    valores.push(menor);
}
console.log(`07 - intervalo= ${valores} e a soma = ${soma}`);