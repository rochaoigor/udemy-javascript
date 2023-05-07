//Construtora -> Molde(classe)

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.completeName = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.CompleteName = function() {
    return this.nome + ' ' + this.sobrenome;
}
//Pessoa.prototype.estouAqui = 'HahAhA'
 
const pessoa1 = new Pessoa('Guilherme', 'Rocha')
//const pessoa2 = new Pessoa('Igor', 'Rocha')
const data = new Date();
console.dir(pessoa1)
//console.dir(pessoa2)
console.dir(data)