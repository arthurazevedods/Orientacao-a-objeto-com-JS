class ContaCorrente {
    static totalContas = 0;
    constructor(agencia, cliente, saldo) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
        ContaCorrente.totalContas++;
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

    transferir(valor, conta) {
        const sacado = this.sacar(valor);
        conta.depositar(sacado);
    }

    get agencia() {
        return this._agencia;
    }

    set agencia(novaAgencia) {
        this._agencia = novaAgencia;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    mostrarInformacoes() {
        console.log("Cliente: " + this._cliente.getCliente());
        console.log("Agência: " + this.agencia);
        console.log("Saldo: R$" + this.saldo);
        console.log("-----------------------");
    }
}

module.exports = { ContaCorrente };
