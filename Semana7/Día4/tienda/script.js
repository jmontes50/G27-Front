import productos from "./data.js";

// console.log(productos);

const tienda = {
  productos: [...productos],

  agregarProducto: function(producto){
    // console.log("esto es this", this);
    let nuevoProducto = {
      //copia de producto que llega como argumento
      ...producto,
      id: this.productos.length + 1
    }
    this.productos.push(nuevoProducto);
  },
  buscarProductoPorNombre: function(nombre) {
    //que busque sin respetar mayúsculas o minúsculas
    //conversión a mayúsculas tanto del nombre a buscar como de los nombres en los productos
    //ya podemos buscar el producto, porque los nombres estarán en mayúsculas
    const nombreBusquedaMayus = nombre.toUpperCase();
    // console.log({ nombreBusquedaMayus });
    //método de arreglos que permite transformar un arreglo a otro arreglo
    const productosMayus = this.productos.map(function(item){
      return { ...item, nombre:item.nombre.toUpperCase() }
    })
    console.table(productosMayus);
  }
  /*
  // si intentamos usar una función flecha en un objeto no podremos acceder al this
  agregarProducto: (producto) => {
    console.log("esto es this", this);
  }
  */
};

let producto = {
  nombre: "Kit de limpieza",
  descripcionCorta: "lorem",
  precio: 10,
}
tienda.agregarProducto(producto);
console.log(producto);
console.table(tienda);
tienda.buscarProductoPorNombre("Smartphone");

