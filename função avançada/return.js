function falafrase(comeco) {
    function falaresto(resto){
        return comeco + ' ' + resto
    }
    return falaresto
}

const comeco = falafrase('Olá');
const resto = comeco('Mundo!');

console.log(resto)