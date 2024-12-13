let persona = {
    nombre: "Sabrina",
    edad:30,
    hobbies:["Jugar con sus gatos", "Cantar"],
    telefono:123458,
    direccion:"Barranco 777"
};

// const nombre = persona.nombre;
// const edad = persona.edad;

//desestructuración de objetos
const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);