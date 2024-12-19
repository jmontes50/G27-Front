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

//es un objeto, que tiene varios métodos
//.setItem("nombre a guardar", lo que vamos a guardar)
//Solamente guarda texto
localStorage.setItem("nombre", "Jorge");

localStorage.setItem("productos", productosJson);

//getItem va a obtener la información segun la llave/clave
const productosOtraVez = localStorage.getItem("productos");
//podemos guardar información como texto
//y leerla/utilizarla al obtener de nuevo con getItem
console.log(productosOtraVez);

const productosJS = JSON.parse(productosOtraVez);
console.log("prodjs", productosJS);