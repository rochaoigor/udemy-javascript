function Calculadora() {

    this.inicia = () => {
        this.capturacliques()
        this.capturaEnter();
    }

    this.display = document.querySelector('.display')
    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 13) return;
            this.addEqDisplay();
        })
    }

    this.capturacliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('botao-num')) this.addNumDisplay(el);
            if (el.classList.contains('botao-del')) this.adddelDisplay();
            if (el.classList.contains('botao-clear')) this.addClearDisplay();
            if (el.classList.contains('botao-eq')) this.addEqDisplay();
        });

    };

    this.adddelDisplay = () => this.display.value = this.display.value.slice(0, -1)

    this.addClearDisplay = () => this.display.value = '';

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    
    this.addEqDisplay = () => {
        try {

            const conta = eval(this.display.value);

            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        }
        catch (error) {
            alert('Conta inválida')
        }

    }
};
const calc = new Calculadora();
calc.inicia();