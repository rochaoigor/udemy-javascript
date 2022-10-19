function conta(operadores,acumulador,...numeros) {
    for(let numero of numeros) {
       if(operadores === '+') acumulador += numero;
       if(operadores === '-') acumulador -= numero;
       if(operadores === '*') acumulador *= numero;
       if(operadores === '/') acumulador /= numero;
       if(operadores === '%') acumulador %= numero;

    }
    console.log(acumulador)
}
conta('-',1,2,3,4,5,6,7,8,10)