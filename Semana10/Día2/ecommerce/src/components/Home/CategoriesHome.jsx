import useGetAxios from "../../hooks/useGetAxios";

const CategoriesHome = () => {
  const URL =
    "https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/categories";

  const { data, loading, error } = useGetAxios(URL);

  return (
    <div>
      <h2 className="my-10 text-3xl text-left">Shop by Categories</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {data
          ? data.map((category) => (
              <div className="" key={category.id}>
                {category.nombre}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CategoriesHome;
