let ahora = new Date();

console.log(ahora);

let navidad = new Date("2024-12-25");

console.log(navidad);

//new Date(año, mes(11), día, hora, minuto, segundo)
//los meses comienzan desde 0 es enero 11 diciembre
let anioNuevo = new Date(2024, 11, 31, 23, 59, 59);

console.log(anioNuevo);

console.log("año", anioNuevo.getFullYear());

console.log("mes",anioNuevo.getMonth());

console.log("Día",anioNuevo.getDate());