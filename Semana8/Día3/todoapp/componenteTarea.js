import tareas from "./tareas.js";

const ComponenteTarea = (tarea) => {
  console.log("en componente tarea", tarea);
  //creamos un elemento div
  const divTarea = document.createElement("div");
  //lo llenamos de contenido en base a los datos de tarea
  divTarea.innerHTML = `
    <span>${tarea.descripcion}</span>
    <input type="checkbox" class="checkTarea" />
  `;
  //más capaz de lógica
  const checkBoxTarea = divTarea.querySelector(".checkTarea");
  //si la propiedad finalizado de la tarea es TRUE
  if(tarea.finalizado) {
    //automaticamente marco el checkbox
    checkBoxTarea.checked = true;
  }
  //accion de finalizar
  checkBoxTarea.addEventListener("click", () => {
    // alert(`Diste click en la tarea con id: ${tarea.id}`);
    //la propiedad checked me indica si el input esta marcado
    console.log(checkBoxTarea.checked);
    if(checkBoxTarea.checked){
      tareas.finalizarTarea(tarea.id);
    }
    console.table(tareas.estadoTareas);
  })


  return divTarea;
}

export {
  ComponenteTarea
}