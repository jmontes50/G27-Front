import { obtenerProductos } from "./servicios.js";

//que tenga la lógica de mi app
const app = async () => {
  const raiz = document.getElementById("root");
  const divRow = document.createElement("div");
  divRow.classList.add("row");

  raiz.appendChild(divRow);
  // divRow.appendChild(divCols);

  const productos = await obtenerProductos(); //el array de productos de mockapi
  console.log(productos);

  productos.forEach((producto) => {
    const card = divCard(producto);
    divRow.appendChild(card);
  });
}

const divCard = (producto) => {
  console.log("divCard", producto);
  //crear un objeto elemento, un div
  const div = document.createElement("div");
  //agregar una clase a un elemento
  div.setAttribute("class","card col-12 col-md-6 col-lg-4");
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