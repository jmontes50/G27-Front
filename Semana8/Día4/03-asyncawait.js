// const hornear = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Torta horneada");
//     })
// }

const hornear = async () => {
    return "Torta Horneada"; //resolve
    // throw "Torta quemada"; //reject
    // setTimeout(() => {
    //     return "Torta Horneada"; //resolve
    // }, 2000)
}


// hornear()
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// });

const proceso = async () => {
    try {
        //intenta esto
        const resultado = await hornear(); //then, resolve,return
        console.log(resultado);
    } catch (error) { //catch, reject, throw
        //pero si encuentro un error lo capturo
        console.log(error)
    }
}
proceso();
