const URL = "https://67661e3d410f84999656dd1e.mockapi.io/productos"

const obtenerProductos = async () => {
    try {
        const respuesta = await fetch(URL);
        if(respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos;
        } else {
            throw new Error("la petición Falló");
        }
    }
    catch (error) {
        console.log(error)
    }
}

export {
    obtenerProductos
}