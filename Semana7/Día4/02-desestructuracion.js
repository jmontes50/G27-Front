//cuando son varios parámetros y hay probabidad de error humano podemos desestructurar los parámetros y enviar un objeto
function matricula({ nombre, telefono, direccion }) {
    console.log(`${nombre} con teléfono ${telefono} y dirección ${direccion}, se matrículo`);
}

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
const { nombre, edad, telefono, direccion } = persona;

console.log(nombre);
console.log(edad);

// matricula(nombre, direccion, telefono);
matricula(persona)