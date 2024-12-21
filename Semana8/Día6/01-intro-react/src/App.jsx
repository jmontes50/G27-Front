//En react cuando importamos JSX o JS, no es necesario poner la extensión del archivo
//si es un import "estilos.css" si es necesario poner la extensión, si es algo que no sea js
import Titulo from "./Titulo";
import Boton from "./Boton";

import "./estilos.css"; //al importar css en react estos estilos son accesibles desde cualquier componente

//1. si definimos 01 componente su nombre tiene que comenzar con Mayúscula
const App = () => {

  const titulo = '¡Hola Mundo y React!';

  const saludar = () => {
    alert('Hola Mundo!!!!');
  }

  //2. tiene que retornar 01 solo elemento, puede ser un componente o HTML
  //lo que se retorne en el componente es lo que se va a mostrar en el navegador
  return (
    <div>
      {/* cada vez que deseemos mezclar o utilizar JS dentro del JSX tenemos que poner { js } */}
      {/* <h1>{titulo}</h1> */}
      {/* Para utilizar componentes lo vamos a poner como una etiqueta html */}
      <Titulo texto={titulo} region="Lima" />
      {/* Titulo(texto), Titulo("Holaaaa") */}
      <Titulo texto="Hello Woooorld!!!" region="Arequipa"/>
      <p>Lorem ipsum dolor sit amet.!!!! {10 + 20} </p>
      {/* es que toda etiqueta o componente tiene que estar cerrado, ya sea con una etiqueta de cierre o un autocierre*/}
      {/* para añadir clases de css a JSX tenemos que utilizar className */}
      <button onClick={saludar} className="texto-verde">
        Click!
      </button>
      <button onClick={() => alert('Hola Mundo!!!!')} >
        Click2!
      </button>
      <hr />
      <Boton texto="Click3" accion={saludar} />
      <hr />
    </div>
  )
}

//3. exportar el componente
export default App;