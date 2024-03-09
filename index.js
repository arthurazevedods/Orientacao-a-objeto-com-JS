class Cliente {
    constructor(nome, cpf, contacorrente) {
        this.nome = nome;
        this.cpf = cpf;
        this.contacorrente = contacorrente
    }
    mostrarInformacoes(){
        console.log("Nome: " + this.nome);
        console.log("CPF: " + this.cpf);
        console.log("Agência: " + this.contacorrente.agencia);
        console.log("Saldo: R$" + this.contacorrente.saldo);
        console.log("-----------------------");
    }
}

class ContaCorrente{
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
    }
}

const cliente1 = new Cliente("Zuko", "600.000.000-70", new ContaCorrente("4444-0", 23.00));
const cliente2 = new Cliente("Azula", "610.000.000-11", new ContaCorrente("4444-0", 1540.00));
const cliente3 = new Cliente("Aaag", "510.000.000-00", new ContaCorrente("4233-0", 0.80));

const clientes = [cliente1, cliente2, cliente3];

async function percorrerClientes(array) {
    for (let cliente of array) {
        await delay(5000); // Aguardar 5 segundos antes de continuar
        cliente.mostrarInformacoes();
    }
}

// Função para criar um atraso
function delay(ms) {
    console.log("Carregando informações...")
    return new Promise(resolve => setTimeout(resolve, ms));
}

percorrerClientes(clientes);
