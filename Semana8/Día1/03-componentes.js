const arrFrutas = [
    {
        id: 1,
        nombre: "Kiwi"
    },
    {
        id: 2,
        nombre: "Naranja"
    }
];

const principal = document.querySelector("#principal");

//crear una tarjeta por cada fruta en el arreglo

//que una función represente una parte de mi interfaz

const Tarjeta = (item) => {
    console.log("item:", item);
    //estamos creando 01 elemento div
    const divTarjeta = document.createElement("div");
    //lo estamos llenando de html
    divTarjeta.innerHTML = `
        <h2>${item.nombre}</h2>
        <button class="btn">Ver id</button>
    `
    const btn = divTarjeta.querySelector(".btn");
    console.log(btn);
    //estamos aislando la funcionalidad la lógica de esta parte de la interfaz
    //en una función
    btn.addEventListener("click", (ev) => {
        console.log("este es el origen del evento", ev.target);
        alert(`El id es ${item.id}`);
    })
    //retornando ese objeto elemento
    return divTarjeta;
}

arrFrutas.forEach((fru) => {
    const card = Tarjeta(fru);
    principal.appendChild(card);
})