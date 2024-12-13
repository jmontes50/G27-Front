const frutas = ["Kiwi", "Naranja", "Fresa"];

const naranjaExiste = frutas.includes("Kiwi");

console.log(naranjaExiste)

function busqueda () {
    // if(naranjaExiste === true){
    // if(naranjaExiste){
    //     return ("si existe");
    // }else {
    //     return ("No existe");
    // }
    //expresionVoF ? "si es Verdadero" : "si es Falso"
    return naranjaExiste ? "si existeee" : "No nel, no hay"
}

console.log(busqueda());


