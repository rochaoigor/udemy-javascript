class validaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this,'cpfLimpo', {
            writable: false,
            configurable:false,
            enumerable:false,
            value:cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of  cpfSemDigitos) {
           total += reverso * Number(stringNumerica);
           reverso--
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        
        return this.novoCPF === this.cpfLimpo
    }
}

//let cpfGerado = new validaCpf('173.234.757-32')
//if(cpfGerado.valida()) {
//    console.log('CPF Válido')
//}else {
    //console.log('CPF Inválido')
//}
