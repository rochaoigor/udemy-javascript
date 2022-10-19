function criaPessoa() {
        const form1 = document.querySelector('.form');
        const resultado = document.querySelector('div#texto');

        const pessoas = [];

        function recebeEvento (evento) {
            evento.preventDefault();
            const nome = form1.querySelector('.nome');
            const sobreNome = form1.querySelector('.sobreNome');
            const peso = form1.querySelector('.peso')
            const altura = form1.querySelector('.altura')
            
            pessoas.push(
                {
                   nome: nome.value,
                   sobrenome: sobreNome.value,
                    peso: peso.value,
                    altura: altura.value
                });

            console.log(pessoas);
            resultado.innerHTML += `<p> ${nome.value} ${sobreNome.value}` + `${altura.value}</p>`;
            
        }

 form1.addEventListener('submit', recebeEvento);

};

criaPessoa();