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