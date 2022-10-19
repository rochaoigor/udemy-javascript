let paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p')
let estilosBody = getComputedStyle(document.body)
let backgroundColorBody = estilosBody.backgroundColor;
let section = document.querySelector('section')
for (let p of ps) {
    p.style.color = 'white';
    p.style.fontSize = '1.5em'
    p.style.padding = '10px';
    p.style.borderRadius = ' 10px'
    p.style.backgroundColor=  backgroundColorBody;
}

section.style.margin = 'auto';
section.style.marginTop = '50px';
section.style.backgroundColor = 'aqua'
