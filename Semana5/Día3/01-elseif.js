//yo quiero validar si un usuario esta logueado (si a iniciado sesión) o no.

let estaLogueado = false; //el usuario no ha iniciado sesión

if(!estaLogueado) {
    console.log("Por favor inicia sesión");
} else {
    console.log("Ya ingresaste, bienvenido de vuelta");
}

//else if sintaxis
let num = 4;
/**
 * if(expresion){
 * 
 * }else if(expresion){
 * 
 * } else {
 * 
 * }
 */
if (num > 8) {
  console.log("Es mayor que 8");
} else if (num > 5) {
  console.log("Es mayor que 5");
} else if(num > 3){
  console.log("Es mayor que 3");
} else {
  console.log("Debe ser mayor que 0");
} 

//else if
let correo = "usuario@gmail.com";
let contrasena = "";
let aceptoTerminos = false;
