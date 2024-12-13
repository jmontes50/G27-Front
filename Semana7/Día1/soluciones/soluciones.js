// 1ER EJERCICIO
// Objeto Todo List
const todoList = {
  tareas: [],

  // Método para agregar una tarea
  agregarTarea: function (nombre) {
    const nuevaTarea = {
      id: this.tareas.length + 1, // Asignamos un ID único
      nombre: nombre,
      completada: false, // Por defecto la tarea está pendiente
    };
    this.tareas.push(nuevaTarea);
    console.log(`Tarea "${nombre}" agregada.`);
  },

  // Método para marcar una tarea como completada
  completarTarea: function (id) {
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = true;
      console.log(`Tarea "${tarea.nombre}" marcada como completada.`);
    } else {
      console.log(`No se encontró una tarea con el ID ${id}.`);
    }
  },

  // Método para eliminar una tarea
  eliminarTarea: function (id) {
    const indice = this.tareas.findIndex((t) => t.id === id);
    if (indice !== -1) {
      const tareaEliminada = this.tareas.splice(indice, 1);
      console.log(`Tarea "${tareaEliminada[0].nombre}" eliminada.`);
    } else {
      console.log(`No se encontró una tarea con el ID ${id}.`);
    }
  },

  // Método para mostrar todas las tareas
  mostrarTareas: function () {
    console.log("Lista de tareas:");
    this.tareas.forEach((tarea) => {
      console.log(
        `ID: ${tarea.id} | Nombre: ${tarea.nombre} | Estado: ${
          tarea.completada ? "Completada" : "Pendiente"
        }`
      );
    });
  },
};

// Ejemplo de uso
todoList.agregarTarea("Estudiar JavaScript");
todoList.agregarTarea("Hacer ejercicio");
todoList.mostrarTareas();
todoList.completarTarea(1);
todoList.mostrarTareas();
todoList.eliminarTarea(2);
todoList.mostrarTareas();

//2DO EJERCICIO
const agenda = {
  contactos: [],

  agregarContacto: function (nombre, telefono, correo) {
    const nuevoContacto = {
      nombre: nombre,
      telefono: telefono,
      correo: correo,
    };
    this.contactos.push(nuevoContacto);
    console.log(`Contacto "${nombre}" agregado.`);
  },

  buscarContacto: function (nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(
        `Contacto encontrado: ${contacto.nombre} - ${contacto.telefono} - ${contacto.correo}`
      );
    } else {
      console.log(`No se encontró el contacto con nombre "${nombre}".`);
    }
  },

  mostrarContactos: function () {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(
        `${contacto.nombre} - ${contacto.telefono} - ${contacto.correo}`
      );
    });
  },
};

// Ejemplo de uso
agenda.agregarContacto("Juan Pérez", "123456789", "juan@example.com");
agenda.agregarContacto("Ana García", "987654321", "ana@example.com");
agenda.mostrarContactos();
agenda.buscarContacto("Juan Pérez");
agenda.buscarContacto("Carlos López");

//3ER EJERCICIO
const inventario = {
  productos: [],

  agregarProducto: function (nombre, precio, cantidad) {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };
    this.productos.push(nuevoProducto);
    console.log(`Producto "${nombre}" agregado.`);
  },

  actualizarCantidad: function (nombre, nuevaCantidad) {
    const producto = this.productos.find((p) => p.nombre === nombre);
    if (producto) {
      producto.cantidad = nuevaCantidad;
      console.log(
        `Cantidad de "${producto.nombre}" actualizada a ${nuevaCantidad}.`
      );
    } else {
      console.log(`No se encontró el producto con nombre "${nombre}".`);
    }
  },

  calcularValorTotal: function () {
    const total = this.productos.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    console.log(`Valor total del inventario: $${total.toFixed(2)}`);
  },

  mostrarProductos: function () {
    console.log("Lista de productos:");
    this.productos.forEach((producto) => {
      console.log(
        `${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`
      );
    });
  },
};

// Ejemplo de uso
inventario.agregarProducto("Camiseta", 15.99, 10);
inventario.agregarProducto("Pantalón", 25.5, 5);
inventario.mostrarProductos();
inventario.actualizarCantidad("Camiseta", 12);
inventario.calcularValorTotal();

//4TO EJERCICIO
const registroEstudiantes = {
  estudiantes: [],

  agregarEstudiante: function (nombre, calificaciones) {
    const nuevoEstudiante = {
      nombre: nombre,
      calificaciones: calificaciones,
    };
    this.estudiantes.push(nuevoEstudiante);
    console.log(`Estudiante "${nombre}" agregado.`);
  },

  calcularPromedio: function (nombre) {
    const estudiante = this.estudiantes.find((e) => e.nombre === nombre);
    if (estudiante) {
      const promedio =
        estudiante.calificaciones.reduce(
          (acc, calificacion) => acc + calificacion,
          0
        ) / estudiante.calificaciones.length;
      console.log(`Promedio de "${estudiante.nombre}": ${promedio.toFixed(2)}`);
    } else {
      console.log(`No se encontró el estudiante con nombre "${nombre}".`);
    }
  },

  mostrarEstudiantes: function () {
    console.log("Lista de estudiantes:");
    this.estudiantes.forEach((estudiante) => {
      const promedio =
        estudiante.calificaciones.reduce(
          (acc, calificacion) => acc + calificacion,
          0
        ) / estudiante.calificaciones.length;
      console.log(`${estudiante.nombre} - Promedio: ${promedio.toFixed(2)}`);
    });
  },
};

// Ejemplo de uso
registroEstudiantes.agregarEstudiante("Carlos", [10, 9, 8, 7]);
registroEstudiantes.agregarEstudiante("María", [8, 8, 9, 10]);
registroEstudiantes.mostrarEstudiantes();
registroEstudiantes.calcularPromedio("Carlos");

//5TO EJERCICIO
const carrito = {
  productos: [],

  agregarProducto: function (nombre, precio, cantidad) {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };
    this.productos.push(nuevoProducto);
    console.log(`Producto "${nombre}" agregado al carrito.`);
  },

  eliminarProducto: function (nombre) {
    const indice = this.productos.findIndex((p) => p.nombre === nombre);
    if (indice !== -1) {
      const productoEliminado = this.productos.splice(indice, 1);
      console.log(`Producto "${productoEliminado[0].nombre}" eliminado.`);
    } else {
      console.log(`No se encontró el producto con nombre "${nombre}".`);
    }
  },

  calcularTotal: function () {
    const total = this.productos.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    console.log(`Total del carrito: $${total.toFixed(2)}`);
  },

  mostrarCarrito: function () {
    console.log("Productos en el carrito:");
    this.productos.forEach((producto) => {
      console.log(
        `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`
      );
    });
  },
};

// Ejemplo de uso
carrito.agregarProducto("Laptop", 1000, 1);
carrito.agregarProducto("Auriculares", 50, 2);
carrito.mostrarCarrito();
carrito.calcularTotal();
carrito.eliminarProducto("Auriculares");
carrito.mostrarCarrito();
