//saber que producto -> obtener la data del producto -> editarla -> mandar la info editada
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { requestProductById } from "../services/productService";

const EditProductView = () => {
  const [producto, setProducto] = useState({
    id:"",
    nombre:"",
    descripcion:"",
    precio:"",
    imagen:"",
  });

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const productObtained = await requestProductById(id);
      setProducto(productObtained);
    }
    getProduct();
  }, [])
  return (
    <div>EditProductView</div>
  )
}

export default EditProductView