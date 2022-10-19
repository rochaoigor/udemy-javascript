const intro = document.querySelector('#intro')
intro.innerHTML += `Contador`

function contador(onmousemove) {
    const form = document.querySelector('#form1')
    const numero = form.querySelector('#irange')
    const resposta = document.querySelector('#resposta')

if (numero >=0 && numero <= 5) {
    resposta.innerHTML += `O número está entre 0 e 5`;
}else if (numero >=5 && numero <=10) {
    resposta.innerHTML += 'O número está entre 5 e 10'
}else if (numero >=11 && numero <=20){
resposta.innerHTML += 'O número está entre 15 e 20'
}else if (numero >=21 && numero <=30) {
    resposta.innerHTML +='O número está entre 20 e 30'
}else {
    resposta.innerHTML += 'O número NÃO está entre 0 e 30'
}
onmousemove

}

contador(onmousemove)