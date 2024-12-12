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
  agregarProducto: function(nombre, precio, cantidad){
    let nuevoProducto = {
      //estamos obteniendo la longitud de los productos para usarlo y dar un id nuevo en base a la cantidad
      id: this.productos.length + 1,
      // nombre: nombre,
      nombre,
      precio,
      cantidad,
      active: true
    }
    console.log(nuevoProducto);
    //push para agregarlo a la propiedad productos de inventario
    this.productos.push(nuevoProducto);
  }
}

inventario.agregarProducto("Chocolate", 5, 20);

console.table(inventario.productos);