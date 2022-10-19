const inputTarefa = document.querySelector('#tarefa')
const form = document.querySelector('#formulario')
const tarefas = document.querySelector('.tarefas')


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
})

inputTarefa.addEventListener('keypress',function(e){
    if(e.key === 'Enter') {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    e.preventDefault();
    console.log('Enter pressionado')
    }
    
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}
function criaLimpar(li){
    li.innerHTML += '';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa Tarefa');
    li.appendChild(botaoApagar)

}
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaLimpar(li)
    salvarTarefa();
    

}

function limpaInput(){
    inputTarefa.value =  '';
    inputTarefa.focus();
}

document.addEventListener('click',function(e){
    const element = e.target;

    if(element.classList.contains('apagar')){
        element.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','');
        listaTarefas.push(tarefaTexto)

    }
    const TarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', TarefasJSON);
}
function addTarefasSalvas (){
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas);
    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa);
    }
}

addTarefasSalvas();