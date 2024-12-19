const ComponenteTarea = (tarea) => {
  const divTarea = document.createElement("div");
  divTarea.innerHTML = `
    <span>${tarea.descripcion}</span>
    <input type="check" checked=${tarea.finalizado} />
  `;
  //más capaz de lógica
  return divTarea;
}

export {
  ComponenteTarea
}