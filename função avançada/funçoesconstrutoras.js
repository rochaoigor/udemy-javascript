function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': Sou um método')
    }
}

const pessoa1 = new Pessoa('Igor', 'Rocha')
const pessoa2 = new Pessoa ('Maria', 'Oliveira')

console.log(pessoa1.nome)
console.log(pessoa2.sobrenome)
pessoa1.metodo();