//12. Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor. Depois, mostre quantas vezes cada valor foi conseguido
let lados = [1, 2, 3, 4, 5, 6];
let lancamentos = [];
let quantidade = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 100; i++) {
    let dado = lados[Math.floor(Math.random() * lados.length)];
    lancamentos.push(dado);
    quantidade[dado - 1]++;//como o array começa em zero e o dado em um...
}

for (let i = 0; i < quantidade.length; i++) {
    console.log(`Valor ${i + 1}: ${quantidade[i]} vezes`);
}
