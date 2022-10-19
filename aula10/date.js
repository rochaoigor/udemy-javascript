function AdicionarZero(num) {
    return num >10 ? num :`0${num}`
}

function FormData(data) {
    let dia =  AdicionarZero(data.getDate())
    let mes =  AdicionarZero(data.getMonth())
    let ano =  AdicionarZero(data.getFullYear())
    let hora =  AdicionarZero(data.getHours())
    let min =  AdicionarZero(data.getMinutes())
    let seg =  AdicionarZero(data.getSeconds())
    return `${dia}/${mes}/${ano}. ${hora}:${min}:${seg}`
}

let data =new Date() 
let dataBrasil = FormData(data);
console.log(dataBrasil)