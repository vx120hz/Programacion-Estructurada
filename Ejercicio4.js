import readline from "node:readline"

const SistemaProduct = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

SistemaProduct.question("Ingrese el nombre del productio: ",function(nombreProducto){
SistemaProduct.question("Ingrese el precio unitario del productio: ",function(precio){
    SistemaProduct.question("Ingrese la cantidad de productos comprados: ",function(cantidad){

        precio = Number(precio);
        cantidad = Number(cantidad);

        const totalPagar = (precio * cantidad);

        console.log(`El totar a pagar es de ${totalPagar}`);
        SistemaProduct.close();
    });
});
});