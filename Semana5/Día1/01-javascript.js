console.log("Hola Mundo!");

//Queremos definir la información 
//VARIABLES
//NO RECOMIENDO QUE UTILICEN VAR
//vamos a estar utilizando más que todo let
let primerNombre = "Edmundo";

console.log(primerNombre);

// var primerNombre = "Edwin";
// console.log(primerNombre);

//String, le indicamos que es una cadena de carácteres
let apellido = "FuentesRivera";
console.log(apellido);

//number, e indicamos directamente el número
let edad = 50;

console.log(edad);

//cambio de valor
edad = 60;

console.log(edad);

//Boolean, verdadero ó falso
let llueve = true;

let soleado = false;

console.log(llueve);

//undefined, no tiene un valor definido, NO ES DELIBERADO
let pago;
console.log(pago);

//null, no tiene un valor definido, ES DELIBERADO
let esNulo = null;
console.log(esNulo);

//tengan cuidado con las mayúsculas, caseSensitive

//typeof es una utilidad que me permite mostrar el tipo de dato de algo
//tenemos tipos de datos primitivos
console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof llueve);

console.log(typeof esNulo);

//sentencia, asignando un valor, es dar una orden
let x = 100;

//expresion es x por si solo, una expresión s algo que me da y representa un valor
console.log(x);

let a = 50;

let b = 75;

console.log(a + b);