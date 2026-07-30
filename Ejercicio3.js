import readline from "node:readline"

const EquivalenciaMin = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

EquivalenciaMin.question("Ingrese la cantidad de horas: ",function(horas){

    horas = Number(horas);

    const min = (horas * 60 );

    console.log(`La cantidad de horas ingresadas equivale a ${min} minutos`);
    EquivalenciaMin.close();

});
