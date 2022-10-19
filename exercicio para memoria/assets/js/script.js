let res = document.querySelector('p')
let input = document.querySelectorAll('input')
let form = document.querySelector('#formulario')
form.addEventListener('click', function(e){
    e.preventdefault();
let searchName = input.value;
input.value = '';
input.focus()
}
);  