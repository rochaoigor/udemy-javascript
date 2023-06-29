function shuffle(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function wait(msg, time) {
return new Promise((resolve, reject) => {
    setTimeout( () => {
        if(typeof msg !== 'string' )  {
            reject(false)
            return;
        }
        resolve(msg.toUpperCase() + ' - Passei pela Promise');
        return;
      }, time)     
})
}
const promises = [
    wait(1000, shuffle(1,5)),
    wait('Primeira Promise', shuffle(1,5)),
    wait('Segunda Promise', shuffle(1,5)),
    wait('Terceira Promise',shuffle(1,5)), 
];

Promise.race(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
});