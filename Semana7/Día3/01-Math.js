let numeroPI = Math.PI;

//trucooo ya que sabemos objetos
// console.log("numeroPI", numeroPI);
//en vez de hacer lo de arriba
// console.log({ numeroPI: numeroPI });
console.log({ numeroPI });

let numEuler = Math.E;
console.log(numEuler);

let numeroNegativo = -25.768;
let numeroPositivo = 12.51;

//Math.abs me da el valor absoluto que es el valor positivo de un número
console.log(Math.abs(numeroNegativo));

//redondear para arriba, hasta que sea un entero
console.log(Math.ceil(numeroPositivo));

//redondear para abajo, hasta que sea un entero
console.log(Math.floor(numeroPositivo));

//el va a buscar redondear pero en base a matemáticas, si es 5 o + el decimal lo redondeara para arriba
console.log(Math.round(numeroPositivo));

//mostrar X cantidad de decimales por ej. 2 decimales si utilizo toFixed(2)
//si tienen que hacer operaciones no utilicen el toFixed, utilicenlo solamente para ya mostrar información después de haber hecho operaciones
console.log("toFixed", numeroNegativo.toFixed(2));

//número aleatorio entre 0 y 1, 0% y 100%
console.log("random!", Math.random());

//numero aleatorio entre 1 y 255, puede ser utilizado colores
// const entre1y255 = Math.floor((Math.random() * 255) + 1);
const entre1y255 = Math.ceil((Math.random() * 255));
console.log({ entre1y255 })