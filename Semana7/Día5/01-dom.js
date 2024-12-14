console.log("window", window);
//window representará la pestaña del navegador
console.log(
  window.navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  })
);
//document representerá el documento HTML
console.log("document", document);

//Selectores de JS
//obtiene un elemento por su id
const miTitulo = document.getElementById("titulo");

console.log(miTitulo);

//.style va a tener todas las propiedades de CSS
miTitulo.style.color = "red";
//innerText cambia el contenido de un elemento
miTitulo.innerText = "Bitácora";

//obtenemos una lista de elementos con clase link
const links = document.getElementsByClassName("link");

console.log("Links:", links);
//generemos un arreglo con Array.from()
const arregloLinks = Array.from(links)

console.log("Arreglo de links", arregloLinks);

arregloLinks.forEach(function(elementoLi) {
    elementoLi.style.color = "blue";
    if(elementoLi.innerText === "link2"){
        elementoLi.style.color = "green";
        // font-weight: "bold"; css kebab-case
        //debemos usar camelCase
        elementoLi.style.fontWeight = "bold";
    }
})