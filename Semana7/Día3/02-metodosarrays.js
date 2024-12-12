let frutas = ["Kiwi", "Naranjas", "Fresas", "Sandía"];

//herramientas para trabajar con arreglos
console.log("///////////////// FOREACH //////////////////")
//forEach va a recibir un parámetro, ese parámetro sera una función
//la función que recibe como parámetro en forEach pude tener más cosas
//puede tener el item, el indice y el arreglo original
let forEachFrutas = frutas.forEach(function (fru, indice, arreglo) {
    console.log("item", fru);
    console.log("index", indice);
    console.log("arreglo original", arreglo);
    //por mucho que retornemos algo forEach no me da nada
    //para ejecutar tareas repetitivas
    return fru.toUpperCase();
});

// console.log({ forEachFrutas });
console.log("///////////////// MAP //////////////////")

//map a comparación del forEach si me retorna algo
let frutasEnMayus = frutas.map(function(fru, indice, arreglo){
    // console.log(fru);
    //convertir un texto a Mayúsculas
    return `${indice} - ${fru.toUpperCase()}`;
});

console.log({ frutasEnMayus });