import { useState, useEffect } from "react";

const Peticion = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //1 hacemos la petición
    fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos")
      .then((respuesta) => {
        //2. obtenemos la respuesta pero necesitamos la data, retornamos la promesa de .json
        return respuesta.json();
      })
      .then((data) => {
        //3. ya con la data, actualizamos el estado
        console.table(data);
        setProductos(data);
      });
      //Al hacer una petición es importante colocar como 2do argumento del useEffect un [] vacio, para que solo se ejecute 01 vez el useEffect
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {/* renderizado de listas, array de datos -----> array de jsx(divs) */}
      {productos.map((item, indice) => (
        // se aplica la regla de solamente retornar 01 solo elemento, ya adentro puede ir más html/jsx
        //pero cada uno de estos elementos necesita un key, que tiene que tener un valor único
        <div key={item.id}>
          <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Peticion;
