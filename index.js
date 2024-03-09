class Cliente {
    constructor(nome, cpf, agencia, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo;
    }
}

const cliente1 = new Cliente("Zuko", "600.000.000-70", "4444-0", 200.50);
const cliente2 = new Cliente("Azula", "610.000.000-11", "4444-0", 2200.00);
const cliente3 = new Cliente("Aaag", "510.000.000-00", "4233-0", 0.80);

const clientes = [cliente1, cliente2, cliente3];

async function percorrerClientes(array) {
    for (let cliente of array) {
        await delay(5000); // Aguardar 5 segundos antes de continuar
        console.log("Nome: " + cliente.nome);
        console.log("CPF: " + cliente.cpf);
        console.log("Agência: " + cliente.agencia);
        console.log("Saldo: R$" + cliente.saldo);
        console.log("-----------------------");
    }
}

// Função para criar um atraso
function delay(ms) {
    console.log("Carregando informações...")
    return new Promise(resolve => setTimeout(resolve, ms));
}
percorrerClientes(clientes);
