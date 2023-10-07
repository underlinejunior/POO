//13. Faça um programa para ordenar um vetor usando o buble sort.


function bubbleSort(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
const tam = 1000;
const numbers = [0,1,2];
for (let i=0; i<tam;i++){
  numbers.push(Math.floor(Math.random()*tam))
}
  
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); 