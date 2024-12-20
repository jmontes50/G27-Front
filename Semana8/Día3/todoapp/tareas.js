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
    //cada vez que se agregue una tarea, guardo los datos
    this.guardarEnLocalStorage(this.estadoTareas);

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
  },
  guardarEnLocalStorage: function(datos) {
    console.log("datos antes de", datos)
    //convertimos los datos de JS a JSON
    const datosJSON = JSON.stringify(datos);
    console.log("datos después de stringify", datosJSON);
    //ya esta convertido, entonces guardemoslo en LS
    localStorage.setItem("listaTareas", datosJSON);
  },
  //leer el LS por las tareas y con esa data
  //actualizar la propiedad estadoTareas
  leerDeLocalStorage: function() {
    //obtenemos como JSON la lista de tareas
    const tareasJSON = localStorage.getItem("listaTareas");
    console.log("leyendo LS", tareasJSON);
    //convertimos el JSON, a JS
    const tareasComoArray = JSON.parse(tareasJSON);
    console.log("ya convertido", tareasComoArray);
    //ponerlo dentro de nuestras tareas
    this.estadoTareas = [...tareasComoArray];

    console.log("revisando las tareas", this.estadoTareas)
  }
};

export default tareas;