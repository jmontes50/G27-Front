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
      //id: todoList.tareas.length + 1,
      id: this.tareas.length + 1,
      descripcion: descripcion,
      finalizado: false,
      activo: true
    }
    //lo agregamos a la propiedad tareas
    todoList.tareas.push(nuevaTarea);
  },
  completarTarea: function(id) {
    // this.tareas[2].finalizado = true
    let posicion = this.encontrarTarea(id);
    // console.log("Posicion", posicion);
    this.tareas[posicion].finalizado =  true;
    console.log(`la tarea ${this.tareas[posicion].descripcion} se completó!`);
  },
  encontrarTarea: function(id) {
    //devolverme la posición de la tarea que buscariamos
    //posicion que guarde el elemento encontrado y que diga cual es, por defecto será -1 para saber que no existe
    let posicion = -1;
    for(let i = 0; i < this.tareas.length; i++) {
      //con el id recibido en él método lo comparamos con los id que tenemos en la propiedad tareas
      if(id === this.tareas[i].id){
        //
        posicion = i;
      }
    }
    //al encontrar, retornamos la posición ya encontrada
    return posicion;
  },
  //mas que eliminar es desactivar
  eliminarTarea: function(id) {
    let posicion = this.encontrarTarea(id);
    console.log(posicion);
    this.tareas[posicion].activo = false;
  },
  listarTareas: function() {
    //mostrar tareas activas, con un console.table, y retorne el arreglo de las tareas
    let tareasActivas = [];
    for(let i = 0; i < this.tareas.length; i++) {
      //la tarea que en este momento estemos usando mediante la posición i, esta activa?
      if(this.tareas[i].activo === true){
        //si es que esta activa, la agregamos a tareasActivas
        tareasActivas.push(this.tareas[i]);
      }
    }
    console.log("lista tareas activas", tareasActivas);
    return tareasActivas;
  }
}

//ejecutando el método agregarTarea
todoList.agregarTarea("Ir al médico");
todoList.agregarTarea("Ir al veterinario");
todoList.agregarTarea("Comprar pastillas");
todoList.agregarTarea("Tomar agua");

todoList.completarTarea(2);

todoList.eliminarTarea(2);

todoList.listarTareas();

//observando
// console.log(todoList);
// console.table(todoList.tareas);
