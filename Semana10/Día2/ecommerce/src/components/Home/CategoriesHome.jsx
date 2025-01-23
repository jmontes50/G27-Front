import { useState, useEffect } from 'react';
import useGetAxios from '../../hooks/useGetAxios';

const CategoriesHome = () => {
  const URL = "https://json-server-vercel-git-main-osmar-montesinos-projects.vercel.app/categories"

  const { data, loading, error } = useGetAxios(URL);

  console.log(data);

  return (
    <div>CategoriesHome</div>
  )
}

export default CategoriesHome