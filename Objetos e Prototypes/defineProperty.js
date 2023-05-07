function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco; 
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value:estoque, // valor da chave
        writable: true, // pode alterar o valor ou não. true or false
        configurable:false, // reconfigurar ou não a chave.

    })
   
}

const produto1 = new Produto('camiseta', 20, 3)
produto1.estoque = 50000;
console.log(produto1)
console.log(Object.keys(produto1))
