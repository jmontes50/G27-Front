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