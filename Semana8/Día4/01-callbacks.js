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

btn.addEventListener("click", saludar);

//Búsqueda en una base de datos
//conexión, autenticación, la propia búsqueda
//DEMORA

const busqueda = (funcionCB) => {
    // console.log(funcionCB)
    //setTimeout va a ejecutar una función después de X Tiempo
    setTimeout(() => {
        //a hecho la busqueda y después que lo encontro
        // console.log("encontrado")
        // return "data encontrada"
        funcionCB("este es el resultado");
    }, 3000)
}

busqueda((resultado) => {
    console.log(resultado)
});


