const produto = { nome:'Produto', preco:1.8, material:'porcelana'}

for(let [key,value]of Object.entries(produto)){
    console.log(key,value)
}