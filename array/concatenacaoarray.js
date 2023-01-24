const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2, [7,8,9], 'String')
console.log(array3)

// Concatenamos arrays com a função concat() //

// Também podemos concatenar usando os spread operator '...' //

const array4 = [...array1, ...array2,...[7, 8, 9]]
console.log(array4)