let procesador = 300;
let memoria = 200;
let placaMadre = 150;

/*  comentario de bloque
Las operaciones aritméticas básicas son
intuitivas, ya que usan los mismos símbolos(operadores) ,
que usariamos nosotros en general + -  *  / 
*/

//comentario de una sola línea
let precioTotal = procesador + memoria + placaMadre;
console.log("El precio total es:", precioTotal);

// resta
let descuentoFijo = 75;
let precioDescontado = precioTotal - descuentoFijo;
console.log("El precio ya con dscto es:", precioDescontado);

let precioPorDos = precioDescontado * 2;
console.log("Este es el precio por 02 unid.:", precioPorDos);

let precioConIGV = precioPorDos * 1.17;
console.log("precio con impuestos", precioConIGV);

