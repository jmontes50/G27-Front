let restaurante = {
    //propiedades que guardan datos, nombre un string, platillos un arreglo
    nombre: "Panchita",
    platillos: ["Cau cau", "Papa rellena", "Bistec a la sartén"],
    //MÉTODO, es una propiedad pero que en vez de guardar datos, tendrá una función
    //definimos el nombrePropiedad: function(){} no va a llevar nombre
    listarPlatillos: function () {
        console.log("LISTANDO PLATILLOS");
        //console.table muestra muy bien datos de arreglos y objetos
        console.table(restaurante.platillos);
    },
    //nombre funcion () { codigo dentro de la función }
    agregarPlatillo(nuevoPlatillo){
        restaurante.platillos.push(nuevoPlatillo);
        return "Se agrego un nuevo platillo exitosamente"
    }
}

console.log(restaurante.platillos[0]);
//cuando utilizamos/invocamos una función tenemos que llamar por su nombre y poner ()
restaurante.listarPlatillos();

let resultado = restaurante.agregarPlatillo("Chicharrón");
console.log(resultado);

restaurante.listarPlatillos();

// console.log("viendo restaurante", restaurante);