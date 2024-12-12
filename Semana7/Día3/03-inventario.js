let inventario = {
  productos: [
    /**
     * {
     *  id:1,
     *  nombre: "Lapicero",
     *  precio: 2,
     *  cantidad: 20,
     *  active: true //si algo estaba "eliminado o no"
     * }
     */
  ],
  agregarProducto: function(nombre, precio, cantidad, active = true){
    let nuevoProducto = {
      //estamos obteniendo la longitud de los productos para usarlo y dar un id nuevo en base a la cantidad
      id: this.productos.length + 1,
      // nombre: nombre,
      nombre,
      precio,
      cantidad,
      active
    }
    console.log(nuevoProducto);
    //push para agregarlo a la propiedad productos de inventario
    this.productos.push(nuevoProducto);
  },
  actualizarCantidad: function(nombre, cantidad) {
    let indice = this.encontrarProductoPorNombre(nombre);
  },
  encontrarProductoPorNombre: function(nombre){
    //findIndex me da -1 si es que no encuentro nada y 0 ó + en caso encuentre la posición de lo que estemos buscando
    let posicion = this.productos.findIndex(function(item) {
      return item.nombre === nombre
    })
    return posicion;
  }
}

inventario.agregarProducto("Chocolate", 5, 20);
inventario.agregarProducto("Pavos", 100, 10, false);

console.table(inventario.productos);

let a = inventario.encontrarProductoPorNombre("Chocolate");
console.log({ a });