class Cliente {
    constructor(nome, cpf, contacorrente) {
        this.nome = nome;
        this.cpf = cpf;
        this.contacorrente = contacorrente;
    }

    mostrarInformacoes() {
        console.log("Nome: " + this.nome);
        console.log("CPF: " + this.cpf);
        console.log("Agência: " + this.contacorrente.getAgencia());
        console.log("Saldo: R$" + this.contacorrente.getSaldo());
        console.log("-----------------------");
    }
}

module.exports = { Cliente };
