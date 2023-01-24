//Retorne a soma do dobro de todos os pares
// Filtrar pares
//Dobrar os valores
//Reduzir (somar tudo)


const numeros = [5, 10, 15, 25, 50, 30, 40, 120, 80, 95, 85, 100];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0
}).map(function(valor) {
    return valor * 2
}).reduce(function(acumulador, valor) {
    return acumulador + valor
});

console.log(numerosPares)