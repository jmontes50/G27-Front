/*
let numero = 100;

//primero va el do
do {
    //lo que deseamos que se ejecute una vez y luego repetidamente
    console.log(`Mostrando ${numero} dentro de do-while`);
    //while(expresion que tiene que ser válida)
    //necesitamos igual que en el while actualizar la expresión
    //condicional
    numero++;
} while (numero < 10);
 */

let opcion;

do {
    //si quieren imprimir un salto de linea \n
    console.log(`
        ---Menú de opciones--- \n
        1. Mostrar lista de comandos \n
        2. Reporte del sistema \n
        3. Información de la PC \n
        4. Salir del programa
    `);
    opcion = +prompt("Ingrese 1 2 ó 3, para escoger una opción");
    switch (opcion) {
        case 1:
            console.log("Mostrando lista...");
            break;
        case 2:
            console.log("Mostrando reporte bip bip");
            break;
        case 3:
            console.log("CPU Intel, RAM... ");
            break;
        case 4:
            console.log("...saliendo del programa");
    }
} while (opcion !== 4);

console.log("Estoy al final de mostrar el menú");