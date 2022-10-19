function calculo () {
    const nome = prompt('Qual o Nome do Aluno?');
    const n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    const n2 = Number(prompt(`Qual as segunda nota de ${nome} ?`));
   const result = (n1+n2)/2

   const resposta = document.querySelector('#texto')
   resposta.innerHTML += `<p>Calculando média de ${nome}</p>`;
   resposta.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`
   resposta.innerHTML += `A média de ${nome} é: ${result}`;
}