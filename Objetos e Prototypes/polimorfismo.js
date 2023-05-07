function Conta(agencia,conta,saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();

}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta} ` + 
    `Saldo:R$ ${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia,conta,saldo, limite) {
    Conta.call(this,agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo) + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
} 

function contaPoupanca(agencia,conta,saldo) {
    Conta.call(this, agencia, conta, saldo);
}

contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca

const Contapoupanca = new contaPoupanca(15, 50, 500)

const contaCorrente = new ContaCorrente(11,20,0,100)

Contapoupanca.depositar(10)
Contapoupanca.sacar(30)

const conta1 = new Conta(11,22,10)
