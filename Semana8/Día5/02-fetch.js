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
const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch("https://reqres.in/api/users?page=2");
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