/**Intentar pensar fuera del código
 * Objetivos:
 * 1. Listar y agregar tareas
 * 2. Marcar una tarea como hecha
 * 
 * Ese estado/información donde estará guardado
 * - va a estar guardado en el archivo (tareas.js)
 * 
 * De donde vamos a agrear una nueva Tarea
 * - vendra del HTML pero tenemos que obtenerlo mediante un input/form (app.js)
 * 
 * Y como vamos a mostrar esas tareas
 * - mediante el archivo componenteTarea.js ya que representará cada tarea en la app
 */

//usualmente cuando trabajamos con el DOM
//vamos a buscar tener los selectores en la parte superior
import tareas from "./tareas.js";

const inputTarea = document.getElementById("inputTarea");
const btnNuevaTarea = document.querySelector("#btnNuevaTarea");

btnNuevaTarea.addEventListener("click", () => {
  //el value es el texto/valor que tiene un input
  const descripcionTarea = inputTarea.value;
  // console.log(descripcionTarea)
  tareas.agregarTarea(descripcionTarea);
  
  dibujarTareas();
})

const dibujarTareas = () => {
  const listadoTareas = tareas.leerTareas();
  console.table(listadoTareas);
}

