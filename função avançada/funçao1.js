//function hoisting

falaoi() 

function falaoi(){
    console.log('oie')
}


//first class objects (objetos de primeira classe)//
//function expression//

const falaOi = function () {
    console.log('oirr')
}

function executa(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executa(falaOi)

//arrow function//

const functionArrow = () => {
    console.log('sou uma função arrow')
}

functionArrow()

//dentro de um object //

const obj = {
    falar() {
        console.log('Estou falando....')
    }
}

obj.falar();