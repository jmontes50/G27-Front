let animales = ["Gato", "Perro", "Paloma"];

//porque es una copía por referencía
let animales2 = animales;

animales2.push("Ratón");

console.log("animales", animales);

console.log("animales2", animales2);

//copia con spread operator, al hacer la copia podemos agregar nuevos items al arreglo
let animales3 = [...animales, "Pavo", "Cerdo"];

console.log("animales 3", animales3);

const plantas = ["Arbusto", "Pino", "Musgo", "Cactus"];

const floraYFauna = [...plantas, ...animales];

console.log("Mezclando arreglos", floraYFauna);