'use strict'
//se algo mas estricto
//ámbito de JS
console.log("Hola");

//ámbito global, esta declarado fuera de los bloques de codigo (bloque de una funcion de un if)
let precioConIgv = 1.18;

let moneda = "soles";

function calcularPrecio(precio){
    //de un bloque hacia afuera es accesible
    let resultado = precio * precioConIgv;
    // console.log(resultado);
    let moneda = "dolares";
    console.log("viendo moneda", moneda);
    return resultado;
}

let precioFinal = calcularPrecio(20);

console.log(precioFinal)

//de afuera hacia un bloque, no es accesible
// resultado = 100;

for(let i = 0; i < 5; i++){
    console.log(i);
}

// console.log("afuera del for", i);