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