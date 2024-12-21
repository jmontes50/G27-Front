import { obtenerProductos } from "./servicios.js";

//que tenga la lógica de mi app
const app = async () => {
  const raiz = document.getElementById("root");

  const productos = await obtenerProductos();
  console.log(productos);
}

const divCard = (producto) => {
  //crear un objeto elemento, un div
  const div = document.createElement("div");
  //agregar una clase a un elemento
  div.classList.add("card");
  //le da su estructura y concantena con las propiedades de cada producto
  div.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">${producto.precio}</p>
    </div>
  `;
  return div;
}

app();