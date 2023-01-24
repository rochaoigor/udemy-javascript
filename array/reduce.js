// Reduce é uma função mais utilizada para reduzir o array, em um número x de elementos.

//Some todos os números
// Retorne os números pares (Filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 10, 15, 25, 50, 30, 40, 120, 80, 95, 85, 100]
const soma = numeros.reduce(function(acumulador, valor){
acumulador += valor
return acumulador
}, 0); // valor inicial do acumulador

console.log(soma)

const numerosPares = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador
},[])

console.log(numerosPares)

const numerosDobrados = numeros.reduce(function(acumulador, valor) {
    acumulador.push( valor * 2)
    return acumulador;
},[])

console.log(numerosDobrados)

// Retorne a pessoa mais velha

const pessoas = [
    {nome:'Ana Carolina', idade:'23'},
    {nome:'Edson', idade:'28'},
    {nome:'Marcelo', idade:'61'},
    {nome:'Pedro', idade:'50'},
    {nome:'Paula', idade:'52'},
    {nome:'Maria', idade:'22'},
    {nome:'Bia', idade:'77'},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});

console.log(pessoaMaisVelha)
