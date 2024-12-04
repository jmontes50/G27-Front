function contarPares(array) {
    let contador = 0; // Inicializar el contador
  
    for (let i = 0; i < array.length; i++) { // Recorrer el array
      if (array[i] % 2 === 0) { // Verificar si el número es par con elr esiduo
        contador++; // Incrementar el contador si es par
      }
    }
  
    return contador; // Retornar el total de números pares
  }
  
  // Ejemplo de uso
  let numeros = [1, 2, 3, 4, 5, 6]; // Array de ejemplo para probar
  let totalPares = contarPares(numeros); // Llamar a la función y darle como argumento los números
  console.log(`El total de números pares en el array es: ${totalPares}`);


  