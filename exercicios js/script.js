function timer() {
    function getSeconds(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });

    }

    const visor = document.querySelector('#visor')

    let segundos = 0;
    let timer;
    visor.classList.remove('pausado') 
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            visor.innerHTML = `<p> ${getSeconds(segundos)} </p>`
        }, 1000)

    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer)
            visor.classList.remove('pausado')
            visor.innerHTML = `<p>00:00:00</p>`
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            visor.classList.remove('pausado')
            clearInterval(timer);
            iniciaRelogio();

        }
        if (el.classList.contains('pausar')) {
            visor.classList.add('pausado')
            clearInterval(timer)
        }

    });
}

timer();

