               //-12          -11          -10      -9//
               //0            1           2        3 //
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto','Setembro', 'Outubro','Novembro','Dezembro']



const removido = meses.splice(-12,1)
const adicionado = meses.splice(1,1, 'Mes Adicionado entre o indice zero')
console.log(meses)
console.log(adicionado)

//pop 
//meses.splice(-1,1)


//shift
//meses.splice(0,1)

//push
//meses.splice(meses.length , 0 , 'Adicionado')

//unshift 
//meses.splice(0,0,'Igor Dos Santos Rocha')

console.log(meses)