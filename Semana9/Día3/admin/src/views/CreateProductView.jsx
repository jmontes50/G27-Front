import { useState } from "react";
import Input from "../components/Input";
import { createProduct } from "../services/productService";
import Swal from "sweetalert2";

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
    Swal.fire({
      title:"Producto Creado",
      text:`${producto.nombre} se creó con éxito!`,
      icon: "success",
    })
  }

  const inputsACrear = ["nombre", "descripcion", "precio"];

  return (
    <div className="container my-3">
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
