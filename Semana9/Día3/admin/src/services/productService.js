import axios from "axios";

const URL = "https://67661e3d410f84999656dd1e.mockapi.io/productos";

const requestProducts = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response)
  } catch (error) {
    throw error;
  }
}

export {
  requestProducts
}