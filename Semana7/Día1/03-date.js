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

//el tiempo que me da el timestamp es en milisegundos
//es la cantidad de milisegundos desde el 01 de enero de 1970
console.log(ahora.getTime());

let diasHastaNavidad = navidad.getTime() - ahora.getTime();

console.log(diasHastaNavidad);

let segundos = diasHastaNavidad / 1000;

console.log("segundos", segundos);

let minutos = segundos / 60;

console.log("minutos", minutos);

let horas = minutos / 60;

console.log("horas", horas);

let dias = horas / 24;

console.log("dias", dias);