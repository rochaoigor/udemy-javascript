function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        get inicia() {
            this.cliqueBotoes
            this.pressionaEnter()
        },
        pressionaEnter() {
        this.display.addEventListener('keyup', e => {
            if(e.which === 13)
            this.realizaConta()
        })
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;
            try {

                conta = eval(conta);

                if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                    alert('Conta inválida');
                   return;
                   }

                this.display.value = conta;
            }
            catch (error) {
                alert('Conta inválida')
            }
        },
        get cliqueBotoes() {
            //this -> é a calculadora//
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('botao-num')) {
                    this.botaoDisplay(el.innerText)
                };
                if (el.classList.contains('botao-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('botao-del')) {
                    this.apagaUm();
                };
                if (el.classList.contains('botao-eq')) {
                    this.realizaConta()
                }
            }.bind(this)); //faz usar o this da calculadora//
        },
        botaoDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia