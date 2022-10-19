function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador
    }
}

const multiplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(triplica(2))