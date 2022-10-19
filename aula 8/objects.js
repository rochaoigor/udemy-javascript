function criaPessoa(nome,sobrenome,idade) {
    return {
        nome, //Quando se tem valores iguais, não precisamos colocar ex ' nome: nome'.//
        sobrenome: sobrenome,
        idade:idade
    }
};

const pessoa1 = criaPessoa('Luiz','Miranda',25);
const pessoa2 = criaPessoa('João','Oliveira',28);
const pessoa3 = criaPessoa('Maria','Beltrão',27);
const pessoa4 = criaPessoa('Eleonora','Catarina',20);
const pessoa5 = criaPessoa('Beth','Severino',30);
const pessoa6 = criaPessoa('Jesus','Machado',45);
const pessoa7 = criaPessoa('João','Silva',55);
const pessoa8 = criaPessoa('Leonardo','Cardoso',45);

console.log(pessoa1.nome)
console.log(pessoa5.sobrenome)
console.log(pessoa8.idade)
console.log(pessoa7.nome)



/*
const pessoa1 = {
    nome:'Igor',
    sobrenome:'Rocha',
    idade:27,
// Também podemos usar functions dentros de objetos//
     fala() {
        console.log('Olá,mundo')
    }
}

pessoa1.fala();


*/


/*
const pessoa1 = {
    nome: 'Luiz',
    sobreNome:'Miranda',
    idade:25,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobreNome);
console.log(pessoa1.idade);*/