let platillos = [
    "Lomo Saltado",
    "Ceviche"
];

function listarPlatillos() {
  console.log("LISTAR");
  for(let i = 0; i < platillos.length; i++){
    console.log(`${i} - ${platillos[i]}`);
  }
}

//ejecución
// listarPlatillos();

let opcion = prompt(`
  ELIJA UNA OPCIÓN
  1. Listar Platillos
  0. Salir`);

if(opcion === "1"){
  listarPlatillos();
};