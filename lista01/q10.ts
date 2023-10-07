const prompt = require("prompt-sync")();
//Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

let num = Number(prompt("Informe um número: "));
let primo = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false;
        break;
    }
}
if (primo) {
    console.log(`${num} é primo!`);
} else {
    console.log(`${num} NÂO é primo!`);
}


//outra forma//

let num:number = Number(prompt("Informe um número:"));
let count = 0;
for (let i = 1; i <= num/2; i++) {
    if(num%i==0){
        count++;
    }
} 
if(count==1){
    console.log(`${num} é primo!`);
}else{
    console.log(`${num} NÂO é primo!`);
}
