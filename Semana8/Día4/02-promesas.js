//hornear -> prepararCubierta -> decorar
/*
const hornear = (funcionCallback) => {
  setTimeout(() => {
    // console.log("horneando")
    //aparte de demorar no sabemos cuál va a ser el resultado
    const probabilidad = Math.random(); //da un número aleatorio entre 0 y 1, ej 0.565 0.85464 0.334543
    console.log(probabilidad)
    if (probabilidad >= 0.5) {
      //éxito
      // return "torta horneada";
      funcionCallback("torta horneada");
    } else {
      //torta se quemó
      // return "torta quemada";
      funcionCallback("torta quemada");
    }
  }, 4000);
};

// const resHorneado = hornear();
// console.log(resHorneado);

hornear((resHorneado) => {
  console.log(resHorneado);
  // prepararCubierta(resHorneado, () => {})
})
*/

const hornear = () => {
  //resolve va a ser resultado positivo
  //reject va a ser un resultado negativo
  return new Promise((resolve, reject) => {
    //ponemos la tarea asíncrona
    setTimeout(() => {
      const probabilidad = Math.random();
      console.log(probabilidad);
      if (probabilidad >= 0.2) {
        const result = "Torta Horneada"
        resolve(result)
      } else {
        reject("Torta quemada")
      }
    }, 4000);
  });
};

const prepararCubierta = (torta) => {
  return new Promise((resolve, reject) => {
    //tarea asíncrona
    setTimeout(() => {
      resolve(`${torta} y cubierta preparada`);
      // reject("se fundio el microondas");
    }, 3000)
  })
}

hornear()
.then((res) => {
  console.log(res);
  //encadenamiento de promesas, retorna una nueva promesa
  return prepararCubierta(res);
})
.then((cubierta) => {
  console.log(cubierta)
})
.catch((err) => {
  console.log(err);
})  


