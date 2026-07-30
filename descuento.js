import readline from "node:readline";

const compraDesc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

compraDesc.question("Ingrese el total de la compra: ", function(compra) {
  compraDesc.question("Ingrese el porcentaje de descuento: ", function(desc) {

    let compraNum = parseFloat(compra);
    let descNum = parseFloat(desc);


    let montoDescuento = compraNum * (descNum / 100);
    let totalConDescuento = compraNum - montoDescuento;

    console.log(`El total de la compra sin descuento es de ${compraNum}`);
    console.log(`El descuento a aplicar es ${descNum}%`);
    console.log(`El descuento aplicado es de $${montoDescuento}`);
    console.log(`El total a pagar es de $${totalConDescuento}`);

    compraDesc.close();
  });
});