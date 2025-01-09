import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    requestProducts();
  }, []) //dejamos el array de dependencias de useEffect para que se ejecute solo 01 vez

  return (
    <div>HomeView</div>
  )
}

export default HomeView