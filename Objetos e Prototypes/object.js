const pessoa = {
    nome:'Igor',
    sobreNome: 'Rocha',
    idade:27,
    jogoPreferido: 'Shadow Of Colossus'
};

console.log(pessoa['jogoPreferido'])

const pessoa1 = new Object();
pessoa1.nome = 'Igor'
pessoa1.idade = 28
pessoa1.falarNome = function() {
   return( `Minha idade é ${this.idade}, ${this.nome} está falando sua idade`)
};

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};

for(let key in pessoa1) {
    console.log(key)
}
console.log(pessoa1.getDataNascimento())
console.log(pessoa1.nome)
console.log(pessoa1.falarNome())