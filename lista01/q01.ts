const prompt = require("prompt-sync")(); //npm install prompt-sync
// 1. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) – 58

let altura = Number(prompt("Informe a sua altura em metros:"));
let pesoIdeal = 72.7 * altura - 58

console.log(`01 - o peso ideal para quem tem ${altura.toFixed(2)} m é ${pesoIdeal.toFixed(2)}kg`);