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

//El <code> previo paso de ser un string a un elemento
//pero para poder utilizarlo tengo que asegurarme que ESTE EN EL NAVEGADOR para invocarlo
const codeH1 = document.querySelector("code");

console.log(codeH1);

//En vez de inyectar HTML como texto/string
//Algo que podemos hacer es crear 01 objeto element de la nada
//document.createElement me permite crear cualquier elemento
const imagen = document.createElement("img");
console.log("imagen", imagen);
imagen.src = "https://i.pinimg.com/550x/7c/18/65/7c186515514684275ffebddca96dab21.jpg";
//element.setAttribute("nombreatributo", "valoratributo");
imagen.setAttribute("alt", "mi ipad");
//los valores con unidades se colocan como texto
imagen.style.width = "300px";

const regalosSection = document.querySelector("#regalos");

regalosSection.appendChild(imagen);

//creemos el objeto párrafo
const parrafoRegalos = document.createElement("p");
//innerText es el texto del elemento
parrafoRegalos.innerText = "Los mejores regalos para programadores(as)";
//podemos ajustar propiedades
parrafoRegalos.style.backgroundColor = "red";
//añadirlo a otro elemento existente
regalosSection.appendChild(parrafoRegalos);

//combinando innerHTML con createElement
const cabalasSection = document.querySelector("#cabalas");

//1. crear el elemento
//2. después añadirle el html a ESE elemento creado

const cabala3 = "Barrer, limpieza del hogar";

let ulCabalas = document.createElement("ul");

ulCabalas.innerHTML = `
    <li id="cabala1">Comer uvas</li>
    <li id="cabala2">Lentejas en los bolsillos</li>
    <li id="cabala3">${cabala3}</li>
`;

const liCabala1 = ulCabalas.querySelector("#cabala1");

console.log("mi LI", liCabala1);

liCabala1.innerText = "Comer 12 pasas";

cabalasSection.appendChild(ulCabalas);