let todoList = {
  tareas: [
    /** cada tarea seria un objeto dentro de este arreglo
     * {
     *  id: 1,
     *  finalizado: true/ false
     *  descripcion: "Practicar Ejercicios"
     * },
     */
  ],
  //agregarTarea(){}
  agregarTarea: function(descripcion) {
    // console.log("--------->", this);
    // console.log(">>>>>>>>>>", todoList);
    //creeamos un un nuevo objeto dentro de la función
    let nuevaTarea = {
      id: this.tareas.length + 1,
      descripcion: descripcion,
      finalizado: false
    }
    //lo agregamos a la propiedad tareas
    todoList.tareas.push(nuevaTarea);
  }
}

//ejecutando el método agregarTarea
todoList.agregarTarea("Ir al médico");
todoList.agregarTarea("Ir al veterinario");

//observando
console.log(todoList);
console.table(todoList.tareas);
