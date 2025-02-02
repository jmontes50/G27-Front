let frutas = ["Kiwi", "Naranjas", "Fresas", "Sandía", "Sandía"];

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

console.log("/////////////// FINDINDEX ///////////////////");

//findIndex va a buscar un item y me indicará la posición en la que está
let dondeEsta = frutas.findIndex(function(fru) {
    //me pide una expresión para encontrar la posición de un item
    //en caso haya 2 ó más items con el mismo valor me dará el 1ero que encuentre
    return fru === "Sandía";
    //si es algo que no existe me dará -1
    // return fru === "Mandarinas";
});

console.log({ dondeEsta });

console.log("/////////////// INCLUDES ///////////////////");

//según si un valor este incluido o no, me dará true o false
let frutaExiste = frutas.includes("Mandarinas");

console.log({ frutaExiste });

console.log("////////////// REDUCE //////////////////");

let sumatoria = numeros.reduce(function(acumulador, item) {
    return acumulador + item;
});

console.log({ sumatoria });

console.log("////////////// REDUCE CON OBJETOS ///////////");

let productos = [
    {
      nombre: "Pastillas",
      precio: 3.50
    },
    {
      nombre: "Agua",
      precio: 1.20
    }
]

//array.reduce(function(acum, item), valorInicialAcum)
let total = productos.reduce(function(acumulador, item) {
    console.log("acumulador: ", acumulador);
    return acumulador + item.precio;
    //si no le damos un valor inicial por defecto el acumulador, tomará como valor inicial el primer item, si es un objeto tomará ese valor, lo que puede ser problematico
}, 0)

console.log({ total });

console.log("///////////////////SORT TOSORTED///////////////");

let nums = [4, 1, 3, 2, 5];

//va a ver métodos como el sort() que modifican el arreglo original
//la mayor parte del tiempo no es bueno que se modifique el origen del dato original
// let ordenado = nums.sort();

//utilizar métodos modernos para hacer operaciones
let ordenado = nums.toSorted();

console.log({ nums });

console.log({ ordenado });