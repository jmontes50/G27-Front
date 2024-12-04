/**
Crea una función que encuentre el número más grande en un array de números enteros.
La función debe:

Recibir el array como parámetro.
Utilizar un bucle for para recorrer el array.
Comparar cada elemento para encontrar el valor máximo.
Inicializar una variable con el primer elemento del array como valor máximo inicial.
Devolver el valor máximo encontrado.
 */

//Definir una función encontrarMaximo que reciba un array como parámetro:
function encontrarMaximo(arreglo){
    console.log(arreglo);
    //Inicializar una variable mayor con el primer número del arreglo.
    // console.log(arreglo[0]);
    let mayor = arreglo[0];
    // Para cada número en el array:
    //como ya tenemos el 1er item en la variable mayor comencemos desde 1
    for(let i = 1; i < arreglo.length; i++) {
        //Si el número que tenemos con el for en esa iteración es mas grande que mayor:
        console.log("1. ", arreglo[i]);
        console.log("2. ", arreglo[i] > mayor);
        if(arreglo[i] > mayor){
            // Actualizar mayor con el número de esa iteración
            mayor = arreglo[i];
        }
    }
    // Retornar el valor de mayor.
    return mayor;
}

let res = encontrarMaximo([4, 20, 76, 50, 4, 37]);
console.log(`El número más grande es ${res}`);