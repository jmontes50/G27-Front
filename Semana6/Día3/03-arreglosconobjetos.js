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
for(let i = 0; i < productos.length; i++){
    console.log(productos[i]);
}