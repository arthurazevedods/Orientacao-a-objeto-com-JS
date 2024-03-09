class Cliente {
    static totalClientes = 0;
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
        Cliente.totalClientes++;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }

    getCliente() {
        return [`Nome: ${this._nome}`, `CPF: ${this._cpf}`];
    }
}

module.exports = { Cliente };
