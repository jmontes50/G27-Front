const productos = [
    {
        id:1,
        nombre:"Polo",
        precio: 40
    },
    {
        id:2,
        nombre:"Pantalón",
        precio: 70
    },
    {
        id:3,
        nombre:"Mochila",
        precio: 100
    }
]

//de JS a texto
const productosJson = JSON.stringify(productos);
console.log(productos);
console.log(productosJson);
console.log(typeof productosJson);

//de texto a JS
const deVuelta = JSON.parse(productosJson);

console.log(deVuelta);