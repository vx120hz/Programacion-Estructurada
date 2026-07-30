import readline, { clearScreenDown } from "node:readline";

const promedioNotas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

promedioNotas.question("Ingrese la primera nota: ", function (nota1) {
    promedioNotas.question("Ingrese la segunda nota: ", function (nota2) {
        promedioNotas.question("Ingrese la tercera nota: ", function (nota3) {

            nota1 = Number(nota1);
            nota2 = Number(nota2);
            nota3 = Number(nota3);

            const promedio = (nota1 + nota2 + nota3) / 3;

            console.log(`El promedio de las tres notas es de ${promedio}`);

            promedioNotas.close();

        });
    });
});

