'use strict'
//se algo mas estricto
//ámbito de JS
console.log("Hola");

//ámbito global, esta declarado fuera de los bloques de codigo (bloque de una funcion de un if)
let precioConIgv = 1.18;

function calcularPrecio(precio){
    //de un bloque hacia afuera es accesible
    let resultado = precio * precioConIgv;
    console.log(resultado);
}

calcularPrecio(20);

//de afuera hacia un bloque, no es accesible
resultado = 100;
