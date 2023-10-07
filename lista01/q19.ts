//19. Um palíndromo é uma seqüência de caracteres cuja leitura é idêntica se feita da direita para esquerda ou ice−versa. Por exemplo: OSSO e OVO são palíndromos. Em textos mais complexos os espaços e pontuação são ignorados. A frase SUBI NO ONIBUS é o exemplo de uma frase palíndroma onde os espaços foram ignorados. Faça um programa que leia uma seqüência de caracteres, mostre−a e diga se é um palíndromo ou não. 

const prompt = require("prompt-sync")();
let frase = prompt("Informe uma frase: ");

for (let i = 0; i < frase.length; i++) {
    console.log(frase[frase.length - i - 1]);
}

if (frase == frase.split("").reverse().join("")) {
    console.log("palindromo");
} else {
    console.log("nao palindromo");
}
