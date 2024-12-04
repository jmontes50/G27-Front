/**
 * Según el número ingresado por un usuario, calcula la suma de los valores positivos menores a este número (comenzando desde 1).
 */
//Solicitar al usuario un número.
let numeroIngresado = +prompt("Ingrese un número");
//Inicializar una variable suma en 0.
let suma = 0;
// Para cada número desde 1 hasta el número ingresado
//for(inicializador; limite; actualizador){}
for(let i = 1; i < numeroIngresado; i++){
    //Sumar el número actual a la variable suma
    //i cambiara de 1 a 2 a 3... hasta el numIngresado
    // suma = suma + i;
    suma += i;
}
//cuando termine el for
// Imprimir el valor de suma.
console.log(`La suma de los valores previos a ${numeroIngresado} es ${suma}`);

//n (n-1)/2
let resultadoConFormula = numeroIngresado*((numeroIngresado - 1) / 2);
console.log(`El resultado con fórmula es: ${resultadoConFormula}`);