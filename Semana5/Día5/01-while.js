//toda estructura repetitiva necesita un limite

/*
let limite = 10;
let inicio = 1;
//while(expresión que tiene que ser verdadera)
while (inicio <= limite){
    //mientras la expresión de arriba sea verdadera
    //el bloque de codigó se ejecutará
    console.log(`Mostrando ${inicio}`);
    //Sentencia que actualice el limite
    // inicio = inicio + 1;
    inicio++;
}

//y cuando el bucle/repetición termine, recién se ejecutará el código en la parte inferior
console.log("Yo estoy después del while!");
*/

//solicitamos un número y la entrada la transformamos a number
let mes = +prompt("Ingrese el número del mes");

//damos las condiciones pero negamos para que pregunte en caso no cumpla que sea entre 1 y 12
while(!(mes >= 1 && mes <= 12)) {
    //si no es valido preguntaremos de nuevo
    let mes = +prompt('Número inválido, pruebe de nuevo');
}

//imprimimos el resultado
console.log (`Mes ${mes} válido!`);