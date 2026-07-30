import readline from "node:readline"

const salSemanal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

salSemanal.question("Ingrese el nombre del empleado: ",function(nombre){
    salSemanal.question("Ingrese la cantidad de horas trabajadas: ",function(horas){
        salSemanal.question("Ingrese el pago por hora: ",function(pago){
            let hTrabajadas = parseFloat(horas);
            let pagoHoras = parseFloat(pago);

            let salario = hTrabajadas * pagoHoras;

            console.log(`\n--- Salario Semanal ---`);
            console.log(`Empleado: ${nombre}`);
            console.log(`Salario Semanal: $${salario.toFixed(2)}`);

            salSemanal.close();
        });
    });
});