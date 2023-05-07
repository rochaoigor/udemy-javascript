function Produto(nome,preco,estoque, validade) {
    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        },
        preco: {
            enumerable:true,
            value:preco,
            writable:true,
            configurable:true,
        },
        estoque: {
            enumerable:true,
            value:estoque,
            writable:true,
            configurable:true
        },
        validade: {
            enumerable:true,
            value:validade,
            writable:true,
            configurable:true
        }
        
    })
}

const Produto1 = new Produto('Maionese', 1.99, 2000, 10.2022)
const produto2 = new Produto('Ketchup',1.50, 3000,12.2023)
const produto3 = new Produto('Coca-Cola', 9.79, 500,12.2023)

console.log(produto2)