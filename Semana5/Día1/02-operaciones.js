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

// multiplicación
let precioPorDos = precioDescontado * 2;
console.log("Este es el precio por 02 unid.:", precioPorDos);

let precioConIGV = precioPorDos * 1.17;
console.log("Precio con impuestos", precioConIGV);

// división
let enCuotas = precioConIGV / 4;
console.log("Cuota individual", enCuotas);


//
let a = 10;

console.log("A valor inicial", a);
//de esta manera se indica
a = a + 1; //11

a++; //12
console.log("sumando + 1:", a);

a--; //11
console.log("restando - 1:",a);

// const body = document.querySelector("body");

// body.innerHTML = a;
//estamos indicando que a se sume +100
// a = a + 100;
a+=100;
console.log(a);

// a = a - 6;
a-=6;
console.log(a);

//módulo aritmético
let residuo = 100 % 3;
console.log("este es el residuo: ",residuo);