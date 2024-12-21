import { obtenerProductos } from "./servicios.js";

//que tenga la lógica de mi app
const app = async () => {
  const raiz = document.getElementById("root");

  const productos = await obtenerProductos();
  console.log(productos);
}
app();