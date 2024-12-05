let artista = {
  nombre: "Los Prisioneros",
  origen: "Chile",
  genero: ["Rock", "Pop", "Punk"],
  anioInicio: 1983,
  anioFinal: 2006
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
