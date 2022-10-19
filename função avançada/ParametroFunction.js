function funcao() {
   console.log(arguments)
}

funcao('Valor',1,2,3,4,5,6,7,8,9)

function funcao(a,b,c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1,2,3,4,5,6,7,8,9,10)