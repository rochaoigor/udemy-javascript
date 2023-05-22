class validacaoFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e);
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
        const passwordIsValid = this.passwordValid();

        if(validFields & passwordIsValid) {
            alert('Formulário enviado')
            this.formulario.submit();
        }
    }

    passwordValid() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repeatpassword')
     if(senha.value !== repetirSenha.value) {
        valid = false;
        this.createError(senha, 'As senhas devem ser iguais')
        this.createError(repetirSenha, 'As senhas devem ser iguais')
     }

     if(senha.value.length < 3 || senha.value.length > 12) {
        valid = false;
        this.createError(senha, 'Senha deve ter entre 6 a 12 caracteres')
     }

        return valid
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
           errorText.remove();

        }

        for(let input of this.formulario.querySelectorAll('.validar')) {
            const label = input.previousElementSibling.innerText;

           if(!input.value) {
            this.createError(input, `Campo "${label}" não pode estar em branco.`)
            valid = false;
           }

           if(input.classList.contains('cpf')) {
            if(!this.validaCpf(input)) valid = false;
        }

        if(input.classList.contains('userid')) {
            if(!this.isValidUser(input)) valid = false
        }
       
        } 
        return valid
    }

    isValidUser(input) {
        const usuario = input.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12 ) {
            this.createError(input, 'Usuário entre 3 e 12 caracteres'); valid = false;
        }
        if(!usuario.match(/^[a-zA-z0-9]+$/g)) {
            this.createError(input, 'Nome de usuário precisa conter letras ou números'); valid = false;
        }
        return valid;
    }
 
    validaCpf(input) {
        const cpf =  new validaCpf(input.value);

        if(!cpf.valida()) {
            this.createError(input, 'CPF inválido');
            return false;
        }
        return true;
     }
    
    
    createError(input, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        input.insertAdjacentElement('afterend', div);
    }
 
}

const valida = new validacaoFormulario();