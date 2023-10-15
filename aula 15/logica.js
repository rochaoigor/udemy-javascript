function ePaisagem (largura,altura) {
   if (largura > altura) {
    return true
    
   }else {
    return false;
}
}
console.log(ePaisagem(1080,1920))

if(emailValue != emailServer) {
    errorMessage.innerHTML = 'E-mail incorreto'
    email.focus()
    return ;
 }

     
 if(passwordValue == '' || passwordValue == null) {
    errorMessage.innerHTML = 'Campo de senha não pode estar vazio'
    password.focus();
    return ;
 }

 if(emailValue != emailServer && passwordValue != passwordServer) {
    errorMessage.innerHTML = 'Senha incorreta'
    password.focus()
    return;
 }