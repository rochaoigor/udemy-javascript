const produto = { nome: 'Produto', preco: 1.80};
const caneca = {
    ...produto,
    material: 'porcelana'
}

caneca.nome = 'One Piece'
caneca.preco = 2.5
//console.log(produto)
//console.log(caneca)

const produto2 = {nome:'Tenis', preco:250.00};
const tenis = Object.assign({}, produto2, {material: 'porcelana'})
//console.log(produto2)
tenis.nome = 'nike'
tenis.preco = 350.00
//console.log(tenis)

const produto3 = { nome:'Guaraná', preco: 5.00, estoque: 5000}
Object.defineProperty(produto3, 'nome', {
  writable:false,
  configurable:false,
  value: 'Coca-cola'
})
produto3.nome = 'Tubaína'   
console.log(produto3)
console.log(Object.values(produto3))
//console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'))