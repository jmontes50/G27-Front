//querySelector funciona con selectores de CSS, #id .clases
const btnSimple = document.querySelector("#botonSimple");
//En cambio con getElementById, Ya le estamos indicando que es un id, no necesita #
//const btnSimple = document.getElementById("botonSimple");

//element.addEventListener("nombreEvento", funciónAEjecutar)
// btnSimple.addEventListener("click", function() {
//     alert("Hola hiciste click en el botón");
// })

btnSimple.addEventListener("click", () => {
    alert("Hola hiciste click en el botón");
});

const link = document.getElementById("linkAGoogle");

link.addEventListener("click", (evento) => {
    console.log(evento);
    //va a prevenir el comportamiento por defecto
    evento.preventDefault();
    alert("Diste click a un hipervínculo");
})

const formContacto = document.querySelector("#contacto");

//el preventDefault también puede detener el evento por defecto de un
//formulario que es el submit, que intenta enviar los datos por su cuenta
formContacto.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log("evento submit detenido")
})

//tenemos un arreglo de datos
const arrRegalos = [
    "Audifonos",
    "Peluche",
    "Rompecabezas",
    "Libro",
    "Parlante"
]

//a una variable vacia que sea string la llenaremos del html necesario
let htmlRegalos = "";

//estamos iterando en arrRegalos donde por cada item concatenamos en htmlRegalos un li con cada regalo
arrRegalos.forEach((item) => {
    htmlRegalos = htmlRegalos + `
        <li>${item}</li>
    `
})

console.log(htmlRegalos);
//despues de iterar lo agregamos a listaRegalos que es el <ul>
const listaRegalos = document.querySelector(".listaRegalos");

console.log(listaRegalos)

//innerHTML inyecta texto/string como dentro de un elemento
//reemplaza el HTML que tiene el elemento
listaRegalos.innerHTML = htmlRegalos;

//--------------------------
//evento change, es un evento común en inputs, selects
//es el evento que me va a detener un cambio

const inputBusqueda = document.querySelector("#inputBusqueda");

inputBusqueda.addEventListener("change", (ev) => {
    //target --> objetivo
    //de donde esta saliendo el evento
    console.log("evento change", ev.target);
    //value, me va a dar el valor/texto de un input
    console.log("value:", ev.target.value);

    const textoABuscar = ev.target.value;

    const regalosFiltrados = arrRegalos.filter((item) => {
        return item.includes(textoABuscar)
    })

    console.log("regalos filtrados", regalosFiltrados)
})