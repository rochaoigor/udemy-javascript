let nome = ['Igor', 'Julia', 'Raquel','Lais', 'Tiago']



for(let i = 0; i < nome.length;i++){ //geralmente com iteraveis, arrays e strings
    console.log(nome[i])
}

for (let i in nome) { // retorna o indice, com chave. Strings, arrays ou objetos.
    console.log(nome[i])
}

for(let valor of nome) //acessa somente o valores, funciona com iteraveis. arrays ou strings;
console.log(valor)