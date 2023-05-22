function shuffle(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function wait(msg, time) {
return new Promise((resolve, reject) => {
    if(typeof msg !== 'String' ) reject('Bad Value')
    setTimeout( () => {
        resolve(msg);
      }, time)

})

  
};

wait('Conexão com a Base de Dados', shuffle(1,3))
.then(resposta => {
    console.log(resposta);
    return wait('Buscando os dados...', shuffle(1,3));
})
.then(resposta=> {
console.log(resposta);
return wait('Tratando os dados...', shuffle(1,3))
}).then(resposta => {
    console.log(resposta)
}).then(()=> {
    console.log('Exibe dados na tela')
})

.catch(e => {
    console.log('ERRO', e)
});