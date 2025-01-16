import useGetAxios from "../hooks/useGetAxios";

const ProductsPage = () => {
  const URL = "https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products";
  const { data, loading, error } = useGetAxios(URL);

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage