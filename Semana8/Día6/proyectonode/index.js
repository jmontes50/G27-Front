//la forma que node importa librerias es diferente a que conocemos
//import axios from "axios"; //ES MODULES - es la forma más común
//const axios = require("axios"); //COMMONJS - es la forma que usa node de forma nativa
//Todo lo que esta en node_modules se puede importar sin poner la ruta, se importa directamente
const axios = require("axios");

axios.get("https://67661e3d410f84999656dd1e.mockapi.io/productos")
.then((respuesta) => {
    //en 01 sola respuesta me da tanto la respuesta HTTP con su codigo de estado, el status Text y la data ya lista para utilizar
    //NO ES NECESARIO Hacer un respuesta .json(), no hay necesidad
    console.log(respuesta);
    console.log("**********");
    console.log(respuesta.data);
});