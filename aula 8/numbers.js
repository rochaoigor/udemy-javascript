let num1 = 0.7;
let num2 = 0.1;

/* Outra forma de resolver é usando */

num1 = ((num1 * 100)+ (num2 * 100)) /100; //0.8
num1 = ((num1 * 100)+ (num2 * 100)) /100; //0.9
num1 = ((num1 * 100)+ (num2 * 100)) /100; //1.0

console.log(Number.isInteger(num1))
console.log (num1);




/* A melhor maneira de resolver é essa:
num1 += num2; //0.8 num1 = num1 + num2//
num1 += num2;//0.9
num1 += num2;//1.0
num1 += num2;//1.1
num1 += num2;//1.2
num1 += num2;//1.3
num1 += num2;//1.4
num1 += num2;//1.5
num1 += num2;//1.6


para consertar o problema usamos: A melhor FORMA!!!!!

num1 = Number(num1.toFixed(2));
*/

//vai dar resultado falso//

/*console.log(num1 * num2);
let num3 = num1 * num2;
console.log(num1 * num2.toFixed(0));

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
*/
/*
let temp = num2 * 'Ola';
console.log(Number.isNaN(temp))*/