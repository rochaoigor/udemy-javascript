class controleRemoto {
 constructor(tv) {
    this.tv = tv;
    this.volume = 0;
 }

 aumentarVolume() {
    this.volume += 2
 }

 diminuirVolume() {
    this.volume -= 2;

}

static trocapilha() {
    console.log('Ok, vou trocar')
}
}

controleRemoto.trocapilha();
const controle1 = new controleRemoto('Samsung')
controle1.aumentarVolume();
console.log(controle1)