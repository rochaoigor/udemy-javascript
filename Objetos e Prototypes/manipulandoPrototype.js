function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.Desconto = function(percentual) {
    this.valor = this.valor - (this.valor * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.valor = this.valor - (this.valor * (percentual / 100));
}

const produto2 = {
    nome:'colchão',
    valor:150
};

Object.setPrototypeOf(produto2, Produto.prototype)

produto2.Desconto(10)


console.log(produto2)

const produto1 = new Produto('Buchannan', 229)
produto1.Desconto(10)
produto1.aumento(10)
console.log(produto1)

const produto3 = Object.create(Produto.prototype) 
produto3.valor = 110
produto3.Desconto(10)
console.log(produto3)

const produto4 = Object.create(Produto.prototype,{
    valor:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:50
    },
    tamanho: {
        writable:true,
        configurable:true,
        enumerable:true,
        value:15
    }
});

console.log(produto4)