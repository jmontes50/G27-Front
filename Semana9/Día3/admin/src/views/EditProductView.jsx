//saber que producto -> obtener la data del producto -> editarla -> mandar la info editada
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { requestProductById, editProduct } from "../services/productService";
import Input from "../components/Input";
import Swal from "sweetalert2";

const EditProductView = () => {
  const [producto, setProducto] = useState({
    id:"",
    nombre:"",
    descripcion:"",
    precio:"",
    imagen:"",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const manejarInput = (ev) => {
    setProducto({
      ...producto,
      [ev.target.name]: ev.target.value,
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    await editProduct(id, producto);
    //con el await de sweetalert esperamos a que se cierre la alerta
    await Swal.fire({
      title:"Producto Actualizado",
      text:`${producto.nombre} se actualizo con éxito`,
      icon: "success"
    })
    //navegamos a la vista principal
    navigate('/');
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