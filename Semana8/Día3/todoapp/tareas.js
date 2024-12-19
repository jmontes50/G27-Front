//va a ser la parte de manejo puramente de datos
const tareas = {
  estadoTareas: [
    /**Cómo va a ser cada tarea que agreguemos
     * {
     *  id: 1, descripcion: "Leer", finalizado: false, activo: true
     * }
     */
  ],
  agregarTarea: function (descripcion) {
    //después que creamos el objeto que representa una nueva Tarea
    const nuevaTarea = {
      id: this.estadoTareas.length + 1,
      descripcion: descripcion,
      finalizado: false,
      activo: true
    }
    //lo añadimos a estadoTareas
    this.estadoTareas.push(nuevaTarea);

    console.log("mostrando tareas", this.estadoTareas);
  },
  leerTareas: function () {
    //retorne el estado de tareas
    const tareasActivas = this.estadoTareas.filter((item) => {
      return item.activo === true
      // return item.activo
    })
    return tareasActivas;
  },
  finalizarTarea: function(id) {
    //encontrar tarea a finalizar, findIndex me da -1 si no encuentra algo y 0 a más dependiendo de la posición de lo que encuentre
    const posicionTareaEncontrada = this.estadoTareas.findIndex((item) => {
      return item.id === id
    })
    //cambiar su propiedad finalizado
    if(posicionTareaEncontrada !== -1){
      //this.estadoTareas[1].finalizado = true
      this.estadoTareas[posicionTareaEncontrada].finalizado = true;
    }
  }
};

export default tareas;