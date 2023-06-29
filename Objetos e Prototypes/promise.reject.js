function shuffle(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
return new Promise((resolve, reject) => {
    setTimeout( () => {
        if(typeof msg !== 'string' ) {
            reject(false)
            return;
        }
        resolve(msg.toUpperCase() + ' - Passei pela Promise');
        return;
      }, time)
})
}
function downloadPage() {
    const inCache = true;
    if(inCache) {
        return Promise.reject('Página em cache')
    }else {
        return wait('Download', 3000)
    }

}
downloadPage()
.then(dataPage => {
    console.log(dataPage)
})
.catch(e => console.log('ERRO',e))