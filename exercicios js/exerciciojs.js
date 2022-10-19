const intro = document.querySelector('#intro1');
intro.innerHTML = 'Estou Aprendendo a Programar'

function formulario () {
    const form = document.querySelector('#form1')
    const resposta = document.querySelector('#texto');
    const dados = [];

    function recebeDados (evento) {
        evento.preventDefault();
        const nome = document.querySelector('#inome');
        const sobrenome = document.querySelector('#isobreNome');
        const idade = document.querySelector ('#iidade');
        const altura = document.querySelector ('#ialtura');
        const peso = document.querySelector ('#ipeso');

        dados.push(
            {
                nome: nome.value,
                sobrenome:sobrenome.value,
                idade: idade.value,
                altura: altura.value,
                peso: peso.value,
            });
            console.log(dados);
            resposta.innerHTML += `${nome.value} ${sobrenome.value} 
            ${altura.value} ${peso.value} ${idade.value}`
    }
    form.addEventListener('submit',recebeDados);
}

formulario()