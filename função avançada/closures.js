function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}
const funcao = retornaFuncao('Igor');
const funcao2 = retornaFuncao('Rocha');

console.log(funcao(), funcao2());
