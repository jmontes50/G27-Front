/**
 * function nombreDeLaFuncion (parámetros) {}
 * parámetros, representación de los valores que recibira una función
 * argumentos, son los valores indicados al momento de llamar/invocar una función por su nombre
 */
function sumar (num1, num2) {
    //los parámetros van a ser como variables que solo existen dentro de la propia función 
    let resultado = num1 + num2;

    // console.log(resultado);
    //return expresión
    return resultado;
}
//invocando/llamando a la función
function calcularIGV (monto) {
    let precioFinal = monto * 1.18;
    return precioFinal;
}


sumar(100, 50);

// console.log(sumar(20, 40));
let totalSinIGV = sumar(100, 60);
let totalConIGV = calcularIGV(totalSinIGV);

console.log(totalConIGV);