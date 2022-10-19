function criaPessoa(nome, sobrenome,altura,peso){
    return { nome,
         sobrenome,
         get nomecompleto(){
          return `${this.nome} ${this.sobrenome}`;
         },

         set nomecompleto(valor) {
          valor = valor.split(' ');
          this.nome = valor.shift()
          this.sobrenome = valor.join(' ');
         },

         fala(assunto) {
            return `${this.nome} está ${assunto}`
         },

         altura: altura,
         peso: peso,

         get imc(){
            const indice = this.peso /(this.altura**2)
            return indice.toFixed(2);
         }
     };
}

p1 = criaPessoa('Igor','Rocha',1.8 ,60)
p2 = criaPessoa('Carol', 'Magliano', 1.58,60)
p1.nomecompleto = 'Rogério Roberto Silva'
console.log(p1.nomecompleto)