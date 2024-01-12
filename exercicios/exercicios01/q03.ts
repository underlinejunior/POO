const prompt = require("prompt-sync")();
//3.Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

let Fahrenheit = Number(prompt("Informe a temperatura em Fahrenheit:"));
let Celsius = 5 * ((Fahrenheit - 32) / 9)
console.log(`03 - A temperatura ${Fahrenheit}ºF equivale a ${Celsius}ºC`)