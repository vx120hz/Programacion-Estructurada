import readline from "node:readline"

const longCm = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

longCm.question("Ingrese la longitud expresada en metros: ",function(metros){

    let longitudMetros = parseFloat(metros);

    let longitudCentimetros = longitudMetros * 100;

    console.log(`La longitud ingresada en metros es ${longitudMetros}`);
    console.log(`La equivalencia en centimetros es de ${longitudCentimetros} cm`);
    longCm.close();
    

});