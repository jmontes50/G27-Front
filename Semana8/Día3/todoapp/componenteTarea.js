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
  return divTarea;
}

export {
  ComponenteTarea
}