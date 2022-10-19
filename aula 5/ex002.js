const nome='Igor';
const sobrenome='Rocha';
const alturaemM = 1.72;
const peso = 60;
const idade = 27;
let nascimento;
let imc;
imc = peso / (alturaemM*alturaemM)
nascimento = 2022 - idade

//template strings//
console.log(`${nome} ${sobrenome}   tem  ${alturaemM} de altura e pesa ${peso} KG tem ${idade} anos de idade nasceu no ano de ${nascimento} seu imc é de:${imc}`)



