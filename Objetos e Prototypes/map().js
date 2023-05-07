const produtos = [
    {id:3, nome: 'Coca-cola', preco: 5.99},
    {id:2, nome: 'Bala', preco:0.50},
    {id:1, nome: 'Sorvete', preco: 2.00}

];

produtos.push({id:4, nome: 'Ração', preco:5.99});

const novosProdutos = new Map();
for(const produto of produtos) {
    const {id} = produto;
    novosProdutos.set(id, {...produto});

}



console.log(novosProdutos)