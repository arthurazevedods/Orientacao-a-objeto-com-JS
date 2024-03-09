class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getCliente(){
        return [`Nome: ${this.nome}`, `CPF: ${this.cpf}`];
    }
}

module.exports = { Cliente };
