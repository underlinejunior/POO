const prompt = require("prompt-sync")();
//2. Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

let tamanho = Number(prompt("Informe o tamanho do arquivo em MB:"));
let velocidade = Number(prompt("Informe a velocidade da sua conexão em Mbps:"));
let mBps = (tamanho * 8) / velocidade * 60;
console.log(`02 -  ${mBps.toFixed(2)} minutos`)