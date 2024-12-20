const suma = (a, b) => {
    return a + b;
}

console.log(suma)

const operacion = (funcion, x, y) => {
    console.log(funcion(x, y))
}

operacion(suma, 20, 30);

//tareas asíncronas
const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     alert("Hola");
// })
const saludar = () => {
    alert("Hola!!!");
}

btn.addEventListener("click", saludar)

