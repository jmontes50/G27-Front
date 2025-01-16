import useGetAxios from "../hooks/useGetAxios";
import ProductCard from "../components/ui/ProductCard";
import Loading from "../components/ui/Loading";

const ProductsPage = () => {
  const URL =
    "https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/products";
  const { data, loading, error } = useGetAxios(URL);

  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);
  // if(loading){
    return <Loading />
  // }

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <h1 className="mb-10 text-4xl text-center">Productos</h1>
      {/* grilla */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* renderizado condicional */}
        {data
          ? data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductsPage;
