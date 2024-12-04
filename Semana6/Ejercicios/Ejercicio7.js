function sumarImpares(array) {
    let suma = 0; // Inicializar el acumulador
  
    for (let i = 0; i < array.length; i++) { // Recorrer el array usando el indice/posición
      if (array[i] % 2 !== 0) { // Verificar si el número es impar
        suma += array[i]; // Sumar el número impar al acumulador
      }
    }
  
    return suma; // Retornar la suma total de los números impares
  }
  
  // Ejemplo de uso
  let numeros = [1, 2, 3, 4, 5, 6]; // Array de ejemplo
  let totalImpares = sumarImpares(numeros); // Llamar a la función darle el array como argumento
  console.log(`La suma de los números impares en el array es: ${totalImpares}`);
  