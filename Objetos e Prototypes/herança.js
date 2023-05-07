function Produto(nome,preco, quantidade) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'quantidade', {
        enumerable:true,
    configurable:true,


get:function(){
    return quantidade

},
set:function(valor) {
    if(typeof valor !== 'number') {
        throw new TypeError( console.log('Por favor usar apenas números'))
    }
    quantidade = valor
 }
})

}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function refrigerantes(nome, preco, sabor, quantidade) {
    Produto.call(this, nome, preco, quantidade);
    this.marcas = sabor;
}
refrigerantes.prototype = Object.create(Produto.prototype)
refrigerantes.prototype.constructor = refrigerantes;

function Camiseta(nome,preco,quantidade,cor) {
    Produto.call(this, nome, preco, quantidade);
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco+(this.preco *(percentual / 100))
}

function Caneca(nome,preco,quantidade, material) {
    Produto.call(this,nome, preco, quantidade)
    this.material = material
    

}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Caneca','dois', 'Plástico', 5)
console.log(caneca1)

const camiseta = new Camiseta('regata',10, 100, 'vermelha')
console.log(camiseta);