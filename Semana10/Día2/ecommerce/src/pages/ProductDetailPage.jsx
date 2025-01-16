import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import Loading from "../components/ui/Loading";

const ProductDetailPage = () => {
  
  const { id } = useParams();

  const URL = `https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products/${id}`;
  const { data, loading, error } = useGetAxios(URL);

  //no puedo desestructurar el id porque ya declaramos id más arriba
  const { nombre, descripcion, precio, precio_oferta, imagen, cantidad, estrellas, detalles } = data;

  console.log(data)
  if (loading) {
    return <Loading />
  }

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="object-cover w-full h-full overflow-hidden aspect-auto">
          <img src={imagen} alt={nombre} className="w-full"/>
        </div>
        <div className="mt-2">
          <h2 className="mb-5 text-3xl font-semibold">{nombre}</h2>
          <div className="mb-5 text-xl">
            <span className="me-2">S/ {precio_oferta.toFixed(2)}</span>
            <span className="line-through text-slate-600">S/ {precio.toFixed(2)}</span>
          </div>
          <p className="mb-5">{descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage