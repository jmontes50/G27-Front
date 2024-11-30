//toda estructura repetitiva necesita un limite

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