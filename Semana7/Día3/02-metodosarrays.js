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
console.log("///////////////// MAP //////////////////");

//map a comparación del forEach si me retorna algo
let frutasEnMayus = frutas.map(function(fru, indice, arreglo){
    // console.log(fru);
    //convertir un texto a Mayúsculas
    return `${indice} - ${fru.toUpperCase()}`;
});

console.log({ frutasEnMayus });

console.log("////////////// FILTER ///////////////////");

let numeros = [100, 87, 92, 60, 95];

//filtrará y generará un nuevo arreglo con los items que cumplan la condición
let mayorQue80 = numeros.filter(function(item, indice, arreglo) {
    // return expresionVerdadera y solamente retornará los elementos que sean verdaderos en base a la expresión 
    return item > 90;
})

console.log({ mayorQue80 });