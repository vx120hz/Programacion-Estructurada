import readline from "node:readline"

const comprasSistema = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

comprasSistema.question("Ingrese el precio Unitario del producto: ",function(precio){
    compraSistema.question("Ingrese la cantidad que desea comprar: ",function(cantidad){

        let precioUnitario = parseFloat(precio);
        let cantidadCompra = parseInt(cantidad);

        let totalPagar = precioUnitario * cantidadCompra;

        console.log(`El total a pagar es de ${totalPagar} dolares`);
        comprasSistema.close();
    });
});