import Padre from "./components/Padre"

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <hr/>
      <Padre titulo="Bebidas">
        <h3>
          Contenido HTML 
          dentro del componente
        </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, odit.</p>
      </Padre>

    </div>
  )
}

export default App