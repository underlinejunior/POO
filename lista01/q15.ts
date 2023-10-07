
//15. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721
function reverseNumber(number) {
    return number.toString().split('').reverse().join('');
}
console.log(reverseNumber(number));


// outra forma//

let value = Number(prompt('Informe um número: '));

 function reverso(n){
    let reverso = 0;
    while(n>0){
        reverso = reverso*10 + n%10;
        n = Math.floor(n/10);
    }
    return reverso;
 }

console.log(reverso(value));