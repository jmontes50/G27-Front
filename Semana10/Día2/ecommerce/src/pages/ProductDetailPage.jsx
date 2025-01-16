import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import Loading from "../components/ui/Loading";

const ProductDetailPage = () => {
  
  const { id } = useParams();

  const URL = `https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products/${id}`;
  const { data, loading, error } = useGetAxios(URL);

  console.log(data)
  if (loading) {
    return <Loading />
  }

  return (
    <div>ProductDetailPage</div>
  )
}

export default ProductDetailPage