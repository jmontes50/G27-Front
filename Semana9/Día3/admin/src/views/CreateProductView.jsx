import { useState } from "react";
import Input from "../components/Input";
import { createProduct } from "../services/productService";

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

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    await createProduct(producto);
  }

  const inputsACrear = ["nombre", "descripcion", "precio"];

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={manejarSubmit}>
        {inputsACrear.map((item, i) => (
          <Input
            key={i}
            estado={producto}
            texto={item}
            manejarValor={manejarInput}
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};
export default CreateProductView;
