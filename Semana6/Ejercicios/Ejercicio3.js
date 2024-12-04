let userInput = +prompt("Ingrese un numero")
let sum = 0; // Inicializar el acumulador

for (let i = 1; i < userInput; i++) { // Recorrer desde 1 hasta userInput - 1
  sum += i; // Sumar el número actual al acumulador
}

console.log(`La suma de los valores positivos menores a ${userInput} es: ${sum}`);
