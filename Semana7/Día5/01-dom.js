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
const miTitulo = document.getElementById("titulo");

console.log(miTitulo);

//.style va a tener todas las propiedades de CSS
miTitulo.style.color = "red";
//innerText cambia el contenido de un elemento
miTitulo.innerText = "Bitácora";
