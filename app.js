const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedades = [];

function perguntarPropriedade() {
    rl.question('Digite uma propriedade CSS (ou "SAIR" para encerrar):\n', propriedade => {
        if (propriedade.toUpperCase() === 'SAIR') {
            ordenarEImprimirPropriedades();
        } else {
            propriedades.push(propriedade.toLowerCase());
            perguntarPropriedade();
        }
    });
}

function ordenarEImprimirPropriedades() {
    propriedades.sort();
    console.log('\nPropriedades ordenadas de A-Z:');
    propriedades.forEach((propriedade) => {
        console.log(propriedade);
    });
    rl.close();
}

perguntarPropriedade();