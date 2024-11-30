// for (inicialización; expresión; actualización) {
// codigo a ejecutar repetitivamente hasta que la expresión sea falsa
//}

/*
for (let i = 0; i < 10; i++) {
    console.log(`Mostrando el # ${i}`);
}

*/

let numero = +prompt("Ingrese un número para generar tabla");

for(let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
}

console.log("------------------------")