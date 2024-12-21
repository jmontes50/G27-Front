/**
 * Vamos a representar 3 tragamonedas, donde cada tragamoneda es una promesa,
 * la idea es que por cada resultado podamos pasar al siguiente tragamonedas
 * cada tragamoneda demorara 01 segundo en responder
 */
// const tragamonedas1 = () => { return new Promise...}
const tragamonedas1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const probabilidad = Math.random();
      if (probabilidad >= 0.3) {
        resolve(20);
      } else {
        reject("Perdiste en tragamonedas 1");
      }
    }, 1000);
  });

const tragamonedas2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const probabilidad = Math.random();
      if (probabilidad >= 0.3) {
        resolve(40);
      } else {
        reject("Perdiste en tragamonedas 2");
      }
    }, 1000);
  });

const tragamonedas3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const probabilidad = Math.random();
      if (probabilidad >= 0.3) {
        resolve(100);
      } else {
        reject("Perdiste en tragamonedas 3");
      }
    }, 1000);
  });

const jugar = async () => {
    try {
        //encadenamiento de promesas
        //pero con await
        const res1 = await tragamonedas1();
        console.log(res1)
        const res2 = await tragamonedas2();
        console.log(res2)
        const res3 = await tragamonedas3();
        console.log(res3)
        //Promise.race //Promise.all
    } catch (error) {
        console.log(error)
    }
}
jugar();