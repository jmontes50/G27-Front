/*

let edad = +prompt("Ingrese su edad");

// confirm nos permite obtener una respuesta del usuario en forma de un booleano
let acepto = confirm("Aceptar los terminos de uso?");

console.log(acepto)

//Y es que ambos tienen que verdadero

if(edad >= 18 && acepto === true) {
    console.log("Registro completado");
}else {
    console.log("Algo fallo");
}

*/
/*
let usuario = prompt("Introduce tu rol, (admin, supervisor, usuario");

console.log("Ud. ha indicado: ", usuario);

if (usuario === "admin" || usuario === "supervisor") {
    console.log("Ud. tiene acceso a reportes");
} else {
    console.log("Ud. no tiene los permisos para ver los reportes");
}
*/

let rol = prompt("Introduce tu rol, (admin, supervisor, usuario");

console.log("Ud. ha indicado: ", rol);

if (rol === "admin" || rol === "supervisor") {
    console.log("Ud. tiene acceso a reportes");
} else {
    console.log("Ud. no tiene los permisos para ver los reportes");
}