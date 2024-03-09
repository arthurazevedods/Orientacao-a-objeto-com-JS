const { ContaCorrente } = require('./ContaCorrente.js');
const { Cliente } = require('./Cliente.js');

const conta1 = new ContaCorrente("4444-0", new Cliente("Zuko", "600.000.000-70"),23.00);
const conta2 = new ContaCorrente("4444-0", new Cliente("Azula", "610.000.000-11"),23.00);
const conta3 = new ContaCorrente("4444-0", new Cliente("Aaag", "510.000.000-00"),23.00);


const contas = [conta1, conta2, conta3];

async function percorrerContas(array) {
    for (let conta of array) {
        conta.mostrarInformacoes();
    }
}

percorrerContas(contas);
conta2.transferir(4.0, conta3);
conta3.transferir(2.0,conta1);
console.log("Depois das transferências:")
percorrerContas(contas);
