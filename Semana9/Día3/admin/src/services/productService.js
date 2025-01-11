import axios from "axios";

const URL = "https://67661e3d410f84999656dd1e.mockapi.io/productos";

const requestProducts = async () => {
  try {
    const response = await axios.get(URL);
    // console.log(response)
    if(response.status === 200) {
      return response.data; //si va bien retornamos los datos
    }
    throw new Error("Error al solicitar productos")
  } catch (error) {
    throw error;
  }
}

const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(URL, newProduct);
    console.log("response post", response)
    return response.data;
  } catch (error) {
    throw error
  }
}

const requestProductById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    if(response.status === 200) {
      return response.data;
    }
    throw new Error("No se pudo obtener el producto")
  } catch (error) {
    throw error
  }
}

const editProduct = async (id, productUpdated) => {
  try {
    const response = await axios.put(`${URL}/${id}`, productUpdated);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export {
  requestProducts,
  createProduct,
  requestProductById,
  editProduct,
  deleteProduct
}