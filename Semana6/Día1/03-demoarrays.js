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

function eliminarPlatilloFinal(){
  console.log("ELIMINANDO FINAL");
  platillos.pop();
  listarPlatillos();
}

function agregarPlatilloFinal(nuevoPlatillo){
  console.log("AGREGANDO NUEVO PLATILLO");
  platillos.push(nuevoPlatillo);
  listarPlatillos();
}

//ejecución
// listarPlatillos();

let opcion = prompt(`
  ELIJA UNA OPCIÓN
  1. Listar Platillos
  2. Eliminar Platillo final
  3. Agregar Platillo final
  0. Salir`);

if(opcion === "1"){
  listarPlatillos();
}else if(opcion === "2"){
  eliminarPlatilloFinal();
}else if(opcion === "3"){
  //preguntando que platillo
  let platilloAAgregar = prompt("Indique nuevo");
  //ya con el nuevo PLatillo
  agregarPlatilloFinal(platilloAAgregar);
}