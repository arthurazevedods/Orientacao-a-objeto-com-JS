class ContaCorrente {
    constructor(agencia, cliente, saldo) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return this._saldo;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor,conta){
        const sacado = this.sacar(valor);
        conta.depositar(sacado);
    }

    getAgencia() {
        return this.agencia;
    }

    getSaldo() {
        return this._saldo;
    }
    mostrarInformacoes() {
        console.log("Cliente: " + this.cliente.getCliente());
        console.log("Agência: " + this.getAgencia());
        console.log("Saldo: R$" + this.getSaldo());
        console.log("-----------------------");
    }
}

module.exports = { ContaCorrente };