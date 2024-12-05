let productos = [
    {
        nombre: "Café",
        precio: 10
    },
    {
        nombre: "Té",
        precio: 7
    },
    {
        nombre: "Milo",
        precio: 12
    }
];

console.log(productos[0].nombre);
//for(inicializador; límite; actualizador)
//i que es 0 se actualizara en cada iteración, a 1, 2, 3
/*
for(let i = 0; i < productos.length; i++){
    console.log(productos[i].nombre);
}
*/
//obtener una suma de los precios
let sumaProductos = 0;
for(let i = 0; i < productos.length; i++){
    //cada vez que recorramos un producto del arreglo
    //tomaremos su precio y lo iremos añadiendo a sumaProductos
    sumaProductos = sumaProductos + productos[i].precio;
}
console.log(`La sumatoria de todos los productos es: ${sumaProductos}`);