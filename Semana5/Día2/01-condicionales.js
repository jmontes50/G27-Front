// expresiones
//es algo que por si solo me da un valor

//palabra reservada if
/*
if(expresión si es V Ó F) {
    S es verdadero se ejecutará este bloque
} else {
    pero si es Falso se ejecutará este otro bloque
} */

/*   
let nota = 10;

//expresión
console.log(nota >= 13);

if(nota >= 13) {
  console.log("Esta aprobado 😂");
} else {
  console.log("No aprobo 😔 ");
}
*/

/*
let numeroSecreto = 26;

//+prompt busca convertir lo ingresado a un number
let numeroJugador = +prompt("Ingrese el número para adivinar");
//usando == solo comparamos el valor de la condicional no el tipo
//lo recomendable es SIEMPRE usar === para comparar valor y tipo de dato
// if (numeroSecreto == numeroJugador) {
if (numeroSecreto === numeroJugador) {
  console.log("Ganaste");
}else{
  console.log("Perdiste, no adivinaste");
}
*/

/*
let numeroSecreto = 24;
let numeroAEvaluar = 24;

//!== diferente de
if(numeroSecreto !== numeroAEvaluar) {
  console.log("Perdiste GG");
} else {
  console.log("Ganaste premio");
}
*/

//Mi farma, A partir de 60 años tienes 10% de descuento;

//con el +prompt convertimos la entrada a número
let edad = +prompt("Ingrese su edad");

console.log("La edad:", edad);
console.log("El tipo:", typeof edad);

if(edad >= 60) {
  console.log("Tiene su 10% de descuento");
} else {
  console.log("Lo sentimos no tiene descuento... todavía");
}