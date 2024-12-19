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
};

export default tareas;