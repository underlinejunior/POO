const prompt = require("prompt-sync")();
//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:5!=5.4.3.2.1=120

let num = Number(prompt("Informe um número: "));
let fat = 1;
for (let i = num; i > 1; i--) {
    fat *= i;
}
console.log(`${num}! = ${fat}`);

//outra forma//

let number = Number(prompt("Informe o fatorial:"));
let num=number;
let fat=1;
while(num>=1){
    fat = fat *num;
    num -= 1;
}
console.log(`${number}! = ${fat}`)