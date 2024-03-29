function shuffle(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
return new Promise((resolve, reject) => {
    if(typeof msg !== 'string' ) {
        reject(false)
        return;
    }
   
    setTimeout( () => {
        resolve(msg.toUpperCase() + ' - Passei pela Promise');
        return;
      }, time)
})
}
const promises = [
    'Primeiro Valor',
    wait('Primeira Promise', 3000),
    wait('Segunda Promise', 500),
    wait('Terceira Promise',1000),
    wait(5, 200),
    'Outro Valor'
];

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
});