let numeroPI = Math.PI;

//trucooo ya que sabemos objetos
// console.log("numeroPI", numeroPI);
//en vez de hacer lo de arriba
// console.log({ numeroPI: numeroPI });
console.log({ numeroPI });

let numEuler = Math.E;
console.log(numEuler);

let numeroNegativo = -25.768;
let numeroPositivo = 12.56;

//Math.abs me da el valor absoluto que es el valor positivo de un número
console.log(Math.abs(numeroNegativo));

//redondear para arriba, hasta que sea un entero
console.log(Math.ceil(numeroPositivo));

//redondear para abajo, hasta que sea un entero
console.log(Math.floor(numeroPositivo));

//el va a buscar redondear pero en base a matemáticas, si es 5 o + el decimal lo redondeara para arriba
console.log(Math.round(numeroPositivo));