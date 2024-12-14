//cuando lo importemos lo podemos llamar como deseemos
// import esPar from "./07.2-modulo-secundario.js";
import isEven from "./07.2-modulo-secundario.js";
//tengo que respetar el nombre con el que fueron exportadas
import { PI, frutas } from "./07.3-mas-modulos.js";
//NO ES RECOMENDABLE IMPORTAR CON *
// import * as modulo3 from "./07.3-mas-modulos.js";

// const resultado = esPar(11);
const resultado = isEven(10);

console.log(resultado);

// console.log(modulo3);

// const numeroPI = modulo3.PI;
// const frutas2 = [...modulo3.frutas];
// console.log(numeroPI);
// console.log(frutas2);


const numeroPI = PI;
const frutas2 = [...frutas];
console.log(numeroPI);
console.log(frutas2);
