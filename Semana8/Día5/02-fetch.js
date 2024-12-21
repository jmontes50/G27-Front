// fetch(url)  --> me va a dar una promesa
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    //es la respuesta, guía de remisión, 
    console.log(respuesta);
    //encadenamiento de promesas
    return respuesta.json();
})
.then((datos) => {
    //Gracias al método .json() podemos acceder a los datos
    //y lo da ya convertido a JS
    console.log(datos);
})
.catch((err) => {
    console.log(err);
})