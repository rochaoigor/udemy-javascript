// constructor  e factory function - moldes para objetos // classses
function createId(nome,sobrenome,idade,anoNasc) {
    return {
        nome,
        sobrenome,
        idade,
        anoNasc,
        get nomeCompleto() {
        return (`${this.nome} ${this.sobrenome}`)
        }
    }
}



const p1 = createId('Igor', 'Rocha')
console.log(p1.nomeCompleto) //factory function

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Igor', 'Rocha')
const pessoa2 = new Pessoa('Carol' , 'Magliano')
console.log(pessoa2)

