import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";
import TableData from "../components/TableData";

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
    <div>
      <h1>Panel</h1>
      <TableData data={products} />
    </div>
  )
}

export default HomeView