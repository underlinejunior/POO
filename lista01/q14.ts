const prompt = require("prompt-sync")();
//14. Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.
let number = Number(prompt("Informe um número: "));

let count = number.toString().length;
Math.log(number)


//outra forma //
function countDigits(number) {
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
console.log(countDigits(number));


