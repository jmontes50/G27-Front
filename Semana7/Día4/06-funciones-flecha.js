//ciudadano de primera clase
//JS tiene la capacidad de tratar a las funciones como valores o entidades de igual importancia como si fueran numbers, strings, variables

// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// const saludar = function(nombre){
//   return `Hola ${nombre}`;
// }

//funciones flecha, siguen siendo funciones pero con más posibilidades
// const saludar = (nombre) => {
//   return `Hola ${nombre}`;
// }

//cuando la operación es sencilla digamos 1 linea dentro de la función se puede acortar aún más
// (params) => loQueSeVaARetornar
// const saludar = (nombre) => `Hola ${nombre}`;

//Si la función flecha tiene 01 solo parámetro lo podemos indicar sin los parentesis
const saludar = nombre => `Hola ${nombre}`;

console.log(saludar("Elvis"));
