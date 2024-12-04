/**
 * Con un for imprime en la consola los primeros 10 números pares de la tabla de multiplicar del 7.
 */

/* que es un número par, n % 2 === 0 */
/* necesitamos un contador */
/* debemos tener 10 números pares con las condiciones previas */

let contador = 0;
let indice = 1;

while (contador < 10) {
    let multiplicacion = indice * 7;
    //verificando si es par mediante el residuo
    if(multiplicacion % 2 === 0) {
        //si es par
        console.log(multiplicacion);
        // contador = contador + 1;
        contador++;
    }
    indice++; //1*7 , 2*7, 3*7
}


