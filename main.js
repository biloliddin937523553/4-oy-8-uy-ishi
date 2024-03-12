// let arr =[2,4,9,10,45,67,8,90]
// let hallo =['boshlanishdagi array',]
// console.log(arr );
// for(let el of arr){
//     console.log();
//     if(el %2 === 0){
//         console.log('Juft sonlar');
//     }
// }
// console.log(arr);

let numbers = [2, 4, 9, 10, 45, 67, 8, 90];

let juftSonlar = [];
let toqSonlar = [];

// console.log(juftSonlar);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    juftSonlar.push(numbers[i]);
  } else {
    toqSonlar.push(numbers[i],);
  }
}
console.log(numbers,'Boshlanishidagi sonlar');
console.log(juftSonlar, 'Juft sonlar');
console.log(toqSonlar,'toq sonlar');