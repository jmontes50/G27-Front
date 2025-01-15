import { NumberContextProvider } from "./context/NumberContext";
import Padre from "./components/Padre";

const App = () => {
  return (
    <NumberContextProvider>
      {/* La idea es que componentes, html, rutas, otros contextos esten dentro */}
      <div>
        <h1>App</h1>
        <hr />
        <Padre titulo="Bebidas">
          <h3>Contenido HTML dentro del componente</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            odit.
          </p>
        </Padre>
      </div>
    </NumberContextProvider>
  );
};

export default App;
