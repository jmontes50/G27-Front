import { useState, useEffect } from "react"

const Formulario = () => {
  //componentes controlados, tener a un input amarrado a un estado
  const [nombre, setNombre] = useState("Jorge");
  const [apellido, setApellido] = useState("Montesinos");

  const manejarNombre = (ev) => {
    console.log(ev.target.value);
    setNombre(ev.target.value);
  }

  //pongamos la lógica
  //el useEffect se utiliza justo antes del return del componente
  //cada vez que se actualice se dispara esta función
  useEffect(() => {
    console.log("cambiando!")
  })

  return (
    // <></> Fragment, no genera ninguna etiqueta pero si sirve para envolver otros elementos/etiquetas
    <>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={manejarNombre}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input
          id="apellido"
          type="text"
          placeholder="Ingrese su apellido"
          value={apellido}
          onChange={(ev) => {setApellido(ev.target.value)}}
        />
      </form>
    </>
  )
}

export default Formulario