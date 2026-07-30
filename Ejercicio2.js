import readline from "node:readline"

const BxA = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

BxA.question("Ingrese la base del triangulo: ",function(base){
    BxA.question("Ingrese la altura del triangulo: ",function(altura){

        base = Number(base);
        altura = Number(altura);

        const area = (base * altura);

        console.log(`La area del triangulo es ${area}`);
        BxA.close();

    });
});

