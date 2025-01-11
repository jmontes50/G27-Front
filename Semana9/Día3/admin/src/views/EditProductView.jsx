//saber que producto -> obtener la data del producto -> editarla -> mandar la info editada
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EditProductView = () => {
  const { id } = useParams();
  
  return (
    <div>EditProductView</div>
  )
}

export default EditProductView