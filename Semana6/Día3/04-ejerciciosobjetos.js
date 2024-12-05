let productos = [
    {
        nombre: "CPU",
        precio: 400,
        cantidad: 10
    },
    {
        nombre: "Memoria",
        precio: 200,
        cantidad: 20
    },
    {
        nombre: "Fuente",
        precio: 100,
        cantidad: 0
    },
    {
        nombre: "SSD",
        precio: 150,
        cantidad: 20
    }
]

/*Según un arreglo de productos con precio, filtrar los que cuestan igual o menos que 200. definirlo en una función la función debe retornar un nuevo arreglo con esos productos que cumplan las condiciones previas */

/**IDEAS GENERALES
 * necesitamos crear una función
 * definir un nuevo arreglo fuera de la iteración, no podemos definirlo dentro porque se volveria a crear
 * cuesten igual o menos que 200
 */

function filtrarPorPrecio (arreglo) {
    let productosFiltrados = [];
    for(let i = 0; i < arreglo.length; i++){
        //cuando se cumpla esto
        if(arreglo[i].precio <= 200){
            //agregamos ese producto a productos filtrados
            productosFiltrados.push(arreglo[i])
        }
    }
    return productosFiltrados;
}

let resultado = filtrarPorPrecio(productos);
console.log(resultado);

/**Utilizando el arreglo de productos previo, realice un inventario e indique el valor de los activos totales, la idea es dar el valor actual en base a la cantidad y al precio de cada producto y se indique un solo valor(number) con todo la lista de productos y sus cantidades consideradas.*/

function resumenActivos (inventario) {
    let sumaTotal = 0;
    
    for(let i = 0; i < inventario.length; i++){
        //i aumentará de 0 a 1, 2 etc hasta que no encuentre productos
        let totalPorProducto = inventario[i].precio * inventario[i].cantidad;
        console.log(`total por ${inventario[i].nombre} es ${totalPorProducto}`);
        //acumulamos el activo por producto en sumaTotal
        // sumaTotal = sumaTotal + totalPorProducto;
        sumaTotal += totalPorProducto;
    }
    //cuando termine esto
    return sumaTotal;
}

let resultadoActivos = resumenActivos(productos);

console.log(`La suma total de los activos es ${resultadoActivos}`);