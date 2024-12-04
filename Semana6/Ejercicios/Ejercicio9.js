function reorganizarArray(array) {
  let primero = array.shift(); // Extraer el 1er número
  array.push(primero); // Añadirlo aal final del array

  let ultimo = array.pop(); // Extraer el último número
  array.unshift(ultimo); // Añadirlo al inicio del array

  return array; // Retornar el array re-organizado
}

let numeros = [3, 2, 1]; // Array de ejemplo
let resultado = reorganizarArray(numeros); // Llamar a la función
console.log(`Array reorganizado: ${resultado}`); // Imprimir el resultado
