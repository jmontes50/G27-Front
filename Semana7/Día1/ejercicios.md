# Ejercicios de Manejo de Objetos en JavaScript

Los siguientes ejercicios requieren usar conceptos previos desde variables hasta métodos de arreglos. El objetivo es familiarizarnos con el uso de objetos a través de ejercicios prácticos. Cada ejercicio incluye enunciado, ideas individuales, planteamiento de ideas, identificación de patrones y pistas o pseudocódigo.

---

## Ejercicio 1: **Gestión de un Todo List**

### ENUNCIADO  
Crea un objeto `todoList` que permita gestionar una lista de tareas. Este objeto debe permitir:
1. Agregar una tarea nueva.
2. Marcar una tarea como completada.
3. Eliminar una tarea.
4. Mostrar todas las tareas y su estado (completado o pendiente).

### IDEAS INDIVIDUALES  
- Un objeto puede almacenar propiedades que representan métodos como `agregarTarea`, `completarTarea`, etc.
- Cada tarea puede representarse como un objeto con propiedades como `nombre` y `estado`.
- Usa un arreglo dentro del objeto `todoList` para manejar múltiples tareas.

### PLANTEAMIENTO DE IDEAS  
- Necesitamos un método para agregar tareas al arreglo.
- Cada tarea debe tener un identificador único.
- El estado de la tarea podría ser un booleano (`true` para completada, `false` para pendiente).
- Mostrar todas las tareas requiere iterar sobre el arreglo y mostrar el estado de cada tarea.

### IDENTIFICACIÓN DE PATRONES  
- CRUD: Crear, Leer, Actualizar y Eliminar.
- Iteración sobre un arreglo con métodos como `.forEach` o `.map`.
- Uso de métodos de un objeto para realizar acciones específicas.

### PSEUDOCÓDIGO O PISTA  
1. Crea un objeto vacío llamado `todoList`.
2. Define un método `agregarTarea(nombre)` que agregue un nuevo objeto tarea al arreglo.
3. Define un método `completarTarea(id)` que cambie el estado de una tarea específica.
4. Define un método `eliminarTarea(id)` para eliminar una tarea del arreglo.
5. Usa un método para mostrar todas las tareas.

---

## Ejercicio 2: **Gestión de una Agenda de Contactos**

### ENUNCIADO  
Crea un objeto `agenda` que permita:
1. Agregar un contacto nuevo con nombre, teléfono y correo electrónico.
2. Buscar un contacto por nombre.
3. Mostrar todos los contactos.

### IDEAS INDIVIDUALES  
- Un contacto puede representarse como un objeto con propiedades `nombre`, `telefono`, y `correo`.
- Almacena todos los contactos en un arreglo dentro del objeto `agenda`.

### PLANTEAMIENTO DE IDEAS  
- La búsqueda se puede realizar con un método como `.find`.
- Mostrar todos los contactos implica iterar sobre el arreglo de contactos.

### IDENTIFICACIÓN DE PATRONES  
- CRUD para manejar la agenda.
- Uso de métodos de arreglos como `.push` y `.find`.

### PSEUDOCÓDIGO O PISTA  
1. Define un arreglo `contactos` dentro del objeto `agenda`.
2. Crea métodos como `agregarContacto`, `buscarContacto`, y `mostrarContactos`.
3. En `agregarContacto`, añade un objeto con las propiedades del contacto al arreglo.
4. En `buscarContacto(nombre)`, usa `.find` para localizar el contacto.

---

## Ejercicio 3: **Gestión de Inventario**

### ENUNCIADO  
Crea un objeto `inventario` que permita:
1. Agregar productos con nombre, precio y cantidad.
2. Actualizar la cantidad de un producto específico.
3. Calcular el valor total del inventario.

### IDEAS INDIVIDUALES  
- Representa cada producto como un objeto con `nombre`, `precio`, y `cantidad`.
- Usa métodos del objeto `inventario` para manejar el arreglo de productos.

### PLANTEAMIENTO DE IDEAS  
- Para calcular el valor total, multiplica el precio por la cantidad de cada producto y suma los resultados.

### IDENTIFICACIÓN DE PATRONES  
- CRUD para el inventario.
- Operaciones matemáticas para calcular el total.

### PSEUDOCÓDIGO O PISTA  
1. Crea un método `agregarProducto` para añadir objetos al arreglo de productos.
2. Define `actualizarCantidad(nombre, nuevaCantidad)` para modificar la cantidad.
3. Usa `.reduce` para calcular el valor total del inventario.

---

## Ejercicio 4: **Registro de Estudiantes**

### ENUNCIADO  
Crea un objeto `registroEstudiantes` que permita:
1. Añadir estudiantes con nombre y un arreglo de calificaciones.
2. Calcular el promedio de un estudiante específico.
3. Mostrar todos los estudiantes con su promedio.

### IDEAS INDIVIDUALES  
- Un estudiante es un objeto con propiedades `nombre` y `calificaciones`.
- Las calificaciones son un arreglo de números.

### PLANTEAMIENTO DE IDEAS  
- Para calcular el promedio, suma todas las calificaciones y divide por la cantidad.

### IDENTIFICACIÓN DE PATRONES  
- CRUD para manejar estudiantes.
- Uso de métodos como `.map` y `.reduce`.

### PSEUDOCÓDIGO O PISTA  
1. Crea un método `agregarEstudiante(nombre, calificaciones)` para añadir estudiantes.
2. Define `calcularPromedio(nombre)` que use `.reduce` para calcular el promedio.
3. Usa `.map` para iterar y mostrar todos los estudiantes con sus promedios.

---

## Ejercicio 5: **Carrito de Compras**

### ENUNCIADO  
Crea un objeto `carrito` que permita:
1. Agregar productos al carrito con nombre, precio y cantidad.
2. Eliminar productos del carrito.
3. Calcular el total del carrito.
4. Mostrar todos los productos en el carrito.

### IDEAS INDIVIDUALES  
- Cada producto es un objeto con `nombre`, `precio`, y `cantidad`.
- Usa un arreglo dentro del objeto `carrito` para almacenar los productos.

### PLANTEAMIENTO DE IDEAS  
- Calcula el total sumando el precio por la cantidad de cada producto.

### IDENTIFICACIÓN DE PATRONES  
- CRUD para manejar el carrito.
- Uso de `.reduce` y `.filter`.

### PSEUDOCÓDIGO O PISTA  
1. Define un método `agregarProducto` para añadir productos al carrito.
2. Crea `eliminarProducto(nombre)` para eliminar un producto.
3. Usa `.reduce` en `calcularTotal()` para sumar el total.
4. Itera sobre el arreglo para mostrar los productos.

## SOLUCIONES

La solución a cada ejercicio la pueden encontrar en el archivo [Soluciones.js](./soluciones/soluciones.js) ten en cuenta que estas soluciones usan métodos de arreglos, funciones flecha y const. asi que plantear tu propia solución es algo muy valioso para tu aprendizaje.