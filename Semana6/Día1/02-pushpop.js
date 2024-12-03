let productos = [
    "Audifonos",
    "Micrófono",
    "Mouse",
    "USB"
];

//método(herramienta) -> acción
console.log("1. ", productos);

//pop remover un item del arr, del final
productos.pop();

console.log("2. ", productos);

//push, agregar un item al final
productos.push("Teclado");

console.log("3. ", productos);

//shift, remover 01 item del inicio
productos.shift();

console.log("4. ", productos);

//unshift, agregar 01 elemento al inicio
productos.unshift("WebCam");

console.log("5. ", productos);
//splice, remover X cantidad de elementos
//en una determinada posición/indice

//splice(posición, cantidad)
productos.splice(2, 1);

console.log("6. ", productos);