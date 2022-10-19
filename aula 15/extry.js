function mostraHora (data) {
     if(data && ! (data instanceof Date)){
       throw new Error ('Esperando a istancia de Date');  
     }
     if (!data) {
        data = new Date();
     }
     return  data.toLocaleTimeString('pt-br',
     { hour: '2-digit',
       minute: '2-digit',
       second: '2-digit',
       hour12: false
})
}

const hora = mostraHora();
console.log(hora)