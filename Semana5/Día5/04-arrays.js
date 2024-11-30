let frutas = ["Kiwi", "Naranja", "Piña", "Coco"];

console.log(frutas);

//Solamente usar, utilizar 01 item del array tengo que indicarlo por su índice/posición 

console.log(frutas[2]);

console.log(frutas[0]);

//Longitud, Galllina Tiene Huevos
console.log("Longitud frutas:", frutas.length);

//El tipo de .length en un arreglo, es númerico, esto es importante porque me permite hacer comparaciones, operaciones con este valor.
console.log("Tipo de .length", typeof frutas.length);

//-------------------------------------------
for(let i = 0; i < frutas.length; i++){
    //i va ir cambiando, va a ir mutando
    //incrementandose de 1 en 1
    //donde si i es = a 2 por ejemplo
    //es como si dijeramos frutas[2]
    console.log(frutas[i]);
}