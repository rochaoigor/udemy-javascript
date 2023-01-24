// Map -> Alteramos os valores do array, recebemos um array com o mesmo tamanho do array original, porém com valores alterados 

//Dobre os números

const numeros = [5, 50, 20, 30, 60, 4, 7, 23, 8, 70, 880]
const numerosDobrados = numeros.map(value => value * 2)
console.log(numerosDobrados)

//Para cada Elemento:
//Retorne apenas uma string com o nome da pessoa
// Retorne apenas a chave "nome" do objeto
//Adicione uma chave id em cada Objeto

const pessoas = [
    {nome:'Ana Carolina', idade:'23'},
    {nome:'Edson', idade:'28'},
    {nome:'Marcelo', idade:'61'},
    {nome:'Pedro', idade:'50'},
    {nome:'Paula', idade:'52'},
    {nome:'Maria', idade:'22'},
    {nome:'Bia', idade:'37'},
];

const nomes = pessoas.map(object => object.nome)
console.log(nomes)
const idades = pessoas.map(object => ({idade: object.idade}))
console.log(idades)
const createId = pessoas.map(function(object, indice) {
   const newObject ={...object}
   newObject.id = indice + 1 * 1000
   return newObject
} )
console.log(createId)