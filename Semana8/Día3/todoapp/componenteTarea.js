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
  const checkBoxTarea = divTarea.querySelector(".checkTarea")
  checkBoxTarea.addEventListener("click", () => {
    alert(`Diste click en la tarea con id: ${tarea.id}`);
  })


  return divTarea;
}

export {
  ComponenteTarea
}