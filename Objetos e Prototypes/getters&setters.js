function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco; 
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable:true, // reconfigurar ou não a chave.
        
        get:function() {
            return estoque
        },
        set:function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeErrror('Por favor, usar apenas números')
            }
         estoque = valor
          
        }
    })
   
}

// Function Factory 

function criaProduto(nome) {
    return {
    get nome() {
        return nome;
    },
    set nome(valor) {
        nome = valor
    }
    }
}

const produto1 = new Produto('camiseta', '20', '3')
produto1.estoque = 500
const produto2 = criaProduto('Camiseta')
console.log(produto2.nome)
console.log(produto1)


