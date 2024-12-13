/*
if (true) {
    //var no me respeta los ámbitos, a excepción del de función
    //TLDR: NO LO UTILICEN
    var edad = 25;
}
console.log(edad);
*/

//CONST
//usualmente si va a representar un valor "hardcodeado", se suele poner en mayúsculas
const IGV = 0.18;
console.log(IGV);

// IGV = 0.15;
const edades = [10, 20, 30, 40, 50];
//porque las constantes si son modificables si es algo interno lo que las modifica
edades.push(60);

// edades = [100, 200];

console.log(edades);
