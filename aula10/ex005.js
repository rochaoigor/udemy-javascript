const pessoa = {
    nome: 'Igor',
    sobreNome: 'Rocha',
    idade: 27,
    Endereco:{
        rua: 'Aparecida',
        numero:333
    }
}
const {Endereco: {rua, numero}} = pessoa;
console.log(rua, numero)