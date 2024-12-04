// Definir la función para encontrar el número más grande
function encontrarMaximo(array) {
  let max = array[0]; // Inicializar max con el primer número del array

  for (let i = 1; i < array.length; i++) {
    // Recorrer el array desde el segundo elemento
    if (array[i] > max) {
      // Comparar cada número con max
      max = array[i]; // Actualizar max si el número es mayor
    }
  }

  return max; // Retornar el valor máximo encontrado
}

// Ejemplo de uso
let numeros = [3, 5, 7, 2, 8, 6]; // Array de ejemplo
let maximo = encontrarMaximo(numeros); // Llamar a la función
console.log(`El número más grande en el array es: ${maximo}`);
