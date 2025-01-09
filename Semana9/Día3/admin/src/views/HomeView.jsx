import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      //solicitamos los productos
      const productsObtained = await requestProducts();
      //actualizamos el estado cuando los obtenemos
      setProducts(productsObtained);
    }
    getProducts(); //ejecutamos la función
  }, []) //dejamos el array de dependencias de useEffect para que se ejecute solo 01 vez

  return (
    <div>HomeView</div>
  )
}

export default HomeView