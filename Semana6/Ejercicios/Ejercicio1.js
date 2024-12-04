let count = 0; // Contador para los números pares
let i = 1; // Índice inicial

// Utilizar un bucle while para calcular y verificar múltiplos
while (count < 10) {
  let multiple = 7 * i; 
  if (multiple % 2 === 0) { // Verificar si es par con el residuo igual a 0
    console.log(multiple); // Imprimir número par
    count++; // Incrementar contador para así llegar a 10
  }
  i++; // Incrementar índice para el siguiente múltiplo: 2 x 7, 3 x 7, 4 x 7...
}
