const prompt = require("prompt-sync")();
//11.Faça um programa que leia a altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas. Utilize um vetor.

let numAlunos = Number(prompt("Informe o número de alunos: "));
let alturas = [];

for (let i = 0; i < numAlunos; i++) {
    let altura = Number(prompt(`Informe a altura do aluno ${i + 1} (em centímetros): `));
    alturas.push(altura);
}

let maior = alturas[0];
let menor = alturas[0];
let numAlunoMaior = 1;
let numAlunoMenor = 1;

for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] > maior) {
        maior = alturas[i];
        numAlunoMaior = i + 1;
    }
    if (alturas[i] < menor) {
        menor = alturas[i];
        numAlunoMenor = i + 1;
    }
}

console.log(`O aluno mais alto é o aluno ${numAlunoMaior} com ${maior} centímetros de altura.`);
console.log(`O aluno mais baixo é o aluno ${numAlunoMenor} com ${menor} centímetros de altura.`);
