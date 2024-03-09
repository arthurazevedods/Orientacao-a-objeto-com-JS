class ContaCorrente {
    constructor(agencia, saldo) {
        this.agencia = agencia;
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

    getAgencia() {
        return this.agencia;
    }

    getSaldo() {
        return this._saldo;
    }
}

module.exports = { ContaCorrente };