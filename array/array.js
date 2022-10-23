const carros = ['Chevrolet', 'Fiat', 'Renault']
carros[2] = 'Ferrari'
console.log(carros)
const removido = carros.pop();
console.log(removido)

var meuPrimeiroArray = [1,2,3,4,5,6,7,8,9,10];
var ordemCerta = "";
var ordemErrada = "";
ordemCerta = meuPrimeiroArray[0];
for ( var i = 1; i < meuPrimeiroArray.length; i++) {
ordemCerta += "," + meuPrimeiroArray[i];
}
ordemErrada = meuPrimeiroArray[meuPrimeiroArray.length-1];
for ( var i = meuPrimeiroArray.length-2; i >= 0; i--) {
ordemErrada += "," + meuPrimeiroArray[i];
}
console.log(ordemCerta);
console.log(ordemErrada);
