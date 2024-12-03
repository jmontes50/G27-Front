//las propiedades se separan por comas ,
let gato = {
    //propiedad: valor,
    //clave: valor,
    nombre: "Bon",
    color: "Negro",
    edad: 2,
    fechaVacunacion: "2/12/2024",
    //un objeto si puede tener algo con - como propiedad, pero tiene que estar entre comillas
    "anio-nacimiento": 2022
}

console.log(gato);

//notación de punto objeto.propiedad
console.log(gato.nombre);
console.log(gato.color);
//notación de corchetes
console.log(gato["anio-nacimiento"]);

//desestructuración, yo ya conozco que propiedades tiene un objeto

// let { listas propiedades } = nombre objeto
let { edad, nombre } = gato;
console.log("desestructuración: ", edad);
console.log("desestructuración: ", nombre);
