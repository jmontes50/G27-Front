let artista = {
  nombre: "Los Prisioneros",
  origen: "Chile",
  genero: ["Rock", "Pop", "Punk"],
  anioInicio: 1983,
  anioFinal: 2006,
  //los albums son varios, pero necesitamos presentarlos
  albums: [
    {
      nombreAlbum: "La voz de los 80's",
      lanzamiento: "13 Noviembre",
      formato: ["casete","LP", "CD"]
    },
    {
      nombreAlbum: "Pateando piedras",
      lanzamiento: "15 Setiembre 1986",
      formato: ["casete", "LP", "ciudad"]
    }
  ]
}

console.log(artista);

//acceder al valor de una propiedad con dot notation
console.log("Nombre: ", artista.nombre);
//acceder al valor usando bracket notation
//nombreObjeto["nombrePropiedad"]
console.log("Origen: ", artista["origen"]);
//desestructuración, conocer las propiedades de un objeto y en vez de referenciar al objeto indicamos que propiedades tiene:
//comunmente artista.anioInicio artista.anioFinal
// let { propiedadesDelObjeto } = nombreObjeto;
//como estar declarando variables con nombres de propiedades de un objeto
let { anioInicio, anioFinal } = artista;
console.log("Año Inicio:", anioInicio);

//deseamos solamente acceder a pop que esta en genero
// console.log(artista.genero);
console.log("dot notation: ", artista.genero[1]);
console.log("bracket notation", artista["genero"][1]);

//accedemos 1ero a artista -> albums -> [1] -> nombreAlbum
console.log(artista.albums[1].nombreAlbum);

//bracket notation
console.log(artista["albums"][0]["lanzamiento"]);

let propiedad = "formato";
//bracket notation donde el texto es una variable
console.log(artista["albums"][0][propiedad]);

function mostrarInfoAlbums (nombrePropiedad) {
  let resultado = artista.albums[0][nombrePropiedad];
  console.log(resultado)
}

let opcion = +prompt(`Ingrese la información de lo que desee mostrar
  1. nombre Album
  2. lanzamiento
  3. formato`)

if(opcion === 1){
  mostrarInfoAlbums("nombreAlbum")
} else if(opcion === 2){
  mostrarInfoAlbums("lanzamiento")
} else if(opcion === 3){
  mostrarInfoAlbums("formato")
}

//--------------------
console.log(typeof artista.albums[0].lanzamiento);
console.log(artista.albums[0].formato[1]);

//SEGÚN EL COLOR DESEAMOS INDICAR UN NIVEL DE RIESGO
//VERDE ES SEGURO, AMARILLO ES ADVERTENCIA, ROJO ES PELIGRO
/*
let color = "amarillo";

if(color === "red"){
  console.log("PELIGROOOO");
} else if (color === "amarillo"){
  console.log("ADVERTENCIA");
} else if (color === "verde"){
  console.log("SEGURO");
}

let mensajes = {
  red: "PELIGROOOOO",
  amarillo: "ADVERTENCIA",
  verde: "SEGURO"
}

console.log(mensajes[color])
*/