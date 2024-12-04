// Definir la función para calcular el área
function calcularArea(radio) {
  let pi = 3.14; // Valor de Pi
  if (radio <= 0) {
    return "El radio debe ser un número positivo mayor que 0.!!"; // Validación
  }
  return pi * radio * radio; // Cálculo del área
}

// Solicitar al usuario el radio
let userInput = +prompt("Ingrese el radio del círculo:"); //  entrada del usuario

let area = calcularArea(userInput); // Llamar a la función
console.log(`El área del círculo con radio ${userInput} es: ${area}`); // Mostrar resultado
