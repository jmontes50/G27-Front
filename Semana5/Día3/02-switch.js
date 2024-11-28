let numMes = +prompt("Ingrese el número de mes a seleccionar");

console.log("esto es numMes ", numMes);

/*
switch(expresion) 
 case valor1:
    break;
 case valor2:
    break;
 default*/
switch(numMes) {
    case 1:
        console.log("Ud. selecciono Enero");
        break;
    case 2:
        console.log("Ud. selecciono Febrero");
        break;
    case 3:
        console.log("Ud. selecciono Marzo");
        break;
    case 4:
        console.log("Ud. selecciono Abril");
        break;
    case 5:
        console.log("Ud. selecciono Mayo");
        break;
    default:
        console.log("El mes indicado no esta dentro del rango")
}

//--------------------------------------------
//si un numero esta en un rango determinado

let numero = +prompt("Ingrese su edad");

// switch(numero) {
switch(true) {
    case numero > 0 && numero < 12:
        console.log("Eres un niño(a)");
        break;
    case numero > 12 && numero < 20:
        console.log("Eres un adolescente");
        break;
    default:
        console.log("Esta fuera del rango");   
}

