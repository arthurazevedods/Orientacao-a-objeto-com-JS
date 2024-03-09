const { ContaCorrente } = require('./ContaCorrente.js');
const { Cliente } = require('./Cliente.js');

const cliente1 = new Cliente("Zuko", "600.000.000-70", new ContaCorrente("4444-0", 23.00));
const cliente2 = new Cliente("Azula", "610.000.000-11", new ContaCorrente("4444-0", 1540.00));
const cliente3 = new Cliente("Aaag", "510.000.000-00", new ContaCorrente("4233-0", 0.80));

const clientes = [cliente1, cliente2, cliente3];

async function percorrerClientes(array) {
    for (let cliente of array) {
        //await delay(5000); // Aguardar 5 segundos antes de continuar
        cliente.mostrarInformacoes();
    }
}

// Função para criar um atraso
function delay(ms) {
    console.log("Carregando informações...")
    return new Promise(resolve => setTimeout(resolve, ms));
}

percorrerClientes(clientes);
cliente2.contacorrente.sacar(49.50);
cliente3.contacorrente.depositar(60);
percorrerClientes(clientes);
