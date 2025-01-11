//saber que producto -> obtener la data del producto -> editarla -> mandar la info editada
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { requestProductById, editProduct } from "../services/productService";
import Input from "../components/Input";

const EditProductView = () => {
  const [producto, setProducto] = useState({
    id:"",
    nombre:"",
    descripcion:"",
    precio:"",
    imagen:"",
  });

  const { id } = useParams();

  const manejarInput = (ev) => {
    setProducto({
      ...producto,
      [ev.target.name]: ev.target.value,
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    await editProduct(id, producto);
  }

  const inputsACrear = ["nombre", "descripcion", "precio"];

  useEffect(() => {
    const getProduct = async () => {
      const productObtained = await requestProductById(id);
      setProducto(productObtained);
    }
    getProduct();
  }, []) //no va codigo aparte del jsx despues del useEffect

  return (
    <div className='container my-3'>
      <h1>Editar Producto</h1>
      <form onSubmit={manejarSubmit}>
        {inputsACrear.map((item, i) => (
          <Input 
            key={i}
            estado={producto}
            texto={item}
            manejarValor={manejarInput}
          />
        ))}
        <button className='btn btn-primary' type='submit'>
          Editar
        </button>
      </form>
    </div>
  )
}

export default EditProductView