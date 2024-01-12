const prompt = require("prompt-sync")();
//4. - Faça um algoritmo que após a entrada de uma determinada distância entre dois pontos(Km), e uma determinada velocidade(Km/h), diga qual o tempo médio que levará para chegada à esse local e qual a velocidade em metros/segundos.

let distancia = Number(prompt("Informe a distância em Km:"));
let velocidadekmH =Number(prompt("Informe a velocidade em Km/h:"));
let tempo = distancia / velocidadekmH;
let velocidadeMs = velocidadekmH / 3.6;
console.log(`04 - tempo médio ${tempo}h e velocidade em m/s ${velocidadeMs.toFixed(2)}`)