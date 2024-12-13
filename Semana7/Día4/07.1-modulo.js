//cuando lo importemos lo podemos llamar como deseemos
// import esPar from "./07.2-modulo-secundario.js";
import isEven from "./07.2-modulo-secundario.js";
//tengo que respetar el nombre con el que fueron exportadas
import { PI, frutas } from "./07.3-mas-modulos.js";

// const resultado = esPar(11);
const resultado = isEven(10);

console.log(resultado);

const numeroPI = PI;
const frutas2 = [...frutas];
console.log(numeroPI);
console.log(frutas2);