let num = Number(prompt ('Digite um número'));
 
const numeroTitulo = document.getElementById ('resultado');
const respostatexto = document.getElementById ('texto');
numeroTitulo.innerHTML = num;
respostatexto.innerHTML += `Raíz quadradada: ${num ** 0.5}<br>`;
respostatexto.innerHTML += `${num} é inteiro?: ${Number.isInteger(num)}<br>`;
respostatexto.innerHTML += `É NaN: ${Number.isNaN(num)}<br>`;
respostatexto.innerHTML += `Arredondando Pra cima: ${Math.ceil(num)}<br>`;
respostatexto.innerHTML += `Arredondando pra baixo: ${Math.floor(num)}<br>`;
respostatexto.innerHTML += `Com Duas Casas Decimais:
${num = (num.toFixed(2))}`;
