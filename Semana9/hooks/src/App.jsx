import { useState } from "react";
import Dispara from "./Dispara";
import Observa from "./Observa";

const calcular = (a, b) => {
  return a + b;
};

const App = () => {
  //const [elValorAUsar, laFuncionQueActualizaElValor] = useState(valorInicial)

  /**código tradicional en JS
   * let elValorAUsar = valorInicial
   * const laFuncionQueActualizaElValor = (nuevoValor) => {
   *  elValorAUsar = nuevoValor
   * }
   */
  //CADA VEZ QUE CAMBIA UN ESTADO, MI COMPONENTE SE VUELVE A DIBUJAR
  let [valor, setValor] = useState(1);
  let [nombre, setNombre] = useState("Edmundo");

  const manejarClick = () => {
    setValor(valor + 1); //si valor es 1 --> lo incrementaria en 1 o sea 2
  };

  const actualizarValorConJS = () => {
    console.log("actualizandoooo");
    valor = valor + 1;
  };

  return (
    <div>
      <h1>Estado: {valor} </h1>
      <h2>{nombre}</h2>
      <h3>{calcular(10, 20)}</h3>
      <button onClick={manejarClick}>Incrementar</button>
      <button
        onClick={() => {
          setNombre("Edmundo FuentesRivera");
        }}
      >
        Cambiar Nombre
      </button>
      <Dispara 
        texto="Actualizar" 
        ejecutar={manejarClick}
        ejecutarConValor={setValor}
      />
      <Observa numero={valor} />
    </div>
  );
};

export default App;
