/* SetInterval e Settimeout */

function mostrahora() {
    let data = new Date;
    return data.toLocaleTimeString('Pt-BR', {
    hour12:false
});
}

function Interval() {
    console.log(mostrahora())
}

let timer = setInterval(Interval, 1000);

setTimeout(function (){
    clearInterval(timer);
},50000)


