import { useState, useEffect } from "react";
import { requestProducts, deleteProduct } from "../services/productService";
import TableData from "../components/TableData";
import Swal from "sweetalert2";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const cabeceras = ["nombre", "descripcion", "precio"]

  const manejarEliminar = async (id) => {
    const { isConfirmed, isDenied } = await Swal.fire({
      title:"Esta seguro(a) de eliminar el producto?",
      text:"Esta acción es irreversible",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No, Denegar",
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar"
    })
    // console.log({ isConfirmed, isDenied }) //booleanos
    if(isConfirmed){
      await deleteProduct(id);
      await Swal.fire({
        title:"Se eliminó correctamente el producto",
        icon:"success"
      })
      //1ra opción filtrar y actualizar el estado, consistencia
      const productsFiltered = products.filter((prod) => prod.id !== id);
      setProducts(productsFiltered);
      //2da opción seria tener getProducts() afuera del useEffect y volverlo a llamar
    }
  }

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
    <div className="container my-3">
      <h1>Panel</h1>
      <TableData 
        data={products}
        cabeceras={cabeceras}
        accionEliminar={manejarEliminar} 
      />
    </div>
  )
}

export default HomeView