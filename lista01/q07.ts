const prompt = require("prompt-sync")();
//7. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles e a soma dos números do intervalo.
let num1 = Number(prompt("Informe o primeiro número: "));
let num2 = Number(prompt("Informe o segundo número: "));

for (let i = num1; i <= num2; i++) {
    console.log(i);
}

let soma = 0;
for (let i = num1; i <= num2; i++) {
    soma += i;
}
console.log(`A soma dos números entre ${num1} e ${num2} é igual a ${soma}.`);
