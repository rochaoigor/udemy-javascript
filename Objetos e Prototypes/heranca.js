class dispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado')
        }

        this.ligado = false;
    }
}

class smartPhone extends dispositivoEletronico{
    constructor(nome,cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class tablet extends dispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha você alterou o método ligar')
    }
}

const tablet1 = new tablet('Ipad', true)
const smart1 = new smartPhone('Samsung', 'Preto', 'Galaxy s10')


tablet1.ligar()

console.log(tablet1)
smart1.ligar()
smart1.desligar()

console.log(smart1)