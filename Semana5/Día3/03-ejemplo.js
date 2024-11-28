/**
 * Crea un programa para una tienda que calcule descuentos en las compras. Las reglas son:
Si el cliente tiene una tarjeta de membresía Y el total de la compra es $100 o más, aplica un 20% de descuento.
Si el cliente tiene una tarjeta de membresía Ó el total de la compra es $100 o más (pero no ambos), aplica un 10% de descuento.
En cualquier otro caso, no se aplica descuento.

 */

let montoCompra = +prompt("Ingrese el monto de la compra");
let tieneMembresia = confirm("Tiene membresía?");

let compraFinal = 0;

if(montoCompra >= 100 && tieneMembresia === true) {
    // compraFinal = montoCompra - (montoCompra * 0.2);
    compraFinal = montoCompra * 0.8;
}else if (montoCompra >= 100 || tieneMembresia === true) {
    compraFinal = montoCompra * 0.9;
}else {
    compraFinal = montoCompra;
}
//EL ORDEN DE EVALUAR LAS CONDICIONALES PUEDE AFECTAR AL RESULTADO
// if(montoCompra >= 100 || tieneMembresia === true) {
//     compraFinal = montoCompra * 0.9;
// }else if (montoCompra >= 100 && tieneMembresia === true) {
//     compraFinal = montoCompra * 0.8;
// }else {
//     compraFinal = montoCompra;
// }

console.log(`El monto de su compra es ${compraFinal}`);