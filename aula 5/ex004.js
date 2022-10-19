/*          Operadores Aritméticos
     + = adição / concatenação = unir dois valores;
     - = subtração
     / = divisão
    * = multiplicação
    ** = potenciação
     % = retorna o resto da divisão
*/

/*  Ordem de precedencia das operações
1ª = ()
2ª = **
3ª = * / %
4ª = +-

     Incremento e Decremento
     Incremento = ++
     Decremento = --

     Operadores de Atribuição:
     *=
     +=
     -=
     /=
     **=
*/


const num1 = 5
const num2 = 10
const num3 = 20
console.log(num1 + num2)
console.log(num1 - num2)
console.log (num1 / num2)
console.log(num1 * num2)
console.log(num2 ** num1)
console.log(num1 % num2)
console.log(num2 * num1 % num3)
console.log((num1 + num2)*num3)


const num4 = '5.2'
console.log(typeof num4)

const num5 = parseFloat('5.2') //numero flutuante // numero decimais//
console.log(typeof num5)

const num6 = parseInt ('6') //numero inteiro//
console.log(typeof num6)