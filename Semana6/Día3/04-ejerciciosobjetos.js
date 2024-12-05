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