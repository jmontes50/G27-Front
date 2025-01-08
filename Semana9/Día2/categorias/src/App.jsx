import { useState, useEffect } from 'react';
import categorias from './data';

const App = () => {
  //categoria he seleccionado
  const [categoria, setCategoria] = useState("");
  //productos en base a la categoria
  const [productos, setProductos] = useState([]);

  return (
    <div>
      <h1>Mostrar Productos</h1>
      <label htmlFor="selectCategoria">Seleccione la categoría</label>
      <select id="selectCategoria">
        {categorias.map((item, i) => (
          <option key={i} value={item.categoria}>
            {item.categoria}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App