let frutas = ["Kiwi", "Naranja"];

console.log(frutas);

//Aunque no es exactamente cierto, todo en JS se puede tratar como un objeto
//la ventaja, ya tenemos herramientas preechas listas para utilizar

let texto = "Hola!";

console.log("Longitud:", texto.length); //sin paréntesis son propiedades

console.log("Mayús", texto.toUpperCase()) //como tiene (), es un método

let frase = "No compitas, Haz cumpitas";

console.log(frase.toLowerCase())

console.log(frase.indexOf("Haz")); //ubicar un texto o letra y retornar la primera posición donde encuentre una coincidencia

console.log(frase.includes("compitas")); //indica si una letra o palabra esta dentro de otro texto;

console.log(frase.includes("gato")); //si no lo encuentra da false