//Usamos para FIltrar os valores de uma função Filter, Map, Reduce //
//Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos que o array original//
 
const numeros = [0, 20 , 3 , 12 , 15 ,16 , 18 ,4, 3 , 60 , 4 , 9, 100 , 150]

// valor = todo conteudo dentro do array ex = 5, 50, 40...//


const numerosFiltrados = numeros.filter(value =>  value > 10)

console.log(numerosFiltrados)

//Retorne as pessoas que tem o nome com 5 letras ou mais
// Retone as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome:'Ana Carolina', idade:'23'},
    {nome:'Edson', idade:'28'},
    {nome:'Marcelo', idade:'61'},
    {nome:'Pedro', idade:'50'},
    {nome:'Paula', idade:'52'},
    {nome:'Maria', idade:'22'},
    {nome:'Bia', idade:'37'},
];

const pessoasComMais5Letras = pessoas.filter(obj => obj.nome.length >=5);
console.log(pessoasComMais5Letras)
const pessoasComMais50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMais50)
const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasTerminaA)