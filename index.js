const { ContaCorrente } = require('./ContaCorrente.js');
const { Cliente } = require('./Cliente.js');

const conta1 = new ContaCorrente("4444-0", new Cliente("Zuko", "600.000.000-70"),23.00);
const conta2 = new ContaCorrente("4444-0", new Cliente("Azula", "610.000.000-11"),23.00);
const conta3 = new ContaCorrente("4444-0", new Cliente("Aaag", "510.000.000-00"),23.00);


const contas = [conta1, conta2, conta3];

async function percorrerContas(array) {
    for (let conta of array) {
        //await delay(5000); // Aguardar 5 segundos antes de continuar
        conta.mostrarInformacoes();
    }
}

// Função para criar um atraso
function delay(ms) {
    console.log("Carregando informações...")
    return new Promise(resolve => setTimeout(resolve, ms));
}

percorrerContas(contas);
conta2.transferir(4.0, conta3);
percorrerContas(contas);
