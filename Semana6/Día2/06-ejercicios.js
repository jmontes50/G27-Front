/**
 * Crea una función que cuente la cantidad de números pares en un array de números.
La función debe:

Recibir el array como parámetro.
Recorrer el array para identificar los números pares.
Devolver el total de números pares encontrados.
 */

//Definir una función contarPares que reciba un array como parámetro:
function contarPares (arreglo){
    console.log(arreglo.length);
    // Inicializar un contador en 0.
    let contador = 0;
    //Para cada número en el array:
    //for(inicializador; límite; actualizador){}
    for(let i = 0; i < arreglo.length; i++){
        // Si el número es par (n % 2 === 0):
        if(arreglo[i] % 2 === 0){
            // Incrementar el contador.
            // contador = contador + 1;
            contador++;
        }
    }
    //termino el for
    //el return me da el valor pero no equivale a un console.log
    return contador;
}

let resultado = contarPares([10, 15, 23, 46, 100, 200, 5]);

console.log(`La cantidad de pares en el arreglo es ${resultado}`)