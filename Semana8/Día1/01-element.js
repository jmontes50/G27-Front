//1. necesito una referencia a lo quiero modificar utilizar, para eso los selectores
//2. ya con la referencia tengo propiedades y métodos a mi alcance porque el elemento sigue siendo un objeto

//querySelecto Obtiene 01 elemento y usa selectores como de CSS
// h1 {} en css
const h1 = document.querySelector("h1");

console.log(h1);

//cambio el contenido HTML que tiene 01 elemento
h1.innerHTML = `
    <code>Noticias Tech Navideñas</code>
`;