import readline from "node:readline";

const dlsEu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

dlsEu.question("Ingrese la cantidad de dolares: ", function(dolar) {
    dlsEu.question('Ingrese el valor de cambio del euro: ', function(valor) {

        let dolares = parseFloat(dolar);
        let valorEuro = parseFloat(valor);

        let dolarEuro = dolares * valorEuro;

        console.log(`La cantidad a recibir de euros segun la cantidad de dolares es ${dolarEuro.toFixed(2)}€`);
        dlsEu.close();
    });
});