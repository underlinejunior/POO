const prompt = require("prompt-sync")();
//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:5!=5.4.3.2.1=120
let number = Number(prompt("Informe o fatorial:"));
let num=number;
let fat=1;
while(num>=1){
    fat = fat *num;
    num -= 1;
}
console.log(`${number}! = ${fat}`)