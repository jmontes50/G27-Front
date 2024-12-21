
//1. si definimos 01 componente su nombre tiene que comenzar con Mayúscula
const App = () => {

  //2. tiene que retornar 01 solo elemento, puede ser un componente o HTML
  //lo que se retorne en el componente es lo que se va a mostrar en el navegador
  return (
    <div>
      <h1>¡Hola, React!</h1>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

//3. exportar el componente
export default App;