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

//truthy falsy, valores como el 0 el "" '' ``, undefined y null se consideran FALSE

//else if
let correo = "usuario@gmail.com";
let contrasena = "";
let aceptoTerminos = false;

if(!correo){
    console.log("El correo es obligatorio.");
    //si el valor de la contraseña es "" se considera un valor falsy, que es false, al negarlo se convierte en un true
}else if (!contrasena) {
    console.log("La contraseña es obligatoria");
    //si es que el usuario no aceptará los terminos que son falsos al negarlo se convertiria en verdadero
}else if (!aceptoTerminos) {
    console.log("Debes aceptar los términos de uso");
}else {
    console.log("La información llenado de forma correcta");
}