function shuffle(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
return new Promise((resolve, reject) => {
    setTimeout( () => {
        if(typeof msg !== 'string' ) {
            reject('CAI NO ERRO')
            return;
        }
       
        resolve(msg.toUpperCase() + ' - Passei pela Promise');
        return;
      }, time)
    });
}

async  function init() {
    try {
        const fase1 = await wait('Fase 1', shuffle(0,3))
    console.log(fase1)
    const fase2 = await wait('Fase 2', shuffle(0,3))
    console.log(fase2)
    const fase35 = await wait(3, shuffle(0,3))
    console.log(fase35)
    const fase3 = await wait('Fase 3', shuffle(0,3))
    console.log(fase3)
   
    } catch(e) {
        console.log('ERRO', e)
    }
}

init();