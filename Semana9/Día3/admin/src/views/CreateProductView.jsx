import { useState } from "react";
import Input from "../components/Input";

const CreateProductView = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
  });
  const manejarInput = (ev) => {
    setProducto({
      ...producto,
      [ev.target.name]: ev.target.value,
    });
  };
  const inputsACrear = ["nombre", "descripcion", "precio"];
  return (
    <div>
      <h1>Crear Producto</h1>
      {inputsACrear.map((item, i) => (
        <Input
          key={i}
          estado={producto}
          texto={item}
          manejarValor={manejarInput}
        />
      ))}
    </div>
  );
};
export default CreateProductView;
