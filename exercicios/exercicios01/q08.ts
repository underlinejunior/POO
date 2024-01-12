const prompt = require("prompt-sync")();
//8. A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.
let n = Number(prompt("Que termo deseja encontrar: "))
let ultimo=1
let penultimo=1
if (n==1 || n==2){
    console.log("1")
}else{
    let count=3;
    let termo;
    while(count <= n){
        termo = ultimo + penultimo
        penultimo = ultimo
        ultimo = termo
        count += 1
    }
    console.log(termo);
}