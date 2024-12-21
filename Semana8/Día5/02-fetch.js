// fetch(url)  --> me va a dar una promesa
//url404 - https://reqres.in/api/unknown/23
/*
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    //es la respuesta, guía de remisión, 
    console.log(respuesta);
    //encadenamiento de promesas
    if(respuesta.status === 200) {
        //validamos que el código de status sea el correcto
        //recién mandamos el .json
        return respuesta.json();
    } else {
        throw new Error("la petición no se completo");
    }
})
.then((datos) => {
    //Gracias al método .json() podemos acceder a los datos
    //y lo da ya convertido a JS
    console.log(datos);
})
.catch((err) => { 
    console.log(err);
})
*/
//GET - Obtener
const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos");
        console.log(respuesta);
        if(respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos)
        }else{
            throw new Error("la petición no se completo");
        }
    } catch (error) {
        console.log(error)
    }
}
obtenerUsuarios();

//POST - Crear
const crearProducto = async (nuevoProducto) => {
    try {
        //opciones para la petición, POST, PUT, Tenemos que indicarle mediante un objeto la operación a realizar
        const opciones = {
            method: "POST", //Método HTTP
            headers: {
                "Content-Type": "application/json" //texto, binarios, json, 
            },
            body: JSON.stringify(nuevoProducto) //Datos a enviar
        }
        const resultado = await fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos", opciones);
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}

const prod = {
    nombre:"Chocolates",
    descripcion: "Chocolates de caja",
    precio: 20,
    imagen:"https://kuyay.pe/wp-content/uploads/2024/05/MG_3131-scaled.jpg"
}
crearProducto(prod);

