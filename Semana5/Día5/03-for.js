// for (inicialización; expresión; actualización) {
// codigo a ejecutar repetitivamente hasta que la expresión sea falsa
//}

/*
for (let i = 0; i < 10; i++) {
    console.log(`Mostrando el # ${i}`);
}

*/

/*
//solicitar un número
let numero = +prompt("Ingrese un número para generar tabla");


for(let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
}

console.log("------------------------");
*/

//control de cuentas
let cantCompras = +prompt("Cuantas compras hiciste?"); //3
let costoTotal = 0;

for(let i = 1; i <= cantCompras; i++) {
    let costoCompraActual = +prompt("Cuanto costo está compra?");
    console.log(`La compro actual costo ${costoCompraActual}`);
    costoTotal = costoTotal + costoCompraActual;
}

console.log(`Gastaste un total de ${costoTotal}`);