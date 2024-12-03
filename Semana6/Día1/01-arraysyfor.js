// for (inicializador; limite; actualizador){
//     //lo que se va a repetir
// }
//i += 2 -----> i = i + 2;

for(let i = 0; i < 10; i+=2){
    console.log(`i es: ${i}`);
}

let animales = [
  "vaca",
  "gato",
  "pollo"
]

console.log(animales)

console.log("ave:", animales[2]);

console.log("-------------");

console.log(animales.length);

for(let i = 0; i < animales.length; i++){
  console.log(`El animal en la posición ${i} es ${animales[i]}`);
}