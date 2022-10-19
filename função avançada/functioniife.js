(function(idade,peso,altura){
    const sobrenome = 'Rocha';
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome() {
        console.log(criaNome('Igor'),)
    }

    falaNome()
    console.log(idade,peso,altura)
})(27,65,1.72);

const nome = 'Qualquer'