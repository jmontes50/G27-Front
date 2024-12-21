
//1. si definimos 01 componente su nombre tiene que comenzar con Mayúscula
const App = () => {

  const titulo = '¡Hola Mundo y React!';

  //2. tiene que retornar 01 solo elemento, puede ser un componente o HTML
  //lo que se retorne en el componente es lo que se va a mostrar en el navegador
  return (
    <div>
      {/* cada vez que deseemos mezclar o utilizar JS dentro del JSX tenemos que poner { js } */}
      <h1>{titulo}</h1>
      <p>Lorem ipsum dolor sit amet.!!!! {10 + 20} </p>
      {/* es que toda etiqueta o componente tiene que estar cerrado, ya sea con una etiqueta de cierre o un autocierre*/}
      <hr />
    </div>
  )
}

//3. exportar el componente
export default App;