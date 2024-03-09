const { ContaCorrente } = require('./ContaCorrente.js');
const { Cliente } = require('./Cliente.js');

const cliente1 = new Cliente("Zuko", "600.000.000-70");
const cliente2 = new Cliente("Azula", "610.000.000-11");
const cliente3 = new Cliente("Aaag", "510.000.000-00");


const conta1 = new ContaCorrente("4444-0", cliente1, 23.00);
const conta2 = new ContaCorrente("4444-0", cliente2, 23.00);
const conta3 = new ContaCorrente("4444-0", cliente3, 23.00);
const conta4 = new ContaCorrente("4333-0", cliente3, 3.00);

const contas = [conta1, conta2, conta3];

async function percorrerContas(array) {
    for (let conta of array) {
        conta.mostrarInformacoes();
    }
}

percorrerContas(contas);
conta2.transferir(4.0, conta3);
conta4.transferir(2.0, conta3);
conta3.transferir(30.0, conta1);
console.log("Depois das transferências:");
percorrerContas(contas);

// Exibindo o número total de clientes e contas correntes criadas
console.log("Total de clientes criados: " + Cliente.totalClientes);
console.log("Total de contas correntes criadas: " + ContaCorrente.totalContas);
