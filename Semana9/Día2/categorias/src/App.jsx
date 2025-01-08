import { useState, useEffect } from 'react';
import categorias from './data';

const App = () => {
  //categoria he seleccionado
  const [categoria, setCategoria] = useState("");
  //productos en base a la categoria
  const [productos, setProductos] = useState([]);

  const manejarSelectCategoria = (ev) => {
    // console.log("select", ev.target.value);
    setCategoria(ev.target.value);
  }

  useEffect(() => {
    console.log("Cambio!!!", categoria);
    const posicionEncontrada = categorias.findIndex((item) => item.categoria === categoria);
    console.log("Posición!", posicionEncontrada);
    const productosEncontrados = categorias[posicionEncontrada].productos;
    setProductos(productosEncontrados);
    // setProductos([...productosEncontrados, "tarjeta de regalo"]);
  }, [categoria])

  return (
    <div>
      <h1>Mostrar Productos</h1>
      <label htmlFor="selectCategoria">Seleccione la categoría</label>
      <select id="selectCategoria" onChange={manejarSelectCategoria}>
        {categorias.map((item, i) => (
          <option key={i} value={item.categoria}>
            {item.categoria}
          </option>
        ))}
      </select>
      
      <hr />
      <h2>Productos</h2>
      <ul>
        {productos.map((prod, i) => (
          <li key={i}>{prod}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default App